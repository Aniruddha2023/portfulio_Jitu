import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaDatabase, FaReact, FaBootstrap, FaGit } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiLaravel } from 'react-icons/si';
import { motion } from 'framer-motion';
import Work from './Work';

const Skills = () => {
  const skillsData = [
    { title: 'HTML5', icon: <FaHtml5 /> },
    { title: 'CSS3', icon: <FaCss3 /> },
    { title: 'JavaScript', icon: <FaJs /> },
    { title: 'PHP', icon: <FaPhp /> },
  ];

  const frameworks = [
    { title: 'React.js', icon: <FaReact /> },
    { title: 'Next.js', icon: <SiNextdotjs /> },
    { title: 'Laravel', icon: <SiLaravel /> },
    { title: 'Bootstrap', icon: <FaBootstrap /> },
    { title: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { title: 'Git', icon: <FaGit /> },
  ];

  const databases = [
    { title: 'MySQL', icon: <FaDatabase /> },
    { title: 'MongoDB', icon: <FaDatabase /> },
    { title: 'SQL', icon: <FaDatabase /> },
  ];

  return (
    <div id='skills' className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h1>

        {/* Programming Languages */}
        <h4 className="text-xl md:text-2xl mb-6">Programming Languages</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1a2b] rounded-lg shadow-lg p-4 text-center hover:shadow-purple-500/50 transition duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center items-center text-3xl mb-2 text-purple-500">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Frameworks */}
        <h4 className="text-xl md:text-2xl mb-6">Frameworks</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1a2b] rounded-lg shadow-lg p-4 text-center hover:shadow-purple-500/50 transition duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center items-center text-3xl mb-2 text-purple-500">
                {framework.icon}
              </div>
              <h3 className="text-lg font-semibold">{framework.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Database Query Languages */}
        <h4 className="text-xl md:text-2xl mb-6">Database Query Languages</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {databases.map((database, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1a2b] rounded-lg shadow-lg p-4 text-center hover:shadow-purple-500/50 transition duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center items-center text-3xl mb-2 text-purple-500">
                {database.icon}
              </div>
              <h3 className="text-lg font-semibold">{database.title}</h3>
            </motion.div>
          ))}
        </div>
        <div>
        <Work />
      </div> 
      </div>
    </div>
  );
};

export default Skills;

