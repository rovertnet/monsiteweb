
import About from "./component/body/About";
import Contact from "./component/body/Contact";
import Herosection from "./component/body/Herosection";
import Progresse from "./component/body/Progresse";
import Project from "./component/body/Project";
import Service from "./component/body/Service";
import Skils from "./component/body/Skils";


function App() {

  return (
    <>
      <div className="bg-black h-screen md:h-screen">
        <Progresse />

        <Herosection />
        <About />
        <Service />
        <Skils />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App
