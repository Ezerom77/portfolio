"use client";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
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
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src={urlForImage(pageInfo?.profilePic).url()}
        className=" -mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
        md:rounded-lg md:w-64 md:h95 xl:w-[500px] xl:h-[600px]"
      />
      <div className=" space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className=" text-lg md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-xs md:text-base">{pageInfo?.backgroudInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
