'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ── Feature Card Component ─────── */
function FeatureCard({ item, index }: { item: { icon: string; title: string; desc: string }; index: number }) {
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
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group relative glass-panel p-8 md:p-10 hover:scale-105 hover:-translate-y-2 cursor-default transition-all duration-500 h-full flex flex-col">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary to-accent pointer-events-none rounded-3xl transition-opacity duration-500" />

        {/* Content */}
        <div className="relative space-y-5 flex-1 flex flex-col">
          {/* Icon with animated glow */}
          <div className="relative inline-block w-fit">
            <div className="absolute -inset-4 bg-gradient-to-br rounded-full opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-500 from-primary to-accent" />
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
          </div>

          {/* Title with accent line */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg md:text-xl font-display font-bold text-dark leading-tight pr-2">
                {item.title}
              </h3>
            </div>
            {/* Animated accent line */}
            <div className="w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-12 transition-all duration-600" />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-light leading-relaxed flex-1">
            {item.desc}
          </p>

          {/* Feature badge */}
          <div className="inline-flex items-center gap-2 w-fit px-3 py-2 rounded-full bg-white/40 backdrop-blur-md border border-accent/20 text-xs font-semibold text-primary group-hover:border-accent/50 group-hover:bg-white/60 transition-all duration-300 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Integrated
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🌱',
      title: 'Automated Ploughing',
      desc: 'Deep soil preparation with adjustable blades optimized for varied crop types and field conditions.'
    },
    {
      icon: '🌾',
      title: 'Precision Seeding',
      desc: 'Uniform seed dispersal at calibrated depths ensuring optimal germination and yield density.'
    },
    {
      icon: '🌿',
      title: 'Intelligent Weeding',
      desc: 'Targeted weed removal between crop rows, protecting plant health without manual intervention.'
    },
    {
      icon: '💦',
      title: 'Smart Irrigation',
      desc: 'Sensor-triggered precision water delivery, eliminating over-watering and conserving up to 40% water.'
    },
    {
      icon: '🌫️',
      title: 'Automated Spraying',
      desc: 'Precisely timed pesticide and fertilizer spray based on real-time crop health sensor data.'
    },
    {
      icon: '☀️',
      title: 'Solar Powered',
      desc: 'Zero-fuel renewable 12V 50W solar panel system with battery backup for extended operation.'
    },
    {
      icon: '📱',
      title: 'Bluetooth Control',
      desc: 'Seamless manual and auto navigation via a dedicated custom Android application for farmers.'
    },
    {
      icon: '📡',
      title: 'IoT Sensor Array',
      desc: 'Real-time soil moisture, temperature, and humidity monitoring with dashboard alerts.'
    },
  ];

  return (
    <main className="min-h-screen">
      {/* ══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl opacity-40 animation-delay-2000" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-accent/30 text-sm font-semibold text-primary hover:border-accent/60 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AGRISOLARBOT Capabilities
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            <span className="heading-gradient">Eight Integrated Features</span>
          </h1>

          {/* Subtitle text */}
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            Comprehensive automation from ploughing to spraying, powered by renewable solar energy and intelligent IoT sensors for India's small-scale farmers.
          </p>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* FEATURES GRID SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        {/* Section intro */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
            Comprehensive Automation Suite
          </h2>
          <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
            Each feature works independently or as part of our integrated system, adapting to your farm's specific needs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} item={feature} index={idx} />
          ))}
        </div>

        {/* Features Overview Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: '8', label: 'Key Features' },
            { number: '40%', label: 'Water Saved' },
            { number: '100%', label: 'Solar Powered' },
            { number: '24/7', label: 'IoT Monitoring' },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-light font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* FEATURE CATEGORIES SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 border-t border-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Feature Categories
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              Our capabilities span farming operations, energy systems, and smart connectivity.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Farming Operations',
                features: ['Ploughing', 'Seeding', 'Weeding', 'Irrigation', 'Spraying'],
                icon: '🚜',
              },
              {
                title: 'Energy & Sustainability',
                features: ['Solar Powered', 'Battery Backup', 'Zero-Emission', 'Cost Efficient', 'Eco-Friendly'],
                icon: '☀️',
              },
              {
                title: 'Intelligence & Control',
                features: ['IoT Sensors', 'Bluetooth App', 'Real-Time Data', 'Smart Alerts', 'Digital Monitoring'],
                icon: '📡',
              },
            ].map((category, idx) => (
              <div
                key={category.title}
                className={`glass-panel p-8 md:p-10 space-y-6 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-default ${
                  isCtaVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-dark">
                    {category.title}
                  </h3>
                </div>

                {/* Feature list */}
                <ul className="space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm md:text-base text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ADVANTAGES SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Key Advantages
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              AGRISOLARBOT delivers comprehensive benefits for modern sustainable farming
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: '🌱', title: 'Renewable Energy', desc: 'Uses renewable solar energy, reducing fuel dependency and environmental impact.' },
              { icon: '💰', title: 'Cost-Effective', desc: 'Operating costs drop 60% compared to traditional diesel machinery.' },
              { icon: '⏱️', title: 'Time Efficient', desc: 'Covers 0.3 to 0.7 acres per hour with precision automation.' },
              { icon: '💧', title: 'Water Conservation', desc: 'Reduces water wastage by up to 40% through precision irrigation.' },
              { icon: '🎯', title: 'Precision Farming', desc: 'Improved seed placement accuracy and efficient resource usage.' },
              { icon: '👥', title: 'Labor Reduction', desc: 'Reduces labor requirement by up to 50%, addressing shortage crisis.' },
              { icon: '🔧', title: 'Easy to Operate', desc: 'Simple Android app control suitable for farmers with basic technical knowledge.' },
              { icon: '🌍', title: 'Sustainable', desc: 'Eco-friendly solution promoting sustainable farming practices for future generations.' },
            ].map((advantage, idx) => (
              <div
                key={advantage.title}
                className="group glass-panel p-8 md:p-10 space-y-4 hover:scale-105 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{advantage.icon}</div>
                <h3 className="text-xl font-display font-bold text-dark">{advantage.title}</h3>
                <p className="text-light leading-relaxed">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* APPLICATIONS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 border-t border-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Real-World Applications
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              AGRISOLARBOT is designed for diverse agricultural use cases
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: '🌾', title: 'Seed Sowing', desc: 'Uniform seed placement for optimal germination and yield density.' },
              { icon: '🚜', title: 'Soil Ploughing', desc: 'Deep soil preparation using precision cultivator tools.' },
              { icon: '🌿', title: 'Weeding', desc: 'Targeted weed removal using rotating blades between crop rows.' },
              { icon: '💦', title: 'Smart Farming', desc: 'Precision irrigation with sensor-triggered water delivery.' },
              { icon: '🏡', title: 'Precision Agriculture', desc: 'Data-driven farming decisions using IoT sensor insights.' },
              { icon: '🌱', title: 'Sustainable Practices', desc: 'Eco-friendly farming promoting long-term soil health.' },
              { icon: '🏫', title: 'Educational Projects', desc: 'Learning platform for agricultural engineering students.' },
              { icon: '🤝', title: 'Startup Initiatives', desc: 'Proof-of-concept for agri-tech entrepreneurs.' },
              { icon: '🔬', title: 'Research Applications', desc: 'Testing ground for new agricultural technologies.' },
            ].map((app, idx) => (
              <div
                key={app.title}
                className="glass-panel p-8 md:p-10 space-y-4 hover:scale-105 hover:shadow-lg transition-all duration-500"
              >
                <div className="text-5xl">{app.icon}</div>
                <h3 className="text-lg font-display font-bold text-dark">{app.title}</h3>
                <p className="text-sm text-light leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* LIMITATIONS & CONSIDERATIONS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 bg-orange-50/50 border-t border-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Considerations & Future Scope
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              Understanding current limitations and exciting future enhancements
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Current Limitations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-dark flex items-center gap-3">
                <span>⚠️</span> Current Limitations
              </h3>
              <ul className="space-y-4">
                {[
                  'Depends on sunlight for charging - works best in sunny regions',
                  'Not suitable for very large farms (optimized for small-medium scale)',
                  'Requires basic technical knowledge for maintenance',
                  'Battery capacity limits extended operating hours',
                  'Electronic components need protection from dust and moisture',
                  'Higher initial setup cost compared to manual farming',
                ].map((limitation, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-orange-500 font-bold text-xl flex-shrink-0">•</span>
                    <span className="text-dark/80">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Enhancements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-dark flex items-center gap-3">
                <span>🔮</span> Future Scope
              </h3>
              <ul className="space-y-4">
                {[
                  'Artificial Intelligence for autonomous decision-making',
                  'GPS integration for autonomous navigation',
                  'Cloud-based IoT systems for remote monitoring',
                  'Full automation without human intervention',
                  'Hybrid renewable energy systems (solar + wind)',
                  'Advanced harvesting mechanisms and tools',
                ].map((future, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-green-600 font-bold text-xl flex-shrink-0">→</span>
                    <span className="text-dark/80">{future}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-24">
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto transition-all duration-700 transform ${
            isCtaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass-panel-deep text-center space-y-6 p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Experience the future of agriculture with AGRISOLARBOT. Automate your farming operations sustainably and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                Pre-Order Now
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
              >
                Learn Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
