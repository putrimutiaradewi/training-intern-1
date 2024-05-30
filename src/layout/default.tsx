import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <div className="bg-white h-screen flex justify-stretch">
      <div className="w-[100px] hover:w-[200px] transition-all duration-1000 md:w[300px] bg-black text-white ease-linear">
        Sidebar
      </div>
      <div className="flex flex-col flex-grow ">
        <div className="bg-blue-700 h-[8vh]">Navigation</div>
        <div className="flex-grow">
          <Outlet />
        </div>
        <div className="bg-blue-700 h-[10vh]">Footer</div>
      </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
