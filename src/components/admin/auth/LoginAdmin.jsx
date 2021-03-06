import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { RiKeyFill } from 'react-icons/ri';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginAdmin = ({ setRole,setAuthStatus,setAdmin }) => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [showPass,setShowPass] = useState(false);
    const [status,setStatus] = useState('');
    const [passStatus,setPassStatus] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('/api/admin/login', { userName: username, password })
        .then((res) => {
            if(res.data.mssg) {
                setStatus(res.data.mssg);
            } else if(res.data.pass) {
                setPassStatus(res.data.pass);
            } else {
                setRole(res.data.role);
                setAdmin(res.data.admin);
                window.localStorage.setItem("admin",res.data.admin);
                window.localStorage.setItem("role", 'admin');
                window.localStorage.setItem("isAdminAuth", true);
                sessionStorage.setItem('adminToken',res.data.adminToken);
                setAuthStatus(true);
                history.push(res.data.redirect);
            }
        })
    }

    return (
    <div className="relative md:grid grid-cols-3 items-center h-screen">
    <Helmet><title>Bicycle System | Admin Login</title></Helmet>
        <div className="col-span-2 flex justify-center">
            <img className="w-1/2 overflow-visible" src="/image/tulin.png" alt="tulinlogo" />
        </div>
        <form onSubmit={handleSubmit} className="col-span-1 md:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold flex items-center gap-1 w-full">Admin <RiKeyFill /></h1>
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
                <Link to="/admin/forgot" className="mt-1 flex justify-center text-xs text-blue-600">Forgot password?</Link>
                <hr className="mt-3 border border-gray-200"></hr>
                <Link className="flex justify-center mt-3 p-1 rounded text-white bg-green-400" to="/admin/register">Create new account</Link>
            </div>
            <Link className="text-sm text-blue-600" to='/login'>Login as customer</Link>
        </form>
    </div>
    )
}

export default LoginAdmin


