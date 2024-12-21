import Slider from "react-slick";


const temoignageData = [
  {
    id: 1,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    img: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
  {
    id: 1,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    img: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
  {
    id: 1,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    img: "../../assets/image/RP1.jpeg",
    deley: 0.5,
  },
  {
    id: 1,
    name: "Bestech consult",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vero ducimus mollitia recusandae in! Est sunt, natus eveniet ducimus distinctio ratione a quia suscipit tempora soluta accusantium fuga neque placeat?",
    img: "../../assets/image/RP1.jpeg",
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="block pt-10 bg-black">
        <h2 className="font-bold uppercase text-transparent text-center py-7 bg-clip-text bg-gradient-to-r from-purple-700 from-10% via-white via-30% to-orange-500 to-90% ... text-2xl md:text-text-3xl pt-3 pb-5">
          Temoignages
        </h2>

        <div className="md:mx-40 mx-6">
          <Slider {...setting}>

          </Slider>
        </div>
      </div>
    </>
  );
}
