'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    // New navigation detected
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;

      // Reset & start
      setWidth(0);
      setVisible(true);

      // Quickly jump to 80% to simulate loading
      const t1 = setTimeout(() => setWidth(80), 50);
      // Then finish
      const t2 = setTimeout(() => setWidth(100), 400);
      // Hide after completion
      const t3 = setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 700);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[3px] bg-gradient-to-r from-primary via-accent to-primary transition-all ease-out rounded-r-full"
      style={{
        width: `${width}%`,
        transitionDuration: width === 80 ? '350ms' : '200ms',
        opacity: width === 100 ? 0 : 1,
      }}
      aria-hidden="true"
    />
  );
}
