import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/LoginPopup/LoginPopup';
import ModalR from '../LoginPopup/LoginPopupR';
import {user_icon, cart_icon} from '../../assets/images/assets';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalROpen, setIsModalROpen] = useState(false);

  const[isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {token,setToken,logout} = useContext(StoreContext);

  const navigate = useNavigate(); 
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   setToken("");
  // }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = 'auto';  // Enable scroll
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalROpen) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = 'auto';  // Enable scroll
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalROpen]);

  return (
    <div className='flex justify-between items-center ' >
      <h1 onClick={() => navigate('/')} className='p-6 ml-4 text-4xl text-[#FFFFFF]'>Edibite</h1>
      <div className='hidden '>
        <a className='p-4 ' href="/">Home</a>
        <a className='p-4 ' href="/about">About Us</a>
        <a className='p-4 ' href="/contact">Services</a>
      </div>
      {!token ? <div>
        <button onClick={() => setIsModalOpen(true)}  className='text-[11px] mr-4 bg-transparent rounded-lg p-2 border text-slate-300 hover:bg-slate-300 hover:text-[#000000] '>Sign Up</button>
        <button onClick={() => setIsModalROpen(true)} className='text-[11px] mr-8 bg-slate-300 rounded-lg p-2 whitespace-nowrap text-[#000000] hover:bg-transparent hover:text-slate-300 border '>For Restaurants</button></div> : 
        <div className='flex items-center mr-8'>
        <img className='size-[25px] m-6' 
             src={cart_icon} 
             alt=""
             onClick={() => navigate('/cart')} 
          />
        <img
            className="size-[25px] mr-2 cursor-pointer"
            src={user_icon}
            alt="User"
            onClick={toggleDropdown}
          />
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-10 top-20 bg-gray-700 divide-y divide-gray-600 rounded-lg shadow w-32">
              <ul className="py-2 text-sm text-white">
                <li>
                  <a href="/profile" className="block px-4 py-2 ">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Settings
                  </a>
                </li>
              </ul>
              <div className="py-2 rounded-lg hover:bg-gray-600">
                <a onClick={logout} href="/" className="block px-4 py-2 text-sm text-white ">
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
        }
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ModalR isOpen={isModalROpen} onClose={() => setIsModalROpen(false)} />
    </div>
  )
}

export default Navbar
