import Image from "next/image";
import Skill from "./skill";
import { GithubIcon } from "lucide-react";

interface ProjectItemProps {
  title: string,
  skills: string[],
  description: string,
  link: string
}

export default function ProjectItem(params : ProjectItemProps) {
  return (
    <div className="flex flex-col w-full rounded-lg items-start justify-start mt-20">
      <div className="flex flex-col items-center w-full">   

        <div className="flex flex-col ml-5 items-center w-4/5">
          <div className="flex flex-row w-full justify-between items-start">
            <p className="mb-5 font-semibold">{params.title}</p>
            
            <a href={params.link} target="_blank" className="hover:opacity-60">
              <GithubIcon size={18} className="w-5 h-5 mt-1" />
            </a>
          </div>

          <Image
            src={'/vscode.png'}
            width={400}
            height={200}
            alt="VS Code"
            style={{ objectFit: "contain" }}
            className="rounded-md mb-5"
          />     
          
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {params.skills.map((skill, index) => (
              <Skill key={index} class="text-xs" name={skill} />
              ))}
          </div>
          
          <p className="text-sm text-justify">{params.description}</p>
        </div>
        
      </div>
    </div>
  );
}