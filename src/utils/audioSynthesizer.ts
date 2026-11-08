/**
 * Web Audio API synthesized cinematic soundscape
 * Self-contained, zero external mp3 dependencies, clean audio lifecycle.
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private isMuted: boolean = true;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.startDrone();
      this.playChime(440, 0.1);
    } else {
      this.stopDrone();
    }
    return !this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public startDrone() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    if (this.droneOsc) {
      try { this.droneOsc.stop(); } catch { /* ignore */ }
    }

    try {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, this.ctx.currentTime); // 55Hz cinematic A1 root

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, this.ctx.currentTime);
      filter.Q.setValueAtTime(4, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 2.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      this.droneOsc = osc;
      this.droneGain = gain;
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public stopDrone() {
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
        setTimeout(() => {
          if (this.droneOsc) {
            try { this.droneOsc.stop(); } catch { /* ignore */ }
            this.droneOsc = null;
          }
        }, 850);
      } catch {
        this.droneOsc = null;
      }
    }
  }

  public playClapperboard() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Ignored
    }
  }

  public playChime(freq = 520, duration = 0.15) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Ignored
    }
  }
}

export const soundEngine = new CinematicAudioEngine();
