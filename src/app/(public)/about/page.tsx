import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl heading-gradient mb-4">About GREENSPROUT</h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Pioneering sustainable agri-tech from the heartlands of Tamil Nadu, India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-dark">Our Mission</h2>
          <p className="text-dark/80 text-lg leading-relaxed">
            We are a high-tech agritech startup focused on eliminating the critical barriers in traditional farming. By integrating deep robotics automation, renewable energy, and IoT monitoring, we aim to reverse the devastating effects of labor collapse and resource exhaustion on India's rural farms.
          </p>
          <p className="text-dark/80 text-lg leading-relaxed">
            Through <strong className="text-primary">AGRISOLARBOT</strong>, our flagship solar-automated farming platform, we deploy accessible micro-automation directly into the hands of small-scale farmers who feed the world.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/solution" className="bg-primary text-white font-display font-semibold px-6 py-3 rounded-full hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-primary/30">
              Our Solution
            </Link>
            <Link href="/team" className="text-primary font-semibold border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '🎯', title: 'Mission', desc: 'Automate farming for small-scale Indian farmers sustainably.' },
            { icon: '🌍', title: 'Vision', desc: 'Lead the global agri-automation revolution from India.' },
            { icon: '⚡', title: 'Energy', desc: 'Solar-powered, fully renewable operation model.' },
            { icon: '🔬', title: 'Innovation', desc: 'IoT, robotics, and AI at the core of every solution.' },
          ].map((item) => (
            <div key={item.title} className="card-base hover:border-primary/30">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-display font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MSME Badge */}
      <div className="glass-panel p-8 text-center">
        <p className="text-sm text-light mb-2">Officially Recognized</p>
        <h3 className="text-xl font-display font-bold text-primary">MSME Registered Startup · TN-EDII Funded · Tamil Nadu, India</h3>
      </div>
    </main>
  );
}
