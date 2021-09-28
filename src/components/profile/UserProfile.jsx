import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet';

const UserProfile = () => {

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { userName } = useParams();
    const [user,setUser] = useState([]);

    useEffect(() =>  {
        Axios.get(`/api/users/${userName}`)
            .then((res) => {
                setUser([{
                    id: res.data.id,
                    firstname: res.data.firstName,
                    lastname: res.data.lastName,
                    username: res.data.userName,
                    email: res.data.email
                }]);
            })
    },[userName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
    }

    return (
        <div className="flex justify-center items-center w-full">
           <div className="max-w-7xl w-full">
                <div className="px-12 py-12 w-full text-gray-100">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden p-6">
                        <h1 className="text-4xl font-semibold">My Details</h1>
                        <h3 className="text-xl font-semibold mt-3">Personal Information</h3>
                        { user.map((val) => (
                            <form onSubmit={handleSubmit} className="border-t border-gray-400 flex" key={val.id}>
                            <Helmet>
                                <title>{val.firstname} {val.lastname} | Bicycle System</title>
                            </Helmet>
                                <div>
                                   <div className="flex gap-6 mt-2">
                                        <div>
                                            <label htmlFor="firstname">First Name</label><br/>
                                            <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" type="text" defaultValue={val.firstname} required 
                                            onChange={(e) => setFirstname(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastname">Last Name</label><br/>
                                            <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" type="text" defaultValue={val.lastname} required 
                                                onChange={(e) => setLastname(e.target.value)}
                                            />
                                        </div>
                                   </div>
                                   <div className="flex gap-6 mt-2">
                                        <div>
                                            <label htmlFor="firstname">Username</label><br/>
                                            <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" type="text" defaultValue={val.username} required 
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastname">Email</label><br/>
                                            <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" type="email" defaultValue={val.email} required 
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                   </div>
                                   <div className="flex gap-6 mt-2">
                                        <div>
                                            <label htmlFor="firstname">Password</label><br/>
                                            <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" value={password} type="password" placeholder="Password" required 
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                           <button className="bg-green-400 mt-5 p-1 rounded-md outline-none">Save Changes</button>
                                        </div>
                                   </div>
                                </div>
                                <div>
                                    <img className="filter invert" src="/image/tulin.png" alt="logo" />
                                </div>
                            </form>
                        )) }
                    </div>
                </div>
           </div>
        </div>
    )
}

export default UserProfile;
