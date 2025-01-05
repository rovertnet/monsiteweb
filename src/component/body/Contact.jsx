import aboutimg from "../../assets/image/RP2.jpeg";

export default function Contact() {
  return (
    <>
      <div className="block  bg-black">
        <div className="mx-6 md:mx-36 pt-10 pb-10 bg-white/5 rounded-lg">
          <h2 className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14">
            Contact
          </h2>

          <div className="flex justify-center items-center">
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-40 md:mx-40 mx-6">
              <div className="flex flex-col">
                <h2 className="font-bold uppercase text-center md:text-start text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-lg md:text-3xl pt-3 pb-5">
                  A propos de ROBERT ROVERTNET
                </h2>

                <p className="font-medium text-lg text-slate-300 py-3 text-justify md:max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat eum rerum minus earum animi voluptatum deleniti
                  laudantium ad officia alias? Magnam temporibus praesentium
                  odio, laudantium alias cupiditate repudiandae reprehenderit
                  cum!
                </p>

                <p className="font-medium text-lg text-slate-300 py-3 text-justify md:max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat eum rerum minus earum animi voluptatum deleniti
                  laudantium ad officia alias? Magnam temporibus praesentium
                  odio, laudantium alias cupiditate repudiandae reprehenderit
                  cum!
                </p>

                <button className="font-semibold text-xl px-5 py-2 mt-6 mb-6 rounded-md text-white bg-purple-600 hover:bg-purple-500 flex justify-between items-center">
                  Téléchargez mon CV
                </button>
              </div>

              <img
                src={aboutimg}
                alt={aboutimg}
                className="md:w-96 md:h-96 w-96 rounded-md border-[10px] border-slate-100  h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
