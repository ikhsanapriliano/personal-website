import ProjectCard from "./extra/ProjectCard";
import personalWebsite from "../assets/personal-website.png";
import personalWebsiteM from "../assets/personal-website-mobile.png";
import englishBonfire from "../assets/english-bonfire.png";
import englishBonfireM from "../assets/english-bonfire-mobile.png";
import { ReactElement } from "react";
import { useState } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";

function Projects() {
  const [getProject, setProject] = useState<number>(0);
  const [getDirection, setDirection] = useState<string>("");

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  function upArrow() {
    setDirection("up");
    if (getProject == myProjects.length - 1) {
      setProject(0);
    } else {
      setProject((prev) => prev + 1);
    }
  }

  function downArrow() {
    setDirection("down");
    if (getProject == 0) {
      setProject(myProjects.length - 1);
    } else {
      setProject((prev) => prev - 1);
    }
  }

  function showProject(index: number) {
    return myProjects[index];
  }

  const myProjects: ReactElement[] = [
    <motion.div
      key={0}
      initial={getDirection == "up" ? { opacity: 0, y: 100 } : { opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={getDirection == "up" ? { opacity: 0, y: -100 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectCard
        image={screenWidth < 1024 ? personalWebsiteM : personalWebsite}
        title="Personal Website"
        description="My personal website for personal branding."
        tech="React, Typescript, Tailwind."
        preview="https://ikhsanapriliano.netlify.app"
        code="https://github.com/ikhsanapriliano/personal-website"
      />
    </motion.div>,
    <motion.div
      key={1}
      initial={getDirection == "up" ? { opacity: 0, y: 100 } : { opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={getDirection == "up" ? { opacity: 0, y: -100 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectCard
        image={screenWidth < 1024 ? englishBonfireM : englishBonfire}
        title="English Bonfire"
        description="A community to speak english for 10 minutes."
        tech="React, Typescript, Tailwind, Express, MongoDB."
        preview="https://englishbonfire.netlify.app"
        code="https://github.com/ikhsanapriliano/english-bonfire-project"
      />
    </motion.div>,
  ];

  return (
    <div className={`py-5 flex flex-col gap-5 border-b border-gray-500 xs:m-7 lg:m-0`}>
      <h2 className={`text-primary-4`}>My Projects</h2>
      <div className={`flex xs:flex-col lg:flex-row`}>
        <AnimatePresence initial={false} mode="wait">
          {showProject(getProject)}
        </AnimatePresence>
        <div className={`m-auto sm:mt-5 lg:mt-auto`}>
          <button className={`lg:w-20 xs:w-14 cursor-default`}>
            <ArrowUpCircleIcon
              onClick={() => {
                downArrow();
              }}
              className={`cursor-pointer hover:text-zinc-900 duration-500`}
            />
          </button>
          <button className={`lg:w-20 xs:w-14 cursor-default`}>
            <ArrowDownCircleIcon
              onClick={() => {
                upArrow();
              }}
              className={`cursor-pointer hover:text-zinc-900 duration-500`}
            />
          </button>
        </div>
      </div>
      <div className={`flex gap-2 m-auto`}>
        <button
          onClick={() => {
            setProject(0);
          }}
          className={`w-5 h-5 rounded-full ${getProject == 0 ? `bg-black` : `bg-primary-2`}`}
        ></button>
        <button
          onClick={() => {
            setProject(1);
          }}
          className={`w-5 h-5 rounded-full ${getProject == 1 ? `bg-black` : `bg-primary-2`}`}
        ></button>
      </div>
    </div>
  );
}

export default Projects;
