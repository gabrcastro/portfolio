"use client"

import { Locale } from "@/config/i18n.config";
import EducationItem from "../components/education_item";
import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";

interface EducationProps {
    lang: Locale;
  }
  
  const Education: React.FC<EducationProps> = ({ lang }) => {

  const dict = getDictionaryUseClient(lang);

    return(
        <div className="flex flex-col  mt-20 items-start">


            <EducationItem 
                title={dict.education.last.title}
                type={dict.education.last.type}
                startYear="2022"
                endYear="2023"
            />

            <EducationItem 
                title={dict.education.second.title}
                type={dict.education.second.type}
                startYear="2021"
                endYear="2022"
            />


            <EducationItem 
                title={dict.education.first.title}
                type={dict.education.first.type}
                startYear="2017"
                endYear="2020"
            />

        </div>
    );
}

export default Education