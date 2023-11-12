import Nav from "../header/nav";
import About from "./pages/about";
import Education from "./pages/education";
import Experiences from "./pages/experiences";
import Projects from "./pages/projects";

export default function Content() {
  return(
    <div className="w-full h-full overflow-y-scroll flex flex-col px-20 pr-24">
      <div className="">
        <About />
      </div>
      <div className="">
        <Experiences />
      </div>
      <div className="">
        <Education />
      </div>
      <div className="">
        <Projects />
      </div>
    </div>
  );
}