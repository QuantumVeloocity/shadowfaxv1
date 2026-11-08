import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface FilmStripItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  year?: string;
}

interface FilmReelStripProps {
  onSelectImage: (item: FilmStripItem) => void;
}

export const FilmReelStrip: React.FC<FilmReelStripProps> = ({ onSelectImage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const frames: FilmStripItem[] = [
    {
      id: 'doc-bakshi',
      title: 'Doctor Bakshi (2023)',
      category: 'Medical Crime-Thriller',
      image: '/slides/page_07.jpg',
      aspect: '2.39:1',
      year: '2023'
    },
    {
      id: 'jotugriho',
      title: 'Jotugriho (জতুগৃহ)',
      category: 'Psychological Horror-Noir',
      image: '/slides/page_08.jpg',
      aspect: '2.39:1',
      year: '2022'
    },
    {
      id: 'shubho-bijoya',
      title: 'Shubho Bijoya (শুভ বিজয়া)',
      category: 'Ancestral Family Drama',
      image: '/slides/page_09.jpg',
      aspect: '1.85:1',
      year: '2022'
    },
    {
      id: 'supermodel-goa',
      title: 'Supermodel India · Goa',
      category: 'Reality Show × Fashion',
      image: '/slides/page_16.jpg',
      aspect: '16:9',
      year: '2024'
    },
    {
      id: 'fashion-runway',
      title: 'Miss Supermodel India Coronation',
      category: 'Universal India 2023',
      image: '/slides/page_11.jpg',
      aspect: '16:9',
      year: '2023'
    },
    {
      id: 'cast-launch',
      title: 'Film Projects Premiere Launch',
      category: 'Neo Studios Collaboration',
      image: '/slides/page_06.jpg',
      aspect: '16:9',
      year: '2023'
    },
    {
      id: 'mca-awards',
      title: 'MCA Entertainment Awards',
      category: 'Celebrity Gala Night',
      image: '/slides/page_05.jpg',
      aspect: '16:9',
      year: '2023'
    },
    {
      id: 'studio-portraits',
      title: 'Editorial Studio Lookbook',
      category: 'Red24 Studios',
      image: '/slides/page_04.jpg',
      aspect: '16:9',
      year: '2023'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const distance = 420;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full py-8 overflow-hidden select-none">
      {/* Header Info */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400">
            35mm ARCHIVAL ARCHIVE · CONTINUOUS EXPOSURE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 rounded bg-neutral-900 border border-white/10 hover:border-[#e50914] text-neutral-400 hover:text-white transition-colors"
            aria-label="Scroll reel left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 rounded bg-neutral-900 border border-white/10 hover:border-[#e50914] text-neutral-400 hover:text-white transition-colors"
            aria-label="Scroll reel right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 35mm Celluloid Strip Container */}
      <div className="relative bg-[#0c0c10] border-y border-white/10 py-3 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
        {/* Top Sprocket Perforations */}
        <div className="w-full h-4 mb-2 flex items-center justify-between overflow-hidden opacity-60">
          <div className="flex gap-4 px-2 w-max animate-pulse">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={`top-${i}`}
                className="w-3.5 h-2.5 rounded-[2px] bg-black border border-white/20 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Horizontal Reel Scroll Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-6 md:px-12 py-2 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {frames.map((frame, index) => (
            <div
              key={frame.id}
              onClick={() => onSelectImage(frame)}
              className="group relative flex-none w-[310px] md:w-[380px] bg-black rounded border border-white/10 hover:border-[#e50914] transition-all duration-300 cursor-pointer overflow-hidden snap-start shadow-xl"
            >
              {/* Celluloid Frame Header */}
              <div className="px-3 py-1.5 bg-[#121217] border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="text-[#e50914]">KODAK 5219 · {frame.year}</span>
                <span>EXP {String(index + 1).padStart(2, '0')} // 24FPS</span>
              </div>

              {/* Image Container with Film Ratio */}
              <div className="relative h-[220px] bg-neutral-950 overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Inspect icon overlay */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#e50914]" />
                </div>

                {/* Title & Metadata */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono text-[#e50914] tracking-widest uppercase">
                    {frame.category}
                  </span>
                  <h4 className="font-instrument italic text-lg text-white font-medium line-clamp-1 group-hover:text-red-300 transition-colors">
                    {frame.title}
                  </h4>
                </div>
              </div>

              {/* Celluloid Frame Footer */}
              <div className="px-3 py-1 bg-[#121217] border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-neutral-500">
                <span>RATIO {frame.aspect}</span>
                <span>SHADOWFAX VAULT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sprocket Perforations */}
        <div className="w-full h-4 mt-2 flex items-center justify-between overflow-hidden opacity-60">
          <div className="flex gap-4 px-2 w-max animate-pulse">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={`bot-${i}`}
                className="w-3.5 h-2.5 rounded-[2px] bg-black border border-white/20 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
