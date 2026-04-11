import React from 'react';

const problems = [
  { icon: '👷', title: 'Labor Shortage', color: 'text-red-500', desc: 'India faces a critical shortage of agricultural workers. Aging farmer populations, rural-to-urban migration, and physical demands drive up labor costs and reduce farm productivity.' },
  { icon: '⛽', title: 'High Fuel Costs', color: 'text-orange-500', desc: 'Traditional diesel-powered machinery obliterates profit margins for small-scale farmers. Fuel price volatility makes seasonal planning nearly impossible.' },
  { icon: '💧', title: 'Inefficient Irrigation', color: 'text-blue-500', desc: 'Flood irrigation wastes up to 60% of water used. Without precision systems, overwatering and drought damage devastate crop yields across India.' },
  { icon: '⚙️', title: 'Lack of Automation', color: 'text-purple-500', desc: 'Less than 5% of Indian farms use any form of automation. Manual, repetitive processes limit scalability and trap farmers in a cycle of low output.' },
];

export default function ProblemPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <div className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-full border border-red-200 mb-6">
          ⚠️ The Challenge We're Solving
        </div>
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">Agricultural Crisis</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Traditional farming in India faces four critical challenges holding back a billion farmers from prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="card-base hover:border-primary/20 group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <div>
                <h3 className={`text-xl font-display font-bold mb-3 ${p.color}`}>{p.title}</h3>
                <p className="text-dark/70 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 glass-panel p-10 text-center">
        <h2 className="text-2xl font-display font-bold text-primary mb-4">The GREENSPROUT Answer</h2>
        <p className="text-dark/80 text-lg max-w-3xl mx-auto">
          AGRISOLARBOT directly addresses every one of these challenges with solar automation, IoT monitoring, and Bluetooth-controlled smart operation — built specifically for India's 86 million small farms.
        </p>
      </div>
    </main>
  );
}
