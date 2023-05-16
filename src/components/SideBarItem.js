import React, { useState } from "react";
import Lottie from "lottie-react";
function SidebarItem({ title, src, index,open }) {
    const[isHover,setIshover] = useState(false)
  return (
    <div onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
      <li
        key={index}
        className={`flex  rounded-md p-2 cursor-pointer h-16 hover:bg-light-white text-gray-400 font-semibold text-sm items-center gap-x-4`}
      >
        <Lottie animationData={src} loop={isHover} className=" w-12"/>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {title}
        </span>
      </li>
    </div>
  );
}

export default SidebarItem;
