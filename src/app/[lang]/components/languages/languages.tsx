"use client";

import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import Link from "next/link";
import clsx from "clsx";

interface LangProps {
  language: string;
}

export default function Languages(params: LangProps) {

  const dict = getDictionaryUseClient(params.language as Locale);

  return (
    <div className="flex flex-row gap-5 ml-10">
      <Link href={`/${dict.site.en}/`}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", params.language == dict.site.en ? "text-gray-200 font-semibold" : "text-gray-500")}>{dict.header.en}</span>
      </Link>
      <Link href={`/${dict.site.pt}/`}
        className=" hover:opacity-50 hover:cursor-pointer"
      >
        <span className={clsx("text-sm", params.language == dict.site.pt ? "text-gray-200 font-semibold" : "text-gray-500")}>
          {dict.header.pt}
        </span>
      </Link>
    </div>
  );
}
