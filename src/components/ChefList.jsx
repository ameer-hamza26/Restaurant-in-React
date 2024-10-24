import React from 'react';
import ChefCard from './ChefCard';
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import team4 from "../images/team4.png"

const chefsData = [
  {
    id: 1, // Unique ID for the chef
    name: 'Full Name',
    designation: 'Designation',
    image: team1,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    id: 2, // Unique ID for the chef
    name: 'Full Name',
    designation: 'Designation',
    image: team2,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    id: 3, // Unique ID for the chef
    name: 'Full Name',
    designation: 'Designation',
    image: team3,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    id: 4, // Unique ID for the chef
    name: 'Full Name',
    designation: 'Designation',
    image: team4,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
];

const ChefsList = () => {
  return (
  <div>
      <div >
    <h1 className='font font-extrabold text-2xl text-primary  text-center my-5'> ---- Team Members ---- </h1>
        <h1 className='font font-extrabold text-4xl   text-center my-5'>Our Master Chefs</h1>

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-3">
      {chefsData.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  </div>
  );
};

export default ChefsList;
