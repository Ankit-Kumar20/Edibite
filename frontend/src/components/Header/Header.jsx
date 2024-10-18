import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { image1 } from '../../assets/images/assets'



const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='p-6 md:flex md:gap-20 md:mx-20'>
      <div className='max-w-[800px]'>
        <p className='text-4xl md:text-6xl  mx-4 text-white'>Rescue Food, <span className='whitespace-nowrap'>Save Money,</span> <span className='whitespace-nowrap'>Make a Difference!</span></p>
        <p className='mx-4 mt-8 text-sm md:text-3xl text-left text-slate-300'>“Discover great meals at discounted prices, reduce food waste, and help feed those in need. Join us in building a sustainable community.”</p>
      <div>
        <button onClick={() => navigate('/menu')} className='text-sm bg-slate-300 rounded-lg py-2 px-4 m-4 text-[#000000] inline-flex '>Browse available Meals</button>
      </div>
      </div>
      <div>
        <img className='max-w-[500px] container' src={image1} alt="scoooooter" />
      </div>
    </div>
  )
}

export default Header
