import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import project1 from "../assets/p1.png";
import project2 from "../assets/p2.png";
import project3 from "../assets/p3.png";

const projects = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "Project 1",
      description: "This is the description for project 1.",
      image: project1,
      link: "https://www.google.com",
    },
    {
      title: "Project 2",
      description: "This is the description for project 2.",
      image: project2,
      link: "https://www.google.com",
    },
    {
      title: "Project 3",
      description: "This is the description for project 3.",
      image: project3,
      link: "https://www.google.com",
    },
    {
      title: "Project 4",
      description: "This is the description for project 4.",
      image: project3,
      link: "https://www.google.com",
    },
    {
      title: "Project 5",
      description: "This is the description for project 5.",
      image: project2,
      link: "https://www.google.com",
    },
    {
      title: "Project 6",
      description: "This is the description for project 6.",
      image: project1,
      link: "https://www.google.com",
    },
  ];

  return (
    <div id="projects" className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          MY GIT PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 mb-12"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          nobis!
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Delays between the children animations
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#1c1a2b] rounded-lg shadow-lg hover:shadow-purple-500/50 transition duration-300 p-6"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-purple-500 mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default projects;
