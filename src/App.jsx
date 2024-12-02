
import About from "./component/body/About";
import Herosection from "./component/body/Herosection";


function App() {

  return (
    <>
      <div className="bg-black h-screen md:h-screen flex justify-center items-center">
        <Herosection />
        <About />
      </div>
    </>
  );
}

export default App
