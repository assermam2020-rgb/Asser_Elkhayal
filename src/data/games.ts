export interface ScientificInstrument {
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  descriptionEn: string;
  descriptionAr: string;
  primaryUseEn: string;
  primaryUseAr: string;
}

export const SCIENTIFIC_INSTRUMENTS: ScientificInstrument[] = [
  {
    id: 'microscope',
    nameEn: 'Compound Microscope',
    nameAr: 'المجهر الضوئي المركب',
    category: 'Biology / Optics',
    descriptionEn: 'An optical instrument using multi-lens systems to magnify microscopic organisms and cellular tissue structures.',
    descriptionAr: 'أداة بصرية تعتمد على منظومة عدسات لتكبير الكائنات الدقيقة وقطاعات الأنسجة الخلوية.',
    primaryUseEn: 'Magnifying cells and microscopic specimens up to 1000x',
    primaryUseAr: 'تكبير الخلايا والعينات المجهرية حتى 1000 مرة'
  },
  {
    id: 'beaker',
    nameEn: 'Laboratory Beaker',
    nameAr: 'الكأس الزجاجي (البيكر)',
    category: 'Chemistry Glassware',
    descriptionEn: 'A cylindrical glass container with a flat bottom and pouring spout used for stirring, heating, and holding liquids.',
    descriptionAr: 'وعاء زجاجي أسطواني بقاع مسطح وفوهة صب، يُستخدم لخلط وتسخين وحفظ السوائل.',
    primaryUseEn: 'Mixing and heating chemical solutions',
    primaryUseAr: 'خلط وتسخين المحاليل الكيميائية'
  },
  {
    id: 'graduated-cylinder',
    nameEn: 'Graduated Cylinder',
    nameAr: 'المخبار المدرج',
    category: 'Chemistry Volumetrics',
    descriptionEn: 'A tall narrow cylinder with precise calibration markings along its height to measure liquid volumes accurately.',
    descriptionAr: 'أسطوانة زجاجية طويلة وضيقة عليها تدريج دقيق لقياس حجوم السوائل بدقة عالية.',
    primaryUseEn: 'Accurate measurement of liquid volumes by reading the meniscus',
    primaryUseAr: 'قياس حجوم السوائل بدقة عبر قراءة أسفل التقعر السطحي'
  },
  {
    id: 'bunsen-burner',
    nameEn: 'Bunsen Burner',
    nameAr: 'موقد بنسن',
    category: 'Heating & Combustion',
    descriptionEn: 'A gas burner invented by Robert Bunsen that mixes fuel gas with air to produce a clean, hot, soot-free flame.',
    descriptionAr: 'موقد غاز يخلط الغاز بالهواء لإنتاج لهب أزرق نظيف وشديد الحرارة وخالٍ من السخام.',
    primaryUseEn: 'Controlled heating, sterilization, and combustion in chemistry',
    primaryUseAr: 'التسخين المحكوم والتعقيم وإجراء تفاعلات الاحتراق'
  },
  {
    id: 'ammeter',
    nameEn: 'Digital Ammeter',
    nameAr: 'الأميتر الرقمي',
    category: 'Physics Electronics',
    descriptionEn: 'An electrical measuring instrument connected in series with a circuit to quantify electric current in Amperes.',
    descriptionAr: 'جهاز قياس كهربائي يوصل على التوالي في الدائرة لقياس شدة التيار بالأمبير.',
    primaryUseEn: 'Measuring electrical current flow (Amperes)',
    primaryUseAr: 'قياس شدة التيار الكهربائي المار في الأسلاك'
  },
  {
    id: 'voltmeter',
    nameEn: 'Digital Voltmeter',
    nameAr: 'الفولتميتر الرقمي',
    category: 'Physics Electronics',
    descriptionEn: 'An instrument connected in parallel across components to measure electrical potential difference in Volts.',
    descriptionAr: 'جهاز قياس كهربائي يوصل على التوازي بين طرفي المكونات لقياس فرق الجهد بالفولت.',
    primaryUseEn: 'Measuring potential difference (Voltage)',
    primaryUseAr: 'قياس فرق الجهد الكهربائي بين نقطتين في الدائرة'
  },
  {
    id: 'telescope',
    nameEn: 'Astronomical Telescope',
    nameAr: 'التلسكوب الفلكي',
    category: 'Astronomy / Optics',
    descriptionEn: 'An optical device collecting electromagnetic radiation to form magnified images of distant celestial bodies.',
    descriptionAr: 'جهاز بصري يجمع الضوء والإشعاع الكهرومغناطيسي لرصد الأجرام السماوية البعيدة كالكواكب والنجوم.',
    primaryUseEn: 'Observing moons, planets, stars, and distant galaxies',
    primaryUseAr: 'رصد أقمار الكواكب والنجوم والمجرات البعيدة'
  },
  {
    id: 'burette',
    nameEn: 'Titration Burette',
    nameAr: 'السحاحة المخبرية',
    category: 'Analytical Chemistry',
    descriptionEn: 'A graduated glass tube with a stopcock at the bottom used for quantitative drop-by-drop titration delivery.',
    descriptionAr: 'أنبوب زجاجي مدرج مزود بصنبور تحكم دقيق في الأسفل لتنقيط المحاليل قطرة بقطرة في المعايرة.',
    primaryUseEn: 'Dispensing precise variable liquid volumes during acid-base titration',
    primaryUseAr: 'إضافة حجوم دقيقة جداً من المحاليل أثناء تفاعلات المعايرة'
  }
];

