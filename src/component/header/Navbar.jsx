import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";


export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-slate-500/5 px-5 py-2 md:px-5 md:py-2 mx-36 md:mx-36 my-5 md:my shadow-md rounded-xl">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-10 h-10" />
          <MdMenu size={12} />
        </div>
      </div>
    </>
  );
}
