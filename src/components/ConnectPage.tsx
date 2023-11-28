import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

function ConnectPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`min-h-screen bg-secondary-1 text-secondary-4 second-page flex justify-center items-center p-5`}>
      <div className={`flex flex-col gap-5 justify-center items-center w-[1240px]`}>
        <h1>Connect With Me</h1>
        <div className={`flex gap-2`}>
          <SocialIcon url="https://www.instagram.com/ikhsanapriliano2023/" />
          <SocialIcon url="https://www.linkedin.com/in/ikhsan-apriliano/" />
          <SocialIcon url="mailto:ikhsanapriliano4@gmail.com" />
        </div>
        <Link to={`/`}>
          <XMarkIcon className="w-10 rounded-full bg-secondary-3 p-1 hover:bg-secondary-2 cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ConnectPage;
