'use client';
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: '🌡️',
    step: '01',
    title: 'Sensor Input',
    desc: 'IoT sensors collect real-time soil moisture, temperature, and humidity data across the field.',
    color: '#FF6B6B',
  },
  {
    icon: '⚙️',
    step: '02',
    title: 'Data Processing',
    desc: 'The onboard ESP32 microcontroller processes incoming sensor streams and triggers responsive actions.',
    color: '#FFA94D',
  },
  {
    icon: '📡',
    step: '03',
    title: 'BT Transmission',
    desc: 'Processed data is transmitted via HC-05 Bluetooth to the farmer\'s Android application.',
    color: '#74C0FC',
  },
  {
    icon: '📱',
    step: '04',
    title: 'App Control',
    desc: 'The farmer reviews sensor insights and issues manual or automated control commands.',
    color: '#9775FA',
  },
  {
    icon: '🚜',
    step: '05',
    title: 'Field Action',
    desc: 'AGRISOLARBOT executes the exact farming action: ploughing, seeding, spraying, or irrigation.',
    color: '#2F6B3C',
  },
];

function WorkflowCard({
  step,
  index,
  isEven,
}: {
  step: (typeof steps)[0];
  index: number;
  isEven: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden p-8">
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: step.color }}
        />

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-6">
            {/* Icon Container */}
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundColor: `${step.color}20`,
              }}
            >
              {step.icon}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div
                className="text-xs font-bold tracker-widest uppercase mb-2"
                style={{ color: step.color }}
              >
                Step {step.step}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-dark/70 leading-relaxed text-base">{step.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-primary/15 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/30 mb-8 uppercase tracking-widest">
            ⚡ Intelligent Workflow
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            From real-time sensor data to precise field action — the complete AGRISOLARBOT intelligent workflow pipeline.
          </p>
        </div>
      </section>

      {/* ══ WORKFLOW STEPS ══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated connector line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

            <div className="space-y-12">
              {steps.map((step, idx) => (
                <WorkflowCard key={step.step} step={step} index={idx} isEven={idx % 2 === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KEY BENEFITS ══ */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark mb-4">Why This Workflow?</h2>
            <p className="text-lg text-dark/70">
              Every step is optimized for farmer efficiency and crop health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⏱️',
                title: 'Fast Response',
                desc: 'Real-time processing means instant action when conditions change.',
              },
              {
                icon: '🎯',
                title: 'Precise Control',
                desc: 'IoT sensors provide exact field data for targeted interventions.',
              },
              {
                icon: '🔄',
                title: 'Continuous Learning',
                desc: 'System learns from every cycle to improve future operations.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
