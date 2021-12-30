import Axios from 'axios';
import { useEffect,useState } from 'react';

import OrderDetailModal from '../../modals/OrderDetailModal';

const UserOrders = () => {

    const [orderId,setOrderId] = useState(0);
    const [orderDetail,setOrderDetail] = useState(false);
    const [orders,setOrders] = useState([]);
    const imageLocation = 'http://localhost:5000/products/';

    const user_id = localStorage.getItem('id');
    
    useEffect(() => {
        Axios.get(`/api/customer/orders/${user_id}`)
            .then((res) => {
                setOrders(res.data);
            })
    },[user_id])

    // view item in modal view
    const orderInfo = (id) => {
        setOrderId(id);
        setOrderDetail(true);
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
           <div className="max-w-7xl w-full">
                <div className="px-12 py-12 w-full text-gray-100">
                    <div className="bg-gray-900 rounded-2xl p-6 max-h-96 overflow-y-scroll">
                        <h1 className="text-4xl font-semibold">My Orders</h1>
                        <h3 className="text-xl font-semibold mt-3">Items</h3>
                        { orders.length < 1 ? <h1 className="animate-pulse font-bold text-xl text-red-500">No Items ordered yet...</h1> : 
                            orders.map((order) => (
                            <div className="border-t border-gray-400 mt-2" key={order.id}>
                                <div className="flex mt-2">
                                    <img className="w-44 m-2 object-cover" src={`${imageLocation}/${order.product_image}`} alt={`${order.item_name}`} />
                                    <div className="w-full flex flex-col">
                                        <h2>{order.brand_name} {order.item_name}</h2>
                                        <h2 className="font-semibold text-lg">Description</h2>
                                        <p>{order.description}</p>
                                        <div className="flex justify-between"> 
                                            <p>Qty: {order.quantity}</p>
                                            <button onClick={() => orderInfo(order.id)} className="bg-blue-400 p-2 rounded-md mt-2">More Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
           </div>
           { orderDetail && <OrderDetailModal orderId={orderId} setOrderDetail={setOrderDetail} /> }
        </div>
    )
}

export default UserOrders
