import React, { useState } from 'react';
import { Volume2, VolumeX, Clapperboard, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageTab } from '../types/film';

interface NavbarProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  isMuted: boolean;
  onToggleMute: () => void;
  cinemascope: boolean;
  onToggleCinemascope: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  isMuted,
  onToggleMute,
  cinemascope,
  onToggleCinemascope,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string; num: string }[] = [
    { id: 'showreel', label: 'Showreel', num: '01' },
    { id: 'films', label: 'Films & Series', num: '02' },
    { id: 'ecosystem', label: 'Ecosystem', num: '03' },
    { id: 'talent', label: 'Talent Roster', num: '04' },
    { id: 'events', label: 'Runway & Shows', num: '05' },
    { id: 'growth', label: 'Case Studies', num: '06' },
  ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#060608]/85 backdrop-blur-md border-b border-white/[0.07] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark with official logo from PDF */}
          <button
            onClick={() => handleNavClick('showreel')}
            className="group text-left flex items-center gap-3.5 whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src="/shadowfax_symbol.png"
                alt="Shadowfax Films Official Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(229,9,20,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-helvetica font-black tracking-tight text-lg text-white group-hover:text-red-400 transition-colors uppercase leading-none">
                SHADOWFAX FILMS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-mono mt-1">
                PRODUCTION ECOSYSTEM
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, unboxed, subtle indicators) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm font-helvetica transition-colors whitespace-nowrap shrink-0 group ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="text-[10px] text-[#e50914]/80 mr-1.5 font-mono">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e50914] shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Controls & Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Cinema Scope Toggle */}
            <button
              onClick={onToggleCinemascope}
              title={cinemascope ? 'Disable 2.39:1 Cinemascope' : 'Enable 2.39:1 Cinemascope Bars'}
              className={`hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border transition-colors whitespace-nowrap ${
                cinemascope
                  ? 'border-[#e50914] text-[#e50914] bg-[#e50914]/10'
                  : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">2.39:1</span>
            </button>

            {/* Ambient Sound Synthesizer Toggle */}
            <button
              onClick={onToggleMute}
              title={isMuted ? 'Unmute Cinematic Soundscape' : 'Mute Soundscape'}
              className={`p-2 rounded border transition-colors ${
                !isMuted
                  ? 'border-[#e50914] text-[#e50914] bg-[#e50914]/10 shadow-[0_0_10px_rgba(229,9,20,0.3)]'
                  : 'border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
              }`}
              aria-label="Toggle Sound"
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-sm bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(229,9,20,0.4)] whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Shoot
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#060608]/98 backdrop-blur-xl border-b border-white/10 lg:hidden px-8 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#e50914] font-mono">
              Index / Navigation
            </span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-2xl font-instrument flex items-baseline gap-4 py-2 border-b border-white/[0.06] transition-colors ${
                  activeTab === link.id ? 'text-[#e50914] italic' : 'text-neutral-300'
                }`}
              >
                <span className="text-xs font-mono text-neutral-500">{link.num}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>LOCATION: KOLKATA · INDIA</span>
              <span>CALL: +91 7908309921</span>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 bg-[#e50914] text-white text-center font-medium text-sm tracking-wider uppercase rounded-sm"
            >
              Initiate Production Pitch
            </button>
          </div>
        </div>
      )}
    </>
  );
};
