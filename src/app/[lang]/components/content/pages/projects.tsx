"use client";

import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import ProjectItem from "../components/project_item";

interface ProjectsProps {
  lang: Locale;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const dict = getDictionaryUseClient(lang);

  const projects = Object.values(dict.projects);

  return (
    <div className="flex flex-col text-justify mt-14 mb-32 w-full items-center justify-center">
      <p>{projects.map((project, index) => (
        <ProjectItem 
          key={index}
          title={project.title}
          description={project.description}
          skills={project.skills}
          link={project.link}
        />
      ))}</p>
    </div>
  );
};

export default Projects;
