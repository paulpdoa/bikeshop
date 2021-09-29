import React from 'react'

const UserDelete = () => {
    return (
        <form className="flex items-center w-full py-24 px-16">
            <div className="flex items-center bg-gray-900 rounded-xl h-80 w-full text-gray-100 p-5">
                <div className="w-full  ">
                    <p className="text-center text-xl">Are you sure you want to delete your account?</p>
                    <div className="flex justify-center gap-10 mt-2">
                        <button className="bg-red-600 w-1/4 p-2 rounded-lg">Yes</button>
                        <button className="bg-green-500 w-1/4 p-2 rounded-lg">No</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserDelete
