import React,{ useState,useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Forgot = () => {

    const [account,setAccount] = useState('');
    const [status,setStatus] = useState(''); 

    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("userToken")) {
            history.push('/');
        }
    },[history])

    const onSubmit = (e) => {
        e.preventDefault();

        Axios.post('/api/forgot',{userName:account})
        .then((res) => {
            if(res.data.user) {
                setStatus(res.data.mssg);  
            } else {
                setStatus(res.data.mssg);
            }
        }) 
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
        <Helmet>
            <title>Bicycle System | Forgot Password</title>
        </Helmet>
            <div className="max-w-7xl p-5 w-1/2 bg-white flex justify-center items-center flex-col rounded-xl shadow-xl relative">
                <h1 className="text-2xl text-left w-full p-2 font-semibold">Find Your Account</h1>
                <form onSubmit={onSubmit} className="">
                    <h3>Please enter your email or username to search for your account</h3>
                    <input 
                    onChange={(e) => setAccount(e.target.value)} 
                    valye={account}
                    className="p-2 border border-gray-400 rounded outline-none w-full mt-2" type="text" 
                    placeholder="Username"
                    required 
                    />
                    <input className="mt-2 p-2 shadow-sm rounded-md w-full cursor-pointer font-bold transition duration-100 hover:bg-gray-200" type="submit" />
                </form>
                <p className="text-red-500 text-sm mt-2">{status}</p>
            </div> 
        </div>
    )
}

export default Forgot
