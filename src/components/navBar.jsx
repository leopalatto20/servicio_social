import React, { useState } from "react";
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={Manos} alt="Manos" className="h-8 w-8" />
            <span className="text-xl sm:text-2xl font-poppins text-white">
              Puentes de paz
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
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
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-300 focus:outline-none focus:text-cyan-300 p-2"
              aria-label="Toggle menu"
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
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-600 rounded-lg mt-2">
              <a
                href="#Home"
                className="navbar-text-mobile block"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#About"
                className="navbar-text-mobile block"
                onClick={closeMenu}
              >
                Acerca de
              </a>
              <a
                href="#Principles"
                className="navbar-text-mobile block"
                onClick={closeMenu}
              >
                Principios
              </a>
              <a
                href="#Proyectos"
                className="navbar-text-mobile block"
                onClick={closeMenu}
              >
                Proyectos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
