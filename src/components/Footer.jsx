import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex md:flex-row justify-around bg-bgColor text-white p-2">
        <h1>Retoran &copy; all rights reserved </h1>
        <div>
            <a href="home">Home</a>/ 
            <a href="about">About</a>
        </div>
      </div>
    </div>
  )
}

export default Footer