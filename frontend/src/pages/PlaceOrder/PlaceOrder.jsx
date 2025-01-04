import React from 'react'
import { tick } from '../../assets/images/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen'>
      <button onClick={() => navigate('/')}  className='absolute top-0 left-0 mx-11 my-14 text-4xl text-[#FFFFFF]'>Back</button>
      <div className='w-80 bg-slate-50 p-4 rounded-lg shadow-lg'>
      <img src={tick} className='w-20 h-20 mx-auto my-32 animate-bounce' alt="" />
      <p className="text-slate-700 text-3xl mx-10 mb-10">Order Placed !!</p>
      </div>
    </div>
  )
}

export default PlaceOrder
