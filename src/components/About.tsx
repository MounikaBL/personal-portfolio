import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center w-90% md:w-[85%] lg:w-[70%] xl:w-[65%]"
    >
      <h3 className="text-3xl block w-full text-center pb-10 pt-6">About Me</h3>
      <div className="flex flex-col  items-center p-8 md:flex-row">
        <div className="flex-1 m-4 hidden md:block md:m-10">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div>
          <Image
            src="/home-page.png"
            alt="Me"
            className="object-cover m-4"
            width={250}
            height={250}
          />
        </div>
        <div className="flex-1 m-4 block  md:hidden">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
