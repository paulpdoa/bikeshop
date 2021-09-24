import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Helmet} from 'react-helmet';
const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center screen">
        <Helmet>
            <title>Bicycle System | 404</title>
        </Helmet>
            <div className="grid grid-cols-2 gap-10">
                <motion.div 
                initial={{ x:'-100vw' }}
                animate={{ x:0 }}
                transition={{ type:'spring',stiffness:50 }}
                className="self-center">
                    <h1 className="font-semibold text-9xl">404</h1>
                    <p className="font-normal text-2xl">Sorry, the page was not found</p>
                    <Link className="bg-gray-800 text-gray-200 p-2 absolute mt-5 w-32 text-center rounded-sm" to='/'>Go Back</Link>
                </motion.div>
                <motion.div 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:0.5 }}
                className="self-center">
                    <img className="w-full select-none" src="/image/404.png" alt="404" />
                </motion.div>
            </div>
        </div>
    )
}

export default ErrorPage
