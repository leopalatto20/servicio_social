export default function Video() {
  return (
    <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-mplus text-center font-bold mb-8 sm:mb-12 text-gray-800"
        >
          Mira un video
        </h2>
        <div className="bg-gray-50 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
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
        </div>
      </div>
    </section>
  );
}
