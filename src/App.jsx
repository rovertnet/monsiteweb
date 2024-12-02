
import About from "./component/body/About";
import Herosection from "./component/body/Herosection";
import Service from "./component/body/Service";


function App() {

  return (
    <>
      <div className="bg-black h-screen md:h-screen">
        <Herosection />
        <About />
        <Service />
      </div>
    </>
  );
}

export default App
