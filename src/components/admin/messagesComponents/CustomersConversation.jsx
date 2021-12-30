import { BsThreeDotsVertical } from 'react-icons/bs';
import ScrollToBottom from 'react-scroll-to-bottom';

const CustomersConversation = ({ conversations }) => {

    return (
        <div className="w-full">
            <div className="py-2 flex justify-between items-center gap-3 border-b border-gray-400">
                <div className="flex gap-2">
                    <img className="h-14 w-14 rounded-full" src="/image/miming.jpg" alt="asd" />
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
                            <div className={ conversation.admin ? "flex justify-end" : "flex justify-start" }>
                                <div className={ conversation.admin ? "w-1/2 rounded-md p-2 m-2 bg-blue-500 break-words" : "w-1/2 rounded-md p-2 m-2 bg-gray-500 break-words"}>
                                    <p className="text-gray-100">{ conversation.message }</p>  
                                </div>
                            </div>
                            <span className={ conversation.admin ? "float-right text-sm" : "float-left text-sm"}>{ conversation.time } { conversation.user ? conversation.user : conversation.admin }</span><br/>
                        </>
                    )
                )}
            </ScrollToBottom>
        </div>
    )
}

export default CustomersConversation
