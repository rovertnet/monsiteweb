import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";



export default function Contact() {
  return (
    <>
      <div className=" bg-black py-12">
        <h2
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="100"
          className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14"
        >
          Contact
        </h2>

        <div className="md:mx-40 mx-6">
          <div className="flex gap-40">
            <div className="bg-white/5 rounded-md px-7 py-7">
              <div className="flex space-x-2 py-5">
                <FaPhoneAlt className="text-2xl font-bold text-slate-100" />
                <span className="text-lg font-bold text-slate-300">
                  +243 998724266
                </span>
              </div>
              <div className="flex space-x-2 pb-5">
                <IoMail className="text-2xl font-bold text-slate-100" />
                <span className="text-lg font-bold text-slate-300">
                  matundukabamba@gmail.com
                </span>
              </div>
              <div className="flex space-x-2 pb-5">
                <BsWhatsapp className="text-2xl font-bold text-green-500" />
                <span className="text-lg font-bold text-slate-300">
                  +243 823444705
                </span>
              </div>
              <div className="flex space-x-2">
                <FaLinkedin className="text-2xl font-bold text-blue-900" />
                <span className="text-lg font-bold text-slate-300">
                  Robert Matundu
                </span>
              </div>
            </div>

            <div className=" w-full">
              <form action="#">
                <div className="flex flex-col md:flex-col gap-5">
                  <input
                    type="text"
                    className="px-3 py-2 outline outline-1 focus:outline-0 bg-slate-900 hover:border-[1px] hover:border-slate-400 rounded-md w-full"
                    placeholder="Nom complet"
                  />
                  <input
                    type="mail"
                    className="px-3 py-2 outline outline-1 focus:outline-0 bg-slate-900 hover:border-[1px] hover:border-slate-400 rounded-md w-full"
                    placeholder="Votre mail"
                  />
                  <input
                    type="text"
                    className="px-3 py-2 outline outline-1 focus:outline-0 bg-slate-900 hover:border-[1px] hover:border-slate-400 rounded-md w-full"
                    placeholder="Sujet de votre message"
                  />
                  <textarea
                    name=""
                    id=""
                    className="px-3 py-2 outline outline-1 focus:outline-0 bg-slate-900 hover:border-[1px] hover:border-slate-400 rounded-md w-full"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
