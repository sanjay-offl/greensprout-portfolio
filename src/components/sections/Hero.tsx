'use client';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

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
                  <span className="text-sm font-medium text-primary">Innovating Agriculture</span>
                </div>

                {/* Heading */}
                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-tight">
                    The Future of{' '}
                    <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                      Smart Farming
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary tracking-wide">
                    AGRISOLARBOT™
                  </h2>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 max-w-lg leading-relaxed">
                  A Bluetooth-controlled, solar-powered smart farming vehicle integrating IoT, automation, and sensors for sustainable agriculture. Engineered for India's agricultural challenges.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 pt-4" role="list">
                  {['IoT-Enabled', 'Solar-Powered', 'Autonomous'].map((feature) => (
                    <div
                      key={feature}
                      className="px-4 py-2 rounded-full bg-white/40 dark:bg-white/10 border border-primary/20 backdrop-blur-md text-sm font-medium text-primary/80 dark:text-accent/90"
                      role="listitem"
                    >
                      ✓ {feature}
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
                      <span>Explore Project</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Button>
                  </Link>
                  <Link href="/features" className="w-full sm:w-auto">
                    <Button
                      variant="secondary"
                      aria-label="View detailed features and specifications"
                    >
                      View Features
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/10 mt-8">
                  {[
                    { value: '60%', label: 'Cost Reduction' },
                    { value: '40%', label: 'Labor Saved' },
                    { value: '3x', label: 'Efficiency Gain' },
                  ].map((stat) => (
                    <FadeIn key={stat.label} delay={100}>
                      <div className="text-left">
                        <p className="text-2xl sm:text-3xl font-display font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="text-xs sm:text-sm text-dark/60 dark:text-light/60 font-medium mt-1">
                          {stat.label}
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
