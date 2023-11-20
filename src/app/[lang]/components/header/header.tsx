"use client";

import Image from "next/image";
import Social from "../social/social";
import Nav from "./nav";
import Languages from "../languages/languages";
import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

export default function Header({params} : { params: { lang: Locale } }) {

  const dict = getDictionaryUseClient(params.lang);

  return (
    <div className="w-full h-[100%] py-10 pl-24">
      <div className="flex flex-col justify-between h-full items-start">
       
        <div className="flex flex-col">
          <p className="font-light text-base text-gray-50 mb-3">{dict.header.greetings}</p>

          <h1 className="font-semibold text-4xl text-gray-50 mb-1">
            {dict.site.name}
          </h1>

          <p className="font-light text-lg text-gray-50">{dict.header.position}</p>

        </div>

        <div className="mt-10 w-full">
          <Nav language={params.lang} />
        </div>

        <div className="mt-10 flex flex-row items-center">
          <Social />
          <Languages language={params.lang} />
        </div>
      </div>
    </div>
  );
}
