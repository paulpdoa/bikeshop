import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Axios from 'axios';

import CustomersMessage from './messagesComponents/CustomersMessage';
import CustomersConversation from './messagesComponents/CustomersConversation';
import CustomersInfo from './messagesComponents/CustomersInfo';
import AdminInputMssg from './messagesComponents/AdminInputMssg';

const Messages = ({ socket }) => {

    const [conversations,setConversations] = useState([]);
    const [message,setMessage] = useState('');
    const [chatRoomId,setChatRoomId] = useState('');
    const [user,setUser] = useState('');
    
    const minutes = new Date(Date.now()).getMinutes();

    const joinChat = (id,user) => {
        socket.emit("join_chat", id);
        setChatRoomId(id);
        setUser(user);
    }

    const sendMessage = async () => {
        if(message !== '') {
            const messageData = {
                chatRoom_id: chatRoomId,
                sender: window.localStorage.getItem("admin"),
                receiver: user,
                date: new Date(Date.now()).getHours() + ":" + (minutes < 10 ? '0' : '') + minutes,
                message: message,
                role:'admin'
            };
            await socket.emit("send_message", messageData);
            console.log(messageData);
            Axios.post('/api/message',messageData)
            .then((res) => {})

            setConversations([...conversations, messageData]);
            setMessage("");
        } 
    }

    // Receive message from user
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setConversations([...conversations, data]);
            console.log(data);
        })
    },[socket,conversations])


    return (
        <div className="">
        <Helmet><title>Bicycle System | Messages</title></Helmet>
            <div className="w-full px-5 py-5 relative">
                <div className="flex gap-5 min-h-screen">
                    <CustomersMessage socket={socket} joinChat={joinChat}/>
                    <CustomersConversation socket={socket} conversations={conversations} />
                    <CustomersInfo />
                </div>
                <AdminInputMssg socket={socket} sendMessage={sendMessage} message={message} setMessage={setMessage} />
            </div>
        </div>
    )
}

export default Messages
