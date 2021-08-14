import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
        <div className="h-screen py-12 px-24">
        <Helmet>
            <title>Bicycle System | Cart</title>
        </Helmet>
            <motion.div 
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ type:'spring',stiffness: 50, duration:0.5 }}
            className="flex justify-between">
                <h1 className="font-bold text-2xl select-none">Your Shopping Cart(1 item)</h1>
                <div className="">
                    <h2 className="font-medium text-2xl select-none">SUBTOTAL $2,119.00</h2>
                    <button className="p-2 bg-green-600 text-gray-200 rounded-md mt-5 float-right">Checkout</button>
                </div>
            </motion.div>
            <motion.table 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:1.0 }}
            className="w-full mt-5">
                <tr className="text-left bg-gray-200 text-gray-800 select-none"> 
                    <th className="row-span-2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td className="flex mt-2 select-none">
                        <img className="w-60 rounded-xl" src="/image/hub.jpg" alt="hub" />
                        <div className="px-8">
                            <p className="text-xl font-semibold text-gray-700">Lorem, ipsum dolor sit amet consectetur<br/> adipisicing elit. Harum, rerum.</p>
                            <p className="text-gray-800">Blue, Campagnolo</p>
                            <p className="text-gray-700 text-sm mt-2">Stock Status: Ships from Warehouse</p>
                            <p className="text-gray-700 text-sm mt-2">Available In: Quality Bike Parts - CENTRAL</p>
                            <div className="flex text-gray-700 text-sm mt-2">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
                                <p>No Air Shipping</p>
                            </div>
                        </div>
                    </td>
                    <td className="select-none">$2,119.00</td>
                    <td>
                        <input className="w-1/2 text-center outline-none border border-gray-400 rounded-sm ml-14" readonly type="number" name="quantity" value="1" />
                        <div className="mt-2 flex justify-around text-gray-700 text-sm">
                            <Link to="#">Update</Link>
                            <Link to="#">Remove</Link>
                        </div>
                    </td>
                    <td className="select-none">$2,119.00</td>
                </tr>
            </motion.table>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:1.0 }}
            className="grid grid-cols-2 justify-end w-full h-auto">
                <div>
                    {/* Filler only */}
                </div>
                <div className="w-auto">
                    <h3 className="bg-gray-200 font-bold text-gray-700 p-1 select-none">Shipping & Pickup Options</h3>
                    <select className="w-1/2 p-1 border rounded-sm border-gray-500 cursor-pointer mt-2 outline-none" name="pickup">
                        <option hidden value="deliveryoption">Delivery Option</option>
                        <option value="pickup">Pickup at Store</option>
                        <option value="deliver">Cash On Delivery</option>
                    </select>
                    <div>
                        <span className="text-gray-700 font-semibold select-none">Selected Store:</span>
                        <div className="mt-2">
                            <span className="text-black select-none">Mulawin</span>
                            <span className="ml-3 text-gray-500 cursor-pointer">edit</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-gray-700 select-none">Pick up Tuesday, May 11</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Cart
