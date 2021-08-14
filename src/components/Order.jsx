import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Order = () => {

    return (
        <div>
        <Helmet>
            <title>Bicycle System | Order</title>
        </Helmet>
            <div className="grid grid-cols-6 justify-items-center h-screen">
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ duration:1.5, type:'spring',stiffness:30 }}
                className="col-span-2 w-full px-16 py-8 grid-rows-5 border-r-2">
                  <div className="row-span-1 border-b-2 p-2">
                    <h1 className="text-5xl font-semibold select-none">Filter By:</h1>
                    <div className="flex justify-between mt-6">
                        <h3 className="uppercase text-xl font-semibold text-gray-500 select-none">Availability</h3>
                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className="mt-2">
                        <input type="checkbox" name="instock" />
                        <span className="text-green-800 ml-2">In Stock</span>
                    </div>
                  </div>

                  <div className="row-span-2 border-b-2 p-2">
                    <div className="flex justify-between mt-2">
                        <h3 className="uppercase text-xl font-semibold text-gray-500 select-none">Categories</h3>
                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Front</p>
                        <span>(72)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Rear</p>
                        <span>(54)</span>
                    </div>
                  </div>

                  <div className="row-span-3 border-b-2 p-2">
                    <div className="flex justify-between mt-2">
                        <h3 className="uppercase text-xl font-semibold text-gray-500 select-none">Brands</h3>
                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Shimano</p>
                        <span>(72)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>SRAM</p>
                        <span>(54)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Microshift</p>
                        <span>(72)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Campagnolo</p>
                        <span>(54)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>K-Edge</p>
                        <span>(72)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Interloc Racing Design</p>
                        <span>(54)</span>
                    </div>
                  </div>
                  <div className="px-2 py-2 text-center">
                      <Link className="font-semibold text-gray-700" to="#">SHOW MORE BRANDS</Link>
                  </div>
                </motion.div>

                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.5 }}
                className="col-span-4 w-full py-7"> {/* items side */}
                    <div className="px-5 border-b-2 p-4">
                        <h1 className="font-semibold text-5xl select-none">Derrailleurs</h1>
                    </div>
                    <div className="px-10 py-3">
                        <div className="flex justify-between"> {/* nav for page and search */}
                            <div className="flex w-1/2">
                                <span className="text-gray-700 font-semibold text-md self-center">Sort by</span>
                                <select className="p-1 outline-none rounded-md border border-gray-700 w-1/2 ml-2 cursor-pointer" name="filter" id="cars">
                                    <option hidden value="relevance">Relevance</option>
                                    <option value="brake">Brake</option>
                                </select>
                            </div>
                            <div className="p-2 cursor-pointer">
                                <span>View: </span>
                                <span className="text-gray-700">30 | 60</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-items-center py-5"> { /* items goes here */ }
                            <Link to="/item/details">
                                <div className="m-1 border border-gray-300 shadow-xl overflow-hidden rounded ">
                                    <img className="w-60 h-36 object-cover" src="/image/hub.jpg" alt="hub" />
                                    <div className="grid grid-rows-3 justify-items-center m-2">
                                        <span className="font-semibold text-gray-800">Lorem</span>
                                        <span className="font-normal text-gray-600">Lorem ipsum dolor sit.</span>
                                        <span className="font-semibold text-gray-900 text-xl">$ 299.00</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/item/details">
                                <div className="m-1 border border-gray-300 shadow-xl overflow-hidden rounded">
                                    <img className="w-60 h-36 object-cover" src="/image/reargear.jpg" alt="reargear" />
                                    <div className="grid grid-rows-3 justify-items-center m-2">
                                        <span className="font-semibold text-gray-800">Lorem</span>
                                        <span className="font-normal text-gray-600">Lorem ipsum dolor sit.</span>
                                        <span className="font-semibold text-gray-900 text-xl">$ 299.00</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/item/details">
                                <div className="m-1 border border-gray-300 shadow-xl overflow-hidden rounded">
                                    <img className="w-60 h-36 object-cover" src="/image/shifter.jpg" alt="shifter" />
                                    <div className="grid grid-rows-3 justify-items-center m-2">
                                        <span className="font-semibold text-gray-800">Lorem</span>
                                        <span className="font-normal text-gray-600">Lorem ipsum dolor sit.</span>
                                        <span className="font-semibold text-gray-900 text-xl">$ 299.00</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Order
