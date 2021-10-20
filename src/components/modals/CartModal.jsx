import { motion } from 'framer-motion';

const CartModal = ({ closeModal }) => {
    return (
        <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        className="absolute bg-gray-900 rounded-xl w-1/4 flex justify-center h-1/2 top-48 max-h-96 max-w-5xl overflow-hidden shadow-2xl"
        >
            <svg className="w-24 h-24 text-gray-100 top-11 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="absolute bottom-0 bg-gray-50 w-full h-44 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-normal text-gray-900 text-center">Product has been added to your cart</h1>
                <button onClick={() => closeModal(false)} className="bg-gray-900 text-gray-100 w-16 p-2 rounded-lg text-xl mt-2">OK</button>
            </div>
        </motion.div>
    )
}

export default CartModal
