import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/Navbar.css";
import Manos from "@/assets/manos.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Manos} alt="Manos" className="h-8 w-8" />
            <span className="text-xl sm:text-2xl font-poppins text-white">
              Puentes de paz
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#Home" className="navbar-text">
                Home
              </a>
              <a href="#About" className="navbar-text">
                Acerca de
              </a>
              <a href="#Principles" className="navbar-text">
                Principios
              </a>
              <a href="#Proyectos" className="navbar-text">
                Proyectos
              </a>
            </div>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 p-2"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 z-50 
              bg-blue-600 shadow-lg rounded-b-lg mx-4 mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { href: "#Home", text: "Home" },
                  { href: "#About", text: "Acerca de" },
                  { href: "#Principles", text: "Principios" },
                  { href: "#Proyectos", text: "Proyectos" },
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="navbar-text-mobile block"
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
