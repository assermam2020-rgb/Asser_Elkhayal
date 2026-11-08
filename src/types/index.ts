export type Language = 'en' | 'ar';
export type ThemeMode = 'dark' | 'light';

export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'halogen'
  | 'lanthanide'
  | 'actinide';

export interface ChemicalElement {
  number: number;
  symbol: string;
  nameEn: string;
  nameAr: string;
  category: ElementCategory;
  atomicMass: number;
  period: number;
  group: number;
  electronConfiguration: string;
  summaryEn: string;
  summaryAr: string;
  usesEn: string[];
  usesAr: string[];
  factsEn: string[];
  factsAr: string[];
  state: 'solid' | 'liquid' | 'gas';
  protons: number;
  electrons: number;
  neutrons: number;
  discoveryYear?: string;
  shells: number[];
}

export type LabCategory = 'chemistry' | 'physics' | 'biology';

export interface Experiment {
  id: string;
  category: LabCategory;
  titleEn: string;
  titleAr: string;
  objectiveEn: string;
  objectiveAr: string;
  materialsEn: string[];
  materialsAr: string[];
  safetyEn: string[];
  safetyAr: string[];
  procedureEn: string[];
  procedureAr: string[];
  explanationEn: string;
  explanationAr: string;
  observationsEn: string[];
  observationsAr: string[];
  conclusionEn: string;
  conclusionAr: string;
  simType: string;
  quiz: {
    questionEn: string;
    questionAr: string;
    optionsEn: string[];
    optionsAr: string[];
    correctIndex: number;
    explanationEn: string;
    explanationAr: string;
  }[];
}

export interface HomeActivity {
  id: string;
  titleEn: string;
  titleAr: string;
  category: string;
  estimatedTime: string;
  materialsEn: string[];
  materialsAr: string[];
  safetyEn: string;
  safetyAr: string;
  stepsEn: string[];
  stepsAr: string[];
  scienceEn: string;
  scienceAr: string;
  badgeName: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  notes: string;
  experimentName: string;
  imageDataUrl?: string;
}

export interface StudentProgress {
  name: string;
  grade: string;
  schoolBranch: string;
  score: number;
  completedExperiments: string[];
  unlockedBadges: string[];
  journal: JournalEntry[];
}
