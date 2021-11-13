import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import LogoutModal from '../../modals/LogoutModal';
import PaymentModal from '../../modals/PaymentModal';

const Checkout = ({ logoutMssg,setPaymentMssg,paymentMssg }) => {

    // get the id of the user, the cart id of the ordered item of the customer and also insert the payment id to be chosen by the
    // customer

    const [cartContents, setCartContents] = useState([]);
    const [paymentmethods,setPaymentmethods] = useState([]);
    const [subtotal,setSubtotal] = useState(0);
    const id = window.localStorage.getItem("id");
    const user = window.localStorage.getItem("user");

    // inputs of customer
    const [payment,setPayment] = useState('');
    const referenceNumber = Math.floor(100000 + Math.random() * 90000000000000);
    // get date and time to be inserted in db
    const hour = new Date().getHours();
    const amPm = hour >= 12 ? 'PM' : 'AM';
    const dateTime = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' ' + hour + ':' + new Date().getMinutes() + ` ${amPm}`;
 
    const imageLocation = 'http://localhost:5000/products/';
    const paymentImage = 'http://localhost:5000/payment image/';

    const history = useHistory();

    useEffect(() => {
        Axios.get(`/customer/cart/${id}`)
        .then((res) => {
            setCartContents(res.data);
            const totalPrice = res.data.reduce((currentTotal, cartContent) => {
                return Number(cartContent.Inventory.product_price * cartContent.quantity) + currentTotal;
            },0)
            setSubtotal(totalPrice);
        })
    },[id])

    useEffect(() => {
        Axios.get('/api/payment-method')
        .then((res) => {
            setPaymentmethods(res.data);
        })
    },[])

    // get order reference here
    useEffect(() => {
        Axios.get('/api/customer/orders')
        .then((res) => {
            console.log(res.data);
        })
    })

    // order item function
    const orderItem = (e) => {
        e.preventDefault();
        
        Axios.post('/api/customer/orders',{ transactionId: Number(id), paymentId: Number(payment), orderedDate: dateTime, referenceNum: referenceNumber })
        .then((res) => {
            console.log(res.data);
            // history.push(`/profile/${user}`);
            setPaymentMssg(true);
        })
    }

    return (
        <div className="flex justify-center">
        <Helmet><title>Bicycle System | Checkout</title></Helmet>
           <div className="w-full max-w-7xl px-16">
                <div className="flex gap-2 items-center">
                    <img className="w-40 h-32 object-cover" src="/image/tulin.png" alt="tulin-logo" />
                    <h1 className="font-bold text-3xl select-none">Checkout</h1>
                </div>
                <div className="flex gap-2">
                    <div className="bg-gray-50 w-3/5 py-6 px-6 shadow-xl rounded-lg h-96 overflow-y-scroll">
                        <h2 className="font-bold text-2xl">Product Ordered</h2>
                        { cartContents && cartContents.map((cartContent) => (
                            <div className="flex mt-2 gap-2" key={cartContent.id}>
                                <img className="w-44 object-cover border border-gray-900" src={`${imageLocation}${cartContent.Inventory.product_image}`} alt={ cartContent.Inventory.item_name } />
                                <div className="w-full relative">
                                    <h2 className="text-xl font-semibold">{ cartContent.Inventory.brand_name }</h2>
                                    <span className="text-base">{ cartContent.Inventory.item_name }</span>
                                    <p>{ cartContent.Inventory.description }</p>
                                    <div className="flex justify-between absolute bottom-0 w-full items-center">
                                        <span className="text-gray-700 text-xs">Qty. { cartContent.quantity }</span>
                                        <span className="text-yellow-500 font-semibold">₱{ cartContent.Inventory.product_price * cartContent.quantity }</span>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    <form onSubmit={orderItem} className="bg-gray-50 w-2/5 px-6 py-6 shadow-xl rounded-lg h-96 relative">
                        <h2 className="font-bold text-2xl">Order Summary</h2>
                        <div className="flex justify-between w-full">
                            <span className="text-lg">Subtotal ({ cartContents.length } item/s)</span>
                            <span>₱{ subtotal }</span>
                        </div>   
                        <div className="flex justify-between w-full mt-5">
                            <span className="text-lg">Total:</span>
                            <span className="text-yellow-500 font-semibold text-2xl"> ₱{ subtotal }</span>
                        </div>
                         <div>
                            <h2 className="font-bold text-2xl">Payment Method</h2>
                           { paymentmethods && paymentmethods.map((paymentmethod) => (
                            <div key={paymentmethod.id} className="flex mt-2 justify-between bg-white p-2 shadow-xl rounded items-center cursor-pointer">
                                <div className="flex gap-2 items-center">
                                    <img className="h-10 object-cover filter invert-0" src={ `${paymentImage}${paymentmethod.payment_method_image}` } alt={ paymentmethod.payment_method } />
                                    <span>{ paymentmethod.payment_method }</span>
                                </div>
                                <input className="cursor-pointer" type="radio" value={paymentmethod.id} 
                                onChange={(e) => setPayment(e.target.value)} 
                                name="paymentmethod" 
                                required
                                />
                            </div>
                           )) }
                        </div>
                        <button className="bg-gray-900 w-full p-2 mt-2 rounded text-gray-100 font-semibold text-xl">Place Order Now</button>
                    </form>
                </div>
            </div>
            { logoutMssg && <LogoutModal /> }
            { paymentMssg && <PaymentModal setPaymentMssg={setPaymentMssg} /> } 
        </div>
        
    )
}

export default Checkout