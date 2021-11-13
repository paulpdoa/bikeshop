import { motion } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';

const PaymentModal = ({ setPaymentMssg }) => {

  const history = useHistory();
  const user = window.localStorage.getItem("user")

  const toStore = () => {
    setPaymentMssg(false);
    history.push('/');
  }

    return (
        <motion.div className="flex flex-col items-center h-1/2 overflow-y-scroll mt-20 w-1/2 absolute bg-white shadow-2xl rounded max-w-7xl max-h-96 px-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        >
          <div className="flex items-center w-full flex-col py-10 border-b-2 border-gray-400">
            <svg className="w-9 h-9 text-gray-100" fill="green" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-4xl font-bold">Your order has been placed!</span>
            <p className="text-gray-800">Reference # {12345678}</p>
          </div>
          <div className="flex items-center w-full py-10 justify-between border-b-2 border-gray-400">
            <div className="flex flex-col">
              <span className="text-xl">For your order details you can go to</span>
              <span className="font-bold text-xl">My Account &gt; My Orders</span>
            </div>
            <div className="">
              <Link to={`/profile/${user}`} className="w-full bg-gray-800 p-2 rounded text-center text-gray-100 shadow-xl font-semibold flex justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                My Orders
              </Link>
            </div>
          </div>
          <div className="flex items-center w-full py-10 justify-between border-b-2 border-gray-400">
            <div className="flex flex-col w-1/2">
              <span className="text-xl">We've sent a confirmation email to *******@gmail.com with the order details</span>
              <span className="font-bold text-xl">My Account &gt; My Orders</span>
            </div>
            <div className="">
              <button className="bg-gray-800 p-2 rounded text-gray-100 w-full shadow-xl font-semibold flex justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Check Email
              </button>
            </div>
          </div>
          <button onClick={toStore} className="font-semibold bg-gray-900 text-gray-100 mt-10 mb-10 p-2 w-1/4 text-center rounded" to='/'>Back to Store</button>
        </motion.div>
    )
}

export default PaymentModal
