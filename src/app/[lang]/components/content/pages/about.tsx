"use client";

import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

interface AboutProps {
  lang: Locale;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const dict = getDictionaryUseClient(lang);

  return <div className="flex text-justify mt-44">{dict.content.text}</div>;
};

export default About;