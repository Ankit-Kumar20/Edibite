import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {

  const cartItems = [
    { id: 1, name: "Pizza", price: 12.99, quantity: 2, image: "pizza.jpg" },
    { id: 2, name: "Burger", price: 238.99, quantity: 1, image: "burger.jpg" },
    // { id: 3, name: "Pasta", price: 10.99, quantity: 3, image: "pasta.jpg" },
  ];

  const currency = "₹";
  const deliveryCharge = 50.00;
  const navigate = useNavigate();


  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const removeFromCart = (id) => {
    console.log("Removed item with id:", id);
  };

  return (
    <>
    <div className='flex justify-between items-center ' >
    <button onClick={() => navigate('/')}  className='mx-11 my-6 text-4xl text-[#FFFFFF]'>Back</button>
    </div>
    <div className='my-4 mx-8 p-4'>
      <div className="space-y-4">
        <div className="flex justify-between text-slate-300 text-sm">
        <p>Title</p> <p className='ml-6'>Price</p> <p>Quantity</p> <p>Total</p>
        </div>
        <hr className="bg-gray-200 h-px border-none" />

        {cartItems.map((item) => (
          <div key={item.id} >
            <div className="flex justify-between text-black">
              <p className='text-white'>{item.name}</p>
              <p className='text-white'>{currency}{item.price}</p>
              <p className="text-white">{item.quantity}</p>
              <p className='text-white mb-6'>{currency}{(item.price * item.quantity).toFixed(2)}</p>
              <p className='cursor-pointer text-red-500 absolute left-0 ml-6 ' onClick={() => removeFromCart(item.id)}>x</p>
            </div>
            <hr className="bg-gray-200 h-px border-none" />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-12 mt-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl text-slate-300 font-bold">Cart Totals</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-white">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between text-white">
              <p>Delivery Fee</p>
              <p>{currency}{getTotalCartAmount() === 0 ? "0.00" : deliveryCharge.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between text-white font-bold text-lg">
              <p>Total</p>
              <p>{currency}{getTotalCartAmount() === 0 ? "0.00" : (getTotalCartAmount() + deliveryCharge).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 fixed bottom-0 left-0 right-0 px-12 py-10 bg-gray-800">
          <p className="text-white">If you have a promo code, Enter it here</p>
          <div className='flex items-center bg-gray-200 rounded-md'>
            <input type="text" placeholder='Promo code' className='bg-transparent border-none outline-none pl-4 py-2 flex-1' />
            <button className="bg-black border-none text-white py-2 px-6 rounded-md">Submit</button>
          </div>
          <button onClick={() => navigate('/order')} className="bg-[#B9FF66] text-[#000000] w-full md:w-48 py-3 rounded-md">
            PROCEED TO CHECKOUT
          </button>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Cart;