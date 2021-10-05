import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';

const Sales = ({ logoutMssg }) => {
    return (
        <div className="flex justify-center">
            <Helmet><title>Bicycle System | Sales</title></Helmet>
            <div className="px-16 py-16 w-full max-w-7xl">
                <h1>Sales</h1>
            </div>
            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Sales
