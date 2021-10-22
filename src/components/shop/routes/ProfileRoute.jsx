import { Route, Redirect } from 'react-router-dom';
import UserProfile from '../profile/UserProfile';
import UserSideNav from '../profile/UserSideNav';
import UserOrders from '../profile/UserOrders';
import UserHistory from '../profile/UserHistory';
import UserDelete from '../profile/UserDelete';
import Navbar from '../partials/Navbar';
import LogoutModal from '../../modals/LogoutModal';


const ProfileRoute = ({ exact, path, user,setAuthStatus,logoutMssg, setLogoutMssg, profileActive,navigateProfile, component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                if(window.localStorage.getItem('isUserAuth') === 'true' && window.localStorage.getItem("role") === 'customer') {
                    return (
                        <>
                            <Navbar user={user} setLogoutMssg={setLogoutMssg} setAuthStatus={setAuthStatus} />
                            <div className="flex justify-center max-w-7xl ml-auto mr-auto">
                                <UserSideNav profileActive={profileActive} navigateProfile={navigateProfile} />
                                <div className="flex justify-center items-center w-full">
                                    { profileActive === 'Details' && <UserProfile /> }
                                    { profileActive === 'Orders' && <UserOrders /> }
                                    { profileActive === 'History' && <UserHistory /> }
                                    { profileActive === 'DeleteAccount' && <UserDelete /> }
                                    {/* modal */}
                                    { logoutMssg && <LogoutModal /> }
                                </div>
                            </div>   
                        </>
                    )
                } else {
                    return (
                        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                    )  
                }
            }}
        />
    )
}

export default ProfileRoute
