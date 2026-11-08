import React, { useState } from 'react';
import { Play, Pause, ArrowRight, Sparkles, Film, Award, TrendingUp, Users, ChevronRight, Eye } from 'lucide-react';
import { CORE_METRICS, MARQUEE_ITEMS, FILM_PROJECTS } from '../data/filmData';
import { PageTab } from '../types/film';
import { soundEngine } from '../utils/audioSynthesizer';

interface HomeViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenFilm: (filmId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onOpenFilm }) => {
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  const previewStills = [
    {
      title: 'Doctor Bakshi (2023)',
      subtitle: 'Theatrical Release · Saptaswa Basu',
      img: '/slides/page_07.jpg',
      tag: 'FEATURE FILM',
      id: 'doctor-bakshi'
    },
    {
      title: 'Jotugriho (2022)',
      subtitle: 'Psychological Thriller · Bonny Sengupta',
      img: '/slides/page_08.jpg',
      tag: 'NOIR THRILLER',
      id: 'jotugriho'
    },
    {
      title: 'Shubho Bijoya (2022)',
      subtitle: 'Ancestral Drama · Rohan Sen',
      img: '/slides/page_09.jpg',
      tag: 'FAMILY DRAMA',
      id: 'shubho-bijoya'
    },
    {
      title: 'Supermodel India · Goa',
      subtitle: 'Reality Show × Pageant · Thakur Anoop Singh',
      img: '/slides/page_16.jpg',
      tag: 'UPCOMING 2024',
      id: 'supermodel-india'
    }
  ];

  const handlePlayToggle = () => {
    setIsPlayingShowreel(!isPlayingShowreel);
    soundEngine.playChime(500, 0.1);
  };

