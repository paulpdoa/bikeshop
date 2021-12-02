import LogoutModal from "../modals/LogoutModal"

const Reservation = ({logoutMssg}) => {
    return (
        <div className="main-container">
            <div className="fit-container">
                <h1>Reservation Page</h1>
                {logoutMssg && <LogoutModal />}
            </div>
        </div>
    )
}

export default Reservation
