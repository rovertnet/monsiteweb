import aboutimg from "../../assets/image/RP2.jpeg"
import { FaDownload } from "react-icons/fa";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";


export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="block bg-black pt-20 pb-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-40 md:mx-40 mx-6">
            <div className="flex flex-col">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="100"
                className="font-bold uppercase text-center md:text-start text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-lg md:text-3xl pt-3 pb-5"
              >
                A propos de ROBERT ROVERTNET
              </h2>

              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="150"
                className="font-medium text-lg text-slate-300 py-3 text-justify md:max-w-xl"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eum rerum minus earum animi voluptatum deleniti laudantium ad
                officia alias? Magnam temporibus praesentium odio, laudantium
                alias cupiditate repudiandae reprehenderit cum!
              </p>

              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="font-medium text-lg text-slate-300 py-3 text-justify md:max-w-xl"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                eum rerum minus earum animi voluptatum deleniti laudantium ad
                officia alias? Magnam temporibus praesentium odio, laudantium
                alias cupiditate repudiandae reprehenderit cum!
              </p>

              <button
                data-aos="zoom-in-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="250"
                className="font-semibold text-xl px-5 py-2 mt-6 mb-6 rounded-md text-white bg-purple-600 hover:bg-purple-500 flex justify-between items-center"
              >
                Téléchargez mon CV
                <FaDownload />
              </button>
            </div>

            <img
              src={aboutimg}
              alt={aboutimg}
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="400"
              className="md:w-96 md:h-96 lg:w-96 lg:h-96 w-96 rounded-md border-[10px] border-slate-100  h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
