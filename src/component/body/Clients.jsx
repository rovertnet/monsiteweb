import { FaQuoteLeft } from "react-icons/fa";
import rp from "../../assets/image/RP1.jpeg";
import {motion} from "framer-motion"

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Clients() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className=" bg-black pt-10 pb-10 block">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14"
        >
          Clients
        </h2>

        <div className=" md:mx-40 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="bg-white/5 px-7 py-7 hover:border-[1px] hover:border-slate-400 rounded-md cursor-pointer"

            >
              <FaQuoteLeft className="text-purple-500 text-5xl text-center font-bold pb-3" />
              <p className="text-justify text-slate-100 font-medium pb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                deleniti veritatis, cum doloribus saepe ipsam sapiente ipsum a
                fugit eum earum quasi expedita quidem, modi, ratione quisquam.
                Ex, sint est.
              </p>
              <div className="flex justify-start items-start gap-3">
                <img src={rp} alt={rp} className="w-14 h-14 rounded-full" />
                <div className="flex flex-col py-2">
                  <h3 className="text-purple-600 font-bold text-lg">
                    Robert Matundu
                  </h3>
                  <span className="text-slate-300 text-xs font-medium">
                    CEO chez ROVERTNET
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="bg-white/5 px-7 py-7 hover:border-[1px] hover:border-slate-400 rounded-md cursor-pointer"
            >
              <FaQuoteLeft className="text-purple-500 text-5xl text-center font-bold pb-3" />
              <p className="text-justify text-slate-100 font-medium pb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                deleniti veritatis, cum doloribus saepe ipsam sapiente ipsum a
                fugit eum earum quasi expedita quidem, modi, ratione quisquam.
                Ex, sint est.
              </p>
              <div className="flex justify-start items-start gap-3">
                <img src={rp} alt={rp} className="w-14 h-14 rounded-full" />
                <div className="flex flex-col py-2">
                  <h3 className="text-purple-600 font-bold text-lg">
                    Robert Matundu
                  </h3>
                  <span className="text-slate-300 text-xs font-medium">
                    CEO chez ROVERTNET
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="bg-white/5 px-7 py-7 hover:border-[1px] hover:border-slate-400 rounded-md cursor-pointer"
            >
              <FaQuoteLeft className="text-purple-500 text-5xl text-center font-bold pb-3" />
              <p className="text-justify text-slate-100 font-medium pb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                deleniti veritatis, cum doloribus saepe ipsam sapiente ipsum a
                fugit eum earum quasi expedita quidem, modi, ratione quisquam.
                Ex, sint est.
              </p>
              <div className="flex justify-start items-start gap-3">
                <img src={rp} alt={rp} className="w-14 h-14 rounded-full" />
                <div className="flex flex-col py-2">
                  <h3 className="text-purple-600 font-bold text-lg">
                    Robert Matundu
                  </h3>
                  <span className="text-slate-300 text-xs font-medium">
                    CEO chez ROVERTNET
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
