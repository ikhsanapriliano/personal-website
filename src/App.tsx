import backgound from "./assets/background-f.png";
import FirstPage from "./components/FirstPage";
import Gear from "./components/Gear";

function App() {
  return (
    <>
      <div className={`relative overflow-hidden text-primary-3`}>
        <FirstPage />
        <img src={backgound} className={`absolute top-0 left-0 right-0 h-full w-full`} />
        <Gear />
      </div>
    </>
  );
}

export default App;
