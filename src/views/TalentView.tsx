import React, { useState } from 'react';
import { Star, Award, Tv, Film, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { TALENT_ROSTER } from '../data/filmData';
import { TalentProfile, PageTab } from '../types/film';

interface TalentViewProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenSlide: (image: string, title: string) => void;
}

export const TalentView: React.FC<TalentViewProps> = ({ onSelectTab, onOpenSlide }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookingModalTalent, setBookingModalTalent] = useState<TalentProfile | null>(null);

  const categories = [
    { id: 'all', label: 'All Personalities' },
    { id: 'Actor', label: 'Theatrical Actors' },
    { id: 'Director', label: 'Film Directors' },
    { id: 'TV Personality', label: 'Reality & Television Stars' },
    { id: 'Model', label: 'Supermodels & Influencers' }
  ];

  const filteredTalent = TALENT_ROSTER.filter((t) => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
            ONBOARD ROSTER · SECTION 04
          </span>
          <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide">
            Designers, Models, Actors & Influencers
          </h1>
          <p className="mt-4 text-sm md:text-base text-neutral-400 font-helvetica max-w-2xl leading-relaxed">
            Represented through the Shadowfax Modeling & Acting Agency and MCA Production ecosystem. Direct access to headline television icons, critically acclaimed regional film actors, and commercial showstoppers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-white/10 rounded-md">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-medium font-helvetica rounded transition-colors whitespace-nowrap ${
                selectedCategory === c.id
                  ? 'bg-[#e50914] text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Talent Cards Grid (Clean 3-in-a-row layout per design rules) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTalent.map((person) => (
          <div
            key={person.id}
            className="p-6 rounded-xl bg-[#09090e] border border-white/15 hover:border-[#e50914]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div>
              {/* Top metadata unboxed */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-3 border-b border-white/10">
                <span className="text-[#e50914]">{person.category.toUpperCase()}</span>
                <span>{person.industry}</span>
              </div>

              {/* Headshot / Slide crop */}
              <div
                onClick={() => onOpenSlide(person.image, person.name)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black mb-6 border border-white/10 cursor-pointer group-hover:border-white/20 transition-colors"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded">
                  CLICK TO VIEW FULL DECK SLIDE
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-instrument italic text-3xl text-white font-normal mb-1 group-hover:text-red-300 transition-colors">
                {person.name}
                {person.nickname && (
                  <span className="text-neutral-400 text-lg not-italic font-helvetica ml-2">
                    "{person.nickname}"
                  </span>
                )}
              </h3>
              <p className="text-xs text-[#e50914] font-mono tracking-wider mb-4">
                {person.role}
              </p>

              <p className="text-xs text-neutral-300 font-helvetica leading-relaxed mb-4">
                {person.knownFor}
              </p>

              {/* Key Achievements */}
              <div className="space-y-1.5 pt-3 border-t border-white/10 text-[11px] text-neutral-400 font-helvetica">
                {person.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#e50914] mt-0.5">·</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={() => setBookingModalTalent(person)}
                className="flex-1 py-2.5 bg-neutral-900 hover:bg-[#e50914] text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center font-helvetica border border-white/10 hover:border-[#e50914]"
              >
                Book For Shoot / Campaign
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Talent Booking Quick Inquire Modal */}
      {bookingModalTalent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-[#0c0c10] border border-white/20 rounded-xl p-8 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e50914]">
                  TALENT MANAGEMENT ESCROW
                </span>
                <h3 className="font-instrument italic text-3xl text-white font-normal mt-1">
                  Inquire for {bookingModalTalent.name}
                </h3>
              </div>
              <button
                onClick={() => setBookingModalTalent(null)}
                className="text-neutral-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-300 font-helvetica leading-relaxed mb-6">
              Shadowfax Modeling & Acting Agency coordinates contracts, availability schedules, riders, and appearances for film shoots, commercials, and runway shows.
            </p>

            <div className="p-4 rounded bg-black/60 border border-white/10 space-y-2 text-xs font-mono text-neutral-300 mb-6">
              <div>OFFICIAL CONTACT: +91 7908309921</div>
              <div>EMAIL: shadowfaxfilm@gmail.com</div>
              <div>LOCATION: Kolkata HQ · Multi-City Booking</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setBookingModalTalent(null);
                  onSelectTab('contact');
                }}
                className="w-full py-3 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center"
              >
                Proceed to Production Proposal Desk →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Talent Deck Banner (Page 15) */}
      <div className="mt-20 p-8 rounded-xl bg-[#09090e] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e50914] block mb-1">
            ARE YOU AN ACTOR, MODEL OR CREATOR?
          </span>
          <h3 className="font-instrument italic text-3xl text-white font-normal">
            Audition for Upcoming Feature Films & Reality Shows
          </h3>
          <p className="text-xs text-neutral-400 font-helvetica mt-1">
            Send your portfolio, showreel link, and introduction video directly to our casting department at{' '}
            <span className="text-white font-mono">shadowfaxfilm@gmail.com</span>
          </p>
        </div>

        <a
          href="mailto:shadowfaxfilm@gmail.com?subject=Talent%20Audition%20Submission%20-%20Shadowfax%20Films"
          className="px-6 py-3.5 bg-neutral-900 hover:bg-[#e50914] text-white text-xs font-semibold uppercase tracking-wider rounded-sm border border-white/15 transition-colors whitespace-nowrap shrink-0"
        >
          Submit Portfolio Video
        </a>
      </div>
    </div>
  );
};
