import { motion } from 'framer-motion';

const PaymentModal = ({ setPaymentMssg }) => {
    return (
        <motion.div className="flex items-center h-1/2 mt-20 w-1/2 absolute bg-white shadow-2xl rounded max-w-7xl max-h-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        >
          <div className="flex items-center w-full flex-col">
            <svg className="w-9 h-9 text-gray-100" fill="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-2xl font-bold">Your order has been placed!</span>
            <p className="text-gray-800">Your payment detail has been sent to your email, please check for details</p>
          </div>
          <div className="flex absolute bottom-0 justify-around w-full mb-12">
              <button className="bg-gray-800 p-2 rounded text-gray-100 w-1/4 shadow-xl font-semibold">My Orders</button>
              <button className="bg-gray-800 p-2 rounded text-gray-100 w-1/4 shadow-xl font-semibold">Check Email</button>
          </div>
          <div onClick={() => setPaymentMssg(false)} className="absolute top-5 right-5 cursor-pointer">
            <svg className="w-6 h-6 text-gray-100" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>
    )
}

export default PaymentModal
