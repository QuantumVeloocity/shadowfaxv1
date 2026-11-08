import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { WaveBackground } from './components/WaveBackground';
import { CinematicIntro } from './components/CinematicIntro';
import { FilmReelStrip } from './components/FilmReelStrip';
import { CinemaLightbox } from './components/CinemaLightbox';
import { ScopeOverlay } from './components/ScopeOverlay';
import { Footer } from './components/Footer';

import { HomeView } from './views/HomeView';
import { FilmsView } from './views/FilmsView';
import { EcosystemView } from './views/EcosystemView';
import { TalentView } from './views/TalentView';
import { EventsView } from './views/EventsView';
import { CaseStudyView } from './views/CaseStudyView';
import { ContactView } from './views/ContactView';

import { PageTab, FilmProject } from './types/film';
import { FILM_PROJECTS } from './data/filmData';
import { soundEngine } from './utils/audioSynthesizer';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('showreel');
  const [playIntro, setPlayIntro] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [cinemascope, setCinemascope] = useState<boolean>(false);
  const [lightboxItem, setLightboxItem] = useState<{
    title: string;
    image: string;
    category?: string;
    synopsis?: string;
    director?: string;
    leadCast?: string[];
    specs?: {
      aspectRatio?: string;
      camera?: string;
      sound?: string;
      runtime?: string;
    };
    year?: string | number;
    role?: string;
  } | null>(null);

  // Sync hash on initial load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      const validTabs: PageTab[] = ['showreel', 'films', 'ecosystem', 'talent', 'events', 'growth', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playChime(480, 0.08);
  };

  const handleToggleMute = () => {
    const active = soundEngine.toggleMute();
    setIsMuted(!active);
  };

  const handleOpenFilmById = (id: string) => {
    const film = FILM_PROJECTS.find((f) => f.id === id);
    if (film) {
      setLightboxItem({
        title: film.title,
        image: film.slideImage || film.posterImage,
        category: film.genre,
        synopsis: film.synopsis,
        director: film.director,
        leadCast: film.leadCast,
        specs: film.specs,
        year: film.year,
        role: film.role
      });
    }
  };

  const handleOpenFilmModal = (film: FilmProject) => {
    setLightboxItem({
      title: film.title,
      image: film.slideImage || film.posterImage,
      category: film.genre,
      synopsis: film.synopsis,
      director: film.director,
      leadCast: film.leadCast,
      specs: film.specs,
      year: film.year,
      role: film.role
    });
  };

  const handleOpenSlide = (image: string, title: string) => {
    setLightboxItem({
      title,
      image,
      category: 'ARCHIVAL DECK SLIDE',
      synopsis: 'Official presentation archive slide directly from the Shadowfax Films pitch deck.'
    });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f3f3f6] relative font-helvetica selection:bg-[#e50914] selection:text-white">
      {/* Optional Cinematic Intro Shutter */}
      {playIntro && (
        <CinematicIntro onComplete={() => setPlayIntro(false)} />
      )}

      {/* 2.39:1 Cinemascope Overlay */}
      <ScopeOverlay enabled={cinemascope} />

      {/* Interactive Parametric Wave Canvas */}
      <WaveBackground glowIntensity={1} />

      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        cinemascope={cinemascope}
        onToggleCinemascope={() => setCinemascope(!cinemascope)}
      />

      {/* Main Multi-Page View Container */}
      <main className="relative z-10 transition-opacity duration-300">
        {activeTab === 'showreel' && (
          <>
            <HomeView onSelectTab={handleSelectTab} onOpenFilm={handleOpenFilmById} />
            <FilmReelStrip onSelectImage={(frame) => handleOpenSlide(frame.image, frame.title)} />
          </>
        )}

        {activeTab === 'films' && (
          <>
            <FilmsView onOpenFilm={handleOpenFilmModal} onSelectTab={handleSelectTab} />
            <FilmReelStrip onSelectImage={(frame) => handleOpenSlide(frame.image, frame.title)} />
          </>
        )}

        {activeTab === 'ecosystem' && (
          <EcosystemView onSelectTab={handleSelectTab} onOpenSlide={handleOpenSlide} />
        )}

        {activeTab === 'talent' && (
          <TalentView onSelectTab={handleSelectTab} onOpenSlide={handleOpenSlide} />
        )}

        {activeTab === 'events' && (
          <EventsView onSelectTab={handleSelectTab} onOpenSlide={handleOpenSlide} />
        )}

        {activeTab === 'growth' && (
          <CaseStudyView onSelectTab={handleSelectTab} onOpenSlide={handleOpenSlide} />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* High-Resolution Cinema Lightbox Modal */}
      <CinemaLightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Global Editorial Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
