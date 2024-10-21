import React from 'react';
import { PiChefHatDuotone } from "react-icons/pi";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaShoppingCart, FaHeadphones } from "react-icons/fa";

const services = [
  {
    icon: <PiChefHatDuotone size={50} />,
    title: "Master Chefs",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <MdOutlineRestaurant size={50} />,
    title: "The Quality food",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaHeadphones size={50} />,
    title: "24/7 Services",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    icon: <FaShoppingCart size={50} />,
    title: "Online Order",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 md:w-1/4">
                <div className=" group transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="p-6 ">
                    <div className='text-primary group-hover:text-white '>{service.icon}</div>
                    <h1 className="title-font text-lg font-medium text-gray-900 my-3">{service.title}</h1>
                    <p className="leading-relaxed mb-3">{service.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">1.2K</span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">6</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
