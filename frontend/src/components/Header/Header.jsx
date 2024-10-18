import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { image1 } from '../../assets/images/assets'



const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='p-6 '>
      <div>
        <p className='text-4xl mx-4 text-slate-300'>Rescue Food, <span className='whitespace-nowrap'>Save Money,</span> <span className='whitespace-nowrap'>Make a Difference!</span></p>
        <p className='mx-4 mt-8 text-sm text-left text-slate-300'>“Discover great meals at discounted prices, reduce food waste, and help feed those in need. Join us in building a sustainable community.”</p>
      <div>
        <button onClick={() => navigate('/menu')} className='text-sm bg-slate-300 rounded-lg py-2 px-4 m-4 text-[#000000] inline-flex '>Browse available Meals</button>
      </div>
      </div>
      <img src={image1} alt="scoooooter" />
    </div>
  )
}

export default Header
