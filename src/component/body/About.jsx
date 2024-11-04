import aboutimg from "../../assets/image/RP2.jpeg"


export default function About() {
  return (
    <>
      <div className="block">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:mx-36 mx-6">

          <div className="">
            
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
