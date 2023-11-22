import gearSpin from "./assets/gear-spin.gif";
import bg from "./assets/Untitled-5.png";
import backgound from "./assets/background.png";

function App() {
  return (
    <>
      <div className={`relative overflow-hidden`}>
        <div className={`relative h-screen bg-[#f2e0b0] overflow-hidden`}>
          <div className={`flex justify-center items-center w-full h-full`}>
            <p>website</p>
          </div>
          <img src={backgound} className={`absolute top-0 left-0 right-0 h-full w-full`} />
        </div>
        <div className={`relative h-screen`}>
          <img className={`bottom-0 left-0 right-0 absolute`} src={bg} />
        </div>
        <div className={`h-screen absolute  top-0 left-0 right-0`}>
          <img className={`absolute w-64 top-[-95px] right-[45px]`} src={gearSpin} />
          <img className={`absolute w-48 top-[35px] right-[20px]`} src={gearSpin} />
          <img className={`absolute top-[-170px] right-[-170px]`} src={gearSpin} />
          <img className={`absolute w-64 bottom-[-95px] left-[45px]`} src={gearSpin} />
          <img className={`absolute w-48 bottom-[35px] left-[20px]`} src={gearSpin} />
          <img className={`absolute bottom-[-170px] left-[-170px]`} src={gearSpin} />
          <img className={`absolute w-64 bottom-[-95px] right-[10px]`} src={gearSpin} />
          <img className={`absolute w-48 bottom-[35px] right-[20px]`} src={gearSpin} />
          <img className={`absolute bottom-[-170px] right-[-170px]`} src={gearSpin} />
        </div>
      </div>
      <div className={`bg-black text-white h-96 relative`}>
        <p>aku</p>
      </div>
    </>
  );
}

export default App;
