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
    <section className="bg-gray-100 p-8" id="Principles">
      <h2 className="text-4xl font-bold text-center mb-6 font-mplus">
        Principios clave
      </h2>
      <div className="grid md:grid-cols-3 gap-4 text-center ">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-blue-400 p-6 rounded-lg shadow hover:bg-cyan-100 
            duration-300 hover:scale-110"
          >
            <h3 className="text-xl font-bold font-lato">{principle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
