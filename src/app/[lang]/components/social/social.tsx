import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Social() {

  const instagramLink = "https://www.instagram.com/ga.brielcastro/";
  const youtubeLink = "https://www.youtube.com/channel/UC4IeLLQt-MglrehgyEG9B6g";
  const githubLink = "https://github.com/gabrcastro";
  const linkedinLink = "https://www.linkedin.com/in/gabrielsouzacastro/";

  return(
    <div className="flex flex-row justify-between items-center">
      <a href={instagramLink} target="_blank">
        <Instagram size={15} className="w-6 h-6 mr-4 hover:cursor-pointer hover:opacity-50"/>
      </a>
      
      <a href={youtubeLink} target="_blank">
        <Youtube size={15}  className="w-6 h-6 mr-4  hover:cursor-pointer hover:opacity-50"/>
      </a>

      <a href={githubLink} target="_blank">
        <Github size={15}  className="w-6 h-6 mr-4 hover:cursor-pointer hover:opacity-50"/>
      </a>
      
      <a href={linkedinLink} target="_blank">
        <Linkedin size={15}  className="w-6 h-6 hover:cursor-pointer hover:opacity-50"/>
      </a>
    </div>
  );
}