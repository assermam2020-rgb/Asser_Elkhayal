import React, { useState, useMemo } from 'react';
import { ChemicalElement, Language } from '../../types';
import { ALL_ELEMENTS, CATEGORY_COLORS } from '../../data/elements';
import {
  Atom,
  Search,
  Volume2,
  X,
  Sparkles,
  Info,
  Trophy,
  Filter,
  Flame,
  Droplet,
  Wind,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { speakText } from '../../utils/speech';
import { playClickSound, playSuccessChime } from '../../utils/audioEffects';
import confetti from 'canvas-confetti';

interface PeriodicTableProps {
  language: Language;
  onAddScore: (points: number) => void;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({
  language,
  onAddScore,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);
  const [selectedIsotopeOffset, setSelectedIsotopeOffset] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Discovery Challenge state
  const [challengeMode, setChallengeMode] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challengeSuccess, setChallengeSuccess] = useState<boolean | null>(null);

  const challenges = [
    { targetNumber: 6, clueEn: 'Find the element that is the basis of all organic life, found in diamonds and pencil graphite.', clueAr: 'ابحث عن العنصر الذي يشكل أساس الحياة العضوية ويوجد في الألماس وجرافيت أقلام الرصاص.' },
    { targetNumber: 8, clueEn: 'Find the gas that makes up ~21% of Earth’s atmosphere and is vital for cellular respiration.', clueAr: 'ابحث عن الغاز الذي يشكل 21% من الهواء الجوي ونحتاجه للتنفس والحياة.' },
    { targetNumber: 79, clueEn: 'Find the precious yellow noble metal whose symbol is Au, prized since antiquity.', clueAr: 'ابحث عن الفلز النفيس الأصفر اللامع ذي الرمز Au الذي كان كنز الفراعنة.' },
    { targetNumber: 26, clueEn: 'Find the transition metal in hemoglobin that makes blood red and generates Earth’s magnetic field.', clueAr: 'ابحث عن الفلز الانتقالي الموجود في الهيموجلوبين والذي يمنح كوكب المريخ لونه الأحمر.' },
    { targetNumber: 2, clueEn: 'Find the noble gas discovered on the Sun before Earth, used to inflate floating balloons.', clueAr: 'ابحث عن الغاز النبيل الذي اكتشف في الشمس أولاً ويستخدم لملء المناطيد.' },
    { targetNumber: 35, clueEn: 'Find the only halogen nonmetal that is a reddish-brown liquid at room temperature.', clueAr: 'ابحث عن اللافلز الهالوجيني الوحيد الذي يكون سائلاً بنياً محمراً في درجة حرارة الغرفة.' },
    { targetNumber: 1, clueEn: 'Find the lightest and most abundant element in the universe, consisting of 1 proton and 1 electron.', clueAr: 'ابحث عن أخف وأكثر عناصر الكون وفرة والمكون من بروتون واحد وإلكترون واحد.' },
  ];

  // Quick lookup map for elements
  const elementsMap = useMemo(() => {
    const map = new Map<number, ChemicalElement>();
    ALL_ELEMENTS.forEach((el) => map.set(el.number, el));
    return map;
  }, []);

  // Filtered elements
  const filteredElements = useMemo(() => {
    return ALL_ELEMENTS.filter((el) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        el.symbol.toLowerCase().includes(q) ||
        el.nameEn.toLowerCase().includes(q) ||
        el.nameAr.includes(q) ||
        el.number.toString() === q;

      const matchesCat = selectedCategory === 'all' || el.category === selectedCategory;
      const matchesState = selectedState === 'all' || el.state === selectedState;

      return matchesSearch && matchesCat && matchesState;
    });
  }, [searchQuery, selectedCategory, selectedState]);

  const filteredSet = useMemo(() => {
    return new Set(filteredElements.map((el) => el.number));
  }, [filteredElements]);

  const handleElementClick = (element: ChemicalElement) => {
    playClickSound();
    setSelectedElement(element);
    setSelectedIsotopeOffset(0);

    // If challenge mode active, verify
    if (challengeMode) {
      const cur = challenges[currentChallengeIndex];
      if (element.number === cur.targetNumber) {
        setChallengeSuccess(true);
        playSuccessChime();
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        onAddScore(25);
        setTimeout(() => {
          setChallengeSuccess(null);
          setCurrentChallengeIndex((prev) => (prev + 1) % challenges.length);
        }, 1500);
      } else {
        setChallengeSuccess(false);
        setTimeout(() => setChallengeSuccess(null), 1200);
      }
    }
  };

  const handlePronounce = (lang: Language) => {
    if (!selectedElement) return;
    setIsSpeaking(true);
    const textToSpeak =
      lang === 'ar'
        ? `عنصر ${selectedElement.nameAr}. رمزه الكيميائي ${selectedElement.symbol}. عدده الذري ${selectedElement.number}.`
        : `Element ${selectedElement.nameEn}. Chemical symbol ${selectedElement.symbol}. Atomic number ${selectedElement.number}.`;
    speakText(textToSpeak, lang, () => setIsSpeaking(false));
  };

  // Render an element cell in the main grid
  const renderCell = (atomicNumber: number) => {
    const element = elementsMap.get(atomicNumber);
    if (!element) {
      return <div className="w-12 h-14 md:w-14 md:h-16" />;
    }

    const isMatch = filteredSet.has(element.number);
    const isTarget = challengeMode && challenges[currentChallengeIndex].targetNumber === element.number;
    const catStyle = CATEGORY_COLORS[element.category] || {
      bg: 'bg-slate-800',
      text: 'text-slate-300',
      border: 'border-slate-700',
    };

    return (
      <button
        key={element.number}
        onClick={() => handleElementClick(element)}
        className={`w-11 h-14 sm:w-12 sm:h-15 md:w-14 md:h-16 rounded-lg p-1 flex flex-col justify-between text-left rtl:text-right border transition-all duration-150 relative cursor-pointer group ${
          catStyle.bg
        } ${catStyle.border} ${
          isMatch
            ? 'opacity-100 scale-100 hover:scale-110 hover:z-20 hover:shadow-lg shadow-black/40'
            : 'opacity-25 grayscale scale-95 pointer-events-none'
        } ${selectedElement?.number === element.number ? 'ring-2 ring-white z-20' : ''}`}
        title={`${element.number}: ${element.nameEn} (${element.nameAr})`}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] font-mono font-bold text-slate-400">
            {element.number}
          </span>
          <span className="text-[9px] text-slate-500 hidden sm:inline">
            {Math.round(element.atomicMass)}
          </span>
        </div>

        <div className="text-center w-full">
          <span className={`text-sm sm:text-base font-extrabold tracking-tight ${catStyle.text}`}>
            {element.symbol}
          </span>
        </div>

        <div className="w-full truncate text-[9px] text-slate-300 text-center font-medium">
          {isAr ? element.nameAr : element.nameEn}
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <Atom className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'الجدول الدوري الحديث (IUPAC)' : 'Modern IUPAC Periodic Table'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? 'الجدول الدوري التفاعلي (118 عنصراً)' : 'Interactive Periodic Table (118 Elements)'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'انقر على أي عنصر للاطلاع على خصائصه الكاملة، ونطقه الصوتي، ونموذج إلكتروناته ثلاثي الأبعاد.'
              : 'Click any element for complete atomic properties, audio pronunciations, and 3D Bohr models.'}
          </p>
        </div>

        {/* Discovery Challenge Mode Switch */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              playClickSound();
              setChallengeMode(!challengeMode);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              challengeMode
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>{challengeMode ? (isAr ? 'إيقاف التحدي' : 'Exit Challenge') : (isAr ? 'بدء تحدي اكتشاف العناصر' : 'Start Element Challenge')}</span>
          </button>
        </div>
      </div>

      {/* Challenge Banner (if active) */}
      {challengeMode && (
        <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border border-amber-500/40 rounded-2xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {isAr ? `تحدي رقم ${currentChallengeIndex + 1} من ${challenges.length}` : `Challenge ${currentChallengeIndex + 1} of ${challenges.length}`}
                  </span>
                  <span className="text-[10px] bg-amber-500/30 text-amber-200 px-2 py-0.5 rounded-full font-bold">+25 XP</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-white mt-1">
                  {isAr ? challenges[currentChallengeIndex].clueAr : challenges[currentChallengeIndex].clueEn}
                </p>
              </div>
            </div>

            {challengeSuccess !== null && (
              <div className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 animate-fade-in ${
                challengeSuccess ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'
              }`}>
                {challengeSuccess
                  ? (isAr ? 'أحسنت! إجابة صحيحة' : 'Correct! +25 XP')
                  : (isAr ? 'حاول ثانية!' : 'Try Again!')}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search & Filters Toolbar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث باسم العنصر، الرمز (H, C, Fe) أو العدد الذري...' : 'Search by name, symbol (H, C, Fe) or atomic number...'}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Physical State Filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedState('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedState === 'all' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isAr ? 'الكل' : 'All States'}
            </button>
            <button
              onClick={() => setSelectedState('solid')}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                selectedState === 'solid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-3 h-3 text-amber-400" />
              <span>{isAr ? 'صلب' : 'Solid'}</span>
            </button>
            <button
              onClick={() => setSelectedState('liquid')}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                selectedState === 'liquid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Droplet className="w-3 h-3 text-blue-400" />
              <span>{isAr ? 'سائل' : 'Liquid'}</span>
            </button>
            <button
              onClick={() => setSelectedState('gas')}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-colors ${
                selectedState === 'gas' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wind className="w-3 h-3 text-emerald-400" />
              <span>{isAr ? 'غاز' : 'Gas'}</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {isAr ? 'كل الفئات' : 'All Categories'}
          </button>
          {Object.entries(CATEGORY_COLORS).map(([catKey, catVal]) => {
            const active = selectedCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-2.5 py-1 rounded-lg font-semibold whitespace-nowrap border transition-all ${
                  catVal.border
                } ${active ? `${catVal.bg} ${catVal.text} ring-1 ring-white/50` : 'bg-slate-900/40 text-slate-400 hover:text-slate-200'}`}
              >
                {isAr ? catVal.nameAr : catVal.nameEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 18-Column Scientific Periodic Table Grid Container */}
      <div className="overflow-x-auto p-4 bg-slate-950 border border-slate-800/80 rounded-2xl shadow-inner">
        <div className="min-w-[1020px] space-y-2">
          
          {/* Row 1: H (1) ... He (18) */}
          <div className="flex gap-1.5">
            {renderCell(1)}
            <div className="flex-1" />
            {renderCell(2)}
          </div>

          {/* Row 2: Li (1), Be (2) ... B-Ne (13-18) */}
          <div className="flex gap-1.5">
            {renderCell(3)}
            {renderCell(4)}
            <div className="w-[calc(10*3.5rem+9*0.375rem)]" />
            {renderCell(5)}
            {renderCell(6)}
            {renderCell(7)}
            {renderCell(8)}
            {renderCell(9)}
            {renderCell(10)}
          </div>

          {/* Row 3: Na (1), Mg (2) ... Al-Ar (13-18) */}
          <div className="flex gap-1.5">
            {renderCell(11)}
            {renderCell(12)}
            <div className="w-[calc(10*3.5rem+9*0.375rem)]" />
            {renderCell(13)}
            {renderCell(14)}
            {renderCell(15)}
            {renderCell(16)}
            {renderCell(17)}
            {renderCell(18)}
          </div>

          {/* Row 4: K(19) - Kr(36) */}
          <div className="flex gap-1.5">
            {Array.from({ length: 18 }, (_, i) => renderCell(19 + i))}
          </div>

          {/* Row 5: Rb(37) - Xe(54) */}
          <div className="flex gap-1.5">
            {Array.from({ length: 18 }, (_, i) => renderCell(37 + i))}
          </div>

          {/* Row 6: Cs(55), Ba(56), La-marker(57-71), Hf(72) - Rn(86) */}
          <div className="flex gap-1.5">
            {renderCell(55)}
            {renderCell(56)}
            {/* Lanthanide Marker Box */}
            <div className="w-11 h-14 sm:w-12 sm:h-15 md:w-14 md:h-16 rounded-lg p-1 bg-fuchsia-950/40 border border-fuchsia-500/30 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-mono text-fuchsia-400">57-71</span>
              <span className="text-[9px] font-bold text-fuchsia-300">La-Lu</span>
            </div>
            {Array.from({ length: 15 }, (_, i) => renderCell(72 + i))}
          </div>

          {/* Row 7: Fr(87), Ra(88), Ac-marker(89-103), Rf(104) - Og(118) */}
          <div className="flex gap-1.5">
            {renderCell(87)}
            {renderCell(88)}
            {/* Actinide Marker Box */}
            <div className="w-11 h-14 sm:w-12 sm:h-15 md:w-14 md:h-16 rounded-lg p-1 bg-pink-950/40 border border-pink-500/30 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-mono text-pink-400">89-103</span>
              <span className="text-[9px] font-bold text-pink-300">Ac-Lr</span>
            </div>
            {Array.from({ length: 15 }, (_, i) => renderCell(104 + i))}
          </div>

          {/* Spacer */}
          <div className="h-6" />

          {/* Lanthanide Series: La(57) - Lu(71) */}
          <div className="flex gap-1.5 pl-[calc(2.5*3.5rem)] rtl:pl-0 rtl:pr-[calc(2.5*3.5rem)]">
            <div className="w-16 flex items-center justify-center text-[10px] font-bold text-fuchsia-400">
              {isAr ? 'اللانثانيدات' : 'Lanthanides'}
            </div>
            {Array.from({ length: 15 }, (_, i) => renderCell(57 + i))}
          </div>

          {/* Actinide Series: Ac(89) - Lr(103) */}
          <div className="flex gap-1.5 pl-[calc(2.5*3.5rem)] rtl:pl-0 rtl:pr-[calc(2.5*3.5rem)]">
            <div className="w-16 flex items-center justify-center text-[10px] font-bold text-pink-400">
              {isAr ? 'الأكتينيدات' : 'Actinides'}
            </div>
            {Array.from({ length: 15 }, (_, i) => renderCell(89 + i))}
          </div>

        </div>
      </div>

      {/* Element Detail Inspection Modal */}
      {selectedElement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-left rtl:text-right max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-24 rounded-2xl p-2 flex flex-col justify-between text-center border shadow-lg ${
                  CATEGORY_COLORS[selectedElement.category]?.bg
                } ${CATEGORY_COLORS[selectedElement.category]?.border}`}>
                  <span className="text-xs font-mono font-bold text-slate-400">{selectedElement.number}</span>
                  <span className="text-3xl font-black text-white">{selectedElement.symbol}</span>
                  <span className="text-[10px] font-mono text-slate-400">{selectedElement.atomicMass.toFixed(2)}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-white">
                      {isAr ? selectedElement.nameAr : selectedElement.nameEn}
                    </h3>
                    <span className="text-base text-slate-400">
                      ({isAr ? selectedElement.nameEn : selectedElement.nameAr})
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-400">
                    <span className="font-semibold text-cyan-400">
                      {isAr ? CATEGORY_COLORS[selectedElement.category]?.nameAr : CATEGORY_COLORS[selectedElement.category]?.nameEn}
                    </span>
                    <span>·</span>
                    <span>{isAr ? `الدورة ${selectedElement.period}` : `Period ${selectedElement.period}`}</span>
                    <span>·</span>
                    <span>{isAr ? `المجموعة ${selectedElement.group}` : `Group ${selectedElement.group}`}</span>
                    <span>·</span>
                    <span className="capitalize">{isAr ? (selectedElement.state === 'gas' ? 'غاز' : selectedElement.state === 'liquid' ? 'سائل' : 'صلب') : selectedElement.state}</span>
                  </div>
                </div>
              </div>

              {/* Close Button & Speech Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePronounce('ar')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="نطق الاسم بالعربية"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>عربي</span>
                </button>
                <button
                  onClick={() => handlePronounce('en')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Pronounce in English"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>EN</span>
                </button>
                <button
                  onClick={() => setSelectedElement(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Bohr Model, Subatomic Particles, Uses, Facts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
              {/* Left Column: Subatomic Particles & Bohr Shells */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {isAr ? 'الجسيمات دون الذرية والتوزيع' : 'Subatomic Particles & Configuration'}
                </h4>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-rose-500/30">
                    <span className="text-xs text-rose-400 font-bold block">{isAr ? 'البروتونات' : 'Protons'}</span>
                    <span className="text-xl font-mono font-black text-white">{selectedElement.protons}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-700">
                    <span className="text-xs text-slate-400 font-bold block">{isAr ? 'النيوترونات' : 'Neutrons'}</span>
                    <span className="text-xl font-mono font-black text-white">
                      {selectedElement.neutrons + selectedIsotopeOffset}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/30">
                    <span className="text-xs text-cyan-400 font-bold block">{isAr ? 'الإلكترونات' : 'Electrons'}</span>
                    <span className="text-xl font-mono font-black text-white">{selectedElement.electrons}</span>
                  </div>
                </div>

                {/* Isotope Selector Slider */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{isAr ? 'اختيار النظير المشع' : 'Isotope Variance'}</span>
                    <span className="font-mono text-cyan-400 font-bold">
                      {isAr ? `الكتلة A: ${selectedElement.protons + selectedElement.neutrons + selectedIsotopeOffset}` : `Mass A: ${selectedElement.protons + selectedElement.neutrons + selectedIsotopeOffset}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedIsotopeOffset((prev) => Math.max(-2, prev - 1))}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-slate-300"
                    >
                      -1 n
                    </button>
                    <span className="flex-1 text-center text-xs font-mono text-slate-300">
                      {selectedIsotopeOffset === 0
                        ? (isAr ? 'النظير القياسي الأكثر استقراراً' : 'Standard Most Abundant Isotope')
                        : `${selectedElement.symbol}-${selectedElement.protons + selectedElement.neutrons + selectedIsotopeOffset}`}
                    </span>
                    <button
                      onClick={() => setSelectedIsotopeOffset((prev) => Math.min(3, prev + 1))}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-slate-300"
                    >
                      +1 n
                    </button>
                  </div>
                </div>

                {/* Electron Configuration */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isAr ? 'التوزيع الإلكتروني المعتمد' : 'Electron Configuration'}
                  </span>
                  <span className="text-sm font-mono font-bold text-cyan-300">
                    {selectedElement.electronConfiguration}
                  </span>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    {isAr ? 'المستويات: ' : 'Shells: '}
                    {selectedElement.shells.join(', ')}
                  </div>
                </div>

                {/* Interactive Bohr Orbital Diagram SVG */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col items-center justify-center">
                  <span className="text-[11px] font-semibold text-slate-400 mb-2">
                    {isAr ? 'نموذج بور المداري لمستويات الطاقة' : 'Bohr Planetary Orbital Model'}
                  </span>
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg viewBox="-100 -100 200 200" className="w-full h-full">
                      {/* Electron Shells Circles */}
                      {selectedElement.shells.map((count, sIndex) => {
                        const r = 25 + sIndex * 14;
                        return (
                          <g key={sIndex}>
                            <circle
                              cx="0"
                              cy="0"
                              r={r}
                              fill="none"
                              stroke="rgba(6, 182, 212, 0.25)"
                              strokeWidth="1"
                              strokeDasharray="3 3"
                            />
                            {/* Render electrons on shell */}
                            {Array.from({ length: Math.min(count, 18) }, (_, eIndex) => {
                              const angle = (eIndex / Math.min(count, 18)) * 2 * Math.PI;
                              const ex = r * Math.cos(angle);
                              const ey = r * Math.sin(angle);
                              return (
                                <circle
                                  key={eIndex}
                                  cx={ex}
                                  cy={ey}
                                  r="3"
                                  fill="#22d3ee"
                                  className="animate-pulse"
                                />
                              );
                            })}
                          </g>
                        );
                      })}

                      {/* Central Nucleus */}
                      <circle cx="0" cy="0" r="14" fill="#e11d48" />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fill="white"
                        fontSize="9"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {selectedElement.symbol}
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: Scientific Summary, Uses, & Interesting Facts */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {isAr ? 'نبذة علمية' : 'Scientific Overview'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {isAr ? selectedElement.summaryAr : selectedElement.summaryEn}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    {isAr ? 'أهم الاستخدامات والتطبيقات' : 'Practical Uses & Applications'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(isAr ? selectedElement.usesAr : selectedElement.usesEn).map((use, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {isAr ? 'حقائق علمية مذهلة' : 'Intriguing Science Facts'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(isAr ? selectedElement.factsAr : selectedElement.factsEn).map((fact, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
