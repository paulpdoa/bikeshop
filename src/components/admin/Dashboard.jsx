import { Helmet } from 'react-helmet';
import NavbarAdmin from './partials/NavbarAdmin';
import { Route, Switch } from 'react-router-dom';
import SidebarAdmin from './partials/SidebarAdmin';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-8">
            <Helmet><title>Bicycle System | Admin Dashboard</title></Helmet>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard