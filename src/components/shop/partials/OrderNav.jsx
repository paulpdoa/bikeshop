import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const OrderNav = () => {

    // const [brands,setBrands] = useState('');

    // display all brands of every product items
    useEffect(() => {
        Axios.get('/api/admin/products')
        .then((res) => {
          console.log(res);
        })
    },[])

    return (
        <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ duration:1.5, type:'spring',stiffness:30 }}
                className="col-span-2 w-full px-16 py-8 grid-rows-5 border-r-2 h-auto relative">
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
                        <p>Trinx</p>
                        <span>(?)</span>
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-700">
                        <p>Shimano</p>
                        <span>(?)</span>
                    </div>
                  
                  </div>
                  <div className="px-2 py-2 absolute w-72 text-center bottom-0">
                      <Link className="font-semibold text-gray-700" to="#">SHOW MORE BRANDS</Link>
                  </div>
                </motion.div>
    )
}

export default OrderNav
