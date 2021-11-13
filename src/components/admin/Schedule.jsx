import { Helmet } from 'react-helmet';
import { FiChevronDown } from 'react-icons/fi';
import { BsFillTrashFill } from 'react-icons/bs';

import LogoutModal from "../modals/LogoutModal"

const Schedule = ({ logoutMssg,date }) => {
    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Schedule</title></Helmet>
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Schedule</h1>
                    <span>{date}</span>
                </div>
                <div className="bg-white w-full rounded shadow-xl px-5 mt-5 overflow-y-scroll" style={{ height:"450px" }}>
                    <ul className="flex gap-5 text-xl text-blue-600 font-semibold px-5 py-5 border-b-2 border-gray-500">
                        <li>All</li>
                        <li>Yesterday</li>
                        <li>Today</li>
                        <li>Upcoming</li>
                        <li className="flex items-center">
                            Sort by
                            <FiChevronDown />
                        </li>
                    </ul>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-gray-700">
                                <th>Customer</th>
                                <th>Contact No.</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th colSpan="2">Bike Description</th>
                            </tr>
                            <tr className="text-center font-semibold text-xl border-b border-gray-600">
                                <td>Darwin</td>
                                <td>09287568942</td>
                                <td>Nov 28 21</td>
                                <td>9:00 am</td>
                                <td className="text-yellow-300">Pending</td>
                                <td className="flex justify-center gap-10">
                                    <button className="bg-gray-900 text-gray-100 text-base w-1/4 rounded">View</button>
                                    <button className="bg-red-500 text-gray-100 text-base flex justify-center items-center w-5 rounded"><BsFillTrashFill /></button>
                                </td>
                            </tr>
                            <tr className="text-center font-semibold text-xl border-b border-gray-600">
                                <td>Darwin</td>
                                <td>09287568942</td>
                                <td>Nov 28 21</td>
                                <td>9:00 am</td>
                                <td className="text-green-500">Complete</td>
                                <td className="flex justify-center gap-10">
                                    <button className="bg-gray-900 text-gray-100 text-base w-1/4 rounded">View</button>
                                    <button className="bg-red-500 text-gray-100 text-base flex justify-center items-center w-5 rounded"><BsFillTrashFill /></button>
                                </td>
                            </tr>
                            <tr className="text-center font-semibold text-xl border-b border-gray-600">
                                <td>Darwin</td>
                                <td>09287568942</td>
                                <td>Nov 28 21</td>
                                <td>9:00 am</td>
                                <td className="text-yellow-300">Pending</td>
                                <td className="flex justify-center gap-10">
                                    <button className="bg-gray-900 text-gray-100 text-base w-1/4 rounded">View</button>
                                    <button className="bg-red-500 text-gray-100 text-base flex justify-center items-center w-5 rounded"><BsFillTrashFill /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Schedule
