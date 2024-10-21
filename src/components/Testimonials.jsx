import React from 'react';
import { FaAddressCard } from 'react-icons/fa';
import client1 from '../images/client1.png'; // Update with actual paths
import client2 from '../images/client2.png'; // Update with actual paths
import client3 from '../images/client3.png'; // Update with actual paths

const testimonials = [
  {
    image: client1,
    name: 'Client Name 1',
    profession: 'Profession 1',
    testimonial: 'Dolor et eos labore, stet justo sed est. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
  {
    image: client2,
    name: 'Client Name 2',
    profession: 'Profession 2',
    testimonial: 'Dolor et eos labore, stet justo sed est. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
  {
    image: client3,
    name: 'Client Name 3',
    profession: 'Profession 3',
    testimonial: 'Dolor et eos labore, stet justo sed est. Diam sed sed dolor stet amet eirmod eos labore diam.',
  },
];

const Testimonials = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="font-extrabold text-2xl text-primary">------ Testimonial ------</h1>
      <h1 className="font-bold text-3xl capitalize my-6">Our Clients Say</h1>
      <div className="flex flex-col  md:flex-row md:justify-evenly items-center">
        {testimonials.map((client, index) => (
          <div key={index} className="group cards rounded-lg w-[90%] md:w-1/4 border-gray-200 border-2 p-4 my-6 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-primary">
            <FaAddressCard className="text-4xl group-hover:text-white " />
            <p className="my-5 text-justify">{client.testimonial}</p>
            <div className="flex items-center">
              <img src={client.image} alt={client.name} className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h1 className="font-extrabold">{client.name}</h1>
                <h2 className="text-gray-600">{client.profession}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
