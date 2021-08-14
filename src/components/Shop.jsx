import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet';

const Shop = () => {

    return (
        <div className="bg-gray-100 relative"> {/* banner */}
        <Helmet>
            <title>Bicycle System | Home</title>
        </Helmet>
            <motion.header 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4 }}
            className="banner py-5">
                <div className="relative py-40 px-16">
                    <h1 className="absolute uppercase filter select-none invert font-bold text-6xl top-1/2 bottom-1/2 animate-pulse">Discover<br/> Different</h1>
                    <Link className="absolute top-64 uppercase text-white p-2 border-2 rounded-sm font-bold border-white ml-1 mt-12 animate-pulse" to="#">Find out more</Link>
                </div>
            </motion.header>

            <div className="h-full grid grid-cols-3 justify-items-center py-16"> {/* Card goes here */}
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ duration:1.5 }}
                className="w-3/4 rounded-xl shadow-xl h-full overflow-hidden border border-gray-300">
                    <img className="h-1/2 w-full object-cover" src="/image/cycle.jpg" alt="cycle" />
                    <div className="py-4 px-4">
                        <h2 className="font-bold uppercase text-xl px-2 text-gray-800 select-none">our latest eyewear</h2>
                        <p className="uppercase font-semibold px-2 text-gray-800 select-none">Best seller from top brands</p>
                        <Link className="font-bold border-2 border-gray-800 px-2 py-2 rounded-md absolute mt-3 ml-2 transition delay-100 duration-200 transform ease-in-out hover:scale-105" to="/order">SHOP NOW</Link>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ duration:1.5 }}
                className="w-3/4 rounded-xl shadow-xl h-full overflow-hidden border border-gray-300">
                    <img className="h-1/2 w-full object-cover overflow-auto" src="/image/diskbrake.jpg" alt="diskbrake" />
                    <div className="py-4 px-4">
                        <h2 className="font-bold uppercase text-xl px-2 text-gray-800 select-none">Bike parts</h2>
                        <p className="uppercase font-semibold px-2 text-gray-800 select-none">Our latest collection</p>
                        <Link className="font-bold border-2 border-gray-800 px-2 py-2 rounded-md absolute mt-3 ml-2 transition delay-100 duration-200 transform ease-in-out hover:scale-105" to="/order">SHOP NOW</Link>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ duration:1.5 }}
                className="w-3/4 rounded-xl shadow-xl h-full overflow-hidden border border-gray-300">
                    <img className="h-1/2 w-full object-cover overflow-auto" src="/image/pedal.jpg" alt="pedal" />
                    <div className="py-4 px-4">
                        <h2 className="font-bold uppercase text-xl px-2 text-gray-800 select-none">Wheels and tires</h2>
                        <p className="uppercase font-semibold px-2 text-gray-800 select-none">our latest collection</p>
                        <Link className="font-bold border-2 border-gray-800 px-2 py-2 rounded-md absolute mt-3 ml-2 transition delay-100 duration-200 transform ease-in-out hover:scale-105" to="/order">SHOP NOW</Link>
                    </div>
                </motion.div>
            </div>

            <div className="py-16 grid grid-cols-7 justify-items-center p-16 overflow-hidden relative">{/* Build container */}
                <div className="col-span-3">
                    <img src="/image/build.jpg" alt="build" />
                </div>
                <div className="col-span-4 bg-gray-900 w-full">
                    <h1 className="font-semibold text-gray-200 text-5xl px-6 py-16 select-none">BUILD YOUR<br/> OWN BIKE</h1>
                    <Link className="border-2 border-gray-100 text-gray-100 rounded-md p-2 ml-6 transition delay-100 duration-200 transform ease-in-out hover:bg-gray-200 hover:text-gray-800" to="/customize">CUSTOMIZE NOW</Link>
                </div>
                <Link className="border-2 border-gray-700 p-2 rounded-md absolute bottom-0 w-36 text-center transition delay-100 duration-200 transform ease-in-out hover:scale-105" to="/order">SHOP NOW</Link>
            </div>

            <div className="h-full p-16 w-full grid grid-cols-5 shopFooter text-white mt-10">{/* shop footer page */}
                <div className="col-span-2 py-2 px-5">
                    <h1 className="font-bold text-3xl select-none">TULIN BICYCLE SHOP</h1>
                    <p className="mt-10 select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non obcaecati quod natus quasi repellendus esse nobis veritatis ipsa qui!</p>
                    
                    <div className="flex py-10"> {/* social media icons */}
                        <i className="fab w-6 ml-2 opacity-30 rounded-xl fa-linkedin transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                        <i className="fab w-6 ml-2 opacity-30 rounded-xl fa-facebook-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                        <i className="fab w-6 ml-2 opacity-30 rounded-xl fa-twitter-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                        <i className="fab w-6 ml-2 opacity-30 rounded-xl fa-youtube transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                        <i className="fab w-6 ml-2 opacity-30 rounded-xl fa-whatsapp-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-items-center col-span-3">
                    <div>
                        <h2 className="font-bold select-none">Products</h2>
                        <ul className="py-8">
                            <li className="mt-2">Product 1</li>
                            <li className="mt-2">Product 2</li>
                            <li className="mt-2">Product 3</li>
                            <li className="mt-2">Product 4</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold select-none">Services</h2>
                        <ul className="py-8">
                            <li className="mt-2">Service 1</li>
                            <li className="mt-2">Service 2</li>
                            <li className="mt-2">Service 3</li>
                            <li className="mt-2">Service 4</li>
                        </ul>
                    </div> 
                    <div>
                        <h2 className="font-bold select-none">Resources</h2>
                        <ul className="py-8">
                            <li className="mt-2">News</li>
                            <li className="mt-2">Blog</li>
                            <li className="mt-2">Videos</li>
                            <li className="mt-2">FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
