import { Link, useHistory } from 'react-router-dom';
import {useState} from 'react';
import Axios from 'axios';
import {Helmet} from 'react-helmet';

const Login = ({getName}) => {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const [status,setStatus] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('/api/login',{
            username,
            password
            }).then((res) => {
               if(res.data.err) { 
                   setStatus(res.data.err);
               } else {
                   setTimeout(() => {
                        alert('Successfully logged in!')
                        history.push('/')
                        getName(res.data.result[0].firstname + ' ' + res.data.result[0].lastname);
                   },1000)
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
                </div>
                <div className="md:w-full py-1">
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="md:w-full p-2 outline-none border rounded border-gray-300" type="password" placeholder="Enter password" required />
                    <p className="text-xs text-red-500 text-center">{status}</p>
                </div>
                <div className="md:w-full m-1">
                    <button className="bg-black text-center text-white w-full p-1 rounded hover:bg-white transition ease-in duration-100 hover:text-black hover:shadow-lg hover:ease-out">Login</button> 
                    <Link to="#" className="mt-1 flex justify-center text-xs text-blue-600">Forgot password?</Link>
                    <hr className="mt-3 border border-gray-200"></hr>
                    <Link className="flex justify-center mt-3 p-1 rounded text-white bg-green-400" to="/register">Create new account</Link>
                </div>
            </form>
            
        </div>
    )
}

export default Login
