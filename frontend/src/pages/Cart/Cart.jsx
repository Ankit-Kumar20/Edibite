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
    <button onClick={() => navigate('/')}  className='p-6 ml-1.5 text-4xl text-[#FFFFFF]'>Back</button>
    </div>
    <div className='my-11 mx-8'>
      <div className="space-y-6">
        <div className="grid grid-cols-5 text-slate-300 text-sm">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p className='ml-4'>Total</p>
        </div>
        <hr className="bg-gray-200 h-px border-none" />

        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="grid grid-cols-6 items-center text-black">
              <img src={`/images/${item.image}`} alt={item.name} className="w-12 text-white" />
              <p className='text-white ml-3'>{item.name}</p>
              <p className='text-white ml-5'>{currency}{item.price}</p>
              <p className="text-center text-white ml-14 ">{item.quantity}</p>
              <div>
              <p className='cursor-pointer text-red-500 ml-28 ' onClick={() => removeFromCart(item.id)}>x</p>
              <p className='text-white ml-14 mb-8'>{currency}{(item.price * item.quantity).toFixed(2)}</p>
              
              </div>
              
              
            </div>
            <hr className="bg-gray-200 h-px border-none my-2" />
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

        <div className="flex-1 space-y-4 ">
          <p className="text-white">If you have a promo code, Enter it here</p>
          <div className='flex items-center bg-gray-200 rounded-md'>
            <input type="text" placeholder='Promo code' className='bg-transparent border-none outline-none pl-4 py-2 flex-1' />
            <button className="bg-black border-none text-white py-2 px-6 rounded-md">Submit</button>
          </div>
        </div>
        <button onClick={() => navigate('/order')} className="bg-[#B9FF66] text-[#000000] w-full md:w-48 py-3 rounded-md">
            PROCEED TO CHECKOUT
          </button>
      </div>
    </div>
    </>
  );
};

export default Cart;