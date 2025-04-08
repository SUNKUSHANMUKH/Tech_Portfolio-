import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2025"
          title="Full Stack Developer- Intern"
          subTitle="Coursevita."
          des="I had experienced and worked in the various projects of Coursevita as a full stack developer."
        />
        <ResumeCard
          badge="2024"
          title="Building Centle- Intern"
          subTitle="Centle."
          des="I was helping the Centle for building and helping them with the designs and making them to increase their business."
        />
        <ResumeCard
          badge="2023"
          title="Web developement- Intern"
          subTitle="Bharath intern and Codsoft"
          des="I was helping the Bharath intern and Codsoft for building and helping them with the designs and making them to increase their business."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2014"
          title="North South University"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="Programming Course"
          subTitle="UK"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2018 - 2021"
          title="MERN Stack Developer"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
    </div>
  );
};

export default Education;
