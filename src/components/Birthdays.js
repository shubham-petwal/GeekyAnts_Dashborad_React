import React from "react";
import Profile from "./Profile";

function Birthdays({ image }) {
  const data = [
    {
      date: "Today",
      name: "Shamsher Shikandar Shikalgar",
      profile: "https://website-admin.geekyants.com/user-image/shamsher.png",
    },
    {
      date: "14 May",
      name: "Gaurav Porwal",
      profile: "https://website-admin.geekyants.com/user-image/gauravp.png",
    },
    {
      date: "15 May",
      name: "Rudra Pratap Singh",
      profile: "https://website-admin.geekyants.com/user-image/rudra.png",
    },
    {
      date: "15 May",
      name: "Bodavula Ashwini",
      profile: "https://website-admin.geekyants.com/user-image/ashwinib.png",
    },
    {
      date: "15 May",
      name: "Raman Ji",
      profile: "https://website-admin.geekyants.com/user-image/ramanj.png",
    },
  ];
  return (
    <div
      className={`  h-cardHeight bg-white ${
        !image ? "w-cardWidth" : " w-cardWidth2 "
      }  rounded-md pt-3 duration-700 relative drop-shadow-2xl `}
    >
      <div className=" flex ">
        <h1 className=" font-sans text-xl px-4">Upcoming Birthdays</h1>
      </div>
      <div className="overflow-scroll h-holidaysHeight scrollbar overflow-x-hidden pt-4">
        <div className=" border-b">
        <p className=" px-6 ">Today</p>
          {data.map((item) =>
            item.date === "Today" ? (
              <div className=" py-2">
                <div className="flex items-center gap-5 hover:bg-appBg py-2 justify-between pr-4  ">
                  <Profile
                    image={item.profile}
                    name={item.name}
                    title="Happy Birthday"
                  />
                  <img
                    src="https://my.geekyants.com/assets/images/001-birthday-cake.png"
                    width="25px" className=" h-7"
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className=" border-b mt-2">
            <p className=" px-6">14 May</p>
          {data.map((item) =>
            item.date === "14 May" ? (
              <div className=" py-2">
                <div className="flex items-center gap-5  hover:bg-appBg py-2 justify-between pr-4 ">
                  <Profile
                    image={item.profile}
                    name={item.name}
                    title="Happy Birthday"
                  />
                  <img
                    src="https://my.geekyants.com/assets/images/001-birthday-cake.png"
                    width="25px" className=" h-7"
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className=" border-b">
            <p className=" px-6 py-2">15 May</p>
          {data.map((item) =>
            item.date === "15 May" ? (
              <div className="">
                <div className="flex items-center gap-5  hover:bg-appBg py-2  justify-between pr-4">
                  <Profile
                    image={item.profile}
                    name={item.name}
                    title="Happy Birthday"
                  />
                  <img
                    src="https://my.geekyants.com/assets/images/001-birthday-cake.png"
                    width="25px" className=" h-7"
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default Birthdays;
