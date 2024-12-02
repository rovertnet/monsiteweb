import { SiGooglemarketingplatform } from "react-icons/si";

export default function Service() {
  return (
    <>
      <div className=" block pt-10 pb-10 bg-black">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... uppercase text-center pb-10">
          Mes Services
        </h1>
        <div className="md:mx-36 mx-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-6">
            <div className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-black">
              <div className="flex space-x-5 ">
                <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-lg uppercase">
                    Marketing digital
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-200 text-justify py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </div>

            <div className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-black">
              <div className="flex space-x-5 ">
                <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-lg uppercase">
                    Marketing digital
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-200 text-justify py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </div>

            <div className="py-5 px-5 rounded-lg border-[1px] border-slate-500 bg-black">
              <div className="flex space-x-5 ">
                <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300 pt-1" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-slate-200 text-lg uppercase">
                    Marketing digital
                  </h3>
                  <span className="font-medium text-sm text-slate-400">
                    La modernité dans vos boites et entréprise
                  </span>
                </div>
              </div>
              <div className="text-slate-200 text-justify py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                ullam autem fugit, assumenda ratione vero quos recusandae ea
                quo, incidunt voluptates vitae nihil in, non tenetur quia facere
                voluptate laboriosam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
