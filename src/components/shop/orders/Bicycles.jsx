import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LogoutModal from '../../modals/LogoutModal';

const Bicycles = ({ logoutMssg }) => {

    const [bikes,setBikes] = useState('');
    const imageLocation = 'http://localhost:5000/products/';

    useEffect(() => {
        Axios.get('/api/bicycles')
        .then((res) => {
            setBikes(res.data);
        })
    },[])

    return (
        <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.5 }}
                className="col-span-4 w-full py-7"> {/* items side */}
                <Helmet><title>Bicycle System | Bikes</title></Helmet>
                    <div className="px-5 border-b-2 p-4">
                        <h1 className="font-semibold text-5xl select-none">Bicycles</h1>
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
                        <div className="flex gap-5 flex-wrap">
                            { bikes && bikes.map((bike) => (
                            <div className="flex py-5" key={bike.id}> { /* items goes here */ }
                                <Link to={`/bicycle/details/${bike.item}`}>
                                    <div className="border border-gray-300 shadow-xl overflow-hidden rounded">
                                        <img className="w-60 h-36 object-cover" src={`${imageLocation}${bike.image}`} alt={bike.item} />
                                        <div className="grid grid-rows-3 justify-items-center m-2">
                                            <span className="font-semibold text-gray-800">{bike.brand}</span>
                                            <span className="font-normal text-sm text-gray-600">{bike.item}</span>
                                            <span className="font-semibold text-gray-900 text-xl">Php. {bike.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) }
                        </div>
                    </div>
                    { logoutMssg && <LogoutModal /> }
                </motion.div>
    )
}

export default Bicycles
