import Link from 'next/link';

const VERIFY_URL =
  'https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=f5EtyyStJpb+xCX7PdUikJrzXgGgkLVDSqW0JHHtEhI=';

const msmeDetails = [
  { label: 'Registration Number', value: 'UDYAM-TN-03-0253916', highlight: true },
  { label: 'Enterprise Type', value: 'Micro Enterprise' },
  { label: 'Major Activity', value: 'Manufacturing' },
  { label: 'Enterprise Name', value: 'GREENSPROUT' },
  { label: 'Date of Registration', value: '24/02/2025' },
  { label: 'District', value: 'Coimbatore, Tamil Nadu' },
  { label: 'Host Institution', value: 'PPG Institute of Technology' },
];

const tnediiDetails = [
  { label: 'Program', value: 'Innovation Voucher Program (IVP)' },
  { label: 'Reference Number', value: 'Roc. No. II-01/44/2022/EDII' },
  { label: 'Total Grant Sanctioned', value: '₹1,92,000', highlight: true },
  { label: '1st Installment (50%)', value: '₹76,800' },
  { label: '2nd Installment (40%)', value: '₹61,440' },
  { label: '3rd Installment (10%)', value: '₹15,360' },
  { label: 'Company Contribution', value: '₹38,400' },
  { label: 'Knowledge Partner', value: 'Nehru Group of Institution TBI' },
  { label: 'Project Duration', value: '08 Months' },
  { label: 'Approval Date', value: '06.05.2025' },
];

const trustBadges = [
  { icon: '🇮🇳', title: 'Govt. of India', sub: 'Ministry of MSME' },
  { icon: '🏛️', title: 'TN-EDII', sub: 'Innovation Voucher Program' },
  { icon: '🤝', title: 'NGI TBI', sub: 'Knowledge Partner' },
  { icon: '📜', title: 'UDYAM Certified', sub: 'UDYAM-TN-03-0253916' },
];

export default function GovernmentProofPage() {
  return (
    <main className="py-32 px-6 max-w-6xl mx-auto min-h-screen">

      {/* ── Header ── */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
          ✅ Officially Recognized Startup
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          Government Proof &amp; Recognition
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto leading-relaxed">
          GREENSPROUT is a government-recognized, MSME-registered micro enterprise funded by the Tamil Nadu Entrepreneurship Development &amp; Innovation Institute.
        </p>
      </div>

      {/* ── Trust Badges ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {trustBadges.map((b) => (
          <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            <div className="text-3xl mb-2">{b.icon}</div>
            <p className="font-display font-bold text-dark text-sm">{b.title}</p>
            <p className="text-light text-xs mt-1">{b.sub}</p>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        {/* ── MSME Card ── */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full inline-block mb-3">
                🏛️ Government of India · Ministry of MSME
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-dark">
                UDYAM Registration Certificate
              </h2>
            </div>
            <a
              href={VERIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-display font-semibold px-6 py-2.5 rounded-full hover:bg-accent transition-colors duration-300 shadow-md shadow-primary/25 text-sm whitespace-nowrap self-start sm:self-auto"
            >
              🔗 Verify Certificate
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {msmeDetails.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl px-5 py-4 border ${
                  item.highlight
                    ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20'
                    : 'bg-gray-50/60 border-gray-100'
                }`}
              >
                <p className="text-xs text-light uppercase tracking-wider mb-1">{item.label}</p>
                <p className={`font-display font-bold ${item.highlight ? 'text-primary text-xl' : 'text-dark text-base'}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TN-EDII Card ── */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="mb-8">
            <div className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-3">
              🤝 Entrepreneurship Development and Innovation Institute · Tamil Nadu
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark">
              TN-EDII Innovation Voucher Program
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {tnediiDetails.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl px-5 py-4 border ${
                  item.highlight
                    ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20'
                    : 'bg-gray-50/60 border-gray-100'
                }`}
              >
                <p className="text-xs text-light uppercase tracking-wider mb-1">{item.label}</p>
                <p className={`font-display font-bold ${item.highlight ? 'text-primary text-2xl' : 'text-dark text-base'}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Installment progress bar */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="text-sm font-semibold text-dark mb-4">Funding Disbursement Progress</p>
            <div className="space-y-3">
              {[
                { label: '1st Installment — ₹76,800', pct: 50, status: 'Released', color: 'bg-primary' },
                { label: '2nd Installment — ₹61,440', pct: 40, status: 'Pending', color: 'bg-accent/60' },
                { label: '3rd Installment — ₹15,360', pct: 10, status: 'On Completion', color: 'bg-gray-300' },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs text-light mb-1">
                    <span>{bar.label}</span>
                    <span className={`font-semibold ${bar.status === 'Released' ? 'text-primary' : ''}`}>{bar.status}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${bar.color} rounded-full`}
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Verified. Funded. Investor-Ready.
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            GREENSPROUT has the government validation, funding structure, and technical foundation to scale. Let's build the future of farming together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={VERIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-display font-bold px-8 py-3 rounded-full hover:bg-background hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm"
            >
              🔗 Verify on Govt. Portal
            </a>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 font-display font-bold px-8 py-3 rounded-full hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
