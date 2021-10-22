import { Helmet } from "react-helmet"
import LogoutModal from "../modals/LogoutModal"

const Settings = ({ date,logoutMssg }) => {

    const onUpdate = (e) => {
        e.preventDefault();
        console.log("Form updated");
    }

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Settings</title></Helmet>
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Settings</h1>
                    <span>{date}</span>
                </div>
                <div className="px-16 py-10">
                    <h1 className="text-3xl text-gray-900 border-b-2 border-gray-500 p-1">Account</h1>
                    <form onSubmit={onUpdate} className="py-10 flex flex-col gap-2">
                        <div>
                            <label className="text-xl" htmlFor="username">Username</label><br/>
                            <input className="p-1 outline-none border border-gray-400 rounded" type="text" />
                        </div>
                        <div>
                            <label className="text-xl" htmlFor="password">Password</label><br/>
                            <input className="p-1 outline-none border border-gray-400 rounded" type="password" />
                        </div>
                        <div>
                            <label className="text-xl" htmlFor="confirmpassword">Confirm Password</label><br/>
                            <input className="p-1 outline-none border border-gray-400 rounded" type="password" />
                        </div>
                        <div>
                            <button className="font-semibold text-gray-100 bg-sales p-3 rounded-lg text-sm mt-5">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Settings
