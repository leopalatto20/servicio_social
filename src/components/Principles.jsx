import { motion } from "framer-motion";

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
              className="bg-gradient-to-br from-blue-400 to-blue-500 
              p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl
              hover:from-cyan-400 hover:to-cyan-500 
              transition-all duration-300 ease-in-out
              cursor-pointer group"
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
            >
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-bold 
              font-lato text-white text-center
              group-hover:scale-105 transition-transform duration-300"
              >
                {principle}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
