'use client';
import { useEffect, useRef, useState } from 'react';

const team = [
  {
    name: 'Jaya Sounthari A',
    role: 'Chief Executive Officer',
    initials: 'JS',
    color: 'from-emerald-500 to-teal-600',
    desc: 'Visionary leader driving GREENSPROUT\'s mission and strategy.',
    icon: '🚀',
  },
  {
    name: 'Anand V',
    role: 'Chief Technology Officer',
    initials: 'AV',
    color: 'from-blue-500 to-indigo-600',
    desc: 'Engineering lead for AGRISOLARBOT robotics and IoT systems.',
    icon: '⚙️',
  },
  {
    name: 'Kavi Nishathini S',
    role: 'Chief Operating Officer',
    initials: 'KN',
    color: 'from-purple-500 to-violet-600',
    desc: 'Overseeing operations, compliance, and project timelines.',
    icon: '📊',
  },
  {
    name: 'Sanjay S',
    role: 'Head of R&D',
    initials: 'SS',
    color: 'from-orange-500 to-red-500',
    desc: 'Leading hardware development and automation research.',
    icon: '🔬',
  },
  {
    name: 'Abrana M',
    role: 'Marketing & Outreach',
    initials: 'AM',
    color: 'from-pink-500 to-rose-600',
    desc: 'Brand strategy, stakeholder communication, and growth.',
    icon: '📢',
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

/* ── Team Member Card Component ─────── */
function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
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
      className={`group relative transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glassmorphism card with anti-gravity effect */}
      <div className="relative h-full glass-panel hover:scale-105 hover:-translate-y-1 cursor-pointer overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-primary to-accent pointer-events-none rounded-3xl" />

        {/* Content container */}
        <div className="relative flex flex-col items-center text-center gap-6 p-8 md:p-10">
          {/* Avatar container with hover effect */}
          <div className="relative group/avatar">
            {/* Glowing halo effect */}
            <div className="absolute -inset-3 bg-gradient-to-br rounded-full opacity-0 group-hover/avatar:opacity-40 blur-lg transition-opacity duration-500 from-primary to-accent" />

            {/* Avatar circle */}
            <div
              className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${member.color} p-1.5 shadow-[0_20px_40px_-10px_rgba(47,107,60,0.3)] transition-all duration-500 group-hover/avatar:shadow-[0_30px_60px_-15px_rgba(47,107,60,0.5)]`}
            >
              <div className="w-full h-full rounded-full bg-white/95 flex items-center justify-center backdrop-blur-xl">
                <div className="text-center">
                  <div className="text-2xl mb-1">{member.icon}</div>
                  <span className="text-sm font-display font-bold text-dark/50">{member.initials}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-3">
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark leading-snug">
              {member.name}
            </h3>
            <div className="inline-block">
              <p className="text-xs md:text-sm font-bold tracking-widest text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text uppercase">
                {member.role}
              </p>
            </div>
            <p className="text-sm md:text-base text-light leading-relaxed pt-2">{member.desc}</p>
          </div>

          {/* Bottom accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
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
      <div className="group relative glass-panel overflow-hidden hover:scale-102 hover:-translate-y-1 transition-all duration-500">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary to-accent pointer-events-none rounded-3xl transition-opacity duration-500" />

        {/* Content */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
          {/* Avatar section */}
          <div className="flex-shrink-0 group/avatar">
            {/* Glowing circle halo */}
            <div className="absolute -inset-4 bg-gradient-to-br rounded-2xl opacity-0 group-hover/avatar:opacity-30 blur-xl transition-opacity duration-500 from-primary via-accent to-primary" />

            {/* Avatar card */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_15px_35px_-10px_rgba(47,107,60,0.4)] flex items-center justify-center text-4xl group-hover/avatar:shadow-[0_25px_50px_-15px_rgba(47,107,60,0.6)] transition-all duration-500">
              <span className="text-5xl">{mentor.icon}</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-display font-bold text-dark mb-2 leading-snug">
              {mentor.name}
            </h3>
            <div className="inline-block mb-4">
              <p className="text-xs md:text-sm font-bold tracking-widest text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text uppercase">
                {mentor.role}
              </p>
            </div>
            <p className="text-sm md:text-base text-light leading-relaxed">
              {mentor.description}
            </p>

            {/* Hover indicator */}
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex-1 h-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full" />
              <span className="text-xs font-medium text-accent">Expert guidance</span>
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
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            <span className="heading-gradient">Meet Our Team</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">
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
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">5+</div>
                  <p className="text-sm md:text-base text-light">Team Members</p>
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
