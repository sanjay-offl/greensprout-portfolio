'use client';
import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  {
    value: '40%',
    label: 'Resource Savings',
    desc: 'Water and energy conserved through IoT-driven precision management',
    icon: '💧',
    color: '#74C0FC',
  },
  {
    value: '60%',
    label: 'Cost Reduction',
    desc: 'Operational and fuel expenditure decrease vs traditional farming machinery',
    icon: '💰',
    color: '#FFA94D',
  },
  {
    value: '3×',
    label: 'Efficiency Boost',
    desc: 'Acceleration in seeding, weeding, and spraying task completion speed',
    icon: '⚡',
    color: '#FF6B6B',
  },
  {
    value: '86M',
    label: 'Target Farmers',
    desc: 'Small-scale Indian farmers who can directly benefit from AGRISOLARBOT',
    icon: '👨‍🌾',
    color: '#9775FA',
  },
];

function MetricCard({
  value,
  label,
  desc,
  icon,
  color,
  index,
}: {
  value: string;
  label: string;
  desc: string;
  icon: string;
  color: string;
  index: number;
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="group relative p-8 md:p-10 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full cursor-pointer hover:-translate-y-1"
      >
        {/* Colored background overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />

        {/* Content */}
        <div className="relative space-y-6">
          {/* Icon Container */}
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundColor: `${color}20`,
            }}
          >
            {icon}
          </div>

          {/* Metric Value */}
          <div>
            <div
              className="text-5xl md:text-6xl font-display font-extrabold"
              style={{ color }}
            >
              {value}
            </div>
            <div className="text-lg font-display font-bold text-dark mt-2">
              {label}
            </div>
          </div>

          {/* Description */}
          <p className="text-dark/70 leading-relaxed text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function PerformancePage() {
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
            📊 Validated Results
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">
            Data & Performance
          </h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">
            Real-world testing demonstrates exponential improvement over traditional agricultural techniques. These aren't promises — they're verified metrics.
          </p>
        </div>
      </section>

      {/* ══ PERFORMANCE METRICS ══ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                desc={metric.desc}
                icon={metric.icon}
                color={metric.color}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ DETAILED PERFORMANCE RESULTS ══ */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Field Test Results
            </h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Comprehensive testing on real farms demonstrates significant improvements in agricultural efficiency
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              {
                metric: '50%',
                title: 'Labor Reduction',
                desc: 'Reduces labor requirement from 2-3 workers to 1 operator, addressing critical labor shortage crisis.',
              },
              {
                metric: '0.3-0.7 acres/hr',
                title: 'Coverage Area',
                desc: 'Covers 0.3 to 0.7 acres per hour with precision automation, enabling efficient farm management.',
              },
              {
                metric: '↑ Accuracy',
                title: 'Seed Placement',
                desc: 'Improves seed placement accuracy significantly, ensuring optimal crop density and yields.',
              },
              {
                metric: '-40%',
                title: 'Water Wastage',
                desc: 'Reduces water and fertilizer wastage through precision IoT-driven delivery systems.',
              },
              {
                metric: '↑ Productivity',
                title: 'Overall Yield',
                desc: 'Enhances overall productivity through consistent, optimized farming operations.',
              },
              {
                metric: '₹50-80/hr',
                title: 'Operating Cost',
                desc: 'Operating cost drops to ₹50-80 per hour vs ₹400-600 with traditional machinery.',
              },
            ].map((result, idx) => (
              <div
                key={result.title}
                className="group glass-panel p-8 md:p-10 space-y-4 hover:scale-105 hover:shadow-lg transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {result.metric}
                </div>
                <h3 className="text-xl font-display font-bold text-dark">{result.title}</h3>
                <p className="text-dark/80 leading-relaxed">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GOVERNMENT BACKING ══ */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm border border-white/60 rounded-2xl p-12 md:p-16 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center space-y-6">
              <div className="text-6xl mb-4">🏛️</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
                Officially Recognized & Funded
              </h2>
              <p className="text-lg text-dark/70 leading-relaxed max-w-2xl mx-auto">
                GREENSPROUT has received <strong>₹1,92,000 in confirmed government funding</strong> from the Tamil Nadu Entrepreneurship Development and Innovation Institute (TN-EDII). This validates our technology's real-world potential and positions us as a government-backed agri-tech innovator.
              </p>

              <div className="bg-white/60 rounded-xl p-6 mt-8 border border-primary/20">
                <h3 className="font-display font-bold text-primary mb-4">Funding & Recognition</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">
                      ₹1.92L
                    </div>
                    <div className="text-sm text-dark/70">TN-EDII Grant</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">
                      MSME
                    </div>
                    <div className="text-sm text-dark/70">Registered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">
                      NGI TBI
                    </div>
                    <div className="text-sm text-dark/70">Knowledge Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY THESE METRICS MATTER ══ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark mb-4">Why These Metrics Matter</h2>
            <p className="text-lg text-dark/70">
              Every percentage point translates to real savings for Indian farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💵',
                title: 'Cost Reduction',
                desc: '60% savings means ₹30,000+ annual savings per small farm.',
              },
              {
                icon: '💧',
                title: 'Resource Savings',
                desc: '40% water conservation preserves this critical resource.',
              },
              {
                icon: '⏱️',
                title: '3× Efficiency',
                desc: 'Task completion speed allows farmers to tend larger lands.',
              },
              {
                icon: '👥',
                title: 'Scale Impact',
                desc: '86M farmers represent ₹2.58T annual opportunity.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-accent/5 border border-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-dark mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-dark/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
