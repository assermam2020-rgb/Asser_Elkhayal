import React, { useState } from 'react';
import { JournalEntry, Language, StudentProgress } from '../../types';
import { BADGES_LIST } from '../../data/games';
import {
  User,
  GraduationCap,
  Award,
  Sparkles,
  BookOpen,
  Calendar,
  CheckCircle,
  Trophy,
  Flame,
  Save,
  Trash2,
} from 'lucide-react';
import { playClickSound, playSuccessChime } from '../../utils/audioEffects';

interface StudentProfileProps {
  language: Language;
  progress: StudentProgress;
  onUpdateProfile: (updated: Partial<StudentProgress>) => void;
  onDeleteJournalEntry: (id: string) => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({
  language,
  progress,
  onUpdateProfile,
  onDeleteJournalEntry,
}) => {
  const isAr = language === 'ar';

  const [isEditing, setIsEditing] = useState(false);
  const [studentName, setStudentName] = useState(progress.name);
  const [grade, setGrade] = useState(progress.grade);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();
    onUpdateProfile({ name: studentName, grade });
    setIsEditing(false);
  };

  const gradesList = [
    { id: 'primary-4', labelEn: 'Primary 4 (Grade 4)', labelAr: 'الصف الرابع الابتدائي' },
    { id: 'primary-5', labelEn: 'Primary 5 (Grade 5)', labelAr: 'الصف الخامس الابتدائي' },
    { id: 'primary-6', labelEn: 'Primary 6 (Grade 6)', labelAr: 'الصف السادس الابتدائي' },
    { id: 'prep-1', labelEn: 'Preparatory 1 (Grade 7)', labelAr: 'الصف الأول الإعدادي' },
    { id: 'prep-2', labelEn: 'Preparatory 2 (Grade 8)', labelAr: 'الصف الثاني الإعدادي' },
    { id: 'prep-3', labelEn: 'Preparatory 3 (Grade 9)', labelAr: 'الصف الثالث الإعدادي' },
  ];

  return (
    <div className="space-y-8 pb-16 text-left rtl:text-right">
      
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          
          {/* Student Identity Lockup */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 flex items-center justify-center shadow-xl shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-cyan-300">
                <User className="w-10 h-10" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {progress.name || (isAr ? 'عالم EJS المتميز' : 'EJS Young Scientist')}
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-xs text-cyan-400 hover:underline font-semibold"
                >
                  {isEditing ? (isAr ? 'إلغاء' : 'Cancel') : (isAr ? 'تعديل' : 'Edit')}
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>{progress.grade}</span>
                <span>·</span>
                <span className="text-cyan-400 font-semibold">{progress.schoolBranch}</span>
              </p>
            </div>
          </div>

          {/* XP & Level Summary */}
          <div className="flex items-center gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                {isAr ? 'إجمالي نقاط الخبرة XP' : 'Total Science XP'}
              </span>
              <span className="text-2xl font-mono font-black text-white">
                {progress.score} XP
              </span>
            </div>
          </div>

        </div>

        {/* Edit Profile Form */}
        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">
                {isAr ? 'اسم الطالب:' : 'Student Name:'}
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">
                {isAr ? 'المرحلة الدراسية:' : 'Grade Level:'}
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                {gradesList.map((g) => (
                  <option key={g.id} value={isAr ? g.labelAr : g.labelEn}>
                    {isAr ? g.labelAr : g.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-colors"
              >
                {isAr ? 'حفظ البيانات' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Badges Gallery */}
      <section className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>{isAr ? 'أوسمة الإنجاز والتميز العلمي' : 'Unlocked Achievement Badges'}</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {BADGES_LIST.map((b) => {
            const unlocked = progress.score >= 50; // Dynamic unlock based on points
            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  unlocked
                    ? 'bg-slate-900 border-amber-500/40 text-amber-300 shadow-lg'
                    : 'bg-slate-950/50 border-slate-800 text-slate-600 opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2 ${
                  unlocked ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-900 text-slate-600'
                }`}>
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-white block mb-0.5">
                  {isAr ? b.nameAr : b.nameEn}
                </span>
                <span className="text-[10px] text-slate-400 block leading-tight">
                  {isAr ? b.descAr : b.descEn}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Science Journal Records */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>{isAr ? 'مذكرات التجارب الميدانية المسجلة' : 'Recorded Field Journal Observations'}</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">
            {progress.journal.length} {isAr ? 'سجلات' : 'entries'}
          </span>
        </div>

        {progress.journal.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 text-center text-xs text-slate-400">
            {isAr
              ? 'لم تقم بتسجيل أي تجربة بعد. افتح قسم "العلوم في المنزل" وقم بتوثيق أول تجربة لك بالصور!'
              : 'No field notes yet. Open the "Science At Home" tab to document your experiments with photos!'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {progress.journal.map((entry) => (
              <div
                key={entry.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3"
              >
                {entry.imageDataUrl && (
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-800">
                    <img src={entry.imageDataUrl} alt={entry.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    {entry.date} · {entry.experimentName}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{entry.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    {entry.notes}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {isAr ? 'موثق' : 'Logged'}
                  </span>
                  <button
                    onClick={() => {
                      playClickSound();
                      onDeleteJournalEntry(entry.id);
                    }}
                    className="text-slate-500 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
