import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';

import CustomersMessage from './messagesComponents/CustomersMessage';
import CustomersConversation from './messagesComponents/CustomersConversation';
import CustomersInfo from './messagesComponents/CustomersInfo';
import AdminInputMssg from './messagesComponents/AdminInputMssg';

const Messages = ({ socket, chatRoomID }) => {

    const [role] = useState(window.localStorage.getItem("role"));

    const [conversations,setConversations] = useState([]);
    const [message,setMessage] = useState('');
    
    const minutes = new Date(Date.now()).getMinutes();
    const sendMessage = async () => {
        if(message === '') {
            console.log("Enter something in the textbox!");
        } else {
            const messageData = {
                room: chatRoomID,
                admin: window.localStorage.getItem("admin"),
                time: new Date(Date.now()).getHours() + ":" + (minutes < 10 ? '0' : '') + minutes,
                message: message,
            };
        await socket.emit("send_message", messageData);
        setConversations([...conversations, messageData]);
        setMessage("");
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setConversations([...conversations, data]);
        })
    },[socket,conversations])


    return (
        <div className="">
        <Helmet><title>Bicycle System | Messages</title></Helmet>
            <div className="w-full px-5 py-5 relative">
                <div className="flex gap-5">
                    <CustomersMessage socket={socket} chatRoomID={chatRoomID} />
                    <CustomersConversation socket={socket} conversations={conversations} role={role} chatRoomID={chatRoomID} />
                    <CustomersInfo />
                </div>
                <AdminInputMssg socket={socket} sendMessage={sendMessage} message={message} setMessage={setMessage} />
            </div>
        </div>
    )
}

export default Messages
