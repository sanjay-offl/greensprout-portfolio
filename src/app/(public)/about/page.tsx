'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ── Core Values Card Component ─────── */
function ValueCard({ item, index }: { item: { icon: string; title: string; desc: string }; index: number }) {
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
      <div className="group relative glass-panel h-full hover:scale-105 hover:-translate-y-1 cursor-pointer overflow-hidden transition-all duration-500">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary to-accent pointer-events-none rounded-3xl transition-opacity duration-500" />

        {/* Content */}
        <div className="relative space-y-4 p-8 md:p-10">
          {/* Icon with glow */}
          <div className="relative w-16 h-16">
            <div className="absolute -inset-4 bg-gradient-to-br rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 from-primary to-accent" />
            <div className="relative text-5xl">{item.icon}</div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-light leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="pt-2">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mission Highlight Component ─────── */
function MissionSection() {
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
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary/30 text-sm font-semibold text-primary">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-dark leading-tight mb-4">
              Transforming Agriculture Through Innovation
            </h2>
          </div>

          <p className="text-lg text-light leading-relaxed">
            AGRISOLARBOT is a solar-powered, IoT-enabled smart farming vehicle developed as part of a Bachelor of Engineering project in Agricultural Engineering at PPG Institute of Technology under Anna University, Chennai. The system integrates multiple agricultural operations into a single machine, including ploughing, seed sowing, seed drilling, weeding, and spraying.
          </p>

          <p className="text-lg text-light leading-relaxed">
            It is specifically designed for small and medium-scale farmers to improve efficiency, reduce manual effort, and promote sustainable farming practices. The system reduces labor dependency, improves operational speed, and ensures efficient use of resources. Its lightweight and compact design makes it suitable for small farms, while its automation capabilities bring precision farming to rural areas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/solution"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300"
            >
              Explore Solution
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: '☀️', title: 'Solar Powered', desc: '12V 50W monocrystalline solar panel with battery backup.' },
            { icon: '📱', title: 'IoT Enabled', desc: 'Real-time monitoring via Android app with Bluetooth control.' },
            { icon: '🚜', title: 'Multi-Function', desc: 'Plough, sow, weed, spray, and monitor in one device.' },
            { icon: '🌱', title: 'Sustainable', desc: 'Zero emissions, eco-friendly solution for modern agriculture.' },
          ].map((item, idx) => (
            <ValueCard key={item.title} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Credentials Section ─────── */
function CredentialsSection() {
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
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="glass-panel-deep overflow-hidden hover:scale-102 transition-all duration-500">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary via-accent to-primary pointer-events-none" />

        {/* Content */}
        <div className="relative p-10 md:p-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-accent/30 text-sm font-semibold text-primary mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Official Recognition
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-dark">
            MSME Registered Startup
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <div className="text-3xl font-display font-bold text-gradient-text-hero">✓</div>
              <p className="text-sm font-semibold text-dark">MSME Registered</p>
              <p className="text-xs text-light">Government of India</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-display font-bold text-gradient-text-hero">✓</div>
              <p className="text-sm font-semibold text-dark">TN-EDII Funded</p>
              <p className="text-xs text-light">Tamil Nadu Entrepreneurship</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-display font-bold text-gradient-text-hero">✓</div>
              <p className="text-sm font-semibold text-dark">Tamil Nadu Based</p>
              <p className="text-xs text-light">Pioneering Agri-Tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
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
            <span className="w-2 h-2 rounded-full bg-accent" />
            GREENSPROUT Story
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            <span className="heading-gradient">About GREENSPROUT</span>
          </h1>

          {/* Subtitle text */}
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            GREENSPROUT is an innovative agri-tech startup based in Coimbatore, Tamil Nadu, focused on transforming traditional farming through smart automation, renewable energy, and IoT-based solutions. Our flagship innovation, AGRISOLARBOT – A Multi Functional Smart Farming Vehicle – addresses real-world agricultural challenges such as labor shortages, rising costs, and inefficient farming practices.
          </p>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* MISSION SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <MissionSection />
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CREDENTIALS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
        <CredentialsSection />
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* IMPACT STATS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20 md:py-32 border-t border-white/30 backdrop-blur-sm">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">
              Our Impact & Commitment
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              Working towards sustainable transformation of Indian agriculture
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Farming Hours Saved' },
              { number: '50%', label: 'Water Reduction' },
              { number: '100%', label: 'Solar Powered' },
              { number: '∞', label: 'Potential Impact' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="group glass-panel text-center p-8 hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                style={{
                  animation: 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-text-hero mb-3">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base font-semibold text-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel text-center space-y-6 p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
              Ready to Transform Agriculture?
            </h2>
            <p className="text-light text-base md:text-lg leading-relaxed">
              Join us in our mission to revolutionize farming through sustainable technology and innovation. Explore our solution or get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/solution"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                View Solution
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
