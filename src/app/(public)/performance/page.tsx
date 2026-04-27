'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/i18n/useTranslations';

function MetricCard({ value, label, desc, icon, color, index }: { value: string; label: string; desc: string; icon: string; color: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="group relative p-8 md:p-10 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full cursor-pointer hover:-translate-y-1">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: color }} />
        <div className="relative space-y-6">
          <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${color}20` }}>{icon}</div>
          <div><div className="text-5xl md:text-6xl font-display font-extrabold" style={{ color }}>{value}</div><div className="text-lg font-display font-bold text-dark mt-2">{label}</div></div>
          <p className="text-dark/70 leading-relaxed text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function PerformancePage() {
  const t = useTranslations();
  const metrics = [
    { value: '40%', label: t('performance.resourceSavings'), desc: t('performance.resourceDesc'), icon: '💧', color: '#74C0FC' },
    { value: '60%', label: t('performance.costReduction'), desc: t('performance.costDesc'), icon: '💰', color: '#FFA94D' },
    { value: '3×', label: t('performance.efficiencyBoost'), desc: t('performance.effDesc'), icon: '⚡', color: '#FF6B6B' },
    { value: '86M', label: t('performance.targetFarmers'), desc: t('performance.targetDesc'), icon: '👨‍🌾', color: '#9775FA' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-primary/15 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/30 mb-8 uppercase tracking-widest">{t('performance.badge')}</div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">{t('performance.heading')}</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">{t('performance.desc')}</p>
        </div>
      </section>

      <section className="py-20 px-6"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{metrics.map((m, idx) => (<MetricCard key={m.label} value={m.value} label={m.label} desc={m.desc} icon={m.icon} color={m.color} index={idx} />))}</div></div></section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center"><h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{t('performance.fieldResults')}</h2><p className="text-lg text-dark/70 max-w-2xl mx-auto">{t('performance.fieldResultsDesc')}</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              { metric: '50%', title: t('performance.laborReduction'), desc: t('performance.laborRedDesc') },
              { metric: '0.3-0.7 acres/hr', title: t('performance.fieldCoverage'), desc: t('performance.fieldCovDesc') },
              { metric: '✓ Enhanced', title: t('performance.seedAccuracy'), desc: t('performance.seedDesc') },
              { metric: '-40%', title: t('performance.waterSavings'), desc: t('performance.waterDesc') },
              { metric: '↑ 60%', title: t('performance.opCost'), desc: t('performance.opCostDesc') },
              { metric: '₹50-80/hr', title: t('performance.opCost'), desc: t('performance.opCostDesc') },
            ].map((result, idx) => (
              <div key={`${result.title}-${idx}`} className="group glass-panel p-8 md:p-10 space-y-4 hover:scale-105 hover:shadow-lg transition-all duration-500">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary group-hover:scale-110 transition-transform duration-300">{result.metric}</div>
                <h3 className="text-xl font-display font-bold text-dark">{result.title}</h3>
                <p className="text-dark/80 leading-relaxed">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm border border-white/60 rounded-2xl p-12 md:p-16 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center space-y-6">
              <div className="text-6xl mb-4">🏛️</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">{t('performance.officialFunded')}</h2>
              <p className="text-lg text-dark/70 leading-relaxed max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('performance.fundingDesc') }} />
              <div className="bg-white/60 rounded-xl p-6 mt-8 border border-primary/20">
                <h3 className="font-display font-bold text-primary mb-4">{t('performance.fundingRecognition')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div><div className="text-3xl font-display font-bold text-primary mb-1">₹1.92L</div><div className="text-sm text-dark/70">{t('performance.tnediiGrant')}</div></div>
                  <div><div className="text-3xl font-display font-bold text-primary mb-1">MSME</div><div className="text-sm text-dark/70">{t('performance.registered')}</div></div>
                  <div><div className="text-3xl font-display font-bold text-primary mb-1">NGI TBI</div><div className="text-sm text-dark/70">{t('performance.knowledgePartner')}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl font-display font-bold text-dark mb-4">{t('performance.whyMetrics')}</h2><p className="text-lg text-dark/70">{t('performance.whyMetricsDesc')}</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💵', title: t('performance.costRedTitle'), desc: t('performance.costRedDesc') },
              { icon: '💧', title: t('performance.resourceTitle'), desc: t('performance.resourceDescShort') },
              { icon: '⏱️', title: t('performance.effTitle'), desc: t('performance.effDescShort') },
              { icon: '👥', title: t('performance.scaleTitle'), desc: t('performance.scaleDesc') },
            ].map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-gradient-to-br from-white to-accent/5 border border-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-display font-bold text-dark mb-2 text-lg">{item.title}</h3>
                <p className="text-dark/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
