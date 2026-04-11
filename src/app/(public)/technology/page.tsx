import React from 'react';

const hardware = [
  ['⚙️', 'High-Efficiency Solar Panel', '12V 50W monocrystalline'],
  ['🔋', 'Lead Acid Battery', '12V 12Ah backup storage'],
  ['⚡', 'High-Torque DC Motors', 'Precision gear motor array'],
  ['🤖', 'ESP32 Microcontroller', 'Dual-core IoT processing'],
  ['📡', 'HC-05 Bluetooth Module', 'Low-latency BT communication'],
  ['🌡️', 'DHT11 Sensor', 'Temperature & humidity tracking'],
];

const software = [
  ['💻', 'Android Application', 'Custom farmer control interface'],
  ['🌐', 'IoT Infrastructure', 'Real-time sensor data fusion'],
  ['📊', 'Data Dashboard', 'Field monitoring & analytics'],
  ['🧠', 'Automation Logic', 'Trigger-based action processing'],
];

export default function TechnologyPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">Our Technology</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          The deeply engineered hardware and software stacks making AGRISOLARBOT reliable and powerful.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Hardware */}
        <div className="card-base hover:border-primary/30 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <h2 className="text-2xl font-display font-bold text-dark mb-8 flex items-center gap-3">
            <span className="text-3xl">🔧</span> Hardware Stack
          </h2>
          <ul className="space-y-5">
            {hardware.map(([icon, name, spec]) => (
              <li key={name} className="flex items-start gap-4">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-dark">{name}</p>
                  <p className="text-light text-sm">{spec}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Software */}
        <div className="card-base hover:border-primary/30 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
          <h2 className="text-2xl font-display font-bold text-dark mb-8 flex items-center gap-3">
            <span className="text-3xl">💻</span> Software Stack
          </h2>
          <ul className="space-y-5">
            {software.map(([icon, name, spec]) => (
              <li key={name} className="flex items-start gap-4">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-dark">{name}</p>
                  <p className="text-light text-sm">{spec}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
