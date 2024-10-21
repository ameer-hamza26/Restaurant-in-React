import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    let scrollStep = window.pageYOffset / 50; // How many pixels to scroll each step (adjust this for smoothness)
    let scrollInterval = setInterval(() => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Frequency of scrolling (adjust for smoothness)
  };
  
  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-primary text-white rounded-full shadow-lg 
                text-3xl     hover:bg-orange-600  transition-opacity duration-500 opacity-100"
        >
          <FaArrowTurnUp/>
        </button>
      )}
    </>
  );
};

export default ScrollButton;
