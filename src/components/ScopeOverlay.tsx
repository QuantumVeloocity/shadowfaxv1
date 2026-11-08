import React from 'react';

interface ScopeOverlayProps {
  enabled: boolean;
}

export const ScopeOverlay: React.FC<ScopeOverlayProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex flex-col justify-between transition-opacity duration-500">
      {/* Top 2.39:1 Anamorphic Matte Bar */}
      <div className="w-full h-8 md:h-14 bg-black border-b border-red-950/40 relative shadow-2xl flex items-center justify-between px-6">
        <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
          ARRI 2.39:1 ANAMORPHIC WIDESCREEN MATTE
        </span>
        <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-600">
          <span>FPS: 24.000</span>
          <span className="text-[#e50914]">REC ●</span>
        </div>
      </div>

      {/* Center Safe Action Reticles */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        <div className="w-[88vw] h-[78vh] border border-white/[0.04] pointer-events-none relative">
          {/* Corner Crosshairs */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#e50914]/40" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e50914]/40" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e50914]/40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#e50914]/40" />
          {/* Subtle center cross */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center opacity-25">
            <div className="w-full h-[1px] bg-white" />
            <div className="absolute h-full w-[1px] bg-white" />
          </div>
        </div>
      </div>

      {/* Bottom 2.39:1 Anamorphic Matte Bar */}
      <div className="w-full h-8 md:h-14 bg-black border-t border-red-950/40 relative shadow-2xl flex items-center justify-between px-6">
        <div className="text-[10px] font-mono text-neutral-600 tracking-wider">
          SHADOWFAX FILMS · DIRECTORS VIEW
        </div>
        <div className="text-[10px] font-mono text-neutral-600 tracking-widest">
          TC: 01:24:19:04
        </div>
      </div>
    </div>
  );
};
