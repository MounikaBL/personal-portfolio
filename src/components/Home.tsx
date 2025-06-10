import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="home"
      className="mx-2 px-2 pt-[5px] xs:mx-8 xs:px-8 xs:pt-[20px] sm:mx-20 sm:px-10 sm:pt-[60px]"
      style={{ width: "calc(100vw - 40px)" }}
    >
      <motion.div
        className="flex flex-col text-left leading-loose"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-[14px] font-medium text-indigo-600"
          variants={itemVariants}
        >
          Hello! It&apos;s me
        </motion.div>
        <div className="hidden sm:flex sm:flex-col text-left leading-loose ">
          <div className="typewriter__container font-bold w-fit">
            <div className="typewriter one text-5xl text-gray-800 font-bold">
              Mounika Badadh
            </div>
          </div>
          <div className="typewriter__container w-fit">
            <div className="typewriter two text-2xl text-blue-700">
              I&apos;m a Frontend Developer
            </div>
          </div>
          <div className="typewriter__container w-fit">
            <div className="typewriter three text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left leading-loose sm:hidden">
          <div className="typewriter__container font-bold w-fit">
            <div className="typewriter one text-3xl sm:text-5xl text-gray-800 font-bold">
              Mounika
            </div>
          </div>
          <div className="typewriter__container w-fit">
            <div className="typewriter two text-xl sm:text-2xl text-blue-700">
              Frontend Developer
            </div>
          </div>
          <div className="typewriter__container w-fit">
            <div className="typewriter three text-sm sm:text-base text-gray-600">
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </div>
        <motion.div
          className="flex text-[12px] mt-10 items-center scale-75 sm:scale-100"
          variants={itemVariants}
        >
          <motion.button
            className="h-[45px] py-2 px-4 mr-2 rounded-xl transition-all duration-200 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl text-white"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <NextLink href={`#contact`} className="flex">
              <span className="text-base font-medium">Connect </span>
              <Mail className="ml-2" />
            </NextLink>
          </motion.button>
          <motion.div
            className="flex justify-center cursor-pointer items-center m-2 w-[45px] h-[45px] rounded-xl transition-all duration-200 bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 shadow-md border border-blue-200 hover:shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/mounika-badadh",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <Linkedin className="text-blue-700" />
          </motion.div>
          <motion.div
            className="flex justify-center cursor-pointer items-center m-2 w-[45px] h-[45px] rounded-xl transition-all duration-200 bg-gradient-to-r from-gray-100 to-slate-100 hover:from-gray-200 hover:to-slate-200 shadow-md border border-gray-200 hover:shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              window.open(
                "https://github.com/MounikaBL",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <Github className="text-gray-700" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
