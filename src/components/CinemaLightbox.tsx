import React, { useEffect } from 'react';
import { X, Film, Info, Calendar, User, Tag } from 'lucide-react';

interface CinemaLightboxProps {
  item: {
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
  } | null;
  onClose: () => void;
}

export const CinemaLightbox: React.FC<CinemaLightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/92 backdrop-blur-xl animate-fade-in">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-[#0c0c10] border border-white/15 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(229,9,20,0.25)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-white/20 text-neutral-300 hover:text-white hover:border-[#e50914] transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview (Left / Top) */}
        <div className="md:w-3/5 bg-black flex items-center justify-center p-4 relative overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[60vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded"
          />
          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-500 bg-black/60 px-2.5 py-1 rounded border border-white/10">
            PROJECTION RATIO: {item.specs?.aspectRatio || '2.39:1 CINEMASCOPE'}
          </div>
        </div>

        {/* Editorial Details Pane (Right / Bottom) */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#e50914]">
                {item.category || 'THEATRICAL FEATURE'}
              </span>
              {item.year && (
                <span className="text-xs text-neutral-500 font-mono">
                  · {item.year}
                </span>
              )}
            </div>

            <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal mb-4 tracking-wide leading-tight">
              {item.title}
            </h3>

            {item.synopsis && (
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-helvetica mb-6">
                {item.synopsis}
              </p>
            )}

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-helvetica">
              {item.director && (
                <div className="flex items-start gap-2.5">
                  <User className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-[11px] uppercase tracking-wider block">Director</span>
                    <span className="text-neutral-200 font-medium">{item.director}</span>
                  </div>
                </div>
              )}

              {item.leadCast && item.leadCast.length > 0 && (
                <div className="flex items-start gap-2.5">
                  <Film className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-[11px] uppercase tracking-wider block">Starring</span>
                    <span className="text-neutral-200">
                      {item.leadCast.join(', ')}
                    </span>
                  </div>
                </div>
              )}

              {item.specs?.camera && (
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-[11px] uppercase tracking-wider block">Camera & Sound</span>
                    <span className="text-neutral-300 font-mono text-[11px]">
                      {item.specs.camera} · {item.specs.sound || 'Dolby Atmos'}
                    </span>
                  </div>
                </div>
              )}

              {item.role && (
                <div className="flex items-start gap-2.5">
                  <Tag className="w-4 h-4 text-[#e50914] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-[11px] uppercase tracking-wider block">Production Assignment</span>
                    <span className="text-neutral-300">{item.role}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              SHADOWFAX FILMS ARCHIVE
            </span>
            <button
              onClick={onClose}
              className="text-xs font-medium text-[#e50914] hover:text-white transition-colors"
            >
              Return to Catalog →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
