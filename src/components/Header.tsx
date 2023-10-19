"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Socials } from "../../typings";

type Props = {
  socials: Socials[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className=" sticky  p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <SocialIcon
          url="#contact"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
