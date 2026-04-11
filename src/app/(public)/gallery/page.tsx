import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const placeholder = Array(6).fill(null);
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          Project Gallery
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Prototype builds, field tests, and development milestones of AGRISOLARBOT.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-12 rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
        <Image
          src="/images/agrisolarbot.png"
          width={1400}
          height={700}
          alt="AGRISOLARBOT prototype"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Placeholder grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholder.map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-4xl opacity-40">📸</span>
            <p className="text-light text-sm font-medium">Image {i + 1} — Coming Soon</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center glass-panel p-8 max-w-2xl mx-auto">
        <p className="text-dark/70">
          Development images and field testing videos will be added as we progress through the 8-month project timeline. Follow us or check back soon.
        </p>
        <Link href="/contact" className="inline-block mt-4 text-primary font-semibold hover:text-accent transition-colors">
          Get notified → Contact us
        </Link>
      </div>
    </main>
  );
}
