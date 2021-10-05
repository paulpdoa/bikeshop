import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const RegisterModal = () => {
    return (
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        className="absolute bg-gray-900 bg-opacity-75 rounded-xl w-1/2 flex justify-center h-1/2 top-48 max-h-96 max-w-5xl overflow-hidden shadow-2xl"
        >
            <h1 className="animate-pulse font-semibold text-3xl text-gray-100 flex flex-col items-center -mt-36 justify-center">
                    Successfully Registered!  
                <AiOutlineLoading3Quarters className="animate-spin mt-2" />
            </h1>
            <div className="absolute bottom-0 bg-gray-50 w-full h-44 flex items-center justify-center">
                <h1 className="text-3xl font-semibold text-gray-900 text-center">Thank you for registering!</h1>
            </div>
        </motion.div>
    )
}

export default RegisterModal
