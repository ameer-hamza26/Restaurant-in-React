import React from 'react';
import hero from "../images/hero.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {

  return (
    <div>
      <div className=" bg-bgColor flex md:flex-row flex-col items-center md:justify-center md:h-[90vh] ">
        <div className="left-parent md:text-left my-4 text-center md:w-1/2">
          <h1 className="font md:text-6xl md:text-left text-center text-4xl  text-white leading-tight font-extrabold">
            Enjoy our <br /> delicious meal
          </h1>
          <p className="md:w-[80%] text-white my-6 justify-center w-[100%] md:p-0 p-3 text-justify  ">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <button className="inline-flex items-center text-white bg-primary border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
            <Link to="/reservation">Book a Table</Link>
          </button>
        </div>
        <div className="right-parent md:p-0 p-7 md:w-1/4">
          <img className="hero-img" src={hero} alt="hero-Section" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
