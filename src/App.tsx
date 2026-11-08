import React, { useState, useEffect } from 'react';
import { Language, ThemeMode, StudentProgress, JournalEntry } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroDashboard } from './components/Dashboard/HeroDashboard';
import { PeriodicTable } from './components/PeriodicTable/PeriodicTable';
import { AtomicLab } from './components/AtomicLab/AtomicLab';
import { VirtualLab } from './components/VirtualLab/VirtualLab';
import { HomeExperiments } from './components/HomeExperiments/HomeExperiments';
import { Explorer3D } from './components/Explorer3D/Explorer3D';
import { GamesHub } from './components/GamesHub/GamesHub';
import { ScienceLibrary } from './components/ScienceLibrary/ScienceLibrary';
import { StudentProfile } from './components/StudentProfile/StudentProfile';

const OFFICIAL_LOGO = '/assets/aistudio/images_88a44b81.png';

const INITIAL_PROGRESS: StudentProgress = {
  name: 'عمر مصطفى',
  grade: 'الصف الخامس الابتدائي',
  schoolBranch: 'المدرسة المصرية اليابانية - السلام 2',
  score: 120,
  completedExperiments: ['chem-volcano', 'phys-circuit'],
  unlockedBadges: ['first_element', 'virtual_chemist'],
  journal: [
    {
      id: 'init-1',
      title: 'ملاحظة فوران بيكربونات الصوديوم والخل',
      experimentName: 'تجربة البركان الكيميائي',
      date: '8 نوفمبر 2026',
      notes: 'لاحظت تصاعد فقاعات كثيفة من غاز ثاني أكسيد الكربون، وانخفاضاً طفيفاً في درجة حرارة قاع القارورة.',
    },
  ],
};

export default function App() {
  // Language & Direction
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [subFilter, setSubFilter] = useState<string>('all');
  const [schoolLogo, setSchoolLogo] = useState<string>(OFFICIAL_LOGO);

  // Student progress in localStorage
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const saved = localStorage.getItem('ejs_science_progress');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_PROGRESS;
  });

  // Sync direction on html element
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Sync theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem('ejs_science_progress', JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const handleAddScore = (points: number) => {
    setProgress((prev) => ({
      ...prev,
      score: prev.score + points,
    }));
  };

  const handleSaveJournalEntry = (entry: JournalEntry) => {
    setProgress((prev) => ({
      ...prev,
      journal: [entry, ...prev.journal],
    }));
  };

  const handleDeleteJournalEntry = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      journal: prev.journal.filter((j) => j.id !== id),
    }));
  };

  const handleUpdateProfile = (updated: Partial<StudentProgress>) => {
    setProgress((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSchoolLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetLogo = () => {
    setSchoolLogo(OFFICIAL_LOGO);
  };

  const handleNavigateWithFilter = (tab: string, filter?: string) => {
    setActiveTab(tab);
    if (filter) setSubFilter(filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 text-slate-100 flex flex-col transition-colors selection:bg-cyan-500 selection:text-white">
      {/* Sticky Bilingual Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        score={progress.score}
        schoolLogo={schoolLogo}
        onLogoUpload={handleLogoUpload}
        onResetLogo={handleResetLogo}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'dashboard' && (
          <HeroDashboard
            language={language}
            onNavigate={handleNavigateWithFilter}
            studentName={progress.name}
          />
        )}

        {activeTab === 'periodic-table' && (
          <PeriodicTable
            language={language}
            onAddScore={handleAddScore}
          />
        )}

        {activeTab === 'atomic-lab' && (
          <AtomicLab
            language={language}
            onAddScore={handleAddScore}
          />
        )}

        {activeTab === 'virtual-lab' && (
          <VirtualLab
            language={language}
            initialFilter={subFilter}
            onAddScore={handleAddScore}
          />
        )}

        {activeTab === 'home-science' && (
          <HomeExperiments
            language={language}
            journal={progress.journal}
            onSaveJournalEntry={handleSaveJournalEntry}
            onDeleteJournalEntry={handleDeleteJournalEntry}
            onAddScore={handleAddScore}
          />
        )}

        {activeTab === 'explorer-3d' && (
          <Explorer3D language={language} />
        )}

        {activeTab === 'games' && (
          <GamesHub
            language={language}
            onAddScore={handleAddScore}
            onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'library' && (
          <ScienceLibrary language={language} />
        )}

        {activeTab === 'profile' && (
          <StudentProfile
            language={language}
            progress={progress}
            onUpdateProfile={handleUpdateProfile}
            onDeleteJournalEntry={handleDeleteJournalEntry}
          />
        )}
      </main>

      {/* School Footer */}
      <Footer
        language={language}
        schoolLogo={schoolLogo}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
