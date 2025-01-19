import { SiGooglemarketingplatform } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbWorldBolt } from "react-icons/tb";
import {motion} from "framer-motion"
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Service() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className=" block pt-20 pb-10 bg-black">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="font-bold uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-10 pb-10"
        >
          Mes Services
        </h2>
        <div className="md:mx-40 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-white/5 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="flex space-x-5 ">
                <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-base uppercase">
                    Marketing digital
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-300 text-justify text-lg font-medium py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-white/5 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="450"
            >
              <div className="flex space-x-5 ">
                <FaCode className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-base uppercase">
                    Conception API
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-300 text-justify text-lg font-medium py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-white/5 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="650"
            >
              <div className="flex space-x-5 ">
                <TbWorldBolt className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-base uppercase">
                    Déveleppement Web
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-300 text-justify text-lg font-medium py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
