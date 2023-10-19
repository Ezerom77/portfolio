"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Eze.",
      "Project Manager.",
      "FullStack Developer.",
      "Photographer.",
      "and <Techie />.",
    ],
    loop: true,
    delaySpeed: 800,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        src={urlForImage(pageInfo?.heroImage).url()}
        alt="Picture of the author"
        width={128}
        height={128}
        className="relativ rounded-full mx-auto object-cover"
      />
      <div className=" z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className=" text-3xl lg:text-6xl font-semibold px-10">
          <span className=" mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className=" pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
