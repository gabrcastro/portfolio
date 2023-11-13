import Nav from "../header/nav";
import About from "./pages/about";
import Education from "./pages/education";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";

export default function Content() {
  return(
    <div className="w-full h-full overflow-y-scroll scrollbar-hide flex flex-col px-20 pr-24">
      <div className="" id="about">
        <About />
      </div>
      <div className="" id="experiences">
        <Experiences />
      </div>
      <div className="" id="education">
        <Education />
      </div>
      <div className="" id="projects">
        <Projects />
      </div>
    </div>
  );
}