export interface TrueFalseQuestion {
  questionEn: string;
  questionAr: string;
  isTrue: boolean;
  explanationEn: string;
  explanationAr: string;
  subject: string;
}

export const TRUE_FALSE_BANK: TrueFalseQuestion[] = [
  {
    questionEn: 'Sound travels faster through water and steel than through air.',
    questionAr: 'ينتقل الصوت في الماء والفولاذ أسرع من انتقاله في الهواء الجوي.',
    isTrue: true,
    explanationEn: 'Sound is a mechanical wave that travels faster in denser media with closer molecules (approx 1,500 m/s in water vs 343 m/s in air).',
    explanationAr: 'الصوت موجة ميكانيكية تنتقل أسرع في الأوساط الأكثر كثافة وترابطاً كالسوائل والمواد الصلبة (نحو 1500 م/ث بالماء مقارنة بـ 343 م/ث بالهواء).',
    subject: 'Physics'
  },
  {
    questionEn: 'All atoms of the same chemical element have the exact same number of neutrons.',
    questionAr: 'جميع ذرات العنصر الكيميائي الواحد تحتوي دائماً على نفس العدد من النيوترونات بالضبط.',
    isTrue: false,
    explanationEn: 'Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons (e.g. Carbon-12 and Carbon-14).',
    explanationAr: 'النظائر هي ذرات لنفس العنصر تمتلك نفس عدد البروتونات ولكنها تختلف في عدد النيوترونات (مثل كربون-12 وكربون-14).',
    subject: 'Chemistry'
  },
  {
    questionEn: 'Plant cells carry out photosynthesis, but they also perform cellular respiration.',
    questionAr: 'الخلايا النباتية تقوم بعملية البناء الضوئي، ولكنها تقوم أيضاً بالتنفس الخلوي في نفس الوقت.',
    isTrue: true,
    explanationEn: 'Plants photosynthesize in chloroplasts during daylight, and continuously break down glucose in mitochondria to produce ATP energy for growth.',
    explanationAr: 'النباتات تصنع الغذاء بالبلاستيدات نهاراً، وتتنفس باستمرار عبر الميتوكوندريا لتكسير الجلوكوز وإنتاج طاقة ATP للنمو.',
    subject: 'Biology'
  },
  {
    questionEn: 'A light year is a measure of time equal to 365 terrestrial days.',
    questionAr: 'السنة الضوئية هي وحدة لقياس الزمن تعادل 365 يوماً أرضياً.',
    isTrue: false,
    explanationEn: 'A light-year is a unit of astronomical DISTANCE, representing the distance light travels in vacuum in one Julian year (~9.46 trillion km).',
    explanationAr: 'السنة الضوئية هي وحدة لقياس المسافة الفلكية الشاسعة وليست زمناً، وتعادل المسافة التي يقطعها الضوء في عام كامل (حوالي 9.46 تريليون كم).',
    subject: 'Astronomy'
  },
  {
    questionEn: 'Pure water has a neutral pH of 7 at 25 degrees Celsius.',
    questionAr: 'الماء النقي تماماً يمتلك درجة حموضة متعادلة تساوي 7 عند 25 درجة مئوية.',
    isTrue: true,
    explanationEn: 'In pure water, concentrations of hydrogen ions [H⁺] and hydroxide ions [OH⁻] are balanced at 10⁻⁷ mol/L, giving pH = 7.',
    explanationAr: 'في الماء النقي يتساوى تركيز أيونات الهيدروجين مع الهيدروكسيد تماماً مما يعطي قيمة تعادل pH = 7.',
    subject: 'Chemistry'
  },
  {
    questionEn: 'The mass of a pendulum bob directly changes its period of oscillation.',
    questionAr: 'كتلة الثقل المعلق في البندول تؤثر مباشرة في تغيير زمن دورة تأرجحه.',
    isTrue: false,
    explanationEn: 'The period of a simple pendulum depends only on the length of the string and gravity (T = 2π√(L/g)), completely independent of mass.',
    explanationAr: 'الزمن الدوري للبندول يعتمد فقط على طول الخيط وقوة الجاذبية (T = 2π√(L/g)) ولا يعتمد إطلاقاً على كتلة الثقل.',
    subject: 'Physics'
  },
  {
    questionEn: 'Humans have 23 pairs of chromosomes in the nucleus of their somatic cells.',
    questionAr: 'يحتوي جسم الإنسان الطبيعي على 23 زوجاً من الكروموسومات في نواة كل خلية جسدية.',
    isTrue: true,
    explanationEn: 'Human body cells are diploid with 46 chromosomes organized into 23 homologous pairs.',
    explanationAr: 'تحتوي الخلايا الجسدية على 46 كروموسوماً تنتظم في صورة 23 زوجاً متماثلاً.',
    subject: 'Biology'
  },
  {
    questionEn: 'Diamonds and graphite are made of the exact same chemical element (Carbon).',
    questionAr: 'الألماس الفاخر وجرافيت أقلام الرصاص يتكونان من نفس العنصر الكيميائي تماماً (الكربون).',
    isTrue: true,
    explanationEn: 'Both are allotropes of pure carbon; their immense differences in hardness and appearance result entirely from atomic bonding geometry.',
    explanationAr: 'كلاهما صورتان تآصليتان لعنصر الكربون النقي؛ ويكمن الاختلاف الهائل بينهما في الترتيب الهندسي للروابط بين ذرات الكربون.',
    subject: 'Chemistry'
  }
];

