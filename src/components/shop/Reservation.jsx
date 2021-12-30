import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LogoutModal from "../modals/LogoutModal";


const Reservation = ({logoutMssg}) => {

    const [dates,setDates] = useState(new Date());

    console.log(dates);

    return (
        <div className="main-container">
        <Helmet><title>Bicycle System | Reservation</title></Helmet>
            <div className="fit-container">
                <h1 className="text-3xl font-semibold">Set an appointment</h1>
                <div className="flex justify-around">
                    <Calendar minDate={new Date()} onChange={(date, e) => setDates(date)} value={dates} />
                    <div>
            
                    </div>
                </div>
                
                {logoutMssg && <LogoutModal />}
            </div>
        </div>
    )
}

export default Reservation
