import { FaQuoteLeft } from "react-icons/fa";

export default function Clients() {
  return (
    <>
      <div className=" bg-black pt-10 pb-10 block">
        <h2 className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14">
          Clients
        </h2>

        <div className=" md:mx-40 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 gap-10">
            <div className="bg-white/5 px-7 py-7">
              <FaQuoteLeft className="text-purple-500 text-2xl text-center font-bold" />
              <p className="text-justify text-slate-100 font-medium"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
