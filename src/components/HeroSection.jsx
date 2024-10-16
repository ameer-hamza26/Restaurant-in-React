import React from 'react'
import hero from "../images/hero.png"
import AboutUs from './AboutUs'


const HeroSection = () => {

  
  return (
    <div>
      <div className=" bg-bgColor flex md:flex-row flex-col items-center  md:justify-center md:h-[90vh] ">
        <div className="left-parent md:text-left my-4 text-center md:w-1/2">
            <h1   className=" font md:text-6xl md:text-left text-center text-4xl text-white leading-tight font-extrabold">Enjoy our <br />delicios meal</h1>
            <p className="md:w-[100%]  text-white my-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
duo justo magna dolore erat amet</p>
<button className="inline-flex items-center bg-primary border-0 py-2 px-3 focus:outline-none hover:bg-secondary  text-base mt-4 md:mt-0">Book a Table
</button>
        </div>
        <div className="right-parent  md:w-1/4">
<img  src={hero} alt="hero-Section" />
        </div>
      </div>
      <AboutUs/>
    </div>
  )
}

export default HeroSection