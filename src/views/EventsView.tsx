import React, { useState } from 'react';
import { Crown, Trophy, Sparkles, Camera, MapPin, Maximize2 } from 'lucide-react';
import { PageTab } from '../types/film';

interface EventsViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenSlide: (image: string, title: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onSelectTab, onOpenSlide }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const galleryItems = [
    {
      id: 'supermodel-crown',
      title: 'Miss Supermodel India Coronation',
      event: 'Universal India 2023 Grand Finale',
      category: 'pageant',
      image: '/slides/page_11.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      id: 'universal-awards',
      title: 'Universal India National Winners',
      event: 'Celebrity Jury & Trophy Distribution',
      category: 'awards',
      image: '/slides/page_12.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-1'
    },
    {
      id: 'mca-night',
      title: 'MCA Production Gala Night',
      event: 'Stage Production & VIP Guests',
      category: 'gala',
      image: '/slides/page_10.jpg',
      aspect: 'col-span-1 row-span-1'
    },
    {
      id: 'lumix-showcase',
      title: 'Lumix Camera Official Partnership',
      event: 'Runway Live Media Broadcast',
      category: 'runway',
      image: '/slides/page_12.jpg',
      aspect: 'col-span-1 row-span-1'
    },
    {
      id: 'cast-stage',
      title: 'Doctor Bakshi Cast Felicitation',
      event: 'Theatrical Press Conference',
      category: 'gala',
      image: '/slides/page_06.jpg',
      aspect: 'col-span-1 md:col-span-2 row-span-1'
    },
    {
      id: 'studio-highfashion',
      title: 'Avant-Garde High Fashion Shoot',
      event: 'Editorial Fashion Week Campaign',
      category: 'runway',
      image: '/slides/page_04.jpg',
      aspect: 'col-span-1 row-span-1'
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
            RUNWAY & LIVE MEDIA · SECTION 05
          </span>
          <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide">
            Our Events & National Pageants
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-400 font-helvetica max-w-2xl leading-relaxed">
            Powered by MCA Production, we orchestrate high-production-value beauty pageants, fashion weeks, and entertainment award ceremonies across India, establishing unmatched stage and celebrity presence.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <MapPin className="w-4 h-4 text-[#e50914]" />
          <span>KOLKATA · MUMBAI · GOA · DELHI</span>
        </div>
      </div>

      {/* Featured Headline Event Box */}
      <div className="p-8 md:p-12 rounded-xl bg-gradient-to-r from-neutral-950 via-[#0e0c10] to-neutral-950 border border-white/15 mb-16 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Crown className="w-5 h-5 text-[#e50914]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#e50914]">
                FLAGSHIP ANNUAL SPECTACLE
              </span>
            </div>

            <h2 className="font-instrument italic text-4xl md:text-6xl text-white font-normal leading-tight">
              Universal India & Miss Supermodel National Pageant
            </h2>

            <p className="text-sm md:text-base text-neutral-300 font-helvetica leading-relaxed">
              Bringing together over 100+ contestants, top Indian fashion designers, international jury panels, and high-energy runway rounds. Produced end-to-end by Shadowfax Films and MCA Production, broadcast to multi-city audiences with Lumix camera technical endorsement.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-helvetica">
              <div>
                <span className="text-neutral-500 font-mono text-[11px] uppercase block">SCALE</span>
                <span className="text-white font-medium">Pan-India Auditions</span>
              </div>
              <div>
                <span className="text-neutral-500 font-mono text-[11px] uppercase block">PARTNER</span>
                <span className="text-[#e50914] font-medium">Lumix & Neo Studios</span>
              </div>
              <div>
                <span className="text-neutral-500 font-mono text-[11px] uppercase block">EXPOSURE</span>
                <span className="text-white font-medium">National Media Coverage</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenSlide('/slides/page_11.jpg', 'Miss Supermodel India')}
                className="px-6 py-3 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2"
              >
                <span>Inspect Coronation Slide</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectTab('contact')}
                className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-mono rounded-sm border border-white/10 transition-colors"
              >
                Host an Event with MCA Production →
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenSlide('/slides/page_11.jpg', 'Miss Supermodel India')}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/15 bg-black cursor-pointer group shadow-2xl"
            >
              <img
                src="/slides/page_11.jpg"
                alt="Miss Supermodel India Coronation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>OUR EVENTS · CORONATION</span>
                <span className="text-[#e50914]">EXPAND ↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento / Masonry Gallery of Event Photographs */}
      <div>
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-1">
            ARCHIVAL PHOTOGRAPHS
          </span>
          <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal">
            Project Highlights & Runway Stills
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenSlide(item.image, item.title)}
              className="p-4 rounded-lg bg-[#09090e] border border-white/10 hover:border-[#e50914] transition-all duration-300 cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] rounded overflow-hidden bg-black mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-2 right-2 p-1.5 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#e50914]" />
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#e50914] uppercase tracking-wider block mb-1">
                  {item.event}
                </span>
                <h4 className="font-instrument italic text-xl text-white font-medium group-hover:text-red-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
