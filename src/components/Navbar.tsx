import React from "react";
import NextLink from "next/link";
import { links } from "@/utils";
import { House, Users, Folder, Code, Send } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible">
      <motion.ul className="rounded-full flex flex-col xs:flex-row xs:mr-4">
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
              <motion.li
                key={link.id}
                className={`backdrop-blur-sm border rounded-full shadow-sm border-[#0000000d] w-[42px] h-[42px] p-[12px] xs:w-[48px] xs:h-[48px] xs:p-[14px] m-3 lg:w-[54px] lg:h-[54px] lg:p-[14px] cursor-pointer ${
                  activeSection === link.id
                    ? `active border-black/20 ${link.bg}`
                    : "bg-white/30"
                }`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                animate={
                  activeSection === link.id
                    ? {
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }
                    : {
                        scale: 1,
                        transition: { duration: 0.3 },
                      }
                }
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  {Icon}
                </motion.div>
              </motion.li>
            </NextLink>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
