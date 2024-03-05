import React from "react";
import UsingPhone from "../assets/icons/UsingPhone";
import { MoveRight } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[#0052FE] text-white flex flex-col gap-5 px-8 py-14 text-center rounded-md justify-center">
      <div className="text-2xl font-semibold">
        Get Started with KoinX for FREE
      </div>
      <div className="text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <div className="flex justify-center">
        <UsingPhone />
      </div>
      <div className="">
        <div className="bg-white text-black inline-flex p-2 rounded-md items-center gap-1">
          <span>Get Started for FREE</span> <MoveRight size={20}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
