import React, { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap, Camera, Sparkles, Building2 } from 'lucide-react';
import { ECOSYSTEM_BRANDS } from '../data/filmData';
import { PageTab } from '../types/film';

interface EcosystemViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenSlide: (image: string, title: string) => void;
}

export const EcosystemView: React.FC<EcosystemViewProps> = ({ onSelectTab, onOpenSlide }) => {
  const [activeBrandId, setActiveBrandId] = useState<string>('shadowfaxfilms');

  const currentBrand = ECOSYSTEM_BRANDS.find((b) => b.id === activeBrandId) || ECOSYSTEM_BRANDS[0];

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
          INTEGRATED ARCHITECTURE · SECTION 03
        </span>
        <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide mb-6">
          The Five Pillars of Our Ecosystem
        </h1>
        <p className="text-base text-neutral-300 font-helvetica max-w-3xl leading-relaxed">
          Backed by a unified network of five associated entities under one roof, Shadowfaxfilms delivers an uninterrupted creative and commercial pipeline—from theatrical cinema capture and runway pageantry to performance ad acquisition and artist representation.
        </p>
      </div>

      {/* Brand Selection Tabs (Segmented control) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
        {ECOSYSTEM_BRANDS.map((brand) => {
          const isSelected = activeBrandId === brand.id;
          return (
            <button
              key={brand.id}
              onClick={() => setActiveBrandId(brand.id)}
              className={`p-4 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-neutral-900 border-[#e50914] shadow-[0_0_20px_rgba(229,9,20,0.25)]'
                  : 'bg-[#09090e] border-white/10 hover:border-white/20 text-neutral-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#e50914] uppercase tracking-wider">
                  PILLAR 0{ECOSYSTEM_BRANDS.indexOf(brand) + 1}
                </span>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#e50914]" />}
              </div>
              <h3 className="text-sm font-semibold text-white tracking-wide font-helvetica">
                {brand.name}
              </h3>
              <p className="text-[11px] text-neutral-500 line-clamp-1 mt-1">
                {brand.category}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Brand Deep Dive Showcase */}
      <div className="p-8 md:p-12 rounded-xl bg-[#09090e] border border-white/15 shadow-2xl relative overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Brand Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#e50914]/15 border border-[#e50914]/30 text-[#e50914] text-[11px] font-mono uppercase tracking-wider font-bold">
                  {currentBrand.category}
                </span>
              </div>
              <h2 className="font-display uppercase text-3xl md:text-5xl text-white font-bold mt-2 leading-tight">
                {currentBrand.headline}
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-300 font-helvetica leading-relaxed">
              {currentBrand.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Core Capabilities & Scope of Delivery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-200 font-helvetica">
                {currentBrand.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof Metric */}
            <div className="p-4 rounded bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 flex items-center gap-3">
              <Zap className="w-4 h-4 text-[#e50914] shrink-0" />
              <span>{currentBrand.metrics}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onSelectTab('contact')}
                className="px-6 py-3 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors"
              >
                Inquire For {currentBrand.name} Services
              </button>

              {currentBrand.slideImage && (
                <button
                  onClick={() => onOpenSlide(currentBrand.slideImage!, currentBrand.name)}
                  className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-mono rounded-sm border border-white/10 transition-colors"
                >
                  View Deck Slide ↗
                </button>
              )}
            </div>
          </div>

          {/* Right: Visual Deck Slide Presentation */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onOpenSlide(currentBrand.slideImage || '/slides/page_13.jpg', currentBrand.name)}
              className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/15 bg-black cursor-pointer group shadow-2xl"
            >
              <img
                src={currentBrand.slideImage || '/slides/page_13.jpg'}
                alt={currentBrand.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>{currentBrand.logoText}</span>
                <span className="text-[#e50914]">CLICK TO EXPAND ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Brand Synergy Diagram / Flow */}
      <div className="p-8 rounded-xl bg-[#0b0b10] border border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2">
            END-TO-END PIPELINE
          </span>
          <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal">
            How The Ecosystem Powers Every Project
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
          {[
            { step: '01', title: 'MCA PRODUCTION', action: 'Live Shows & Pageants', desc: 'Large-scale events, runway shows, and national stage presence across India.' },
            { step: '02', title: 'SHADOWFAX TALENT', action: 'Actor & Model Cast', desc: 'Connecting handpicked reality stars, Bengali film actors, and models.' },
            { step: '03', title: 'RED24 STUDIOS', action: '4K Multi-Cam Capture', desc: 'Studio photography, commercial lookbooks, and high-fidelity video production.' },
            { step: '04', title: 'SHADOWFAX FILMS', action: 'Theatrical Storytelling', desc: 'Feature films, brand documentaries, TVCs, and master post-production.' },
            { step: '05', title: 'RED24 MEDIA', action: 'Performance Velocity', desc: 'Paid Meta Ads, Google acquisition, and viral social distribution for high ROAS.' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded bg-black/50 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-instrument italic text-2xl text-[#e50914] block mb-1">
                  STEP {item.step}
                </span>
                <h4 className="text-xs font-bold text-white tracking-wider font-helvetica mb-1">
                  {item.title}
                </h4>
                <span className="text-[11px] font-mono text-neutral-400 block mb-3">
                  {item.action}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-helvetica leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
