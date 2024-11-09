
import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";


export default function Navbar() {

  const navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "skills", to: "/skills" },
    { name: "project", to: "/blog" },
  ];

  const showmenu = () =>{

  }

  return (
    <>
      <div className="fixed bottom-0 md:bottom-0 left-0 right-0 bg-white/20 md:bg-white/20 px-5 py-2 md:px-5 md:py-2 mx-6 md:mx-96 my-5 md:my-5 shadow-md rounded-full md:rounded-3xl">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-9 md:w-10 md:h-10 h-9" />
          <button className="bg-slate-900 border-[1px] border-slate-300 px-2 py-2 rounded-full " >
            <MdMenu size={22} className="text-slate-200" />
          </button>
        </div>
      </div>

      <div className="md:hidden">
        
      </div>
    </>
  );
}
