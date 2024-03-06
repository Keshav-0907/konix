import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { XCircle } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="fixed top-0 w-full p-4 bg-white flex justify-between px-10 z-50 shadow-sm">
      <div className="flex items-center">
        <img
          className="h-5"
          src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg"
          alt="err"
        />
      </div>

      <div className="md:flex gap-10 items-center hidden">
        <div className="flex gap-8">
          <Link to={"/"}> Crypto Taxes </Link>
          <Link to={"/"}> Free Tools </Link>
          <Link to={"/"}> Resource Center </Link>
        </div>
        <div>
          <button className="bg-blue-600 text-white py-2 px-8 rounded-xl">
            Get started
          </button>
        </div>
      </div>

      <div className="md:hidden flex" onClick={toggleMobileMenu}>
        {mobileMenu ? <XCircle size={24} /> : <AlignJustify size={24} />}
      </div>

      {mobileMenu && (
        <div className="md:hidden fixed top-10 left-0 w-full bg-white z-50">
          <div className="flex flex-col items-center gap-8 py-10">
            <Link to={"/"}> Crypto Taxes </Link>
            <Link to={"/"}> Free Tools </Link>
            <Link to={"/"}> Resource Center </Link>
            <button className="bg-blue-600 text-white py-2 px-8 rounded-xl">
              Get started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
