import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I am a full-stack web developer specializing in the MERN stack, building scalable and AI-driven web applications to solve real-world problems."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="I am a web designer passionate about creating visually appealing, user-friendly, and responsive designs that enhance digital experiences."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Entrepreneur"
        subTitle="I am an entrepreneur driven by innovation, building tech solutions that solve real-world problems and create a lasting impact."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Full-Stack Innovator"
        subTitle="Combining technology and creativity to develop next-gen web applications. I am a full-stack innovator with a passion for building and creating things."
      />
    </div>
  );
};

export default MyServices;
