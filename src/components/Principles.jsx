export default function Principles() {
  const principles = [
    "Respeto por la vida",
    "No violencia",
    "Compartir con otros",
    "Escuchar para comprender",
    "Preservar el planeta",
    "Tolerancia y solidaridad",
  ];

  return (
    <section
      className="bg-gray-100 px-4 py-12 sm:py-16 lg:py-20"
      id="Principles"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-bold text-center mb-8 sm:mb-12 font-mplus text-gray-800"
        >
          Principios clave
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-4 sm:gap-6 lg:gap-8"
        >
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-400 to-blue-500 
              p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl
              hover:from-cyan-400 hover:to-cyan-500 
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1
              cursor-pointer group"
            >
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-bold 
              font-lato text-white text-center
              group-hover:scale-105 transition-transform duration-300"
              >
                {principle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
