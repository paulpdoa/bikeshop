import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import LogoutModal from '../modals/LogoutModal';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import AddProductModal from '../modals/AddProductModal';

const AddProduct = ({ date,logoutMssg,addProductMssg,setAddProductMssg }) => {
    const [image,setImage] = useState({});
    const [brand,setBrand] = useState('');
    const [productType,setProductType] = useState('');
    const [item,setItem] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');

    const [showImage,setShowImage] = useState(false); 
    const [imageHolder,setImageHolder] = useState('');
    const history = useHistory();

    // closes modal
    const closeModal = (state) => {
        setAddProductMssg(state);
        history.push('/dashboard')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product',image);
        formData.append('product_type',productType);
        formData.append('brand',brand);
        formData.append('item',item);
        formData.append('price',price)
        formData.append('quantity',quantity);
        formData.append('description',description);

    Axios.post('/api/admin/addproduct',formData)
        .then((res) => {
            setAddProductMssg(res.data.status);
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
            setImage(e.target.files[0]);   
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
                            <input name="image" onChange={imageHandler} 
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
                            <div className="">
                                <select className="border border-gray-400 outline-none cursor-pointer" onChange={(e) => setProductType(e.target.value)}
                                    value={productType} required
                                >
                                    <option value="" hidden>Select Type</option>
                                    <option value="bike">Bike</option>
                                    <option value="accessory">Accessory</option>
                                    <option value="parts">Parts</option>
                                </select>
                            </div>
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
                                <label htmlFor="price">Price</label>
                                <input className="border border-gray-400 w-60 outline-none" type="number" required 
                                     value={price} onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="brandname">Quantity</label>
                                <div className="flex gap-5">
                                    <span onClick={() => setQuantity(quantity-1)} className="cursor-pointer font-bold text-2xl">-</span>
                                    <span className="text-2xl font-semibold">{quantity}</span>
                                    <span onClick={() => setQuantity(quantity+1)} className="cursor-pointer font-bold text-2xl">+</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full relative">
                            <div className="flex-col flex">
                                <label htmlFor="description">Item Description</label>
                                <textarea className="w-full border border-gray-400 outline-none h-32"
                                 value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                <button className="absolute bottom-5 text-gray-100 p-2 bg-gray-900 rounded-md">Add Product</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
            {/* modal when logging out */}
            { logoutMssg && <LogoutModal /> }
            { addProductMssg && <AddProductModal closeModal={closeModal} /> }
        </div>
    )
}

export default AddProduct
