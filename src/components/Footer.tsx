import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className={`pt-10 pb-5 flex flex-col gap-5 xs:mx-4 lg:mx-0`}>
      <section className={`flex gap-5 justify-center`}>
        <SocialIcon url="https://www.instagram.com/ikhsanapriliano2023/" style={{ height: "35px", width: "35px" }} />
        <SocialIcon url="https://www.linkedin.com/in/ikhsan-apriliano/" style={{ height: "35px", width: "35px" }} />
        <SocialIcon url="mailto:ikhsanapriliano4@gmail.com" style={{ height: "35px", width: "35px" }} />
      </section>
      <section className={`text-white bg-primary-2 py-5 px-3 text-center rounded-xl mt-5 xs:text-xs lg:text-base`}>
        <p>Copyright © 2023 Ikhsan Apriliano Hidayat</p>
      </section>
    </div>
  );
}

export default Footer;
