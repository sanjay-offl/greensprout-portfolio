import React from 'react';

const metrics = [
  { value: '40%', label: 'Resource Savings', desc: 'Water and energy conserved through IoT-driven precision management', icon: '💧' },
  { value: '60%', label: 'Cost Reduction', desc: 'Operational and fuel expenditure decrease vs traditional farming machinery', icon: '💰' },
  { value: '3×', label: 'Efficiency Boost', desc: 'Acceleration in seeding, weeding, and spraying task completion speed', icon: '⚡' },
  { value: '86M', label: 'Target Farmers', desc: 'Small-scale Indian farmers who can directly benefit from AGRISOLARBOT', icon: '👨‍🌾' },
];

export default function PerformancePage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">Data & Performance</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Validated results demonstrating exponential improvement over traditional agricultural techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {metrics.map((m) => (
          <div key={m.label} className="card-base hover:border-primary/30 hover:shadow-primary/10 text-center group flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              {m.icon}
            </div>
            <h2 className="text-5xl font-display font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{m.value}</h2>
            <h3 className="text-lg font-bold text-dark">{m.label}</h3>
            <p className="text-light text-sm leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel p-10 text-center">
        <h2 className="text-2xl font-display font-bold text-primary mb-4">Backed by TN-EDII</h2>
        <p className="text-dark/80 max-w-2xl mx-auto">
          GREENSPROUT has received ₹1,92,000 in confirmed government funding from the Tamil Nadu Entrepreneurship Development and Innovation Institute, validating our technology's real-world potential.
        </p>
      </div>
    </main>
  );
}
