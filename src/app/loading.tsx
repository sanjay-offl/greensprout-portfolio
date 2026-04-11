'use client';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  // Simulate smooth progress 0 → 95, then jump to 100 on mount complete
  useEffect(() => {
    let current = 0;
    const tick = () => {
      // Slow down as we approach 95
      const step = current < 40 ? 4 : current < 70 ? 2.5 : current < 90 ? 1.2 : 0.4;
      current = Math.min(95, current + step);
      setProgress(Math.round(current));
      if (current < 95) {
        timer = setTimeout(tick, 40);
      }
    };
    let timer = setTimeout(tick, 40);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F5F5F7]"
      style={{ animation: 'gsLoad 0.3s ease both' }}
      aria-label="Loading GREENSPROUT"
      role="status"
    >
      <style>{`
        @keyframes gsLoad {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes gsSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes gsPulse {
          0%,100% { transform: scale(1); opacity:1; }
          50%      { transform: scale(1.08); opacity:0.8; }
        }
        @keyframes gsRing {
          0%   { transform: scale(0.85); opacity:0.6; }
          50%  { transform: scale(1.2);  opacity:0.1; }
          100% { transform: scale(0.85); opacity:0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ── Logo block ── */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer pulse ring */}
        <div
          className="absolute w-28 h-28 rounded-full border-2 border-[#6FAF5E]/40"
          style={{ animation: 'gsRing 2s ease-in-out infinite' }}
        />
        {/* Inner pulse ring */}
        <div
          className="absolute w-20 h-20 rounded-full border-2 border-[#2F6B3C]/30"
          style={{ animation: 'gsRing 2s ease-in-out 0.7s infinite' }}
        />
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="GREENSPROUT logo"
          width={72}
          height={72}
          className="relative z-10 rounded-full"
          style={{ animation: 'gsPulse 2.5s ease-in-out infinite' }}
        />
      </div>

      {/* ── Brand text ── */}
      <h1
        className="text-2xl font-extrabold tracking-tight mb-1"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: 'linear-gradient(135deg, #111827 0%, #2F6B3C 55%, #6FAF5E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        GREENSPROUT
      </h1>
      <p
        className="text-sm text-[#86868B] mb-10 tracking-wide"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Loading smart farming system...
      </p>

      {/* ── Progress bar + percentage ── */}
      <div className="flex flex-col items-center gap-3 w-full max-w-xs px-6">
        {/* Track */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #2F6B3C, #6FAF5E)',
              transition: 'width 0.12s ease-out',
            }}
          />
        </div>
        {/* Percentage */}
        <span
          className="text-xs font-semibold tabular-nums"
          style={{ color: '#2F6B3C', fontFamily: "'Poppins', sans-serif" }}
        >
          {progress}%
        </span>
      </div>

      {/* ── Spinning arc below ── */}
      <div className="mt-8">
        <div
          className="w-6 h-6 rounded-full border-2 border-[#E5E7EB] border-t-[#2F6B3C]"
          style={{ animation: 'gsSpin 0.8s linear infinite' }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
