import { Route, Redirect } from 'react-router-dom';
import Navbar from '../partials/Navbar';

const ShopRoute = ({logoutMssg,setlogoutMssg,user,setAuthStatus,setLogoutMssg,addToCart,setAddToCart,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                return (
                        <>
                            <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} />
                            <Component logoutMssg={logoutMssg} setlogoutMssg={setlogoutMssg} addToCart={addToCart} setAddToCart={setAddToCart} />
                        </>
                    )
            }}
        />
    )
}

export default ShopRoute
