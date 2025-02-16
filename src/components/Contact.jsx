import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    

    <div id="contact" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Section Heading */}
        <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
           CONTACT ME
        </motion.h2>
          
         
        
        <p className="mb-12 text-gray-400 text-lg md:text-xl">
          I’d love to hear from you! Feel free to reach out with any questions or opportunities.
        </p>

        {/* Contact Form and Details */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1c1a2b] p-8 rounded-lg shadow-lg flex-1 text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-4">
              Email: <span className="text-white">aniruddha@example.com</span>
            </p>
            <p className="text-gray-400 mb-4">
              Phone: <span className="text-white">+1 (123) 456-7890</span>
            </p>
            <p className="text-gray-400">
              Address: <span className="text-white">123 Street Name, City, Country</span>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1c1a2b] p-8 rounded-lg shadow-lg flex-1"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">
              Send a Message
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
