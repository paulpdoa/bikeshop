import React from 'react'

const NavbarAdmin = () => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-xl">
            <div className="flex items-center ml-5">
                <svg className="w-10 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <h2 className="font-semibold text-xl">Dashboard</h2>
            </div>
            <form className="flex gap-2">
                <input className="p-2 w-96 rounded-md outline-none border-gray-300 border" type="search" placeholder="Search here" />
                <button className="p-2 bg-gray-900 text-gray-100 rounded-md">Search</button>
            </form>
            <div className="mr-5 font-semibold"> { /* User that is logged in */}
                <h4>John Doe</h4>
                <span>Admin</span>
            </div>
        </nav>
    )
}

export default NavbarAdmin
