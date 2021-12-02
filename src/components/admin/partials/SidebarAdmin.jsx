import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBiking, FaTools } from 'react-icons/fa';
import { FiSettings, FiCalendar } from 'react-icons/fi';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { useHistory } from 'react-router';
import Axios from 'axios';

const SidebarAdmin = ({ setLogoutMssg }) => {

    const [menu,setMenu] = useState(false);
    const history = useHistory();

    const onLogout = () => {
        Axios.get('/api/admin/logout')
            .then((res) => {
                setLogoutMssg(true)
                setTimeout(() => {
                    window.localStorage.removeItem("admin");
                    window.localStorage.removeItem("role");
                    window.localStorage.removeItem("isAdminAuth");
                    history.push(res.data.redirect);
                    setLogoutMssg(false);
                },3000)
            })
    }
    
    return (
        <nav className="bg-gray-900 h-full text-gray-100 flex flex-col items-center p-5 fixed">
            <div className="logo">
                <Link to='/dashboard'>
                    <img className="w-32 filter invert" src="/image/tulin.png" alt="logo" />
                </Link>
            </div>
            <ul className="font-bold">
                <li className="sidenav-li hover:bg-gray-200 hover:bg-opacity-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className="sidenav-li hover:bg-gray-200 hover:bg-opacity-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <Link to='/dashboard/orders'>Orders</Link>
                </li>
                <li className="sidenav-li hover:bg-gray-200 hover:bg-opacity-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <Link to='/dashboard/sales'>Sales</Link>
                </li>
                <li className="sidenav-li cursor-pointer hover:bg-gray-200 hover:bg-opacity-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex items-center" onClick={() => setMenu(!menu)}>
                        Inventory
                        {menu ? 
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg> 
                        :
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        }
                    </div>
                </li>
                {menu && 
                <ul className="mt-2">
                    <li className="flex text-md items-center gap-2 text-lg hover:bg-gray-200 hover:bg-opacity-5">
                        <FaBiking />
                        <Link to='/dashboard/bicycles'>Bikes</Link>
                    </li>
                    <li className="flex text-md items-center gap-2 text-lg hover:bg-gray-200 hover:bg-opacity-5">
                        <FaTools />
                        <Link to='/dashboard/parts'>Parts</Link>
                    </li>
                    <li className="flex text-md items-center gap-2 text-lg hover:bg-gray-200 hover:bg-opacity-5">
                        <GiFullMotorcycleHelmet />
                        <Link to='/dashboard/accessories'>Accessories</Link>
                    </li>
                </ul>}
                <li className="sidenav-li hover:bg-gray-200 hover:bg-opacity-5">
                    <FiCalendar />
                    <Link to='/dashboard/schedule'>Schedule</Link>
                </li>
                <li className="sidenav-li hover:bg-gray-200 hover:bg-opacity-5">
                    <FiSettings />
                    <Link to='/dashboard/settings'>Settings</Link>
                </li>
                <li onClick={onLogout} className="sidenav-li absolute bottom-10 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <label className="cursor-pointer" htmlFor="logout">Logout</label>
                </li>
            </ul>
        </nav>
    )
}

export default SidebarAdmin
