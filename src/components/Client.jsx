import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'


const Client = () => {
  return (
    <div>
       <div className='text-center my-10'>
      <h1 className="font font-extrabold text-2xl text-primary ">
      ------ Testimonial ------
          </h1>
          <h1 className="font-bold text-3xl capitalize my-6">
            Our Client Say 
          </h1>
      </div>
      <div className=' team-cards-header  flex flex-col md:flex-row md:justify-center items-center text-center'>
        <div className='cards  w-[90%] md:w-1/4 bg-gray-300 p-4 my-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary'>
           <FaAddressCard className='text-4xl '/>
            <h1 className='my-5 text-justify'>Dolor et eos labore, stet justo sed est
sed.Diam sed sed dolor stet amet
eirmod eos labore diam</h1>
<div className='flex'>
<img src={client1} alt="client1" />
<div className='ml-9'>
    <h1 className='font-extrabold'>Client Name</h1>
    <h2>profession</h2>
    </div>
</div>
    </div>

       
        <div className='cards w-[90%] md:w-1/4 bg-gray-300 p-4 my-6  md:mx-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary'>
        <FaAddressCard className='text-4xl '/>
            <h1 className='my-5 text-justify'>Dolor et eos labore, stet justo sed est
sed.Diam sed sed dolor stet amet
eirmod eos labore diam</h1>
<div className='flex'>
<img src={client2} alt="client2" />
<div className='ml-9'>
    <h1 className='font-extrabold'>Client Name</h1>
    <h2>profession</h2>
    </div>
</div>
        </div>
        <div className='cards w-[90%] md:w-1/4 bg-gray-300 p-4 my-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary'>
        <FaAddressCard className='text-4xl'/>
            <h1 className='my-5 text-justify'>Dolor et eos labore, stet justo sed est
sed.Diam sed sed dolor stet amet
eirmod eos labore diam</h1>
<div className='flex'>
<img src={client3} alt="client3" />
<div className='ml-9'>
    <h1 className='font-extrabold'>Client Name</h1>
    <h2 >profession</h2>
    </div>
</div>
        </div>
     
      </div>
    </div>
  )
}

export default Client
