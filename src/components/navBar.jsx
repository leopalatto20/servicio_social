import React from "react";
import "@/styles/Navbar.css";
import Manos from "@/assets/manos.png";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={Manos} alt="Manos" className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">
              Puentes de paz
            </span>
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