  return (
    <div className="relative pt-24 md:pt-32 pb-20">
      {/* 1. Hero Section - Split Layout */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 min-h-[calc(100vh-140px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Real Logo from PDF + Kicker */}
            <div className="flex items-center gap-3.5 mb-6">
              <img
                src="/shadowfax_symbol.png"
                alt="Shadowfax Films"
                className="w-8 h-8 object-contain filter drop-shadow-[0_0_10px_rgba(229,9,20,0.6)]"
              />
              <span className="w-6 h-[1px] bg-[#e50914]" />
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#e50914] font-bold">
                CREATIVE PRODUCTION & MARKETING POWERHOUSE
              </span>
            </div>

            {/* Bold, Tall Impact Headline */}
            <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-white font-bold leading-[0.93] tracking-wide mb-6">
              BUILDING POWERFUL BRANDS THROUGH{' '}
              <span className="text-[#e50914] drop-shadow-[0_0_25px_rgba(229,9,20,0.5)]">
                CINEMATIC STORYTELLING
              </span>
            </h1>

            {/* Editorial Subtitle with balanced Instrument Serif accent */}
            <p className="font-instrument italic text-xl sm:text-2xl text-neutral-200 font-normal mb-5 leading-snug">
              "We don't just create content — we engineer brand experiences that inspire, engage, and deliver measurable results."
            </p>

            {/* Concise Helvetica Body Copy */}
            <p className="text-sm md:text-base text-neutral-400 font-helvetica max-w-xl leading-relaxed mb-8">
              Specializing in brand films, TV commercials, social media content, food and hospitality marketing, fashion events, corporate branding, photography, videography, and influencer collaborations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectTab('films')}
                className="px-7 py-3.5 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.4)] flex items-center gap-2 group font-helvetica"
              >
                <span>View Theatrical Releases</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onSelectTab('ecosystem')}
                className="px-6 py-3.5 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-bold tracking-widest uppercase rounded-sm border border-white/15 hover:border-white/30 transition-all duration-300 font-helvetica"
              >
                <span>5 Associated Brands</span>
              </button>

              <button
                onClick={handlePlayToggle}
                className="px-5 py-3.5 bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white text-xs font-mono tracking-wider rounded-sm border border-red-500/30 hover:border-red-500 flex items-center gap-2 transition-colors"
              >
                {isPlayingShowreel ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#e50914]" />
                    <span>PAUSE REEL</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#e50914] fill-current" />
                    <span>WATCH REEL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor (Model hands framing face from PDF) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-[460px] mx-auto rounded-lg overflow-hidden border border-white/15 bg-neutral-950 shadow-[0_0_40px_rgba(0,0,0,0.9)] group">
              {/* High-Res Hero Image from PDF */}
              <img
                src="/slides/page_03.jpg"
                alt="Shadowfax Films Cinematic Editorial"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-95"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 border border-[#e50914]/20 pointer-events-none" />

              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#e50914]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#e50914]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#e50914]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#e50914]" />

              {/* Shutter Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90 bg-black/60 px-3 py-1.5 backdrop-blur-md rounded">
                <span className="text-[#e50914] font-bold">● 4K RAW EXPOSURE</span>
                <span>ISO 800 · 24.00 FPS</span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/75 backdrop-blur-md rounded border border-white/10">
                <span className="text-[10px] font-mono text-[#e50914] uppercase tracking-widest block mb-1">
                  OFFICIAL EDITORIAL ARCHIVE
                </span>
                <p className="font-instrument italic text-xl text-white font-normal leading-tight">
                  Visual excellence crafted with relentless discipline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Full-Width Core Metrics Strip */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CORE_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-instrument italic text-white font-normal tabular-nums mb-1">
                {metric.value}
              </span>
              <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-helvetica">
                {metric.label}
              </span>
              <span className="text-[11px] text-neutral-500 font-helvetica mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Infinite Marquee Ticker */}
      <div className="my-24 py-4 bg-[#0a0a0f] border-y border-white/10 overflow-hidden relative">
        <div className="animate-marquee flex items-center gap-12 text-sm font-mono tracking-[0.25em] text-neutral-400 uppercase select-none">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-[#e50914] font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 4. Interactive Showreel Player Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-28">
        <div className="bg-[#0b0b10] border border-white/15 rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Film className="w-4 h-4 text-[#e50914]" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914]">
                  PREVIEW SHOWREEL · SHADOWFAX STUDIOS
                </span>
              </div>
              <h2 className="font-display uppercase text-4xl md:text-6xl text-white font-bold tracking-wide">
                Cinematic Portfolio in Motion
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectTab('films')}
                className="text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <span>View Full Vault ({FILM_PROJECTS.length} Titles)</span>
                <ChevronRight className="w-4 h-4 text-[#e50914]" />
              </button>
            </div>
          </div>

          {/* Interactive Player Window */}
          <div className="relative aspect-[16/9] md:aspect-[2.39/1] bg-black rounded-lg overflow-hidden border border-white/10 shadow-inner group">
            {/* Active Stills background */}
            <img
              src={previewStills[activeFrameIndex].img}
              alt={previewStills[activeFrameIndex].title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                isPlayingShowreel ? 'scale-105 brightness-110 filter' : 'brightness-80'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Timecode overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-4 text-xs font-mono text-neutral-300 bg-black/60 px-3 py-1.5 rounded backdrop-blur border border-white/10">
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isPlayingShowreel ? 'bg-[#e50914] animate-ping' : 'bg-neutral-500'}`} />
                {isPlayingShowreel ? 'PLAYING' : 'READY'}
              </span>
              <span>TC 00:04:18:22</span>
              <span>4K CINEMA</span>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={handlePlayToggle}
                className="pointer-events-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#e50914] hover:bg-[#ff1f2d] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_40px_rgba(229,9,20,0.6)]"
                aria-label="Play Reel"
              >
                {isPlayingShowreel ? (
                  <Pause className="w-7 h-7" />
                ) : (
                  <Play className="w-7 h-7 fill-current ml-1" />
                )}
              </button>
            </div>

            {/* Active Reel Footer bar */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#e50914] uppercase tracking-widest block">
                  {previewStills[activeFrameIndex].tag}
                </span>
                <h3 className="font-instrument italic text-2xl text-white font-medium">
                  {previewStills[activeFrameIndex].title}
                </h3>
                <p className="text-xs text-neutral-400 font-helvetica">
                  {previewStills[activeFrameIndex].subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenFilm(previewStills[activeFrameIndex].id)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-helvetica font-medium rounded transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#e50914]" />
                  <span>Inspect Title</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stills Selector Strip */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewStills.map((still, idx) => (
              <button
                key={still.id}
                onClick={() => {
                  setActiveFrameIndex(idx);
                  soundEngine.playChime(400 + idx * 60, 0.08);
                }}
                className={`text-left p-3 rounded border transition-all ${
                  activeFrameIndex === idx
                    ? 'border-[#e50914] bg-[#e50914]/10 shadow-[0_0_15px_rgba(229,9,20,0.2)]'
                    : 'border-white/10 bg-neutral-900/60 hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                  FRAME 0{idx + 1}
                </span>
                <span className="text-xs font-medium text-white block line-clamp-1">
                  {still.title}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {still.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Chapter Index Grid (From Page 3 of the PDF) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-20">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
            TABLE OF CONTENTS · SLIDE DIRECTORY
          </span>
          <h2 className="font-display uppercase text-4xl md:text-6xl text-white font-bold tracking-wide">
            The Shadowfax Ecosystem Structure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { num: '01', title: 'PORTFOLIO', desc: 'Theatrical motion pictures, shows & client agency', tab: 'films' as PageTab },
            { num: '02', title: 'FILM PROJECTS', desc: 'Doctor Bakshi, Jotugriho & Shubho Bijoya releases', tab: 'films' as PageTab },
            { num: '03', title: 'STORY & VISION', desc: 'MCA Production partnership & founding mission', tab: 'ecosystem' as PageTab },
            { num: '04', title: 'ONBOARD TALENT', desc: 'Celebrities, directors, models and influencers', tab: 'talent' as PageTab },
            { num: '05', title: 'FIVE BRANDS', desc: 'Unified branding, marketing and studio ecosystem', tab: 'ecosystem' as PageTab }
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => onSelectTab(item.tab)}
              className="group p-6 rounded bg-[#09090e] border border-white/10 hover:border-[#e50914] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(229,9,20,0.15)] flex flex-col justify-between h-[210px]"
            >
              <div>
                <span className="font-instrument italic text-4xl text-[#e50914] font-normal block mb-2">
                  {item.num}
                </span>
                <h3 className="text-base font-helvetica font-semibold text-white tracking-wider group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-helvetica leading-relaxed mb-3">
                  {item.desc}
                </p>
                <span className="text-[11px] font-mono text-[#e50914] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Access Section →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
