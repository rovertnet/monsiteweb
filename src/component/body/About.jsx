import aboutimg from "../../assets/image/RP2.jpeg"


export default function About() {
  return (
    <>
      <div className="block">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:mx-36 mx-6">
          <div className=" flex flex-col">
            <h2 className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-5">
              ROBERT ROVERTNET
            </h2>
          </div>

          <img
            src={aboutimg}
            alt={aboutimg}
            className="md:w-4/6 rounded-md border-[7px] border-slate-300 w-40 h-40 object-cover"
          />
        </div>
      </div>
    </>
  );
}
