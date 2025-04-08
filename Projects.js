import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Mittinrich"
            category="Robotics & IOT"
            image={workImgThree}
          />
          <ProjectsCard
            title="Text to speech convertor"
            category="Website & Machine Learning"
            image={workImgOne}
          />
          <ProjectsCard
            title="Fake product & Fake review detection"
            category="Website & Machine Learning"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Upakshya Viraha"
            category="Robotica and IOT"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Figma Designs"
            category="Design"
            image={workImgEight}
          />
          <ProjectsCard
            title="Canva Designs"
            category="Logo and Posters"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
