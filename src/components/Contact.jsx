import { motion } from "framer-motion";

export default function Contact() {
  const handleContactClick = () => {
    window.open(
      "https://sites.google.com/u/0/d/1kxjticDdr5bDMzVaxkO_ILN7azCfmQjp/p/1X7M2-_wMV4spnbZL8hWmRXaJg0E569Zy/preview?pli=1&authuser=0",
      "_blank",
    );
  };

  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-12 sm:py-16 lg:py-20"
      id="Contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-mplus text-gray-800">
            Contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto font-lato">
            ¿Tienes alguna duda o necesitas ayuda? Ingresa al siguiente link y
            busca lo que mejor se ajuste a tus necesidades.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 
            hover:from-blue-600 hover:to-purple-700 
            text-white font-bold py-4 px-8 sm:py-5 sm:px-12 
            rounded-2xl shadow-lg hover:shadow-xl 
            transition-all duration-300 ease-in-out
            text-lg sm:text-xl font-lato
            transform hover:scale-105 active:scale-95
            flex items-center gap-3"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📧</span>
            Abrir directorio de contacto
            <span className="text-sm opacity-80">↗</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
