import { motion } from "framer-motion";

const OrderDetailModal = ({ setOrderDetail }) => {

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
                <img className="w-32 object-cover" src="/image/shifter.jpg" alt="shifter" />
                <div className="flex flex-col">
                    <h3>Brand Name</h3>
                    <p>Item name</p>
                    <p>Item description</p>
                    <span className="text-xs -bottom-3 absolute">Qty. 1</span>
                </div>
                <p className="absolute right-10">Order Date: October 21, 2021</p>
            </div>
            <div className="flex px-5 py-5 flex-col">
                <h1 className="font-semibold text-lg">Ordered By:</h1>
                <p>Paul Andres</p>
                <p>polopdoandres@gmail.com</p>
            </div>
            <div className="flex justify-end px-10 gap-5">
                <button className="bg-red-600 p-1 rounded w-32 text-center">Delete</button>
                <span onClick={() => setOrderDetail(false)} className="bg-blue-600 p-1 rounded w-32 text-center cursor-pointer">Close</span>
            </div>
        </motion.form>
    )
}

export default OrderDetailModal
