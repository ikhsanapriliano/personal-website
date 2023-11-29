import { Link } from "react-router-dom";

type Project = {
  image: string;
  title: string;
  sub: string;
  fe: string[];
  be: string[];
  preview: string;
  github: string;
};

function ProjectBox(props: Project) {
  return (
    <div className={`lg:p-10 xs:p-5 bg-secondary-2 rounded-md flex flex-col lg:w-[450px]`}>
      <div className={`w-full mb-5 overflow-hidden`}>
        <Link to={props.preview}>
          <img className={`hover:scale-125 duration-500`} src={props.image} />
        </Link>
      </div>
      <p className={`font-medium text-lg`}>{props.title}</p>
      <p className={`text-sm mb-3`}>{props.sub}</p>
      <p className={`xs:text-sm md:text-base`}>{`FE: ${props.fe}`}</p>
      <p className={`xs:text-sm md:text-base`}>{`BE: ${props.be}`}</p>
      <div className={`flex justify-center items-center gap-2 text-sm mt-5`}>
        <Link className={`bg-secondary-3 py-1 px-3 rounded-md hover:bg-secondary-1`} to={props.preview}>
          Preview
        </Link>
        <Link className={`bg-secondary-3 py-1 px-3 rounded-md hover:bg-secondary-1`} to={props.github}>
          Source Code
        </Link>
      </div>
    </div>
  );
}

export default ProjectBox;
