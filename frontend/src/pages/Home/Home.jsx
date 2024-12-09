import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import WhyUs from '../../components/WhyUS/WhyUs'
import Testimonials from '../../components/Testimonials/Testimonials'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
