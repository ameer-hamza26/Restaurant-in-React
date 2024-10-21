import React from 'react';
import ChefCard from './ChefCard';
import team1 from "../images/team1.png"
import team2 from "../images/team2.png"
import team3 from "../images/team3.png"
import team4 from "../images/team4.png"

const chefsData = [
  {
    name: 'Full Name',
    designation: 'Designation',
    image: team1,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  
  {
    name: 'Full Name',
    designation: 'Designation',
    image: team2,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  
  {
    name: 'Full Name',
    designation: 'Designation',
    image: team3,
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  
  {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-3">
      {chefsData.map((chef) => (
        <ChefCard key={chef.name} chef={chef} />
      ))}
    </div>
  );
};

export default ChefsList;
