import React, { useState } from 'react';
import { HomeActivity, JournalEntry, Language } from '../../types';
import { HOME_ACTIVITIES } from '../../data/experiments';
import {
  Home,
  CheckSquare,
  Square,
  Clock,
  ShieldCheck,
  Upload,
  BookOpen,
  Award,
  Sparkles,
  Camera,
  Trash2,
  Calendar,
  Save,
} from 'lucide-react';
import { playClickSound, playSuccessChime } from '../../utils/audioEffects';
import confetti from 'canvas-confetti';

interface HomeExperimentsProps {
  language: Language;
  journal: JournalEntry[];
  onSaveJournalEntry: (entry: JournalEntry) => void;
  onDeleteJournalEntry: (id: string) => void;
  onAddScore: (points: number) => void;
}

export const HomeExperiments: React.FC<HomeExperimentsProps> = ({
  language,
  journal,
  onSaveJournalEntry,
  onDeleteJournalEntry,
  onAddScore,
}) => {
  const isAr = language === 'ar';

  const [activeTab, setActiveTab] = useState<'activities' | 'journal'>('activities');
  const [selectedActivity, setSelectedActivity] = useState<HomeActivity>(HOME_ACTIVITIES[0]);
  const [checkedMaterials, setCheckedMaterials] = useState<Record<string, boolean>>({});

  // Journal form state
  const [journalTitle, setJournalTitle] = useState('');
  const [journalNotes, setJournalNotes] = useState('');
  const [journalImage, setJournalImage] = useState<string | null>(null);

  const toggleMaterial = (m: string) => {
    playClickSound();
    setCheckedMaterials((prev) => ({ ...prev, [m]: !prev[m] }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setJournalImage(reader.result as string);
        playClickSound();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveObservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalNotes.trim()) return;

    playSuccessChime();
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    onAddScore(35);

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      title: journalTitle.trim() || (isAr ? selectedActivity.titleAr : selectedActivity.titleEn),
      experimentName: isAr ? selectedActivity.titleAr : selectedActivity.titleEn,
      date: new Date().toLocaleDateString(isAr ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      notes: journalNotes,
      imageDataUrl: journalImage || undefined,
    };

    onSaveJournalEntry(newEntry);
    setJournalTitle('');
    setJournalNotes('');
    setJournalImage(null);
    setActiveTab('journal');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Home className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'العلوم في المنزل - اصنعها بنفسك!' : 'SCIENCE AT HOME – DO IT YOURSELF!'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isAr ? 'تجارب علمية آمنة بمكونات المطبخ' : 'Safe Kitchen Science & STEM Discovery'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'تجارب تطبيقية ممتعة وآمنة تماماً، قم بتجهيز المواد، وتسجيل ملاحظاتك، ورفع صور التجربة في دفتر العلوم.'
              : 'Safe household activities using kitchen supplies. Check materials, record hypotheses, and upload photos to your journal.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'activities' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأنشطة والتجارب' : 'DIY Activities'}</span>
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'journal' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isAr ? `مذكرتي العلمية (${journal.length})` : `My Science Journal (${journal.length})`}</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ACTIVITIES SECTION                                       */}
      {/* ======================================================== */}
      {activeTab === 'activities' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Activities Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {isAr ? 'اختر تجربة منزلية:' : 'Select Home Project:'}
            </span>
            {HOME_ACTIVITIES.map((act) => {
              const active = selectedActivity.id === act.id;
              return (
                <button
                  key={act.id}
                  onClick={() => {
                    playClickSound();
                    setSelectedActivity(act);
                    setCheckedMaterials({});
                  }}
                  className={`w-full text-left rtl:text-right p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    active
                      ? 'bg-slate-900 border-amber-500 shadow-md ring-1 ring-amber-500/40'
                      : 'bg-slate-950/60 hover:bg-slate-900 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {act.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {act.estimatedTime}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2">
                    {isAr ? act.titleAr : act.titleEn}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{isAr ? `وسام: ${act.badgeName}` : `Badge: ${act.badgeName}`}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Activity Detail Workspace */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left rtl:text-right shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {selectedActivity.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {isAr ? selectedActivity.titleAr : selectedActivity.titleEn}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{selectedActivity.estimatedTime}</span>
                </div>
              </div>

              {/* Safety Precautions Box */}
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-300 block">
                    {isAr ? 'إرشادات السلامة والأمان:' : 'Safety & Guidance:'}
                  </span>
                  <span className="text-slate-300">
                    {isAr ? selectedActivity.safetyAr : selectedActivity.safetyEn}
                  </span>
                </div>
              </div>

              {/* Materials Interactive Checklist */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {isAr ? 'قائمة المواد والأدوات (حدد ما قمت بتجهيزه):' : 'Materials Checklist (Check as you gather):'}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(isAr ? selectedActivity.materialsAr : selectedActivity.materialsEn).map((mat, idx) => {
                    const isChecked = !!checkedMaterials[mat];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleMaterial(mat)}
                        className={`p-3 rounded-xl border text-left rtl:text-right flex items-center gap-3 transition-colors ${
                          isChecked
                            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                        <span className={isChecked ? 'line-through opacity-80' : ''}>{mat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {isAr ? 'خطوات العمل المصورة:' : 'Illustrated Step-by-Step Instructions:'}
                </h5>
                <ol className="space-y-2.5 text-xs text-slate-300">
                  {(isAr ? selectedActivity.stepsAr : selectedActivity.stepsEn).map((step, sIdx) => (
                    <li key={sIdx} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Scientific Explanation */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-amber-400 block">
                  {isAr ? 'ما هو التفسير العلمي وراء الظاهرة؟' : 'The Science Behind It:'}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isAr ? selectedActivity.scienceAr : selectedActivity.scienceEn}
                </p>
              </div>

              {/* Observation Notebook & Photo Upload Form */}
              <form onSubmit={handleSaveObservation} className="bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Camera className="w-4 h-4" />
                  <span>{isAr ? 'دفتر الملاحظات ورفع صورة التجربة' : 'Observation Notebook & Photo Upload'}</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">
                      {isAr ? 'عنوان الملاحظة (اختياري):' : 'Entry Title (Optional):'}
                    </label>
                    <input
                      type="text"
                      value={journalTitle}
                      onChange={(e) => setJournalTitle(e.target.value)}
                      placeholder={isAr ? selectedActivity.titleAr : selectedActivity.titleEn}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">
                      {isAr ? 'ماذا لاحظت وما هو استنتاجك؟' : 'What did you observe and conclude?'}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={journalNotes}
                      onChange={(e) => setJournalNotes(e.target.value)}
                      placeholder={isAr ? 'اكتب ملاحظاتك، الألوان، التغيرات، أو المدة الزمنية...' : 'Write your observations, colors, reaction times, or findings...'}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Photo Upload Area */}
                  <div className="flex items-center gap-4">
                    <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 rounded-xl font-bold transition-colors">
                      <Upload className="w-4 h-4" />
                      <span>{journalImage ? (isAr ? 'تغيير الصورة' : 'Change Photo') : (isAr ? 'رفع صورة من هاتفك / حاسوبك' : 'Upload Experiment Photo')}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>

                    {journalImage && (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40">
                        <img src={journalImage} alt="Uploaded" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <Save className="w-4 h-4" />
                  <span>{isAr ? 'حفظ التجربة في دفتر العلوم ونيل الوسام (+35 XP)' : 'Save to Science Journal & Earn Badge (+35 XP)'}</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* MY SCIENCE JOURNAL SECTION                               */}
      {/* ======================================================== */}
      {activeTab === 'journal' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>{isAr ? 'مذكرتي وملاحظاتي العلمية المحفوظة' : 'My Recorded Scientific Observations'}</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {journal.length} {isAr ? 'تسجيلات محفوظة' : 'Saved Entries'}
            </span>
          </div>

          {journal.length === 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {isAr ? 'لا توجد ملاحظات مسجلة بعد' : 'No Journal Entries Yet'}
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                  {isAr
                    ? 'قم بإجراء إحدى التجارب المنزلية وسجل ملاحظاتك وارفع صورة لتراها هنا في مذكرتك العلمية!'
                    : 'Conduct a home science experiment, record your observations, and upload a photo to see it here!'}
                </p>
              </div>
              <button
                onClick={() => setActiveTab('activities')}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors"
              >
                {isAr ? 'استكشف التجارب المنزلية' : 'Explore Home Projects'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journal.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-lg text-left rtl:text-right"
                >
                  <div className="space-y-3">
                    {/* Optional Photo */}
                    {entry.imageDataUrl && (
                      <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800">
                        <img
                          src={entry.imageDataUrl}
                          alt={entry.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {entry.date}
                      </span>
                      <button
                        onClick={() => {
                          playClickSound();
                          onDeleteJournalEntry(entry.id);
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1"
                        title={isAr ? 'حذف من الدفتر' : 'Delete Entry'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {entry.title}
                    </h4>

                    <span className="text-[11px] font-mono text-amber-400 block">
                      {entry.experimentName}
                    </span>

                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                      {entry.notes}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-emerald-400 font-bold">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {isAr ? 'تجربة موثقة بنجاح' : 'Verified Experiment'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
