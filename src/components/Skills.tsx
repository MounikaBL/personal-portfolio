import { Skillset } from "@/utils";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-full"
    >
      <h3 className="text-3xl block w-full text-center pb-10 pt-6">
        My Skills
      </h3>
      <div className="flex flex-wrap justify-center w-[80%] sm:w-[60%] md:w-[70%] lg:w-[50%]">
        {Skillset.map((skill, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <h5 className="text-sm text-black/60 font-regular p-2 rounded-full shadow-md border border-black/30">
              {skill}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
