import { BsThreeDotsVertical } from 'react-icons/bs';
import ScrollToBottom from 'react-scroll-to-bottom';

const CustomersConversation = ({ conversations }) => {

    const admin = localStorage.getItem('admin');

    return (
        <div className="w-full">
            <div className="py-2 flex justify-between items-center gap-3 border-b border-gray-400">
                <div className="flex gap-2">
                    <img className="h-14 w-14 rounded-full" src="/image/admin-icon.png" alt="asd" />
                    <div className="flex-col flex">
                        <span className="font-bold text-lg text-gray-800">Paul Andres</span>
                        <span>polopdoandres@gmail.com</span>
                    </div>
                </div>
                <span className="text-xl cursor-pointer" onClick={ () => console.log("Open menu for customer info") }>
                    <BsThreeDotsVertical />
                </span>
            </div> 
            <ScrollToBottom>    
                { conversations && 
                    conversations.map((conversation) => (
                        <>
                            <div key={conversation.id} className={ conversation.receiver !== admin ? "flex justify-end" : "flex justify-start" }>
                                <div className={ conversation.receiver !== admin ? "w-1/2 rounded-md p-2 m-2 bg-blue-500 break-words" : "w-1/2 rounded-md p-2 m-2 bg-gray-500 break-words"}>
                                    <p className="text-gray-100">{ conversation.message }</p>  
                                </div>
                            </div>
                            <span className={ conversation.receiver !== admin ? "float-right text-sm" : "float-left text-sm"}>{ conversation.date } { conversation.receiver ? conversation.sender : conversation.receiver }</span><br/>
                        </>
                    )
                )}
            </ScrollToBottom>
        </div>
    )
}

export default CustomersConversation
