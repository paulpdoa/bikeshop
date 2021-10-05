import NavbarAdmin from "../partials/NavbarAdmin";
import SidebarAdmin from "../partials/SidebarAdmin";
import { Route, Redirect } from 'react-router-dom';

const DashboardRoute = ({exact, path, role, isAuth, admin, setLogoutMssg, logoutMssg, date, component:Component, ...rest}) => {
   return <Route 
            exact={exact} 
                path={path} {...rest} 
                    render={(routeProps) => {
                        if(window.localStorage.getItem("role") === 'admin' && window.localStorage.getItem("isAdminAuth") === 'true') {
                            return (
                                <div className="flex h-screen">
                                    <SidebarAdmin {...routeProps} setLogoutMssg={setLogoutMssg}/>
                                    <div className="w-full h-screen ml-44">
                                        <NavbarAdmin {...routeProps} admin={admin} />
                                        <Component {...routeProps} date={date} logoutMssg={logoutMssg}/>
                                    </div>
                                </div>
                    )} else {
                        return (
                            <Redirect to={{ pathname: "/admin/login", state: { from: routeProps.location } }} />
                        )
                    }
            }}
    />
}

export default DashboardRoute;