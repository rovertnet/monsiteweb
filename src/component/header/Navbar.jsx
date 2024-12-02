import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import logo from "../../assets/image/mon_logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <div className="fixed bottom-0 md:bottom-0 left-0 right-0 bg-white/20 md:bg-white/20 border-[1px] border-slate-500 px-3 py-[3px] md:px-3 md:py-[3] mx-24 md:mx-[600px] my-3 md:my-10 shadow-md rounded-full md:rounded-3xl">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-5 md:w-6 md:h-6 h-5" />
          <button
            className="bg-slate-900 px-0 py-0 rounded-full cursor-pointer"
            onClick={toggleMenu}
          >
            {openMenu ? (
              <IoMdClose
                size={22}
                className="text-slate-200"
                aria-hidden="true"
              />
            ) : (
              <HiMenuAlt4
                size={22}
                className="text-slate-200"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      <div className="">
        <div
          className={`bg-white/10 px-20 py-5 my-20 mx-24 md:mx-[300px] rounded-lg space-y-8 ${
            openMenu
              ? "block fixed bottom-0 md:bottom-0 right-O left-0"
              : "hidden "
          }`}
        >
          <a href="href">Accueil</a>
        </div>
      </div>
    </>
  );
}
