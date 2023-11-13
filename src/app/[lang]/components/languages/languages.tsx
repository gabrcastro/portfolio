"use client"

import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

interface LangProps {
    language: string;
  }  

export default function Languages(params: LangProps) {

    const dict = getDictionaryUseClient(params.language as Locale);

    return (
        <div className="flex flex-row gap-5 ml-10">
            <div className=" hover:opacity-50 hover:cursor-pointer">
                <span className="text-sm text-gray-500">{dict.header.en}</span>
            </div>
            <div className=" hover:opacity-50 hover:cursor-pointer">
                <span className="text-sm text-gray-200 font-semibold">{dict.header.pt}</span>
            </div>
        </div>
    );
}