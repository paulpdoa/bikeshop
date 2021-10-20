import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useParams,useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import LogoutModal from '../modals/LogoutModal';
import CartModal from '../modals/CartModal';

const AccessoryDetails = ({ logoutMssg,addToCart: cartMssg,setAddToCart }) => {

    const { item } = useParams();
    const imageLocation = 'http://localhost:5000/products/'
    const [accessory,setAccessory] = useState('');
    const [customerId,setCustomerId] = useState(0);
    const [quantity,setQuantity] = useState(1);
    const user = window.localStorage.getItem("user");

    const history = useHistory();

    
    // get the customer id to be able to insert in the database
    useEffect(() => {
        const customer_Id = window.localStorage.getItem("id");
        setCustomerId(customer_Id);
    },[])

    useEffect(() => {
        Axios.get(`/api/accessories/${item}`)
        .then((res) => {
            setAccessory(res.data);
            console.log(res.data)
        })
    },[item])

    // add to cart function
    const addToCart = (e) => {
        e.preventDefault();
        const buyerId = Number(customerId);
        
        Axios.post('/customer/cart', { productId: accessory.id, buyerId, quantity: quantity })
        .then((res) => {
            setAddToCart(res.data.status);
        })
    }

    // close add to cart modal
    const closeModal = (state) => {
        setAddToCart(state);
        history.push(`/cart/${user}`)
    }

    return (
        <div className="flex justify-center">
        <Helmet>
            <title>Bicycle System | {`${accessory.brand} ${accessory.item}`}</title>
        </Helmet>
        <div className="h-screen grid grid-cols-2 w-full max-w-7xl"> 
            <motion.div
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ duration:0.5,type:'spring',stiffness:50 }} 
            className="flex justify-center"> { /* item image here */ }
                <div className="">
                    <img className="object-cover w-3/4 rounded-xl ml-auto mr-auto mt-24" src={`${imageLocation}${accessory.image}`} alt={accessory.item} />
                    <div className="text-center mt-2"> {/*colors here */}
                        <span className="text-gray-700 font-normal select-none">Blue / Campagnolo</span>
                        <div className="ml-auto mr-auto flex justify-around w-16">
                            <img className="object-cover w-18 rounded-xl border-2 border-blue-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src={`${imageLocation}${accessory.image}`} alt={accessory.item} />
                            <img className="object-cover w-18 rounded-xl border-2 border-red-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src={`${imageLocation}${accessory.image}`} alt={accessory.item} />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay: 0.9 }} 
            className="px-10 py-20"> { /* information of item here */ }
                <div className="select-none">{ /* information brand */ }
                    <h3 className="font-medium text-gray-700 text-xl">{accessory.brand}</h3>
                    <p className="font-semibold text-gray-700 text-3xl">{accessory.description}</p>
                </div>
                <div className="py-8">{ /* information price model etc.. */ }
                    <span className="font-medium text-2xl text-gray-900 select-none">₱{accessory.price}</span>
                    <div className="flex justify-evenly py-3">
                        <div className="w-full">
                            <span className="font-semibold text-gray-700 select-none">Color:</span><br/>
                            <select className="border p-1 border-gray-800 rounded-sm w-3/4 outline-none" name="color">
                                <option hidden value="color">Choose color</option>
                                <option value="blue">Blue</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <span className="font-semibold text-gray-700 select-none">Model:</span><br/>
                            <select className="border p-1 border-gray-800 rounded-sm w-3/4 outline-none" name="color">
                                <option hidden value="model">Select model</option>
                                <option value="model">Model 1</option>
                            </select>
                        </div>
                    </div>
                    <div className="select-none"> {/* availability */}
                        <span className="font-semibold text-gray-700">Availability: </span>
                        <p className="inline-block font-light text-gray-900">Ships from Warehouse</p>
                    </div>

                        <div className="flex py-4"> {/* quantity add to cart */}
                            <div>
                                <span>Quantity</span><br/>
                                <div className="flex gap-2">
                                    <span onClick={() => setQuantity(quantity-1)} className="font-semibold text-xl cursor-pointer">-</span>
                                    <span className="font-semibold text-xl">{quantity}</span>
                                    <span onClick={() => setQuantity(quantity+1)} className="font-semibold text-xl cursor-pointer">+</span>
                                </div>
                            </div>
                            <form onSubmit={addToCart} className="flex justify-center items-center p-2 mt-2">
                                {/* Add the id to the cart table */}

                                <button className="bg-yellow-500 text-gray-200 p-2 rounded-md">Add to Cart</button>
                            </form>
                        </div>

                        <div className="flex justify-between">  {/* wish list and social media */}
                            <div>
                                <p className="text-gray-800 cursor-pointer">Add to Wish List</p>
                            </div>
                        
                            <div className="flex justify-center items-center"> {/* social media icons */}
                                <i className="fab w-6 opacity-40 rounded-xl fa-linkedin transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-facebook-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-twitter-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-youtube transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                                <i className="fab w-6 opacity-40 rounded-xl fa-whatsapp-square transition duration-200 transform hover:scale-150 cursor-pointer"></i>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
                </div>
               { logoutMssg && <LogoutModal /> }
               { cartMssg && <CartModal closeModal={closeModal} />}
            </div>
        
    )
}

export default AccessoryDetails;
