import rp from "../../assets/image/RP1.jpeg";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";

import "aos/dist/aos.css";


import { useEffect } from "react";


export default function Herosection() {

  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      once:false,
    })
  }, [])

  return (
    <>
      <div className="block">
        <div className=" h-screen md:h-screen lg:h-screen flex flex-col items-center justify-center ">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="font-extrabold text-6xl md:text-8xl uppercase  text-center text-transparent bg-clip-text bg-gradient-to-b from-orange-400 from-10% via-white via-30% to-purple-700 to-90% ..."
          >
            Bonjour!
          </h1>
          <span
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-xl md:text-text-3xl pt-3 pb-5 text-center"
          >
            C'est Robert, Développeur Web!
          </span>
          <div
            data-aos="fade-up"
            className=" bg-white/10 rounded-full p-5 py-5 w-52 h-52 flex items-center justify-center"
          >
            <img
              src={rp}
              alt={rp}
              className="border-[7px] bg-clip-border bg-gradient-to-br from-purple-400 to-orange-400 rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div className="pt-10 grid grid-cols-3 md:grid-flow-col lg:grid-flow-col gap-3 z-10">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className=" box py-4 md:py-4 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <BsLinkedin className="text-white text-2xl md:text-2xl font-bold" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="py-4 md:py-4 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <BsInstagram className="text-white text-2xl md:text-2xl font-bold" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="py-4 md:py-4 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <FaSquareFacebook className="text-white text-2xl md:text-2xl font-bold" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="800"
              className="py-4 md:py-4 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <FaTiktok className="text-white text-2xl md:text-2xl font-bold" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="py-4 md:py-3 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <FaSquareXTwitter className="text-white text-2xl md:text-2xl font-bold" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1200"
              className="py-4 md:py-4 lg:py-4 px-4 md:px-4 lg:px-4 rounded-full bg-white/10 hover:-translate-y-3 hover:transition-all hover:duration-300 cursor-pointer"
            >
              <FaGithub className="text-white text-2xl md:text-2xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
