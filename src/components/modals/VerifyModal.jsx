import { AiOutlineCloseCircle,AiOutlineMail } from 'react-icons/ai';
import { GiCrossMark } from 'react-icons/gi';
import { motion } from 'framer-motion';

import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const VerifyModal = ({verify,setVerifyModal,username}) => {

    const history = useHistory();

    const verifyAccount = async () => {
        await Axios.get(`/api/customers/${username}`)
        .then((res) => {
            history.push(`/verification/${res.data.uniqueId}`);
            localStorage.setItem("user",res.data.userName);
        });
    }

    return (
        <motion.div className="absolute flex justify-center items-center w-full h-72"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        >
            <div className="bg-gray-300 rounded-md shadow-2xl border-2 border-gray-400 w-1/4 h-72">
                <div className="flex items-center p-2 bg-gray-600 justify-between">
                    <span className="text-3xl text-gray-100 flex gap-2 items-center"><AiOutlineMail /> <span className="text-lg">Verify Email!</span></span>
                    <button className="text-lg text-gray-100" onClick={() => setVerifyModal(false)}>
                        <AiOutlineCloseCircle />
                    </button>
                </div>
                <div className="flex items-center justify-center h-1/2">
                    <div className="flex items-center justify-center flex-col h-full mt-20">
                        <span className="text-red-500 text-3xl"><GiCrossMark /></span>
                        <h1 className="font-bold text-2xl text-gray-700 select-none text-center p-2">{ verify }</h1>
                        <div className="mt-5">
                            <button onClick={verifyAccount} className="p-2 bg-sales text-gray-100 rounded-md font-semibold">Verify this account</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default VerifyModal
