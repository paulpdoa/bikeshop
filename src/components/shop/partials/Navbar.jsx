import { Link, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {BsCaretDownFill} from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut,FiLogIn,FiSearch } from 'react-icons/fi';
import Axios from 'axios';

const Navbar = ({user,setAuthStatus,setLogoutMssg}) => {
    const id = window.localStorage.getItem("id");
    const [hide,setHide] = useState(false);
    const customer = window.localStorage.getItem("user");
    const [total,setTotal] = useState(0);

    // variable for searched item
    const [products,setProducts] = useState([]);
    const [filteredItem,setFilteredItem] = useState([]);
    
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
        const abortCont = new AbortController(); 

        Axios.get(`/customer/cart/${id}`,{ signal: abortCont.signal })
        .then((res) => {
            const totalLength = res.data.length;
            setTotal(totalLength);
        })
        .catch((err) => console.log(err))
        
        return () => abortCont.abort 
    },[id])

    // logout the user upon click
    const onLogout = () => {
        Axios.get('/api/logout')
        .then((res) => {
            setLogoutMssg(true);
            setTimeout(() => {
                localStorage.removeItem("user");
                localStorage.removeItem("isUserAuth");
                localStorage.removeItem("role");
                localStorage.removeItem("id");
                localStorage.removeItem("userToken");
                history.push(res.data.redirect);
                setAuthStatus(res.data.isAuth);
                setLogoutMssg(false);
            },2000)
        });
    }
    // Get all products to be displayed for searching
    useEffect(() => {
        Axios.get('/api/admin/products')
        .then((value) => {
            setProducts(value.data);
        })
    },[])

    // Search an item function here
    const handleSearch = (e) => {
        e.preventDefault();
        const searchedItem = e.target.value;
        const filteredData = products.filter((val) => {
            return val.item_name.toLowerCase().includes(searchedItem.toLowerCase());
        })
        if(searchedItem === '') {
            setFilteredItem([]);
        } else {
            setFilteredItem(filteredData);
        }
    }


    return (
        <nav className="bg-gray-900 flex justify-center flex-col"> 
            { !hide && 
            <div className="ml-auto mr-auto w-5/6 flex justify-between text-white px-2 py-4 border-b-2 border-white items-center max-w-7xl">
                <div className="flex ml-10 h-16 w-1/2">
                    <Link className="no-underline  self-center" to="/"><img className="filter invert w-24 h-24" src="/image/tulin.png" alt="tulinlogo" /></Link>
                    <div className="w-full self-center relative z-50">
                        <div className="flex items-center self-center w-full">
                            <input onChange={handleSearch} className="text-black ml-5 w-full rounded-sm p-1 h-10 outline-none self-center lg:block hidden" type="search" placeholder="Search parts/brand" />
                            <button className="self-center bg-gray-700 h-10 w-10 bg-opacity-20 rounded-r-lg flex items-center justify-center hover:bg-gray-200 hover:text-gray-900 transition duration-200"><FiSearch /></button>
                        </div>
                        { filteredItem.length !== 0 && 
                        <div className="absolute bg-white text-gray-900 z-50 px-5 py-5 overflow-y-scroll overflow-hidden h-auto w-full ml-5 border-2 rounded border-gray-900">
                            { filteredItem.slice(0,15).map((product) => (
                                <div className="p-2 cursor-pointer hover:bg-gray-200" key={product.id}>
                                    <a className="w-full" target="_blank" rel="noreferrer" href={`/${product.product_type}/details/${product.item_name}`}>{product.product_type.toUpperCase()} - {product.item_name}</a>
                                </div>
                            )) }
                        </div> 
                        }
                    </div>
                    
                </div>
                <ul className="flex mr-20 items-center">
                    <li className="navBtns"><Link  to="/">Home</Link></li>
                    <li className="navBtns ml-5"><Link to="/about">About</Link></li>
                    <li className="navBtns ml-5"><Link to="/contact-us">Contact Us</Link></li>
                      
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
                    <Link className="navBtns" to='/customize'>CUSTOMIZE</Link>
                    <Link className="navBtns" to="/parts">BIKE PARTS</Link>
                    <Link className="navBtns" to="/accessories">ACCESSORIES</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
