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

  // Color variants for different nav items
  const getNavColors = (linkId: string, isActive: boolean) => {
    const colors = {
      home: isActive
        ? "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-400 text-white shadow-lg"
        : "bg-white/70 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700",
      about: isActive
        ? "bg-gradient-to-r from-emerald-500 to-green-600 border-emerald-400 text-white shadow-lg"
        : "bg-white/70 border-emerald-200 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-green-100 hover:text-emerald-700",
      projects: isActive
        ? "bg-gradient-to-r from-purple-500 to-violet-600 border-purple-400 text-white shadow-lg"
        : "bg-white/70 border-purple-200 text-purple-600 hover:bg-gradient-to-r hover:from-purple-100 hover:to-violet-100 hover:text-purple-700",
      skills: isActive
        ? "bg-gradient-to-r from-amber-500 to-orange-600 border-amber-400 text-white shadow-lg"
        : "bg-white/70 border-amber-200 text-amber-600 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 hover:text-amber-700",
      contact: isActive
        ? "bg-gradient-to-r from-pink-500 to-rose-600 border-pink-400 text-white shadow-lg"
        : "bg-white/70 border-pink-200 text-pink-600 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 hover:text-pink-700",
    };
    return colors[linkId as keyof typeof colors] || colors.home;
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
          const isActive = activeSection === link.id;

          return (
            <NextLink href={`#${link.id}`} key={link.id + "_nav"}>
              <motion.li
                key={link.id}
                className={`backdrop-blur-md rounded-xl shadow-md w-[42px] h-[42px] p-[12px] xs:w-[48px] xs:h-[48px] xs:p-[14px] m-3 lg:w-[54px] lg:h-[54px] lg:p-[14px] cursor-pointer transition-all duration-300 border ${getNavColors(
                  link.id,
                  isActive
                )}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                animate={
                  isActive
                    ? {
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.3 },
                      }
                    : {
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      }
                }
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
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
