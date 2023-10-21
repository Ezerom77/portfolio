"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { SanitySkills } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  skills: SanitySkills[];
};
const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[1200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className=" absolute top-24 md:top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      {/* grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-5 */}
      {/* flex flex-wrap justify-center items-center h-60  */}
      <div className="grid grid-cols-4 gap-5 md:grid-cols-6 h-2/3">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
