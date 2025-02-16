import React from "react";
import avatar from "../assets/c.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-10">
        
        {/* Left Column: Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-purple-500">Shape</span> Your Digital <br />
            Presence With <span className="text-purple-500">Aniruddha</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-xl lg:text-2xl">
            Elevate your ideas with cutting-edge web solutions. Let’s create
            something extraordinary together.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(128, 0, 255, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold"
            >
              Let’s Connect
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-4 py-2 rounded-full font-semibold"
            >
              Explore Work
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-xs lg:max-w-md mx-auto">
            <img
              src={avatar}
              alt="Aniruddha Das"
              className="w-full rounded-full shadow-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=""
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
