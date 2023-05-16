import React from "react";

function Holidays({ image }) {
  const data = [
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Tue, 15th Aug 2023", type: "", event: "Independence Day" },
    { date: "Wed, 16th Aug 2023", type: "OPTIONAL", event: "Parsi New Year" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
    { date: "Thu, 29th Jun 2023", type: "OPTIONAL", event: "Eid-al-Adha" },
  ];
  return (
    <div
      className={`  h-cardHeight bg-white ${
        !image ? "w-cardWidth" : " w-cardWidth2 "
      } rounded-md pt-3 duration-700 drop-shadow-2xl`}
    >
      <div className=" flex justify-between items-center px-4">
        <h1 className="text-xl"> Upcoming Holidays</h1>
        <p className=" text-xs text-blue-500">View All</p>
      </div>
      <div className="overflow-scroll h-holidaysHeight scrollbar overflow-x-hidden">
        {data.map((item, index) => (
          <div
            className="flex justify-between mt-3 border-b-2 h-16 items-center px-4"
            key={index}
          >
            <div>
              <p className={`${index === 0 && "text-blue-500"}`}>
                {item?.date}
              </p>
            </div>
            <div className=" flex flex-col">
              <div className=" ">
                {item?.type ? (
                  <p className=" text-right bg-orange-100 px-3 py-1  text-xs float-right text-orange-400 rounded-md">
                    {item?.type}
                  </p>
                ) : null}
              </div>
              <p>{item?.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holidays;
