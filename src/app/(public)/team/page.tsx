'use client';
import { useEffect, useRef, useState } from 'react';

const team = [
  {
    name: 'Jaya Sounthari',
    role: 'Chief Executive Officer (CEO)',
    image: '/images/team/jaya.jpeg',
    fallbackIcon: '👩‍💼',
  },
  {
    name: 'Anand V',
    role: 'Chief Technology Officer (CTO)',
    image: '/images/team/anandh.jpeg',
    fallbackIcon: '👨‍💻',
  },
  {
    name: 'Kavi Nishathini',
    role: 'Chief Operating Officer (COO)',
    image: '/images/team/kavi.jpeg',
    fallbackIcon: '👩‍💼',
  },
  {
    name: 'Sanjay S',
    role: 'Research & Development (R&D)',
    image: '/images/team/sanjay.jpeg',
    fallbackIcon: '👨‍🔬',
  },
  {
    name: 'Abrana M',
    role: 'Marketing Lead',
    image: '/images/team/abrana.jpeg',
    fallbackIcon: '👩‍💼',
  },
];

const mentors = [
  {
    name: 'Dr. K. Selvanayaki',
    role: 'Academic Advisor',
    initials: 'KS',
    description: 'Providing strategic academic guidance on technical research, hardware deployment, and precision engineering methodology for agri-robotics.',
    icon: '🎓',
  },
  {
    name: 'Mr. Sakthi Navaneethan B',
    role: 'Industry Mentor',
    initials: 'SN',
    description: 'Supporting go-to-market strategy, supply chain, business model development, and regulatory compliance for the agri-tech sector.',
    icon: '🌱',
  },
];

/* ── Image Loading Skeleton ─────── */
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );
}

/* ── Team Member Card Component ─────── */
function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
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
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-200/40 hover:scale-[1.03] h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
          {isLoading && <ImageSkeleton />}

          {!hasError ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onLoad={() => setIsLoading(false)}
              onError={(e) => {
                setHasError(true);
                setIsLoading(false);
                (e.target as HTMLImageElement).src = '';
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-5xl opacity-60">{member.fallbackIcon}</div>
                <p className="text-xs text-light/60 font-medium">Image unavailable</p>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Green Glow Border on Hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 space-y-2 flex flex-col justify-between text-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mentor Card Component ─────── */
function MentorCard({ mentor, index }: { mentor: (typeof mentors)[0]; index: number }) {
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
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative bg-gradient-to-br from-green-50 to-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-green-200/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden p-6">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Content */}
        <div className="relative flex items-start gap-5">
          {/* Icon Container */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-3xl group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
              {mentor.icon}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-display font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
              {mentor.name}
            </h3>
            <div className="mb-3">
              <p className="text-xs font-bold tracking-widest text-primary/80 uppercase">
                {mentor.role}
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {mentor.description}
            </p>

            {/* Hover indicator */}
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
              <span className="text-xs font-medium text-primary whitespace-nowrap">Expert guidance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
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
            Meet the Visionaries
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#2F6B3C] via-[#6FAF5E] to-[#2F6B3C] bg-clip-text text-transparent">
            Meet Our Team
          </h1>

          {/* Subtitle text */}
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            Young, passionate engineers and entrepreneurs from Tamil Nadu dedicated to reimagining agriculture through innovation and sustainability.
          </p>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TEAM MEMBERS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Section intro */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">
              Leadership Team
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              Diverse talent united by a shared vision for transforming agriculture
            </p>
          </div>

          {/* Team grid with staggered animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, idx) => (
              <TeamCard key={member.name} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* MENTORS SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20 md:py-32 border-t border-white/30 backdrop-blur-sm">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Section header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary/30 text-sm font-semibold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Expert Guidance
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight bg-gradient-to-r from-[#2F6B3C] via-[#6FAF5E] to-[#2F6B3C] bg-clip-text text-transparent">
                Our Mentors
              </h2>
              <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
                Expert guidance from academia and industry shaping GREENSPROUT's strategy and technology
              </p>
            </div>

            {/* Mentors grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {mentors.map((mentor, idx) => (
                <MentorCard key={mentor.name} mentor={mentor} index={idx} />
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-20 pt-16 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">5</div>
                  <p className="text-sm md:text-base text-light">Leadership Team</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">2+</div>
                  <p className="text-sm md:text-base text-light">Expert Mentors</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">∞</div>
                  <p className="text-sm md:text-base text-light">Passion for Change</p>
                </div>
              </div>
            </div>
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
              Join Our Mission
            </h2>
            <p className="text-light text-base md:text-lg leading-relaxed">
              We're building the future of sustainable agriculture. If you're passionate about innovation and technology, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
