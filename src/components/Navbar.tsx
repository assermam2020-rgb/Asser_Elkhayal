import React, { useState } from 'react';
import { Language, ThemeMode } from '../types';
import { Globe, Moon, Sun, Volume2, VolumeX, Menu, X, Award, Upload } from 'lucide-react';
import { stopSpeech } from '../utils/speech';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  score: number;
  schoolLogo: string;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetLogo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  activeTab,
  onTabChange,
  score,
  schoolLogo,
  onLogoUpload,
  onResetLogo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const isAr = language === 'ar';

  const navLinks = [
    { id: 'dashboard', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'periodic-table', labelEn: 'Periodic Table', labelAr: 'الجدول الدوري' },
    { id: 'atomic-lab', labelEn: 'Atom Lab', labelAr: 'مختبر الذرة' },
    { id: 'virtual-lab', labelEn: 'Virtual Lab', labelAr: 'المختبر الافتراضي' },
    { id: 'home-science', labelEn: 'Science At Home', labelAr: 'علوم بالمنزل' },
    { id: 'explorer-3d', labelEn: '3D Explorer', labelAr: 'مستكشف 3D' },
    { id: 'games', labelEn: 'Games', labelAr: 'التحديات' },
    { id: 'library', labelEn: 'Library', labelAr: 'المكتبة' },
    { id: 'profile', labelEn: 'My Profile', labelAr: 'ملفي' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 dark:bg-slate-950/90 bg-white/90 backdrop-blur border-b border-slate-800 dark:border-slate-800 border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Zone with Official School Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onTabChange('dashboard')}
              className="flex items-center gap-3 text-left rtl:text-right group cursor-pointer focus-visible:outline-none"
              title={isAr ? 'العودة للرئيسية' : 'Return to Home'}
            >
              <div className="relative w-14 h-14 bg-white rounded-xl p-1 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={schoolLogo}
                  alt="Egyptian Japanese Schools Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent whitespace-nowrap">
                  {isAr ? 'عالم علوم EJS' : 'EJS SCIENCE WORLD'}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {isAr ? 'المدرسة المصرية اليابانية - فرع السلام 2' : 'Egyptian Japanese School – El Salam 2'}
                </span>
              </div>
            </button>

            <button
              onClick={() => setShowLogoModal(true)}
              className="p-1.5 text-xs text-slate-500 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-colors"
              title={isAr ? 'شعار المدرسة' : 'School Logo Options'}
              aria-label="School Logo Options"
            >
              <Upload className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Nav Links Desktop */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    active
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-slate-800/30'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions & Utilities */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Student XP Badge */}
            <button
              onClick={() => onTabChange('profile')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold"
              title={isAr ? 'نقاط الخبرة XP' : 'Student XP Score'}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{score} XP</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => {
                stopSpeech();
                onLanguageChange(isAr ? 'en' : 'ar');
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-slate-700 dark:border-slate-700 bg-slate-900/60 dark:bg-slate-900/60 text-cyan-400 hover:bg-slate-800 transition-colors"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'English' : 'عربي'}</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg border border-slate-700 dark:border-slate-700 bg-slate-900/60 dark:bg-slate-900/60 text-slate-300 hover:text-cyan-400 transition-colors"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Stop Voice Audio Button */}
            <button
              onClick={stopSpeech}
              className="p-2 rounded-lg border border-slate-700 dark:border-slate-700 bg-slate-900/60 dark:bg-slate-900/60 text-slate-400 hover:text-rose-400 transition-colors"
              title={isAr ? 'إيقاف الصوت الصوتي' : 'Stop voice narration'}
              aria-label="Stop Voice Audio"
            >
              <VolumeX className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => {
            const active = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onTabChange(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left rtl:text-right px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  active
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{isAr ? link.labelAr : link.labelEn}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Logo Modal Dialog */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-left rtl:text-right">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-100">
                {isAr ? 'شعار المدرسة المصرية اليابانية' : 'School Logo Settings'}
              </h3>
              <button
                onClick={() => setShowLogoModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center p-4 bg-white rounded-xl mb-4">
              <img
                src={schoolLogo}
                alt="EJS Logo"
                className="h-24 object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 mb-4">
              {isAr
                ? 'هذا هو الشعار الرسمي المعتمد للمدارس المصرية اليابانية (فرع السلام 2). يمكنك رفع صورة بديلة أو استعادة الشعار الأصلي في أي وقت.'
                : 'This is the verified official Egyptian Japanese Schools logo (El Salam 2 Branch). You can upload a custom branch badge or reset to default.'}
            </p>

            <div className="flex items-center gap-3">
              <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold transition-colors">
                <Upload className="w-4 h-4" />
                <span>{isAr ? 'رفع شعار جديد' : 'Upload Logo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    onLogoUpload(e);
                    setShowLogoModal(false);
                  }}
                  className="hidden"
                />
              </label>

              <button
                onClick={() => {
                  onResetLogo();
                  setShowLogoModal(false);
                }}
                className="px-4 py-2.5 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition-colors"
              >
                {isAr ? 'استعادة الأصلي' : 'Reset to Official'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
