import { motion } from "framer-motion";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaGit, FaGithub, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostman, SiMysql } from "react-icons/si";

const Work = () => {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-500" /> },
    { name: "NextJS", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  ];

  const backend = [
    { name: "Git", icon: <FaGit className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  ];

  const languages = [...frontend, ...backend];

  const scrollVariants1 = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      },
    },
  };

  const scrollVariants2 = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        },
      },
    },
  };

  return (
    <div className="text-white py-16">
      <div className="container mx-auto text-center">
        {/* Scrolling Container 1 */}
        <div className="overflow-hidden relative w-full mb-6">
          <motion.div
            className="whitespace-nowrap flex space-x-10"
            variants={scrollVariants1}
            animate="animate"
          >
            {languages.map((language, index) => (
              <div
               className="flex items-center text-sm bg-gray-800 px-6 py-2 rounded-full inline-block space-x-3"
                key={`scroll1-${index}`}
              >
                {language.icon}
                <span>{language.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling Container 2 */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="whitespace-nowrap flex space-x-10"
            variants={scrollVariants2}
            animate="animate"
          >
            {languages.map((language, index) => (
              <div
                className="flex items-center text-sm bg-gray-800 px-6 py-2 rounded-full inline-block space-x-3"
                key={`scroll2-${index}`}
              >
                {language.icon}
                <span>{language.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
