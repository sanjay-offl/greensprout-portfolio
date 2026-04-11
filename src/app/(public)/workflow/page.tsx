import React from 'react';

const steps = [
  { icon: '🌡️', step: '01', title: 'Sensor Input', desc: 'IoT sensors collect real-time soil moisture, temperature, and humidity data across the field.' },
  { icon: '⚙️', step: '02', title: 'Data Processing', desc: 'The onboard ESP32 microcontroller processes incoming sensor streams and triggers responsive actions.' },
  { icon: '📡', step: '03', title: 'BT Transmission', desc: 'Processed data is transmitted via HC-05 Bluetooth to the farmer\'s Android application.' },
  { icon: '📱', step: '04', title: 'App Control', desc: 'The farmer reviews sensor insights and issues manual or automated control commands.' },
  { icon: '🚜', step: '05', title: 'Field Action', desc: 'AGRISOLARBOT executes the exact farming action: ploughing, seeding, spraying, or irrigation.' },
];

export default function WorkflowPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">How It Works</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          From sensor to action — the complete AGRISOLARBOT intelligent workflow.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={step.step} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="md:w-5/12">
                <div className="card-base hover:border-primary/30 text-left">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-display font-bold text-dark mb-3">{step.title}</h3>
                  <p className="text-light leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Center node */}
              <div className="md:w-2/12 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/30 z-10">
                  {step.step}
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
