import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    name: "Proyecto 1",
    description: "Ayudó a comunidades rurales con agua potable.",
    image: "/manos.png",
  },
  {
    name: "Proyecto 2",
    description: "Implementación de paneles solares en zonas vulnerables.",
    image: "/manos.png",
  },
];

export default function Carrousel() {
  return (
    <div className="bg-white w-full py-12" id="Proyectos">
      <h2 className="text-2xl font-bold text-center mb-6">
        Proyectos Destacados
      </h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
