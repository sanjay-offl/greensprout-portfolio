'use client';
import React, { useEffect, useRef, useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';

interface Problem {
  icon: string;
  title: string;
  color: string;
  desc: string;
  impact: string;
  stat: string;
  geo: string;
}

const problems: Problem[] = [
  {
    icon: '👷',
    title: 'Labor Shortage Crisis',
    color: '#FF6B6B',
    desc: 'India faces a critical shortage of agricultural workers. Aging farmer populations, rural-to-urban migration, and physical demands drive up labor costs and reduce farm productivity.',
    impact: 'Average farm labor cost increased by 65% in last 5 years',
    stat: '40% of farmers can\'t find workers',
    geo: 'India-wide',
  },
  {
    icon: '⛽',
    title: 'High Fuel Costs',
    color: '#FFA94D',
    desc: 'Traditional diesel-powered machinery obliterates profit margins for small-scale farmers. Fuel price volatility makes seasonal planning nearly impossible.',
    impact: 'Diesel accounts for 35-40% of operational expenses',
    stat: '₹8,000-12,000 per hectare annually',
    geo: 'Rural India',
  },
  {
    icon: '💧',
    title: 'Inefficient Irrigation',
    color: '#74C0FC',
    desc: 'Flood irrigation wastes up to 60% of water used. Without precision systems, overwatering and drought damage devastate crop yields.',
    impact: 'India faces chronic water scarcity',
    stat: '60% water waste annually',
    geo: 'Tamil Nadu & Drought zones',
  },
  {
    icon: '⚙️',
    title: 'Lack of Automation',
    color: '#9775FA',
    desc: 'Less than 5% of Indian farms use any form of automation. Manual processes limit scalability and trap farmers in low-output cycles.',
    impact: 'Limits farm scalability and efficiency',
    stat: '< 5% farms automated',
    geo: 'Nationwide challenge',
  },
];

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
      style={{ transitionDelay: `${index * 100}ms` }}
      role="article"
      aria-label={`Problem: ${problem.title}`}
    >
      <div className="group relative bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-primary/10 hover:border-primary/30 rounded-3xl overflow-hidden p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:-translate-y-2">
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${problem.color}40 0%, transparent 100%)`,
          }}
          aria-hidden="true"
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, ${problem.color}, transparent)`,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative space-y-5 flex-1 flex flex-col">
          {/* Header: Icon + GEO */}
          <div className="flex items-start justify-between gap-4">
            {/* Icon Container with glow */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"
                style={{ backgroundColor: problem.color }}
                aria-hidden="true"
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${problem.color}20 0%, ${problem.color}10 100%)`,
                }}
              >
                {problem.icon}
              </div>
            </div>

            {/* GEO Tag */}
            <div
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white/70 group-hover:text-white transition-colors duration-300"
              style={{ backgroundColor: `${problem.color}40` }}
            >
              📍 {problem.geo}
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-black text-dark dark:text-white leading-tight mb-3">
              {problem.title}
            </h3>
            <p className="text-sm md:text-base text-dark/70 dark:text-light/70 leading-relaxed">
              {problem.desc}
            </p>
          </div>

          {/* Impact & Stat Row */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
            <div>
              <p className="text-xs font-bold text-dark/50 dark:text-light/50 mb-1">Impact</p>
              <p className="text-sm font-semibold text-dark dark:text-white">{problem.impact}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-dark/50 dark:text-light/50 mb-1">Statistic</p>
              <p className="text-sm font-semibold" style={{ color: problem.color }}>
                {problem.stat}
              </p>
            </div>
          </div>
        </div>

        {/* Left accent border */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"
          style={{ backgroundColor: problem.color }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function ProblemPage() {
  return (
    <>
      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Agricultural Problems & Challenges',
          description: 'Key challenges in Indian agriculture that AGRISOLARBOT solves',
          areaServed: { '@type': 'Country', name: 'India' },
        })}
      </script>

      <main className="min-h-screen bg-gradient-to-b from-background via-white/50 dark:via-dark/50 to-background">
        {/* ══ HERO SECTION ══ */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 -z-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/20 to-orange-50/20 dark:from-red-900/10 dark:to-orange-900/10 rounded-full blur-3xl opacity-40 animate-float" />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-50/20 to-orange-100/20 dark:from-red-900/5 dark:to-orange-900/5 rounded-full blur-3xl opacity-40"
              style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Subtitle badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-red-50/60 dark:bg-red-900/20 backdrop-blur-md border border-red-200/50 dark:border-red-800/50 text-sm font-semibold text-red-600 dark:text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                The Challenge We're Solving
              </div>
            </FadeIn>

            {/* Main heading */}
            <FadeIn delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  Agricultural Crisis
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle text */}
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-dark/70 dark:text-light/80 max-w-2xl mx-auto leading-relaxed mb-8">
                Traditional farming in India faces four critical challenges. AGRISOLARBOT directly addresses every one of them.
              </p>
            </FadeIn>

            {/* Animated underline */}
            <FadeIn delay={300}>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full mx-auto" />
            </FadeIn>
          </div>
        </section>

        {/* ══ PROBLEMS GRID SECTION ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Section intro */}
            <FadeIn>
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-black text-dark dark:text-white">
                  Four Critical Barriers
                </h2>
                <p className="text-dark/70 dark:text-light/70 text-base md:text-lg max-w-2xl mx-auto">
                  Each barrier contributes to lower productivity, higher costs, and reduced profitability for India's farmers
                </p>
              </div>
            </FadeIn>

            {/* Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {problems.map((problem, idx) => (
                <ProblemCard key={problem.title} problem={problem} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ SOLUTION CTA SECTION ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="relative bg-gradient-to-br from-primary/95 to-primary dark:from-primary/80 dark:to-primary/60 rounded-3xl p-12 md:p-16 text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                {/* Background gradient blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

                <div className="relative z-10 space-y-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    The GREENSPROUT Solution
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-black leading-tight">
                    AGRISOLARBOT™: Addressing Every Challenge
                  </h2>

                  <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                    One integrated platform solving labor shortage, fuel costs, irrigation efficiency, and automation — all powered by solar energy.
                  </p>

                  <div className="pt-4">
                    <a
                      href="/solution"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-display font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Explore the Solution →
                    </a>
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
