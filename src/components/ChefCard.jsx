import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ChefCard = ({ chef }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className=" w-64 h-96 bg-white shadow-lg rounded-lg overflow-hidden my-24 p-3 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Chef Image */}
      <img
        src={chef.image}
        alt={chef.name}
        className="w-full  object-cover rounded-full"
      />

      {/* Chef Name and Designation */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{chef.name}</h3>
        <p className="text-gray-600">{chef.designation}</p>
      </div>

      {/* Social Media Icons (Shown on Hover) */}
      {hover && (
        <div className=" bg-opacity-75 flex justify-center  space-x-4 transition-opacity duration-1000 ease-in-out">
          <a href={chef.instagram} className="text-white bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 p-2 rounded-full">
            <FaInstagram size={20} />
          </a>
          <a href={chef.facebook} className="text-white bg-blue-600 p-2 rounded-full">
            <FaFacebook size={20} />
          </a>
          <a href={chef.twitter} className="text-white bg-blue-400 p-2 rounded-full">
            <FaTwitter size={20} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ChefCard;
