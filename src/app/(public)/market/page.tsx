'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/i18n/useTranslations';

function StatCard({ value, label, icon, color, index }: { value: string; label: string; icon: string; color: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: color }} />
        <div className="relative text-center space-y-4">
          <div className="text-5xl">{icon}</div>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold" style={{ color }}>{value}</h3>
          <p className="text-dark/70 font-semibold">{label}</p>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${100 + index * 100}ms` }}>
      <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-xl font-display font-bold text-dark mb-3">{title}</h3>
        <p className="text-dark/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function MarketPage() {
  const t = useTranslations();
  const stats = [
    { value: '146M+', label: t('market.activeFarms'), icon: '🏡', color: '#FF6B6B' },
    { value: '86%', label: t('market.smallScale'), icon: '👨‍🌾', color: '#FFA94D' },
    { value: '$480B', label: t('market.agriMarket'), icon: '📈', color: '#74C0FC' },
    { value: '7%', label: t('market.annualGrowth'), icon: '🚀', color: '#9775FA' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-primary/15 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/30 mb-8 uppercase tracking-widest">{t('market.badge')}</div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">{t('market.heading')}</h1>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto leading-relaxed">{t('market.desc')}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, idx) => (<StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} color={stat.color} index={idx} />))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark mb-4">{t('market.strategy')}</h2>
            <p className="text-lg text-dark/70">{t('market.strategyDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InsightCard icon="🎯" title={t('market.targetMarket')} desc={t('market.targetDesc')} index={0} />
            <InsightCard icon="📍" title={t('market.geoFocus')} desc={t('market.geoDesc')} index={1} />
            <InsightCard icon="🌍" title={t('market.globalAmbition')} desc={t('market.globalDesc')} index={2} />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">{t('market.revolutionCTA')}</h2>
            <p className="text-lg text-dark/70 leading-relaxed">{t('market.revolutionDesc')}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {[t('market.govtFunded'), t('market.realWorldTested'), t('market.readyToScale')].map((label) => (
                <div key={label} className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200"><span className="text-2xl">✓</span><span className="font-semibold text-dark">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
