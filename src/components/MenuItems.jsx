import React, { useEffect, useState } from 'react';
import { BsFillCupHotFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import menuData from './Menu';

const MenuItems = () => {

    const [selectedMenu, setSelectedMenu] = useState("breakfast");

    const handleMenuChange = (menuType) => {
      setSelectedMenu(menuType);
    };
  

   return (
        
    <div> 
    <div>
    <h1 className='font font-extrabold text-2xl text-primary  text-center my-5'> Food Menu </h1>
        <h1 className='font font-extrabold text-4xl   text-center my-5'>Most Popular Item</h1>

    </div>
    <div  className=' menu-buttons cursor-pointer flex  md:w-full flex-row  justify-center'>

    <div   className={`flex md:px-4 md:py-2 rounded hover:bg-gray-300 transition-all ease-in-out ${selectedMenu === "breakfast" ? "  border-b-8 border-primary" : ""}`}
          onClick={() => handleMenuChange("breakfast")}>  

    <BsFillCupHotFill className='md:mx-4 mx-2 text-primary' size={40}/>
    <div className=''><h1>popular</h1>
    <h1 className='font-extrabold'>Breakfast</h1></div>
    </div>
    <div className={`flex md:px-4 md:py-2 rounded hover:bg-gray-300 transition-all ease-in-out ${selectedMenu === "lunch" ? "border-b-8 border-primary" : ""}`}
          onClick={() => handleMenuChange("lunch")}>  
    <FaHamburger className='md:mx-4 mx-2 text-primary' size={40}/>

    <div className=''><h1>popular</h1>
    <h1 className='font-extrabold'>Launch</h1></div>
    </div>
    <div className={`flex md:px-4 md:py-2 rounded hover:bg-gray-300 transition-all ease-in-out ${selectedMenu === "dinner" ? "border-b-8 border-primary " : ""}`}
          onClick={() => handleMenuChange("dinner")}>  
    <MdOutlineRestaurant className='md:mx-4 mx-2 text-primary' size={40}/>
    <div><h1>lovely</h1>
    <h1 className='font-extrabold'>Dinner</h1></div>
    </div>
        </div>    

        {/* onClick={()=>{handleClick("dinner")}} className={` ${isActive === "dinner" ? 'border-b-8 border-primary' : ''}  flex w-1/6`} */}

    <div className="container mx-auto py-10">
    
      <div className="container mx-auto grid md:grid-cols-2   mt-10 ">
        {menuData[selectedMenu].map((item) => (
          <div key={item.id} className='bg-gray-200 rounded-3xl p-2 m-5'>
            <div  className=" flex justify-between p-2 ">
            <img className="md:w-[20%] w-[30%] h-28 object-cover md:h-28 rounded-2xl" src={item.img} alt="recipe" />
<div className='  w-1/2'>
<span className='block text-2xl my-2 '>{item.name} </span>
<hr className='my-4' />
<span>{item.desc}</span>
</div>            
<span className=' text-2xl '>{item.price}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )

}
export default MenuItems
