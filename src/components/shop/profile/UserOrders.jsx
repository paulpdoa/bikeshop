import React from 'react'

const UserOrders = () => {
    
    const sampleDatas = [
        {
            id: 1,
            itemName: "Sample 1",
            description: "Description",
            information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aliquid?",
            quantity: 1,
            image: "/image/pedal.jpg"
        },
        {
            id: 2,
            itemName: "Sample 2",
            description: "Description",
            information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aliquid?",
            quantity: 3,
            image: "/image/shifter.jpg"
        },
        {
            id: 3,
            itemName: "Sample 3",
            description: "Description",
            information: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aliquid?",
            quantity: 10,
            image: "/image/hub.jpg"
        }
    ]

    return (
        <div className="flex justify-center items-center h-full w-full">
           <div className="max-w-7xl w-full">
                <div className="px-12 py-12 w-full text-gray-100">
                    <div className="bg-gray-900 rounded-2xl p-6 max-h-96 overflow-y-scroll">
                        <h1 className="text-4xl font-semibold">My Orders</h1>
                        <h3 className="text-xl font-semibold mt-3">Items</h3>
                        { sampleDatas.map((sampleData) => (
                            <div className="border-t border-gray-400 mt-2" key={sampleData.id}>
                                <div className="flex mt-2">
                                    <img className="w-32 m-2 object-cover" src={sampleData.image} alt="product" />
                                    <div>
                                        <h2>{sampleData.itemName}</h2>
                                        <p>{sampleData.description}</p>
                                        <p>{sampleData.information}</p>
                                        <div className="flex justify-between"> 
                                            <p>Qty: {sampleData.quantity}</p>
                                            <button className="bg-blue-400 p-2 rounded-md mt-2">More Info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
           </div>
        </div>
    )
}

export default UserOrders
