import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ItemDetails = () => {
    return (
        <div className="flex justify-center">
        <Helmet>
            <title>Bicycle System | Item Detail</title>
        </Helmet>
        <div className="h-screen grid grid-cols-2 w-full max-w-7xl"> 
            <motion.div
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ duration:0.5,type:'spring',stiffness:50 }} 
            className="flex justify-center"> { /* item image here */ }
                <div className="">
                    <img className="object-cover w-3/4 rounded-xl ml-auto mr-auto mt-24" src="/image/hub.jpg" alt="hub" />
                    <div className="text-center mt-2"> {/*colors here */}
                        <span className="text-gray-700 font-normal select-none">Blue / Campagnolo</span>
                        <div className="ml-auto mr-auto flex justify-around w-16">
                            <img className="object-cover w-18 rounded-xl border-2 border-blue-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src="/image/hub.jpg" alt="hub" />
                            <img className="object-cover w-18 rounded-xl border-2 border-red-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src="/image/hub.jpg" alt="hub" />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay: 0.9 }} 
            className="px-10 py-20"> { /* information of item here */ }
                <div className="select-none">{ /* information brand */ }
                    <h3 className="font-medium text-gray-700 text-xl">Shimano</h3>
                    <p className="font-semibold text-gray-700 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt?</p>
                </div>
                <div className="py-8">{ /* information price model etc.. */ }
                    <span className="font-medium text-2xl text-gray-900 select-none">$ 2,119.00</span>
                    <div className="flex justify-evenly py-3">
                        <div className="w-full">
                            <span className="font-semibold text-gray-700 select-none">Color:</span><br/>
                            <select className="border p-1 border-gray-800 rounded-sm w-3/4 outline-none" name="color">
                                <option hidden value="color">Choose color</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <span className="font-semibold text-gray-700 select-none">Model:</span><br/>
                            <select className="border p-1 border-gray-800 rounded-sm w-3/4 outline-none" name="color">
                                <option hidden value="model">Select model</option>
                                <option value="model">Model 1</option>
                            </select>
                        </div>
                    </div>
                    <div className="select-none"> {/* availability */}
                        <span className="font-semibold text-gray-700">Availability: </span>
                        <p className="inline-block font-light text-gray-900">Ships from Warehouse</p>
                    </div>

                        <div className="flex py-4"> {/* quantity add to cart */}
                            <div>
                                <span>Quantity</span><br/>
                                <input className="p-1 w-1/2 border border-gray-800 rounded-sm" type="number" name="quantity" value="1" />
                            </div>
                            <div className="flex justify-center items-center p-2 mt-2">
                                <Link to='/cart'><button className="bg-yellow-500 text-gray-200 p-2 rounded-md">Add to Cart</button></Link>
                            </div>
                        </div>

                        <div className="flex justify-between">  {/* wish list and social media */}
                            <div>
                                <p className="text-gray-800 cursor-pointer">Add to Wish List</p>
                            </div>
                        
                            <div className="flex justify-center items-center"> {/* social media icons */}
                                <i className="fab w-6 opacity-40 rounded-xl fa-linkedin transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-facebook-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-twitter-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-youtube transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-whatsapp-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
                </div>
            </div>
        
    )
}

export default ItemDetails