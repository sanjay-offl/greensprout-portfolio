'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/i18n/useTranslations';

/* ── Contact Info Card Component ─────── */
function ContactInfoCard({ item, index }: { item: { icon: string; label: string; content: React.ReactNode }; index: number }) {
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
      <div className="group relative glass-panel p-8 md:p-10 hover:scale-105 hover:-translate-y-1 cursor-default transition-all duration-500 h-full">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 from-primary to-accent pointer-events-none rounded-3xl transition-opacity duration-500" />

        {/* Content */}
        <div className="relative space-y-4">
          {/* Icon with glow */}
          <div className="relative inline-block">
            <div className="absolute -inset-3 bg-gradient-to-br rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 from-primary to-accent" />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
              {item.icon}
            </div>
          </div>

          {/* Label and content */}
          <div>
            <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-2">
              {item.label}
            </p>
            <div className="text-base md:text-lg font-medium text-dark">
              {item.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: '📧',
      label: t('contact.email'),
      content: (
        <a
          href="mailto:greensprout2k25@gmail.com"
          className="text-primary hover:text-accent transition-colors duration-200 break-all font-semibold"
        >
          greensprout2k25@gmail.com
        </a>
      ),
    },
    {
      icon: '📞',
      label: t('contact.phone'),
      content: '+91 9363982789',
    },
    {
      icon: '📍',
      label: t('contact.address'),
      content: 'PPG Institute of Technology, Saravanampatti, Coimbatore, Tamil Nadu 641035',
    },
    {
      icon: '📜',
      label: t('contact.msmeNo'),
      content: 'UDYAM-TN-03-0253916',
    },
  ];

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
            {t('contact.badge')}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
            <span className="heading-gradient">{t('contact.heroHeading')}</span>
          </h1>

          {/* Subtitle text */}
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            {t('contact.heroDesc')}
          </p>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CONTACT INFO SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
            {t('contact.getInTouch')}
          </h2>
          <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
            {t('contact.reachOut')}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((info, idx) => (
            <ContactInfoCard key={info.label} item={info} index={idx} />
          ))}
        </div>

        {/* Funding Info Card */}
        <div className="mt-12 md:mt-16">
          <div className={`glass-panel-deep overflow-hidden transition-all duration-700 ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 from-primary via-accent to-primary pointer-events-none" />

            {/* Content */}
            <div className="relative p-8 md:p-12 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary/30 text-sm font-bold text-primary mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t('contact.officiallyRecognized')}
              </div>

              <h3 className="text-xl md:text-2xl font-display font-bold text-dark">
                {t('contact.tnediiApproved')}
              </h3>

              <p className="text-sm md:text-base text-light max-w-2xl mx-auto leading-relaxed pt-2">
                {t('contact.tnediiDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* CONTACT FORM SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-20 md:py-32 border-t border-white/30 backdrop-blur-sm">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto">
          <div
            ref={formRef}
            className={`transition-all duration-700 transform ${
              isFormVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            {submitted ? (
              <div className="glass-panel-deep p-12 md:p-16 text-center space-y-6">
                {/* Success Icon */}
                <div className="relative inline-block">
                  <div className="absolute -inset-6 bg-gradient-to-br rounded-full opacity-20 blur-xl from-primary to-accent" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl shadow-lg">
                    ✅
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-dark mb-3">
                    {t('contact.messageSent')}
                  </h3>
                  <p className="text-base md:text-lg text-light leading-relaxed">
                    {t('contact.thankYou')}{' '}
                    <strong className="text-primary font-semibold">greensprout2k25@gmail.com</strong>.
                  </p>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300 mt-6"
                >
                  {t('common.sendAnother')}
                </button>
              </div>
            ) : (
              <div className="glass-panel p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-2">
                    {t('contact.sendMessage')}
                  </h2>
                  <p className="text-light text-base">
                    {t('contact.sendDesc')}
                  </p>
                </div>

                <form
                  className="flex flex-col gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-dark">
                      {t('contact.fullName')} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full bg-white/60 border border-white/40 rounded-2xl px-5 py-3.5 text-base text-dark backdrop-blur-md transition-all duration-300 placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white/80 hover:border-primary/30 hover:bg-white/70"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-dark">
                      {t('contact.emailAddress')} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/60 border border-white/40 rounded-2xl px-5 py-3.5 text-base text-dark backdrop-blur-md transition-all duration-300 placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white/80 hover:border-primary/30 hover:bg-white/70"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="block text-sm font-semibold text-dark">
                      {t('contact.inquiryType')}
                    </label>
                    <select
                      id="inquiry"
                      className="w-full bg-white/60 border border-white/40 rounded-2xl px-5 py-3.5 text-base text-dark backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white/80 hover:border-primary/30 hover:bg-white/70 appearance-none cursor-pointer"
                    >
                      <option>{t('contact.investment')}</option>
                      <option>{t('contact.research')}</option>
                      <option>{t('contact.purchase')}</option>
                      <option>{t('contact.media')}</option>
                      <option>{t('contact.general')}</option>
                      <option>{t('contact.collaboration')}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-dark">
                      {t('contact.message')} <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full bg-white/60 border border-white/40 rounded-2xl px-5 py-3.5 text-base text-dark backdrop-blur-md transition-all duration-300 placeholder:text-light/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white/80 hover:border-primary/30 hover:bg-white/70 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold py-4 rounded-2xl shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300 text-lg mt-2"
                  >
                    {t('common.sendMessage')}
                  </button>

                  {/* Alternative Contact */}
                  <div className="text-center pt-4 border-t border-white/20">
                    <p className="text-sm text-light">
                      {t('contact.preferEmail')}{' '}
                      <a
                        href="mailto:greensprout2k25@gmail.com"
                        className="text-primary hover:text-accent font-semibold transition-colors duration-200"
                      >
                        greensprout2k25@gmail.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            )}
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
              {t('contact.haveQuestions')}
            </h2>
            <p className="text-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {t('contact.questionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+919363982789"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-[0_8px_24px_-6px_rgba(47,107,60,0.35)] hover:shadow-[0_12px_32px_-8px_rgba(47,107,60,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                {t('common.callUs')}
              </a>
              <a
                href="/#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
              >
                {t('common.learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
