import React from 'react'
import chef1 from "../images/team1.png"
import chef2 from "../images/team2.png"
import chef3 from "../images/team3.png"
import chef4 from "../images/team4.png"
const Team = () => {
  return (
    <div>
      <div className='text-center my-10'>
      <h1 className="font font-extrabold text-2xl text-primary ">
      ------ Team Members ------
          </h1>
          <h1 className="font-bold text-3xl   capitalize my-6">
            Our Master Chefs 
          </h1>
      </div>
      <div className='team-cards-header flex flex-col md:flex-row md:justify-evenly items-center text-center'>
        <div className='cards bg-gray-300 p-4 my-6'>
            <img  src={chef1} alt="chef1" />
            <h1 className='my-2 font-extrabold'>Full Name</h1>
            <h1>Designation</h1>
    </div>

       
        <div className='cards bg-gray-300 p-4 my-6'>
            <img src={chef2} alt="chef1" />
            <h1 className='my-2 font-extrabold'>Full Name</h1>
            <h1>Designation</h1>
        </div>
        <div className='cards bg-gray-300 p-4 my-6'>
            <img src={chef3} alt="chef1" />
            <h1 className='my-2 font-extrabold'>Full Name</h1>
            <h1>Designation</h1>
        </div>
        <div className='cards bg-gray-300 p-4 my-6'>
            <img className='rounded-full' src={chef4} alt="chef1" />
            <h1 className='my-2 font-extrabold'>Full Name</h1>
            <h1>Designation</h1>
        </div>
      </div>
      </div>
  )
}

export default Team
