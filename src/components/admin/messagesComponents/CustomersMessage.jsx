import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 

const CustomersMessage = ({ socket }) => {

    const [newMessages,setNewMessages] = useState([]);

    const joinChat = (id,room) => {
        socket.emit("join_chat", `${id}-${room}`);
    }

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
            <div className="mt-3">
                { newMessages.length < 1 ? 
                    <div className="flex justify-center items-center">
                        <p className="font-semibold text-gray-400 text-3xl text-center">There's no messages yet from customers :)</p>
                    </div>
                    :
                    newMessages && newMessages.map((person) => (
                        <div onClick={() => joinChat(person.id,person.name)} key={ person.id } className="flex items-center hover:bg-gray-300 pt-2 rounded cursor-pointer mt-3">
                            <img className="w-12 h-12 rounded-full" src={person.image} alt="miming" />
                            <div className="ml-2 text-gray-700 font-semibold">
                                <span className="font-semibold text-lg text-gray-800">{ person.name }</span>
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
