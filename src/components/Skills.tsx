import { Skillset } from "@/utils";
import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="skills"
      className="flex flex-col items-center justify-center w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl block w-full text-center pb-10 pt-6"
        variants={titleVariants}
      >
        My Skills
      </motion.h3>
      <motion.div
        className="flex flex-wrap justify-center w-[80%] sm:w-[60%] md:w-[70%] lg:w-[50%]"
        variants={containerVariants}
      >
        {Skillset.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4"
            variants={skillVariants}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h5 className="text-sm text-black/60 font-regular p-2 rounded-full shadow-md border border-black/30 cursor-default">
              {skill}
            </motion.h5>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
