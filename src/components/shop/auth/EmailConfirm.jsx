import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams,useHistory } from 'react-router-dom';
import Axios from 'axios';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EmailConfirm = ({ setVerifyModal }) => {
    
    const [boxOne,setBoxOne] = useState('');
    const [boxTwo,setBoxTwo] = useState('');
    const [boxThree,setBoxThree] = useState('');
    const [boxFour,setBoxFour] = useState('');
    const [boxFive,setBoxFive] = useState('');
    const [code,setCode] = useState('');

    const [verifyStatus,setVerifyStatus] = useState(''); 

    const username = localStorage.getItem("user");

    const history = useHistory();

    // // redirect user to login when not yet registered
    // useEffect(() => {
    //     if(!localStorage.getItem("customerInfo")) {
    //         history.push('/register')
    //         console.log('redirect')
    //     }
    // },[history])

    const { id } = useParams();

    useEffect(() => {
        Axios.get(`/api/customers/${username}`)
        .then((res) => { 
            setCode(res.data.code);
        })
    },[username,code])
   
    const submitCode = () => {
        const submittedCode = `${boxOne}${boxTwo}${boxThree}${boxFour}${boxFive}`;
        
        if(submittedCode === code) {
            Axios.put(`/api/customers/verify/${username}`, { id })
            .then((res) => {
                setVerifyStatus(res.data.verify);
                localStorage.removeItem("customerInfo");
                setVerifyModal(false);
                setTimeout(() => {
                    history.push(res.data.redirect);
                },3000 );
            })
        } else if(submittedCode !== code) {
            setVerifyStatus('Wrong code! Please check the code in your email');
        }
    }
    
    
    return (
        <div className="main-container h-screen">
        <Helmet><title>Bicycle System | Email Verify</title></Helmet>
            <div className="fit-container items-center flex justify-center">
                <div className="flex w-1/2 justify-center items-center">
                    <div className="bg-gray-300 w-full h-96 rounded-md shadow-2xl border-2 border-gray-400">
                        <img className="object-cover self-center ml-auto mr-auto w-44 h-44" src="/image/tulin.png" alt="tulinlogo" />
                        <div className="">
                            <h2 className="text-center text-gray-600 font-bold text-2xl select-none">Enter the code that was sent to your email</h2>
                            <div className="flex justify-center gap-5 w-full mt-10">
                                <input onChange={(e) => setBoxOne(e.target.value)} className="w-10 p-2 outline-none border-2 border-gray-700 text-center font-bold" type="text" />
                                <input onChange={(e) => setBoxTwo(e.target.value)} className="w-10 p-2 outline-none border-2 border-gray-700 text-center font-bold" type="text" />
                                <input onChange={(e) => setBoxThree(e.target.value)} className="w-10 p-2 outline-none border-2 border-gray-700 text-center font-bold" type="text" />
                                <input onChange={(e) => setBoxFour(e.target.value)} className="w-10 p-2 outline-none border-2 border-gray-700 text-center font-bold" type="text" />
                                <input onChange={(e) => setBoxFive(e.target.value)} onKeyPress={(e) => e.key === "Enter" && submitCode()} className="w-10 p-2 outline-none border-2 border-gray-700 text-center font-bold" type="text" />
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <button onClick={submitCode} className="bg-sales p-2 rounded-md text-gray-100 font-semibold w-1/2">Submit</button>
                            </div>
                        </div>
                        <p className={verifyStatus === 'Wrong code! Please check the code in your email' ? "text-center p-2 text-red-500 font-bold" : "text-center p-2 text-blue-700 font-bold"}>
                            { verifyStatus === 'Wrong code! Please check the code in your email' ? 
                                verifyStatus :
                            <span className="flex justify-center gap-5">{verifyStatus} <span className="animate-spin"><AiOutlineLoading3Quarters /></span></span> }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailConfirm
