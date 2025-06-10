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

  // Color variants for skill tags
  const getSkillColor = (index: number) => {
    const colors = [
      "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300 hover:from-blue-200 hover:to-blue-300",
      "bg-gradient-to-r from-green-100 to-emerald-200 text-emerald-800 border-emerald-300 hover:from-green-200 hover:to-emerald-300",
      "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300 hover:from-purple-200 hover:to-purple-300",
      "bg-gradient-to-r from-pink-100 to-rose-200 text-rose-800 border-rose-300 hover:from-pink-200 hover:to-rose-300",
      "bg-gradient-to-r from-yellow-100 to-amber-200 text-amber-800 border-amber-300 hover:from-yellow-200 hover:to-amber-300",
      "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 border-indigo-300 hover:from-indigo-200 hover:to-indigo-300",
    ];
    return colors[index % colors.length];
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
        className="text-3xl block w-full text-center pb-10 pt-6 text-gray-800 font-bold"
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
            <motion.h5
              className={`text-sm font-medium p-3 rounded-xl backdrop-blur-sm shadow-md border cursor-default transition-all duration-200 ${getSkillColor(
                index
              )}`}
            >
              {skill}
            </motion.h5>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
