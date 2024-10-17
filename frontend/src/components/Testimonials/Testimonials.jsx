import React from 'react'
import { Bubble } from '../../assets/images/assets'

const Testimonials = () => {
  return (
    <div className='p-6 mx-4'>
      <div className='flex items-center'>
        <h1 className='text-md text-[#000000] bg-[#B9FF66] p-1 rounded-lg inline-flex'>Testimonials</h1>
        <p className='text-slate-300 text-[10px] ml-4'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about our Services</p>
      </div>
      <div className='mt-6'>
        <div className='flex justify-around'>
            <div className='relative'>
                <img className='' src={Bubble} alt="" />
                <p className='text-slate-300 text-sm absolute top-0 left-0 p-5 '>“I saved 50% on a meal and donated to a shelter nearby. It's a win-win!”</p>
                <p className='text-slate-300 text-sm absolute bottom-0 right-0 p-14'>- John Doe</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonials
