'use client';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import { useTranslations } from '@/i18n';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
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
    <>
      {/* SEO & GEO Meta Tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'AGRISOLARBOT™',
          description: 'Solar-powered, IoT-enabled autonomous farming vehicle',
          areaServed: { '@type': 'Country', name: 'India' },
          manufacturer: { '@type': 'Organization', name: 'GREENSPROUT' },
        })}
      </script>

      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        aria-label="Hero section - GREENSPROUT AGRISOLARBOT"
        role="region"
      >
        {/* Background Elements with Parallax Effect */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Top-left blob - accent color */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            aria-hidden="true"
          />
          {/* Bottom-right blob - primary color */}
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            aria-hidden="true"
          />
          {/* Center blob - subtle accent */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl"
            style={{ transform: `translate(calc(-50% + ${scrollY * 0.2}px), calc(-50% + ${scrollY * 0.1}px))` }}
            aria-hidden="true"
          />
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 -z-5 pointer-events-none opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="flex justify-center">
            {/* Left: Content */}
            <FadeIn delay={0}>
              <div className="space-y-8 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit animate-fade-in">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                  <span className="text-sm font-medium text-primary">{isClient ? t('hero.badge') : ''}</span>
                </div>

                {/* Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight">
                    {isClient ? t('hero.title') : ''}{' '}
                    <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                      {isClient ? t('hero.subtitle') : ''}
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 max-w-lg leading-relaxed">
                  {isClient ? t('hero.description') : ''}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-3 pt-4" role="list">
                  {[
                    { key: 'featureIoT', label: isClient ? t('hero.featureIoT') : '' },
                    { key: 'featureSolar', label: isClient ? t('hero.featureSolar') : '' },
                    { key: 'featureAuto', label: isClient ? t('hero.featureAuto') : '' },
                  ].map((feature) => (
                    <div
                      key={feature.key}
                      className="px-4 py-2 rounded-full bg-white/40 dark:bg-white/10 border border-primary/20 backdrop-blur-md text-sm font-medium text-primary/80 dark:text-accent/90"
                      role="listitem"
                    >
                      ✓ {feature.label}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/solution" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      className="w-full sm:w-auto group"
                      aria-label="Explore the complete AGRISOLARBOT project details"
                    >
                      <span>{isClient ? t('hero.learnMore') : ''}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </Link>
                  <Link href="/features" className="w-full sm:w-auto">
                    <Button
                      variant="secondary"
                      aria-label="View detailed features and specifications"
                    >
                      {isClient ? t('nav.features') : ''}
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/10 mt-8">
                  {[
                    { value: '60%', label: 'stats.costReduction' },
                    { value: '40%', label: 'stats.resourceSavings' },
                    { value: '3x', label: 'stats.efficiencyGain' },
                  ].map((stat) => (
                    <FadeIn key={stat.label} delay={100}>
                      <div className="text-left">
                        <p className="text-2xl sm:text-3xl font-display font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="text-xs sm:text-sm text-dark/60 dark:text-light/60 font-medium mt-1">
                          {isClient ? t(stat.label) : ''}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}
