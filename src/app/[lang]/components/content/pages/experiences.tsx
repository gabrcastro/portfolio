"use client"

import { Locale } from "@/config/i18n.config";
import ExperienceItem from "../components/experience_item";
import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";

interface ExperiencesProps {
    lang: Locale;
  }

const Experiences: React.FC<ExperiencesProps> = ({ lang }) => {

    const dict = getDictionaryUseClient(lang)

    return (
       <div className="w-full h-full flex flex-col  mt-44 items-start overflow-y-auto">

            <ExperienceItem 
                company={dict.experiences.current.company}
                startYear={dict.experiences.current.startYear}
                endYear={dict.experiences.current.endYear}
                position={dict.experiences.current.position}
                description={dict.experiences.current.description}
                skills={dict.experiences.current.skills}
            />    

            <ExperienceItem 
                company={dict.experiences.first.company}
                startYear={dict.experiences.first.startYear}
                endYear={dict.experiences.first.endYear}
                position={dict.experiences.first.position}
                description={dict.experiences.first.description}
                skills={dict.experiences.first.skills}
            />   
            
       </div>
    );
}

export default Experiences