import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="5 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="10 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="Innovativing Everytime" />
      <FunFactCard icon={<IoLogoYoutube />} des="Always Learning" />
    </div>
  );
};

export default FunFact;