export interface ChemicalPuzzle {
  id: string;
  unbalancedEn: string;
  unbalancedAr: string;
  reactants: { formula: string; defaultCoeff: number; targetCoeff: number }[];
  products: { formula: string; defaultCoeff: number; targetCoeff: number }[];
  descriptionEn: string;
  descriptionAr: string;
}

export const CHEMICAL_PUZZLES: ChemicalPuzzle[] = [
  {
    id: 'water-formation',
    unbalancedEn: '_ H₂ + _ O₂ → _ H₂O',
    unbalancedAr: '_ H₂ + _ O₂ → _ H₂O (تكوين الماء)',
    reactants: [
      { formula: 'H₂', defaultCoeff: 1, targetCoeff: 2 },
      { formula: 'O₂', defaultCoeff: 1, targetCoeff: 1 },
    ],
    products: [
      { formula: 'H₂O', defaultCoeff: 1, targetCoeff: 2 },
    ],
    descriptionEn: 'Balance the formation of water from hydrogen gas and oxygen gas.',
    descriptionAr: 'وازن معادلة تكوين الماء من غازي الهيدروجين والأكسجين.'
  },
  {
    id: 'ammonia-synthesis',
    unbalancedEn: '_ N₂ + _ H₂ → _ NH₃',
    unbalancedAr: '_ N₂ + _ H₂ → _ NH₃ (تخليق الأمونيا)',
    reactants: [
      { formula: 'N₂', defaultCoeff: 1, targetCoeff: 1 },
      { formula: 'H₂', defaultCoeff: 1, targetCoeff: 3 },
    ],
    products: [
      { formula: 'NH₃', defaultCoeff: 1, targetCoeff: 2 },
    ],
    descriptionEn: 'Balance the Haber-Bosch industrial synthesis of ammonia fertilizer.',
    descriptionAr: 'وازن معادلة هابر-بوش لصناعة سماد غاز النشادر (الأمونيا).'
  },
  {
    id: 'methane-combustion',
    unbalancedEn: '_ CH₄ + _ O₂ → _ CO₂ + _ H₂O',
    unbalancedAr: '_ CH₄ + _ O₂ → _ CO₂ + _ H₂O (احتراق الميثان)',
    reactants: [
      { formula: 'CH₄', defaultCoeff: 1, targetCoeff: 1 },
      { formula: 'O₂', defaultCoeff: 1, targetCoeff: 2 },
    ],
    products: [
      { formula: 'CO₂', defaultCoeff: 1, targetCoeff: 1 },
      { formula: 'H₂O', defaultCoeff: 1, targetCoeff: 2 },
    ],
    descriptionEn: 'Balance the clean combustion of natural gas (methane).',
    descriptionAr: 'وازن معادلة الاحتراق الكامل للغاز الطبيعي (الميثان).'
  }
];

