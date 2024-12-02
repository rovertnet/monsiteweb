
import About from "./component/body/About";
import Herosection from "./component/body/Herosection";
import Project from "./component/body/Project";


function App() {

  return (
    <>
      <div className="bg-black h-screen md:h-screen">
        <Herosection />
        <About />
        <Project />
      </div>
    </>
  );
}

export default App
