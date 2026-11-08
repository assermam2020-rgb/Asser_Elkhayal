import React from 'react';
import { Language } from '../types';
import { Compass, Sparkles, BookOpen, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  schoolLogo: string;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, schoolLogo, onNavigate }) => {
  const isAr = language === 'ar';

  return (
    <footer className="border-t border-slate-800 dark:border-slate-800 border-slate-200 bg-slate-950 dark:bg-slate-950 bg-slate-900 text-slate-300 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & School Lockup */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-xl p-1 shadow border border-slate-700 flex items-center justify-center shrink-0">
                <img
                  src={schoolLogo}
                  alt="Egyptian Japanese Schools Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  {isAr ? 'عالم علوم EJS' : 'EJS SCIENCE WORLD'}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold">
                  {isAr ? 'المدرسة المصرية اليابانية - فرع السلام 2' : 'Egyptian Japanese School – El Salam 2 Branch'}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {isAr
                ? 'منصة تعليمية علمية تفاعلية ثنائية اللغة متطورة ومصممة لطلاب المدرسة المصرية اليابانية بالسلام 2، تجمع بين نماذج الذرة ثلاثية الأبعاد والتجارب المعملية الافتراضية ومحاكاة العلوم الممتعة.'
                : 'A high-impact bilingual interactive science education platform engineered for students at Egyptian Japanese School – El Salam 2, combining 3D atomic labs, virtual experiments, and STEM discovery.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'شعارنا: استكشف. جرّب. اكتشف.' : 'Tagline: Explore. Experiment. Discover.'}</span>
            </div>
          </div>

          {/* Quick Learning Labs */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'المختبرات التفاعلية' : 'Interactive Labs'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('periodic-table')} className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'الجدول الدوري لـ 118 عنصراً' : '118-Element Periodic Table'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('atomic-lab')} className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'مختبر بناء الذرة التفاعلي' : 'Build Your Own Atom Lab'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('virtual-lab')} className="hover:text-cyan-400 transition-colors">
                  {isAr ? '22 تجربة افتراضية (كيمياء، فيزياء، أحياء)' : '22 Virtual STEM Experiments'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('explorer-3d')} className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'مستكشف النماذج ثلاثية الأبعاد' : '3D Science Explorer'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home-science')} className="hover:text-cyan-400 transition-colors">
                  {isAr ? 'تجارب علمية آمنة في المنزل' : 'Safe Science At Home'}
                </button>
              </li>
            </ul>
          </div>

          {/* Academic References */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>{isAr ? 'المصادر المعتمدة' : 'Trusted Sources'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://phet.colorado.edu/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">PhET Interactive Simulations</a></li>
              <li><a href="https://www.nasa.gov/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">NASA Science Portal</a></li>
              <li><a href="https://iupac.org/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">IUPAC Chemistry Union</a></li>
              <li><a href="https://www.rsc.org/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Royal Society of Chemistry</a></li>
              <li>
                <button onClick={() => onNavigate('library')} className="text-cyan-400 hover:underline">
                  {isAr ? 'عرض المكتبة العلمية الكاملة ←' : 'View Full Science Library →'}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              {isAr
                ? 'منصة تعليمية معتمدة لطلاب المدارس المصرية اليابانية - السلام 2'
                : 'Educational STEM Platform – Egyptian Japanese School El Salam 2'}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>{isAr ? 'صُمم بكل' : 'Crafted with'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{isAr ? 'لجيل علماء المستقبل في مصر' : 'for Egypt’s Future Scientists'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
