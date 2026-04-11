import React from 'react';

export default function MarketPage() {
  const stats = [
    { value: '146M+', label: 'Active Farms in India', icon: '🏡' },
    { value: '86%', label: 'Small-Scale Farmers', icon: '👨‍🌾' },
    { value: '$480B', label: 'Indian Agri Market Size', icon: '📈' },
    { value: '7%', label: 'Annual Market Growth', icon: '🚀' },
  ];

  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">Market Potential</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          India's agriculture sector represents one of the largest untapped automation opportunities on the planet.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="card-base hover:border-primary/30 text-center">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h2 className="text-3xl font-display font-extrabold text-primary mb-2">{s.value}</h2>
            <p className="text-light text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-base hover:border-accent/50 md:col-span-1">
          <h3 className="text-xl font-display font-bold text-dark mb-4">🎯 Target Market</h3>
          <p className="text-dark/70 leading-relaxed">
            With <strong>86% of Indian farmers</strong> operating on small parcels of land, there is massive demand for affordable, compact automation tools that don't require expensive industrial equipment or technical expertise.
          </p>
        </div>

        <div className="card-base hover:border-accent/50 md:col-span-1">
          <h3 className="text-xl font-display font-bold text-dark mb-4">📍 Geographic Focus</h3>
          <p className="text-dark/70 leading-relaxed">
            Launching from <strong>Tamil Nadu, India</strong> — the agricultural heartland supporting 6+ crore farmers, a thriving startup ecosystem, and direct access to TN-EDII government funding and MSME support programs.
          </p>
        </div>

        <div className="card-base hover:border-accent/50 md:col-span-1">
          <h3 className="text-xl font-display font-bold text-dark mb-4">🌍 Global Ambition</h3>
          <p className="text-dark/70 leading-relaxed">
            After achieving market fit in India, AGRISOLARBOT targets Southeast Asia, Sub-Saharan Africa, and other developing agrarian economies. The global precision farming market is projected to exceed <strong>$12B by 2027</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}
