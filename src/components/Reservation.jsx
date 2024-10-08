import React from "react";
import ReservationImg from "../images/Reservation.png";

const Reservation = () => {
  return (
    <div>
      <div className=" container mx-auto Reservation flex flex-col md:flex-row md:flex">
        <img className="md:w-1/2 object-cover" src={ReservationImg} alt="img" />
        <div className="form bg-blue-950 md:w-1/2 p-7 ">
          <h1 className="font font-extrabold text-2xl text-primary ">
            Reservation ------
          </h1>
          <h1 className="flex font-bold text-3xl text-white items-center capitalize my-6">
            Book a Table Online
          </h1>
          <form>
            <div className="flex flex-col md:flex-row">
             <div className="m-2 w-full">
             <div>
             <input type="text" className="w-[90%] m-2 p-3  rounded-md" placeholder="Your Name" />
             </div>
             <div>
             <input type="datetime-local" className="w-[90%] m-2 p-3  rounded-md" placeholder="Date and Time" />
             </div>
             </div>
           <div className="m-2 w-full">
           <div>
             <input type="Email" className="w-[90%] m-2 p-3  rounded-md" placeholder="Your Email" />
             </div>
             <div>
                <select className="w-[90%] m-2 p-3  rounded-md" name="" id=""> 
                    <option value="people1">people 1</option>
                    <option value="people2">People 2</option>
                    <option value="people3">People3</option>
                </select>
             </div>
           </div>
            </div>
 <div className="item-center flex justify-center">
                <textarea placeholder="Special Message" name="text"  className="w-[94%]  p-3  rounded-md" id="text"></textarea>
    </div>           
    <div className="item-center flex  justify-center">
    <button className="inline-flex justify-center w-[94%] my-3 text-white  bg-primary border-0 p-3 focus:outline-none hover:bg-gray-200 rounded  ">Book Now
    </button>
    </div>
        
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
