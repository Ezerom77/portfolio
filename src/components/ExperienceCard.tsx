import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const ExperienceCard = (props: Props) => {
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
        src="https://avatars.githubusercontent.com/u/89082504?s=400&u=56d3267e1ab53c1a8a020406d43fe3b47084dac2&v=4"
        alt=""
      />
      <div className=" px-0 md:px-10">
        <h4 className=" text-4xl font-light">Analist</h4>
        <p className=" font-bold text-2xl mt-1">Telefonica</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://avatars.githubusercontent.com/u/89082504?s=400&u=56d3267e1ab53c1a8a020406d43fe3b47084dac2&v=4"
            alt="Imagen de perfil de usuario"
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full"
          />
          <Image
            src="https://avatars.githubusercontent.com/u/89082504?s=400&u=56d3267e1ab53c1a8a020406d43fe3b47084dac2&v=4"
            alt="Imagen de perfil de usuario"
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full"
          />
          <Image
            src="https://avatars.githubusercontent.com/u/89082504?s=400&u=56d3267e1ab53c1a8a020406d43fe3b47084dac2&v=4"
            alt="Imagen de perfil de usuario"
            width={40}
            height={40}
            className=" w-10 h-10 rounded-full"
          />
          {/* technologies */}
          {/* technologies */}
          {/* technologies */}
        </div>
        <p className=" uppercase py-5 text-gray-300">Started work...-end...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
