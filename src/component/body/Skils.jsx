import { FaHtml5 } from "react-icons/fa6";

export default function Skils() {
  return (
    <>
      <div className="block pt-10 pb-10 bg-black">
        <h2 className="font-bold uppercase text-transparent text-center py-7 bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-5">
          Education de ROBERT ROVERTNET
        </h2>

        <div className="md:mx-40 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
            <div className="bg-white/5 px-5 py-5 rounded-lg">
              <h2 className="font-semibold text-xl text-purple-600">
                Front-End
              </h2>

              <div className="flex justify-between items-center py-5">
                <p className="flex space-x-3">
                  <FaHtml5 className="text-5xl font-extrabold text-blue-600 pt-1" />
                  <span className="text-emerald-100 font-semibold text-lg"></span>
                </p>
                <span className="font-semibold text-lg text-emerald-100">
                  99.9%
                </span>
              </div>
            </div>
            <div className="bg-white/5 px-5 py-5 rounded-lg">
              <h2 className="font-semibold text-xl text-orange-600">
                Back-End
              </h2>

              <div className="flex justify-between items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
