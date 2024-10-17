import React from 'react'
import { WhyUS_1, WhyUS_2, WhyUS_3 } from '../../assets/images/assets'

const WhyUs = () => {
  return (
    <div className='p-6'>
      <h1 className='mx-4 text-md text-[#000000] bg-[#B9FF66] p-1 rounded-lg inline-flex'>Why choose us ?</h1>
      <div className='bg-white mt-6 mx-4 px-4 rounded-lg flex justify-between items-center'>
        <div>
        <p className='text-[12px] text-balance'>Save Money & Enjoy Great Food: Get delicious meals at a fraction of the price.</p>
        </div>
        <img className='h-28 w-28' src={WhyUS_1} alt="" />
      </div>
      <div className='bg-white mt-6 mx-4 px-4 rounded-lg flex justify-between items-center'>
        <img className='h-28 w-28 mr-8' src={WhyUS_2} alt="" />
        <div>
        <p className='text-[12px]'>Fight Food Waste: Join us in reducing the 1.3 billion tons of food wasted annually.</p>
        </div>
      </div>
      <div className='bg-white mt-6 mx-4 px-4 rounded-lg flex justify-between items-center'>
        <div>
        <p className='text-[12px] text-balance'>Support Local Shelters: Make a positive impact by donating meals to people in need.</p>
        </div>
        <img className='h-28 w-28' src={WhyUS_3} alt="" />
      </div>
    </div>
  )
}

export default WhyUs
