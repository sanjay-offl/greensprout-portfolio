import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '60%', label: 'Cost Reduction' },
  { value: '40%', label: 'Resource Savings' },
  { value: '3×', label: 'Efficiency Gain' },
  { value: '₹1.92L', label: 'Govt. Funded' },
];

const badges = [
  '🏛️ TN-EDII Innovation Voucher',
  '📜 MSME Registered',
  '🤝 NGI TBI Knowledge Partner',
];

export default function Home() {
  return (
    <main>
      {/* ╔═══════════════════╗ */}
      {/* ║      HERO          ║ */}
      {/* ╚═══════════════════╝ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Ambient background blobs */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="space-y-8 z-10">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-xs font-medium bg-white border border-gray-200 text-dark/70 px-3 py-1.5 rounded-full shadow-sm">
                  {b}
                </span>
              ))}
            </div>

            {/* Wordmark + logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative shrink-0">
                <Image src="/images/logo.png" alt="GREENSPROUT logo" fill className="object-contain" priority />
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-none bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent">
                GREEN<br />SPROUT
              </h1>
            </div>

            <div>
              <p className="text-xl md:text-2xl font-display font-semibold text-primary tracking-wide">
                AGRISOLARBOT™
              </p>
              <p className="text-base text-light mt-1">Bluetooth Controlled Smart Farming Vehicle</p>
            </div>

            <p className="text-lg text-dark/70 max-w-xl leading-relaxed">
              A solar-powered, IoT-enabled autonomous farming vehicle that eliminates labor gaps, slashes costs by 60%, and revolutionizes small-scale agriculture across India.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solution"
                className="bg-primary text-white font-display font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:bg-accent hover:-translate-y-1 transition-all duration-300 text-base"
              >
                Explore Project →
              </Link>
              <Link
                href="/features"
                className="bg-white text-primary font-display font-semibold px-8 py-4 rounded-full border border-primary/20 shadow-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-md transition-all duration-300 text-base"
              >
                View Features
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-display font-extrabold text-primary">{s.value}</p>
                  <p className="text-xs text-light mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="relative z-10">
            {/* Glow halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-[2.5rem] blur-3xl scale-90 -z-10" />
            {/* Image card */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-white rounded-[2rem] p-3 shadow-2xl shadow-primary/10 animate-float">
              <Image
                src="/images/agrisolarbot.png"
                width={760}
                height={560}
                alt="AGRISOLARBOT solar-powered smart farming vehicle prototype"
                priority
                className="w-full h-auto rounded-[1.5rem] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-full px-5 py-2.5 flex items-center gap-2 whitespace-nowrap">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-dark">Active Prototype · Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════╗ */}
      {/* ║  QUICK FEATURES    ║ */}
      {/* ╚═══════════════════╝ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '☀️', title: 'Solar Powered', desc: '12V 50W panel, zero fuel' },
              { icon: '📱', title: 'Bluetooth Control', desc: 'Android app navigation' },
              { icon: '📡', title: 'IoT Sensors', desc: 'Real-time soil data' },
              { icon: '🚜', title: 'Fully Automated', desc: 'Plough, sow, spray' },
            ].map((f) => (
              <div key={f.title} className="card-base hover:border-primary/30 text-center flex flex-col items-center gap-3">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="font-display font-bold text-dark text-sm">{f.title}</h3>
                <p className="text-light text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════╗ */}
      {/* ║  ABOUT PREVIEW     ║ */}
      {/* ╚═══════════════════╝ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  About the Startup
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent leading-tight tracking-tight">
                  Innovating Agriculture from the Ground Up
                </h2>
                <p className="text-dark/70 text-lg leading-relaxed">
                  GREENSPROUT is an innovative agri-tech startup developing solar-powered, Bluetooth-controlled smart farming vehicles that automate agricultural processes efficiently and economically.
                </p>
                <Link
                  href="/about"
                  className="inline-block font-display font-semibold text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌱', val: '146M+', label: 'Target Farms India' },
                  { icon: '💰', val: '₹1.92L', label: 'Govt. Funding Secured' },
                  { icon: '⚡', val: '40%', label: 'Resource Saved' },
                  { icon: '🚀', val: '8 mos', label: 'Project Duration' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-display font-extrabold text-primary">{item.val}</div>
                    <div className="text-xs text-light mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════╗ */}
      {/* ║  GOVT TRUST STRIP  ║ */}
      {/* ╚═══════════════════╝ */}
      <section className="py-14 px-6 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold text-light uppercase tracking-widest mb-6">Officially Recognized & Supported By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: 'Government of India', sub: 'Ministry of MSME', icon: '🇮🇳' },
              { name: 'TN-EDII', sub: 'Innovation Voucher Program', icon: '🏛️' },
              { name: 'NGI TBI', sub: 'Knowledge Partner', icon: '🤝' },
              { name: 'PPG Institute', sub: 'Technology Host', icon: '🎓' },
            ].map((org) => (
              <div key={org.name} className="text-center">
                <div className="text-3xl mb-1">{org.icon}</div>
                <p className="font-display font-bold text-dark text-sm">{org.name}</p>
                <p className="text-xs text-light">{org.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
