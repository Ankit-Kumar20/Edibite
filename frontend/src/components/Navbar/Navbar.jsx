import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/LoginPopup/LoginPopup';
import ModalR from '../LoginPopup/LoginPopupR';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalROpen, setIsModalROpen] = useState(false);

  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = 'auto';  // Enable scroll
    }
    // Clean up on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  useEffect(() => {
    if (isModalROpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
      <div>
        <button onClick={() => setIsModalOpen(true)}  className='text-[8px] mr-4 bg-transparent rounded-lg p-2 border text-slate-300 hover:bg-slate-300 hover:text-[#000000] '>Sign Up</button>
        <button onClick={() => navigate('/adminpage')} className='text-[8px] mr-8 bg-slate-300 rounded-lg p-2 whitespace-nowrap text-[#000000] '>For Restaurants</button></div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Navbar
