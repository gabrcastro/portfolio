"use client";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { Source_Code_Pro } from "next/font/google";

import Content from "./components/content/content";
import Header from "./components/header/header";
import { getDictionaryUseClient } from "../dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <Provider store={store}>
    <div className="flex w-screen h-screen flex-row justify-between bg-gradient-to-bl from-[#18153d] from-5% via-[#030712] to-[#030712] to-50% bg-opacity-50 overflow-y-hidden">
      <div className="w-2/5">
        <Header params={{ lang: params.lang as "en-US" | "pt-BR" }} />
      </div>
      <div className="w-3/5">
        <Content language={params.lang} />
      </div>
    </div>
  </Provider>
    // <Provider store={store}>
    //   <main className={sourceCodePro.className}>
    //     <div className="flex w-screen h-screen flex-row justify-between bg-gradient-to-tr from-gray-950 from-60% to-indigo-950 via-30% bg-opacity-50 overflow-y-hidden">
    //       <div className="w-2/5">
    //         <Header params={{ lang: params.lang as "en-US" | "pt-BR" }} />
    //       </div>
    //       <div className="w-3/5">
    //         <Content language={params.lang}/>
    //       </div>
    //     </div>
    //   </main>
    // </Provider>
  );
}
