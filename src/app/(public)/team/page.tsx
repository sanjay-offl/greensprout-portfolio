import Image from 'next/image';
import Link from 'next/link';

const team = [
  { name: 'Jaya Sounthari A', role: 'Chief Executive Officer', initials: 'JS', color: 'from-emerald-500 to-teal-600', desc: 'Visionary leader driving GREENSPROUT\'s mission and strategy.' },
  { name: 'Anand V', role: 'Chief Technology Officer', initials: 'AV', color: 'from-blue-500 to-indigo-600', desc: 'Engineering lead for AGRISOLARBOT robotics and IoT systems.' },
  { name: 'Kavi Nishathini S', role: 'Chief Operating Officer', initials: 'KN', color: 'from-purple-500 to-violet-600', desc: 'Overseeing operations, compliance, and project timelines.' },
  { name: 'Sanjay S', role: 'Head of R&D', initials: 'SS', color: 'from-orange-500 to-red-500', desc: 'Leading hardware development and automation research.' },
  { name: 'Abrana M', role: 'Marketing & Outreach', initials: 'AM', color: 'from-pink-500 to-rose-600', desc: 'Brand strategy, stakeholder communication, and growth.' },
];

const mentors = [
  {
    name: 'Dr. K. Selvanayaki',
    role: 'Academic Advisor',
    initials: 'KS',
    description: 'Providing strategic academic guidance on technical research, hardware deployment, and precision engineering methodology for agri-robotics.',
  },
  {
    name: 'Mr. Sakthi Navaneethan B',
    role: 'Industry Mentor',
    initials: 'SN',
    description: 'Supporting go-to-market strategy, supply chain, business model development, and regulatory compliance for the agri-tech sector.',
  },
];

export default function TeamPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      {/* ── Team ── */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          Meet the Team
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Young, passionate engineers and entrepreneurs from Tamil Nadu dedicated to reimagining agriculture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {team.map((member) => (
          <div key={member.name} className="card-base hover:border-primary/30 text-center group flex flex-col items-center gap-4 p-8">
            {/* Avatar */}
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-1 shadow-xl group-hover:-translate-y-2 transition-transform duration-300`}>
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-dark/40">{member.initials}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-dark">{member.name}</h3>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mt-1">{member.role}</p>
              <p className="text-light text-sm mt-3 leading-relaxed">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mentors ── */}
      <div className="border-t border-gray-100 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
            Our Mentors
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Expert guidance from academia and industry shaping GREENSPROUT's strategy and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="card-base hover:border-accent/40 flex gap-6 items-start group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shrink-0 flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                {mentor.initials}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-dark mb-1">{mentor.name}</h3>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">{mentor.role}</p>
                <p className="text-light leading-relaxed text-sm">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
