import { Links } from "@/app/interface";
import { ProjectInfo } from "@/interface";

// #0fa3b1 0%,
//   #94d2bd 22%,
//   #ffcaad 49%,
//   #ffc8c7 75%,
//   #d4e09b 100%
export const links: Links[] = [
  {
    name: "Home",
    id: "home",
    href: "#home",
    icon: "House",
  },
  {
    name: "About",
    id: "about",
    href: "#about",
    icon: "Users",
  },
  {
    name: "Projects",
    id: "projects",
    href: "#projects",
    icon: "Folder",
  },
  {
    name: "Skills",
    id: "skills",
    href: "#skills",
    icon: "Code",
  },
  {
    name: "Contact",
    id: "contact",
    href: "#contact",
    icon: "Send",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    id: 1,
    title: "BHIM App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Redux", "HTML", "CSS", "JavaScript"],
    imageUrl: "/bhim-app.png",
    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "IA Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "MobX", "HTML", "CSS", "JavaScript"],
    imageUrl: "/ia-dashboard.png",
    link: "https://www.google.com",
  },
  {
    id: 3,
    title: "License Parser",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "MobX", "HTML", "CSS", "JavaScript", "Cypress"],
    imageUrl: "/license-parser.png",
    link: "https://www.google.com",
  },
  {
    id: 4,
    title: "ACAD Drawing Cleanup Utility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      "ElectronJS",
      "React",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "Playwright",
    ],
    imageUrl: "/dwg-cleanup.png",
    link: "https://www.google.com",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["NextJS", "HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: "/portfolio-app.png",
    link: "https://www.google.com",
  },
];

export const Skillset = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Redux Toolkit",
  "MobX",
  "ElectronJS",
  "Playwright",
  "Cypress",
];
