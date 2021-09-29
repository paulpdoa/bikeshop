import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div className="flex justify-center h-screen">
        <Helmet>
            <title>Bicycle System | Contact Us</title>
        </Helmet>
            <div className="max-w-7xl w-full py-16 px-16">
                <h1 className="font-bold text-4xl px-48">Contact Us</h1>
                <div className="flex flex-col w-full justify-center items-center gap-2 mt-5">
                    <input className="p-2 rounded-xl border border-gray-400 w-1/2 placeholder-gray-900 outline-none" placeholder="Email" type="email" name="" id="" />
                    <textarea className="p-2 rounded-xl border border-gray-400 w-1/2 placeholder-gray-900 outline-none" placeholder="Message..." name="" id="" cols="30" rows="10"></textarea>
                    <button className="bg-gray-600 p-2 text-gray-100 font-semibold rounded-xl w-32">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact