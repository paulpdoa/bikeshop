import React,{ useState } from 'react'
import { Helmet } from 'react-helmet';
import Axios from 'axios';
import { Link,useHistory,useParams } from 'react-router-dom';

const ChangePassword = () => {
    const [status,setStatus] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPass,setConfirmPass] = useState('');
    const [match,setMatch] = useState('');
    const { id } = useParams();

    const history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();

        Axios.put('/api/users', {id,password})
        .then((res) => {
            if(password !== confirmPass) {
                setTimeout(() => {
                    setStatus("Password doesn't match")
                },1000)
                setStatus('');
            } else if(password.length < 8) {
                setTimeout(() => {
                    setStatus('Password must be greater than 8 characters')    
                },1000)
                setStatus('');
            } else {
                setStatus(res.data.mssg);
                setTimeout(() => {
                    history.push(res.data.redirect);
                },2000)
            }
        })
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
        <Helmet>
            <title>Bicycle System | Change Password</title>
        </Helmet>
            <div className="max-w-7xl p-5 w-1/2 bg-white flex justify-center items-center flex-col rounded-xl shadow-xl relative">
                <h1 className="text-2xl text-left w-full p-2 font-semibold">Change your password</h1>
                <form onSubmit={onSubmit} className="">
                    <h3>Please enter your email or username to search for your account</h3>
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="p-2 border border-gray-400 rounded outline-none w-full mt-2" type="password" 
                    placeholder="Enter password" 
                    required
                    />
                    <input
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass} 
                    className="p-2 border border-gray-400 rounded outline-none w-full mt-2" type="password" 
                    placeholder="Confirm password" 
                    required
                    />
                    <input className="mt-2 p-2 shadow-sm rounded-md w-full cursor-pointer font-bold transition duration-100 hover:bg-gray-200" type="submit" />
                </form>
                <Link to="#" className="text-red-500 text-sm mt-2">{status}</Link>
            </div> 
        </div>
    )
}

export default ChangePassword