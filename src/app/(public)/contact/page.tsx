'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="py-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold bg-gradient-to-r from-[#111827] via-[#2F6B3C] to-[#6FAF5E] bg-clip-text text-transparent tracking-tight leading-tight mb-4">
          Contact Us
        </h1>
        <p className="text-light text-lg max-w-2xl mx-auto">
          Interested in investing, partnering, or pre-ordering AGRISOLARBOT? We&apos;d love to connect with you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
        {/* Info side */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl font-display font-bold text-dark mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">📧</span>
                <div>
                  <p className="text-xs text-light uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:greensprout2k25@gmail.com"
                    className="text-primary font-semibold hover:text-accent transition-colors duration-200 break-all"
                  >
                    greensprout2k25@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">📞</span>
                <div>
                  <p className="text-xs text-light uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-dark font-medium">+91 9363982789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">📍</span>
                <div>
                  <p className="text-xs text-light uppercase tracking-wider mb-1">Address</p>
                  <p className="text-dark font-medium text-sm leading-relaxed">PPG Institute of Technology, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">📜</span>
                <div>
                  <p className="text-xs text-light uppercase tracking-wider mb-1">MSME No.</p>
                  <p className="text-dark font-medium">UDYAM-TN-03-0253916</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-6">
            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">TN-EDII Approved · ₹1,92,000 Funded</p>
            <p className="text-dark/70 text-sm leading-relaxed">
              GREENSPROUT is funded under the Innovation Voucher Program (IVP) of the Entrepreneurship Development and Innovation Institute, Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Form side */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-6xl">✅</div>
              <h3 className="text-2xl font-display font-bold text-primary">Message Sent!</h3>
              <p className="text-light">We will get back to you within 24 hours at <strong>greensprout2k25@gmail.com</strong>.</p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <h2 className="text-xl font-display font-bold text-dark mb-2">Send a Message</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-light/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-light/50"
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-dark mb-2">Nature of Inquiry</label>
                <select
                  id="inquiry"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                >
                  <option>Investment / Funding</option>
                  <option>Research Partnership</option>
                  <option>Pre-order / Purchase</option>
                  <option>Media / Press</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us about your interest in AGRISOLARBOT..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-light/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-display font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-accent hover:-translate-y-0.5 transition-all duration-300 text-base mt-2"
              >
                Send Message →
              </button>
              <p className="text-center text-xs text-light">
                Or email directly:{' '}
                <a href="mailto:greensprout2k25@gmail.com" className="text-primary hover:text-accent transition-colors font-medium">
                  greensprout2k25@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
