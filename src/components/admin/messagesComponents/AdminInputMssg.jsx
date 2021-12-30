import { GrAttachment } from "react-icons/gr";
import { AiOutlineSend } from 'react-icons/ai';

const AdminInputMssg = ({ sendMessage,setMessage,message }) => {

    return (
        <div className="main-container">
            <div className="fixed bottom-0 bg-gray-30 flex items-center p-2">
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

export default AdminInputMssg
