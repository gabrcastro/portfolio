import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Social() {

  const instagramLink = "https://www.instagram.com/ga.brielcastro/";
  const youtubeLink = "https://www.youtube.com/channel/UC4IeLLQt-MglrehgyEG9B6g";
  const githubLink = "https://github.com/gabrcastro";
  const linkedinLink = "https://www.linkedin.com/in/gabrielsouzacastro/";

  return(
    <div className="flex flex-row justify-between items-center">
      <a href={instagramLink} target="_blank">
        <Instagram size={20} className="w-8 h-8 mr-4 rounded-full hover:cursor-pointer hover:opacity-75"/>
      </a>
      
      <a href={youtubeLink} target="_blank">
        <Youtube size={20}  className="w-8 h-8 mr-4  rounded-full hover:cursor-pointer hover:opacity-75"/>
      </a>

      <a href={githubLink} target="_blank">
        <Github size={20}  className="w-8 h-8 mr-4 rounded-full hover:cursor-pointer hover:opacity-75"/>
      </a>
      
      <a href={linkedinLink} target="_blank">
        <Linkedin size={20}  className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-75"/>
      </a>
    </div>
  );
}