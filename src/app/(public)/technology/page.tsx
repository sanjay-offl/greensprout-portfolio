'use client';
import React, { useEffect, useRef, useState } from 'react';

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

function StackCard({
  icon,
  name,
  spec,
  index,
}: {
  icon: string;
  name: string;
  spec: string;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center">
        {icon}
      </span>
      <div className="flex-1">
        <p className="font-semibold text-dark text-sm md:text-base">{name}</p>
        <p className="text-light text-xs md:text-sm mt-1">{spec}</p>
      </div>
    </li>
  );
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 mb-16">
          <div className="inline-block bg-accent/20 text-primary text-xs font-bold px-4 py-2 rounded-full border border-accent/40 mb-8 uppercase tracking-widest">
            🔧 Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">
            Technology Stack
          </h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Deep engineering meets agricultural innovation. Powerful hardware and intelligent software driving AGRISOLARBOT's autonomous capabilities.
          </p>
        </div>
      </section>

      {/* ══ HARDWARE & SOFTWARE ══ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hardware Stack */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl">
                    🔧
                  </div>
                  <h2 className="text-3xl font-display font-bold text-dark">Hardware Stack</h2>
                </div>
                <ul className="space-y-3">
                  {hardware.map(([icon, name, spec], idx) => (
                    <StackCard key={name} icon={icon} name={name} spec={spec} index={idx} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Software Stack */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-2xl">
                    💻
                  </div>
                  <h2 className="text-3xl font-display font-bold text-dark">Software Stack</h2>
                </div>
                <ul className="space-y-3">
                  {software.map(([icon, name, spec], idx) => (
                    <StackCard
                      key={name}
                      icon={icon}
                      name={name}
                      spec={spec}
                      index={idx + hardware.length}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTEGRATION SECTION ══ */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark mb-4">Seamless Integration</h2>
            <p className="text-lg text-dark/70">
              Hardware and software working in perfect harmony for autonomous farming automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sensors', desc: 'Real-time field monitoring', icon: '📡' },
              { title: 'Processing', desc: 'AI-powered decisions', icon: '🧠' },
              { title: 'Communication', desc: 'Instant Bluetooth sync', icon: '📱' },
              { title: 'Action', desc: 'Precise automation', icon: '⚙️' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
