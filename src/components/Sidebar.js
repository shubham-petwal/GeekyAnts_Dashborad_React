import { useState } from "react";
import Home from "../assets/home.json";
import advance from "../assets/advance.json";
import assets from "../assets/assets.json";
import bonus from "../assets/bonus.json";
import book from "../assets/book.json";
import contact from "../assets/contact.json";
import cross from "../assets/cross.json";
import law from "../assets/law.json";
import man from "../assets/man.json";
import moniter from "../assets/moniter.json";
import policies from "../assets/policies.json";
import profile from "../assets/profile.json";
import satellite from "../assets/satellite.json";
import shopping from "../assets/shopping.json";
import skills from "../assets/skills.json";
import tick from "../assets/tick.json";
import ticket from "../assets/ticket.json";
import timesheet from "../assets/timesheet.json";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";

import SideBarItem from "./SideBarItem";
const Sidebar = ({ sidebarOpen, setSidebarOpen, image, setImage }) => {
    
  const Menus = [
    { title: "Dashboard", src: Home },
    { title: "HR Buddy", src: man },
    { title: "Todo", src: tick },
    { title: "Support Ticket ", src: ticket },
    { title: "Asset Requests", src: moniter },
    { title: "Internet Allowance", src: satellite },
    { title: "My Reimbursements ", src: shopping },
    { title: "Advance Payroll", src: advance },
    { title: "Salary", src: book },
    { title: "Bonus", src: bonus },
    { title: "It Savings", src: law },
    { title: "Timesheet", src: timesheet },
    { title: "Policies", src: policies },
    { title: "Assets", src: assets },
    { title: "My Profile", src: profile },
    { title: "My Contacts", src: contact },
    { title: "My Skills", src: skills },
    { title: "Log Out", src: cross },
  ];
const handleSidebarEnter = ()=>{
    if(!image){
        setSidebarOpen(true)
    }
}
const handleSidebarLeave = ()=>{
    if(!image){
        setSidebarOpen(false)
    }
}
const handleImage = ()=>{
    setImage(!image)
}
  return (
    <div
      className={` ${
        sidebarOpen ? " w-72" : "w-20 "
      } h-screen overflow-scroll duration-500  pt-8 border-r-2 bg-appBg ${!image?" absolute":""}   `}
      onMouseEnter={handleSidebarEnter} onMouseLeave={handleSidebarLeave}
    >
      <div className="flex gap-x-6 items-center relative ">
        {!image && sidebarOpen?
              <img
              src={circle1}
              className={`absolute cursor-pointer right-3 top-1  w-7 border-dark-purple
                 border-2 rounded-full  ${!sidebarOpen && "rotate-180"}`}
              onClick={handleImage}
              alt="sidebarOpen or close"
            />:
            <img
            src={circle2}
            className={`absolute cursor-pointer right-3 top-1 w-7 border-dark-purple
             border-2 rounded-full  ${!sidebarOpen && "scale-0"}`}
            onClick={handleImage}
            alt="sidebarOpen or close"
          />}
      </div>
      <div className=" flex flex-col justify-center items-center">
        <img src="https://my.geekyants.com/assets/images/logo/logo-dark.png" className=" max-h-7"/>
        <div className=" mt-4 flex flex-col text-center items-center">
        <img src="https://website-admin.geekyants.com/user-image/shubhamp.png" width="40" height="40" className="rounded-full"/>
        <h1 className="text-sm">Shubham Petwal</h1>
        <p className=" text-xs opacity-40 ">Trainee Software Engineer</p>
        </div>
      </div>
      <ul className="pt-6 z-50">
        {Menus.map((Menu, index) => (
          <SideBarItem
            open={sidebarOpen}
            title={Menu.title}
            src={Menu.src}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
