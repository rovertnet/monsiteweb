
export default function Project() {
  return (
    <>
      <div className="block pt-10 pb-10 bg-black">
        <div className="mx-6 md:mx-36">
          <h2 className="font-bold uppercase text-transparent text-center py-7 bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-5">
            Mes Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-tl-md rounded-tr-md">
              <div className="bg-slate-700 rounded-md py-10 px-5"></div>
              <div className="flex justify-center items-center space-x-5">
                <h2 className="bg-slate-800 px-2 py-1 text-base font-medium"></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
