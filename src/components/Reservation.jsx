import React from "react";
import ReservationImg from "../images/Reservation.png";
import { useForm } from "react-hook-form";

const Reservation = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process form data here
  }
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
          <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row">
        {/* Name input */}
        <div className="m-2 w-full">
          <div>
            <input
              type="text"
              className={`w-[90%] m-2 p-3 rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Date and Time input */}
          <div>
            <input
              type="datetime-local"
              className={`w-[90%] m-2 p-3 rounded-md ${
                errors.dateTime ? "border-red-500" : ""
              }`}
              {...register("dateTime", { required: "Date and time are required" })}
            />
            {errors.dateTime && <p className="text-red-500">{errors.dateTime.message}</p>}
          </div>
        </div>

        {/* Email and Select input */}
        <div className="m-2 w-full">
          <div>
            <input
              type="email"
              className={`w-[90%] m-2 p-3 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Select input */}
          <div>
            <select
              className={`w-[90%] m-2 p-3 rounded-md ${
                errors.people ? "border-red-500" : ""
              }`}
              {...register("people", { required: "Please select an option" })}
            >
              <option value="">Select People</option>
              <option value="people1">People 1</option>
              <option value="people2">People 2</option>
              <option value="people3">People 3</option>
            </select>
            {errors.people && <p className="text-red-500">{errors.people.message}</p>}
          </div>
        </div>
      </div>

      {/* Textarea for Special Message */}
      <div className=" flex flex-col  px-4 ">
        <textarea 
          placeholder="Special Message"
          className={`w-[98%] p-3 rounded-md ${
            errors.text ? "border-red-500" : ""
          }`}
          {...register("text", {
            required: "Special Message is required",
            maxLength: { value: 200, message: "Message cannot exceed 200 characters" },
          })}
        ></textarea>
        
       <div className="">
       {errors.text && <p className="text-red-500 ">{errors.text.message}</p>}
       </div>
      </div>

      {/* Submit Button */}
      <div className="item-center flex justify-center">
        <button
          type="submit"
          className="inline-flex justify-center w-[94%] my-3 text-white bg-primary border-0 p-3 focus:outline-none hover:bg-gray-200 rounded"
        >
          Book Now
        </button>
      </div>
    </form>        </div>
      </div>
    </div>
  );
};

export default Reservation;
