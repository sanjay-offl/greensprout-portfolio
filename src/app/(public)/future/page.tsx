'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/i18n/useTranslations';

/* ── Roadmap Card Component ─────── */
function RoadmapCard({ item, index }: { item: { icon: string; phase: string; title: string; desc: string }; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      {index < 3 && (<div className="hidden lg:block absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-accent to-transparent -translate-x-1/2" />)}
      <div className="group relative glass-panel p-8 md:p-10 hover:scale-105 hover:-translate-y-2 cursor-default transition-all duration-500 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary to-accent pointer-events-none rounded-3xl transition-opacity duration-500" />
        <div className="relative space-y-5 flex-1 flex flex-col">
          <div className="relative inline-block w-fit">
            <div className="absolute -inset-4 bg-gradient-to-br rounded-full opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-500 from-primary to-accent" />
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
          </div>
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-accent/30 text-xs font-bold text-primary group-hover:border-accent/60 group-hover:bg-white/60 transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />{item.phase}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark leading-tight">{item.title}</h3>
            <div className="w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-16 transition-all duration-600" />
          </div>
          <p className="text-sm md:text-base text-light leading-relaxed flex-1">{item.desc}</p>
          <div className="inline-flex items-center gap-2 w-fit text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300 mt-2">
            <span className="w-2 h-2 rounded-full bg-accent group-hover:bg-primary transition-colors duration-300" />{t('common.plannedDev')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FuturePage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsCtaVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const future = [
    { icon: '🧠', phase: 'Phase 2 — 2026', title: t('future.aiVision'), desc: t('future.aiDesc') },
    { icon: '🤖', phase: 'Phase 3 — 2027', title: t('future.gpsAutonomy'), desc: t('future.gpsDesc') },
    { icon: '☁️', phase: 'Phase 4 — 2028', title: t('future.cloudDashboard'), desc: t('future.cloudDesc') },
    { icon: '🌐', phase: 'Phase 5 — 2029', title: t('future.smartEcosystem'), desc: t('future.ecosystemDesc') },
  ];

  const innovationAreas = [
    { title: t('future.ai'), features: ['Disease Detection', 'Yield Prediction', 'Auto-Treatment', 'Field Mapping', 'Pattern Learning'], icon: '🧠' },
    { title: t('future.autoNav'), features: ['GPS/LiDAR Tech', 'Obstacle Avoidance', '24/7 Operation', 'Weather Adaptation', 'Precision Routing'], icon: '🤖' },
    { title: t('future.cloudIntegration'), features: ['Fleet Management', 'Real-Time Analytics', 'Predictive Alerts', 'Mobile Dashboard', 'Data Security'], icon: '☁️' },
    { title: t('future.ecosystemPlatform'), features: ['Farmer Network', 'Market Connect', 'Finance Integration', 'Gov Programs', 'Supply Chain'], icon: '🌐' },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl opacity-40" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-accent/30 text-sm font-semibold text-primary hover:border-accent/60 transition-colors duration-300"><span className="w-2 h-2 rounded-full bg-accent animate-pulse" />{t('future.badge')}</div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight"><span className="heading-gradient">{t('future.heading')}</span></h1>
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">{t('future.desc')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{t('future.roadmapTitle')}</h2>
          <p className="text-light text-base md:text-lg max-w-2xl mx-auto">{t('future.roadmapDesc')}</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 opacity-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {future.map((item, idx) => (<RoadmapCard key={item.title} item={item} index={idx} />))}
          </div>
        </div>
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { phase: t('future.current'), year: '2025', icon: '✓', status: t('future.live') },
            { phase: 'Phase 2', year: '2026', icon: '🧠', status: t('future.intelligence') },
            { phase: 'Phase 3', year: '2027', icon: '🤖', status: t('future.autonomy') },
            { phase: 'Phase 4', year: '2028', icon: '☁️', status: t('future.connectivity') },
          ].map((item) => (
            <div key={item.phase} className="text-center space-y-3 p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/30 hover:border-accent/50 hover:bg-white/60 transition-all duration-300">
              <div className="text-3xl">{item.icon}</div>
              <div><p className="text-xs font-bold text-primary uppercase tracking-wider">{item.phase}</p><p className="text-sm md:text-base font-semibold text-dark">{item.year}</p><p className="text-xs text-light mt-1">{item.status}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* INNOVATION AREAS SECTION */}
      <section className="px-6 py-20 md:py-32 border-t border-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{t('future.innovationAreas')}</h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">{t('future.innovationDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {innovationAreas.map((area, idx) => (
              <div key={area.title} className={`glass-panel p-8 md:p-10 space-y-6 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-default ${isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-3xl">{area.icon}</div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-dark">{area.title}</h3>
                </div>
                <ul className="space-y-3">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">✓</span><span className="text-sm md:text-base text-light">{feature}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-20 md:py-24">
        <div ref={ctaRef} className={`max-w-4xl mx-auto transition-all duration-700 transform ${isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="glass-panel-deep text-center space-y-6 p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">{t('future.joinEvolution')}</h2>
            <p className="text-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{t('future.joinDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300">{t('common.partnerWithUs')}</Link>
              <Link href="/solution" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300">{t('future.learnSolution')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
