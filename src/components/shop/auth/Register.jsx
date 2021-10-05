import {useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import validator from 'validator';
import RegisterModal from '../../modals/RegisterModal';

const Register = ({registerMssg,setRegisterMssg}) => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [confirmPass,setConfirmPass] = useState('');
    const [matchPass,setMatchPass] = useState('');
    const [status,setStatus] = useState('');

    const [errorEmail,setErrorEmail] = useState('');
    const [userNameErr,setUsernameErr] = useState('');

    const history = useHistory();

    // email validation
    const validateEmail = (e) => {
        setEmail(e.target.value);
        
        if(validator.isEmail(email)) {
            setErrorEmail('Email is valid');
            setTimeout(() => {
                setErrorEmail('');
            },3000)
        } else {
            setErrorEmail('Email is invalid');
            setTimeout(() => {
                setErrorEmail('');
            },3000)
        }
    }

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault(e);

        if(password !== confirmPass) {
            setMatchPass('Password doesnt match');
                setTimeout(() => {
                   setMatchPass('');
               },1000)
        } else if(password.length < 8) {
            setStatus("Please enter password more than 8 characters");
               setTimeout(() => {
                   setStatus('');
               },1000)
        } else {
            Axios.post('/api/register',{firstName:firstname,lastName:lastname,userName:username,email,password})
            .then((res) => {
                if(res.data.userNameErr || res.data.emailErr) {
                    setUsernameErr(res.data.userNameErr);
                    setErrorEmail(res.data.emailErr);
                    setTimeout(() => {
                        setUsernameErr('');
                        setErrorEmail('');
                    },2000)
                    console.log(res);
                } else {
                    setRegisterMssg(true);
                    setTimeout(() => {
                        history.push(res.data.redirect);
                        setRegisterMssg(false);
                    },2000)
                }
            });
        }
    }

    return (
        <div className="relative h-screen flex justify-center items-center">
            <Helmet>
                <title>Bicycle System | Register</title>
            </Helmet>
            <div>
                <h1 className="text-center md:text-left text-3xl mb-3 text-gray-800 select-none">Create your Account</h1>
                <form onSubmit={handleSubmit} className="md:w-auto md:bg-white md:shadow-xl md:border md:border-black-200 rounded h-1/2 p-10">
                    <div className="md:flex justify-center">
                        <div className="p-5 flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="text" placeholder="First name"
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            required
                             />
                        </div>
                        <div className="p-5 flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="text" placeholder="Last name"
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            required
                             />
                        </div>
                    </div>
                    <div className="md:flex justify-center">
                        <div className="p-5 relative flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                             />
                             <p className="text-xs text-red-500 absolute bottom-0 left-5 w-full">{userNameErr}</p>
                        </div>
                        <div className="p-5 relative flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="email" placeholder="Email" 
                            onChange={validateEmail}
                            value={email}  
                            required 
                            />
                            <p className="text-xs text-red-500 absolute bottom-0 left-5 w-full">{errorEmail}</p>
                        </div>
                    </div>
                    <div className="md:flex justify-center">
                        <div className="p-5 flex justify-center relative">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}  
                            required  
                            /><br/>
                            <p className="text-red-500 text-xs absolute top-14 left-6">{status}</p>
                        </div>
                        <div className="p-5 flex justify-center relative">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="password" placeholder="Confirm Password" 
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
            {registerMssg && <RegisterModal />}
        </div>
    )
}

export default Register
