import React from "react";

export default function About() {
  return (
    <section className="p-8 bg-white" id="About">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/tec.png"
          alt="Cultura de Paz"
          className="w-full h-auto rounded-xl shadow"
        />

        <div>
          <h2 className="text-4xl font-poppins font-bold mb-6 text-center md:text-left">
            ¿Qué es la cultura de paz?
          </h2>
          <p className="text-justify md:text-left text-2xl font-lato">
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
