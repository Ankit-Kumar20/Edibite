import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Search() {
  return (
    <div className='py-14 md:py-28'>
    <div className='max-w-[1050px] md:h-[93px] flex mx-4 lg:mx-auto text-lg'> 
    <div className='flex gap-2 items-center text-black w-[200px] md:w-[272px] md:pr-0 md:pl-4' style={{background:"#B9FF66"}}>
    <FaLocationDot className='mx-auto md:mx-0'/>
    <span className='hidden md:block'> Location </span>
    </div>
    <div className=' w-[778px]'><label className="input flex items-center gap-2 text-black h-[70px] md:h-[93px] rounded-none text-lg" style={{background:"#D9D9D9"}}>
  <input type="text" className="grow" placeholder="Search for cuisine, restaurants and meals" id='searchinput'/>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-6 w-6 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label></div>
    </div>
    </div>
  )
}

export default Search