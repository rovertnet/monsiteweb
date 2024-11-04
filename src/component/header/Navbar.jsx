import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";


export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-0 md:top-0 left-0 right-0 bg-slate-500/5 px-5 py-2 md:px-5 md:py-2 mx-20 md:mx-36 my-5 md:my-5 shadow-md rounded-full md:rounded-md">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-8 md:w-10 md:h-10 h-8" />
          <button className="bg-slate-900 border-[1px] border-slate-300 px-3 py-2 rounded-md ">
            <MdMenu size={22} className="text-slate-200" />
          </button>
        </div>
      </div>
    </>
  );
}
