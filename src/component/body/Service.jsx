import { SiGooglemarketingplatform } from "react-icons/si";

export default function Service() {
  return (
    <>
      <div className=" block pt-5 pb-10 bg-black">
        <div className="flex justify-center items-center gap-10">
          <div className="flex space-x-5 py-3 px-5 rounded-lg border-[1px] border-slate-200 bg-white/10">
            <SiGooglemarketingplatform className="text-3xl font-extrabold text-slate-300" />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-slate-200 text-2xl uppercase">Marketing digital</h3>
              <span className="font-medium text-base text-slate-400">La modernité dans vos boites et entréprise</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
