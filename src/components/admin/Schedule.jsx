import LogoutModal from "../modals/LogoutModal"

const Schedule = ({ logoutMssg,date }) => {
    return (
        <div className="main-container">
            <div className="fit-container">
                <div className="flex justify-between"> 
                    <h1 className="titles">Schedule</h1>
                    <span>{date}</span>
                </div>
            </div>
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Schedule
