import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

const Navbar = ({user,setAuthStatus}) => {
    const [hide,setHide] = useState(false);
    const history = useHistory();

    window.addEventListener('scroll', () => {
       if(window.scrollY === 0) {
          setHide(false);
       } else {
          setHide(true);
       }
    })

    // logout the user upon click
    const onLogout = () => {
        Axios.get('/api/logout')
        .then((res) => {
            alert("Thank you for using our website");
            window.localStorage.removeItem("user");
            history.push(res.data.redirect);
            setAuthStatus(false);
        })
        .catch(err => {
            console.log(err);
        })
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
                    {user ? 
                    (<><li className="navBtns ml-5 cursor-pointer"><Link to={`/profile/${user.user}`}>{user.user}</Link></li>
                    <li onClick={onLogout} className="navBtns ml-5 cursor-pointer">Logout</li></>) 
                        :
                    <li className="navBtns ml-5"><Link to="/login">Login</Link></li> }                    
                    <li className="navBtns ml-5 border-2 border-white p-1 rounded cursor-pointer">
                        <svg className="w-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <Link to="/cart">$0.00</Link>
                    </li>
                </ul>
            </div> }
            <div className={!hide ? "w-5/6 mr-auto ml-auto max-w-7xl" : "fixed bg-gray-900 z-50 w-full top-0"}>
                <div className="text-white flex justify-evenly p-3">
                    <Link className="navBtns" to="/bikes">BIKES</Link>
                    <Link className="navBtns" to="/service">SERVICE</Link>
                    <Link className="navBtns" to="/bikeparts">BIKE PARTS</Link>
                    <Link className="navBtns" to="/accessories">ACCESSORIES</Link>
                    <Link className="navBtns" to="/contact-us">CONTACT US</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
