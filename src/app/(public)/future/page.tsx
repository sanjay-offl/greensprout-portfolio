import Link from 'next/link';

const future = [
  {
    icon: '🧠',
    phase: 'Phase 2 — 2026',
    title: 'AI & Computer Vision',
    desc: 'Integrate machine learning models to identify crop diseases, predict yield, and auto-adjust treatment protocols without human input. Camera-based field mapping.',
  },
  {
    icon: '🤖',
    phase: 'Phase 3 — 2027',
    title: 'Full GPS Autonomy',
    desc: 'Upgrade from Bluetooth remote control to full GPS + LiDAR-based autonomous navigation for completely hands-free 24/7 field operations without connectivity.',
  },
  {
    icon: '☁️',
    phase: 'Phase 4 — 2028',
    title: 'Cloud IoT Dashboard',
    desc: 'Farm-wide cloud telemetry platform allowing farmers to manage fleets of AGRISOLARBOT units, track crop analytics, and receive AI-generated recommendations.',
  },
  {
    icon: '🌐',
    phase: 'Phase 5 — 2029',
    title: 'Smart Farming Ecosystem',
    desc: 'A complete end-to-end agri-tech platform — from soil to market — connecting farmers, markets, financiers, and government programs through one smart dashboard.',
  },
];

export default function FuturePage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <div className="inline-block bg-accent/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-accent/20 mb-6">
          🚀 Roadmap & Vision
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          Future Scope
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Our phased roadmap from a Bluetooth-controlled prototype to a fully autonomous, AI-powered farming ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {future.map((f) => (
          <div key={f.title} className="card-base hover:border-primary/30 group flex flex-col gap-5 p-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <div>
                <p className="text-xs text-accent font-bold uppercase tracking-widest mb-1">{f.phase}</p>
                <h3 className="text-xl font-display font-bold text-dark">{f.title}</h3>
              </div>
            </div>
            <p className="text-dark/70 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-14 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Join Our Journey</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          We are actively seeking investors, research partners, and farming communities to co-build the future of agriculture with us.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary font-display font-bold px-8 py-4 rounded-full hover:bg-background hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Partner With Us →
        </Link>
      </div>
    </main>
  );
}
