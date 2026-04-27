'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/i18n/useTranslations';

const VERIFY_URL =
  'https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=f5EtyyStJpb+xCX7PdUikJrzXgGgkLVDSqW0JHHtEhI=';

/* ── Animated Badge Component ─────── */
function AnimatedBadge({ index, badge }: { index: number; badge: { icon: string; title: string; sub: string } }) {
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:scale-105 hover:border-accent/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center text-center">
        {/* Glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {badge.icon}
          </div>
          <p className="font-display font-bold text-dark text-base">{badge.title}</p>
          <p className="text-light text-sm mt-2 leading-snug">{badge.sub}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Detail Card Component ─────── */
function DetailCard({ item, index }: { item: { label: string; value: string; highlight?: boolean }; index: number }) {
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
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        className={`rounded-2xl px-6 py-5 border backdrop-blur-sm transition-all duration-300 ${
          item.highlight
            ? 'bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-accent/40 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 hover:scale-105'
            : 'bg-white/60 border-gray-200 hover:bg-white hover:border-accent/30 hover:shadow-md'
        }`}
      >
        <p className="text-xs text-light uppercase tracking-wider font-semibold mb-2">
          {item.label}
        </p>
        <p
          className={`font-display font-bold transition-colors duration-300 ${
            item.highlight ? 'text-primary text-xl' : 'text-dark text-base'
          }`}
        >
          {item.value}
        </p>
      </div>
    </div>
  );
}

export default function GovernmentProofPage() {
  const t = useTranslations();

  const trustBadges = [
    { icon: '🇮🇳', title: t('govtProof.govtOfIndia'), sub: t('organizations.governmentSub') },
    { icon: '🏛️', title: 'TN-EDII', sub: t('govtProof.ivp') },
    { icon: '🤝', title: 'NGI TBI', sub: t('govtProof.knowledgePartner') },
    { icon: '📜', title: 'UDYAM', sub: 'UDYAM-TN-03-0253916' },
  ];

  const msmeDetails = [
    { label: t('govtProof.regNo'), value: 'UDYAM-TN-03-0253916', highlight: true },
    { label: t('govtProof.enterpriseType'), value: t('govtProof.microEnterprise') },
    { label: t('govtProof.majorActivity'), value: t('govtProof.manufacturing') },
    { label: t('govtProof.enterpriseName'), value: 'GREENSPROUT' },
    { label: t('govtProof.dateOfReg'), value: '24/02/2025' },
    { label: t('govtProof.district'), value: 'Coimbatore, Tamil Nadu' },
    { label: t('govtProof.hostInstitution'), value: 'PPG Institute of Technology' },
  ];

  const tnediiDetails = [
    { label: t('govtProof.program'), value: t('govtProof.ivp') },
    { label: t('govtProof.refNo'), value: 'Roc. No. II-01/44/2022/EDII' },
    { label: t('govtProof.totalGrant'), value: '₹1,92,000', highlight: true },
    { label: t('govtProof.firstInstallment'), value: '₹76,800' },
    { label: t('govtProof.secondInstallment'), value: '₹61,440' },
    { label: t('govtProof.thirdInstallment'), value: '₹15,360' },
    { label: t('govtProof.companyContribution'), value: '₹38,400' },
    { label: t('govtProof.knowledgePartner'), value: 'Nehru Group of Institution TBI' },
    { label: t('govtProof.projectDuration'), value: '08 Months' },
    { label: t('govtProof.approvalDate'), value: '06.05.2025' },
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
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl opacity-40"
            style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Subtitle badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-accent/30 text-sm font-semibold text-primary hover:border-accent/60 hover:bg-white/70 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t('govtProof.badge')}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#2F6B3C] via-[#6FAF5E] to-[#2F6B3C] bg-clip-text text-transparent">
            {t('govtProof.heading')}
          </h1>

          {/* Subtitle text */}
          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            {t('govtProof.desc')}
          </p>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TRUST BADGES SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustBadges.map((badge, idx) => (
            <AnimatedBadge key={badge.title} badge={badge} index={idx} />
          ))}
        </div>
      </section>

      <div className="space-y-16 px-6 pb-20 md:pb-32 max-w-6xl mx-auto">
        {/* ══════════════════════════════════════════════════════════════ */}
        {/* MSME CARD SECTION */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t('govtProof.msmeMinistry')}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
                {t('govtProof.udyamCert')}
              </h2>
            </div>
            <a
              href={VERIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-display font-bold px-6 py-3.5 rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 shadow-sm whitespace-nowrap text-sm"
            >
              {t('govtProof.verifyCert')}
            </a>
          </div>

          {/* MSME Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {msmeDetails.map((item, idx) => (
              <DetailCard key={item.label} item={item} index={idx} />
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* TN-EDII CARD SECTION */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section className="space-y-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-blue-100/60 backdrop-blur-sm border border-blue-300/40 text-xs font-bold text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                {t('govtProof.tnediiInstitute')}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">
                {t('govtProof.ivp')}
              </h2>
            </div>
          </div>

          {/* TN-EDII Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tnediiDetails.map((item, idx) => (
              <DetailCard key={item.label} item={item} index={idx} />
            ))}
          </div>

          {/* Funding Progress Section */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-lg">
                💰
              </div>
              <h3 className="text-xl font-display font-bold text-dark">{t('govtProof.fundingProgress')}</h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: t('govtProof.firstInstallment'),
                  amount: '₹76,800 (50%)',
                  pct: 100,
                  status: t('govtProof.released'),
                  color: 'from-primary to-accent',
                  statusColor: 'text-green-600',
                },
                {
                  label: t('govtProof.secondInstallment'),
                  amount: '₹61,440 (40%)',
                  pct: 0,
                  status: t('govtProof.pending'),
                  color: 'from-accent/60 to-accent/40',
                  statusColor: 'text-yellow-600',
                },
                {
                  label: t('govtProof.thirdInstallment'),
                  amount: '₹15,360 (10%)',
                  pct: 0,
                  status: t('govtProof.onCompletion'),
                  color: 'from-gray-300 to-gray-200',
                  statusColor: 'text-gray-600',
                },
              ].map((bar) => (
                <div key={bar.label} className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-display font-bold text-dark text-sm">{bar.label}</p>
                      <p className="text-xs text-light mt-0.5">{bar.amount}</p>
                    </div>
                    <span className={`text-xs font-bold ${bar.statusColor}`}>{bar.status}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${bar.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${bar.pct}%`,
                        transitionDelay: '300ms',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Funding Summary */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: t('govtProof.totalGrantLabel'), value: '₹1,92,000', icon: '💵' },
                { label: t('govtProof.companyContribLabel'), value: '₹38,400', icon: '🤝' },
                { label: t('govtProof.projectDurationLabel'), value: '08 Months', icon: '⏱️' },
              ].map((item) => (
                <div key={item.label} className="text-center py-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs text-light uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-display font-bold text-primary text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* CTA SECTION */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <section>
          <div className="relative bg-gradient-to-br from-primary via-[#3A7B47] to-accent rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            {/* Background gradient blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
                {t('govtProof.govtBacked')}
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
                {t('govtProof.govtBackedDesc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={VERIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-display font-bold rounded-full hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl text-base"
                >
                  {t('govtProof.verifyPortal')}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-display font-bold rounded-full hover:bg-white/30 hover:border-white/60 hover:-translate-y-1 transition-all duration-300 text-base"
                >
                  {t('govtProof.getInTouch')}
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-12 border-t border-white/20 flex flex-wrap justify-center gap-6 text-sm font-semibold text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>{t('govtProof.msmeRegistered')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>{t('govtProof.govtFunded')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <span>{t('govtProof.institutionBacked')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
