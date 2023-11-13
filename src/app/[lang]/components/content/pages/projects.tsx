"use client";

import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

interface ProjectsProps {
  lang: Locale;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const dict = getDictionaryUseClient(lang);

  return (
    <div className=" flex text-justify mt-44 mb-32 w-full items-center justify-center">
      <p className="text-xl text-gray-700">{dict.projects.empty}</p>
    </div>
  );
};

export default Projects;
