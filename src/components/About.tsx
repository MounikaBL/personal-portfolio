import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="about"
      className="flex flex-col items-center w-90% md:w-[85%] lg:w-[70%] xl:w-[65%]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl block w-full text-center pb-10 pt-6 text-gray-800 font-bold"
        variants={itemVariants}
      >
        About Me
      </motion.h3>
      <div className="flex flex-col  items-center p-8 md:flex-row">
        <motion.div
          className="flex-1 m-4 hidden md:block md:m-10"
          variants={itemVariants}
        >
          <p className="mb-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </motion.div>
        <motion.div variants={imageVariants} className="relative">
          <div className="absolute inset-0 bg-slate-100/60 backdrop-blur-sm rounded-full border border-slate-200"></div>
          <Image
            src="/home-page.png"
            alt="Me"
            className="object-cover m-4 rounded-full relative z-10"
            width={250}
            height={250}
          />
        </motion.div>
        <motion.div
          className="flex-1 m-4 block  md:hidden"
          variants={itemVariants}
        >
          <p className="mb-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
