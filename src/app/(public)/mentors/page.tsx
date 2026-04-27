'use client';
import Link from 'next/link';
import { useTranslations } from '@/i18n/useTranslations';

const mentorsData = [
  { name: 'Dr. K. Selvanayaki', roleKey: 'academicAdvisor', descKey: 'academicDesc', initials: 'KS', areaKey: 'agriEngResearch' },
  { name: 'Mr. Sakthi Navaneethan B', roleKey: 'industryMentor', descKey: 'industryDesc', initials: 'SN', areaKey: 'businessStrategy' },
];

export default function MentorsPage() {
  const t = useTranslations();

  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          {t('mentors.heading')}
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          {t('mentors.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {mentorsData.map((mentor) => (
          <div key={mentor.name} className="card-base hover:border-accent/40 group p-10">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shrink-0 flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {mentor.initials}
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-dark">{mentor.name}</h2>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mt-1">{t(`team.${mentor.roleKey}`)}</p>
              </div>
            </div>
            <p className="text-dark/70 leading-relaxed mb-5">{t(`team.${mentor.descKey}`)}</p>
            <div className="bg-primary/5 rounded-xl px-4 py-3 text-xs text-primary font-semibold">
              {t('mentors.areaOfExpertise')}: {t(`mentors.${mentor.areaKey}`)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
