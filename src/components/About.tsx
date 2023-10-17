"use client";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/89082504?s=400&u=56d3267e1ab53c1a8a020406d43fe3b47084dac2&v=4"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h95 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          With extensive experience as a PM in Tech, Marketing, and
          Communication projects, I took my first strides in a
          telecommunications multinational, where I honed my skills across
          various fields for nearly a decade. I&apos;m an experienced trainer in
          onboarding, customer service, complaint management, and system
          handling. I bring expertise in content creation, process analysis and
          improvement, marketing action planning, and team coordination. A
          natural-born photographer and techie, always on the move! 🚀
        </p>
      </div>
    </motion.div>
  );
};

export default About;
