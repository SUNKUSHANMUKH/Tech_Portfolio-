import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { shannuImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={shannuImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Sunku Shanmukh</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <a 
             href="https://github.com/SUNKUSHANMUKH" 
             target="_blank" 
             rel="noopener noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            </a>

            <a 
             href="https://www.linkedin.com/in/sunku-giridhar-shanmukh-67514324a/" 
             target="_blank" 
             rel="noopener noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            </a>

            <a 
             href="https://www.youtube.com/@sunkushanmukh774" 
             target="_blank" 
             rel="noopener noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
            <SiYoutubemusic />
            </span>
            </a>

            

            <a 
             href="https://www.instagram.com/sunku_shanmukh/" 
             target="_blank" 
             rel="noopener noreferrer"
            >
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            </a>


          </div>
        </div>
        <div className="flex h-14 justify-center">
  <a
    href={"https://drive.google.com/file/d/1hbjoXxPrgh_QnwjsqjfIpruxbpKTFXHx/view?usp=sharing"}
    target="_blank"
    className="w-1/2 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300"
    rel="noreferrer"
  >
    <button className="w-full h-full flex justify-center items-center gap-2">
      Download Resume <BsCloudLightningFill />
    </button>
  </a>
</div>

      </div>
    </div>
  );
};

export default Left;
