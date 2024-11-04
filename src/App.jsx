import Herosection from "./component/body/Herosection";
import Navbar from "./component/header/Navbar"


function App() {

  return (
    <>
      <div className="bg-slate-950 h-screen">
        <Navbar />
        <Herosection />
      </div>
    </>
  );
}

export default App
