import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { soundEngine } from '../utils/audioSynthesizer';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [countdown, setCountdown] = useState<number | string>(3);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    soundEngine.playClapperboard();

    const t1 = setTimeout(() => {
      setCountdown(2);
      soundEngine.playChime(360, 0.08);
    }, 700);

    const t2 = setTimeout(() => {
      setCountdown(1);
      soundEngine.playChime(480, 0.08);
    }, 1400);

    const t3 = setTimeout(() => {
      setCountdown('ACTION');
      soundEngine.playChime(640, 0.2);
    }, 2100);

    const t4 = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 500);
    }, 2800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setIsDone(true);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#050507] flex flex-col items-center justify-center overflow-hidden film-scanlines select-none"
        >
          {/* Film leader crosshair circles */}
          <div className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border border-[#e50914]/20 flex items-center justify-center">
              <div className="w-[70%] h-[70%] rounded-full border border-dashed border-white/15" />
            </div>
            {/* Crosshair lines */}
            <div className="absolute inset-x-0 h-[1px] bg-white/10" />
            <div className="absolute inset-y-0 w-[1px] bg-white/10" />
          </div>

          {/* Rotating vintage leader arm */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full pointer-events-none"
          >
            <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent to-[#e50914] origin-right ml-auto" />
          </motion.div>

          {/* Center Countdown Display */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              key={String(countdown)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="font-instrument italic text-7xl md:text-9xl text-white font-bold tracking-wider drop-shadow-[0_0_35px_rgba(229,9,20,0.7)]"
            >
              {countdown}
            </motion.div>
            
            <div className="mt-6 flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              <span>ROLL 24 FPS</span>
              <span>·</span>
              <span className="text-[#e50914]">SHADOWFAX STUDIOS</span>
              <span>·</span>
              <span>TAKE 01</span>
            </div>
          </div>

          {/* Film Slate Footer Metadata */}
          <div className="absolute bottom-10 inset-x-0 max-w-xl mx-auto px-6 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider border-t border-white/10 pt-4">
            <div>CAM: ARRI ALEXA LF</div>
            <div>SHUTTER: 180°</div>
            <div>SCENE: PREMIERE</div>
          </div>

          {/* Skip CTA */}
          <button
            onClick={() => {
              setIsDone(true);
              onComplete();
            }}
            className="absolute top-8 right-8 text-xs font-mono tracking-widest text-neutral-400 hover:text-white px-3 py-1.5 rounded border border-white/10 hover:border-[#e50914] transition-colors"
          >
            SKIP INTRO [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
