import React, { useState, useEffect, useRef } from 'react';
import { Experiment, LabCategory, Language } from '../../types';
import { EXPERIMENTS_DATA } from '../../data/experiments';
import {
  FlaskConical,
  Zap,
  Dna,
  Volume2,
  Play,
  RotateCcw,
  CheckCircle,
  HelpCircle,
  Info,
  ShieldAlert,
  Search,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Sliders,
  Award,
  Eye,
  Beaker,
} from 'lucide-react';
import { speakText, stopSpeech } from '../../utils/speech';
import {
  playClickSound,
  playSuccessChime,
  startContinuousTone,
  stopContinuousTone,
  updateContinuousToneFreq,
} from '../../utils/audioEffects';
import confetti from 'canvas-confetti';

interface VirtualLabProps {
  language: Language;
  initialFilter?: string;
  onAddScore: (points: number) => void;
}

export const VirtualLab: React.FC<VirtualLabProps> = ({
  language,
  initialFilter = 'all',
  onAddScore,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const [categoryFilter, setCategoryFilter] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment>(EXPERIMENTS_DATA[0]);
  const [activeTabMode, setActiveTabMode] = useState<'simulation' | 'handson' | 'theory' | 'quiz'>('simulation');

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Synchronize category filter with prop
  useEffect(() => {
    if (initialFilter && initialFilter !== 'all') {
      setCategoryFilter(initialFilter);
      const match = EXPERIMENTS_DATA.find((e) => e.category === initialFilter);
      if (match) setSelectedExperiment(match);
    }
  }, [initialFilter]);

  // Reset quiz when experiment changes
  useEffect(() => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    stopContinuousTone();
    stopSpeech();
  }, [selectedExperiment.id]);

  // Filtered experiments
  const filteredExperiments = EXPERIMENTS_DATA.filter((exp) => {
    const matchesCat = categoryFilter === 'all' || exp.category === categoryFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      exp.titleEn.toLowerCase().includes(q) ||
      exp.titleAr.includes(q) ||
      exp.explanationEn.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  // Audio Speech Narrator
  const handleNarrate = () => {
    playClickSound();
    const text = isAr
      ? `تجربة: ${selectedExperiment.titleAr}. الهدف العلمي: ${selectedExperiment.objectiveAr}. الشرح: ${selectedExperiment.explanationAr}. الاستنتاج: ${selectedExperiment.conclusionAr}.`
      : `Experiment: ${selectedExperiment.titleEn}. Scientific Objective: ${selectedExperiment.objectiveEn}. Explanation: ${selectedExperiment.explanationEn}. Conclusion: ${selectedExperiment.conclusionEn}.`;
    speakText(text, language);
  };

  // Quiz Handling
  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    playClickSound();
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    playClickSound();
    let score = 0;
    selectedExperiment.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === selectedExperiment.quiz.length) {
      playSuccessChime();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      onAddScore(25);
    }
  };

  // ==========================================
  // SIMULATION STATE VARIABLES FOR 22 EXPERIMENTS
  // ==========================================
  // Chemistry 1: Volcano
  const [volcanoErupting, setVolcanoErupting] = useState(false);
  const [bakingSodaAmount, setBakingSodaAmount] = useState(30);
  const [vinegarAmount, setVinegarAmount] = useState(40);

  // Chemistry 2: pH Indicator
  const [selectedPHSubstance, setSelectedPHSubstance] = useState<'lemon' | 'vinegar' | 'water' | 'soda' | 'soap'>('lemon');

  // Chemistry 3: Crystal Growth
  const [crystalCoolingSpeed, setCrystalCoolingSpeed] = useState<'slow' | 'fast'>('slow');
  const [crystalGrowthProgress, setCrystalGrowthProgress] = useState(0);

  // Chemistry 4: Density Tower
  const [densityDroppedItem, setDensityDroppedItem] = useState<'bolt' | 'grape' | 'cap' | null>(null);

  // Chemistry 5: Solubility
  const [solubilityTemp, setSolubilityTemp] = useState(25);
  const [isStirring, setIsStirring] = useState(false);
  const [dissolvedAmount, setDissolvedAmount] = useState(20);

  // Physics 1: Electric Circuit
  const [circuitVoltage, setCircuitVoltage] = useState(9);
  const [circuitResistance, setCircuitResistance] = useState(30);
  const [circuitSwitchClosed, setCircuitSwitchClosed] = useState(true);

  // Physics 4: Refraction
  const [refractionIncidentAngle, setRefractionIncidentAngle] = useState(35);
  const [refractionIndex2, setRefractionIndex2] = useState(1.5); // Glass

  // Physics 7: Sound Waves
  const [soundFreq, setSoundFreq] = useState(440);
  const [soundPlaying, setSoundPlaying] = useState(false);

  // Physics 8: Pendulum
  const [pendulumLength, setPendulumLength] = useState(1.0);
  const [pendulumGravity, setPendulumGravity] = useState(9.8); // Earth

  // Biology 1: Photosynthesis
  const [photoLightIntensity, setPhotoLightIntensity] = useState(600);
  const [photoCo2Level, setPhotoCo2Level] = useState(400);

  // Biology 3: Microscope
  const [microscopeSlide, setMicroscopeSlide] = useState<'onion' | 'cheek' | 'paramecium'>('onion');
  const [microscopePower, setMicroscopePower] = useState<'4x' | '10x' | '40x'>('10x');
  const [microscopeFocus, setMicroscopeFocus] = useState(50);

  // Clean up sound tone on unmount
  useEffect(() => {
    return () => {
      stopContinuousTone();
    };
  }, []);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-2">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? 'المختبر الافتراضي العلمي الشامل' : 'Full Virtual Laboratory Suite'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? '22 تجربة علمية تفاعلية (كيمياء، فيزياء، أحياء)' : '22 Interactive STEM Experiments'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'اختر التجربة لتحريك عناصر المحاكاة وقراءة النتائج وفحص الملاحظات واجتياز الاختبار العلمي.'
              : 'Interact with real parameters, observe physical changes, and evaluate hypotheses through self-quizzes.'}
          </p>
        </div>

        {/* Audio Read-Aloud Narration */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleNarrate}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold border border-slate-700 transition-colors shadow-sm"
          >
            <Volume2 className="w-4 h-4" />
            <span>{isAr ? 'قراءة صوتية للتجربة' : 'Narrate Lesson'}</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Left Sidebar List of Experiments + Right Experiment Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Experiments Selector & Categories */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${
                categoryFilter === 'all' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'الكل (22)' : 'All (22)'}
            </button>
            <button
              onClick={() => setCategoryFilter('chemistry')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${
                categoryFilter === 'chemistry' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'كيمياء' : 'Chemistry'}
            </button>
            <button
              onClick={() => setCategoryFilter('physics')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${
                categoryFilter === 'physics' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'فيزياء' : 'Physics'}
            </button>
            <button
              onClick={() => setCategoryFilter('biology')}
              className={`flex-1 py-1.5 rounded-lg transition-colors ${
                categoryFilter === 'biology' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'أحياء' : 'Biology'}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في التجارب...' : 'Search experiments...'}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-3 rtl:pl-3 rtl:pr-9 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Experiments Scrollable List */}
          <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {filteredExperiments.map((exp) => {
              const active = selectedExperiment.id === exp.id;
              const catColor =
                exp.category === 'chemistry'
                  ? 'text-rose-400 border-rose-500/30 bg-rose-500/10'
                  : exp.category === 'physics'
                  ? 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10'
                  : 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';

              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    playClickSound();
                    setSelectedExperiment(exp);
                  }}
                  className={`w-full text-left rtl:text-right p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    active
                      ? 'bg-slate-900 border-cyan-500 shadow-md ring-1 ring-cyan-500/40'
                      : 'bg-slate-950/60 hover:bg-slate-900 border-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl border shrink-0 ${catColor}`}>
                      {exp.category === 'chemistry' ? (
                        <FlaskConical className="w-4 h-4" />
                      ) : exp.category === 'physics' ? (
                        <Zap className="w-4 h-4" />
                      ) : (
                        <Dna className="w-4 h-4" />
                      )}
                    </div>
                    <div className="truncate">
                      <span className="text-xs font-bold text-white block truncate">
                        {isAr ? exp.titleAr : exp.titleEn}
                      </span>
                      <span className="text-[10px] text-slate-500 capitalize">
                        {exp.category} · {exp.quiz.length} {isAr ? 'أسئلة' : 'quiz Qs'}
                      </span>
                    </div>
                  </div>

                  <Arrow className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-cyan-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Active Experiment Workspace & Simulator */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Experiment Header & Mode Switcher */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {selectedExperiment.category} LAB
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {isAr ? selectedExperiment.titleAr : selectedExperiment.titleEn}
                </h3>
              </div>

              {/* Mode Tabs: Simulation vs Hands-on Home vs Theory vs Quiz */}
              <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold">
                <button
                  onClick={() => setActiveTabMode('simulation')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTabMode === 'simulation' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'المحاكاة التفاعلية' : 'Simulation'}
                </button>
                <button
                  onClick={() => setActiveTabMode('handson')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTabMode === 'handson' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'التجربة بالمنزل' : 'Hands-on'}
                </button>
                <button
                  onClick={() => setActiveTabMode('theory')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTabMode === 'theory' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'الشرح والملاحظات' : 'Theory & Observations'}
                </button>
                <button
                  onClick={() => setActiveTabMode('quiz')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeTabMode === 'quiz' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isAr ? 'الاختبار' : 'Quiz'}
                </button>
              </div>
            </div>

            {/* Scientific Objective Callout */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">
                  {isAr ? 'الهدف العلمي من التجربة:' : 'Scientific Objective:'}
                </span>
                <span className="text-slate-300">
                  {isAr ? selectedExperiment.objectiveAr : selectedExperiment.objectiveEn}
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* TAB 1: INTERACTIVE SIMULATION STAGE                      */}
          {/* ======================================================== */}
          {activeTabMode === 'simulation' && (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl min-h-[460px] flex flex-col justify-between space-y-6">
              
              {/* Specialized Simulation Rendering based on simType */}
              <div className="w-full flex-1 flex flex-col items-center justify-center relative min-h-[280px]">
                
                {/* 1. Volcano Simulation */}
                {selectedExperiment.simType === 'volcano' && (
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-72 h-56 flex items-end justify-center">
                      {/* Volcano Mountain Geometry SVG */}
                      <svg viewBox="0 0 300 200" className="w-full h-full">
                        {/* Brown Mountain Body */}
                        <polygon points="20,200 130,70 170,70 280,200" fill="#442a1d" />
                        <polygon points="120,70 150,200 180,70" fill="#2d1b12" />
                        {/* Crater Rim */}
                        <ellipse cx="150" cy="70" rx="22" ry="7" fill="#1e130c" />
                        
                        {/* Lava / Foam Eruption particles when erupting */}
                        {volcanoErupting && (
                          <g>
                            <ellipse cx="150" cy="68" rx="20" ry="6" fill="#ef4444" className="animate-pulse" />
                            {/* Lava streams flowing down */}
                            <path d="M140,70 Q130,120 110,180" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
                            <path d="M160,70 Q170,110 190,170" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" />
                            <path d="M150,70 Q145,130 155,190" stroke="#eab308" strokeWidth="4" fill="none" strokeLinecap="round" />
                            {/* Bubbling CO2 foam plume */}
                            <circle cx="150" cy="40" r="18" fill="rgba(254, 240, 138, 0.8)" className="animate-ping" />
                            <circle cx="138" cy="25" r="14" fill="rgba(251, 146, 60, 0.7)" />
                            <circle cx="162" cy="20" r="16" fill="rgba(239, 68, 68, 0.7)" />
                          </g>
                        )}
                      </svg>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-xs font-mono text-cyan-400 font-bold block">
                        {volcanoErupting
                          ? (isAr ? '🔥 تفاعل نشط: تحرر غاز ثاني أكسيد الكربون CO₂ ورغوة فوارة!' : '🔥 Reaction Active: Carbon Dioxide CO₂ Gas Erupting!')
                          : (isAr ? 'اضغط زر إطلاق البركان لبدء التفاعل' : 'Ready: Trigger reaction below')}
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. pH Indicator Simulation */}
                {selectedExperiment.simType === 'ph-indicator' && (
                  <div className="w-full flex flex-col items-center space-y-4">
                    <div className="flex items-center gap-6 justify-center">
                      {/* Beaker with dynamic colored liquid */}
                      <div className="relative w-36 h-48 border-4 border-slate-400 rounded-b-3xl border-t-0 p-2 flex flex-col justify-end items-center bg-slate-900/40">
                        <div
                          className="w-full rounded-b-2xl transition-all duration-700 flex items-center justify-center font-bold text-xs"
                          style={{
                            height: '75%',
                            backgroundColor:
                              selectedPHSubstance === 'lemon'
                                ? '#f43f5e' // Bright red/pink pH ~2
                                : selectedPHSubstance === 'vinegar'
                                ? '#fb7185' // Pink pH ~3
                                : selectedPHSubstance === 'water'
                                ? '#8b5cf6' // Violet neutral pH 7
                                : selectedPHSubstance === 'soda'
                                ? '#06b6d4' // Blue/cyan pH 8.5
                                : '#10b981', // Green pH 10
                            color: '#ffffff',
                          }}
                        >
                          <span className="font-mono text-sm shadow-sm">
                            pH {selectedPHSubstance === 'lemon' ? '2.0' : selectedPHSubstance === 'vinegar' ? '3.0' : selectedPHSubstance === 'water' ? '7.0' : selectedPHSubstance === 'soda' ? '8.5' : '10.0'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Selector of household substances */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {[
                        { id: 'lemon', nameEn: 'Lemon Juice', nameAr: 'عصير ليمون (حمض)' },
                        { id: 'vinegar', nameEn: 'Vinegar', nameAr: 'خل مخفف (حمض)' },
                        { id: 'water', nameEn: 'Pure Water', nameAr: 'ماء نقي (متعادل)' },
                        { id: 'soda', nameEn: 'Baking Soda', nameAr: 'بيكربونات صوديوم (قاعدة)' },
                        { id: 'soap', nameEn: 'Liquid Soap', nameAr: 'صابون سائل (قاعدة)' },
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            playClickSound();
                            setSelectedPHSubstance(sub.id as any);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            selectedPHSubstance === sub.id
                              ? 'bg-cyan-500 text-slate-950'
                              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {isAr ? sub.nameAr : sub.nameEn}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Electric Circuit Simulation */}
                {selectedExperiment.simType === 'circuit' && (
                  <div className="w-full flex flex-col items-center space-y-4">
                    <div className="relative w-80 h-48 border-2 border-cyan-500/40 rounded-2xl p-4 flex items-center justify-between bg-slate-900/50">
                      
                      {/* Battery Left */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-16 bg-amber-500/20 border-2 border-amber-500 rounded-lg flex flex-col items-center justify-center text-amber-300 font-mono font-bold text-xs">
                          <span>{circuitVoltage}V</span>
                          <span className="text-[10px]">+ / -</span>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1">{isAr ? 'البطارية' : 'Battery'}</span>
                      </div>

                      {/* Switch Center Top */}
                      <button
                        onClick={() => {
                          playClickSound();
                          setCircuitSwitchClosed(!circuitSwitchClosed);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                          circuitSwitchClosed
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500'
                        }`}
                      >
                        {circuitSwitchClosed ? (isAr ? 'المفتاح: مغلق (سريان)' : 'Switch: CLOSED') : (isAr ? 'المفتاح: مفتوح (مقطوع)' : 'Switch: OPEN')}
                      </button>

                      {/* Light Bulb Right */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-14 h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            circuitSwitchClosed
                              ? 'bg-amber-400 border-amber-300 shadow-xl shadow-amber-400/80 text-slate-950 font-bold'
                              : 'bg-slate-800 border-slate-700 text-slate-600'
                          }`}
                        >
                          <Zap className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1">{isAr ? 'المصباح' : 'Bulb'}</span>
                      </div>
                    </div>

                    {/* Ohm's Law Telemetry Box */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-6 text-xs font-mono">
                      <span>V = {circuitVoltage} V</span>
                      <span>R = {circuitResistance} Ω</span>
                      <span className="text-cyan-400 font-bold">
                        I = {circuitSwitchClosed ? (circuitVoltage / circuitResistance).toFixed(2) : '0.00'} A
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. Sound Wave Oscilloscope Simulation */}
                {selectedExperiment.simType === 'sound-waves' && (
                  <div className="w-full flex flex-col items-center space-y-4">
                    <div className="w-full max-w-md h-36 bg-slate-900 border border-cyan-500/40 rounded-2xl overflow-hidden relative flex items-center justify-center p-2">
                      <svg viewBox="0 0 400 120" className="w-full h-full">
                        {/* Grid lines */}
                        <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
                        {/* Sinusoidal Wave */}
                        <path
                          d={`M ${Array.from({ length: 400 }, (_, x) => {
                            const cycles = (soundFreq / 100);
                            const y = 60 + 35 * Math.sin((x / 400) * cycles * 2 * Math.PI);
                            return `${x},${y}`;
                          }).join(' L ')}`}
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          if (soundPlaying) {
                            stopContinuousTone();
                            setSoundPlaying(false);
                          } else {
                            startContinuousTone(soundFreq, 'sine', 0.12);
                            setSoundPlaying(true);
                          }
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                          soundPlaying ? 'bg-rose-600 text-white' : 'bg-cyan-600 text-white hover:bg-cyan-500'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>{soundPlaying ? (isAr ? 'إيقاف النغمة الصوتية' : 'Stop Audible Tone') : (isAr ? 'تشغيل النغمة الصوتية الحقيقية' : 'Play Audible Tone')}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. Working Pendulum Simulation */}
                {selectedExperiment.simType === 'pendulum' && (
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-64 h-56 flex flex-col items-center justify-start">
                      {/* Pivot Stand */}
                      <div className="w-20 h-2 bg-slate-400 rounded-full" />
                      {/* Swining Line and Bob */}
                      <div className="relative w-1 h-44 bg-cyan-400 origin-top animate-[spin_2.2s_ease-in-out_infinite_alternate] [transform-origin:top_center]">
                        <div className="w-8 h-8 rounded-full bg-amber-400 absolute -bottom-4 -left-3.5 shadow-lg shadow-amber-400/50 flex items-center justify-center text-[10px] font-bold text-slate-950">
                          M
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-xs font-mono text-cyan-300 mt-2">
                      {isAr ? 'الزمن الدوري T: ' : 'Calculated Period T: '}
                      {(2 * Math.PI * Math.sqrt(pendulumLength / pendulumGravity)).toFixed(2)} s
                    </div>
                  </div>
                )}

                {/* 6. Plant Photosynthesis Simulation */}
                {selectedExperiment.simType === 'photosynthesis' && (
                  <div className="w-full flex flex-col items-center space-y-4">
                    <div className="relative w-72 h-48 border-2 border-slate-700 rounded-2xl bg-slate-900/60 p-4 flex items-end justify-center overflow-hidden">
                      {/* Water Beaker */}
                      <div className="w-48 h-36 border-2 border-cyan-500/50 rounded-b-2xl bg-cyan-950/20 relative flex flex-col justify-end items-center">
                        {/* Green Plant Sprig */}
                        <div className="w-8 h-24 bg-emerald-600 rounded-t-full flex flex-col justify-around items-center">
                          <div className="w-12 h-3 bg-emerald-500 rounded-full rotate-45" />
                          <div className="w-12 h-3 bg-emerald-500 rounded-full -rotate-45" />
                        </div>

                        {/* O2 Bubbles rising */}
                        <div className="absolute top-2 w-3 h-3 rounded-full bg-cyan-300 animate-ping opacity-75" />
                        <div className="absolute top-8 w-2 h-2 rounded-full bg-cyan-300 animate-bounce" />
                      </div>
                    </div>

                    <div className="text-xs text-center font-mono text-emerald-400">
                      {isAr ? 'معدل إنتاج الأكسجين: ' : 'O₂ Bubble Production Rate: '}
                      {Math.round((photoLightIntensity / 100) * 4)} {isAr ? 'فقاعة / دقيقة' : 'bubbles / min'}
                    </div>
                  </div>
                )}

                {/* 7. Virtual Microscope Simulation */}
                {selectedExperiment.simType === 'microscope' && (
                  <div className="w-full flex flex-col items-center space-y-4">
                    <div className="w-52 h-52 rounded-full border-4 border-slate-700 bg-slate-950 overflow-hidden relative shadow-2xl flex items-center justify-center">
                      {/* Microscope Circular Field of View */}
                      <div
                        className="w-full h-full flex items-center justify-center text-center p-4 transition-all duration-300"
                        style={{
                          filter: `blur(${Math.abs(microscopeFocus - 50) / 7}px)`,
                          transform: microscopePower === '40x' ? 'scale(1.8)' : microscopePower === '10x' ? 'scale(1.2)' : 'scale(1.0)',
                        }}
                      >
                        {microscopeSlide === 'onion' ? (
                          <div className="grid grid-cols-4 gap-1 w-full h-full p-2">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div key={i} className="border border-emerald-400/50 bg-emerald-950/40 rounded flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                              </div>
                            ))}
                          </div>
                        ) : microscopeSlide === 'cheek' ? (
                          <div className="flex flex-wrap items-center justify-center gap-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div key={i} className="w-10 h-10 rounded-full border border-rose-400/50 bg-rose-950/40 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-rose-300" />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="relative w-24 h-12 border-2 border-cyan-400 rounded-full bg-cyan-950/40 flex items-center justify-center">
                            <span className="text-[10px] text-cyan-300 font-mono">Paramecium</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Microscope Objective and Slide controls */}
                    <div className="flex items-center gap-2">
                      {(['onion', 'cheek', 'paramecium'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            playClickSound();
                            setMicroscopeSlide(s);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                            microscopeSlide === s ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'
                          }`}
                        >
                          {s === 'onion' ? (isAr ? 'خلايا بصل' : 'Onion Cells') : s === 'cheek' ? (isAr ? 'خلايا خد' : 'Cheek Cells') : (isAr ? 'براميسيوم' : 'Paramecium')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Fallback for other experiments: Clean visual sandbox representation */}
                {!['volcano', 'ph-indicator', 'circuit', 'sound-waves', 'pendulum', 'photosynthesis', 'microscope'].includes(selectedExperiment.simType) && (
                  <div className="w-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl">
                      <FlaskConical className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        {isAr ? selectedExperiment.titleAr : selectedExperiment.titleEn}
                      </h4>
                      <p className="text-xs text-slate-400 max-w-md mt-1">
                        {isAr ? selectedExperiment.objectiveAr : selectedExperiment.objectiveEn}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Interactive Parameter Sliders & Action Buttons */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isAr ? 'لوحة التحكم في المتغيرات' : 'Simulation Variable Controls'}</span>
                  </span>
                </div>

                {/* Volcano Controls */}
                {selectedExperiment.simType === 'volcano' && (
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <label className="text-xs text-slate-300">
                        {isAr ? 'الخل:' : 'Vinegar (mL):'} {vinegarAmount}
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={vinegarAmount}
                        onChange={(e) => setVinegarAmount(Number(e.target.value))}
                        className="w-32 accent-cyan-500"
                      />
                    </div>
                    <button
                      onClick={() => {
                        playClickSound();
                        setVolcanoErupting(true);
                        setTimeout(() => setVolcanoErupting(false), 3500);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-bold shadow-lg transition-transform hover:scale-105"
                    >
                      {isAr ? '💥 إطلاق البركان الكيميائي' : '💥 Trigger Volcano Reaction'}
                    </button>
                  </div>
                )}

                {/* Electric Circuit Controls */}
                {selectedExperiment.simType === 'circuit' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-300">{isAr ? 'جهد البطارية (V):' : 'Voltage:'} {circuitVoltage}V</span>
                      <input
                        type="range"
                        min="3"
                        max="24"
                        value={circuitVoltage}
                        onChange={(e) => setCircuitVoltage(Number(e.target.value))}
                        className="flex-1 accent-amber-500"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-300">{isAr ? 'المقاومة (Ω):' : 'Resistance:'} {circuitResistance}Ω</span>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={circuitResistance}
                        onChange={(e) => setCircuitResistance(Number(e.target.value))}
                        className="flex-1 accent-cyan-500"
                      />
                    </div>
                  </div>
                )}

                {/* Sound Waves Controls */}
                {selectedExperiment.simType === 'sound-waves' && (
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-300 whitespace-nowrap">{isAr ? 'التردد:' : 'Frequency:'} {soundFreq} Hz</span>
                    <input
                      type="range"
                      min="100"
                      max="1200"
                      step="10"
                      value={soundFreq}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setSoundFreq(val);
                        if (soundPlaying) updateContinuousToneFreq(val);
                      }}
                      className="flex-1 accent-cyan-500"
                    />
                  </div>
                )}

                {/* Microscope Focus Slider */}
                {selectedExperiment.simType === 'microscope' && (
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-300 whitespace-nowrap">{isAr ? 'الضابط الدقيق للعدسة:' : 'Fine Focus Wheel:'}</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={microscopeFocus}
                      onChange={(e) => setMicroscopeFocus(Number(e.target.value))}
                      className="flex-1 accent-cyan-500"
                    />
                    <span className="font-mono text-cyan-400 font-bold">{microscopeFocus}%</span>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: REAL HANDS-ON EXPERIMENT GUIDE AT HOME            */}
          {/* ======================================================== */}
          {activeTabMode === 'handson' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                  {isAr ? 'دليل التجربة العملية في المنزل' : 'Real Hands-on Home Protocol'}
                </span>
                <h4 className="text-xl font-bold text-white">
                  {isAr ? selectedExperiment.titleAr : selectedExperiment.titleEn}
                </h4>
              </div>

              {/* Required Materials */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {isAr ? 'الأدوات والمواد المطلوبة من المنزل:' : 'Required Household Materials:'}
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {(isAr ? selectedExperiment.materialsAr : selectedExperiment.materialsEn).map((m, mIdx) => (
                    <li key={mIdx} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety Instructions */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-xs space-y-2">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  {isAr ? 'تعليمات وإرشادات السلامة والأمان:' : 'Safety & Adult Supervision Instructions:'}
                </span>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {(isAr ? selectedExperiment.safetyAr : selectedExperiment.safetyEn).map((s, sIdx) => (
                    <li key={sIdx}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {isAr ? 'خطوات تنفيذ التجربة خطوة بخطوة:' : 'Step-by-Step Practical Procedure:'}
                </h5>
                <ol className="space-y-2 text-xs text-slate-300">
                  {(isAr ? selectedExperiment.procedureAr : selectedExperiment.procedureEn).map((step, pIdx) => (
                    <li key={pIdx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: SCIENTIFIC THEORY & OBSERVATIONS                  */}
          {/* ======================================================== */}
          {activeTabMode === 'theory' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  {isAr ? 'التفسير العلمي الدقيق' : 'Scientific Explanation & Mechanisms'}
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  {isAr ? selectedExperiment.explanationAr : selectedExperiment.explanationEn}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  {isAr ? 'الملاحظات المتوقعة أثناء التجربة' : 'Expected Observations'}
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {(isAr ? selectedExperiment.observationsAr : selectedExperiment.observationsEn).map((obs, oIdx) => (
                    <li key={oIdx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                      <Eye className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                  {isAr ? 'الاستنتاج العلمي' : 'Scientific Conclusion'}
                </h5>
                <div className="bg-slate-950 p-4 rounded-2xl border border-indigo-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {isAr ? selectedExperiment.conclusionAr : selectedExperiment.conclusionEn}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 4: COMPREHENSIVE EXPERIMENT QUIZ                     */}
          {/* ======================================================== */}
          {activeTabMode === 'quiz' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {isAr ? 'اختبار فهم التجربة' : 'Experiment Mastery Quiz'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {isAr ? 'أجب عن الأسئلة لاختبار استيعابك للمفاهيم العلمية ونيل نقاط XP' : 'Answer all questions to verify your comprehension and earn XP'}
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                    {isAr ? `الدرجة: ${quizScore} من ${selectedExperiment.quiz.length}` : `Score: ${quizScore} / ${selectedExperiment.quiz.length}`}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {selectedExperiment.quiz.map((q, qIndex) => {
                  const userAnswer = quizAnswers[qIndex];
                  return (
                    <div key={qIndex} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                      <span className="text-xs font-bold text-cyan-400">
                        {isAr ? `السؤال ${qIndex + 1}:` : `Question ${qIndex + 1}:`}
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {isAr ? q.questionAr : q.questionEn}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {(isAr ? q.optionsAr : q.optionsEn).map((opt, optIndex) => {
                          const isSelected = userAnswer === optIndex;
                          const isCorrect = q.correctIndex === optIndex;
                          let btnStyle = 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850';

                          if (quizSubmitted) {
                            if (isCorrect) btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500';
                            else if (isSelected && !isCorrect) btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500';
                          } else if (isSelected) {
                            btnStyle = 'bg-cyan-500/20 text-cyan-300 border-cyan-500';
                          }

                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleSelectQuizOption(qIndex, optIndex)}
                              className={`p-3 rounded-xl border text-xs text-left rtl:text-right font-medium transition-all ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300">
                          💡 <span className="font-semibold">{isAr ? 'التفسير: ' : 'Explanation: '}</span>
                          {isAr ? q.explanationAr : q.explanationEn}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(quizAnswers).length < selectedExperiment.quiz.length}
                  className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-bold text-xs transition-colors"
                >
                  {isAr ? 'تسليم الإجابات والتحقق' : 'Submit Answers'}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
                >
                  {isAr ? 'إعادة المحاولة' : 'Try Again'}
                </button>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
