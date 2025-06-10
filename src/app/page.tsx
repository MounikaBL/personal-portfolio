"use client";
import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { Sora } from "next/font/google";

const sora = Sora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handlePopState = () => {
      const sectionId = window.location.hash.replace("#", "") || "home";
      setActiveSection(sectionId);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const sections = [
    {
      id: "home",
      component: <Home />,
      background:
        "bg-white/40 backdrop-blur-sm border-white/20 border-t border-b shadow-sm",
    },
    {
      id: "about",
      component: <About />,
      background:
        "bg-white/30 backdrop-blur-sm border-white/20 border-t border-b shadow-sm",
    },
    {
      id: "projects",
      component: <Projects />,
      background:
        "bg-white/50 backdrop-blur-sm border-white/20 border-t border-b shadow-sm",
    },
    {
      id: "skills",
      component: <Skills />,
      background:
        "bg-white/40 backdrop-blur-sm border-white/20 border-t border-b shadow-sm",
    },
    {
      id: "contact",
      component: <Contact />,
      background:
        "bg-white/60 backdrop-blur-sm border-white/20 border-t border-b shadow-sm",
    },
  ];

  return (
    <>
      {/* Floating background shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className={`main ${sora.className} text-gray-700`}>
        <Navbar activeSection={activeSection} />
        <div className="first:pt-0">
          {sections.map((section) => (
            <Section
              key={section.id}
              id={section.id}
              background={section.background}
              setActiveSection={setActiveSection}
            >
              {section.component}
            </Section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
