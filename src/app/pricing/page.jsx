import React from 'react'
import Hero from './Hero'
import Plan from './Plan'

import Testimonials from './Testimonials'
import Card from './Card'
import Faqs from './Faqs'
import Navbar from '../components/UI/Navbar'
import Footer from '../components/UI/Footer'

const Pricing = () => {
  return (
    <div className='overflow-x-hidden'>
      
        <Navbar />  
        <Hero />
        <Plan />
      
        <Card />
        <div className='sm:max-w-[20%] mt-[100px] mx-auto border-t-2 border-[color:var(--light-grey)]'></div>
        <Testimonials />
        <Faqs />
        <Footer />
    </div>

  )
}

export default Pricing