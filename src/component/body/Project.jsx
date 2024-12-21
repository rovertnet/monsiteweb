import proimg1 from "../../assets/image/P1.jpg"
import proimg2 from "../../assets/image/P2.jpg"


export default function Project() {
  return (
    <>
      <div className="block  bg-black">
        <div className="mx-6 md:mx-36 pt-10 pb-14">
          <h2 className="font-bold uppercase text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-14">
            Mes Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white/10 rounded-md">
              <div className="">
                <img
                  src={proimg2}
                  alt={proimg2}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-start items-center space-x-5 pb-5 pt-10 px-3">
                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>
              </div>
            </div>

            <div className="bg-white/10 rounded-md">
              <div className="">
                <img
                  src={proimg1}
                  alt={proimg1}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-start items-center space-x-5 pb-5 pt-10 px-3">
                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>
              </div>
            </div>

            <div className="bg-white/10 rounded-md">
              <div className="">
                <img
                  src={proimg1}
                  alt={proimg1}
                  className="w-full h-36 md:h-48 object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="flex justify-start items-center space-x-5 pb-5 pt-10 px-3">
                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>

                <h2 className="bg-black px-3 py-1 text-base text-yellow-50 font-medium rounded-3xl">
                  React js
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
