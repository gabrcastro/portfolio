"use client";

import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../redux/store";

import React, { useRef } from "react";
import Nav from "../header/nav";
import About from "./pages/about";
import Education from "./pages/education";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";
import { getDictionaryUseClient } from "@/app/dictionaries/default-dictionary-use-client";
import { Locale } from "@/config/i18n.config";
import "./animation.css";

interface ContentProps {
  language: Locale;
}

type PageNav = {
  pageId: string,
  page: React.ReactNode
}

const mapState = (state: RootState) => ({
  page: state.page,
});

const mapDispatch = {
  setPage: (newPage: string) => ({ type: "SET_PAGE", payload: newPage }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CombinedProps = PropsFromRedux & ContentProps;

const Content: React.FC<CombinedProps> = ({ page, language }) => {

  const pageNavList: PageNav[] = [
    { pageId: "#about", page: <About lang={language} /> },
    { pageId: "#experiences", page: <Experiences lang={language} /> },
    { pageId: "#education", page: <Education lang={language} /> },
    { pageId: "#projects", page: <Projects lang={language} /> },
  ];

  return (
    <div className="box flex items-center justify-center w-[90%] h-[90%] my-10 mr-20 overflow-hidden no-scrollbar ">
      <div className="content w-[99.8%] h-[99.7%] overflow-y-auto flex flex-col pl-20 pr-20 scrollbar-hide" >
        {pageNavList.map((pageNav, index) => (
          page == pageNav.pageId && (
            <div key={index}>
              {pageNav.page}
            </div>
          )
        ))}
      </div>
    </div>
    
    // <div className="w-[90%] h-[90%] overflow-y-auto scrollbar-hide  flex flex-col pl-20 pr-20 my-10 mr-20 border border-slate-400">
    //   {page == "#about" && (
    //     <div className="" id="about">
    //       <About lang={language} />
    //     </div>
    //   )}

    //   {page == "#experiences" && (
    //     <div className="" id="experiences">
    //       <Experiences lang={language} />
    //     </div>
    //   )}

    //   {page == "#education" && (
    //     <div className="" id="education">
    //       <Education lang={language}/>
    //     </div>
    //   )}

    //   {page == "#projects" && (
    //     <div className="" id="projects">
    //       <Projects lang={language}/>
    //     </div>
    //   )}
    // </div>
  );
};

export default connector(Content);
