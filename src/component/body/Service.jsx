import { SiGooglemarketingplatform } from "react-icons/si";

export default function Service() {
  return (
    <>
      <div className=" block pt-5 pb-10 bg-black">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ullam autem fugit, assumenda ratione vero quos recusandae ea quo, incidunt voluptates vitae nihil in, non tenetur quia facere voluptate laboriosam.
              </div>
            </div>

            <div className="flex space-x-5 py-3 px-5 rounded-lg border-[1px] border-slate-500 bg-black">
              <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-200 text-lg uppercase">
                  Marketing digital
                </h3>
                <span className="font-medium text-sm text-slate-400">
                  La modernité dans vos boites et entréprise
                </span>
              </div>
            </div>

            <div className="flex space-x-5 py-3 px-5 rounded-lg border-[1px] border-slate-500 bg-black">
              <SiGooglemarketingplatform className="text-5xl font-extrabold text-slate-300" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-slate-200 text-lg uppercase">
                  Marketing digital
                </h3>
                <span className="font-medium text-sm text-slate-400">
                  La modernité dans vos boites et entréprise
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
