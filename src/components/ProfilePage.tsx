import Ikhsan from "../assets/ikhsan.jpg";
import SkillBox from "./extra/SkillBox";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProfilePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`w-screen min-h-screen bg-secondary-1 text-secondary-4 second-page flex justify-center items-center`}>
      <div className={`flex flex-col w-[1240px] h-full justify-center items-center gap-2 px-5 py-10`}>
        <div className={`xs:w-28 xs:h-28 sm:w-36 sm:h-36 rounded-full relative overflow-hidden mb-3`}>
          <img className={`absolute top-[-25px]`} src={Ikhsan} />
        </div>
        <h1>Ikhsan Apriliano Hidayat</h1>
        <h2>Web Developer</h2>
        <div className={`grid grid-cols-3 lg:grid-cols-4 text-center xs:gap-1 sm:gap-2 my-5`}>
          <SkillBox skill="MongoDB" />
          <SkillBox skill="ExpressJS" />
          <SkillBox skill="ReactJS" />
          <SkillBox skill="NodeJS" />
          <SkillBox skill="Redux" />
          <SkillBox skill="HTML" />
          <SkillBox skill="CSS" />
          <SkillBox skill="Javascript" />
          <SkillBox skill="Tailwind" />
          <SkillBox skill="Typescript" />
          <SkillBox skill="Postman" />
          <SkillBox skill="Github" />
        </div>
        <Link to={`/`}>
          <XMarkIcon className="w-10 mt-2 rounded-full bg-secondary-3 p-1 hover:bg-secondary-2 cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
