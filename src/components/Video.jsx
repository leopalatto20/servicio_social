export default function Video() {
  // TODO: agregar texto de contexto al video y bordes
  return (
    <div className="w-full max-w-2xl aspect-video mx-auto rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/X30UDx-H4zE?si=De3FSOqSvSMMSTyi"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
