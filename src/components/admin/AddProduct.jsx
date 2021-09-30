import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

const AddProduct = ({ date }) => {
    return (
        <div className="flex justify-center">
        <Helmet><title>Bicycle System | Add Products</title></Helmet>
            <div className="max-w-7xl w-full">
                <div className="flex items-center justify-between py-5">
                    <Link className="flex items-center text-xl font-semibold" to='/dashboard'><AiOutlineLeft />Go Back</Link>
                    <label htmlFor="date">{date}</label>
                </div>
                
                <form className="px-16 py-14">
                    <h1 className="text-3xl font-bold p-2 border-b-2 border-gray-300">Add Product</h1>

                    <div className="py-2 px-2 flex gap-10">
                        <div className="max-h-60 border p-20 flex items-center justify-center relative bg-gray-50">
                            <input className="opacity-0 w-64 h-60 absolute" type="file" accept="image/*" required/>
                            <label className="flex justify-center items-center flex-col" htmlFor="file">
                                <FiPlus size="100px" />
                                Add Photo
                            </label>
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Brand Name</label>
                                <input className="border border-gray-400 w-60 outline-none" type="text" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Item Name</label>
                                <input className="border border-gray-400 w-60 outline-none" type="text" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Quantity</label>
                                <input className="w-28 border border-gray-400 outline-none" type="number" required />
                            </div>
                        </div>

                        <div className="w-full relative">
                            <div className="flex-col flex">
                                <label htmlFor="description">Item Description</label>
                                <textarea className="w-full border border-gray-400 outline-none h-32" id=""></textarea>
                                <button className="absolute bottom-5 text-gray-100 p-2 bg-gray-900 rounded-md">Add Product</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
            
        </div>
    )
}

export default AddProduct
