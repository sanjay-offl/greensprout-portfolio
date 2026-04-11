import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-white border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative shrink-0">
                <Image src="/images/logo.png" alt="GREENSPROUT Logo" fill className="object-contain" />
              </div>
              <span className="font-display font-bold text-primary text-xl">GREENSPROUT</span>
            </div>
            <p className="text-light text-sm leading-relaxed">
              Smart solar farming automation from Tamil Nadu, India.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-full font-medium">MSME Registered</span>
              <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full font-medium">TN-EDII Funded</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              {[['Solution', '/solution'], ['Features', '/features'], ['Technology', '/technology'], ['Workflow', '/workflow'], ['Performance', '/performance']].map(([l, h]) => (
                <Link key={h} href={h} className="text-light text-sm hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {[['About Us', '/about'], ['Our Team', '/team'], ['Mentors', '/mentors'], ['Market', '/market'], ['Future Scope', '/future']].map(([l, h]) => (
                <Link key={h} href={h} className="text-light text-sm hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Legal / Proof */}
          <div>
            <h4 className="font-semibold text-dark text-sm uppercase tracking-wider mb-5">Recognition</h4>
            <div className="flex flex-col gap-3">
              {[['Govt Proof', '/government-proof'], ['Gallery', '/gallery'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} className="text-light text-sm hover:text-primary transition-colors">{l}</Link>
              ))}
            </div>
            <div className="mt-6 p-3 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-xs text-primary font-medium">UDYAM-TN-03-0253916</p>
              <p className="text-xs text-light mt-1">Registered Micro Enterprise</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light text-xs">&copy; {year} GreenSprout Pvt. Ltd. All rights reserved. PPG Institute of Technology, Saravanampatti, Coimbatore, Tamil Nadu 641035.</p>
          <p className="text-light text-xs italic font-medium">"Growing Communities with Smart Technology"</p>
        </div>
      </div>
    </footer>
  );
}
