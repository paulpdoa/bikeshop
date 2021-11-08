import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LogoutModal from '../../modals/LogoutModal';
import BikePagination from '../paginations/BikePagination';

const Bicycles = ({ logoutMssg }) => {

    const [bikes,setBikes] = useState('');
    const imageLocation = 'http://localhost:5000/products/';

     // paginations
    const [currentPage,setCurrentPage] = useState(1);
    const [bikesPerPage] = useState(9);

    const indexOfLastBike = currentPage * bikesPerPage;
    const indexOfFirstBike = indexOfLastBike - bikesPerPage;
    const currentPages = bikes.slice(indexOfFirstBike, indexOfLastBike);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                            { bikes.length <= 0 ? 
                            <div className="w-full h-96 flex items-center justify-center">
                                <h1 className="text-3xl font-bold text-gray-400 animate-pulse">Nothing to display...</h1>
                            </div> : currentPages.map((bike) => (
                            <div className="flex py-5" key={bike.id}> { /* items goes here */ }
                                <Link to={`/bicycle/details/${bike.item_name}`}>
                                    <div className="border border-gray-300 shadow-xl overflow-hidden rounded">
                                        <img className="w-60 h-36 object-cover transform hover:scale-105 transition duration-300" src={`${imageLocation}${bike.product_image}`} alt={bike.item_name} />
                                        <div className="grid grid-rows-3 justify-items-center m-2">
                                            <span className="font-semibold text-gray-800">{bike.brand_name}</span>
                                            <span className="font-normal text-sm text-gray-600">{bike.item_name}</span>
                                            <span className="font-semibold text-gray-900 text-xl">₱{bike.product_price}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) }
                        </div>
                    </div>
                    <BikePagination bikesPerPage={bikesPerPage} totalBikes={bikes.length} paginate={paginate} />
                    { logoutMssg && <LogoutModal /> }
                </motion.div>
    )
}

export default Bicycles
