import ProjectBox from "./extra/ProjectBox";
import EnglishBonfire from "../assets/english-bonfire.png";
import PersonalWebsite from "../assets/personal-website.png";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`min-h-screen bg-secondary-1 text-secondary-4 second-page flex justify-center items-center p-5`}>
      <div className={`flex flex-col gap-5 justify-center items-center w-[1240px]`}>
        <h1>Personal Projects</h1>
        <div className={`flex flex-col lg:flex-row justify-center items-center gap-10`}>
          <ProjectBox
            image={EnglishBonfire}
            title="English Bonfire"
            sub="Community To Speak English For 10 Minutes"
            fe={["React", "Tailwind", "Typescript", "Redux"]}
            be={["MongoDB", "Express", "Nodejs"]}
            preview="https://englishbonfire.netlify.app"
            github="https://github.com/ikhsanapriliano/english-bonfire-project"
          />
          <ProjectBox
            image={PersonalWebsite}
            title="Personal Website"
            sub="My Personal Website For Personal Branding"
            fe={["React", "Tailwind", "Typescript", "Redux"]}
            be={["-"]}
            preview="/"
            github="https://github.com/ikhsanapriliano/personal-website"
          />
        </div>
        <Link to={`/`}>
          <XMarkIcon className="w-10 rounded-full bg-secondary-3 p-1 hover:bg-secondary-2 cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
