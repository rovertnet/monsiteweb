import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";



export default function Skils() {
  return (
    <>
      <div className="block pt-10 bg-black">
        <h2 className="font-bold uppercase text-transparent text-center py-7 bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-5">
          Mes Compétences
        </h2>

        <div className="md:mx-40 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
            <div className="bg-white/5 px-7 py-5 rounded-lg">
              <h2 className="font-semibold text-xl text-center text-purple-600">
                Front-End
              </h2>

              <div className="py-7">
                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <FaHtml5 className="text-5xl font-extrabold text-orange-400 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      HTML
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    99.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <FaCss3 className="text-5xl font-extrabold text-blue-600 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      CSS (Tailwind)
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    95.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <FaReact className="text-5xl font-extrabold text-teal-300 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      React js
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    80.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <FaWordpress className="text-5xl font-extrabold text-blue-300 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      WordPress
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    70.9%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 px-7 py-5 rounded-lg">
              <h2 className="font-semibold text-xl text-center text-orange-600">
                Back-End
              </h2>

              <div className="py-7">
                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <FaLaravel className="text-5xl font-extrabold text-orange-600 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      PHP (Laravel)
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    78.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <SiExpress className="text-5xl font-extrabold text-blue-200 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg uppercase pt-3">
                      Node js (Express)
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    69.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <GrMysql className="text-5xl font-extrabold text-blue-400 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg capitalize pt-3">
                      MySQL
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    86.9%
                  </span>
                </div>

                <div className="flex justify-between items-center py-5">
                  <p className="flex space-x-3">
                    <SiMongodb className="text-5xl font-extrabold text-blue-600 pt-1" />
                    <span className="text-emerald-100 font-semibold text-lg capitalize pt-3">
                      MongoDB
                    </span>
                  </p>
                  <span className="font-semibold text-lg text-emerald-100">
                    99.9%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
