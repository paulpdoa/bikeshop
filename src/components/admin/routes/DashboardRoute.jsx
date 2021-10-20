import NavbarAdmin from "../partials/NavbarAdmin";
import SidebarAdmin from "../partials/SidebarAdmin";
import { Route, Redirect } from 'react-router-dom';

const DashboardRoute = ({exact, path, role, isAuth, admin, setLogoutMssg, logoutMssg,setAddProductMssg,addProductMssg, date, component:Component, ...rest}) => {
   return <Route 
            exact={exact} 
                path={path} {...rest} 
                    render={(routeProps) => {
                        if(window.localStorage.getItem("role") === 'admin' && window.localStorage.getItem("isAdminAuth") === 'true') {
                            return (
                                <div className="flex h-screen">
                                    <SidebarAdmin {...routeProps} setLogoutMssg={setLogoutMssg}/>
                                    <div className="w-full h-screen ml-48">
                                        <NavbarAdmin {...routeProps} admin={admin} />
                                        <Component {...routeProps} date={date} logoutMssg={logoutMssg} 
                                        addProductMssg={addProductMssg} setAddProductMssg={setAddProductMssg} 
                                        />
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