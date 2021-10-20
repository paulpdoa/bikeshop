import LogoutModal from "../modals/LogoutModal"

const Schedule = ({ logoutMssg }) => {
    return (
        <div className="main-container">
            <div className="fit-container">
                <h1 className="titles">Schedule</h1>
            </div>
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default Schedule
