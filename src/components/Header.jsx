import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header
      className="bg-[url(/cultura_paz.png)] bg-cover bg-center 
      bg-no-repeat text-center px-4 py-16 sm:py-20 lg:py-24 
      flex flex-col justify-center items-center min-h-[60vh] sm:min-h-[70vh]"
      id="Home"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
          bg-green-600/75 backdrop-blur-sm rounded-xl p-4 sm:p-6 
          font-mplus text-white shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Impulsando la cultura de Paz
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 
          bg-green-600/75 backdrop-blur-sm rounded-xl p-4 sm:p-6 
          text-white shadow-lg leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fomentando la cultura de paz en el municipio de El Salto, Jalisco.
        </motion.p>
      </div>
    </header>
  );
}
