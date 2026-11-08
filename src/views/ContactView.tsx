import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, Send, CheckCircle2, Film, Sparkles, Clock, Calculator } from 'lucide-react';
import { soundEngine } from '../utils/audioSynthesizer';

export const ContactView: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('brand-film');
  const [timeline, setTimeline] = useState<string>('1-2months');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['color-grade']);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'brand-film', label: 'Cinematic Brand Film', scope: 'Brand Storytelling & 4K Production' },
    { id: 'tvc', label: 'Commercial TVC & Broadcast', scope: 'High-Reach National Campaigns' },
    { id: 'fashion-show', label: 'Runway & Pageant Production', scope: 'Pan-India Events & Stage Execution' },
    { id: 'social-growth', label: 'Hospitality & Social Growth', scope: 'Culinary Reels & Performance Ads' },
    { id: 'talent-booking', label: 'Celebrity & Model Booking', scope: 'Direct Artist Representation' }
  ];

  const addonsList = [
    { id: 'celebrity', label: 'Celebrity / Reality Star Attachment' },
    { id: 'color-grade', label: 'Cinema 4K HDR Color Grade & Master' },
    { id: 'drone', label: 'Licensed Drone & Cine Aerial Capture' },
    { id: 'meta-ads', label: 'RED24 Media Targeted Paid Ad Rollout' }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playChime(600, 0.2);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-[1440px] mx-auto px-6 md:px-10">
      {/* Header */}
      <div className="mb-14 pb-8 border-b border-white/10">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#e50914] block mb-2 font-bold">
          DIRECT LINE · SECTION 18
        </span>
        <h1 className="font-display uppercase text-5xl md:text-8xl text-white font-bold leading-[0.95] tracking-wide mb-6">
          Let’s Connect & Create
        </h1>
        <p className="text-base text-neutral-300 font-helvetica max-w-2xl leading-relaxed">
          Ready to produce your next theatrical release, commercial TVC, beauty pageant, or viral brand campaign? Connect with our production desk in Kolkata for a tailored confidential proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Studio Credentials */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-xl bg-[#09090e] border border-white/15 shadow-xl space-y-6">
            <h3 className="font-instrument italic text-3xl text-white font-normal">
              Shadowfax Films Headquarters
            </h3>

            <div className="space-y-4 text-sm font-helvetica">
              <div className="flex items-start gap-4 p-3 rounded bg-black/40 border border-white/10">
                <MapPin className="w-5 h-5 text-[#e50914] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    KASBA REGISTERED STUDIO
                  </span>
                  <span className="text-white font-medium">
                    169, Shantipally Road, Kasba, Kolkata 700107, West Bengal, India
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded bg-black/40 border border-white/10">
                <Phone className="w-5 h-5 text-[#e50914] shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    PHONE & PRODUCTION HOTLINE
                  </span>
                  <a
                    href="tel:+917908309921"
                    className="text-white hover:text-[#e50914] font-mono font-medium transition-colors"
                  >
                    +91 7908309921
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded bg-black/40 border border-white/10">
                <Mail className="w-5 h-5 text-[#e50914] shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    OFFICIAL CORRESPONDENCE & AUDITIONS
                  </span>
                  <a
                    href="mailto:shadowfaxfilm@gmail.com"
                    className="text-white hover:text-[#e50914] font-mono font-medium transition-colors"
                  >
                    shadowfaxfilm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded bg-black/40 border border-white/10">
                <Globe className="w-5 h-5 text-[#e50914] shrink-0" />
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                    WEB DOMAIN
                  </span>
                  <a
                    href="https://www.shadwfaxfilm.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-white font-mono text-xs transition-colors"
                  >
                    https://www.shadwfaxfilm.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Official Instagram Handles
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#e50914]" />
                  <span>@SHADOWFAXFILMOFFICIAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#e50914]" />
                  <span>@MCA.STUDIO.OFFICIAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Audition Callout */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-950/30 to-black border border-[#e50914]/30">
            <span className="text-xs font-mono text-[#e50914] uppercase tracking-wider block mb-1">
              CASTING & AUDITIONS FOR GOA & MOVIES
            </span>
            <h4 className="font-instrument italic text-2xl text-white font-normal mb-2">
              Supermodel India & Feature Auditions
            </h4>
            <p className="text-xs text-neutral-300 font-helvetica leading-relaxed">
              Auditions are currently open for our upcoming Goa reality series and next theatrical productions. Email your 60-second video introduction, composite card, and Instagram handle.
            </p>
          </div>
        </div>

        {/* Right: Interactive Production Pitch Builder */}
        <div className="lg:col-span-7">
          <div className="p-8 md:p-10 rounded-xl bg-[#09090e] border border-white/15 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-4 h-4 text-[#e50914]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e50914]">
                PRODUCTION DESK ESTIMATOR
              </span>
            </div>
            <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal mb-2">
              Build Your Project Scope
            </h3>
            <p className="text-xs text-neutral-400 font-helvetica mb-8">
              Select your creative parameters below for an instant preliminary scope and prompt director review.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-lg bg-black/60 border border-green-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                <h4 className="font-instrument italic text-3xl text-white">
                  Production Brief Received
                </h4>
                <p className="text-sm text-neutral-300 font-helvetica max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{clientName || 'Partner'}</span>. Our executive producer and casting team at Kasba will review your requirements and reach out within 24 hours.
                </p>
                <div className="pt-4 text-xs font-mono text-neutral-400">
                  REF ID: SFX-{Math.floor(100000 + Math.random() * 900000)} · STATUS: DISPATCHED
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-neutral-900 text-xs font-mono text-neutral-300 rounded border border-white/10 hover:text-white"
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Project Type Selector */}
                <div>
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-3">
                    01. Select Production Classification
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-3 rounded text-left border transition-all text-xs font-helvetica ${
                          projectType === type.id
                            ? 'bg-[#e50914]/15 border-[#e50914] text-white shadow-sm'
                            : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="font-medium text-white">{type.label}</div>
                        <div className="text-[11px] font-mono text-neutral-400 mt-1">
                          {type.scope}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Add-ons Selection */}
                <div>
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-3">
                    02. Production Attachments & Enhancements
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {addonsList.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <button
                          type="button"
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded text-left border transition-all text-xs font-helvetica flex items-center justify-between ${
                            isChecked
                              ? 'bg-neutral-900 border-[#e50914] text-white'
                              : 'bg-black/40 border-white/10 text-neutral-400 hover:text-white'
                          }`}
                        >
                          <span>{addon.label}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                              isChecked
                                ? 'bg-[#e50914] border-[#e50914] text-white'
                                : 'border-white/20'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-2">
                      Full Name / Entity
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sen / Nexgen Brands"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#e50914] font-helvetica transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98300 00000"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#e50914] font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#e50914] font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block mb-2">
                    Project Synopsis / Vision
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Briefly describe your concept, brand goals, or feature script..."
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#e50914] font-helvetica transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#e50914] hover:bg-[#ff1f2d] text-white text-xs font-semibold uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.45)] flex items-center justify-center gap-2 group"
                >
                  <span>Dispatch Brief to Shadowfax Executive Producer</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
