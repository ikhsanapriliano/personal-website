import { TypeAnimation } from "react-type-animation";
import Toggle from "./extra/Toggle";
import { useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import Old1 from "../assets/old-1.png";
import Old2 from "../assets/old-2.png";
import Old3 from "../assets/old-3.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import backgound from "../assets/background.png";
import Gear from "./Gear";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function FirstPage() {
  const { isToggle } = useAppSelector((state) => state.toggle);
  const [isStart, setStart] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const oldCard = [Old1, Old2, Old3];

  useEffect(() => {
    if (isToggle) {
      setTimeout(() => {
        setStart(true);
      }, 1000);
    }
  }, [isToggle]);

  function nextOld() {
    if (count < 2) {
      setCount((prev) => prev + 1);
    } else if (count === 2) {
      setCount(0);
    }
  }

  function prevOld() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else if (count === 0) {
      setCount(2);
    }
  }

  function linkHandle() {
    if (count === 0) {
      return `/profile`;
    } else if (count === 1) {
      return `/projects`;
    } else {
      return `/connect`;
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`relative overflow-hidden text-primary-3`}>
      <div className={`relative h-screen bg-primary-1`}>
        <div className={`flex flex-col justify-center items-center w-full h-full ${isStart ? `hidden` : `null`} ${isToggle ? `pt-10 opacity-0 duration-1000` : `null`}`}>
          <TypeAnimation sequence={["", 10000, "Welcome To My Website", 1000, "Toggle The Button To Start", 10000]} wrapper="span" speed={50} style={{ fontSize: "18px", display: "inline-block" }} repeat={Infinity} />
          <Toggle />
        </div>
        <div className={`flex flex-col opacity-0 gap-5 justify-center items-center w-full h-full ${isStart ? `pt-0 opacity-100 duration-1000` : `pt-10`}`}>
          <h1 className={`z-50`}>Please Select Your Card</h1>
          <div className={`flex gap-5 z-50`}>
            <Link className="hidden lg:inline-block" to={`/profile`}>
              <img className={`w-56 rounded-xl relative top-0 hover:top-[-20px] duration-300 cursor-pointer`} src={Old1} />
            </Link>
            <Link className="hidden lg:inline-block" to={`/projects`}>
              <img className={`w-56 rounded-xl relative top-0 hover:top-[-20px] duration-300 cursor-pointer`} src={Old2} />
            </Link>
            <Link className="hidden lg:inline-block" to={`/connect`}>
              <img className={`w-56 rounded-xl relative top-0 hover:top-[-20px] duration-300 cursor-pointer`} src={Old3} />
            </Link>
            <Link className={`lg:hidden`} to={linkHandle()}>
              <AnimatePresence initial={false} mode="wait">
                <motion.img key={count} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className={`w-56 rounded-xl flex cursor-pointer `} src={oldCard[count]} />
              </AnimatePresence>
            </Link>
          </div>
          <div className={`flex gap-10 z-50 lg:hidden`}>
            <ChevronLeftIcon
              onClick={() => {
                prevOld();
              }}
              className={`w-10 h-10 cursor-pointer bg-primary-2 rounded-full border shadow-sm`}
            />
            <ChevronRightIcon
              onClick={() => {
                nextOld();
              }}
              className={`w-10 h-10 cursor-pointer bg-primary-2 rounded-full border shadow-sm`}
            />
          </div>
        </div>
      </div>
      <img src={backgound} className={`absolute top-0 left-0 right-0 h-full w-full`} />
      <Gear />
    </motion.div>
  );
}

export default FirstPage;
