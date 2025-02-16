import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';  // Import icons

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; 2024 Your Name. All Rights Reserved.</p>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

