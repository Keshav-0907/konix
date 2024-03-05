import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-4 bg-white flex justify-between px-10 z-50 shadow-md">
      <div className="flex items-center">
        <img
          className="h-5"
          src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg"
          alt="err"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="flex gap-8">
          <Link to={"/"}> Crypto Taxes </Link>
          <Link to={"/"}> Free Tools </Link>
          <Link to={"/"}> Resource Center </Link>
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 px-8 rounded-xl">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
