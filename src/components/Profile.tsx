import profilePhoto from "../assets/Foto Profile.jpg";
import ExpertiseCard from "./extra/ExpertiseCard";

function Profile() {
  return (
    <>
      <div className={`flex xs:flex-col sm:flex-row items-center xs:mx-4 lg:mx-0 xs:gap-2 lg:gap-10 sm:py-2 lg:py-5 sm:px-2 xs:p-5 lg:px-10 bg-primary-2 my-5 rounded-xl`}>
        <section className={`lg:w-28 lg:h-28 xs:w-20 xs:h-20 overflow-hidden rounded-full relative`}>
          <img src={profilePhoto} className={`absolute top-[-15px]`} alt="Prjoect" />
        </section>
        <section className={`border-l xs:pl-2 lg:px-10`}>
          <h1 className={`text-primary-4 lg:text-3xl`}>Ikhsan Apriliano Hidayat</h1>
          <p className={`text-gray-400 sm:text-sm lg:text-base`}>Web Developer</p>
        </section>
      </div>
      <div className={`text-primary-4 border-t border-gray-500`}>
        <p className={`p-10`}>Hello everyone! I am 21 years old located in Bandung. I love coding since I find it fun. These are my areas of expertise.</p>
        <div className={`grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 px-5 pb-10 border-b border-gray-500`}>
          <ExpertiseCard skill="MongoDB" />
          <ExpertiseCard skill="ExpressJS" />
          <ExpertiseCard skill="ReactJS" />
          <ExpertiseCard skill="NodeJS" />
          <ExpertiseCard skill="Redux" />
          <ExpertiseCard skill="Typescript" />
          <ExpertiseCard skill="PostgreSQL" />
          <ExpertiseCard skill="Tailwind" />
          <ExpertiseCard skill="Postman" />
          <ExpertiseCard skill="Github" />
          <ExpertiseCard skill="Java" />
          <ExpertiseCard skill="HTML" />
          <ExpertiseCard skill="CSS" />
          <ExpertiseCard skill="Javascript" />
        </div>
      </div>
    </>
  );
}

export default Profile;
