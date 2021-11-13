import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import CartModal from '../modals/CartModal';

const PartDetails = ({ logoutMssg,addToCart: cartMssg,setAddToCart }) => {

    const [part,setPart] = useState('');
    const [customerId,setCustomerId] = useState(0);
    const [quantity,setQuantity] = useState(1);
    const [status] = useState('pending');

    const { item } = useParams();
    const imageLocation = 'http://localhost:5000/products/'

    const user = window.localStorage.getItem("user");

    const history = useHistory();

    useEffect(() => {
        const customer_Id = window.localStorage.getItem("id");
        setCustomerId(customer_Id);
    },[])

    useEffect(() => {
        Axios.get(`/api/parts/${item}`)
        .then((res) => {
            setPart(res.data);
        })
    },[item])

    const addToCart = (e) => {
        e.preventDefault();
        const buyerId = Number(customerId);
        
        Axios.post('/customer/cart', { inventoryId: part.id, buyerId, transactionId: buyerId, quantity: quantity, status: status })
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
            <title>Bicycle System | {`${part.brand_name} ${part.item_name}`}</title>
        </Helmet>
        <div className="flex flex-wrap justify-around w-full max-w-7xl"> 
            <motion.div
            initial={{ x:'-100vw' }}
            animate={{ x:0 }}
            transition={{ duration:0.5,type:'spring',stiffness:50 }} 
            className="flex justify-center items-center"> { /* item image here */ }
                <div className="w-full self-center">
                    <img className="object-cover w-96 rounded-xl ml-auto mr-auto mt-24" src={`${imageLocation}${part.product_image}`} alt={part.item_name} />
                    <div className="text-center mt-2"> {/*colors here */}
                        <span className="text-gray-700 font-normal select-none">Blue / Campagnolo</span>
                        <div className="ml-auto mr-auto flex justify-around w-16">
                            <img className="object-cover w-18 rounded-xl border-2 border-blue-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src={`${imageLocation}${part.product_image}`} alt={part.item_name} />
                            <img className="object-cover w-18 rounded-xl border-2 border-red-400 ml-auto mr-auto px-2 py-2 cursor-pointer" src={`${imageLocation}${part.product_image}`} alt={part.item_name} />
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
                    <h3 className="font-medium text-gray-700 text-xl">{part.brand_name}</h3>
                    <p className="font-semibold text-gray-700 text-3xl">{part.item_name}</p>
                </div>
                <div className="py-8">{ /* information price model etc.. */ }
                    <span className="font-medium text-2xl text-gray-900 select-none">₱{part.product_price}</span>
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
                                    <span onClick={() => setQuantity(quantity-1)} className={quantity <= 1 ? "font-semibold text-xl cursor-pointer pointer-events-none" : "font-semibold text-xl cursor-pointer"}>-</span>
                                    <span className="font-semibold text-xl">{quantity}</span>
                                    <span onClick={() => setQuantity(quantity+1)} className={quantity < part.quantity ? "font-semibold text-xl cursor-pointer" : 'font-semibold text-xl pointer-events-none'}>+</span>
                                </div>
                                { quantity >= part.quantity && <span className="text-sm text-red-500 absolute mt-1">You have reached tha maximum stock</span> }
                            </div>
                            <form onSubmit={addToCart} className="flex justify-center items-center p-2 mt-2">
                                <button className="bg-yellow-500 text-gray-200 p-2 rounded-md">Add to Cart</button>
                            </form>
                            <p className="text-gray-600 self-center text-sm">{ part.quantity } stock/s left</p>
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
                {/* Reviews and Product Details Here */}
                <div className="w-full grid grid-cols-3 gap-5 mb-10">
                    <div className="w-full col-span-2">
                        <div className="bg-white shadow-xl rounded-md p-2 h-36"> { /* Product Details */ }
                            <h2 className="font-bold text-xl">Product Details</h2>
                            <div className="flex gap-10 text-gray-800">
                                <div className="mt-2 flex flex-col">
                                    <span>Material: Aluminum Alloy</span>
                                    <span>Front: 100mm</span>
                                </div>
                                <div className="mt-2 flex flex-col">
                                    <span>Rear: 135mm</span>
                                    <span>Support: 8/9/10/11 SPEED</span>
                                    <span>Description: { part.description }</span>
                                </div> 
                            </div>
                        </div>
                        <div className="bg-white rounded-md shadow-xl p-2 mt-5"> { /* Reviews Here */ }
                        <h2 className="font-bold text-xl">Ratings & Reviews</h2>
                            <div className="grid grid-cols-2 justify-items-center w-3/4">
                                <div className="flex gap-10 self-center col-span-1">
                                    <div className="flex items-center flex-col">
                                        <span className="font-bold text-3xl">4.9/<span className="text-gray-500 text-2xl">5</span></span>
                                        <div className="flex">
                                            <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                            <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                            <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                            <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                            <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm text-gray-600">44 ratings</span>
                                    </div>
                                </div>

                                <div className="flex flex-col font-bold col-span-1 w-full p-2">
                                    <div className="flex gap-2 w-full items-center">
                                        <span>5</span>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                       <div className="flex bg-yellow-300 rounded-xl h-2" style={{ width: "90%" }}></div>
                                    </div>
                                    <div className="flex gap-2 w-full items-center">
                                        <span>4</span>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                       <div className="flex bg-yellow-300 rounded-xl h-2" style={{ width: "80%" }}></div>
                                    </div>
                                    <div className="flex gap-2 w-full items-center">
                                        <span>3</span>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                       <div className="flex bg-yellow-300 rounded-xl h-2" style={{ width: "70%" }}></div>
                                    </div>
                                    <div className="flex gap-2 w-full items-center">
                                        <span>2</span>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                       <div className="flex bg-yellow-300 rounded-xl h-2" style={{ width: "60%" }}></div>
                                    </div>
                                    <div className="flex gap-2 w-full items-center">
                                        <span>1</span>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                       <div className="flex bg-yellow-300 rounded-xl h-2" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="mt-5"> {/* Product Review Here */}
                                <h2 className="font-bold text-xl">Product Review</h2>
                                <div className="w-full flex justify-between mt-2 border-t-2 border-gray-200">
                                    <div className="flex mt-2">
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-gray-700 text-sm">3 weeks ago</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm text-gray-700">Darwin V.</span>
                                    <p className="text-sm text-gray-800">All goods. it only took three days to arrive. Great item for my bike. Also affordable price. Nice one thanks seller!</p>
                                    <span className="text-xs text-gray-700">color family: Blue, model: N/a</span>
                                </div>
                                <div className="w-full flex justify-between mt-2 border-t-2 border-gray-200">
                                    <div className="flex mt-2">
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-gray-700 text-sm">3 weeks ago</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm text-gray-700">Darwin V.</span>
                                    <p className="text-sm text-gray-800">All goods. it only took three days to arrive. Great item for my bike. Also affordable price. Nice one thanks seller!</p>
                                    <span className="text-xs text-gray-700">color family: Blue, model: N/a</span>
                                </div>
                                <div className="w-full flex justify-between mt-2 border-t-2 border-gray-200">
                                    <div className="flex mt-2">
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        <svg class="w-6 h-6" fill="yellow" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-gray-700 text-sm">3 weeks ago</span>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <span className="text-sm text-gray-700">Darwin V.</span>
                                    <p className="text-sm text-gray-800">All goods. it only took three days to arrive. Great item for my bike. Also affordable price. Nice one thanks seller!</p>
                                    <span className="text-xs text-gray-700">color family: Blue, model: N/a</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 w-full bg-white shadow-xl rounded-md overflow-y-scroll h-5/6">
                        <div className="flex flex-col mt-2">
                            <img className="object-cover self-center shadow-xl w-3/4 rounded-xl border border-gray-200" src="/image/shifter.jpg" alt="shifter" />
                            <div className="flex gap-2 ml-14 mt-2">
                                <span className="font-semibold text-gray-800">Brand Name</span>
                                <span className="font-semibold text-gray-800">Item Name</span>
                            </div>
                            <p className="ml-14 text-justify">Item Description....</p>
                            <span className="ml-14 font-bold text-xl">₱8999</span>
                        </div>
                        <div className="flex flex-col mt-2">
                            <img className="object-cover self-center shadow-xl w-3/4 rounded-xl border border-gray-200" src="/image/shifter.jpg" alt="shifter" />
                            <div className="flex gap-2 ml-14 mt-2">
                                <span className="font-semibold text-gray-800">Brand Name</span>
                                <span className="font-semibold text-gray-800">Item Name</span>
                            </div>
                            <p className="ml-14 text-justify">Item Description....</p>
                            <span className="ml-14 font-bold text-xl">₱8999</span>
                        </div>
                        <div className="flex flex-col mt-2">
                            <img className="object-cover self-center shadow-xl w-3/4 rounded-xl border border-gray-200" src="/image/shifter.jpg" alt="shifter" />
                            <div className="flex gap-2 ml-14 mt-2">
                                <span className="font-semibold text-gray-800">Brand Name</span>
                                <span className="font-semibold text-gray-800">Item Name</span>
                            </div>
                            <p className="ml-14 text-justify">Item Description....</p>
                            <span className="ml-14 font-bold text-xl">₱8999</span>
                        </div>
                    </div>
                </div>
                {/* end of reviews and details */}
                </div>
               { logoutMssg && <LogoutModal /> }
               { cartMssg && <CartModal closeModal={closeModal} /> }
            </div>
        
    )
}

export default PartDetails;
