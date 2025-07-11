import { motion } from "framer-motion";

const organizations = [
  { name: "Tec de Monterrey", logo: "/tec.png" },
  { name: "Gobierno de El Salto", logo: "/gobierno.jpeg" },
  { name: "Seguridad", logo: "/seguridad.jpeg" },
];

export default function Orgs() {
  return (
    <section className="bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold text-center mb-8 sm:mb-12 font-mplus text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Organizaciones Involucradas
        </motion.h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 sm:gap-8 justify-items-center"
        >
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl
              transition-all duration-300 ease-in-out
              p-6 sm:p-8 flex flex-col items-center 
              justify-center w-full max-w-xs
              cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="max-h-full max-w-full object-contain
                  group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3
                className="text-sm sm:text-base font-semibold text-gray-700 
              text-center mt-4 group-hover:text-blue-600 
              transition-colors duration-300"
              >
                {org.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
