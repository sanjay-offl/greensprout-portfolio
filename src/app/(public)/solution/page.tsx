import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolutionPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/20 mb-6">
          ✅ Our Solution
        </div>
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">AGRISOLARBOT</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          A complete autonomous farming platform designed to replace manual operations with smart, solar-powered automation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-dark">Smart Integration Platform</h2>
          <p className="text-dark/70 text-lg leading-relaxed">
            AGRISOLARBOT is fully integrated, solar-powered, and Bluetooth-driven. It operates silently and sustainably while combining multiple critical farming processes — ploughing, seeding, weeding, spraying, and monitoring — into a single automated platform.
          </p>
          
          <ul className="space-y-4">
            {[
              ['☀️', 'Eco-friendly Solar Powered (12V 50W)'],
              ['📱', 'App & Bluetooth Controlled via Android'],
              ['📡', 'Real-time IoT Sensor Monitoring'],
              ['🤖', 'Multi-function Farming Automation'],
              ['🔋', 'Lead Acid Battery Backup (12V 12Ah)'],
            ].map(([icon, text]) => (
              <li key={text} className="flex items-center gap-4 text-dark font-medium">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">{icon}</span>
                {text}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/features" className="bg-primary text-white font-display font-semibold px-6 py-3 rounded-full hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-primary/30">
              All Features
            </Link>
            <Link href="/technology" className="text-primary font-semibold border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300">
              Technology Stack
            </Link>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-[2.5rem] blur-2xl scale-90" />
          <div className="relative bg-white/60 backdrop-blur-sm border border-white rounded-[2.5rem] p-3 shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero.png"
              width={600}
              height={450}
              alt="AGRISOLARBOT smart farming vehicle"
              className="w-full h-auto rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
