import React, { useState } from 'react';
import { Language } from '../../types';
import {
  Atom,
  Layers,
  FlaskConical,
  Home,
  Zap,
  TestTubes,
  Dna,
  Telescope,
  Gamepad2,
  BookOpen,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Boxes,
  Award,
  Compass,
} from 'lucide-react';
import { speakText } from '../../utils/speech';
import { playClickSound } from '../../utils/audioEffects';

interface HeroDashboardProps {
  language: Language;
  onNavigate: (tab: string, filter?: string) => void;
  studentName: string;
}

export const HeroDashboard: React.FC<HeroDashboardProps> = ({
  language,
  onNavigate,
  studentName,
}) => {
  const isAr = language === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [speakingFact, setSpeakingFact] = useState(false);

  const heroFactEn =
    'Did you know? Every atom of carbon, oxygen, and iron in our bodies was forged inside ancient dying stars billions of years ago. We are literally made of stardust!';
  const heroFactAr =
    'هل تعلم؟ كل ذرة كربون وأكسجين وحديد في أجسادنا تخلق في قلوب نجوم عملاقة انفجرت قبل مليارات السنين. نحن بالمعنى الحرفي مصنوعون من غبار النجوم!';

  const handleReadFact = () => {
    playClickSound();
    setSpeakingFact(true);
    speakText(isAr ? heroFactAr : heroFactEn, language, () => setSpeakingFact(false));
  };

  const dashboardCards = [
    {
      id: 'periodic-table',
      titleEn: '1. Interactive Periodic Table',
      titleAr: '1. الجدول الدوري التفاعلي',
      icon: Atom,
      color: 'from-cyan-500/20 to-blue-600/20 border-cyan-500/40 text-cyan-400',
      badgeEn: 'All 118 Elements',
      badgeAr: '118 عنصراً كاملاً',
      descEn: 'Explore atomic numbers, masses, electron configurations, audio pronunciations, and 3D Bohr models.',
      descAr: 'استكشف الأعداد الذرية، التوزيع الإلكتروني، نطق الأسماء الصوتي، ونماذج بور ثلاثية الأبعاد.',
      actionTab: 'periodic-table',
      actionFilter: '',
    },
    {
      id: 'atomic-lab',
      titleEn: '2. Atomic Structure Lab',
      titleAr: '2. مختبر التركيب الذري (ابنِ ذرتك)',
      icon: Layers,
      color: 'from-indigo-500/20 to-purple-600/20 border-indigo-500/40 text-indigo-400',
      badgeEn: 'Build Your Own Atom',
      badgeAr: 'تحديات بناء العناصر',
      descEn: 'Add protons, neutrons, and electrons to synthesize elements, calculate net charges, and discover isotopes.',
      descAr: 'أضف البروتونات والنيوترونات والإلكترونات لتخليق العناصر وحساب الشحنة وتحديد النظائر المستقرة.',
      actionTab: 'atomic-lab',
      actionFilter: '',
    },
    {
      id: 'virtual-lab',
      titleEn: '3. Virtual Science Experiments',
      titleAr: '3. مختبر التجارب الافتراضية',
      icon: FlaskConical,
      color: 'from-emerald-500/20 to-teal-600/20 border-emerald-500/40 text-emerald-400',
      badgeEn: '22 STEM Simulations',
      badgeAr: '22 تجربة تفاعلية',
      descEn: 'Perform high-fidelity laboratory experiments with real-time controls, safety guides, and interactive quizzes.',
      descAr: 'أجرِ تجارب علمية بمحاكاة فورية مع إرشادات السلامة والشرح العلمي المفصل والاختبارات الذاتية.',
      actionTab: 'virtual-lab',
      actionFilter: 'all',
    },
    {
      id: 'home-science',
      titleEn: '4. Science at Home – Do It Yourself!',
      titleAr: '4. تجارب علمية في المنزل (اصنعها بنفسك)',
      icon: Home,
      color: 'from-amber-500/20 to-orange-600/20 border-amber-500/40 text-amber-400',
      badgeEn: 'Kitchen STEM Lab',
      badgeAr: 'تجارب آمنة بالبيت',
      descEn: 'Safe, hands-on scientific projects using accessible kitchen materials with photo observation journals.',
      descAr: 'مشاريع علمية منزلية آمنة بمكونات المطبخ البسيطة مع دفتر توثيق التجارب بالصور ونيل الأوسمة.',
      actionTab: 'home-science',
      actionFilter: '',
    },
    {
      id: 'physics-lab',
      titleEn: '5. Physics Lab',
      titleAr: '5. مختبر الفيزياء التفاعلي',
      icon: Zap,
      color: 'from-yellow-500/20 to-amber-600/20 border-yellow-500/40 text-yellow-400',
      badgeEn: 'Circuits, Optics & Waves',
      badgeAr: 'دوائر وموجات وبندول',
      descEn: 'Build circuits, bend laser rays with Snell’s law, swing real pendulums, and analyze audible sound waves.',
      descAr: 'ركّب دوائر كهربائية، اكسر أشعة الليزر، حرك بندولاً حقيقياً، وحلل الموجات الصوتية بالنغمات الحية.',
      actionTab: 'virtual-lab',
      actionFilter: 'physics',
    },
    {
      id: 'chemistry-lab',
      titleEn: '6. Chemistry Lab',
      titleAr: '6. مختبر الكيمياء التفاعلي',
      icon: TestTubes,
      color: 'from-rose-500/20 to-pink-600/20 border-rose-500/40 text-rose-400',
      badgeEn: 'Reactions & Solutions',
      badgeAr: 'تفاعلات وأحماض وبلورات',
      descEn: 'Erupt volcanoes, test red cabbage pH indicators, grow crystal lattices, and build density towers.',
      descAr: 'فجّر بركاناً كيميائياً، عاير الأحماض والقلويات، نمِّ بلورات الكريستال، وانشئ برج السوائل.',
      actionTab: 'virtual-lab',
      actionFilter: 'chemistry',
    },
    {
      id: 'biology-lab',
      titleEn: '7. Biology Lab',
      titleAr: '7. مختبر علم الأحياء',
      icon: Dna,
      color: 'from-green-500/20 to-emerald-600/20 border-green-500/40 text-green-400',
      badgeEn: 'Cells, DNA & Ecology',
      badgeAr: 'خلايا وحمض نووي وبيئة',
      descEn: 'Peer through microscopes, assemble DNA double helix base pairs, and balance complex food web pyramids.',
      descAr: 'افحص الشرائح بالمجهر، ابنِ درجات سلم الـ DNA، وتتبع سلاسل الغذاء وهرم الطاقة البيئي.',
      actionTab: 'virtual-lab',
      actionFilter: 'biology',
    },
    {
      id: 'space-astronomy',
      titleEn: '8. Space & Astronomy (3D)',
      titleAr: '8. الفضاء وعلم الفلك ثلاثي الأبعاد',
      icon: Telescope,
      color: 'from-violet-500/20 to-purple-600/20 border-violet-500/40 text-violet-400',
      badgeEn: 'Planets & Solar System',
      badgeAr: 'كواكب ومدارات فلكية',
      descEn: 'Orbit the Sun with terrestrial and gas giant planets, exploring rotational axes and celestial mechanics.',
      descAr: 'حلق حول الشمس واستكشف الكواكب الصخرية والغازية ومداراتها البيضاوية وقوانين الجاذبية.',
      actionTab: 'explorer-3d',
      actionFilter: 'solar-system',
    },
    {
      id: 'games-challenges',
      titleEn: '9. Science Games and Challenges',
      titleAr: '9. ألعاب وتحديات العلوم',
      icon: Gamepad2,
      color: 'from-fuchsia-500/20 to-pink-600/20 border-fuchsia-500/40 text-fuchsia-400',
      badgeEn: 'Earn XP & Badges',
      badgeAr: 'مسابقات ونقاط خبرة',
      descEn: 'Guess the element, balance chemical equations, match symbols, and conquer timed science speed quizzes.',
      descAr: 'خمّن العنصر، وازن المعادلات الكيميائية، طابق الرموز، وأجب عن مسابقات العلوم السريعة.',
      actionTab: 'games',
      actionFilter: '',
    },
    {
      id: 'science-resources',
      titleEn: '10. Scientific Discoveries & Resources',
      titleAr: '10. الاكتشافات والمصادر العلمية الموثوقة',
      icon: BookOpen,
      color: 'from-sky-500/20 to-blue-600/20 border-sky-500/40 text-sky-400',
      badgeEn: 'NASA, IUPAC & PhET',
      badgeAr: 'مراجع عالمية معتمدة',
      descEn: 'Access official educational archives from NASA, Royal Society of Chemistry, IUPAC, and science glossaries.',
      descAr: 'استعرض وثائق ومراجع رسمية من ناسا والجمعية الملكية للكيمياء والأيوباك والقاموس العلمي الناطق.',
      actionTab: 'library',
      actionFilter: '',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/80 border border-slate-800 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              {isAr
                ? 'مرحباً بطلاب المدرسة المصرية اليابانية - السلام 2'
                : 'Welcome, Egyptian Japanese School – El Salam 2 Students'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {isAr ? (
              <>
                عالم علوم <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">EJS SCIENCE WORLD</span>
              </>
            ) : (
              <>
                EJS <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">SCIENCE WORLD</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl font-bold text-cyan-300 flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <span>{isAr ? 'استكشف. جرّب. اكتشف.' : 'Explore. Experiment. Discover.'}</span>
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {isAr
              ? `أهلاً بك يا ${studentName || 'عالم المستقبل'}! انطلق في رحلة استكشاف ممتعة عبر بناء الذرات بيدك، وتجربة 22 محاكاة معملية تفاعلية، والتحليق بين الكواكب والنماذج ثلاثية الأبعاد.`
              : `Hello, ${studentName || 'Young Scientist'}! Embark on an interactive discovery journey: build your own atoms, conduct 22 hands-on laboratory simulations, and explore the universe in real-time 3D.`}
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                playClickSound();
                onNavigate('atomic-lab');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Atom className="w-4 h-4" />
              <span>{isAr ? 'ابدأ بناء ذرتك الآن' : 'Build Your Own Atom'}</span>
              <Arrow className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                onNavigate('periodic-table');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-colors"
            >
              <Boxes className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'الجدول الدوري (118 عنصراً)' : 'Periodic Table'}</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onNavigate('explorer-3d');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-colors"
            >
              <Telescope className="w-4 h-4 text-purple-400" />
              <span>{isAr ? 'مستكشف 3D' : '3D Models'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Daily Science Discovery / Voice Ticker */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0 mt-0.5 sm:mt-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              {isAr ? 'معلومة علمية ملهمة اليوم' : 'Daily Science Wonder'}
            </span>
            <p className="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed">
              {isAr ? heroFactAr : heroFactEn}
            </p>
          </div>
        </div>

        <button
          onClick={handleReadFact}
          className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-400 text-xs font-semibold transition-colors"
          title={isAr ? 'استمع للمعلومة بصوت ناطق' : 'Listen with Speech Narration'}
        >
          <Volume2 className={`w-4 h-4 ${speakingFact ? 'animate-bounce text-cyan-300' : ''}`} />
          <span>{isAr ? 'استمع للشرح' : 'Read Aloud'}</span>
        </button>
      </section>

      {/* Quantitative Scientific Metrics Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-3xl font-mono font-black text-cyan-400">118</span>
          <p className="text-xs font-medium text-slate-400 mt-1">
            {isAr ? 'عنصراً بالجدول الدوري' : 'IUPAC Elements'}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-3xl font-mono font-black text-emerald-400">22</span>
          <p className="text-xs font-medium text-slate-400 mt-1">
            {isAr ? 'تجربة معملية افتراضية' : 'Virtual Simulations'}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-3xl font-mono font-black text-purple-400">10</span>
          <p className="text-xs font-medium text-slate-400 mt-1">
            {isAr ? 'نماذج علمية 3D تفاعلية' : 'Interactive 3D Models'}
          </p>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 text-center">
          <span className="text-3xl font-mono font-black text-amber-400">9</span>
          <p className="text-xs font-medium text-slate-400 mt-1">
            {isAr ? 'ألعاب وتحديات علمية' : 'Science Challenges'}
          </p>
        </div>
      </section>

      {/* The 10 Interactive Cards Main Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-white">
              {isAr ? 'أقسام المنصة العلمية' : 'Platform Modules & Labs'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isAr
                ? 'انقر على أي مختبر للانتقال مباشرة وبدء التجارب والاستكشاف'
                : 'Choose any learning module to launch interactive experiments immediately'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {isAr ? card.badgeAr : card.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {isAr ? card.titleAr : card.titleEn}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {isAr ? card.descAr : card.descEn}
                  </p>
                </div>

                <button
                  onClick={() => {
                    playClickSound();
                    onNavigate(card.actionTab, card.actionFilter);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 group-hover:bg-cyan-500/20 text-slate-200 group-hover:text-cyan-300 border border-slate-700 group-hover:border-cyan-500/40 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{isAr ? 'دخول المختبر والتجربة' : 'Enter Lab & Explore'}</span>
                  <Arrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