export interface BadgeDefinition {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  icon: string;
}

export const BADGES_LIST: BadgeDefinition[] = [
  { id: 'first_element', nameEn: 'Element Pioneer', nameAr: 'رائد العناصر', descEn: 'Explored elements in the interactive periodic table', descAr: 'استكشف عناصر الجدول الدوري التفاعلي', icon: 'Atom' },
  { id: 'atom_builder', nameEn: 'Quantum Architect', nameAr: 'مهندس الذرات الكمي', descEn: 'Built a stable atom in the Atomic Structure Lab', descAr: 'بنى ذرة مستقرة في مختبر التركيب الذري', icon: 'Layers' },
  { id: 'virtual_chemist', nameEn: 'Virtual Chemist', nameAr: 'كيميائي المستقبل', descEn: 'Completed a virtual chemistry experiment simulation', descAr: 'أكمل محاكاة تجربة كيميائية بنجاح', icon: 'FlaskConical' },
  { id: 'physics_wizard', nameEn: 'Physics Master', nameAr: 'خبير الفيزياء', descEn: 'Mastered circuits, pendulum, or sound waves', descAr: 'أتقن تجارب الدوائر والبندول والموجات الصوتية', icon: 'Zap' },
  { id: 'bio_explorer', nameEn: 'Cell Biologist', nameAr: 'عالم الأحياء الخلوي', descEn: 'Investigated cell structures or DNA helix', descAr: 'فحص تراكيب الخلية ولولب الـ DNA', icon: 'Dna' },
  { id: 'home_scientist', nameEn: 'Kitchen Scientist', nameAr: 'عالم العلوم المنزلي', descEn: 'Saved an observation in the Science Journal', descAr: 'سجل تجربة وملاحظة علمية في دفتر اليوميات', icon: 'BookOpen' },
  { id: 'quiz_champion', nameEn: 'Science Champion', nameAr: 'بطل مسابقات العلوم', descEn: 'Achieved high scores in science trivia challenges', descAr: 'حقق درجات فائقة في تحديات العلوم ومسابقات الذكاء', icon: 'Trophy' },
];
