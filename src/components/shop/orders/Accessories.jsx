import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import LogoutModal from '../../modals/LogoutModal';
import AccessoryPagination from '../paginations/AccessoryPagination';

const Accessories = ({ logoutMssg }) => {

    const [accessories,setAccessories] = useState('');
    const imageLocation = 'http://localhost:5000/products/';

    // paginations 
    const [currentPage,setCurrentPage] = useState(1);
    const [accessoryPerPage] = useState(9);

    const indexOfLastAccessory = currentPage * accessoryPerPage;
    const indexOfFirstAccessory = indexOfLastAccessory - accessoryPerPage;
    const currentPages =  accessories.slice(indexOfFirstAccessory, indexOfLastAccessory);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        Axios.get('/api/accessories')
        .then((res) => {
            setAccessories(res.data)
        })
    },[])

    return (
        <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.5 }}
                className="col-span-4 w-full py-7"> {/* items side */}
                <Helmet><title>Bicycle System | Accessories</title></Helmet>
                    <div className="px-5 border-b-2 p-4">
                        <h1 className="font-semibold text-5xl select-none">Accessories</h1>
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
                        <div className="flex gap-5 flex-wrap"> { /* Accessory Content Here */ }
                        { accessories.length <= 0 ? 
                            <div className="w-full h-96 flex items-center justify-center">
                                <h1 className="text-3xl font-bold text-gray-400">Nothing to display...</h1>
                            </div> : currentPages.map((accessory) => (
                            <div className="flex py-5" key={accessory.id}> { /* items goes here */ }
                                <Link to={`/accessory/details/${accessory.item_name}`}>
                                    <div className="border border-gray-300 shadow-xl overflow-hidden rounded">
                                        <img className="w-60 h-36 object-cover" src={`${imageLocation}${accessory.product_image}`} alt={accessory.item_name} />
                                        <div className="grid grid-rows-3 justify-items-center m-2">
                                            <span className="font-semibold text-gray-800">{accessory.brand_name}</span>
                                            <span className="font-normal text-sm text-gray-600">{accessory.item_name}</span>
                                            <span className="font-semibold text-gray-900 text-xl">₱{accessory.product_price}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) }
                        </div>
                    </div>
                    <AccessoryPagination accessoryPerPage={accessoryPerPage} totalAccessory={accessories.length} paginate={paginate} />
                    { logoutMssg && <LogoutModal /> }
                </motion.div>
    )
}

export default Accessories
