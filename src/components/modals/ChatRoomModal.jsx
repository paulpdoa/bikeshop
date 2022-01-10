import { useState,useEffect } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { AiOutlineSend } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import { GrAttachment } from 'react-icons/gr';
import ScrollToBottom from 'react-scroll-to-bottom';

import Axios from 'axios';

const ChatRoomModal = ({ socket,setCloseChat,chatRoomID }) => {
    
    const [user] = useState(localStorage.getItem("user"));
    const [message,setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const [convos,setConvos] = useState([]);

    // There should be only one admin in this system.
    const [adminName,setAdminName] = useState('');
    useEffect(() => {
        Axios.get('/api/admins')
        .then((res) => {
            setAdminName(res.data[0].userName);
        })
    },[])

    // Get all messages from database
    Axios.get('/api/message')
    .then((res) => {
        setConvos(res.data);
    })

    const minutes = new Date(Date.now()).getMinutes();

    const sendMessage = async () => {
         if(message !== "") {
            const messageData = {
                chatRoom_id: chatRoomID,
                sender: user,
                receiver: adminName,
                message: message,
                date: new Date(Date.now()).getHours() + ":" + (minutes < 10 ? '0' : '') + minutes,
                role: 'user'
            };
             await socket.emit("send_message",messageData);
             
             Axios.post('/api/message',messageData)
             .then((res) => {})

             setMessages([...messages,messageData]);
             setMessage("");
         }  
    }

    // Receive the message from the admin
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessages([...messages,data]);
            console.log(data);
        })
    },[socket,messages])

    
    return (
        <div className="fixed right-5 bottom-0 w-96 z-50 bg-white h-96">
            <div onClick={() => setCloseChat(false)} className="bg-gray-700 flex justify-between w-full px-2 py-2 cursor-pointer">
                <div className="flex items-center gap-2">
                    <FiMessageSquare />
                    <h1 className="font-semibold select-none">Tulin Chat Support</h1>
                </div>
                <div className="flex items-center gap-4">
                   <button onClick={() => setCloseChat(false)}><VscChromeMinimize /></button>
                </div>
            </div>
            <ScrollToBottom className="bg-white h-72">
                {/* Chat Box Container */}
                <div> 
                    { /* For the user response */ }
                    { messages.length < 1 ?
                        <div className="flex justify-center items-center h-72">
                            <div className="w-1/2 text-gray-400 animate-pulse">
                                <h1 className="text-xl text-center">No conversation yet, say Hi to admin :)</h1>
                            </div> 
                        </div>
                        :
                        messages.map((messageContent) => (
                        <>
                            <div key={ minutes } className={ messageContent.sender === adminName ? "flex justify-start" : "flex justify-end" }>
                                <div className={messageContent.sender !== adminName ? "w-1/2 rounded-md p-2 m-2 bg-blue-500 break-words" : "w-1/2 rounded-md p-2 m-2 bg-gray-500 break-words"}>
                                    <p className="text-gray-100">{messageContent.message}</p>
                                </div>
                            </div>
                            <span className={ messageContent.sender !== adminName ? "text-gray-700 text-xs float-right mr-3 font-semibold" : "text-gray-700 text-xs ml-2 float-left font-semibold"}>{ messageContent.sender ? messageContent.sender : messageContent.receiver} {messageContent.date}</span><br/>  
                        </>
                    ))}                       
                </div>
            </ScrollToBottom>
            <div className="w-full bg-gray-100 flex px-2"> { /* Send Message Here */ }
                <span className="m-1 self-center relative cursor-pointer">
                    <GrAttachment />
                    <input className="absolute w-full top-0 left-0 opacity-0 cursor-pointer" accept="image/*" type="file" />
                </span>
                <input onKeyPress={(e) => e.key === "Enter" && sendMessage() } className="w-full rounded-md bg-gray-200 p-2 text-gray-900 outline-none m-1" type="text" placeholder="Aa" onChange={(e) => setMessage(e.target.value)} 
                    value={message}
                />
                <button onClick={sendMessage} className="text-gray-900 text-lg text-center mr-2"><AiOutlineSend /></button>
            </div>
        </div>
    )
}

export default ChatRoomModal;