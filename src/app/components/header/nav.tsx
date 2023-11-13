"use client";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  
  const pageAbout: string = "#about";
  const pageExperiences: string = "#experiences";
  const pageEducation: string = "#education";
  const pageProjects: string = "#projects";

  const [page, setPage] = useState(pageAbout)

  return (
    <div className="flex flex-col items-start justify-evenly w-[100%]">
      
      <a href={pageAbout} onClick={() => setPage(pageAbout)} className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageAbout && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start">
          <p>Sobre</p>
          {page == pageAbout && <div className="w-32 h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageExperiences} onClick={() => setPage(pageExperiences)} className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageExperiences && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start">
          <p>Experiência</p>
          {page == pageExperiences && <div className="w-32 h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageEducation} onClick={() => setPage(pageEducation)} className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageEducation && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start">
          <p>Educação</p>
          {page == pageEducation && <div className="w-32 h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageProjects} onClick={() => setPage(pageProjects)} className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageProjects && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start">
          <p>Projetos</p>
          {page == pageProjects && <div className="w-32 h-[1.5px] bg-slate-400"/>}
        </div>
      </a>
    </div>
  );
}
