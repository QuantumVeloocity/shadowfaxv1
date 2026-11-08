import React, { useState } from 'react';
import { Film, Calendar, Clapperboard, Award, Maximize2, Sparkles, Filter } from 'lucide-react';
import { FILM_PROJECTS } from '../data/filmData';
import { FilmProject, PageTab } from '../types/film';

interface FilmsViewProps {
  onOpenFilm: (film: FilmProject) => void;
  onSelectTab: (tab: PageTab) => void;
}

export const FilmsView: React.FC<FilmsViewProps> = ({ onOpenFilm, onSelectTab }) => {
  const [filterGenre, setFilterGenre] = useState<string>('all');

  const genres = [
    { id: 'all', label: 'All Projects' },
    { id: 'thriller', label: 'Crime & Horror Thrillers' },
    { id: 'drama', label: 'Family Drama' },
    { id: 'reality', label: 'Reality Shows & Pageants' }
  ];

  const filteredFilms = FILM_PROJECTS.filter((film) => {
    if (filterGenre === 'all') return true;
    if (filterGenre === 'thriller') return film.genre.includes('Thriller') || film.genre.includes('Crime');
    if (filterGenre === 'drama') return film.genre.includes('Drama');
    if (filterGenre === 'reality') return film.genre.includes('Reality');
    return true;
  });

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] font-bold">
              CATALOGUE ARCHIVE · SECTION 02
            </span>
          </div>
          <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide">
            Theatrical Features & Motion Pictures
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-400 font-helvetica max-w-2xl leading-relaxed">
            From gritty psychological noir to grand festive human dramas, our filmography showcases high-caliber narrative vision in partnership with industry leaders like Neo Studios, Nexgen Ventures, and Roll Camera Action.
          </p>
        </div>

        {/* Filter Controls (Segmented clean control per design rules) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-white/10 rounded-md">
          {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => setFilterGenre(g.id)}
              className={`px-3 py-1.5 text-xs font-medium font-helvetica rounded transition-colors whitespace-nowrap ${
                filterGenre === g.id
                  ? 'bg-[#e50914] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Film Project Spotlight Grid */}
      <div className="space-y-16">
        {filteredFilms.map((film, index) => (
          <div
            key={film.id}
            className="p-6 md:p-10 rounded-xl bg-[#09090e] border border-white/15 hover:border-[#e50914]/60 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            {/* Top Bar for Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="text-[#e50914] font-bold">PROJECT {String(index + 1).padStart(2, '0')}</span>
                <span>·</span>
                <span>{film.year}</span>
                <span>·</span>
                <span className="text-white">{film.genre}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] bg-red-950/60 text-red-300 border border-red-800/40 font-mono">
                  {film.status}
                </span>
                <span>{film.specs.aspectRatio}</span>
              </div>
            </div>

            {/* Split layout: Poster & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Poster Column */}
              <div className="lg:col-span-5 relative">
                <div
                  onClick={() => onOpenFilm(film)}
                  className="relative aspect-[16/9] lg:aspect-[4/5] rounded-lg overflow-hidden border border-white/15 bg-black cursor-pointer group/poster shadow-xl"
                >
                  <img
                    src={film.posterImage}
                    alt={film.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover/poster:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Inspect CTA badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/poster:opacity-100 transition-opacity bg-black/40">
                    <div className="px-4 py-2 rounded bg-black/80 border border-white/20 text-white text-xs font-mono flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#e50914]" />
                      <span>INSPECT 4K SLIDE</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-neutral-300 flex items-center justify-between">
                    <span>{film.specs.runtime || 'THEATRICAL RELEASE'}</span>
                    <span className="text-[#e50914]">CLICK TO EXPAND ↗</span>
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide mb-1">
                    {film.title}
                    {film.bengaliTitle && (
                      <span className="text-neutral-400 not-italic font-helvetica font-normal ml-3 text-xl md:text-2xl">
                        ({film.bengaliTitle})
                      </span>
                    )}
                  </h2>

                  <p className="font-instrument italic text-lg text-neutral-200 mb-4 leading-normal">
                    "{film.tagline}"
                  </p>

                  <p className="text-sm md:text-base text-neutral-300 font-helvetica leading-relaxed mb-6">
                    {film.synopsis}
                  </p>

                  {/* Cast & Director unboxed metadata */}
                  <div className="space-y-3.5 pt-4 border-t border-white/10 text-xs font-helvetica">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-24 shrink-0">
                        DIRECTOR
                      </span>
                      <span className="text-white font-medium">
                        {film.director}
                        {film.manager && (
                          <span className="text-neutral-400 font-normal ml-1">
                            (Manager: {film.manager})
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-24 shrink-0">
                        LEAD CAST
                      </span>
                      <div className="text-neutral-300">
                        {film.leadCast.join(' · ')}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-24 shrink-0">
                        RELEASE DATE
                      </span>
                      <span className="text-neutral-300 font-mono">
                        {film.releaseDate}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-24 shrink-0">
                        RIG SPECS
                      </span>
                      <span className="text-neutral-400 font-mono text-[11px]">
                        {film.specs.camera} · {film.specs.sound}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-24 shrink-0">
                        CREDIT ROLE
                      </span>
                      <span className="text-[#e50914] font-medium">
                        {film.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenFilm(film)}
                    className="px-6 py-3 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center gap-2"
                  >
                    <span>View Technical Slate</span>
                    <Clapperboard className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectTab('contact')}
                    className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono rounded-sm border border-white/10 transition-colors"
                  >
                    Inquire For Distribution / Co-Production →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Production Pitch Invitation Strip */}
      <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-black border border-[#e50914]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e50914] block mb-1">
            HAVE A SCRIPT OR COMMERCIAL BRIEF?
          </span>
          <h3 className="font-instrument italic text-3xl text-white font-normal">
            Co-Produce Your Feature or Brand Film with Shadowfax
          </h3>
          <p className="text-xs text-neutral-400 font-helvetica mt-1">
            Complete script breakdown, celebrity casting attachments, and 4K cinema pipelines.
          </p>
        </div>

        <button
          onClick={() => onSelectTab('contact')}
          className="px-6 py-3.5 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(229,9,20,0.4)]"
        >
          Submit Production Brief
        </button>
      </div>
    </div>
  );
};
