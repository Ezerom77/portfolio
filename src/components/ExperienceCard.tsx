import { motion } from "framer-motion";
import Image from "next/image";
import { Experiences } from "../../typings";
import { urlForImage } from "../../sanity/lib/image";

type Props = {
  experience: Experiences;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px} xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className=" w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center"
        src={urlForImage(experience?.companyImage).url()}
        alt=""
      />
      <div className=" px-0 md:px-10">
        <h4 className=" text-4xl font-light">{experience?.jobTitle}</h4>
        <p className=" font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {/* //TODO: Add technologies to experience */}
          {experience?.technologies?.map((tech) => (
            <Image
              key={tech._id}
              src={urlForImage(tech.image).url()}
              alt={tech.title}
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className=" uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
