import { Helmet } from 'react-helmet';
import { useEffect,useState } from 'react';
import Axios from 'axios';

import LogoutModal from '../modals/LogoutModal';

const Dashboard = ({ date, logoutMssg }) => {

    // Counts of every data
    const [userCount,setUserCount] = useState(0);
    const [orderCount,setOrderCount] = useState(0);

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        const abortCont = new AbortController();
        Axios.get('/api/customer/orders',{ signal: abortCont.signal })
        .then((res) => {
            setOrders(res.data);
        });

        return () => abortCont.abort
    },[])

    // Counts of Data
    useEffect(() => {
        const abortCont = new AbortController();
        Axios.get('/api/customers',{ signal: abortCont.signal })
            .then((res) => {
                setUserCount(res.data.length);
            })
            return () => abortCont.abort
    },[])

    useEffect(() => {
        const abortCont = new AbortController();
        Axios.get('/api/customer/orders',{ signal: abortCont.signal })
        .then((res) => {
            setOrderCount(res.data.length);
        })
        return () => abortCont.abort
    },[])

    return (
        <div className="flex justify-center">
            <Helmet><title>Bicycle System | Dashboard</title></Helmet>
            <div className="px-16 py-16 w-full max-w-7xl">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p>{ date }</p>
                </div>

                <div className="flex justify-center gap-10 mt-10">
                {/* total orders */}
                    <div className="bg-indigo-700 p-2 rounded-xl h-32 w-60">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl">Total Orders</h2>
                            <svg className="w-8 h-8 rounded-full bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div>
                            <label className="text-3xl font-bold text-gray-100 ml-2" htmlFor="orders">{ orderCount }</label>
                        </div>
                    </div>
                    {/* total sales */}
                    <div className="bg-sales p-2 rounded-xl h-32 w-60">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl">Total Sales</h2>
                            <svg className="w-8 h-8 rounded-full bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <label className="text-3xl font-bold text-gray-100 ml-2" htmlFor="sales">0</label>
                        </div>
                    </div>
                    {/* total expenses */}
                    <div className="bg-green-400 p-2 rounded-xl h-32 w-60">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl">Total Expenses</h2>
                            <svg className="w-8 h-8 rounded-full bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div>
                            <label className="text-3xl font-bold text-gray-100 ml-2" htmlFor="expenses">0</label>
                        </div>
                    </div>
                    {/* total users */}
                    <div className="bg-yellow-400 p-2 rounded-xl h-32 w-60">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-xl">Total Users</h2>
                            <svg className="w-8 h-8 rounded-full bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <label className="text-3xl font-bold text-gray-100 ml-2" htmlFor="users">{userCount}</label>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 mt-5"> { /* Selling Items */}
                    <div className="shadow-lg bg-white p-5 w-full max-h-96 overflow-y-scroll">
                        <h1 className="font-bold text-2xl">Most Selling Items</h1>
                        <div className="flex justify-between mt-5">
                           <div className="flex">
                                <img className="w-40 border border-gray-800 object-cover" src="/image/shifter.jpg" alt="shifter" />
                                <div className="ml-2">
                                    <h2 className="font-bold">Shimano</h2>
                                    <p>Front Derailleur</p>
                                </div>
                           </div>
                           <div> { /* item price */ }
                                <p className="font-bold text-2xl">$900</p>
                                <p className="text-gray-600">Sales</p>
                           </div>
                        </div>
                        <div className="flex justify-between mt-5">
                           <div className="flex">
                                <img className="w-40 border border-gray-800 object-cover" src="/image/shifter.jpg" alt="shifter" />
                                <div className="ml-2">
                                    <h2 className="font-bold">Shimano</h2>
                                    <p>Front Derailleur</p>
                                </div>
                           </div>
                           <div> { /* item price */ }
                                <p className="font-bold text-2xl">$900</p>
                                <p className="text-gray-600">Sales</p>
                           </div>
                        </div>
                        <div className="flex justify-between mt-5">
                           <div className="flex">
                                <img className="w-40 border border-gray-800 object-cover" src="/image/shifter.jpg" alt="shifter" />
                                <div className="ml-2">
                                    <h2 className="font-bold">Shimano</h2>
                                    <p>Front Derailleur</p>
                                </div>
                           </div>
                           <div> { /* item price */ }
                                <p className="font-bold text-2xl">$900</p>
                                <p className="text-gray-600">Sales</p>
                           </div>
                        </div>
                    </div>

                    <div className="bg-white w-1/4 shadow-xl p-5 max-h-96 overflow-y-scroll">
                        <h1 className="font-bold text-2xl">Recent Orders</h1>
                        <div className="font-semibold flex flex-col gap-7 mt-5"> {/* Recent Order lists */}
                            { orders.length < 1 ? 
                            <div>
                                <h1 className="text-xl font-bold text-gray-400 animate-pulse text-center">No recent orders yet...</h1>
                            </div> : 
                            orders && orders.map((order) => (
                                <div key={order.order_id}>
                                    <label htmlFor="orders">{ order.brand_name } {order.item_name}</label>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>

            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Dashboard