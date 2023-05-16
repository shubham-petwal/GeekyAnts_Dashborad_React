import React from "react";

function Profile({ image, name, title }) {
  return (
    <div className=" flex items-center gap-4 hover:bg-appBg px-6 h-16">
      <div className=" ">
        <img src={image} width="30px" className="rounded-full h-8" />
      </div>
      <div>
        <h1>{name}</h1>
        <p className=" text-gray-400 " style={{ "font-size": "12px" }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default Profile;
