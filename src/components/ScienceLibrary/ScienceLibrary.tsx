import React, { useState } from 'react';
import { Language } from '../../types';
import { TRUSTED_SOURCES, SCIENCE_GLOSSARY, TrustedSource, ScienceGlossaryTerm } from '../../data/library';
import {
  BookOpen,
  ExternalLink,
  Volume2,
  Search,
  ShieldCheck,
  Bookmark,
  Sparkles,
  Compass,
} from 'lucide-react';
import { speakText } from '../../utils/speech';
import { playClickSound } from '../../utils/audioEffects';

interface ScienceLibraryProps {
  language: Language;
}

export const ScienceLibrary: React.FC<ScienceLibraryProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [selectedField, setSelectedField] = useState<string>('all');

  const filteredGlossary = SCIENCE_GLOSSARY.filter((term) => {
    const q = glossaryQuery.toLowerCase().trim();
    const matchesQ =
      !q ||
      term.termEn.toLowerCase().includes(q) ||
      term.termAr.includes(q) ||
      term.definitionEn.toLowerCase().includes(q) ||
      term.definitionAr.includes(q);
    const matchesField = selectedField === 'all' || term.field === selectedField;
    return matchesQ && matchesField;
  });

  const handlePronounce = (term: ScienceGlossaryTerm) => {
    playClickSound();
    const text = isAr ? `${term.termAr}: ${term.definitionAr}` : `${term.termEn}: ${term.definitionEn}`;
    speakText(text, language);
  };

  return (
    <div className="space-y-10 pb-16 text-left rtl:text-right">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span>{isAr ? 'المراجع والمصادر العلمية الموثوقة' : 'Peer-Reviewed Science Resources & Standards'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          {isAr ? 'المكتبة العلمية والمصادر الأكاديمية' : 'Science Library & Trusted References'}
        </h2>
        <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
          {isAr
            ? 'مجموعة منتقاة من أهم المراجع والمؤسسات العلمية المعتمدة عالمياً لطلاب المدرسة المصرية اليابانية، إلى جانب القاموس العلمي الناطق.'
            : 'Curated world-class educational archives, international chemical authorities, and interactive bilingual glossaries with speech synthesis.'}
        </p>
      </div>

      {/* Verified Academic Sources Grid */}
      <section className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>{isAr ? 'المصادر والمنظمات العلمية المعتمدة' : 'Verified Educational Authorities'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUSTED_SOURCES.map((source, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 block mb-2 w-fit">
                  {source.organization}
                </span>

                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {isAr ? source.titleAr : source.titleEn}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {isAr ? source.descriptionAr : source.descriptionEn}
                </p>
              </div>

              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors pt-2 border-t border-slate-800/80"
              >
                <span>{isAr ? 'زيارة الموقع الرسمي' : 'Visit Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bilingual Interactive Scientific Glossary */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-cyan-400" />
              <span>{isAr ? 'القاموس العلمي الناطق (ثنائي اللغة)' : 'Bilingual Spoken Science Glossary'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAr ? 'ابحث في المصطلحات العلمية واستمع لنطقها وتعريفها الصحيح' : 'Search scientific terminology and listen to verified audio pronunciation'}
            </p>
          </div>

          {/* Field Filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            {(['all', 'Physics', 'Chemistry', 'Biology', 'Astronomy'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setSelectedField(f)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                  selectedField === f
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f === 'all' ? (isAr ? 'الكل' : 'All') : f}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={glossaryQuery}
            onChange={(e) => setGlossaryQuery(e.target.value)}
            placeholder={isAr ? 'ابحث في المصطلحات (مثال: الذرة، البناء الضوئي، النظائر...)' : 'Search terms (e.g. Atom, Photosynthesis, Isotope)...'}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Glossary Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((term, tIdx) => (
            <div
              key={tIdx}
              className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">
                      {isAr ? term.termAr : term.termEn}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ({isAr ? term.termEn : term.termAr})
                    </span>
                  </div>

                  <button
                    onClick={() => handlePronounce(term)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 transition-colors"
                    title={isAr ? 'استمع لنطق المصطلح' : 'Pronounce Term'}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <span className="text-[10px] font-mono text-cyan-400/80 block mb-2">
                  [{term.phonetic}] · {term.field}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr ? term.definitionAr : term.definitionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
