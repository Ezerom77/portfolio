"use client";
import { SanitySkills } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";

type Props = {
  skill: SanitySkills;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className=" group relative flex cursor-pointer">
      <Image
        width={200}
        height={200}
        src={urlForImage(skill.image).url()}
        alt=""
        className="rounded-full  border border-gray-500 object-cover w-10 h-10 md:w-24 md:h-24 filter group-hover:grayscale transition duration-200 ease-in-out z-0 "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white w-10 h-10 md:w-24 md:h-24 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className=" text-xs md:text-3xl font-bold text-black opacity-100">
            ${skill.progress} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
