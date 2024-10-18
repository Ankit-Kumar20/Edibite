import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { upload } from '../../assets/images/assets';
import Sidebar from '../../restaurant/components/Sidebar/sidebar';

const Adminpage = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return;
        }

        // Here you can handle the form submission as needed
        toast.success('Product added successfully!');

        // Reset form
        setData({
            name: "",
            description: "",
            price: "",
            category: "Salad"
        });
        setImage(null);
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='w-3/4 mx-auto mt-12 text-gray-600 text-base'>
            <Sidebar />
            <form className='flex flex-col gap-5' onSubmit={onSubmitHandler}>
                <div className='flex flex-col items-center'>
                    <p>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = ''; }} type="file" accept="image/*" id="image" className="hidden" />
                    <label htmlFor="image" className="cursor-pointer">
                        <img src={!image ? (upload) : URL.createObjectURL(image)} alt="Upload" className="w-30" />
                    </label>
                </div>
                <div className='flex flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required className='border border-gray-300 p-2' />
                </div>
                <div className='flex flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} rows={6} placeholder='Write content here' required className='border border-gray-300 p-2' />
                </div>
                <div className='flex gap-8'>
                    <div className='flex flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} className='border border-gray-300 p-2'>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <p>Product Price</p>
                        <input type="number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' className='border border-gray-300 p-2' />
                    </div>
                </div>
                <button type='submit' className='max-w-xs border-none p-2 bg-black text-white cursor-pointer'>ADD</button>
            </form>
        </div>
    );
};

export default Adminpage;