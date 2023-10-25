"use client";
import { motion } from "framer-motion";
import { Projects as ProjectsType } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: ProjectsType[];
};

const Projects = ({ projects }: Props) => {
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
      className=" h-100 md:h-screen relative flex overflow-hidden  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-0 md:pt-32 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className=" w-screen h-auto flex-shrink-0 snap-center flex flex-col space-y-0 md:space-y-5 items-center justify-center p-3 md:p-44 mb-3"
          >
            <Link href={project.linkToBuild} target="_blank">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                src={urlForImage(project?.image).url()}
                alt=""
                className="h-auto md:h-[300px]  rounded shadow-2xl pt-0 md:pt-5"
              />
            </Link>
            <div className=" space-y-2 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case of study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div>
                <h5 className="text-lg md:text-2xl font-semibold text-center pb-1 md:pb-2">
                  Technologies used:
                </h5>
                <div className="flex items-center justify-center space-x-2 ">
                  {project.technologies.map((tech, i) => (
                    <Image
                      key={i}
                      src={urlForImage(tech.image).url()}
                      width={50}
                      height={50}
                      alt=""
                      className="h-5 md:h-10 w-5 md:w-10"
                    />
                  ))}
                </div>
              </div>
              <p className=" text-xs md:text-lg text-center md:text-left px-2">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
