import Slider from "react-slick";


const temoignageData = [
  {
    id: 1,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    imgT: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
  {
    id: 2,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    imgT: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
  {
    id: 3,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    imgT: "../../assets/image/RP2.jpeg",
    deley: 0.5,
  },
  {
    id: 4,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    imgT: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
];

export default function Temoins() {

  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="block bg-black py-20">
        <h2 className="font-bold uppercase text-transparent text-center py-7 bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-10">
          Temoignages
        </h2>

        <div className="md:mx-40 mx-6">
          <Slider {...setting}>
            {
              temoignageData.map((item) => {
                <div key={item.id}>
                  <div>
                    <div className=" flex justify-between items-center gap-5" >
                      <img
                        src={item.imgT}
                        alt={item.imgT}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-xl text-slate-100">{item.name}</p>
                        <p className="">{item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>;
              })
            }
          </Slider>
        </div>
      </div>
    </>
  );
}
