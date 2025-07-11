import React from "react";

export default function About() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20" id="About">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-mplus font-bold text-center mb-8 sm:mb-12 
        text-gray-800 leading-tight"
        >
          ¿Qué es la cultura de paz?
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <p
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl 
          font-lato leading-relaxed sm:leading-loose text-gray-700"
          >
            La cultura de paz se refiere a un conjunto de valores, actitudes y
            comportamientos que promueven la resolución pacífica de conflictos,
            la convivencia armónica y el respeto por los derechos humanos. En un
            mundo donde la violencia y la intolerancia parecen ser cada vez más
            comunes, es fundamental entender y fomentar este concepto. Pero,
            ¿qué implica realmente este enfoque? En términos simples, se trata
            de construir una sociedad donde se priorice el diálogo, la empatía y
            la cooperación sobre la agresión y el enfrentamiento.
          </p>
        </div>
      </div>
    </section>
  );
}
