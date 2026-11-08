import React from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, ArrowUp } from 'lucide-react';
import { PageTab } from '../types/film';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-20 pb-12 overflow-hidden z-20">
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#e50914]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Top Editorial Invitation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/shadowfax_symbol.png"
                alt="Shadowfax Films Logo"
                className="w-10 h-10 object-contain filter drop-shadow-[0_0_12px_rgba(229,9,20,0.6)]"
              />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block font-bold">
                KOLKATA CREATIVE HEADQUARTERS
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl md:text-6xl text-white font-bold leading-[0.98] mb-4">
              "WE DON'T JUST CREATE CONTENT — WE BUILD BRAND EXPERIENCES THAT INSPIRE AND DELIVER MEASURABLE RESULTS."
            </h2>
            <p className="text-neutral-400 font-helvetica text-sm md:text-base max-w-xl leading-relaxed">
              Backed by an integrated ecosystem of five associated production and marketing entities under one roof. From high-concept theatrical features and commercial TVCs to high-ROAS performance acquisition.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 rounded border border-white/10 bg-[#09090e]/80 space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Phone className="w-4 h-4 text-[#e50914] shrink-0" />
                <a href="tel:+917908309921" className="hover:text-white transition-colors font-mono">
                  +91 7908309921
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Mail className="w-4 h-4 text-[#e50914] shrink-0" />
                <a href="mailto:shadowfaxfilm@gmail.com" className="hover:text-white transition-colors font-mono">
                  shadowfaxfilm@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <MapPin className="w-4 h-4 text-[#e50914] shrink-0 mt-1" />
                <span className="font-helvetica leading-snug">
                  169, Shantipally Road, Kasba, Kolkata 700107, West Bengal, India
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <Globe className="w-4 h-4 text-[#e50914] shrink-0" />
                <a
                  href="https://www.shadwfaxfilm.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#e50914] transition-colors font-mono"
                >
                  www.shadwfaxfilm.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectTab('contact')}
                className="flex-1 py-3 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center"
              >
                Inquire For Shoot / Casting
              </button>
              <button
                onClick={scrollToTop}
                className="p-3 rounded border border-white/10 bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#e50914] transition-colors"
                title="Scroll To Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Brands Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-helvetica">
          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[11px] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <button onClick={() => onSelectTab('showreel')} className="hover:text-[#e50914] transition-colors">
                  01. Showreel & Portal
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('films')} className="hover:text-[#e50914] transition-colors">
                  02. Film Catalog (Doctor Bakshi, Jotugriho)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('ecosystem')} className="hover:text-[#e50914] transition-colors">
                  03. Five Ecosystem Brands
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('talent')} className="hover:text-[#e50914] transition-colors">
                  04. Celebrity & Actor Roster
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('events')} className="hover:text-[#e50914] transition-colors">
                  05. Miss Supermodel & Runway
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('growth')} className="hover:text-[#e50914] transition-colors">
                  06. ROI Case Studies & Aami Bangali
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[11px] mb-4">
              Ecosystem Entities
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>Shadowfaxfilms (Flagship Production)</li>
              <li>MCA Production (Live Runway & Pageants)</li>
              <li>RED24 Media (Paid Performance Ads)</li>
              <li>RED24 Studios (Commercial Photography)</li>
              <li>Shadowfax Modeling & Acting Agency</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[11px] mb-4">
              Featured Works
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>Doctor Bakshi (Theatrical Release 2023)</li>
              <li>Jotugriho (Psychological Noir 2022)</li>
              <li>Shubho Bijoya (Durga Puja Drama)</li>
              <li>Supermodel India (Goa Reality Show)</li>
              <li>Universal India 2023 National Pageant</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono uppercase tracking-widest text-[11px] mb-4">
              Official Network
            </h4>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#e50914]" />
                <span className="font-mono text-[11px]">@SHADOWFAXFILMOFFICIAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#e50914]" />
                <span className="font-mono text-[11px]">@MCA.STUDIO.OFFICIAL</span>
              </div>
              <p className="text-[11px] text-neutral-500 pt-2 leading-relaxed">
                Auditions & Talent Submissions open. Send intro video & portfolio to <span className="text-white">shadowfaxfilm@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} SHADOWFAX FILMS & MCA PRODUCTION ECOSYSTEM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>CALCUTTA · BENGAL · GOA</span>
            <span>·</span>
            <span>CINEMATIC ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
