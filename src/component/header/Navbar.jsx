
import { useState } from "react";
import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
      <div className="fixed bottom-0 md:bottom-0 left-0 right-0 bg-white/20 md:bg-white/20 px-5 py-2 md:px-5 md:py-2 mx-6 md:mx-96 my-5 md:my-5 shadow-md rounded-full md:rounded-3xl">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-9 md:w-10 md:h-10 h-9" />
          <button
            className="bg-slate-900 border-[1px] border-slate-300 px-2 py-2 rounded-full "
            onClick={toggleMenu}
          >
            <MdMenu size={22} className="text-slate-200" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={` space-y-4 mt-24 w-[400] rounded-br-md rounded-bl-md justify-center px-6 py-3 pb-5 mx-11 dark:bg-white/20 bg-slate-900/10 backdrop-blur-md ${
            isOpenMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          <Link to="/" className="">
            Accueil
          </Link>
        </div>
      </div>
    </>
  );
}
