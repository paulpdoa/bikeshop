import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import LogoutModal from '../modals/LogoutModal';
import Axios from 'axios';
import { useEffect,useState } from 'react';

const Cart = ({ logoutMssg }) => {

    const [carts,setCarts] = useState('');
    const [cartLength,setCartLength] = useState(0);
    const [total,setTotal] = useState(0);

    const id = window.localStorage.getItem("id");

    useEffect(() => {
        Axios.get(`/customer/cart/${id}`)
        .then((res) => {
          setCarts(res.data)
          setCartLength(res.data.length)
            const totalPrice = res.data.reduce((currentTotal,data) => {
                    return Number(data.Inventory.product_price * data.quantity) + currentTotal;
            },0)
            setTotal(totalPrice);
        })
    },[id])
    // removing items
    const removeItem = (item) => {
       const filteredItem = carts.filter((cart) => item !== cart.id);
       const removedItem = carts.filter((cart) => item === cart.id);
       Axios.delete(`/cart/${removedItem[0].id}`)
       .then((res) => {
           console.log(res.data.mssg);
           setCarts(filteredItem);
       })
    }

    return (
        <div className="flex justify-center">
        <Helmet>
            <title>Bicycle System | Shopping Cart</title>
        </Helmet>
        <div className="max-w-7xl py-12 px-24 w-full">
            <motion.div 
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ type:'spring',stiffness: 50, duration:0.5 }}
            className="flex justify-between">
                <h1 className="font-bold text-2xl select-none">Your Shopping Cart({cartLength + ' item/s'})</h1>
                <div className="">
                    <h2 className="font-medium text-2xl select-none">SUBTOTAL ₱{total}</h2>
                    <button className="p-2 bg-green-600 text-gray-200 rounded-md mt-5 float-right">Checkout</button>
                </div>
            </motion.div>
            <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:1.0 }}
            className="w-full mt-5">
               <thead>
                    <tr className="text-left bg-gray-200 text-gray-800 select-none"> 
                        <th className="row-span-2">Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
               </thead>
               { carts.length <= 0 ? 
               <tbody>
                <tr className="flex justify-center items-center absolute mt-32 ml-64">
                   <td className="text-4xl text-gray-400 font-bold">Add something in your cart now!</td>
                </tr>
               </tbody>
                : 
               carts.map((cart) => (
                <tbody key={cart.id}>
                    <tr>
                        <td className="flex mt-2 select-none">
                            <img className="w-60 h-32 rounded-xl" src={`http://localhost:5000/products/${cart.Inventory.product_image}`} alt={cart.Inventory.item_name} />
                            <div className="px-8">
                                <p className="text-xl font-semibold text-gray-700">{cart.Inventory.description}</p>
                                <p className="text-gray-800">Blue, Campagnolo</p>
                                <p className="text-gray-700 text-sm mt-2">Stock Status: Ships from Warehouse</p>
                                <p className="text-gray-700 text-sm mt-2">Available In: Quality Bike Parts - CENTRAL</p>
                                <div className="flex text-gray-700 text-sm mt-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                                    </svg>
                                    <p>No Air Shipping</p>
                                </div>
                            </div>
                        </td>
                        <td className="select-none">₱{cart.Inventory.product_price}</td>
                        <td>
                            <input className="w-1/2 text-center outline-none border border-gray-400 rounded-sm ml-14" readOnly type="number" name="quantity" value={cart.quantity} />
                            <div className="mt-2 flex justify-around text-gray-700 text-sm">
                                <span>Update</span>
                                <span className="cursor-pointer transition duration-300 hover:text-red-500" onClick={() => removeItem(cart.id)}>Remove</span>
                            </div>
                        </td>
                        <td className="select-none">₱{ cart.Inventory.product_price * cart.quantity }</td>
                    </tr>
                </tbody>
               )) }
            </motion.table>
            </div>
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Cart
