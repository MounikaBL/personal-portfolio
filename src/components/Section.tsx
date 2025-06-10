"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  background?: string;
  setActiveSection: (id: string) => void;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  background,
  setActiveSection,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    console.log("inView", inView, id, typeof setActiveSection);
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      if (typeof setActiveSection === "function") {
        setActiveSection(id);
        window.history.pushState(null, "", `#${id}`);
      }
    }
  }, [inView, id, setActiveSection]);

  return (
    <motion.section
      id={"section-" + id}
      ref={ref}
      className={`${
        inView ? "in-view" : ""
      } ${background} px-[20px] pt-[50px] pb-[30px] align-middle flex items-center justify-center min-h-[70vh]`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
