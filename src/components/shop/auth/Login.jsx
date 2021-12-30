import { Link, useHistory,withRouter } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import { Helmet } from 'react-helmet';

import VerifyModal from '../../modals/VerifyModal';

const Login = ({ setUser,setAuthStatus,setRole,setVerifyModal,verifyModal }) => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [showPass,setShowPass] = useState(false);
    const [status,setStatus] = useState('');
    const [passStatus,setPassStatus] = useState('');

    const [verify,setVerify] = useState('');

    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("userToken")) {
            history.push('/');
        }
    },[history])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('/api/login',{userName:username,password})
        .then((res) => {
           if(res.data.pass) {
              setTimeout(() => {
                setPassStatus('');
              },1000)
              setPassStatus(res.data.pass);
           } else if(res.data.verify) {
                setVerify(res.data.verify);
                setVerifyModal(true);
                localStorage.setItem("user",username);
           }
           else if(res.data.mssg) {
               setTimeout(() => {
                setStatus('');
               },1000)
               setStatus(res.data.mssg);
           } else {
                window.localStorage.setItem("user",res.data.user)
                window.localStorage.setItem("isUserAuth", true);
                window.localStorage.setItem("role", 'customer');
                window.localStorage.setItem("id",res.data.userID);
                setAuthStatus(true)
                setRole(res.data.role);
                setUser(res.data.user);
                localStorage.setItem("userToken",res.data.token);
                history.push(res.data.redirect);
            }
        })
    }
   
    return (
        <div className="relative md:grid grid-cols-3 items-center h-screen">
        <Helmet>
            <title>Bicycle System | Login</title>
        </Helmet>
            <div className="col-span-2 flex justify-center">
                <img className="w-1/2 overflow-visible" src="/image/tulin.png" alt="tulinlogo" />
            </div>
            <form onSubmit={handleSubmit} className="col-span-1 md:w-1/2 flex flex-col justify-center items-center">
                <div className="md:w-full py-1">
                    <input onChange={(e) => setUsername(e.target.value)} value={username} className="md:w-full outline-none p-2 border rounded border-gray-300" type="text" placeholder="Enter username" required />
                    <p className="text-xs text-red-500 text-left ml-2">{status}</p>
                </div>
                <div className="md:w-full py-1 relative">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="md:w-full p-2 outline-none border rounded border-gray-300" type={!showPass ? 'password' : 'text'} placeholder="Enter password" required />
                    <p className="text-xs text-red-500 text-left ml-2">{passStatus}</p>
                    {!showPass ? 
                    <svg onClick={() => setShowPass(!showPass)} className="w-6 h-6 absolute top-3 right-2 cursor-pointer opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg> :
                    <svg onClick={() => setShowPass(!showPass)} className="w-6 h-6 absolute top-3 right-2 cursor-pointer opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg> }
                </div>
                <div className="md:w-full m-1">
                    <button className="bg-black text-center text-white w-full p-1 rounded hover:bg-white transition ease-in duration-100 hover:text-black hover:shadow-lg hover:ease-out">Login</button> 
                    <Link to="/forgot" className="mt-1 flex justify-center text-xs text-blue-600">Forgot password?</Link>
                    <hr className="mt-3 border border-gray-200"></hr>
                    <Link className="flex justify-center p-1 rounded text-white bg-green-400" to="/register">Create new account</Link>
                </div>
                <Link to='/' className="text-blue-500">View items in the store</Link> 
            </form>
            <a className="text-gray-200 absolute" href='/admin/login'>Login as admin</a>
            {/* Show this modal when the user is not yet verified */}
            { verifyModal && <VerifyModal verify={verify} setVerifyModal={setVerifyModal} username={username} passStatus={passStatus} /> }
        </div>
    )
}

export default withRouter(Login);
