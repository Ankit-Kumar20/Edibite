import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";


function Footer() {
  return (
    <>
    <footer className="footer flex flex-wrap bg-transparent mt-24 py-10 
    px-[40px] md:px-[100px]">
    <div className='md:flex gap-10 md:gap-36 items-center justify-center
    '>
        <div className='text-[48px] text-white'>Edibite</div> 
        <div className='flex text-white text-2xl items-center justify-center gap-5'>
        <BsLinkedin className='rounded-full' />
        <FaFacebook />
        <AiFillTwitterCircle className='text-[28px]' />
        </div> 
    </div>
    <div className="footer flex flex-wrap gap-12 justify-between">
        <div className='flex flex-col justify-between h-[184px] text-white'>
            <div className='text-black px-[7px] rounded-md' style={{background:"#B9FF66"}}>Contact us:</div>

            <div>Email: info@edibite.com</div>
            <div>Phone: 555-567-8901</div>
            <div>Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345</div>
        </div>
  <form>
    <fieldset className="form-control w-72">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center py-8 md:py-[58px] md:px-[40px] gap-8 rounded-md max-w-[640px] min-h-[184px] text-lg" style={{background:"#292A32"}}>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-[220px] md:w-[255px] h-[68px] text-lg" />
        <button className="text-black rounded-lg w-[220px] md:w-[255px] h-[68px]" style={{background:"#B9FF66"}}>Subscribe to offers</button>
      </div>
    </fieldset>
  </form>
  </div>
  <div className='h-10 w-full'>
    <div className='h-[1px] w-full bg-white'></div>
    <div className='text-white flex gap-12 mt-5'>
        <div>© 2024 Edibite. All Rights Reserved.</div>
        <div className='underline'><a href="#">Privacy Policy</a></div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer