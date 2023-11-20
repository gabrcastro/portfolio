"use client";

import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../redux/store'; 
import { getDictionaryUseClient } from '@/app/dictionaries/default-dictionary-use-client';
import { Locale } from '@/config/i18n.config';
import clsx from 'clsx';

interface NavProps {
  language: string;
}

type NavPropsItem = {
  id: string,
  text: string
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
  
  const dict = getDictionaryUseClient(language as Locale);
  
  const pageAbout: string = "#about";
  const pageExperiences: string = "#experiences";
  const pageEducation: string = "#education";
  const pageProjects: string = "#projects";

  const navItems: NavPropsItem[] = [
    { id: pageAbout, text: dict.header.about },
    { id: pageExperiences, text: dict.header.experiences },
    { id: pageEducation, text: dict.header.education },
    { id: pageProjects, text: dict.header.projects },
  ]


  return (
  
    <div className="flex flex-col items-start justify-evenly w-full">
    {navItems.map((item, index) => (
      <a key={index} href={item.id} onClick={() => setPage(item.id)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
        {page == item.id && <span className={clsx(page == item.id ? "font-semibold" : "font-normal text-gray-400", "mr-4 text-gray-200")}>&gt;_</span>}
        <p className={clsx(page == item.id ? "font-semibold" : "font-normal text-gray-400", "text-gray-200")}>{item.text}</p>
      </a>
    ))}
  </div>
  
  
    // <div className="flex flex-col items-start justify-evenly w-full">
      
    //   <a href={pageAbout} onClick={() => setPage(pageAbout)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
    //     {page == pageAbout && <span className="mr-4">&gt;_</span>}
    //     <div className="flex flex-col items-start w-full">
    //       <p>{dict.header.about}</p>
    //     </div>
    //   </a>

    //   <a href={pageExperiences} onClick={() => setPage(pageExperiences)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
    //     {page == pageExperiences && <span className="mr-4">&gt;_</span>}
    //     <div className="flex flex-col items-start w-full">
    //       <p>{dict.header.experiences}</p>
    //     </div>
    //   </a>

    //   <a href={pageEducation} onClick={() => setPage(pageEducation)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
    //     {page == pageEducation && <span className="mr-4">&gt;_</span>}
    //     <div className="flex flex-col items-start w-full">
    //       <p>{dict.header.education}</p>
    //     </div>
    //   </a>

    //   <a href={pageProjects} onClick={() => setPage(pageProjects)} className="flex flex-row w-full items-center mb-3 hover:cursor-pointer hover:opacity-75">
    //     {page == pageProjects && <span className="mr-4">&gt;_</span>}
    //     <div className="flex flex-col items-start w-full">
    //       <p>{dict.header.projects}</p>
    //     </div>
    //   </a>
    // </div>
  );
}

export default connector(Nav);