export default function Video() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg m-4 px-4 sm:px-0">
      <div className="text-3xl font-poppins text-center font-bold">
        Mira un video
      </div>
      <div className="mt-4 rounded-xl overflow-hidden aspect-video">
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
    </div>
  );
}
