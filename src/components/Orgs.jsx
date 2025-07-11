const organizations = [
  { name: "Tec de Monterrey", logo: "/tec.png" },
  { name: "Gobierno de El Salto", logo: "/gobierno.jpeg" },
  { name: "Seguridad", logo: "/seguridad.jpeg" },
];

export default function Orgs() {
  return (
    <section className="bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-bold text-center mb-8 sm:mb-12 font-mplus text-gray-800"
        >
          Organizaciones Involucradas
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 sm:gap-8 justify-items-center"
        >
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-2
              p-6 sm:p-8 flex flex-col items-center 
              justify-center w-full max-w-xs
              cursor-pointer group"
            >
              <div className="w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="max-h-full max-w-full object-contain
                  group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
