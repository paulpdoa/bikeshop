const ChatHead = ({ setCloseChat,socket,chatRoomID }) => {

    const isLoggedIn = window.localStorage.getItem("isUserAuth");

    const joinChat = () => {
        socket.emit("join_chat", chatRoomID);
    }

    return (
        <div onClick={joinChat} className={ isLoggedIn ? "group fixed right-5 bottom-5 z-50 flex flex-row-reverse items-center justify-between animate-bounce w-36" : "opacity-0" }>
            <div onClick={() => setCloseChat(true)} className="w-12 flex">
                <img className="w-12 rounded-full border-2 border-gray-900 cursor-pointer self-center transform hover:scale-125" src="/image/admin-icon.png" alt="admin-icon" />
            </div>
            <div className="bg-gray-400 h-14 flex items-center rounded-md bg-opacity-50 select-none opacity-0 group-hover:opacity-100 transition transform duration-150 delay-100 group-hover:translate-y-6">
                <h1 className="font-semibold m-1">Need help?</h1>
            </div>
        </div>
    )
}

export default ChatHead
