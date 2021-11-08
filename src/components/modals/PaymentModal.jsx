import { motion } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';

const PaymentModal = ({ setPaymentMssg }) => {

  const history = useHistory();
  const user = window.localStorage.getItem("user")

  const closeModal = () => {
    setPaymentMssg(false);
    history.push(`/profile/${user}`);
  }

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
            <span className="text-4xl font-bold">Your order has been placed!</span>
            <p className="text-gray-800">Your payment detail has been sent to your email, please check for details</p>
          </div>
          <div className="flex absolute bottom-0 justify-around w-full mb-12">
              <Link to={`/profile/${user}`} className="bg-gray-800 p-2 rounded text-center text-gray-100 w-1/4 shadow-xl font-semibold flex justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                My Orders
              </Link>
              <button className="bg-gray-800 p-2 rounded text-gray-100 w-1/4 shadow-xl font-semibold flex justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Check Email
              </button>
          </div>
          <div onClick={closeModal} className="absolute top-5 right-5 cursor-pointer">
            <svg className="w-6 h-6 text-gray-100" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>
    )
}

export default PaymentModal
