import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Reservation from '../components/Reservation'
import MenuItems from '../components/MenuItems'
import RestoranAbout from '../components/RestoranAbout'
import ChefsList from '../components/ChefList'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <RestoranAbout/>
      <MenuItems />
      <Reservation/>
      <ChefsList/>
      <Testimonials/>
    </div>
  )
}

export default Home
