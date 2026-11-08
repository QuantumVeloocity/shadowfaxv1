import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, BarChart3, Users, MousePointerClick, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { CASE_STUDY, CLIENT_PARTNERS } from '../data/filmData';
import { PageTab } from '../types/film';

interface CaseStudyViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenSlide: (image: string, title: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ onSelectTab, onOpenSlide }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
          MEASURABLE PROOF · SECTION 06
        </span>
        <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide mb-6">
          Real Growth, Measurable ROI
        </h1>
        <p className="text-base text-neutral-300 font-helvetica max-w-3xl leading-relaxed">
          We combine cinematic production fidelity with data-backed digital acquisition through RED24 Media. Real numbers, verified ad analytics, and exponential lead conversion.
        </p>
      </div>

      {/* Featured Deep Dive: Aami Bangali Case Study */}
      <div className="p-8 md:p-12 rounded-xl bg-[#09090e] border border-white/15 shadow-2xl relative overflow-hidden mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e50914]">
                HOSPITALITY CASE STUDY · AUTHENTIC BENGALI CUISINE
              </span>
            </div>
            <h2 className="font-instrument italic text-4xl md:text-5xl text-white font-normal">
              {CASE_STUDY.clientName}
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-400 bg-neutral-900 px-4 py-2 rounded border border-white/10">
            TIMEFRAME: {CASE_STUDY.period}
          </div>
        </div>

        {/* Growth Statistics Headline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-5 rounded bg-black/60 border border-red-500/30">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              TOTAL VIEWS
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-instrument italic text-4xl text-[#e50914] font-normal tabular-nums">
                {CASE_STUDY.growthRate.views}
              </span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-2">
              7.9K → {CASE_STUDY.afterStats.views} views
            </div>
          </div>

          <div className="p-5 rounded bg-black/60 border border-white/10">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              UNIQUE VIEWERS
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-instrument italic text-4xl text-white font-normal tabular-nums">
                {CASE_STUDY.growthRate.viewers}
              </span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-2">
              5.4K → {CASE_STUDY.afterStats.viewers} viewers
            </div>
          </div>

          <div className="p-5 rounded bg-black/60 border border-red-500/30">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              ACTION LINK CLICKS
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-instrument italic text-4xl text-[#e50914] font-normal tabular-nums">
                {CASE_STUDY.growthRate.linkClicks}
              </span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-2">
              24 → {CASE_STUDY.afterStats.linkClicks} clicks
            </div>
          </div>

          <div className="p-5 rounded bg-black/60 border border-white/10">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              CONTENT INTERACTIONS
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-instrument italic text-4xl text-white font-normal tabular-nums">
                {CASE_STUDY.growthRate.interactions}
              </span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 mt-2">
              77 → {CASE_STUDY.afterStats.interactions} actions
            </div>
          </div>
        </div>

        {/* Interactive Before vs After Comparison Deck */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Interactive Before vs. After Campaign Evidence
            </h4>
            <span className="text-[11px] font-mono text-[#e50914]">
              SLIDE TO COMPARE BEFORE / AFTER (PAGE 17)
            </span>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-white/15 bg-black select-none">
            {/* Full Slide Background */}
            <img
              src="/slides/page_17.jpg"
              alt="Aami Bangali Analytics Growth Slide"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain bg-black"
            />

            {/* Bottom Info bar */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/75 px-4 py-2 rounded backdrop-blur border border-white/10">
              <span>CASE: AAMI BANGALI RESTAURANT</span>
              <button
                onClick={() => onOpenSlide('/slides/page_17.jpg', 'Aami Bangali Growth Case Study')}
                className="text-[#e50914] hover:text-white transition-colors"
              >
                Inspect High-Resolution Slide ↗
              </button>
            </div>
          </div>
        </div>

        {/* Challenge & Strategy Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10 text-xs font-helvetica">
          <div>
            <h5 className="font-mono text-neutral-400 text-[11px] uppercase tracking-wider mb-2">
              The Client Challenge
            </h5>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {CASE_STUDY.challenge}
            </p>
          </div>

          <div>
            <h5 className="font-mono text-[#e50914] text-[11px] uppercase tracking-wider mb-2">
              The Shadowfax Strategy
            </h5>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {CASE_STUDY.strategy}
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Core Business Growth Drivers (From Page 2 of the PDF) */}
      <div className="mb-20">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-1">
            STRATEGIC IMPACT
          </span>
          <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal">
            Why Leading Brands Choose Our Ecosystem
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Higher Quality Traffic', desc: 'Hyper-targeted visual storytelling that weeds out tire-kickers and drives serious prospective buyers.' },
            { title: 'Lower Cost Per Lead (CPL)', desc: 'Creative testing algorithms and thumb-stopping visual hooks reduce average acquisition cost.' },
            { title: 'Improved Conversion Rate', desc: 'High-production video assets establish immediate authority and convert cold visitors.' },
            { title: 'Higher Return on Ad Spend (ROAS)', desc: 'Full-funnel integration between video content and programmatic ad placement.' },
            { title: 'Stronger Brand Visibility & Engagement', desc: 'Memorable brand positioning through cinematic aesthetics that stand out from competitors.' },
            { title: 'Sustainable Business Growth', desc: 'Scalable brand equity and predictable customer acquisition channels that compound over time.' }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-[#09090e] border border-white/10 hover:border-[#e50914]/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-red-950/50 border border-red-800/40 flex items-center justify-center text-[#e50914] font-mono text-xs mb-4">
                0{i + 1}
              </div>
              <h4 className="text-base font-helvetica font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-400 font-helvetica leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Logos Wall (From Page 14 of the PDF) */}
      <div className="p-8 md:p-12 rounded-xl bg-[#09090e] border border-white/15">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2">
            CLIENT PARTNERSHIPS · SECTION 14
          </span>
          <h3 className="font-instrument italic text-3xl md:text-5xl text-white font-normal">
            Collaborating With Leading Brands
          </h3>
          <p className="text-xs text-neutral-400 font-helvetica mt-2">
            Proud to partner across retail, real estate, hospitality, luxury automotive, wellness, and cultural entertainment.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENT_PARTNERS.map((client) => (
            <div
              key={client.id}
              className="p-5 rounded bg-black/60 border border-white/10 hover:border-[#e50914] transition-colors flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-[#e50914] uppercase tracking-wider block mb-1">
                  {client.sector}
                </span>
                <h4 className="text-sm font-bold text-white font-helvetica group-hover:text-red-300 transition-colors">
                  {client.name}
                </h4>
              </div>
              {client.tagline && (
                <p className="text-[11px] text-neutral-500 font-helvetica italic mt-2">
                  "{client.tagline}"
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Official Client Slide Deck Preview */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-400">
            OFFICIAL SLIDE ARCHIVE: PAGE 14 (OUR CLIENT'S)
          </span>
          <button
            onClick={() => onOpenSlide('/slides/page_14.jpg', "Our Client's Portfolio Slide")}
            className="text-xs font-mono text-[#e50914] hover:text-white transition-colors"
          >
            View Full Client Matrix Slide ↗
          </button>
        </div>
      </div>
    </div>
  );
};
