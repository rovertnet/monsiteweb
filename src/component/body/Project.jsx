import proimg1 from "../../assets/image/P1.jpg"
import proimg2 from "../../assets/image/P2.jpg"
import proimg3 from "../../assets/image/pro1.jpg"

import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Project() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="block  bg-black">
        <div className="mx-6 md:mx-36 pt-10 pb-14">
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="100"
            className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14"
          >
            Mes Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="bg-white/5 rounded-md"
            >
              <div className="">
                <img
                  src={proimg2}
                  alt={proimg2}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-between items-center pb-5 pt-10 px-3">
                <div className="flex space-x-2">
                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>
                </div>

                <button>
                  <FaExternalLinkAlt className="font-medium text-slate-300 text-sm" />
                </button>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="1000"
              className="bg-white/5 rounded-md"
            >
              <div className="">
                <img
                  src={proimg3}
                  alt={proimg3}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-between items-center pb-5 pt-10 px-3">
                <div className="flex space-x-2">
                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>
                </div>

                <button>
                  <FaExternalLinkAlt className="font-medium text-slate-300 text-sm" />
                </button>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="450"
              data-aos-easing="ease-in-sine"
              data-aos-delay="1100"
              className="bg-white/5 rounded-md"
            >
              <div className="">
                <img
                  src={proimg1}
                  alt={proimg1}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-between items-center pb-5 pt-10 px-3">
                <div className="flex space-x-2">
                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>

                  <h2 className="bg-black px-3 py-1 text-xs text-yellow-50 font-medium rounded-3xl">
                    React js
                  </h2>
                </div>

                <button>
                  <FaExternalLinkAlt className="font-medium text-slate-300 text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
