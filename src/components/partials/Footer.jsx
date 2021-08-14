

const Footer = () => {
    return (
        <footer className="absolute bg-gray-200 flex justify-around w-full p-5 shadow-xl">
            <div className="text-xs text-gray-800 select-none">
                <p>&copy; 2021 TULIN, All Rights Reserved</p>
            </div>
            <div className="flex text-xs text-gray-800">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer ml-10">Terms of Service</p>
            </div>
        </footer>
    )
}

export default Footer
