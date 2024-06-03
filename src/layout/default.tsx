import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <div className="bg-white h-screen flex justify-stretch">
        <div className="w-[10vw] hover:w-[200px] transition-all h-full duration-1000 bg-[#273142] text-white ease-linear">
          Sidebar
        </div>
        <div className="flex flex-col flex-grow">
          <div className="bg-[#1B2431] flex flex-wrap gap-7 text-white text-[13px] font-semibold p-4 items-center">
            <div className="text-4xl text-white rounded bg-[#289DF5]">
              <BiLogoTelegram />
            </div>
            <button className="">Accounting</button>
            <button className="">Activity</button>
            <button className="">Teams</button>
          </div>
          <div className="flex-grow">
            <Outlet />
          </div>
          <div className="bg-[#1B2431]">Footer</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
