import React from "react";
import Profile from "./Profile";

function Team({image}) {
  return (
    <div className={`  h-cardHeight bg-white ${!image?"w-cardWidth":" w-cardWidth2 "}  rounded-md pt-3 duration-700 relative drop-shadow-2xl `}>
      <div className="border-b flex flex-col gap-3">
        <div className="flex flex-col gap-4 px-6">
          <h1 className=" font-sans text-xl">My Team </h1>
          <p className=" opacity-50">My Reporting Manager</p>
        </div>
        <Profile
          image="https://website-admin.geekyants.com/user-image/anmol.png"
          name="Anmol Jain"
          title="Reporting Manager"
        />
      </div>
      <div className=" mt-3">
        <div className="px-6">
          <h1 className="opacity-50">MY HR BUDDY</h1>
        </div>
        <Profile
          image="https://website-admin.geekyants.com/user-image/rakshitb.png"
          name="Rakshit Bhardwaj"
          title="HR Buddy"
        />
      </div>
      <div className=" flex justify-center items-center  absolute bottom-0 bg-blue-500 rounded-b-md w-full h-12 hover:opacity-90 cursor-pointer">
        <h1 className=" text-white font-semibold hover:-translate-y-1 hover:scale-110  duration-300 ">
        Mark My Attendance
        </h1>
      </div>
    </div>
  );
}

export default Team;
