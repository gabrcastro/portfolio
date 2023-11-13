import Image from "next/image";
import Social from "../social/social";
import Nav from "./nav";
import Languages from "../languages/languages";

export default function Header() {
  return (
    <div className="w-full h-[100%] py-10 pl-24">
      <div className="flex flex-col justify-between h-full items-start">
       
        <div className="flex flex-col">
          <p className="font-light text-base text-gray-50 mb-3">Olá, eu sou</p>

          <h1 className="font-semibold text-5xl text-gray-50 mb-1">
            Gabriel Castro
          </h1>

          <p className="font-light text-xl text-gray-50">Front-End Developer</p>

        </div>

        <div className="mt-10">
          <Nav />
        </div>

        <div className="mt-10 flex flex-row items-center">
          <Social />
          <Languages />
        </div>
      </div>
    </div>
  );
}
