'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

interface Feature {
  icon: string;
  text: string;
}

function FeatureCard({ icon, text, index }: { icon: string; text: string; index: number }) {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`flex items-center gap-4 text-dark dark:text-white font-medium transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      role="listitem"
    >
      <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span>{text}</span>
    </li>
  );
}

interface BenefitItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  geo: string;
}

const benefits: BenefitItem[] = [
  {
    icon: '🌍',
    title: 'Environmentally Sustainable',
    desc: 'Zero emissions, solar-powered operation reduces carbon footprint and fuel dependency across India.',
    color: '#10B981',
    geo: 'India-wide impact',
  },
  {
    icon: '💡',
    title: 'Cost-Effective',
    desc: 'Operating costs drop 60% compared to traditional diesel machinery. Affordable for small farmers.',
    color: '#F59E0B',
    geo: 'Rural communities',
  },
  {
    icon: '⚡',
    title: 'Highly Efficient',
    desc: '3× faster task completion with precision IoT monitoring saves water, energy, and resources.',
    color: '#3B82F6',
    geo: 'Precision farming',
  },
];

export default function SolutionPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'AGRISOLARBOT™',
          description: 'Complete autonomous farming platform - solar-powered, IoT-enabled',
          areaServed: { '@type': 'Country', name: 'India' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: 'Custom quote',
          },
        })}
      </script>

      <main className="min-h-screen bg-gradient-to-b from-background via-white/50 dark:via-dark/50 to-background">
        {/* ══ HERO SECTION ══ */}
        <section className="relative pt-20 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-40 -left-40 w-96 h-96 bg-accent/15 dark:bg-accent/5 rounded-full blur-3xl opacity-40 animate-float"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-40"
              style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              aria-hidden="true"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              {/* Badge */}
              <FadeIn>
                <div className="inline-block bg-primary/15 dark:bg-primary/20 text-primary dark:text-accent text-xs font-bold px-4 py-2 rounded-full border border-primary/30 mb-6 sm:mb-8 uppercase tracking-widest">
                  ✅ Smart Solution
                </div>
              </FadeIn>

              {/* Main heading */}
              <FadeIn delay={100}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] dark:from-[#86868B] dark:to-[#6FAF5E] bg-clip-text text-transparent">
                  AGRISOLARBOT™
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={200}>
                <p className="text-lg sm:text-2xl text-primary dark:text-accent font-semibold mb-4">
                  Complete Autonomous Farming Platform
                </p>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={300}>
                <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 max-w-3xl mx-auto leading-relaxed">
                  A fully integrated, solar-powered farming solution that replaces manual operations with intelligent, Bluetooth-controlled automation. Silent. Sustainable. Scalable.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══ CORE PLATFORM SECTION ══ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            {/* Text & Features */}
            <FadeIn>
                <div className="space-y-8 sm:space-y-10">
                  {/* Heading */}
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-dark dark:text-white mb-4 sm:mb-6 leading-tight">
                      Smart Integration Platform
                    </h2>
                    <p className="text-base sm:text-lg text-dark/70 dark:text-light/75 leading-relaxed">
                      AGRISOLARBOT seamlessly combines multiple critical farming processes into one unified, automated platform. Ploughing, seeding, weeding, spraying, and monitoring — all controlled from your Android device.
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 sm:space-y-4 group" role="list">
                    {[
                      { icon: '☀️', text: 'Eco-friendly Solar Powered (12V 50W)' },
                      { icon: '📱', text: 'App & Bluetooth Controlled via Android' },
                      { icon: '📡', text: 'Real-time IoT Sensor Monitoring' },
                      { icon: '🤖', text: 'Multi-function Farming Automation' },
                      { icon: '🔋', text: 'Lead Acid Battery Backup (12V 12Ah)' },
                    ].map(({ icon, text }, idx) => (
                      <FeatureCard key={text} icon={icon} text={text} index={idx} />
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 sm:pt-6">
                    <Link
                      href="/features"
                      className="inline-flex justify-center items-center group bg-gradient-to-r from-primary to-accent text-white font-display font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      aria-label="Explore all features and specifications"
                    >
                      <span>Explore All Features</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link
                      href="/technology"
                      className="inline-flex justify-center items-center text-primary dark:text-accent font-semibold border-2 border-primary/30 dark:border-accent/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary/5 dark:hover:bg-accent/5 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300"
                      aria-label="View technology stack and specifications"
                    >
                      Technology Stack
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
        </section>

        {/* ══ BENEFITS GRID ══ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-dark dark:text-white mb-4">
                  Why AGRISOLARBOT?
                </h2>
                <p className="text-base sm:text-lg text-dark/70 dark:text-light/75">
                  Purpose-built for Indian farmers. Designed for sustainability and profitability.
                </p>
              </div>
            </FadeIn>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, idx) => (
                <FadeIn key={benefit.title} delay={idx * 100}>
                  <div
                    className="group relative p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-primary/10 hover:border-primary/30 dark:border-white/5 dark:hover:border-accent/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 h-full flex flex-col"
                  >
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, ${benefit.color}, transparent)` }}
                      aria-hidden="true"
                    />

                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-dark dark:text-white mb-3 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-dark/70 dark:text-light/70 leading-relaxed flex-1 mb-4">
                      {benefit.desc}
                    </p>

                    {/* GEO Tag */}
                    <div className="flex items-center gap-2 text-xs font-bold text-primary/70 dark:text-accent/70">
                      <span>📌 {benefit.geo}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPARISON SECTION ══ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-dark dark:text-white mb-4">
                  Traditional vs. AGRISOLARBOT
                </h2>
                <p className="text-base sm:text-lg text-dark/70 dark:text-light/75 max-w-2xl mx-auto">
                  Comprehensive comparison showing the value proposition
                </p>
              </div>
            </FadeIn>

            {/* Comparison Table */}
            <FadeIn delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b-2 border-primary/20 dark:border-accent/20">
                      <th className="text-left py-4 px-4 font-display font-bold text-dark dark:text-white">Factor</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-dark dark:text-white">Traditional</th>
                      <th className="text-center py-4 px-4 font-display font-bold text-primary">AGRISOLARBOT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Labor Requirement', 'High (2-3 workers)', 'Minimal (1 operator)'],
                      ['Operating Cost/Hr', '₹400-600', '₹50-80'],
                      ['Water Waste', '60% waste', '20% waste'],
                      ['Carbon Emissions', 'High', 'Zero'],
                      ['IoT Monitoring', 'None', 'Real-time'],
                      ['Scalability', 'Limited', 'High'],
                    ].map(([factor, traditional, agrisolar], idx) => (
                      <tr
                        key={factor as string}
                        className="border-b border-primary/10 dark:border-white/5 hover:bg-white/50 dark:hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4 font-semibold text-dark dark:text-white">{factor}</td>
                        <td className="py-4 px-4 text-center text-dark/60 dark:text-light/60">{traditional}</td>
                        <td className="py-4 px-4 text-center font-semibold text-primary">{agrisolar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══ CTA SECTION ══ */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative bg-gradient-to-br from-primary/95 to-primary dark:from-primary/80 dark:to-primary/60 rounded-3xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

                <div className="relative z-10 space-y-6 text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-tight">
                    Ready to Transform Your Farm?
                  </h2>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                    Join the agricultural revolution. AGRISOLARBOT is built for Indian farmers, tested for Indian conditions.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary font-display font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white text-white font-display font-bold hover:bg-white/10 transition-all duration-300"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
