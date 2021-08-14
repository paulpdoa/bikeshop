import {useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Helmet} from 'react-helmet';

const Customize = () => {

    const [show,setShow] = useState(false);

    return (
        <div className="customizeBanner relative">
        <Helmet>
            <title>Bicycle System | Customize</title>
        </Helmet>
            <div className="grid grid-cols-3 px-10 py-10">
                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.2 }}
                className="col-span-1"> { /* build choices */ }
                    <h1 className="text-gray-200 font-bold text-2xl">Your Custom Santa Cruz Hightower CC</h1>
                    <button className="p-1 bg-gray-700 rounded-sm text-yellow-600 mt-2">Back to bike Selection</button>
                        <ul className="font-semibold text-gray-300 cursor-pointer text-lg py-5"> 
                            <li>Frame</li>
                            <li>Suspension</li>
                            <li onClick={() => setShow(!show)}>
                                Wheels & Tires
                                <AnimatePresence>
                                    { show && 
                                    <motion.ul 
                                    initial={{ y:-10 }}
                                    animate={{ y:0 }}
                                    transition={{ duration:0.5,type:'spring',stiffness:50}}
                                    exit={{ y:-10,opacity:0 }}
                                    className="px-10 bg-gray-900 text-gray-100 opacity-50 w-1/2 rounded-xl">
                                        <li>Wheels</li>
                                        <li>Front Tire</li>
                                        <li>Rear Tire</li>
                                    </motion.ul> }
                                </AnimatePresence>
                            </li>
                            <li>Drivetrain</li>
                            <li>Cockpit</li>
                            <li>Brakes & Rotors</li>
                            <li>Accessories</li>
                        </ul>
                </motion.div>

                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.5 }}
                className="col-span-1 py-16"> { /* item container */ }
                    <img className="py-16" src="/image/framepng.png" alt="frame" />
                </motion.div>

                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.7 }}
                className="col-span-1 py-5 w-auto"> { /* parts chosen */ }
                   <div className="py-16 relative flex justify-end"> { /* main container of choices */ }
                    <button className="absolute top-0 right-0 bg-yellow-500 p-1 text-gray-800 font-semibold rounded-sm">Send Us Your Build</button>  
                       <div className="text-gray-200 overflow-scroll h-60">{ /* choices here */ }
                        <div className="w-3/4 flex justify-end p-2">
                            <img className="w-12 h-12 bg-gray-100 object-cover" src="/image/framepng.png" alt="frame" />
                            <div className="px-2 opacity-100">
                                <p>Santa Cruz Hightower CC</p>
                                <span>-Bike</span><br/>
                                <span>$6000.00</span>
                            </div>
                        </div>
                        <div className="w-3/4 flex justify-end p-2">
                            <img className="w-12 h-12 bg-gray-100 object-cover" src="/image/framepng.png" alt="frame" />
                            <div className="px-2 opacity-100">
                                <p>Santa Cruz Hightower CC</p>
                                <span>-Bike</span><br/>
                                <span>$6000.00</span>
                            </div>
                        </div>
                        <div className="w-3/4 flex justify-end p-2">
                            <img className="w-12 h-12 bg-gray-100 object-cover" src="/image/framepng.png" alt="frame" />
                            <div className="px-2 opacity-100">
                                <p>Santa Cruz Hightower CC</p>
                                <span>-Bike</span><br/>
                                <span>$6000.00</span>
                            </div>
                        </div>
                        <div className="w-3/4 flex justify-end p-2">
                            <img className="w-12 h-12 bg-gray-100 object-cover" src="/image/framepng.png" alt="frame" />
                            <div className="px-2 opacity-100">
                                <p>Santa Cruz Hightower CC</p>
                                <span>-Bike</span><br/>
                                <span>$6000.00</span>
                            </div>
                        </div>
                       </div>
                    </div>               
                </motion.div>
                    
            </div>
            <motion.div 
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ delay:0.2,type:'spring',stiffness:50 }}
            className="flex justify-around py-16 w-full relative bg-gray-200 h-full"> { /* parts choices */ }
                <div>
                    <img className="w-52" src="/image/bikewheel.png" alt="bikewheel" />
                    <div className="text-center">
                        <p className="font-semibold text-gray-700">Race Face Aeffect R 30</p>
                        <p>$699.00</p>
                        <button className="p-1 bg-yellow-600 w-1/2 rounded-sm text-gray-800 font-semibold">Select</button>
                    </div>
                </div>
                <div>
                    <img className="w-52" src="/image/bikewheel.png" alt="bikewheel" />
                    <div className="text-center">
                        <p className="font-semibold text-gray-700">Race Face Aeffect R 30</p>
                        <p>$699.00</p>
                        <button className="p-1 bg-yellow-600 w-1/2 rounded-sm text-gray-800 font-semibold">Select</button>
                    </div>
                </div>
                <div>
                    <img className="w-52" src="/image/bikewheel.png" alt="bikewheel" />
                    <div className="text-center">
                        <p className="font-semibold text-gray-700">Race Face Aeffect R 30</p>
                        <p>$699.00</p>
                        <button className="p-1 bg-yellow-600 w-1/2 rounded-sm text-gray-800 font-semibold">Select</button>
                    </div>
                </div>
                <div>
                    <img className="w-52" src="/image/bikewheel.png" alt="bikewheel" />
                    <div className="text-center">
                        <p className="font-semibold text-gray-700">Race Face Aeffect R 30</p>
                        <p>$699.00</p>
                        <button className="p-1 bg-yellow-600 w-1/2 rounded-sm text-gray-800 font-semibold">Select</button>
                    </div>
                </div>
                    { /* for buttons next and previous */ }
                        <svg className="w-12 bg-gray-100 shadow-md h-full left-0 absolute top-0 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <svg className="w-12 bg-gray-100 shadow-md h-full py-10 right-0 absolute top-0 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> 
                    { /* for buttons next and previous */ }
            </motion.div>
        </div>
    )
}

export default Customize
