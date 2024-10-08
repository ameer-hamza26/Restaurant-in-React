import React from 'react'
import about1 from "../images/about-1.jpg.png"
import about2 from "../images/about-2.jpg.png"
import about3 from "../images/about-3.jpg.png"
import about4 from "../images/about-4.jpg.png"
import { MdOutlineRestaurant } from "react-icons/md";

const RestoranAbout = () => {
  return (
    <div>
      <div className=" container mx-auto flex flex-col  md:flex-row h-full justify-center items-start bg-slate-200 p-6"> 
        <div className="grid md:grid-cols-2 gap-6 mx-auto  place-items-center   w-1/2  ">
            <img className='w-56  ' src={about1} alt="images" />
   <img className='w-56 ' src={about2} alt="images" />
            <img  className='w-56 ' src={about3} alt="images" />
            <img className="w-56 " src={about4} alt="images" />
        </div>
        <div className='md:w-1/2 p-8'>
            <h1 className='font font-extrabold text-2xl text-primary '>about us ------</h1>
            <h1 className='flex font-bold text-3xl text-black items-center capitalize my-6'>Welcome to the <MdOutlineRestaurant  color="#FEA116" size={30} className="md:mx-3 "/>Restoran</h1>
            <p className="my-3 md:w-[90%] text-justify ">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className='my-4 md:w-[90%] text-justify'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
lorem sit clita duo justo magna dolore erat amet</p>

<div className="flex  justify-between w-full   md:w-[80%]  md:my-8 "> 
    <div className='flex   md:w-[50%] w-full justify-evenly   '>
        <h1 className='text-primary font-bold text-4xl md:border-l-4 border-primary pl-3 '>13</h1>
        <div className='ml-4'>
        <h2 > Years of </h2>
        <h1 className='font-bold uppercase'>Experience</h1>
        </div>
    </div>
    <div className='flex w-full md:w-[50%] justify-between'>
        <h1 className='  text-primary font-bold text-4xl md:border-l-4 border-primary pl-3' >50</h1>
        <div className='ml-4'>
        <h2>Popular </h2>
        <h1 className="font-bold uppercase">Master Chefs</h1>
        </div>
    </div>
</div>

<button className="inline-flex items-center text-white   bg-primary border-0 py-3 px-7 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0">Read More
    </button>
        </div>
      </div>
    </div>
  )
}

export default RestoranAbout
