import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Reservation from '../components/Reservation'
import MenuItems from '../components/MenuItems'
import RestoranAbout from '../components/RestoranAbout'
import Team from '../components/Team'
import Client from '../components/Client'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <RestoranAbout/>
      <MenuItems />
      <Reservation/>
      <Team/>
      <Client/>
    </div>
  )
}

export default Home
