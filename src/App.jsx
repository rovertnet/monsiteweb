
import About from "./component/body/About";
import Herosection from "./component/body/Herosection";
import Project from "./component/body/Project";
import Service from "./component/body/Service";
import Skils from "./component/body/Skils";
import Temoins from "./component/body/Temoins";


function App() {

  return (
    <>
      <div className="bg-black h-screen md:h-screen">
        <Herosection />
        <About />
        <Service />
        <Skils />
        <Project />
        <Temoins />
      </div>
    </>
  );
}

export default App
