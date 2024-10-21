"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    threshold: 0.5,
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
    <section
      id={"section-" + id}
      ref={ref}
      className={`${
        inView ? "in-view" : ""
      } px-[20px] pt-[50px] pb-[30px] align-middle flex items-center justify-center min-h-[70vh]`}
    >
      {children}
    </section>
  );
};

export default Section;
