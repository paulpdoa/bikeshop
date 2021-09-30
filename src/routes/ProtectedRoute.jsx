import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuth,userRole,component:Component, ...rest }) => {
    return (
        <Route 
        {...rest}
            render={(props) => {
                if(isAuth && userRole === 'user') {
                    return <Component />
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
