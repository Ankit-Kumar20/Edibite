import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search'
import List from '../../components/List'
import Footer from '../../components/Footer'

const Menu = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Menu
