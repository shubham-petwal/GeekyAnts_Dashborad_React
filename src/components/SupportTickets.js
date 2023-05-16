import React from "react";

function SupportTickets({ image }) {
  return (
    <div
      className={`  h-cardHeight bg-white ${
        !image ? "w-cardWidth" : " w-cardWidth2 "
      }  rounded-md pt-3 duration-700 relative drop-shadow-2xl `}
    >
      <div className=" flex ">
        <h1 className=" font-sans text-xl px-4">My Support Tickets</h1>
      </div>
      <div>
        <div className=" flex items-center gap-2 border-b-2 p-4">
          <div className=" w-3/5">
            <p>Request for Monitor</p>
            <p style={{ "font-size": "12px" }}>
              Created At: 12th Aug 22 at 9:44 am
            </p>
          </div>
          <div className=" w-2/5 bg-green-100 text-green-400 h-5 items-center rounded-md text-xs justify-center flex">
            <p>VERIFIED & CLOSED</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 border-b-2 p-4">
          <div className=" w-3/5 ">
            <p>Requesting for changing of USB cable</p>
            <p style={{ "font-size": "12px" }}>
              Created At: 12th Aug 22 at 9:44 am
            </p>
          </div>
          <div className=" w-2/5  bg-green-100 text-green-400 h-5 items-center  rounded-md text-xs justify-center flex">
            <p>VERIFIED & CLOSED</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 border-b-2 p-4">
          <div className=" w-3/5 ">
            <p>Requesting for Keyboard and Mouse</p>
            <p style={{ "font-size": "12px" }}>
              Created At: 30th May 22 at 12:48 pm
            </p>
          </div>
          <div className=" w-2/5  bg-green-100 text-green-400 h-5 items-center  rounded-md text-xs justify-center flex">
            <p>VERIFIED & CLOSED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTickets;
