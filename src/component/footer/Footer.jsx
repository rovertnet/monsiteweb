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

          <span
            className=" text-gray-300 text-xl flex justify-center items-center md:text-xl"
          >
            © RovertNet {new Date().getFullYear()}. tous droits réservés
          </span>
        </div>
      </div>
    </>
  );
}
