import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';

const Sales = ({ logoutMssg }) => {
    return (
        <div className="main-container">
            <Helmet><title>Bicycle System | Sales</title></Helmet>
            <div className="fit-container">
                <h1 className="titles">Sales</h1>
            </div>
            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Sales
