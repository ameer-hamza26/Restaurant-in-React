import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="flex md:flex-row justify-around bg-bgColor text-white p-2">
        <h1>Restoran &copy; all rights reserved </h1>
        <div>
            <Link to="/">Home</Link>/ 
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer