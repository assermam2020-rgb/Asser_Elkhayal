import React, { useState } from 'react';
import { Language } from '../../types';
import {
  SCIENTIFIC_INSTRUMENTS,
  TRUE_FALSE_BANK,
  CHEMICAL_PUZZLES,
  BADGES_LIST,
} from '../../data/games';
import { ALL_ELEMENTS } from '../../data/elements';
import {
  Gamepad2,
  Trophy,
  Award,
  Sparkles,
  CheckCircle,
  XCircle,
  HelpCircle,
  Flame,
  RotateCcw,
  Volume2,
  Eye,
  Beaker,
  Zap,
  Activity,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { playClickSound, playSuccessChime } from '../../utils/audioEffects';
import confetti from 'canvas-confetti';

interface GamesHubProps {
  language: Language;
  onAddScore: (points: number) => void;
  onNavigateToTab: (tab: string) => void;
}

type GameMode =
  | 'guess-element'
  | 'match-symbol'
  | 'true-false'
  | 'instruments'
  | 'chemical-puzzle'
  | 'human-body';

export const GamesHub: React.FC<GamesHubProps> = ({
  language,
  onAddScore,
  onNavigateToTab,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const [activeGame, setActiveGame] = useState<GameMode>('guess-element');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [streak, setStreak] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  // 1. Guess The Element State
  const [guessElementIdx, setGuessElementIdx] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const candidateElements = [
    ALL_ELEMENTS[5],  // Carbon
    ALL_ELEMENTS[7],  // Oxygen
    ALL_ELEMENTS[10], // Sodium
    ALL_ELEMENTS[25], // Iron
    ALL_ELEMENTS[78], // Gold
    ALL_ELEMENTS[1],  // Helium
    ALL_ELEMENTS[16], // Chlorine
    ALL_ELEMENTS[13], // Silicon
  ];
  const targetElement = candidateElements[guessElementIdx % candidateElements.length];

  // 2. True or False State
  const [tfIdx, setTfIdx] = useState<number>(0);
  const currentTf = TRUE_FALSE_BANK[tfIdx % TRUE_FALSE_BANK.length];

  // 3. Instruments State
  const [instrumentIdx, setInstrumentIdx] = useState<number>(0);
  const currentInstrument = SCIENTIFIC_INSTRUMENTS[instrumentIdx % SCIENTIFIC_INSTRUMENTS.length];

  // 4. Chemical Puzzle State
  const [puzzleIdx, setPuzzleIdx] = useState<number>(0);
  const currentPuzzle = CHEMICAL_PUZZLES[puzzleIdx % CHEMICAL_PUZZLES.length];
  const [reactantCoeffs, setReactantCoeffs] = useState<number[]>([1, 1]);
  const [productCoeffs, setProductCoeffs] = useState<number[]>([1]);

  // Handler for Guess Element
  const handleGuessElement = (guessedNum: number) => {
    playClickSound();
    if (guessedNum === targetElement.number) {
      playSuccessChime();
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      onAddScore(20 * (difficulty === 'hard' ? 2 : 1));
      setStreak((s) => s + 1);
      setFeedback({
        isCorrect: true,
        message: isAr
          ? `إجابة عبقرية! العنصر هو ${targetElement.nameAr} (${targetElement.symbol})!`
          : `Brilliant! The element is ${targetElement.nameEn} (${targetElement.symbol})!`,
      });
      setTimeout(() => {
        setFeedback(null);
        setShowHint(false);
        setGuessElementIdx((prev) => prev + 1);
      }, 1600);
    } else {
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: isAr ? 'إجابة غير صحيحة، حاول مجدداً!' : 'Not quite, try another one!',
      });
      setTimeout(() => setFeedback(null), 1400);
    }
  };

  // Handler for True/False
  const handleTrueFalse = (userChoice: boolean) => {
    playClickSound();
    if (userChoice === currentTf.isTrue) {
      playSuccessChime();
      onAddScore(15);
      setStreak((s) => s + 1);
      setFeedback({
        isCorrect: true,
        message: isAr ? 'صحيح! ' + currentTf.explanationAr : 'Correct! ' + currentTf.explanationEn,
      });
      setTimeout(() => {
        setFeedback(null);
        setTfIdx((prev) => prev + 1);
      }, 1800);
    } else {
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: isAr ? 'خطأ! ' + currentTf.explanationAr : 'Incorrect! ' + currentTf.explanationEn,
      });
      setTimeout(() => {
        setFeedback(null);
        setTfIdx((prev) => prev + 1);
      }, 2200);
    }
  };

  // Handler for Instrument
  const handleAnswerInstrument = (chosenId: string) => {
    playClickSound();
    if (chosenId === currentInstrument.id) {
      playSuccessChime();
      onAddScore(20);
      setStreak((s) => s + 1);
      setFeedback({
        isCorrect: true,
        message: isAr
          ? `أحسنت! هذه الأداة هي ${currentInstrument.nameAr}.`
          : `Well done! That is the ${currentInstrument.nameEn}.`,
      });
      setTimeout(() => {
        setFeedback(null);
        setInstrumentIdx((prev) => prev + 1);
      }, 1500);
    } else {
      setStreak(0);
      setFeedback({
        isCorrect: false,
        message: isAr ? 'حاول مجدداً!' : 'Incorrect choice, try again!',
      });
      setTimeout(() => setFeedback(null), 1200);
    }
  };

  // Handler for Chemical Equation Balancer
  const checkEquationBalance = () => {
    playClickSound();
    const reactantsCorrect = currentPuzzle.reactants.every(
      (r, i) => (reactantCoeffs[i] || 1) === r.targetCoeff
    );
    const productsCorrect = currentPuzzle.products.every(
      (p, i) => (productCoeffs[i] || 1) === p.targetCoeff
    );

    if (reactantsCorrect && productsCorrect) {
      playSuccessChime();
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      onAddScore(30);
      setFeedback({
        isCorrect: true,
        message: isAr
          ? 'معادلة موزونة بنجاح تام! كتل المتفاعلات تساوي كتل النواتج.'
          : 'Equation balanced perfectly! Law of conservation of mass satisfied.',
      });
      setTimeout(() => {
        setFeedback(null);
        setPuzzleIdx((prev) => prev + 1);
        setReactantCoeffs([1, 1]);
        setProductCoeffs([1]);
      }, 2000);
    } else {
      setFeedback({
        isCorrect: false,
        message: isAr
          ? 'المعادلة غير موزونة بعد. تأكد من تطابق أعداد الذرات على الجانبين!'
          : 'Equation is not balanced yet. Ensure atom counts match on both sides!',
      });
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold mb-2">
            <Gamepad2 className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>{isAr ? 'ألعاب وتحديات العلوم والذكاء' : 'Interactive Science Challenges & Arena'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? 'ألعاب وتحديات العلوم' : 'Science Games & Quizzes'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'تحدَّ معلوماتك، اكسب نقاط الخبرة XP، اجمع أوسمة الشرف العلمية، وحافظ على سلسلة الإجابات الصحيحة!'
              : 'Test your knowledge, gain XP points, collect honor badges, and maintain your win streak!'}
          </p>
        </div>

        {/* Streak & Difficulty Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>{isAr ? `تتابع: ${streak}` : `Streak: ${streak}`}</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            {(['easy', 'medium', 'hard'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setDifficulty(lvl)}
                className={`px-2.5 py-1 rounded-lg capitalize font-semibold transition-colors ${
                  difficulty === lvl ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                {lvl === 'easy' ? (isAr ? 'مبتدئ' : 'Easy') : lvl === 'medium' ? (isAr ? 'متوسط' : 'Medium') : (isAr ? 'متقدم' : 'Hard')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Game Mode Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        {[
          { id: 'guess-element', labelEn: '1. Guess the Element', labelAr: '1. خمّن العنصر' },
          { id: 'instruments', labelEn: '2. Scientific Instruments', labelAr: '2. أدوات المختبر' },
          { id: 'true-false', labelEn: '3. True or False Rush', labelAr: '3. صح أم خطأ' },
          { id: 'chemical-puzzle', labelEn: '4. Chemical Equation Balancer', labelAr: '4. موازنة المعادلات' },
        ].map((gm) => (
          <button
            key={gm.id}
            onClick={() => {
              playClickSound();
              setActiveGame(gm.id as GameMode);
              setFeedback(null);
            }}
            className={`px-4 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeGame === gm.id
                ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/30'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
            }`}
          >
            {isAr ? gm.labelAr : gm.labelEn}
          </button>
        ))}
      </div>

      {/* Instant Feedback Banner */}
      {feedback && (
        <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold flex items-center gap-3 animate-fade-in ${
          feedback.isCorrect
            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
        }`}>
          {feedback.isCorrect ? <CheckCircle className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* ======================================================== */}
      {/* GAME 1: GUESS THE ELEMENT                                */}
      {/* ======================================================== */}
      {activeGame === 'guess-element' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-fuchsia-400">
                {isAr ? 'لغز العنصر الغامض' : 'Mystery Element Riddle'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {isAr ? 'أي عنصر كيميائي تتحدث عنه هذه الدلائل؟' : 'Which element matches these scientific clues?'}
              </h3>
            </div>
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
            >
              💡 {isAr ? 'أظهر تلميحاً' : 'Show Hint'}
            </button>
          </div>

          {/* Clues Card */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'الدلائل العلمية:' : 'Scientific Clues:'}</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {isAr ? targetElement.summaryAr : targetElement.summaryEn}
            </p>

            {showHint && (
              <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
                🔍 {isAr ? `تلميح: حالته في حرارة الغرفة (${targetElement.state})، وتوزيعه الإلكتروني: ${targetElement.electronConfiguration}` : `Hint: State at STP is ${targetElement.state}, config: ${targetElement.electronConfiguration}`}
              </div>
            )}
          </div>

          {/* Answer Choice Buttons */}
          <div>
            <span className="text-xs text-slate-400 block mb-3 font-semibold">
              {isAr ? 'اختر العنصر الصحيح من الخيارات التالية:' : 'Select the matching element:'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                targetElement,
                candidateElements[(guessElementIdx + 1) % candidateElements.length],
                candidateElements[(guessElementIdx + 2) % candidateElements.length],
                candidateElements[(guessElementIdx + 3) % candidateElements.length],
              ]
                .sort(() => 0.5 - Math.random())
                .map((cand) => (
                  <button
                    key={cand.number}
                    onClick={() => handleGuessElement(cand.number)}
                    className="p-4 rounded-2xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-center transition-all group cursor-pointer"
                  >
                    <span className="text-2xl font-black text-cyan-300 font-mono block mb-1 group-hover:scale-110 transition-transform">
                      {cand.symbol}
                    </span>
                    <span className="text-xs font-bold text-white block">
                      {isAr ? cand.nameAr : cand.nameEn}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Z = {cand.number}</span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* GAME 2: SCIENTIFIC INSTRUMENTS                           */}
      {/* ======================================================== */}
      {activeGame === 'instruments' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400">
                {isAr ? 'أدوات وأجهزة المختبر العلمي' : 'Laboratory Instruments Mastery'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {isAr ? 'ما هي الأداة العلمية المناسبة لهذه المهمة؟' : 'Which laboratory tool performs this task?'}
              </h3>
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
              {isAr ? 'الوظيفة والاستخدام الأساسي:' : 'Primary Function:'}
            </span>
            <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              {isAr ? currentInstrument.primaryUseAr : currentInstrument.primaryUseEn}
            </p>
            <span className="text-xs text-slate-400 block mt-1">
              {isAr ? currentInstrument.descriptionAr : currentInstrument.descriptionEn}
            </span>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCIENTIFIC_INSTRUMENTS.map((inst) => (
              <button
                key={inst.id}
                onClick={() => handleAnswerInstrument(inst.id)}
                className="p-4 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-left rtl:text-right transition-colors"
              >
                <span className="text-sm font-bold text-white block">
                  {isAr ? inst.nameAr : inst.nameEn}
                </span>
                <span className="text-xs text-slate-500">{inst.category}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* GAME 3: TRUE OR FALSE RUSH                               */}
      {/* ======================================================== */}
      {activeGame === 'true-false' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">
                {currentTf.subject} · {isAr ? 'تحدي السرعة' : 'Speed Challenge'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {isAr ? 'هل هذه العبارة العلمية صحيحة أم خاطئة؟' : 'Is this scientific statement True or False?'}
              </h3>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center">
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed">
              "{isAr ? currentTf.questionAr : currentTf.questionEn}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleTrueFalse(true)}
              className="py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-lg shadow-emerald-600/20"
            >
              <CheckCircle className="w-5 h-5" />
              <span>{isAr ? 'صحيحة (True)' : 'TRUE'}</span>
            </button>

            <button
              onClick={() => handleTrueFalse(false)}
              className="py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-base flex items-center justify-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-lg shadow-rose-600/20"
            >
              <XCircle className="w-5 h-5" />
              <span>{isAr ? 'خاطئة (False)' : 'FALSE'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* GAME 4: CHEMICAL EQUATION BALANCER                       */}
      {/* ======================================================== */}
      {activeGame === 'chemical-puzzle' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xl">
          <div className="pb-4 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-cyan-400">
              {isAr ? 'لغز موازنة المعادلات الكيميائية' : 'Chemical Stoichiometry Challenge'}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {isAr ? currentPuzzle.descriptionAr : currentPuzzle.descriptionEn}
            </h3>
          </div>

          {/* Interactive Balancing Workbench */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-center gap-3 text-lg font-mono font-bold text-white">
            
            {/* Reactant 1 */}
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="1"
                max="6"
                value={reactantCoeffs[0] || 1}
                onChange={(e) => {
                  const val = Math.max(1, parseInt(e.target.value) || 1);
                  setReactantCoeffs((prev) => [val, prev[1] || 1]);
                }}
                className="w-12 h-12 bg-slate-900 border-2 border-cyan-500 rounded-xl text-center text-cyan-300 font-mono text-xl"
              />
              <span>{currentPuzzle.reactants[0]?.formula}</span>
            </div>

            {currentPuzzle.reactants[1] && (
              <>
                <span className="text-slate-500">+</span>
                {/* Reactant 2 */}
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={reactantCoeffs[1] || 1}
                    onChange={(e) => {
                      const val = Math.max(1, parseInt(e.target.value) || 1);
                      setReactantCoeffs((prev) => [prev[0] || 1, val]);
                    }}
                    className="w-12 h-12 bg-slate-900 border-2 border-cyan-500 rounded-xl text-center text-cyan-300 font-mono text-xl"
                  />
                  <span>{currentPuzzle.reactants[1]?.formula}</span>
                </div>
              </>
            )}

            <span className="text-amber-400 text-2xl font-bold px-2">→</span>

            {/* Product 1 */}
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                min="1"
                max="6"
                value={productCoeffs[0] || 1}
                onChange={(e) => {
                  const val = Math.max(1, parseInt(e.target.value) || 1);
                  setProductCoeffs((prev) => [val, prev[1] || 1]);
                }}
                className="w-12 h-12 bg-slate-900 border-2 border-emerald-500 rounded-xl text-center text-emerald-300 font-mono text-xl"
              />
              <span>{currentPuzzle.products[0]?.formula}</span>
            </div>

            {currentPuzzle.products[1] && (
              <>
                <span className="text-slate-500">+</span>
                {/* Product 2 */}
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="1"
                    max="6"
                    value={productCoeffs[1] || 1}
                    onChange={(e) => {
                      const val = Math.max(1, parseInt(e.target.value) || 1);
                      setProductCoeffs((prev) => [prev[0] || 1, val]);
                    }}
                    className="w-12 h-12 bg-slate-900 border-2 border-emerald-500 rounded-xl text-center text-emerald-300 font-mono text-xl"
                  />
                  <span>{currentPuzzle.products[1]?.formula}</span>
                </div>
              </>
            )}
          </div>

          <button
            onClick={checkEquationBalance}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.01]"
          >
            {isAr ? 'التحقق من وزن المعادلة (+30 XP)' : 'Verify Balanced Equation (+30 XP)'}
          </button>
        </div>
      )}

      {/* Badges and Honors Showcase */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h4 className="text-sm font-bold text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{isAr ? 'أوسمة الإنجاز العلمي المتاحة' : 'Earnable Scientific Achievement Badges'}</span>
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {BADGES_LIST.map((b) => (
            <div
              key={b.id}
              className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-center space-y-1.5 hover:border-amber-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center justify-center mx-auto">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white block">
                {isAr ? b.nameAr : b.nameEn}
              </span>
              <span className="text-[10px] text-slate-500 block leading-tight">
                {isAr ? b.descAr : b.descEn}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
