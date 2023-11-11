import Image from "next/image";
import Social from "../social/social";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="w-1/2 h-[100%]">
      <div className="flex flex-col justify-between h-full items-start">
        {/* <Image
          className="rounded-full border-1 border-gray-400 mb-10"
          src="/me.png"
          alt="Me"
          width={150}
          height={150}
          style={{
            objectFit: "contain",
          }}
        /> */}

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

        <div className="mt-10">
          <Social />
        </div>
      </div>
    </div>
  );
}
