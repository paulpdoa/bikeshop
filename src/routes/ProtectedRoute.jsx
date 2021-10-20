import { Route, Redirect } from "react-router-dom";
import Footer from "../components/shop/partials/Footer";
import Navbar  from "../components/shop/partials/Navbar";

const ProtectedRoute = ({logoutMssg,setlogoutMssg,user,setAuthStatus,setLogoutMssg,addToCart,setAddToCart,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                if(window.localStorage.getItem('isUserAuth') === 'true' && window.localStorage.getItem("role") === 'customer') {
                    return (
                        <>
                            <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} />
                            <Component logoutMssg={logoutMssg} setlogoutMssg={setlogoutMssg} addToCart={addToCart} setAddToCart={setAddToCart} />
                            <Footer />    
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
