import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="bg-black pt-12">
        <div className="bg-white/5 py-10">
          <div className=""></div>

          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="100"
            className=" text-gray-300 text-xl text-center md:text-xl"
          >
            © RovertNet {new Date().getFullYear()}. tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
}
