import { motion } from "framer-motion";
import { useEffect,useState } from 'react';
import Axios from 'axios';

const OrderDetailModal = ({ setOrderDetail,orderId }) => {

    const imageLocation = 'http://localhost:5000/products/'
    const [order,setOrder] = useState([]);

    useEffect(() => {
        Axios.get(`/api/customer/info/${orderId}`)
        .then((res) => {
            setOrder(res.data[0]);
        })
    },[orderId])

    // deletes an item
    const onDelete = (e) => {
        e.preventDefault();
    }

    return (
        <motion.form onSubmit={onDelete} className="bg-gray-900 text-gray-100 absolute rounded-xl top-48 w-1/2 h-96 max-w-7xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        >
            <h1 className="text-2xl font-normal px-5 py-5">Order Details</h1>
            <div className="flex px-5 gap-2 relative">
                <img className="w-32 object-cover" src={`${imageLocation}${order.product_image}`} alt={order.item_name} />
                <div className="flex flex-col">
                    <h3>{order.brand_name}</h3>
                    <p>{order.item_name}</p>
                    <p>{order.description}</p>
                    <span className="text-xs -bottom-3 absolute">Qty. {order.quantity}</span>
                </div>
                <p className="absolute right-10">Order Date: {order.ordered_date}</p>
            </div>
            <div className="flex px-5 py-5 flex-col">
                <h1 className="font-semibold text-lg">Ordered By:</h1>
                <p>{order.Customer}</p>
                <p>{order.email}</p>
            </div>
            <div className="flex justify-end px-10 gap-5">
                <button className="bg-red-600 p-1 rounded w-32 text-center">Delete</button>
                <span onClick={() => setOrderDetail(false)} className="bg-blue-600 p-1 rounded w-32 text-center cursor-pointer">Close</span>
            </div>
        </motion.form>
    )
}

export default OrderDetailModal
