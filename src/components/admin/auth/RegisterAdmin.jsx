import {useState} from 'react';
import {Helmet} from 'react-helmet';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import RegisterModal from '../../modals/RegisterModal';

const RegisterAdmin = ({ registerMssg,setRegisterMssg }) => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [confirmPass,setConfirmPass] = useState('');
    const [matchPass,setMatchPass] = useState('');
    const [userNameErr,setUsernameErr] = useState('');
    const [status,setStatus] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 8) {
            setStatus('Please enter greater than 8 characters');
            setTimeout(() => {
                setStatus('');
            },1000)
        } else if(password !== confirmPass) {
            setMatchPass("Password doesn't match");
            setTimeout(() => {
                setMatchPass('');
            },1000)
        } else {
            Axios.post('/api/admin/register', { userName: username, password })
            .then((res) => {
                if(res.data.userNameErr) {
                    setUsernameErr(res.data.userNameErr);
                } else {
                    setRegisterMssg(true);
                    setTimeout(() => {
                        history.push(res.data.redirect);
                        setRegisterMssg(false);
                    },2000)
                    
                }
            })
        } 
    }

    return (
        <div className="relative h-screen flex justify-center items-center">
            <Helmet>
                <title>Bicycle System | Admin Register</title>
            </Helmet>
            <div>
                <h1 className="text-center md:text-left text-3xl mb-3 text-gray-800 select-none">Create your Admin Account</h1>
                <form onSubmit={handleSubmit} className="md:w-auto md:bg-white md:shadow-xl md:border md:border-black-200 rounded h-1/2 p-10">
                    <div className="md:flex justify-center">
                        <div className="p-5 relative flex justify-center w-full">
                            <input className="p-1 border w-full border-gray-400
                            rounded outline-none" type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                             />
                             <p className="text-xs text-red-500 absolute bottom-0 left-5 w-full">{userNameErr}</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-5 flex justify-center w-full relative">
                            <input className="p-1 border border-gray-400
                            rounded outline-none w-full" type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}  
                            required  
                            /><br/>
                            <p className="text-red-500 text-xs absolute top-14 left-6">{status}</p>
                        </div>
                        <div className="p-5 flex justify-center relative w-full">
                            <input className="p-1 border border-gray-400
                            rounded outline-none w-full" type="password" placeholder="Confirm Password" 
                            onChange={(e) => setConfirmPass(e.target.value)}
                            value={confirmPass}  
                            required  
                            /><br/>
                            <p className="text-red-500 text-xs absolute top-14 left-6">{matchPass}</p>
                        </div>
                    </div>
                    <p className="text-left ml-5 select-none mt-2">By clicking "SIGN UP"; I agree to Tulin's Terms of Service<br/> and Privacy Policy</p>
                    <button className="text-white text-center bg-green-500 p-1 rounded w-1/2 ml-5 mt-4">SIGN UP</button>
                    <hr className="mt-5 border border-gray"></hr>
                </form>
            </div>
            {/* modal */}
            { registerMssg && <RegisterModal />}
        </div>
    )
}

export default RegisterAdmin
