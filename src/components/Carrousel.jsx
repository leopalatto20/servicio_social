import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    name: "Construye T",
    description:
      "Fortaleció habilidades socioemocionales en jóvenes, reduciendo casos de bullying en un 30% en escuelas públicas.",
    image: "/construyet.jpg",
    link: "https://www.gob.mx/sep/acciones-y-programas/programa-construye-t-4598",
  },
  {
    name: "Construyendo la paz con Lego",
    description:
      "Taller lúdico que promueve la reflexión sobre la cultura de paz en las escuelas de Guadalupe, Zacatecas, utilizando la metodología Lego Serious Play para fomentar el diálogo y la resolución de conflictos.",
    image: "/legos.jpg",
    link: "https://aipz.mx/2023/05/05/mediante-taller-de-legos-fomenta-ayuntamiento-de-guadalupe-cultura-de-paz/",
  },
  {
    name: "Sí al desarme, sí a la paz",
    description:
      "Programa nacional que intercambia armas de fuego y juguetes bélicos por dinero y juguetes educativos, promoviendo la construcción de paz y reduciendo la violencia en comunidades de México.",
    image: "/desarme.jpg",
    link: "https://gobierno.cdmx.gob.mx/acciones/si-al-desarme-si-a-la-paz/",
  },
];

export default function Carrousel() {
  return (
    <section className="bg-white px-4 py-12 sm:py-16 lg:py-20" id="Proyectos">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-bold text-center mb-8 sm:mb-12 font-mplus text-gray-800"
        >
          Proyectos Destacados
        </h2>

        {/* Indicador para hacer clic en las imágenes */}
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base text-gray-600 bg-blue-50 inline-block px-4 py-2 rounded-full border border-blue-200">
            💡 Haz clic en las imágenes para conocer más detalles de cada
            proyecto
          </p>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Pagination, Navigation]}
            className="pb-12"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <h3
                        className="text-xl sm:text-2xl lg:text-3xl font-bold 
                      mb-4 sm:mb-6 text-gray-800 font-mplus"
                      >
                        {project.name}
                      </h3>
                      <p
                        className="text-base sm:text-lg text-gray-600 
                      leading-relaxed font-lato"
                      >
                        {project.description}
                      </p>
                    </div>
                    <div className="relative h-64 sm:h-72 lg:h-80 group">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative cursor-pointer overflow-hidden rounded-r-2xl lg:rounded-r-2xl lg:rounded-l-none"
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
                        />
                        {/* Overlay sutil que solo aparece en hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Texto "Ver proyecto" que aparece en hover */}
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                            Ver proyecto
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </span>
                        </div>

                        {/* Indicador de click en la esquina */}
                        <div className="absolute top-3 right-3 bg-blue-500/80 backdrop-blur-sm text-white p-1.5 rounded-full shadow-lg opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 
            bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 z-10 hidden sm:block"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="custom-next absolute right-2 top-1/2 transform -translate-y-1/2 
            bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg 
            transition-all duration-300 z-10 hidden sm:block"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm sm:text-base text-gray-600">
            Desliza para ver más proyectos
          </p>
        </div>
      </div>

      <style jsx>{`
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 6px !important;
        }

        .custom-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.2) !important;
        }

        @media (max-width: 640px) {
          .custom-bullet {
            width: 10px !important;
            height: 10px !important;
            margin: 0 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
