import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillFacebook } from 'react-icons/ai';
import emailjs from 'emailjs-com';

import LogoutModal from '../modals/LogoutModal';
import Footer from '../shop/partials/Footer';

const Contact = ({ logoutMssg }) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageData = {
            name,
            email,
            message
        }
        emailjs.sendForm('service_u1q4zdo','template_hlbtksq',e.target,'user_03ZclDWDSly4UKfcbFfF2')
        .then((res) => {
            alert(res.text);
            setName('');
            setEmail('');
            setMessage('');

        })
        .catch((err) => console.log(err));
    }

    return (
        <div className="relative">
        <Helmet><title>Bicycle System | Contact Us</title></Helmet>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.686503362786!2d120.85162561466201!3d14.387541389938468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962c86ebd844c7%3A0x67cb4930ead5600b!2sTulin%20Bicycle%20and%20Repair%20Shop!5e0!3m2!1sen!2sph!4v1636467526062!5m2!1sen!2sph" height="450" style={{  border:"0"  }} allowFullScreen="" loading="lazy" title="Tulin Bike Shop Map"></iframe>     
            <div className="flex justify-center">
                <div className="max-w-7xl w-full">
                    <h1 className="text-5xl text-center mt-10">CONTACT US</h1>
                    <div className="w-full flex items-center justify-center">
                        <div className="grid grid-cols-3 justify-items-center w-full mt-10">
                            <div className="flex flex-col justify-center items-center col-span-1 w-full px-5">
                                <svg className="w-10 h-10" fill="black" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-xl text-center">OUR STORE</span>
                                <span className="text-center w-1/2">05 Lt. Aster Street, Sta. Cecilia 1 Subdivision, Tanza, Cavite 4108 Cavite</span>
                            </div>
                            <div className="flex flex-col items-center justify-center col-span-1 w-full px-5 border-r-2 border-l-2 border-gray-600">
                                <svg className="w-10 h-10" fill="black" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-start">Tel. No. 482-3491-31</span>
                                <span>Mobile No. 09325421176</span>
                                <span className="flex items-center"><AiFillFacebook /> Tulin Bicycle Shop</span>
                            </div>
                            <div className="flex flex-col items-center justify-center col-span-1 w-full px-5">
                                <svg className="w-10 h-10" fill="black" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                               <span className="text-xl text-center">OPENING HOURS</span>
                               <span>Mon - Fri 11:00 - 19:00</span>
                               <span>Sat & Sun 10:00 - 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-900 flex justify-center w-full mt-20">
                <div className="grid grid-cols-2 gap-10 w-1/2 justify-items-center px-16 py-16 max-w-4xl">
                    <div className="col-span-1">
                        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 outline-none" cols="40" rows="5" required placeholder="Message"></textarea>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <input className="p-2 w-full" name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="Name"  />
                        <input className="p-2 w-full" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email"  />
                        <button className="border border-gray-300 p-2 text-gray-300 rounded w-1/2">Submit</button>
                    </div>
                </div>
                { logoutMssg && <LogoutModal /> }
            </form>
            <Footer />
        </div>
    )
}

export default Contact
