import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleNavClick = (to) => {
    console.log(`Navigation clicked: ${to}`);
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenu(false);
  };

  const variants = {
    open: {
      clipPath: "circle(1200px at 100% 43px)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(25px at 100% 43px)",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Skills", to: "skills" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <nav className="sticky top-0 bg-[#0e0c1e] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Desktop Navbar */}
      
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">ANIRUDDHA</span>
          <span className="text-purple-500">DAS</span>
        </div>
        <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
          {items.map(({ id, text, to }) => (
            <li 
              key={id} 
              className="hover:text-purple-500 cursor-pointer"
              onClick={() => handleNavClick(to)}
            >
              {text}
            </li>
          ))}
        </ul>
        <a
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
          href="/path-to-cv.pdf"
          download
        >
          Download CV
        </a>
      </motion.div>



      {/* Mobile Menu Button */}
      
      <div className="flex md:hidden justify-between items-center px-4 py-6">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-white">ANIRUDDHA</span>
          <span className="text-purple-500">DAS</span>
        </div>
        <button
          onClick={toggleMenu}
          className="cursor-pointer z-20 relative"
          aria-expanded={menu}
          aria-label="Toggle menu"
        >
          {menu ? (
            <IoCloseSharp size={30} color="white" />
          ) : (
            <AiOutlineMenu size={30} color="white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={menu ? "open" : "closed"}
        variants={variants}
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 text-white flex flex-col justify-center items-center transition-all duration-300 ${
          menu ? "visible" : "invisible"
        }`}
      >
        <ul className="space-y-6 text-center text-lg sm:text-xl">
          {items.map(({ id, text, to }) => (
            <li
              key={id}
              className="hover:text-purple-500 cursor-pointer text-white"
              onClick={() => handleNavClick(to)}
            >
              {text}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-12">
          <a
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
            href="/path-to-cv.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;