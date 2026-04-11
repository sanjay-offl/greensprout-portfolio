import React from 'react';

const features = [
  { icon: '🌱', title: 'Automated Ploughing', desc: 'Deep soil preparation with adjustable blades optimized for varied crop types and field conditions.' },
  { icon: '🌾', title: 'Precision Seeding', desc: 'Uniform seed dispersal at calibrated depths ensuring optimal germination and yield density.' },
  { icon: '🌿', title: 'Intelligent Weeding', desc: 'Targeted weed removal between crop rows, protecting plant health without manual intervention.' },
  { icon: '💦', title: 'Smart Irrigation', desc: 'Sensor-triggered precision water delivery, eliminating over-watering and conserving up to 40% water.' },
  { icon: '🌫️', title: 'Automated Spraying', desc: 'Precisely timed pesticide and fertilizer spray based on real-time crop health sensor data.' },
  { icon: '☀️', title: 'Solar Powered', desc: 'Zero-fuel renewable 12V 50W solar panel system with battery backup for extended operation.' },
  { icon: '📱', title: 'Bluetooth Control', desc: 'Seamless manual and auto navigation via a dedicated custom Android application for farmers.' },
  { icon: '📡', title: 'IoT Sensor Array', desc: 'Real-time soil moisture, temperature, and humidity monitoring with dashboard alerts.' },
];

export default function FeaturesPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">Key Features</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Eight integrated capabilities making AGRISOLARBOT the most versatile farming vehicle for India's small-scale farms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="card-base hover:border-primary/30 hover:shadow-primary/10 flex flex-col gap-4"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl">
              {f.icon}
            </div>
            <h3 className="font-display font-bold text-dark text-lg">{f.title}</h3>
            <p className="text-light text-sm leading-relaxed flex-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
