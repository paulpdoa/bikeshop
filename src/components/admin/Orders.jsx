import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { useState,useEffect } from 'react';

import LogoutModal from '../modals/LogoutModal';
import OrderDetailModal from '../modals/OrderDetailModal';

const Orders = ({date,logoutMssg,orderDetail,setOrderDetail}) => {

    const imageLocation = 'http://localhost:5000/products/';
    const [orders, setOrders] = useState([]);

    // Pass the information to the MORE INFO modal
    const [orderId,setOrderId] = useState(0);
    const getInfo = (id,bool) => {
        setOrderDetail(bool);
        setOrderId(id);
    } 

    useEffect(() => {
        const abortCont = new AbortController();
        
        Axios.get('/api/customer/orders',{ signal: abortCont.signal })
        .then((res) => {
            setOrders(res.data);
        })

        return () => abortCont.abort;
    },[orders]);

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Orders</title></Helmet>
            <div className="fit-container">
                <div className="order-title">
                    <h1 className="titles">Orders</h1>
                    <p>{date}</p>
                </div>

                <div className="main-card">
                    <div className="order-cards">
                        <h1 className="order-card-title">New Orders</h1>
                        { orders.length < 1 ?  
                            <div className="h-full w-full flex items-center justify-center">
                                <h1 className="text-gray-400 animate-pulse text-3xl font-bold">No orders yet...</h1>
                            </div>
                            :
                            orders && orders.map((order) => (
                            <div className="flex mt-10" key={order.order_id}>
                                <div className="flex gap-2 w-full relative">
                                    <img className="w-32 h-full object-cover border border-gray-900" src={`${imageLocation}${order.product_image}`} alt={order.item_name}/>
                                    <div className="w-1/2">
                                        <h2 className="font-semibold text-lg">{ order.brand_name }</h2>
                                        <h3 className="font-semibold">{order.item_name}</h3>
                                        <h3 className="font-semibold">{order.description}</h3>
                                        <span className="text-sm">Qty.{order.quantity}</span>
                                    </div>
                                    <button onClick={() => getInfo(order.order_id,true)} className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                                </div>
                            </div>   
                        ))
                         }  
                    </div>

                    <div className="order-cards">
                        <h1 className="order-card-title">Orders</h1>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-cards mt-10">
                    <h3 className="order-card-title">Recent Orders</h3>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* logout modal */}
            { logoutMssg && <LogoutModal /> }
            { orderDetail && <OrderDetailModal setOrderDetail={ setOrderDetail } orderId={orderId} /> }
        </div>
    )
}

export default Orders
