import { motion } from "framer-motion";

export default function Video() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-mplus text-center font-bold mb-8 sm:mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mira nuestro video
        </motion.h2>
        <motion.div
          className="bg-gray-50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-xl overflow-hidden aspect-video 
          shadow-inner"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/X30UDx-H4zE?si=De3FSOqSvSMMSTyi"
              title="Cultura de Paz - Video Informativo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
            Conoce más sobre nuestros proyectos de cultura de paz
          </p>
        </motion.div>
      </div>
    </section>
  );
}
