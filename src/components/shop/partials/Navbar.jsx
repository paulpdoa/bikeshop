import { Link, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {BsCaretDownFill} from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut,FiLogIn } from 'react-icons/fi';
import Axios from 'axios';

const Navbar = ({user,setAuthStatus,setLogoutMssg}) => {
    const id = window.localStorage.getItem("id");
    const [hide,setHide] = useState(false);
    const customer = window.localStorage.getItem("user");
    const [total,setTotal] = useState(0);
    
    const history = useHistory();

    // for logout and profile showing button
    const [showLogout,setShowLogout] = useState(false);

    window.addEventListener('scroll', () => {
       if(window.scrollY === 0) {
          setHide(false);
       } else {
          setHide(true);
       }
    })


    // computes total price
    useEffect(() => {
        Axios.get(`/customer/cart/${id}`)
        .then((res) => {
            const totalLength = res.data.length;
            setTotal(totalLength);
        })
    },[id])
    
    // //change url from id to username of logged in user
    // useEffect(() => {
    //     Axios.get(`/customer/cart/${id}`)
    //     .then((res) => {
    //         res.data.forEach((customer) => {
    //             setCustomer(customer.User.userName);
    //         })
    //     })
    // },[id])

    // logout the user upon click
    const onLogout = () => {
        Axios.get('/api/logout')
        .then((res) => {
            setLogoutMssg(true);
            setTimeout(() => {
                window.localStorage.removeItem("user");
                window.localStorage.removeItem("isUserAuth");
                window.localStorage.removeItem("role");
                window.localStorage.removeItem("id");
                history.push(res.data.redirect);
                setAuthStatus(res.data.isAuth);
                setLogoutMssg(false);
            },2000)
        });
    }

    return (
        <nav className="bg-gray-900 flex justify-center flex-col"> 
            { !hide && 
            <div className="ml-auto mr-auto w-5/6 flex justify-between text-white px-2 py-4 border-b-2 border-white items-center max-w-7xl">
                <div className="flex ml-10 h-16 w-1/2">
                    <Link className="no-underline  self-center" to="/"><img className="filter invert w-24 h-24" src="/image/tulin.png" alt="tulinlogo" /></Link>
                    <input className="text-black ml-5 w-full rounded-sm p-1 h-10 outline-none self-center lg:block hidden" type="search" placeholder="Search parts/brand" />
                </div>
                <ul className="flex mr-20 items-center">
                    <li className="navBtns"><Link  to="/">Home</Link></li>
                    <li className="navBtns ml-5"><Link to="/about">About</Link></li>
                      
                    { user !== null && 
                        <li className="navBtns ml-5 border-2 border-white p-1 rounded-full cursor-pointer">
                            <Link to={`/cart/${customer}`}>
                                <svg className="w-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span className="text-xs bg-red-500 border-2 border-gray-50 rounded-full font-bold absolute text-center w-5 top-0 -ml-1">{total}</span>
                            </Link>
                        </li> 
                    }
                    <li onClick={() => setShowLogout(!showLogout)} className="relative ml-5 rounded-md p-1">
                        <BsCaretDownFill className="navBtns cursor-pointer text-3xl border-2 bg-gray-800 p-1 rounded-md" />
                        { showLogout && <div className="flex flex-col absolute border border-gray-800 rounded-xl p-3 mt-2 z-50 w-44 bg-gray-800 -ml-32">
                            <div className="flex items-center gap-2 navBtns">
                                
                               { user === null ? 
                                <>
                                    <FiLogIn />
                                    <Link className="text-lg" to='/login'>Login</Link> 
                                </>
                                :
                                <>
                                    <FaUserCircle />
                                    <Link className="text-lg" to={`/profile/${user}`}>{user}</Link>    
                                </>
                               }
                            </div>
                            {user !== null && 
                            <>
                                <div className="flex items-center gap-2 navBtns">
                                    <FiLogOut />
                                    <span onClick={onLogout} className="text-lg cursor-pointer">Logout</span>
                                </div>
                            </>}
                        </div>}
                    </li>
                </ul>
            </div> }
            <div className={!hide ? "w-5/6 mr-auto ml-auto max-w-7xl" : "fixed bg-gray-900 z-50 w-full top-0"}>
                <div className="text-white flex justify-evenly p-3">
                    <Link className="navBtns" to="/bikes">BIKES</Link>
                    <Link className="navBtns" to="/reservation">RESERVATION</Link>
                    <Link className="navBtns" to="/parts">BIKE PARTS</Link>
                    <Link className="navBtns" to="/accessories">ACCESSORIES</Link>
                    <Link className="navBtns" to="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
