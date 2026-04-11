import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-panel p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
