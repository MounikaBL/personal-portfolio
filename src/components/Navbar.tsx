import React from "react";
import NextLink from "next/link";
import { links } from "@/utils";
import { House, Users, Folder, Code, Send } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav>
      <ul className="rounded-full flex flex-col xs:flex-row xs:mr-4">
        {links.map((link) => {
          const icons = {
            House: (
              <House
                key="house"
                size="16"
                className="xs:w-[20px] xs:h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            ),
            Users: (
              <Users
                key="users"
                size="16"
                className="xs:w-[20px] xs:h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            ),
            Folder: (
              <Folder
                key="folder"
                size="16"
                className="xs:w-[20px] xs:h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            ),
            Code: (
              <Code
                key="code"
                size="16"
                className="xs:w-[20px] xs:h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            ),
            Send: (
              <Send
                key="send"
                size="16"
                className="xs:w-[20px] xs:h-[20px] lg:w-[24px] lg:h-[24px]"
              />
            ),
          };

          const Icon = icons[link.icon as keyof typeof icons];
          return (
            <NextLink href={`#${link.id}`} key={link.id + "_nav"}>
              <li
                key={link.id}
                className={`backdrop-blur-sm border rounded-full shadow-sm border-[#0000000d] w-[42px] h-[42px] p-[12px] xs:w-[48px] xs:h-[48px] xs:p-[14px] m-3 lg:w-[54px] lg:h-[54px] lg:p-[14px] ${
                  activeSection === link.id
                    ? `active scale-110 border-black/20 transition ${link.bg}`
                    : "bg-white/30"
                }`}
              >
                {Icon}
              </li>
            </NextLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
