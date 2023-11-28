import Ikhsan from "../assets/ikhsan.jpg";
import SkillBox from "./extra/SkillBox";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProfilePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`w-screen h-screen bg-secondary-1 text-secondary-4 second-page`}>
      <div className={`flex flex-col w-full h-full justify-center items-center gap-2`}>
        <div className={`w-48 h-48 rounded-full relative overflow-hidden mb-3`}>
          <img className={`absolute top-[-40px]`} src={Ikhsan} />
        </div>
        <h1>Ikhsan Apriliano Hidayat</h1>
        <h2>Web Developer</h2>
        <div className={`grid grid-cols-3 text-center gap-3 text-sm`}>
          <SkillBox skill="MongoDB" />
          <SkillBox skill="ExpressJS" />
          <SkillBox skill="ReactJS" />
          <SkillBox skill="NodeJS" />
          <SkillBox skill="Redux" />
          <SkillBox skill="Javascript" />
          <SkillBox skill="PostgreSQL" />
          <SkillBox skill="Tailwind" />
          <SkillBox skill="Typescript" />
        </div>
        <Link to={`/`}>
          <XMarkIcon className="w-10 mt-2 rounded-full bg-secondary-3 p-1 hover:bg-secondary-2 cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
