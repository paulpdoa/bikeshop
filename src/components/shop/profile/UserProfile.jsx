import React,{ useEffect,useState } from 'react'
import { useParams,useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet';

import { AiOutlineLoading } from 'react-icons/ai';

const UserProfile = () => {

    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');

    const [success,setSuccess] = useState('');

    const history = useHistory();

    const { userName } = useParams();
    const [userProfile,setUserProfile] = useState('');
    useEffect(() => {
        const abortCont = new AbortController();
        Axios.get(`/api/customers/${userName}`, { signal: abortCont.signal })
        .then((res) => {
            setUserProfile(res.data);
        })
        return () => abortCont.abort(); 
    },[userName])

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(password === confirmPassword) {
            Axios.put(`/api/customers/update/${userName}`,{password})
            .then(res => {
                setSuccess(res.data.mssg);
                setTimeout(() => {
                    history.push(res.data.redirect);
                },5000)
            })
        } else if(password.length < 9) {
            setError('Password must be greater than 8 characters');
            setTimeout(() => {
                setError('');
            },3000)
        } else {
            setError('Wrong password combination');
            setTimeout(() => {
                setError('');
            },3000)
        }
    }

    return (
        <div className="flex justify-center items-center w-full">
        <Helmet><title>{`${userProfile.firstName} ${userProfile.lastName}`} | Bicycle System</title></Helmet>
           <div className="max-w-7xl w-full">
                <div className="px-12 py-12 w-full text-gray-100">
                    <div className="bg-gray-900 rounded-2xl overflow-hidden p-6">
                        {success && 
                        <span className="font-bold flex gap-5">
                            <span className="text-xl font-semibold text-sales">{success}</span> <span className="text-gray-100 font-semibold text-xl animate-spin"><AiOutlineLoading /></span>
                        </span> }
                        <h1 className="text-4xl font-semibold">My Details</h1>
                        <h3 className="text-xl font-semibold mt-3">Personal Information</h3>
                        <form onSubmit={handleSubmit} className="border-t border-gray-400 flex" key={userProfile.id}>
                            <div>
                                <div className="flex gap-6 mt-2">
                                    <div>
                                        <label htmlFor="firstname">First Name</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none placeholder-black bg-white" disabled type="text" value={userProfile.firstName} />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname">Last Name</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none placeholder-black bg-white" disabled type="text" value={userProfile.lastName} />
                                    </div>
                                </div>
                                <div className="flex gap-6 mt-2">
                                    <div>
                                        <label htmlFor="firstname">Username</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none placeholder-black bg-white" disabled type="text" value={userProfile.userName} />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname">Email</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none placeholder-black bg-white" disabled type="email" value={userProfile.email} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 mt-2">
                                    <div>
                                        <label htmlFor="firstname">Password</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" value={password} type="password" placeholder="Password" required 
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="firstname">Confirm Password</label><br/>
                                        <input className="text-gray-900 p-2 mt-1 rounded-md outline-none" value={confirmPassword} type="password" placeholder="Confirm Password" required 
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <span className="text-red-500 text-xs">{error}</span>
                                    </div>
                                </div> 
                                <div className="flex justify-center items-center w-full">
                                    <button className="bg-green-400 mt-5 p-2 w-full rounded-md outline-none font-semibold">Save Changes</button>
                                </div>
                            </div>
                            <div>
                                <img className="filter invert" src="/image/tulin.png" alt="logo" />
                            </div>
                        </form>        
                    </div>
                </div>
           </div>
        </div>
    )
}

export default UserProfile;
