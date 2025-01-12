

export default function Contact() {
  return (
    <>
      <div className=" bg-black">
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
          <div className="flex flex-row-reverse md:flex gap-6">
            <div className="bg-white/5 rounded-md px-7 py-7">
              <div className="flex space-x-2 py-5">
                <span className="text-xl font-bold text-slate-100">
                  +243 998724266
                </span>
              </div>
              <div className="flex space-x-2 pb-5">
                <span className="text-xl font-bold text-slate-100">
                  matundukabamba@gmail.com
                </span>
              </div>
              <div className="flex space-x-2 pb-5">
                <span className="text-xl font-bold text-slate-100">
                  +243 823444705
                </span>
              </div>
              <div className="flex space-x-2">
                <span className="text-xl font-bold text-slate-100">
                  Robert Matundu
                </span>
              </div>
            </div>

            <div className="">
              <form action="">
                <div className="flex flex-col md:flex-col gap-5">
                  <input type="text" className="px-3 py-2 outline-0 bg-black border-[1px] " placeholder="Nom complet" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
