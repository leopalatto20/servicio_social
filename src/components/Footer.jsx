import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white px-4 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold font-mplus">
            Puentes de Paz
          </h3>
          <p className="text-sm sm:text-base opacity-90">
            Construyendo un futuro más pacífico para El Salto, Jalisco
          </p>
          <div className="border-t border-blue-400 pt-4 mt-6">
            <p className="text-sm sm:text-base">
              Impulsando la cultura de paz &copy; 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
