import NavbarAdmin from "../partials/NavbarAdmin";
import SidebarAdmin from "../partials/SidebarAdmin";
import { Route, Redirect } from 'react-router-dom';

const DashboardRoute = ({exact, path, adminRole, date, component:Component, ...rest}) => {
   return <Route 
            exact={exact} 
                path={path} {...rest} 
                    render={(routeProps) => {
                        if(adminRole) {
                            return (
                                <div className="flex h-screen">
                                    <SidebarAdmin {...routeProps}/>
                                    <div className="w-full h-screen ml-44">
                                        <NavbarAdmin {...routeProps} />
                                        <Component {...routeProps} date={date}/>
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