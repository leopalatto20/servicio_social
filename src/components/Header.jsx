import React from "react";

export default function Header() {
  return (
    <header
      className="bg-[url(/cultura_paz.png)] bg-cover bg-center 
      bg-no-repeat text-center p-12"
    >
      <h1 className="text-4xl font-bold bg-green-600/65 rounded-lg p-3">
        Impulsando la cultura de Paz
      </h1>
      <p className="text-xl mt-4 bg-green-600/65 rounded-lg p-3">
        Fomentando la cultura de paz en el municipio de El Salto, Jalisco.
      </p>
    </header>
  );
}
