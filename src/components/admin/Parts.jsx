import Helmet from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Parts = ({ date, logoutMssg }) => {

    const [parts,setParts] = useState('');

    const imageLocation = 'http://localhost:5000/products/';

    useEffect(() => {
        Axios.get('/api/parts')
        .then((res) => {
            setParts(res.data);
        })
    },[])

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Parts</title></Helmet>
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Parts</h1>
                    <span>{date}</span>
                </div>
                
                <div className="h-96 overflow-y-scroll w-full bg-white rounded-md shadow-xl mt-5 p-5">
                   <div className="bicycle-table-content mt-3">
                        <h2 className="bicycle-table-title col-span-2">Description</h2>
                        <h2 className="bicycle-table-title">Available Colors</h2>
                        <h2 className="bicycle-table-title">Price</h2>
                        <h2 className="bicycle-table-title col-span-1">Quantity</h2>
                   </div>
                   {/* contents of table here */}
                  { parts.length <= 0 ? <div className="font-bold text-3xl text-center text-gray-500 mt-28"
                  >No parts yet...</div> : parts.map((part) => (
                    <div className="bicycle-table-content mt-5" key={part.id}>
                        <div className="col-span-2 grid grid-cols-2 gap-2 ml-5 w-full">
                            <img className="w-full border h-32 border-gray-800" src={`${imageLocation}${part.image}`} alt={part.item} />
                            <div>
                                <h2 className="font-semibold text-md">{part.brand}</h2>
                                <h2 className="font-semibold text-md">{part.item}</h2>
                                <p>{part.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center col-span-1">
                            <svg className="w-6 h-6 cursor-pointer text-red-600" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <svg className="w-6 h-6 cursor-pointer text-blue-600" fill="blue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <svg className="w-6 h-6 cursor-pointer text-green-600" fill="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex items-center col-span-1">
                            <span className="font-bold text-gray-800">Php. {part.price}</span>
                        </div>
                        <div className="col-span-2 w-full flex justify-evenly items-center">
                            <label className="font-bold text-gray-800 text-center" htmlFor="">{part.quantity}</label>
                            <Link to='#' className="bg-gray-900 text-gray-100 p-2 w-32 text-center rounded-md">View</Link>
                        </div>
                   </div> 
                  )) }
                </div>
            </div>
            {/* logout modal */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Parts
