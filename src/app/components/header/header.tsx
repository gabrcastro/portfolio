import Image from "next/image";
import Social from "../social/social";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full border-1 border-gray-400 mb-10"
        src="/me.png"
        alt="Me"
        width={200}
        height={200}
        style={{
          objectFit: 'contain',
        }} />

      <div className="flex flex-col">
        <p className="font-light text-sm text-gray-50 mb-3">
          Hey, I am</p>

        <h1 className="font-semibold text-5xl text-gray-50 mb-1">
          Gabriel Castro</h1>

        <p className="font-light text-lg text-gray-50">
          Front-End Developer</p>

        <div className="mt-10">
          <Nav />
        </div>
      </div>

      <div className="mt-10">
        <Social />
      </div>
    </div>
  )
}