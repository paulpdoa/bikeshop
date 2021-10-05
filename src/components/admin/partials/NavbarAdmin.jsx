import React from 'react'
import { Link } from 'react-router-dom';

const NavbarAdmin = ({ admin }) => {
    return (
        <nav className="flex justify-between items-center p-4 shadow-xl">
            <div className="flex gap-20 items-center">
                <svg className="w-10 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            <Link to='/addproduct' className="flex items-center cursor-pointer">
                <svg className="w-10 h-10 bg-gray-900 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
                <p className="border-r border-t border-l-0 rounded-l-none border-b p-2 bg-white rounded-md border-gray-900 h-10 font-bold">Add Product</p>
            </Link>
            </div>
           
            <form className="flex gap-2 mr-32">
                <input className="p-2 w-96 rounded-md outline-none border-gray-300 border" type="search" placeholder="Search here" />
                <button className="p-2 bg-gray-900 text-gray-100 rounded-md">Search</button>
            </form>
            <div className="font-semibold flex items-center gap-2"> { /* admin that is logged in */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {/* name of logged in admin */}
                <span className="font-bold text-lg">{ admin }</span>
            </div>
        </nav>
    )
}

export default NavbarAdmin
