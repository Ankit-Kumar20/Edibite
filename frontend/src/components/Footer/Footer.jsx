import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";


function Footer() {
  return (
    <>
    <footer className="footer flex flex-wrap bg-transparent mt-20 py-10 px-[40px]">
    <div className='gap-5 items-center justify-center'>
        <div className='text-[48px] text-white'>Edibite</div> 
        <div className='flex text-white text-2xl items-center justify-center gap-5'>
        <BsLinkedin className='rounded-full ' />
        <FaFacebook />
        <AiFillTwitterCircle className='text-[28px]' />
        </div> 
    </div>
    <div className="footer flex flex-wrap gap-5 justify-between">
        <div className='flex flex-col justify-between h-[150px] text-white'>
            <div className='text-black px-[7px] rounded-md' style={{background:"#B9FF66"}}>Contact us:</div>

            <div>Email: project@outr.com</div>
            <div>Phone: +91 1234569696</div>
            <div>Address: OUTR
            <br />
            Bhubaneswar, Odisha</div>
        </div>
  <form>
    <fieldset className="form-control w-85">
      <div className="flex flex-wrap items-center justify-center py-8 gap-3 rounded-md max-w-[640px] min-h-[150px] text-lg" style={{background:"#292A32"}}>
        <input
          type="text"
          placeholder="Email"
          className="input focus:outline-none focus:ring-[#B9FF66] focus:ring-1 w-[220px] h-[55px] text-lg" />
        <button className="text-black rounded-lg w-[220px] h-[50px]" style={{background:"#B9FF66"}}>Subscribe to offers</button>
      </div>
    </fieldset>
  </form>
  </div>
  <div className='h-10 w-full'>
    <div className='h-[1px] w-full bg-white'></div>
    <div className='text-white flex gap-[120px] mt-5'>
        <div>© 2024 Edibite. <br /> All Rights Reserved.</div>
        <div className='underline whitespace-nowrap'><a href="#">Privacy Policy</a></div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer