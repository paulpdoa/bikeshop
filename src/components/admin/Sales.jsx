import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';

const Sales = ({ logoutMssg,date }) => {
    return (
        <div className="main-container">
            <Helmet><title>Bicycle System | Sales</title></Helmet>
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Sales</h1>
                    <span>{date}</span>
                </div>
            </div>
            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Sales
