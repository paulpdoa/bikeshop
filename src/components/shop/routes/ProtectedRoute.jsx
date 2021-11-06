import { Route, Redirect } from "react-router-dom";
import Footer from "../partials/Footer";
import Navbar  from "../partials/Navbar";

const ProtectedRoute = ({logoutMssg,setlogoutMssg,user,setAuthStatus,setLogoutMssg,addToCart,setAddToCart,setPaymentMssg,paymentMssg,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                if(window.localStorage.getItem('isUserAuth') === 'true' && window.localStorage.getItem("role") === 'customer') {
                    return (
                        <>
                            <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} />
                            <Component logoutMssg={logoutMssg} setlogoutMssg={setlogoutMssg} addToCart={addToCart} setAddToCart={setAddToCart} 
                            setPaymentMssg={setPaymentMssg} paymentMssg={paymentMssg}    
                            />
                            <div className="absolute bottom-0 w-full">
                                <Footer />    
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

export default ProtectedRoute
