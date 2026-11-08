// Procedural Web Audio API sound generator
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.05);
}

export function playParticleDropSound(type: 'proton' | 'neutron' | 'electron') {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  const freq = type === 'proton' ? 440 : type === 'neutron' ? 330 : 660;
  osc.type = type === 'electron' ? 'triangle' : 'sine';
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.09);
}

export function playSuccessChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = ctx.currentTime + index * 0.08;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(0.12, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.35);
  });
}

let activeToneOsc: OscillatorNode | null = null;
let activeToneGain: GainNode | null = null;

export function startContinuousTone(freq: number, type: OscillatorType = 'sine', volume = 0.1) {
  const ctx = getAudioContext();
  if (!ctx) return;
  stopContinuousTone();

  activeToneOsc = ctx.createOscillator();
  activeToneGain = ctx.createGain();

  activeToneOsc.type = type;
  activeToneOsc.frequency.setValueAtTime(freq, ctx.currentTime);

  activeToneGain.gain.setValueAtTime(volume, ctx.currentTime);

  activeToneOsc.connect(activeToneGain);
  activeToneGain.connect(ctx.destination);
  activeToneOsc.start();
}

export function updateContinuousToneFreq(freq: number) {
  if (activeToneOsc && audioCtx) {
    activeToneOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  }
}

export function stopContinuousTone() {
  if (activeToneOsc) {
    try {
      activeToneOsc.stop();
      activeToneOsc.disconnect();
    } catch {
      // ignore if already stopped
    }
    activeToneOsc = null;
  }
}
