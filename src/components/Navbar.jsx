import React from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {


  
  return (
    <div>
    <header className="text-white body-font bg-bgColor ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:  items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <MdOutlineRestaurant size={30} color="#FEA116"/>
      <span className="ml-3 text-4xl text-primary">Restoran</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base">
  <div className="flex items-center space-x-5"> {/* Add space between links and button */}
    <Link to="/" className="hover:text-primary">Home</Link>
    <Link to="/Contact" className="hover:text-primary">Contact</Link>
    <button className="bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base">
      Button
    </button>
  </div>
</nav>

</div>
</header>
    </div>
  );
};

export default Navbar;
