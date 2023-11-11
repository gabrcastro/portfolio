import {AiOutlineInstagram, AiOutlineYoutube, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Social() {
  return(
    <div className="flex flex-row justify-between items-center">
      <div className="">
        <AiOutlineInstagram className="w-8 h-8 mr-4 rounded-full hover:cursor-pointer hover:opacity-75"/>
      </div>
      <AiOutlineYoutube className="w-8 h-8 mr-4  rounded-full hover:cursor-pointer hover:opacity-75"/>
      <AiOutlineGithub className="w-8 h-8 mr-4 rounded-full hover:cursor-pointer hover:opacity-75"/>
      <AiOutlineLinkedin className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-75"/>
    </div>
  );
}