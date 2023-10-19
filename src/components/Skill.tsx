"use client";
import { motion } from "framer-motion";
import { Imagen, SanitySkills } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  skill: SanitySkills;
  directionLeft?: boolean;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlForImage(skill.image).url()}
        alt=""
        className="rounded-full  border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out z-0 "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">
            ${skill.progress} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
