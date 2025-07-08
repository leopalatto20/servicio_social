const organizations = [
  { name: "Tec de Monterrey", logo: "/tec.png" },
  { name: "Tec de Monterrey", logo: "/tec.png" },
  { name: "Tec de Monterrey", logo: "/tec.png" },
];

export default function Orgs() {
  return (
    <div className="bg-gray-100 w-fill">
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <h2 className="text-2xl font-bold text-center mb-6">
          Organizaciones Involucradas
        </h2>
        <div
          className="grid gap-4 justify-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            maxWidth: "100%",
          }}
        >
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow transition transform 
            hover:scale-105 hover:shadow-lg p-4 flex flex-col items-center 
            justify-center"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-24 w-full object-contain"
              />
              <p className="mt-2 text-center text-sm font-medium">{org.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
