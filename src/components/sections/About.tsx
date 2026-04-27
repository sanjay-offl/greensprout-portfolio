'use client';
import { useEffect, useRef, useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';

interface MissionItem {
  icon: string;
  title: string;
  description: string;
  geo?: string;
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const missionItems: MissionItem[] = [
    {
      icon: '🌱',
      title: 'Sustainable Innovation',
      description: 'Reducing carbon footprint while maximizing agricultural output through solar-powered automation.',
      geo: 'India-focused solutions',
    },
    {
      icon: '🤖',
      title: 'Smart Automation',
      description: 'IoT-enabled systems that make precision farming accessible to every farmer, regardless of scale.',
      geo: 'Rural Tamil Nadu',
    },
    {
      icon: '⚡',
      title: 'Energy Independence',
      description: 'Solar-powered operations eliminate dependency on grid electricity, reducing operational costs.',
      geo: 'Nationwide adoption',
    },
    {
      icon: '👥',
      title: 'Multipurpose Efficiency',
      description: 'Combining five different piece of farming machinery into a single, highly efficient automated platform.',
      geo: 'Agricultural sector',
    },
  ];

  const statistics = [
    { number: '60%', label: 'Cost Reduction', context: 'vs. traditional farming' },
    { number: '40%', label: 'Water Savings', context: 'per operation cycle' },
    { number: '3x', label: 'Efficiency', context: 'crop monitoring improvement' },
    { number: '₹1.92L', label: 'Govt. Funded', context: 'R&D support' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % missionItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [missionItems.length]);

  return (
    <>
      {/* SEO & Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GREENSPROUT',
          description: 'Agritech startup focused on sustainable, automated, solar-powered farming solutions',
          areaServed: { '@type': 'Country', name: 'India' },
          url: 'https://greensprout.io',
          logo: 'https://greensprout.io/logo.png',
          sameAs: ['https://twitter.com/greensprout', 'https://linkedin.com/company/greensprout'],
        })}
      </script>

      <section
        ref={sectionRef}
        id="about"
        className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-label="About GREENSPROUT"
        role="region"
      >
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* Gradient blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" aria-hidden="true" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 w-fit mx-auto">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
                <span className="text-sm font-medium text-primary">About Our Mission</span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight mb-6">
                Revolutionizing{' '}
                <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Indian Agriculture
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 leading-relaxed mb-4">
                We are a high-tech agritech startup focused on elevating traditional agriculture. We build sustainable, automated, solar-powered solutions like AGRISOLARBOT to overcome the limitations of manual farming and optimize efficiency globally.
              </p>

              {/* GEO indicator */}
              <p className="text-sm font-semibold text-primary/70 flex items-center justify-center gap-2">
                <span>📍 Headquartered in Tamil Nadu, India</span>
              </p>
            </div>
          </FadeIn>

          {/* Mission Grid - 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 sm:mb-28">
            {missionItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div
                  className={`group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeIndex === index
                      ? 'bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 shadow-lg'
                      : 'bg-white/40 dark:bg-white/5 border border-primary/10 hover:border-primary/30 hover:bg-white/60 dark:hover:bg-white/10'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeIndex === index}
                  aria-label={`${item.title}: ${item.description}`}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-dark dark:text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-dark/70 dark:text-light/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* GEO tag */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary/60">
                    <span>📌 {item.geo}</span>
                  </div>

                  {/* Active indicator */}
                  {activeIndex === index && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl" aria-hidden="true" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Core Values Section */}
          <div className="bg-gradient-to-br from-white/60 to-accent/5 dark:from-dark/50 dark:to-primary/10 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 sm:p-12 lg:p-16 mb-20 sm:mb-28">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Left: Core Values */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark dark:text-white mb-8">
                    Our Core Values
                  </h3>

                  <ul className="space-y-6" role="list">
                    {[
                      {
                        title: 'Innovation First',
                        description: 'We pioneer cutting-edge solutions at the intersection of agriculture and technology',
                      },
                      {
                        title: 'Sustainability',
                        description: 'Every solution prioritizes environmental impact and long-term viability',
                      },
                      {
                        title: 'Farmer-Centric',
                        description: "Our products are designed with farmers' needs and constraints in mind",
                      },
                      {
                        title: 'Scalability',
                        description: 'Solutions that work for small holdings and large commercial farms',
                      },
                    ].map((value, idx) => (
                      <li key={value.title} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }} role="listitem">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-dark dark:text-white mb-1">
                            {value.title}
                          </h4>
                          <p className="text-sm text-dark/70 dark:text-light/70 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Statistics */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark dark:text-white mb-8">
                    Impact by Numbers
                  </h3>

                  <div className="space-y-6">
                    {statistics.map((stat, idx) => (
                      <FadeIn key={stat.label} delay={idx * 150}>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/40 transition-colors">
                          <div className="text-3xl sm:text-4xl font-display font-black text-primary mb-2">
                            {stat.number}
                          </div>
                          <p className="font-bold text-dark dark:text-white text-sm mb-1">
                            {stat.label}
                          </p>
                          <p className="text-xs text-dark/60 dark:text-light/60">
                            {stat.context}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Vision Statement */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-dark dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-dark/70 dark:text-light/80 leading-relaxed mb-4">
                To create a world where farming is sustainable, profitable, and accessible to every farmer, regardless of land size or resources. Through technology and innovation, we're building a future where agriculture becomes a precision science.
              </p>
              <p className="text-sm font-semibold text-primary flex items-center justify-center gap-2 flex-wrap">
                <span>🌍 Global Vision</span>
                <span>•</span>
                <span>📍 India-First Implementation</span>
                <span>•</span>
                <span>🚀 Scalable Growth</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
