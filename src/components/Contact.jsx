import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import MyMapComponent from "./MyMapComponent";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing the CSS for styling

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process form data here
    toast.success("Your message has been sent successfully!"); // Show success notification
  };

  return (
    <div className="container mx-auto my-14">
      <ToastContainer /> {/* Toast container for notifications */}
      <div>
        <h1 className="font font-extrabold text-2xl text-primary text-center">
          ------ Contact us -------
        </h1>
        <h1 className="font-bold text-4xl text-black text-center capitalize my-14">
          Contact for any query language
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="mx-10 ">
          <h1 className="text-primary font my-3">Booking -------</h1>
          <div className="flex items-center">
            <MdMarkEmailRead />
            <Link to="mailto:booking@gmail.com">booking@gmail.com</Link>
          </div>
        </div>
        <div className="mx-10 my-4">
          <h1 className="text-primary font my-3">General -------</h1>
          <div className="flex items-center">
            <MdMarkEmailRead />
            <Link to="mailto:General@gmail.com">General@gmail.com</Link>
          </div>
        </div>
        <div className="mx-10 my-4">
          <h1 className="text-primary font my-3">Technical -------</h1>
          <div className="flex items-center">
            <MdMarkEmailRead />
            <Link to="mailto:technical@gmail.com">technical@gmail.com</Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col p-20 bg-blue-950 rounded my-4 items-center">
        <div id="google-map" className="md:w-1/2 w-full">
          <MyMapComponent className="rounded-lg" />
        </div>
        <div className="contact w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto"> {/* Center the form */}
            <div className="flex flex-col md:flex-row md:space-x-4"> {/* Flexbox layout for responsiveness */}
              {/* Name input */}
              <div className="m-2 flex-1"> {/* Use flex-1 for equal width in flex containers */}
                <input
                  type="text"
                  className={`w-full p-3 rounded-md ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Date and Time input */}
              <div className="m-2 flex-1"> {/* Use flex-1 for equal width in flex containers */}
                <input
                  type="datetime-local"
                  className={`w-full p-3 rounded-md ${errors.dateTime ? "border-red-500" : ""}`}
                  {...register("dateTime", { required: "Date and time are required" })}
                />
                {errors.dateTime && <p className="text-red-500">{errors.dateTime.message}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4"> {/* Flexbox layout for responsiveness */}
              {/* Email input */}
              <div className="m-2 flex-1"> {/* Use flex-1 for equal width in flex containers */}
                <input
                  type="email"
                  className={`w-full p-3 rounded-md ${errors.email ? "border-red-500" : ""}`}
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
              <div className="m-2 flex-1"> {/* Use flex-1 for equal width in flex containers */}
                <select
                  className={`w-full p-3 rounded-md ${errors.people ? "border-red-500" : ""}`}
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

            {/* Textarea for Special Message */}
            <div className="m-2">
              <textarea
                placeholder="Special Message"
                className={`w-full p-3 rounded-md ${errors.text ? "border-red-500" : ""}`}
                {...register("text", {
                  required: "Special Message is required",
                  maxLength: { value: 200, message: "Message cannot exceed 200 characters" },
                })}
              ></textarea>
              {errors.text && <p className="text-red-500">{errors.text.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center w-full my-3 text-white bg-primary border-0 p-3 focus:outline-none hover:bg-yellow-600 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
