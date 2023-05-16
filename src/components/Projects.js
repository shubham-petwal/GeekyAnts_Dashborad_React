import React from "react";

function Projects({ image }) {
  return (
    <div
      className={` h-cardHeight bg-white ${
        !image ? "w-cardWidth" : " w-cardWidth2 "
      }  rounded-md pt-3 duration-700 relative drop-shadow-2xl  px-5 `}
    >
      <div className=" flex ">
        <h1 className=" font-sans text-xl">My Projects</h1>
      </div>
      <div className=" flex mt-8 h-full ">
        <p>No projects, have been assigned to you yet.</p>
      </div>
    </div>
  );
}

export default Projects;
