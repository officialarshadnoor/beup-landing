import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer
      className={`bg-transparent py-6 px-4 md:px-0 ${
        scrollToTop ? 'border-animated' : 'border-transition'
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Company */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">About BeUp</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae arcu nec justo feugiat euismod.
            </p>
          </div>

          {/* Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-2">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-end">
            <a href="#" className="mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white pt-4 mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} beUp Brand. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
