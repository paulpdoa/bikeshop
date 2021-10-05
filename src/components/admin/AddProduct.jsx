import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import LogoutModal from '../modals/LogoutModal';
import Axios from 'axios';
import { useState } from 'react';

const AddProduct = ({ date,logoutMssg }) => {
    const [image,setImage] = useState('');
    const [brand,setBrand] = useState('');
    const [item,setItem] = useState('');
    const [quantity,setQuantity] = useState('');
    const [description,setDescription] = useState('');

    const [showImage,setShowImage] = useState(false); 
    const [imageHolder,setImageHolder] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const datas = new FormData();

        for(var [key,value] of datas.entries()) {
            console.log(key, value);
        }

        let config = { 
            headers: { 'Content-Type': 'multipart/form-data' }
         }

    Axios.post('/api/admin/addproduct',{ product:datas,brand,item,quantity,description },{
        headers: config
    })
        .then((res) => {
            console.log(res);
        })
    }

    // previews image before uploading
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setImageHolder(reader.result)
                setShowImage(true);
            }
        }
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            setImage(e.target.value);   
        }
    }

    return (
        <div className="flex justify-center">
        <Helmet><title>Bicycle System | Add Products</title></Helmet>
            <div className="max-w-7xl w-full">
                <div className="flex items-center justify-between py-5">
                    <Link className="flex items-center text-xl font-semibold" to='/dashboard'><AiOutlineLeft />Go Back</Link>
                    <label htmlFor="date">{date}</label>
                </div>
                
                <form onSubmit={onSubmit} className="px-16 py-14" encType="multipart/form-data">
                    <h1 className="text-3xl font-bold p-2 border-b-2 border-gray-300">Add Product</h1>

                    <div className="py-2 px-2 flex gap-10">
                        <div className="max-h-60 border p-20 flex items-center justify-center relative bg-gray-50">
                            <input value={image} name="image" onChange={imageHandler} 
                            className="opacity-0 w-64 h-60 absolute cursor-pointer" type="file" accept="image/*" required/>
                           { showImage ? 
                            <img className="object-cover w-64" src={imageHolder} alt="product" /> 
                            :
                            <label className="flex justify-center items-center flex-col" htmlFor="file">
                                <FiPlus size="100px" />
                                Add Photo
                            </label>  
                            }
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Brand Name</label>
                                <input className="border border-gray-400 w-60 outline-none" type="text" required 
                                    value={brand} onChange={(e) => setBrand(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Item Name</label>
                                <input className="border border-gray-400 w-60 outline-none" type="text" required 
                                     value={item} onChange={(e) => setItem(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Quantity</label>
                                <input className="w-28 border border-gray-400 outline-none" type="number" required 
                                     value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full relative">
                            <div className="flex-col flex">
                                <label htmlFor="description">Item Description</label>
                                <textarea className="w-full border border-gray-400 outline-none h-32" id=""
                                 value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                <button className="absolute bottom-5 text-gray-100 p-2 bg-gray-900 rounded-md">Add Product</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
        </div>
    )
}

export default AddProduct
