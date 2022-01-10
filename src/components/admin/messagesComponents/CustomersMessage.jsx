import { useState,useEffect } from 'react';
import Axios from 'axios';

import { FiSearch } from 'react-icons/fi'; 

const CustomersMessage = ({ joinChat }) => {

    const [newMessages,setNewMessages] = useState([]);

    // Get the users who messages the admin
    useEffect(() => {
        Axios.get('/api/message')
        .then((res) => {
            setNewMessages(res.data);
        })
    },[])


    return (
        <div className="border-r border-gray-400 px-2 w-1/2">
            <h1 className="font-bold text-gray-800 text-4xl">Messages</h1>
            <div className="flex items-center">
                <input type="search" placeholder="Search Message" className="w-full p-2 mt-2 border border-gray-400 outline-none" 
                    onKeyPress={ (e) => e.key === "Enter" && console.log("Test Search") }
                />
                <button onClick={ () => console.log('search something') } className="h-10 rounded-r mt-2 bg-gray-900 text-gray-100 px-2 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                    <FiSearch />
                </button>
            </div>
            <div className="mt-3 min-h-fit overflow-y-scroll">
                { newMessages.length < 1 ? 
                    <div className="flex justify-center items-center">
                        <p className="font-semibold text-gray-400 text-3xl text-center">There's no messages yet from customers :)</p>
                    </div>
                    :
                    newMessages && newMessages.map((person) => (
                        <div onClick={() => joinChat(person.chatRoom_id,person.sender)} key={ person.id } className="flex items-center hover:bg-gray-300 pt-2 rounded cursor-pointer mt-3">
                            {/* <img className="w-12 h-12 rounded-full" src={person.image} alt="miming" /> */}
                            <span className="font-bold text-lg rounded-full bg-blue-500 text-gray-100 h-10 w-10 overflow-hidden text-center">{person.sender}</span>
                            <div className="ml-2 text-gray-700 font-semibold">
                                <span className="font-semibold text-lg text-gray-800">{ person.sender }</span>
                                <p> { person.message.length > 25 ? `${person.message.substring(0,40)}...` : person.message}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomersMessage
