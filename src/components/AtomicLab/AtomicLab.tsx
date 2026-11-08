import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../../types';
import { ALL_ELEMENTS } from '../../data/elements';
import {
  Plus,
  Minus,
  RotateCcw,
  Volume2,
  Sparkles,
  Award,
  ShieldAlert,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Layers,
  Zap,
} from 'lucide-react';
import { speakText } from '../../utils/speech';
import { playClickSound, playParticleDropSound, playSuccessChime } from '../../utils/audioEffects';
import confetti from 'canvas-confetti';

interface AtomicLabProps {
  language: Language;
  onAddScore: (points: number) => void;
}

interface AtomChallenge {
  id: string;
  titleEn: string;
  titleAr: string;
  reqProtons: number;
  reqNeutrons: number;
  reqElectrons: number;
  hintEn: string;
  hintAr: string;
}

export const AtomicLab: React.FC<AtomicLabProps> = ({ language, onAddScore }) => {
  const isAr = language === 'ar';

  // Atomic state
  const [protons, setProtons] = useState<number>(6); // Default: Carbon
  const [neutrons, setNeutrons] = useState<number>(6);
  const [electrons, setElectrons] = useState<number>(6);

  // Challenges
  const challenges: AtomChallenge[] = [
    {
      id: 'carbon',
      titleEn: 'Build a neutral Carbon atom',
      titleAr: 'ابنِ ذرة كربون متعادلة',
      reqProtons: 6,
      reqNeutrons: 6,
      reqElectrons: 6,
      hintEn: 'Carbon (C) requires 6 protons, 6 neutrons, and 6 electrons.',
      hintAr: 'الكربون يحتاج 6 بروتونات، 6 نيوترونات، و 6 إلكترونات.',
    },
    {
      id: 'oxygen',
      titleEn: 'Build a neutral Oxygen atom',
      titleAr: 'ابنِ ذرة أكسجين متعادلة',
      reqProtons: 8,
      reqNeutrons: 8,
      reqElectrons: 8,
      hintEn: 'Oxygen (O) requires 8 protons, 8 neutrons, and 8 electrons.',
      hintAr: 'الأكسجين يحتاج 8 بروتونات، 8 نيوترونات، و 8 إلكترونات.',
    },
    {
      id: 'sodium-ion',
      titleEn: 'Create a Sodium ion (Na⁺)',
      titleAr: 'أنشئ أيون الصوديوم الموجب (Na⁺)',
      reqProtons: 11,
      reqNeutrons: 12,
      reqElectrons: 10,
      hintEn: 'Sodium has 11 protons and 12 neutrons. To make a +1 cation, it must lose 1 electron (10 electrons).',
      hintAr: 'الصوديوم يمتلك 11 بروتوناً و 12 نيوتروناً. لعمل أيون +1، انزع إلكتروناً واحداً ليتبقى 10 إلكترونات.',
    },
    {
      id: 'helium',
      titleEn: 'Build a neutral Helium atom',
      titleAr: 'ابنِ ذرة هيليوم متعادلة',
      reqProtons: 2,
      reqNeutrons: 2,
      reqElectrons: 2,
      hintEn: 'Helium (He) requires 2 protons, 2 neutrons, and 2 electrons in the K shell.',
      hintAr: 'الهيليوم يحتاج بروتونين، ونيوترونين، وإلكترونين في المدار الأول K.',
    },
    {
      id: 'chloride-ion',
      titleEn: 'Create a Chloride ion (Cl⁻)',
      titleAr: 'أنشئ أيون الكلوريد السالب (Cl⁻)',
      reqProtons: 17,
      reqNeutrons: 18,
      reqElectrons: 18,
      hintEn: 'Chlorine has 17 protons and 18 neutrons. To make a -1 anion, it must gain 1 electron (18 electrons).',
      hintAr: 'الكلور لديه 17 بروتوناً و 18 نيوتروناً. لعمل أيون سالب -1، أضف إلكتروناً ليصبح 18 إلكتروناً.',
    },
  ];

  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number | null>(null);
  const [challengeSolved, setChallengeSolved] = useState<boolean>(false);

  // Derived science properties
  const atomicNumber = protons;
  const massNumber = protons + neutrons;
  const netCharge = protons - electrons;

  const currentElement = ALL_ELEMENTS.find((el) => el.number === protons) || {
    number: protons,
    symbol: protons === 0 ? '?' : `E-${protons}`,
    nameEn: protons === 0 ? 'No Element' : `Element ${protons}`,
    nameAr: protons === 0 ? 'لا يوجد عنصر' : `عنصر ${protons}`,
  };

  // Charge status label
  const chargeStatus =
    netCharge === 0
      ? { labelEn: 'Neutral Atom', labelAr: 'ذرة متعادلة كهربائياً', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' }
      : netCharge > 0
      ? { labelEn: `Positive Ion (Cation +${netCharge})`, labelAr: `أيون موجب (كاتيون +${netCharge})`, color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' }
      : { labelEn: `Negative Ion (Anion ${netCharge})`, labelAr: `أيون سالب (أنيون ${netCharge})`, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' };

  // Stability detection (approximate N/Z ratio rule for light/medium atoms)
  const isStable = (() => {
    if (protons === 0) return false;
    if (protons === 1) return neutrons <= 1; // H-1, H-2 stable
    if (protons === 2) return neutrons === 1 || neutrons === 2;
    const ratio = neutrons / protons;
    return ratio >= 0.8 && ratio <= 1.5;
  })();

  // Distribute electrons into Bohr shells: K=2, L=8, M=18, N=32
  const shellCapacities = [2, 8, 18, 32];
  const occupiedShells: number[] = [];
  let remainingElectrons = electrons;
  for (const cap of shellCapacities) {
    if (remainingElectrons <= 0) break;
    const inShell = Math.min(remainingElectrons, cap);
    occupiedShells.push(inShell);
    remainingElectrons -= inShell;
  }
  if (remainingElectrons > 0) {
    occupiedShells.push(remainingElectrons);
  }

  // Check challenge completion
  useEffect(() => {
    if (activeChallengeIdx !== null) {
      const ch = challenges[activeChallengeIdx];
      if (
        protons === ch.reqProtons &&
        neutrons === ch.reqNeutrons &&
        electrons === ch.reqElectrons
      ) {
        setChallengeSolved(true);
        playSuccessChime();
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
        onAddScore(30);
      } else {
        setChallengeSolved(false);
      }
    }
  }, [protons, neutrons, electrons, activeChallengeIdx]);

  // Particle Controls
  const handleAddProton = () => {
    playParticleDropSound('proton');
    setProtons((p) => Math.min(118, p + 1));
  };
  const handleRemoveProton = () => {
    playClickSound();
    setProtons((p) => Math.max(0, p - 1));
  };

  const handleAddNeutron = () => {
    playParticleDropSound('neutron');
    setNeutrons((n) => Math.min(180, n + 1));
  };
  const handleRemoveNeutron = () => {
    playClickSound();
    setNeutrons((n) => Math.max(0, n - 1));
  };

  const handleAddElectron = () => {
    playParticleDropSound('electron');
    setElectrons((e) => Math.min(118, e + 1));
  };
  const handleRemoveElectron = () => {
    playClickSound();
    setElectrons((e) => Math.max(0, e - 1));
  };

  const handleReset = () => {
    playClickSound();
    setProtons(6);
    setNeutrons(6);
    setElectrons(6);
    setChallengeSolved(false);
  };

  const handlePronounceAtom = () => {
    const text = isAr
      ? `تم بناء ذرة ${currentElement.nameAr}. العدد الذري ${atomicNumber}. عدد الكتلة ${massNumber}. الشحنة الكهربائية ${netCharge}.`
      : `Built atom of ${currentElement.nameEn}. Atomic number ${atomicNumber}. Mass number ${massNumber}. Electrical charge ${netCharge}.`;
    speakText(text, language);
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, type: 'proton' | 'neutron' | 'electron') => {
    e.dataTransfer.setData('particleType', type);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('particleType');
    if (type === 'proton') handleAddProton();
    else if (type === 'neutron') handleAddNeutron();
    else if (type === 'electron') handleAddElectron();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isAr ? 'مختبر الفيزياء النووية والكيمياء' : 'Nuclear & Atomic Physics Lab'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? 'مختبر التركيب الذري – ابنِ ذرتك بنفسك!' : 'Atomic Structure Lab – Build Your Own Atom'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'أضف البروتونات والنيوترونات والإلكترونات، راقب تغير هوية العنصر وكتلته وشحنته الكهربائية مباشرة.'
              : 'Add protons, neutrons, and electrons to dynamically synthesize elements and test ion charges.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePronounceAtom}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold border border-slate-700 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isAr ? 'استمع لوصف الذرة' : 'Speak Atom Data'}</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-colors"
            title={isAr ? 'إعادة ضبط الذرة إلى الكربون' : 'Reset to Carbon'}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* Challenge Selection Tray */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
          {isAr ? 'تحديات بناء الذرة التعليمية' : 'Educational Atom Challenges'}
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {challenges.map((ch, idx) => {
            const active = activeChallengeIdx === idx;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  playClickSound();
                  setActiveChallengeIdx(active ? null : idx);
                }}
                className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  active
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{isAr ? ch.titleAr : ch.titleEn}</span>
              </button>
            );
          })}
        </div>

        {activeChallengeIdx !== null && (
          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-amber-500/30 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              💡 {isAr ? challenges[activeChallengeIdx].hintAr : challenges[activeChallengeIdx].hintEn}
            </span>
            {challengeSolved && (
              <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0 ml-2">
                <CheckCircle className="w-4 h-4" />
                {isAr ? 'تم إنجاز التحدي بنجاح!' : 'Challenge Solved! (+30 XP)'}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main Interactive Stage: Atom Viewport & Live Science Readouts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: 2D/3D Bohr Orbit Stage & Particle Drops */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 relative min-h-[480px] flex flex-col items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Subtle Stage Background Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-[450px] h-[450px] rounded-full border border-dashed border-cyan-500 animate-spin [animation-duration:90s]" />
          </div>

          {/* Central Animated Atom Visualizer */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            
            {/* Energy Shells */}
            {occupiedShells.map((count, sIdx) => {
              const radius = 60 + sIdx * 34; // Radius in pixels
              return (
                <div
                  key={sIdx}
                  className="absolute rounded-full border border-cyan-500/25 flex items-center justify-center pointer-events-none"
                  style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                  }}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold text-cyan-400/60 bg-slate-950 px-1">
                    n={sIdx + 1} ({count} e⁻)
                  </span>

                  {/* Electrons orbiting along the shell */}
                  {Array.from({ length: count }, (_, eIdx) => {
                    const angleDeg = (eIdx / count) * 360;
                    return (
                      <div
                        key={eIdx}
                        className="absolute w-full h-full pointer-events-none animate-spin"
                        style={{
                          animationDuration: `${12 + sIdx * 6}s`,
                          transform: `rotate(${angleDeg}deg)`,
                        }}
                      >
                        <div
                          className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/80 flex items-center justify-center text-[9px] font-black text-slate-950 absolute -top-2 left-1/2 -translate-x-1/2"
                          title="Electron (-)"
                        >
                          -
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {/* Central Nucleus with Protons and Neutrons */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900/90 border-2 border-rose-500/50 flex flex-wrap items-center justify-center p-2 shadow-2xl shadow-rose-500/20">
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-black text-white font-mono block">
                  {currentElement.symbol}
                </span>
                <span className="text-[10px] text-slate-400 font-mono block">
                  {protons}p⁺ | {neutrons}n⁰
                </span>
              </div>
            </div>
          </div>

          {/* Drag & Drop Particle Spawners Drawer */}
          <div className="w-full mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4">
            
            {/* Proton Item */}
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, 'proton')}
              className="flex items-center gap-3 bg-slate-900 border border-rose-500/40 p-2.5 rounded-2xl cursor-grab active:cursor-grabbing hover:bg-slate-850"
            >
              <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-xs shadow-md shadow-rose-500/50">
                +
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-xs font-bold text-rose-300 block">
                  {isAr ? 'بروتون (موجب)' : 'Proton (+)'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {isAr ? 'اسحب أو اضغط للزيادة' : 'Drag or click to add'}
                </span>
              </div>
              <div className="flex items-center gap-1 ml-2 rtl:ml-0 rtl:mr-2">
                <button
                  onClick={handleRemoveProton}
                  className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <button
                  onClick={handleAddProton}
                  className="w-6 h-6 rounded-lg bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center text-xs font-bold"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Neutron Item */}
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, 'neutron')}
              className="flex items-center gap-3 bg-slate-900 border border-slate-700 p-2.5 rounded-2xl cursor-grab active:cursor-grabbing hover:bg-slate-850"
            >
              <div className="w-7 h-7 rounded-full bg-slate-500 text-white flex items-center justify-center font-black text-xs shadow-md">
                0
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-xs font-bold text-slate-300 block">
                  {isAr ? 'نيوترون (متعادل)' : 'Neutron (0)'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {isAr ? 'اسحب أو اضغط للزيادة' : 'Drag or click to add'}
                </span>
              </div>
              <div className="flex items-center gap-1 ml-2 rtl:ml-0 rtl:mr-2">
                <button
                  onClick={handleRemoveNeutron}
                  className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <button
                  onClick={handleAddNeutron}
                  className="w-6 h-6 rounded-lg bg-slate-600 hover:bg-slate-500 text-white flex items-center justify-center text-xs font-bold"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Electron Item */}
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, 'electron')}
              className="flex items-center gap-3 bg-slate-900 border border-cyan-500/40 p-2.5 rounded-2xl cursor-grab active:cursor-grabbing hover:bg-slate-850"
            >
              <div className="w-7 h-7 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-md shadow-cyan-400/50">
                -
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-xs font-bold text-cyan-300 block">
                  {isAr ? 'إلكترون (سالب)' : 'Electron (-)'}
                </span>
                <span className="text-[10px] text-slate-400">
                  {isAr ? 'اسحب أو اضغط للزيادة' : 'Drag or click to add'}
                </span>
              </div>
              <div className="flex items-center gap-1 ml-2 rtl:ml-0 rtl:mr-2">
                <button
                  onClick={handleRemoveElectron}
                  className="w-6 h-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-bold"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <button
                  onClick={handleAddElectron}
                  className="w-6 h-6 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center text-xs font-bold"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Live Scientific Inspection & Isotope Telemetry Console */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Main Elemental Identity Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 text-left rtl:text-right shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {isAr ? `العدد الذري Z = ${atomicNumber}` : `Atomic Number Z = ${atomicNumber}`}
                </span>
                <h3 className="text-2xl font-black text-white mt-0.5">
                  {isAr ? currentElement.nameAr : currentElement.nameEn}
                </h3>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center">
                <span className="text-2xl font-black text-cyan-300 font-mono">
                  {currentElement.symbol}
                </span>
              </div>
            </div>

            {/* Electrical Charge Indicator */}
            <div className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center justify-between ${chargeStatus.color}`}>
              <span>{isAr ? chargeStatus.labelAr : chargeStatus.labelEn}</span>
              <span className="font-mono text-sm">{netCharge > 0 ? `+${netCharge}` : netCharge}</span>
            </div>

            {/* Stability Indicator */}
            <div className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center justify-between ${
              isStable
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}>
              <div className="flex items-center gap-1.5">
                {isStable ? <ShieldCheck className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                <span>
                  {isStable
                    ? (isAr ? 'نواة مستقرة طبيعياً' : 'Stable Nuclear Isotope')
                    : (isAr ? 'نواة غير مستقرة / مشعة' : 'Unstable / Radioactive Isotope')}
                </span>
              </div>
              <span className="font-mono text-[11px]">
                N/Z: {(neutrons / (protons || 1)).toFixed(2)}
              </span>
            </div>

            {/* Key Measurements Breakdown */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{isAr ? 'عدد الكتلة (A)' : 'Mass Number (A)'}</span>
                <span className="text-xl font-mono font-bold text-white">{massNumber}</span>
                <span className="text-[10px] text-slate-500 block">{isAr ? 'بروتونات + نيوترونات' : 'p⁺ + n⁰'}</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{isAr ? 'الشحنة الكلية' : 'Net Charge'}</span>
                <span className="text-xl font-mono font-bold text-cyan-300">
                  {netCharge > 0 ? `+${netCharge}` : netCharge}
                </span>
                <span className="text-[10px] text-slate-500 block">{isAr ? 'بروتونات - إلكترونات' : 'p⁺ - e⁻'}</span>
              </div>
            </div>

            {/* Subatomic Counts */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-rose-400 font-bold">{isAr ? 'البروتونات (شحنة موجبة)' : 'Protons (p⁺)'}</span>
                <span className="font-mono font-bold text-white">{protons}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-slate-400 font-bold">{isAr ? 'النيوترونات (متعادلة الشحنة)' : 'Neutrons (n⁰)'}</span>
                <span className="font-mono font-bold text-white">{neutrons}</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-cyan-400 font-bold">{isAr ? 'الإلكترونات (شحنة سالبة)' : 'Electrons (e⁻)'}</span>
                <span className="font-mono font-bold text-white">{electrons}</span>
              </div>
            </div>

            {/* Isotope Identity String */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 block mb-0.5">{isAr ? 'اسم النظير الكيميائي' : 'Isotope Notation'}</span>
              <span className="font-mono font-bold text-white text-sm">
                {currentElement.nameEn}-{massNumber} ({currentElement.symbol}-{massNumber})
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
