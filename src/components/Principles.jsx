import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Principles() {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  const principles = [
    {
      title: "Respeto por la vida",
      description:
        "Valoramos profundamente toda forma de vida, reconociendo la dignidad inherente de cada ser humano y la importancia de proteger y preservar la vida en todas sus manifestaciones.",
      details:
        "Este principio nos guía a tomar decisiones que honren la vida, promoviendo la paz, la salud y el bienestar de todos. Significa rechazar la violencia como medio de resolución de conflictos y trabajar activamente por crear un mundo donde cada vida sea valorada y protegida.",
      color: "from-blue-400 to-blue-500",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
    },
    {
      title: "No violencia",
      description:
        "Creemos firmemente en la resolución pacífica de conflictos, promoviendo el diálogo, la comprensión mutua y la búsqueda de soluciones constructivas sin recurrir a la agresión.",
      details:
        "La no violencia va más allá de la ausencia de agresión física; incluye el rechazo a la violencia emocional, psicológica y estructural. Promovemos la comunicación asertiva, la mediación y el entendimiento como herramientas para construir relaciones más sanas y sociedades más justas.",
      color: "from-green-400 to-green-500",
      hoverColor: "hover:from-green-500 hover:to-green-600",
    },
    {
      title: "Compartir con otros",
      description:
        "Fomentamos la generosidad, la solidaridad y la cooperación como pilares fundamentales para construir comunidades fuertes y resilientes donde todos puedan prosperar.",
      details:
        "Compartir significa más que dar recursos materiales; implica compartir conocimientos, experiencias, tiempo y apoyo emocional. Creemos que cuando compartimos, todos nos enriquecemos y creamos redes de apoyo mutuo que fortalecen el tejido social.",
      color: "from-purple-400 to-purple-500",
      hoverColor: "hover:from-purple-500 hover:to-purple-600",
    },
    {
      title: "Escuchar para comprender",
      description:
        "Practicamos la escucha activa y empática, buscando comprender genuinamente las perspectivas de otros antes de formar juicios o responder, creando espacios de diálogo auténtico.",
      details:
        "La verdadera escucha requiere humildad, paciencia y la disposición de ser transformados por lo que escuchamos. Significa poner a un lado nuestros prejuicios y estar completamente presentes para la otra persona, validando sus experiencias y emociones.",
      color: "from-amber-400 to-amber-500",
      hoverColor: "hover:from-amber-500 hover:to-amber-600",
    },
    {
      title: "Preservar el planeta",
      description:
        "Reconocemos nuestra responsabilidad como guardianes del medio ambiente, comprometiéndonos a proteger los ecosistemas y recursos naturales para las generaciones futuras.",
      details:
        "La preservación del planeta requiere cambios tanto individuales como colectivos en nuestros patrones de consumo, producción y estilo de vida. Promovemos prácticas sostenibles, la conservación de la biodiversidad y el desarrollo de tecnologías limpias que permitan la armonía entre el progreso humano y la salud ambiental.",
      color: "from-emerald-400 to-emerald-500",
      hoverColor: "hover:from-emerald-500 hover:to-emerald-600",
    },
    {
      title: "Tolerancia y solidaridad",
      description:
        "Celebramos la diversidad en todas sus formas, promoviendo la inclusión, el respeto por las diferencias y la construcción de puentes entre personas y comunidades diversas.",
      details:
        "La tolerancia no es simplemente soportar las diferencias, sino valorarlas como una fuente de enriquecimiento mutuo. La solidaridad nos impulsa a estar junto a quienes enfrentan injusticias o dificultades, trabajando juntos por un mundo más equitativo y justo para todos.",
      color: "from-rose-400 to-rose-500",
      hoverColor: "hover:from-rose-500 hover:to-rose-600",
    },
  ];

  const openModal = (principle) => {
    setSelectedPrinciple(principle);
  };

  const closeModal = () => {
    setSelectedPrinciple(null);
  };

  return (
    <>
      <section
        className="bg-gray-100 px-4 py-12 sm:py-16 lg:py-20"
        id="Principles"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold text-center mb-8 sm:mb-12 font-mplus text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Principios clave
          </motion.h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4 sm:gap-6 lg:gap-8"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${principle.color} 
                p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl
                ${principle.hoverColor} 
                transition-all duration-300 ease-in-out
                cursor-pointer group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(principle)}
              >
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold 
                font-lato text-white text-center
                group-hover:scale-105 transition-transform duration-300"
                >
                  {principle.title}
                </h3>
                <p className="text-white/90 text-sm mt-2 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Haz clic para más detalles
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPrinciple && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={`bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto 
              shadow-2xl relative`}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con gradiente */}
              <div
                className={`bg-gradient-to-r ${selectedPrinciple.color} p-6 sm:p-8 rounded-t-3xl relative`}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white 
                  transition-colors duration-200 p-2 hover:bg-white/20 rounded-full
                  text-2xl font-bold leading-none"
                >
                  ×
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-mplus pr-12">
                  {selectedPrinciple.title}
                </h2>
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 font-lato">
                    Descripción
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedPrinciple.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 font-lato">
                    Más detalles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedPrinciple.details}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50 rounded-b-3xl">
                <button
                  onClick={closeModal}
                  className={`w-full bg-gradient-to-r ${selectedPrinciple.color} 
                  text-white font-semibold py-3 px-6 rounded-xl 
                  hover:shadow-lg transition-all duration-300 
                  hover:scale-105 active:scale-95`}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
