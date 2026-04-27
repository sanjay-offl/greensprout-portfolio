'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations, useLanguage } from '@/i18n';

const navLinksKeys = [
  { href: '/about', key: 'nav.about' },
  { href: '/problem', key: 'nav.problem' },
  { href: '/solution', key: 'nav.solution' },
  { href: '/features', key: 'nav.features' },
  { href: '/technology', key: 'nav.technology' },
  { href: '/team', key: 'nav.team' },
  { href: '/government-proof', key: 'nav.governmentProof' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const { language, toggleLanguage } = useLanguage();

  // Ensure we only render client‑side content after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Toggle background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      role="banner"
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transition-all duration-500 rounded-2xl px-5 py-3 flex justify-between items-center ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg shadow-black/5'
          : 'bg-white/40 backdrop-blur-sm border border-white/60'
      }`}
    >
      {/* Logo */}
      <Link href="/" aria-label="GREENSPROUT Home" className="flex items-center gap-2.5 group active:scale-95 transition-transform duration-150">
        <div className="w-9 h-9 relative shrink-0">
          <Image src="/images/logo.png" alt="GREENSPROUT Logo" fill className="object-contain" priority />
        </div>
        <span className="font-display font-bold text-primary text-lg tracking-tight group-hover:text-accent transition-colors hidden sm:block">
          GREENSPROUT
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
        {navLinksKeys.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 ${
                isActive ? 'text-primary bg-primary/8' : 'text-dark/70 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {isClient ? t(link.key) : ''}
              {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="ml-3 bg-primary text-white text-sm font-display font-semibold px-5 py-2 rounded-full shadow-md shadow-primary/25 hover:bg-accent hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
        >
          {isClient ? t('nav.contact') : ''}
        </Link>
        {/* Language toggle – desktop */}
        {isClient && (
          <button
            onClick={toggleLanguage}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-dark text-xs font-bold hover:border-primary/40 active:scale-90 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${language === 'ta' ? 'English' : 'Tamil'}`}
            title={`Current: ${language === 'ta' ? 'Tamil' : 'English'}`}
          >
            {language === 'ta' ? 'த' : 'E'}
          </button>
        )}
      </nav>

      {/* Mobile Controls */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Language toggle – mobile */}
        {isClient && (
          <button
            onClick={toggleLanguage}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-dark text-xs font-bold hover:border-primary/40 active:scale-90 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${language === 'ta' ? 'English' : 'Tamil'}`}
            title={`Current: ${language === 'ta' ? 'Tamil' : 'English'}`}
          >
            {language === 'ta' ? 'த' : 'E'}
          </button>
        )}
        {/* Menu button */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-dark hover:border-primary/40 active:scale-90 transition-all duration-150"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`text-xl transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}>
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2 py-4 px-6">
            {navLinksKeys.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 ${
                    isActive ? 'text-primary bg-primary/8 font-semibold' : 'text-dark hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {isClient ? t(link.key) : ''}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 bg-primary text-white text-center font-display font-semibold px-5 py-3 rounded-xl hover:bg-accent active:scale-95 transition-all duration-200"
            >
              {isClient ? t('nav.contact') : ''}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
