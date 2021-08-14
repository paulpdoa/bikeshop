import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="bg-black">
            <div className="ml-auto mr-auto w-5/6 flex justify-between text-white px-2 py-4 border-b-2 border-white items-center">
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x: 0 }}
                transition={{ type:'spring',stiffness:50 }}
                className="flex ml-10 h-16 w-1/2">
                    <Link className="no-underline  self-center" to="/"><img className="filter invert w-24 h-24" src="/image/tulin.png" alt="tulinlogo" /></Link>
                    <input className="text-black ml-5 w-full rounded-sm p-1 h-10 outline-none self-center" type="search" placeholder="Search parts/brand" />
                </motion.div>
                <motion.ul 
                initial={{ x:'-100vw' }}
                animate={{ x: 0 }}
                transition={{ type:'spring',stiffness:50 }}
                className="flex mr-20 items-center">
                    <li className="navBtns"><Link  to="/">Home</Link></li>
                    <li className="navBtns ml-5"><Link to="/about">About</Link></li>
                    <li className="navBtns ml-5"><Link to="/login">Account</Link></li>
                    <li className="navBtns ml-5 border-2 border-white p-1 rounded cursor-pointer">
                        <svg className="w-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <Link to="/cart">$1000.00</Link>
                    </li>
                </motion.ul>
            </div>
            <div className="w-5/6 mr-auto ml-auto">
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x: 0 }}
                transition={{ type:'spring',stiffness:50 }}
                className="text-white flex justify-evenly p-3">
                    <Link className="navBtns" to="/bikes">BIKES</Link>
                    <Link className="navBtns" to="/service">SERVICE</Link>
                    <Link className="navBtns" to="/bikeparts">BIKE PARTS</Link>
                    <Link className="navBtns" to="/accessories">ACCESSORIES</Link>
                    {/* <Link className="navBtns" to="/guides">GUIDES</Link> */}
                    {/* <Link className="navBtns" to="/ourstores">OUR STORES</Link> */}
                    <Link className="navBtns" to="/contact-us">CONTACT US</Link>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar
