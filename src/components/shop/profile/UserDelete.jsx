import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const UserDelete = () => {
    const user = window.localStorage.getItem("user");
    const status = 'inactive';
    
    const history = useHistory();

    // Delete a user account
    const onDelete = () => {
        Axios.put(`/api/customers/${user}`,{ status,username:user })
        .then((res) => {
            alert(res.data.mssg);
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("isUserAuth");
            window.localStorage.removeItem("role");
            window.localStorage.removeItem("id");
            history.push(res.data.redirect);
        })
    }

    const onExit = () => {
        console.log('on exit');
    }

    return (
        <div className="flex items-center w-full py-24 px-16">
            <div className="flex items-center bg-gray-900 rounded-xl h-80 w-full text-gray-100 p-5">
                <div className="w-full  ">
                    <p className="text-center text-xl">Are you sure you want to delete your account?</p>
                    <div className="flex justify-center gap-10 mt-2">
                        <button onClick={onDelete} className="bg-red-600 w-1/4 p-2 rounded-lg">Yes</button>
                        <button onClick={onExit} className="bg-green-500 w-1/4 p-2 rounded-lg">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDelete
