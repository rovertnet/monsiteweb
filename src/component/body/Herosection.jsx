import rp from "../../assets/image/RP1.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Herosection() {
  return (
    <>
      <div className="block">
        <div className="bg-black h-screen md:h-screen flex flex-col items-center justify-center ">
          <h1 className="font-extrabold text-6xl md:text-8xl uppercase  text-center text-transparent bg-clip-text bg-gradient-to-b from-orange-400 from-10% via-white via-30% to-purple-700 to-90% ...">
            Bonjour!
          </h1>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-xl md:text-text-3xl pt-3 pb-5 text-center">
            C'est Robert, Développeur Web!
          </span>
          <div className="bg-white/10 rounded-full p-5 py-5 w-52 h-52 flex items-center justify-center">
            <img
              src={rp}
              alt={rp}
              className="border-[7px] bg-clip-border bg-gradient-to-br from-purple-400 to-orange-400 rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div className="pt-10 grid grid-cols-2 md:grid-flow-row gap-3">
            <div className="py-3 px-3 rounded-full bg-white/20">
              <BsLinkedin className="text-white text-xl font-bold" />
            </div>
            <div className="py-3 px-3 rounded-full bg-white/20">
              <BsInstagram className="text-white text-xl font-bold" />
            </div>
            <div className="py-3 px-3 rounded-full bg-white/20">
              <FaSquareFacebook className="text-white text-xl font-bold" />
            </div>
            <div className="py-3 px-3 rounded-full bg-white/20">
              <FaTiktok className="text-white text-xl font-bold" />
            </div>
            <div className="py-3 px-3 rounded-full bg-white/20">
              <FaSquareXTwitter className="text-white text-xl font-bold" />
            </div>
            <div className="py-3 px-3 rounded-full bg-white/20">
              <FaGithub className="text-white text-xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
