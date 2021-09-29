import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {

    const [menu,setMenu] = useState(false);
    
    return (
        <nav className="bg-gray-900 h-screen text-gray-100 col-span-1 flex flex-col items-center">
            <div className="logo">
                <Link to='/admin/dashboard'>
                    <img className="w-32 filter invert" src="/image/tulin.png" alt="logo" />
                </Link>
            </div>
            <ul className="font-bold">
                <li className="sidenav-li">Dashboard</li>
                <li className="sidenav-li cursor-pointer" onClick={() => setMenu(!menu)}>
                    Click Here
                    { menu && <ul>
                        <li>Hello</li>
                    </ul>}
                </li>
                <li className="sidenav-li">Sales</li>
                <li className="sidenav-li">Schedule</li>
                <li className="sidenav-li">Sample</li>
            </ul>
        </nav>
    )
}

export default SidebarAdmin
