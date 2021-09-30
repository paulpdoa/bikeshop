import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBiking, FaTools } from 'react-icons/fa';
import { FiSettings, FiCalendar } from 'react-icons/fi';

const SidebarAdmin = () => {

    const [menu,setMenu] = useState(false);
    
    return (
        <nav className="bg-gray-900 h-full text-gray-100 flex flex-col items-center p-5 fixed">
            <div className="logo">
                <Link to='/dashboard'>
                    <img className="w-32 filter invert" src="/image/tulin.png" alt="logo" />
                </Link>
            </div>
            <ul className="font-bold">
                <li className="sidenav-li">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className="sidenav-li">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <Link>Orders</Link>
                </li>
                <li className="sidenav-li">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <Link to='/sales'>Sales</Link>
                </li>
                <li className="sidenav-li cursor-pointer" onClick={() => setMenu(!menu)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <>Inventory</>
                </li>
                <li className="sidenav-li">
                    <FaBiking />
                    <Link to='/bicycles'>Bikes</Link>
                </li>
                <li className="sidenav-li">
                    <FaTools />
                    <Link to='/parts'>Parts</Link>
                </li>
                <li className="sidenav-li">
                    <FiCalendar />
                    <Link to='/schedules'>Schedule</Link>
                </li>
                <li className="sidenav-li">
                    <FiSettings />
                    <Link to='/settings'>Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SidebarAdmin
