'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ── SAFE Gallery Data - Separated Images & Video ─────── */
const images = [
  {
    title: '3D Model - Full Assembly',
    src: '/images/gallery/model1.jpeg',
  },
  {
    title: '3D Model - Exploded View',
    src: '/images/gallery/model2.jpeg',
  },
  {
    title: '3D Model - Frame Design',
    src: '/images/gallery/model3.jpeg',
  },
];

const video = {
  title: 'Production Demo',
  src: '/images/gallery/production.mp4',
};


function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof images)[0];
  index: number;
  onClick: () => void;
}) {
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
      <div
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03] h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden flex-shrink-0">
          <img
            key={item.src}
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/fallback.png';
            }}
          />
          {/* Magnify Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-2xl shadow-lg">
                🔍
              </div>
            </div>
          </div>

          {/* Border Highlight */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </div>

        {/* Card Footer */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
          <h3 className="text-lg md:text-xl font-display font-bold text-dark group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {item.title}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightboxModal({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalItems,
}: {
  item: (typeof images)[0];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalItems: number;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 text-white hover:text-accent transition-colors duration-300 font-display font-bold text-lg flex items-center gap-2 group"
          aria-label="Close lightbox"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">ESC</span>
          ✕
        </button>

        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative bg-gray-100">
            <img
              key={item.src}
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/fallback.png';
              }}
            />
          </div>

          <div className="bg-white p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-2">
              {item.title}
            </h2>
            <div className="text-sm text-light/60">
              {currentIndex + 1} of {totalItems}
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === totalItems - 1}
            className="pointer-events-auto p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl opacity-40" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-accent/30 text-sm font-semibold text-primary hover:border-accent/60 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Visual Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">
            Project Gallery
          </h1>

          <p className="text-lg md:text-xl text-light max-w-2xl mx-auto leading-relaxed mb-8">
            Prototype builds, field tests, 3D designs, and development milestones of AGRISOLARBOT showcasing innovation in sustainable agriculture.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
              3D Models & Demo
            </h2>
            <p className="text-light text-base md:text-lg max-w-2xl mx-auto">
              Click any item to view full size. Use arrow keys or buttons to navigate the gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {images?.length > 0 ? (
              images.map((item, idx) => (
                <GalleryCard
                  key={`image-${item.src}-${idx}`}
                  item={item}
                  index={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-light text-lg">No gallery items available</p>
              </div>
            )}
          </div>

          {/* Large Centered Video Section */}
          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
              {/* Video Container */}
              <div className="aspect-video bg-black">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>

              {/* Video Title */}
              <div className="p-6 text-center bg-white border-t border-gray-200">
                <h3 className="text-xl md:text-2xl font-display font-bold text-dark">
                  {video.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 bg-white/50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-center space-y-6">
            <div className="text-5xl opacity-40">📸</div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark">
              More Content Coming Soon
            </h3>
            <p className="text-light text-base md:text-lg leading-relaxed">
              Additional models and videos will be added as we progress. Stay tuned for more updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-display font-bold text-base shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Get Notified
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-base hover:bg-white/60 hover:border-primary/50 transition-all duration-300"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedImageIndex !== null && images[selectedImageIndex] && (
        <LightboxModal
          item={images[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          currentIndex={selectedImageIndex}
          totalItems={images.length}
        />
      )}
    </main>
  );
}
