import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-8">
            <Helmet><title>Bicycle System | Admin Dashboard</title></Helmet>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard