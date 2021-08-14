import {useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Register = () => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(e);

        Axios.post('/api/register',{firstname,lastname,email,password})
        .then((res) => {
            alert('User has been registered successfully!');
            history.push(res.data.redirect);
        })
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
                        <div className="p-5 flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="email" placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}  
                            required 
                            />
                        </div>
                        <div className="p-5 flex justify-center">
                            <input className="p-1 border border-gray-400
                            rounded outline-none" type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}  
                            required  
                            />
                        </div>
                    </div>
                    <p className="text-left ml-5 select-none">By clicking "SIGN UP"; I agree to Tulin's Terms of Service<br/> and Privacy Policy</p>
                    <button className="text-white text-center bg-green-500 p-1 rounded w-1/2 ml-5 mt-4">SIGN UP</button>
                    <hr className="mt-5 border border-gray"></hr>
                </form>
            </div>
        
        </div>
    )
}

export default Register
