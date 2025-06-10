import { Send } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      id="contact"
      className="text-center w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl block w-full text-center pb-10 pt-6"
        variants={itemVariants}
      >
        Contact Me
      </motion.h3>
      <motion.h4 className="text-sm p-4" variants={itemVariants}>
        Feel free to contact me directly through this form
      </motion.h4>
      <div className="w-full flex justify-center">
        <motion.form
          action=""
          method="POST"
          className="flex flex-col items-center text-sm w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-transparents"
          variants={formVariants}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="my-4 w-full rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30 transition-all duration-200 focus:border-black/50 focus:shadow-md"
            variants={inputVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="my-4 w-full rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30 transition-all duration-200 focus:border-black/50 focus:shadow-md"
            variants={inputVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            className="my-4 w-full min-h-32 rounded-md p-2 focus:outline-none bg-transparent shadow-sm border border-black/30 transition-all duration-200 focus:border-black/50 focus:shadow-md"
            variants={inputVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="flex py-2 px-4 m-2 text-black/60 rounded-full text-black transition-all duration-200 shadow-sm border border-black/30 hover:shadow-md"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send
            <Send size={20} className="px-1" />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
