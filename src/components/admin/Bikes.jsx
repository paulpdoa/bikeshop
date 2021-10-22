import Helmet from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Axios from 'axios';

const Bikes = ({ date, logoutMssg }) => {

    const [bikes,setBikes] = useState('');

    const imageLocation = 'http://localhost:5000/products/';

    useEffect(() => {
        // const abortController = new AbortController();
        // const signal = abortController.signal();

        Axios.get('/api/bicycles')
        .then((res) => {
            setBikes(res.data);
        })

        // return function cleanup() {
        //     abortController.abort();
        // } 
    },[])

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Bikes</title></Helmet>
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Bicycles</h1>
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
                   { bikes.length <= 0 ? <div className="font-bold text-3xl text-center text-gray-500 mt-28"
                   >No bicycles yet...</div> : bikes.map((bike) => (
                    <div className="bicycle-table-content mt-5" key={bike.id}>
                        <div className="col-span-2 grid grid-cols-2 gap-2 ml-5 w-full">
                            <img className="w-full border h-32 border-gray-800" src={`${imageLocation}${bike.product_image}`} alt={bike.item_name} />
                            <div>
                                <h2 className="font-semibold text-md">{bike.brand_name}</h2>
                                <h2 className="font-semibold text-md">{bike.item_name}</h2>
                                <p>{bike.description}</p>
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
                            <span className="font-bold text-gray-800">₱{bike.product_price}</span>
                        </div>
                        <div className="col-span-2 w-full grid grid-cols-2 justify-items-center items-center">
                            <label className="font-bold text-gray-800" htmlFor="">{bike.quantity}</label>
                            <div className="w-full flex justify-center">
                                <Link to='#' className="bg-gray-900 w-1/2 text-gray-100 p-2 text-center rounded-md">View</Link>
                            </div>
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

export default Bikes
