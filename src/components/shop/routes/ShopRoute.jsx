import { Route, Redirect } from 'react-router-dom';
import Navbar from '../partials/Navbar';

const ShopRoute = ({logoutMssg,setlogoutMssg,user,setAuthStatus,setLogoutMssg,addToCart,setAddToCart,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                if(window.localStorage.getItem('isUserAuth') === 'true' && window.localStorage.getItem("role") === 'customer') {
                    return (
                        <>
                            <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} />
                            <Component logoutMssg={logoutMssg} setlogoutMssg={setlogoutMssg} addToCart={addToCart} setAddToCart={setAddToCart} />
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

export default ShopRoute
