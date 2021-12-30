import { Route, Redirect } from 'react-router-dom';
import Navbar from '../partials/Navbar';

const ShopRoute = ({logoutMssg,setlogoutMssg,user,userID,chatRoomID,setAuthStatus,setLogoutMssg,addToCart,setAddToCart,closeChat,setCloseChat,socket,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                return (
                        <>
                            <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} />
                            <Component logoutMssg={logoutMssg} setlogoutMssg={setlogoutMssg} addToCart={addToCart} setAddToCart={setAddToCart} 
                            socket={socket} setCloseChat={setCloseChat} closeChat={closeChat} userID={userID} chatRoomID={chatRoomID}
                            />
                        </>
                    )
            }}
        />
    )
}

export default ShopRoute
