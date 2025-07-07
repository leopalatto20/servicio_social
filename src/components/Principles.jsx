import React from "react";

export default function Principles() {
  const principles = [
    "Respect for all life",
    "Non-violence",
    "Sharing with others",
    "Listening to understand",
    "Preserving the planet",
    "Tolerance and solidarity",
  ];

  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Core Principles</h2>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        {principles.map((principle, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{principle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
