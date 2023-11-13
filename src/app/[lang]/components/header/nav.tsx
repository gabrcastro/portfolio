"use client";

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../redux/store'; 
import { getDictionaryUseClient } from '@/app/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';

interface NavProps {
  language: string;
}

const mapState = (state: RootState) => ({
  page: state.page,
});

const mapDispatch = {
  setPage: (newPage: string) => ({ type: 'SET_PAGE', payload: newPage }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type NavCombinedProps = PropsFromRedux & NavProps;

const Nav: React.FC<NavCombinedProps> = ({page, setPage, language}) => {
  
  const pageAbout: string = "#about";
  const pageExperiences: string = "#experiences";
  const pageEducation: string = "#education";
  const pageProjects: string = "#projects";

  const dict = getDictionaryUseClient(language as Locale);

  return (
    <div className="flex flex-col items-start justify-evenly w-full">
      
      <a href={pageAbout} onClick={() => setPage(pageAbout)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageAbout && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start w-full">
          <p>{dict.header.about}</p>
          {page == pageAbout && <div className="w-full h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageExperiences} onClick={() => setPage(pageExperiences)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageExperiences && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start w-full">
          <p>{dict.header.experiences}</p>
          {page == pageExperiences && <div className="w-full h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageEducation} onClick={() => setPage(pageEducation)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageEducation && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start w-full">
          <p>{dict.header.education}</p>
          {page == pageEducation && <div className="w-full h-[1.5px] bg-slate-400"/>}
        </div>
      </a>

      <a href={pageProjects} onClick={() => setPage(pageProjects)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == pageProjects && <span className="mr-4">&gt;_</span>}
        <div className="flex flex-col items-start w-full">
          <p>{dict.header.projects}</p>
          {page == pageProjects && <div className="w-full h-[1.5px] bg-slate-400"/>}
        </div>
      </a>
    </div>
  );
}

export default connector(Nav);