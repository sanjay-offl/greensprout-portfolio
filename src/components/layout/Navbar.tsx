'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/problem', label: 'Problem' },
  { href: '/solution', label: 'Solution' },
  { href: '/features', label: 'Features' },
  { href: '/technology', label: 'Tech' },
  { href: '/team', label: 'Team' },
  { href: '/government-proof', label: 'Govt Proof' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on navigation
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

      {/* Desktop Nav */}
      <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-primary bg-primary/8'
                  : 'text-dark/70 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.label}
              {/* Active underline indicator */}
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
          Contact Us
        </Link>
      </nav>

      {/* Mobile Button */}
      <button
        className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-dark hover:border-primary/40 active:scale-90 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`text-xl transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}>
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-full right-0 left-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${
          menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="p-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'text-primary bg-primary/8 font-semibold'
                    : 'text-dark hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 bg-primary text-white text-center font-display font-semibold px-5 py-3 rounded-xl hover:bg-accent active:scale-95 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
