import { useState } from "react";
import AllocatedSeats from "./components/AllocatedSeats";
import Birthdays from "./components/Birthdays";
import Holidays from "./components/Holidays";
import ProfileName from "./components/ProfileName";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import SupportTickets from "./components/SupportTickets";
import Team from "./components/Team";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [image, setImage] = useState(false);
  return (
    <div className="flex bg-appBg ">
      <div
        className=" z-50 bg-appBg relative "
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} image={image} setImage={setImage}  />
      </div>

      <div
        className={`${
          image ? "" : ""
        } h-screen overflow-scroll scrollbar overflow-x-hidden flex justify-end flex-wrap gap-8 p-8 z-10 text-base text-slate-500 pt-6`}
      >
        <Team image={image} />
        <Holidays image={image}/>
        <AllocatedSeats image={image} />
        <Projects image={image}/>
        <SupportTickets image={image}/>
        <Birthdays image={image}/>
        <div className=" mt-6">
        <p>Crafted with 💕 for the geek by the geeks</p>
      </div>
      </div>
    </div>
  );
}

export default App;
