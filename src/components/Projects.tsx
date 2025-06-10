import { ProjectInfo } from "@/interface";
import { projectsData } from "@/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      x: 12,
      y: 12,
      rotate: 3,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="projects"
      className="w-[100%] flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-3xl block w-full text-center pb-10 pt-6"
        variants={cardVariants}
      >
        My Works
      </motion.h3>

      {projectsData.map((project: ProjectInfo, index) => (
        <motion.div
          key={project.id}
          className={`group m-8 p-5 sm:p-0 sm:pr-8 sm:h-[20rem] max-w-[42rem] border border-black/10 
            rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl`}
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          <div className="h-full flex items-center relative">
            <motion.div variants={imageVariants} whileHover="hover">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="absolute h-[12rem] w-[12rem] object-cover -left-4 hidden sm:block rounded-t-lg shadow-3xl transition-all duration-300"
                width={150}
                height={150}
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-[20px] p-0 sm:pl-10 sm:ml-[12rem]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl block w-full">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <motion.ul
                className="flex flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.li
                    key={tagIndex}
                    className="text-[10px] font-regular my-2 mr-2 px-[8px] py-[2px] text-white bg-[#d4a373] rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.6 + tagIndex * 0.05,
                      duration: 0.3,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.li>
                ))}
              </motion.ul>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 m-2 rounded-full border border-black text-white"
              >
                View Project
              </a> */}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
