import { TypeAnimation } from "react-type-animation";
import Toggle from "./extra/Toggle";
import { useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import OldProfile from "../assets/profile-card.png";
import OldProjects from "../assets/projects-card.png";
import OldConnect from "../assets/connect-card.png";

function FirstPage() {
  const { isToggle } = useAppSelector((state) => state.toggle);
  const [isStart, setStart] = useState<boolean>(false);

  useEffect(() => {
    if (isToggle) {
      setTimeout(() => {
        setStart(true);
      }, 5000);
    }
  }, [isToggle]);

  return (
    <div className={`relative h-screen bg-primary-1`}>
      <div className={`flex flex-col justify-center items-center w-full h-full ${isStart ? `hidden` : `null`} ${isToggle ? `pt-10 opacity-0 duration-1000` : `null`}`}>
        <TypeAnimation sequence={["Welcome To My Website", 1000, "Toggle The Button To Start", 10000]} wrapper="span" speed={50} style={{ fontSize: "18px", display: "inline-block" }} repeat={Infinity} />
        <Toggle />
      </div>
      <div className={`flex flex-col gap-5 justify-center items-center w-full h-full`}>
        <h1>Please Select Your Card</h1>
        <div className={`flex gap-3`}>
          <img className={`w-56 rounded-xl`} src={OldProfile} />
          <img className={`w-56 rounded-xl`} src={OldProjects} />
          <img className={`w-56 rounded-xl`} src={OldConnect} />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
