import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Helmet } from 'react-helmet';

const UserProfile = () => {

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

    return (
        <div>
            <h1>Profile Page</h1>
            {user.map((val) => (
                <div key={val.id}>
                    <Helmet>
                        <title>{val.firstname} {val.lastname} | Bicycle Shop</title>
                    </Helmet>
                    <p>{val.firstname}</p>
                    <p>{val.lastname}</p>
                    <p>{val.username}</p>
                    <p>{val.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserProfile
