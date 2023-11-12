import Nav from "../header/nav";
import About from "./about";
import Experiences from "./experiences";
import Projects from "./projects";

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
        <Projects />
      </div>
    </div>
  );
}