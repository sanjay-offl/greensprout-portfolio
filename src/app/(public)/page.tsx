'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import { useTranslations } from '@/i18n';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-b from-background via-white/50 dark:via-dark/50 to-background">
      {/* ══ HERO SECTION ══ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-label="Hero section - GREENSPROUT AGRISOLARBOT"
        role="region"
      >
        {/* Animated background blobs with parallax */}
        <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl opacity-40 animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl opacity-40"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        <div className="max-w-6xl mx-auto w-full flex justify-center relative z-10">
          {/* Center — Text & Content */}
          <FadeIn>
            <div className="flex flex-col justify-center space-y-8 sm:space-y-10 text-center w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 w-fit mx-auto">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                <span className="text-xs sm:text-sm font-semibold text-primary dark:text-accent">
                  {isClient ? t('home.mainBadge') : ''}
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] dark:from-[#86868B] dark:to-[#6FAF5E] bg-clip-text text-transparent">
                  GREENSPROUT
                </h1>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-primary dark:text-accent tracking-wide">
                  AGRISOLARBOT™
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 max-w-2xl mx-auto leading-relaxed">
                {isClient ? t('home.mainDescription') : ''}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center">
                <Link
                  href="/solution"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-display font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  aria-label="Explore the complete AGRISOLARBOT solution"
                >
                  <span>{isClient ? t('home.exploreCTA') : ''}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 bg-white/70 dark:bg-white/10 text-primary dark:text-accent font-display font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-primary/30 dark:border-accent/30 hover:border-primary/60 dark:hover:border-accent/60 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300"
                  aria-label="View all features and specifications"
                >
                  {isClient ? t('home.viewFeatures') : ''}
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-3xl mx-auto w-full">
                {[
                  { value: '60%', label: 'stats.costReduction', color: '#FF6B6B', context: 'stats.costReductionContext' },
                  { value: '40%', label: 'stats.resourceSavings', color: '#FFA94D', context: 'stats.resourceSavingsContext' },
                  { value: '3×', label: 'stats.efficiencyGain', color: '#74C0FC', context: 'stats.efficiencyGainContext' },
                  { value: '₹1.92L', label: 'stats.govtFunded', color: '#9775FA', context: 'stats.govtFundedContext' },
                ].map((s, idx) => (
                  <FadeIn key={s.label} delay={idx * 100}>
                    <div className="text-center">
                      <p
                        className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-tight"
                        style={{ color: s.color || '#2F6B3C' }}
                      >
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-dark/60 dark:text-light/60 mt-2 leading-tight">
                        {isClient ? t(s.label) : ''}
                      </p>
                      <p className="text-xs text-dark/50 dark:text-light/50 mt-1">{isClient ? t(s.context) : ''}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-primary/30 dark:border-accent/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary dark:bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ══ QUICK FEATURES SECTION ══ */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-dark dark:text-white mb-4">
                {isClient ? t('features.platformCapabilities') : ''}
              </h2>
              <p className="text-base sm:text-lg text-dark/70 dark:text-light/75 max-w-2xl mx-auto">
                {isClient ? t('features.platformDesc') : ''}
              </p>
            </div>
          </FadeIn>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '☀️', title: 'features.solar', desc: 'features.solarDesc', geo: 'features.indiawideGeo' },
              { icon: '📱', title: 'features.esp32Control', desc: 'features.esp32Desc', geo: 'features.ruralAreasGeo' },
              { icon: '📡', title: 'features.iot', desc: 'features.iotDesc', geo: 'features.tamilNaduGeo' },
              { icon: '🚜', title: 'features.automation', desc: 'features.automationDesc', geo: 'features.allCropsGeo' },
            ].map((feature, idx) => (
              <FadeIn key={feature.title} delay={idx * 100}>
                <div className="group relative bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-primary/10 hover:border-primary/30 dark:border-white/5 dark:hover:border-accent/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:-translate-y-2">
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"
                    style={{
                      background: `linear-gradient(90deg, #2F6B3C, transparent)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-dark dark:text-white mb-2 leading-snug">
                    {isClient ? t(feature.title) : ''}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-dark/70 dark:text-light/70 leading-relaxed flex-1 mb-4">
                    {isClient ? t(feature.desc) : ''}
                  </p>

                  {/* GEO Tag */}
                  <div className="flex items-center gap-2 text-xs font-bold text-primary/70 dark:text-accent/70">
                    <span>📍 {isClient ? t(feature.geo) : ''}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT PREVIEW SECTION ══ */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-white/70 to-accent/5 dark:from-white/10 dark:to-accent/5 backdrop-blur-xl border border-primary/10 dark:border-accent/20 rounded-3xl p-8 sm:p-12 lg:p-16 hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: Content */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 w-fit">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                    <span className="text-xs sm:text-sm font-bold text-primary dark:text-accent uppercase tracking-wide">
                      {isClient ? t('home.aboutBadge') : ''}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-dark dark:text-white leading-tight">
                    {isClient ? t('home.aboutHeading') : ''}
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-dark/70 dark:text-light/75 leading-relaxed">
                    {isClient ? t('home.aboutDesc') : ''}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 group font-display font-bold text-primary dark:text-accent border-2 border-primary/30 dark:border-accent/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:border-primary/60 dark:hover:border-accent/60 hover:bg-primary/5 dark:hover:bg-accent/5 transition-all duration-300"
                    aria-label="Learn more about GREENSPROUT startup"
                  >
                    <span>{isClient ? t('home.learnMoreAbout') : ''}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

                {/* Right: Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: '🌱', val: '146M+', label: 'home.targetFarms', geo: 'home.india' },
                    { icon: '💰', val: '₹1.92L', label: 'home.govtFunding', geo: 'home.secured' },
                    { icon: '⚡', val: '40%', label: 'home.resourcesSaved', geo: 'home.perOperation' },
                    { icon: '🚀', val: '8 mos', label: 'home.devTimeline', geo: 'home.achieved' },
                  ].map((item, idx) => (
                    <FadeIn key={item.label} delay={idx * 100}>
                      <div className="group relative bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg border border-primary/10 dark:border-white/5 hover:border-primary/30 dark:hover:border-accent/30 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1">
                        {/* Top bar on hover */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

                        <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="text-2xl sm:text-3xl font-display font-black text-primary dark:text-accent mb-1">
                          {item.val}
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-dark/70 dark:text-light/70 mb-1">
                          {isClient ? t(item.label) : ''}
                        </p>
                        <p className="text-xs text-primary/60 dark:text-accent/60 font-semibold">
                          📍 {isClient ? t(item.geo) : ''}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ GOVERNMENT RECOGNITION SECTION ══ */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white/50 to-primary/5 dark:from-white/5 dark:to-primary/5 backdrop-blur-sm border-t border-b border-primary/10 dark:border-primary/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold text-primary/70 dark:text-accent/70 uppercase tracking-widest mb-4">
                {isClient ? t('home.recognition') : ''}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-dark dark:text-white">
                {isClient ? t('home.trustedByGov') : ''}
              </h2>
            </div>
          </FadeIn>

          {/* Organizations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'organizations.government', sub: 'organizations.governmentSub', icon: '🇮🇳', achieved: 'organizations.governmentAchieved' },
              { name: 'organizations.tnedii', sub: 'organizations.tnediiSub', icon: '🏛️', achieved: 'organizations.tnediiAchieved' },
              { name: 'organizations.ngi', sub: 'organizations.ngiSub', icon: '🤝', achieved: 'organizations.ngiAchieved' },
              { name: 'organizations.ppg', sub: 'organizations.ppgSub', icon: '🎓', achieved: 'organizations.ppgAchieved' },
            ].map((org, idx) => (
              <FadeIn key={org.name} delay={idx * 100}>
                <div className="group relative bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-primary/10 hover:border-primary/30 dark:border-white/5 dark:hover:border-accent/30 rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-lg">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" aria-hidden="true" />

                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {org.icon}
                  </div>

                  {/* Organization name */}
                  <h3 className="font-display font-bold text-dark dark:text-white text-sm sm:text-base mb-1">
                    {isClient ? t(org.name) : ''}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-dark/70 dark:text-light/70 mb-3 leading-snug">
                    {isClient ? t(org.sub) : ''}
                  </p>

                  {/* Achievement badge */}
                  <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent border border-primary/20 dark:border-primary/30">
                    ✓ {isClient ? t(org.achieved) : ''}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Trust Indicators */}
          <FadeIn delay={400}>
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-primary/10 dark:border-primary/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                {[
                  { icon: '📜', val: 'home.msmeReg', desc: 'home.msmeDesc' },
                  { icon: '🏆', val: 'home.innovationVoucher', desc: 'home.innovationDesc' },
                  { icon: '🤝', val: 'home.knowledgePartners', desc: 'home.partnersDesc' },
                ].map((indicator, idx) => (
                  <div key={indicator.val} className="space-y-2">
                    <div className="text-3xl sm:text-4xl">{indicator.icon}</div>
                    <p className="font-display font-bold text-dark dark:text-white text-sm sm:text-base">
                      {isClient ? t(indicator.val) : ''}
                    </p>
                    <p className="text-xs text-dark/60 dark:text-light/60">{isClient ? t(indicator.desc) : ''}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ FINAL CTA SECTION ══ */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-primary/95 to-primary dark:from-primary/80 dark:to-primary/60 rounded-3xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {/* Background blobs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" aria-hidden="true" />

              <div className="relative z-10 space-y-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-tight">
                  {isClient ? t('home.finalCTA') : ''}
                </h2>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {isClient ? t('home.finalDesc') : ''}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-primary font-display font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    {isClient ? t('home.getInTouch') : ''}
                  </Link>
                  <Link
                    href="/solution"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white text-white font-display font-bold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  >
                    {isClient ? t('home.exploreSolution') : ''}
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
