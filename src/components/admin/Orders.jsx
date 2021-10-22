import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';
import OrderDetailModal from '../modals/OrderDetailModal';

const Orders = ({date,logoutMssg,orderDetail,setOrderDetail}) => {

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Orders</title></Helmet>
            <div className="fit-container">
                <div className="order-title">
                    <h1 className="titles">Orders</h1>
                    <p>{date}</p>
                </div>

                <div className="main-card">
                    <div className="order-cards">
                        <h1 className="order-card-title">New Orders</h1>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button onClick={() => setOrderDetail(true)} className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                    </div>

                    <div className="order-cards">
                        <h1 className="order-card-title">Orders</h1>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                        <div className="flex mt-10">
                            <div className="flex gap-2 w-full relative">
                                <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Brand Name</h2>
                                    <h3 className="font-semibold">Item Name</h3>
                                    <h3 className="font-semibold">Item Description...</h3>
                                    <span className="text-sm">Qty. 1</span>
                                </div>
                                <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-cards mt-10">
                    <h3 className="order-card-title">Recent Orders</h3>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <div className="flex gap-2 w-full relative">
                            <img className="w-32 object-cover border border-gray-900" src="/image/shifter.jpg" alt="shifter" />
                            <div className="w-full">
                                <h2 className="font-semibold text-lg">Brand Name</h2>
                                <h3 className="font-semibold">Item Name</h3>
                                <h3 className="font-semibold">Item Description...</h3>
                                <span className="text-sm">Qty. 1</span>
                            </div>
                            <button className="absolute right-0 bottom-0 bg-gray-900 text-gray-100 p-2 rounded-md">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* logout modal */}
            { logoutMssg && <LogoutModal /> }
            { orderDetail && <OrderDetailModal setOrderDetail={ setOrderDetail } /> }
        </div>
    )
}

export default Orders
