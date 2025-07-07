import React from "react";
import "@/styles/Navbar.css";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">Peace</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="navbar-text">
                Home
              </a>
              <a href="#" className="navbar-text">
                About
              </a>
              <a href="#" className="navbar-text">
                Principles
              </a>
              <a href="#" className="navbar-text">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
