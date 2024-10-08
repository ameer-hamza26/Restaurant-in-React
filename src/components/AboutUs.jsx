import React from 'react'
import { PiChefHatDuotone } from "react-icons/pi";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap  -m-4">
      <div className="p-4 md:w-1/4">
        <div className=" transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/> */}
          <div className="p-6">
          <PiChefHatDuotone size={50}/>
            <h1 className="title-font text-lg font-medium text-gray-900 my-3">Master Chefs</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="  p-4 md:w-1/4">
        <div className=" hover:bg-primary transition duration-500 ease-in-out transform hover:scale-105 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/> */}
          <div className="p-6">
          <MdOutlineRestaurant size={50} />
            <h1 className="title-font text-lg font-medium text-gray-900 my-3">The Quality food</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className=" transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/> */}
          <div className="p-6">
          <FaHeadphones size={50}/>
            <h1 className="title-font text-lg font-medium text-gray-900 my-3">24/7 Services</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/4">
        <div className="transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"> */}
          <div className="p-6">
          <FaShoppingCart size={50}/>
            <h1 className="title-font text-lg font-medium text-gray-900 my-3">Online Order</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default AboutUs
