import { ProjectInfo } from "@/interface";
import { projectsData } from "@/utils";
import Image from "next/image";
import React from "react";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="w-[100%] flex flex-col items-center">
      <h3 className="text-3xl block w-full text-center pb-10 pt-6">My Works</h3>

      {projectsData.map((project: ProjectInfo) => (
        <div
          key={project.id}
          className={`group m-8 p-5 sm:p-0 sm:pr-8 sm:h-[20rem] max-w-[42rem] border border-black/10 
            rounded-lg shadow-md hover:scale-105 overflow-hidden transition`}
        >
          <div className="h-full flex items-center relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="absolute h-[12rem] w-[12rem] object-cover -left-4 hidden sm:block rounded-t-lg shadow-3xl transition  group-hover:scale-[1.04] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2"
              width={150}
              height={150}
            />
            <div className="flex flex-col gap-[20px] p-0 sm:pl-10 sm:ml-[12rem]">
              <h3 className="text-2xl block w-full">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <ul className="flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="text-[10px] font-regular my-2 mr-2 px-[8px] py-[2px] text-white bg-[#d4a373] rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 m-2 rounded-full border border-black text-white"
              >
                View Project
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
