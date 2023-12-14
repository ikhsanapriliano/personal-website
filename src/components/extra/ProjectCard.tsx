import MagnifyingGlassIcon from "@heroicons/react/20/solid/MagnifyingGlassIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

type Project = {
  image: string;
  title: string;
  description: string;
  tech: string;
  preview: string;
  code: string;
};

function ProjectCard(props: Project) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={`bg-primary-2 rounded-xl shadow-2xl overflow-hidden relative`}>
      <div className={`overflow-hidden xs:h-96 lg:h-72 w-full`}>
        <Link to={props.preview}>
          <img
            onMouseEnter={() => {
              setIsActive(true);
            }}
            onMouseOut={() => {
              setIsActive(false);
            }}
            src={props.image}
            className={`hover:scale-125 duration-300 cursor-pointer w-full`}
          />
        </Link>
      </div>
      <div className={`text-primary-4 p-5`}>
        <p className={`text-2xl`}>{props.title}</p>
        <p className={`text-sm`}>{props.description}</p>
        <p className={`mb-5 mt-2`}>Technology : {props.tech}</p>
        <div className={`flex gap-3`}>
          <Link to={props.preview} className={`bg-primary-3 py-1 px-3 rounded-md hover:bg-primary-1`}>
            Preview
          </Link>
          <Link to={props.code} className={`bg-primary-3 py-1 px-3 rounded-md hover:bg-primary-1`}>
            Source Code
          </Link>
        </div>
      </div>
      <div className={`w-24 absolute xs:top-[310px] lg:top-[250px] right-5 p-5 bg-primary-3 rounded-full opacity-0 ${isActive ? `opacity-100 lg:top-[230px] xs:top-[310px] duration-500` : `opacity-0 duration-500`}`}>
        <MagnifyingGlassIcon />
      </div>
    </div>
  );
}

export default ProjectCard;
