import React from 'react'
import { useState } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Adminpage from './restaurant/pages/adminpage';
import Menu from './pages/Menu/Menu';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (

    <div className='w-screen min-h-screen py-4 bg-[#191A23] font-outfit '>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />}/>
        <Route path='/myorders' element={<MyOrders />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/adminpage' element={<Adminpage />}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App

