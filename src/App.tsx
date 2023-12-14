import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div className={`lg:w-[800px] xs:py-5 lg:py-0`}>
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
