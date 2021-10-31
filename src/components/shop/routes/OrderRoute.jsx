import {Helmet} from 'react-helmet';
import { Route } from 'react-router-dom';
import OrderNav from '../partials/OrderNav';
import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

const OrderRoute = ({ logoutMssg,user,exact,path,setAuthStatus,setLogoutMssg,component:Component, ...rest }) => {

    return (
        <Route {...rest}
            render={(props) => {
                return (
                    <>
                    <Navbar user={user} setLogoutMssg={setLogoutMssg} setAuthStatus={setAuthStatus}/>
                        <div className="flex justify-center h-auto">
                            <Helmet><title>Bicycle System | Order</title></Helmet>
                            <div className="max-w-7xl w-full"> 
                                <div className="grid grid-cols-6 justify-items-center">
                                    <OrderNav />
                                    <Component logoutMssg={logoutMssg}/>
                                </div>
                            </div>
                        </div>
                    <Footer />
                    </>
                )
            }}
        />
    )
}

export default OrderRoute;
