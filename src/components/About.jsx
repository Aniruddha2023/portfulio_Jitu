import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import avatar from "../assets/a.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="about" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white text-center"
        >
          ABOUT ME
        </motion.h2>
        {/* Content */}
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-gray-400 px-6 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
          >
            <p>
              Hello! I am <span className="text-purple-500 font-semibold">Aniruddha Das</span>, a
              passionate web developer with expertise in HTML, CSS, JavaScript, and PHP. I
              specialize in creating responsive, user-friendly websites and enjoy blending creativity
              with technical skills to bring ideas to life.
            </p>
          </motion.div>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:w-1/2 max-w-screen-lg flex justify-center"
          >
            <img
              className="rounded-lg shadow-lg w-3/4 sm:w-2/3 md:w-full max-w-md"
              src={avatar}
              alt="Aniruddha Das"
            />
          </motion.div>
        </div>
        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCard number="2+" label="Years of Experience" />
          <StatCard number="5+" label="Global Customers" />
          <StatCard number="10+" label="Projects Completed" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="bg-[#1c1a2b] rounded-lg shadow-lg p-6 hover:shadow-purple-500/50 transition duration-300 ease-in-out">
    <h3 className="text-4xl sm:text-5xl font-bold text-purple-500">{number}</h3>
    <p className="mt-4 text-gray-400 text-base sm:text-lg">{label}</p>
  </div>
);

export default About;