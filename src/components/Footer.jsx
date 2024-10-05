import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex md:flex-row justify-around bg-primary p-2">
        <h1>Retoran &copy; all rights reserved </h1>
        <div>
            <a href="home">home</a> / 
            <a href="about">about</a>
        </div>
      </div>
    </div>
  )
}

export default Footer