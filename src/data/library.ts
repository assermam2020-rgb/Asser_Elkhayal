export interface TrustedSource {
  titleEn: string;
  titleAr: string;
  url: string;
  organization: string;
  category: 'Space & Astronomy' | 'Physics & Chemistry' | 'Simulations' | 'General Science & Encyclopedia';
  descriptionEn: string;
  descriptionAr: string;
}

export const TRUSTED_SOURCES: TrustedSource[] = [
  {
    titleEn: 'NASA (National Aeronautics and Space Administration)',
    titleAr: 'وكالة الفضاء الأمريكية (ناسا)',
    url: 'https://www.nasa.gov/',
    organization: 'NASA',
    category: 'Space & Astronomy',
    descriptionEn: 'The world leader in civilian aerospace exploration, Earth science telemetry, astrophysical observatories, and Mars rover missions.',
    descriptionAr: 'الجهة العالمية الرائدة في استكشاف الفضاء الخارجي، وعلوم الأرض، ومراصد تلسكوب هابل وجيمس ويب، ورحلات رواد الفضاء.'
  },
  {
    titleEn: 'NASA Space Place',
    titleAr: 'موقع ناسا سبيس بليس للناشئين',
    url: 'https://spaceplace.nasa.gov/',
    organization: 'NASA Education',
    category: 'Space & Astronomy',
    descriptionEn: 'Engaging, child-friendly space science portal explaining stars, planets, gravitational waves, and weather for young learners.',
    descriptionAr: 'بوابة تعليمية تفاعلية مخصصة للطلاب والناشئين تشرح كواكب المجموعة الشمسية والطقس الفضائي والنجوم بأسلوب مبسط.'
  },
  {
    titleEn: 'PhET Interactive Simulations',
    titleAr: 'محاكاة PhET التفاعلية للعلوم والرياضيات',
    url: 'https://phet.colorado.edu/',
    organization: 'University of Colorado Boulder',
    category: 'Simulations',
    descriptionEn: 'Nobel-laureate-founded interactive STEM simulation laboratory empowering students to explore physics, chemistry, and biology through inquiry.',
    descriptionAr: 'مشروع عالمي أسسه العالم الحائز على جائزة نوبل كارل ويمان بجامعة كولورادو، يوفر برمجيات محاكاة تفاعلية للتجارب المخبرية.'
  },
  {
    titleEn: 'Royal Society of Chemistry',
    titleAr: 'الجمعية الملكية البريطانية للكيمياء',
    url: 'https://www.rsc.org/',
    organization: 'Royal Society of Chemistry (UK)',
    category: 'Physics & Chemistry',
    descriptionEn: 'Historic professional chemistry association advancing chemical sciences, standard periodic table data, and educational chemistry outreach.',
    descriptionAr: 'أعرق جمعية كيميائية في العالم، رائدة في نشر الأبحاث وتوفير قواعد بيانات تفاعلية دقيقة لخواص العناصر والجدول الدوري.'
  },
  {
    titleEn: 'IUPAC (International Union of Pure and Applied Chemistry)',
    titleAr: 'الاتحاد الدولي للكيمياء البحتة والتطبيقية (أيوباك)',
    url: 'https://iupac.org/',
    organization: 'IUPAC',
    category: 'Physics & Chemistry',
    descriptionEn: 'The universally recognized world authority on chemical nomenclature, terminology, standardized atomic weights, and periodic table element verification.',
    descriptionAr: 'المرجعية العالمية العليا الرسمية المعتمدة لتسمية العناصر والمركبات الكيميائية وتحديد الكتل الذرية القياسية.'
  },
  {
    titleEn: 'Khan Academy Science',
    titleAr: 'أكاديمية خان - مسار العلوم والتكنولوجيا',
    url: 'https://www.khanacademy.org/science',
    organization: 'Khan Academy',
    category: 'General Science & Encyclopedia',
    descriptionEn: 'Free, world-class educational courses, mastery exercises, and guided video lectures covering biology, chemistry, and physics from primary to AP level.',
    descriptionAr: 'منصة تعليمية عالمية مجانية تقدم شروحات وتدريبات تفاعلية متسلسلة في الكيمياء والفيزياء والأحياء لكافة المراحل الدراسية.'
  },
  {
    titleEn: 'PubChem – National Library of Medicine',
    titleAr: 'قاعدة بيانات باب كيم للمركبات الكيميائية',
    url: 'https://pubchem.ncbi.nlm.nih.gov/',
    organization: 'National Institutes of Health (NIH)',
    category: 'Physics & Chemistry',
    descriptionEn: 'The world’s largest open access database of chemical substances, molecular structures, safety data sheets, and biological bioassays.',
    descriptionAr: 'أضخم مكتبة مرجعية مفتوحة للتركيبات الجزيئية الكيميائية، والسلامة المخبرية، وخواص المركبات الدوائية والحيوية.'
  },
  {
    titleEn: 'Britannica Science',
    titleAr: 'موسوعة بريتانيكا العلمية الموثوقة',
    url: 'https://www.britannica.com/science',
    organization: 'Encyclopædia Britannica',
    category: 'General Science & Encyclopedia',
    descriptionEn: 'Peer-reviewed, fact-checked academic reference encyclopedia delivering scholarly articles on scientific discoveries, history, and natural phenomena.',
    descriptionAr: 'الموسوعة الأكاديمية العالمية الأشهر والأكثر موثوقية والمراجعة من قبل نخبة من العلماء في شتى فروع العلوم الطبيعية.'
  }
];

export interface ScienceGlossaryTerm {
  termEn: string;
  termAr: string;
  phonetic: string;
  definitionEn: string;
  definitionAr: string;
  field: 'Chemistry' | 'Physics' | 'Biology' | 'Astronomy';
}

export const SCIENCE_GLOSSARY: ScienceGlossaryTerm[] = [
  {
    termEn: 'Atom',
    termAr: 'الذرة',
    phonetic: 'AT-um',
    definitionEn: 'The basic unit of a chemical element consisting of a central nucleus of protons and neutrons, orbited by electrons.',
    definitionAr: 'أصغر وحدة بنائية للمادة تحتفظ بالخواص الكيميائية للعنصر، وتتكون من نواة مركزية وإلكترونات تدور حولها.',
    field: 'Physics'
  },
  {
    termEn: 'Photosynthesis',
    termAr: 'البناء الضوئي',
    phonetic: 'foh-toh-SIN-thuh-sis',
    definitionEn: 'The biological process by which green plants and algae convert light energy into chemical energy stored in glucose molecules.',
    definitionAr: 'العملية الحيوية التي تقوم بها النباتات الخضراء لتحويل طاقة ضوء الشمس إلى طاقة كيميائية مخزنة في سكر الجلوكوز.',
    field: 'Biology'
  },
  {
    termEn: 'Isotope',
    termAr: 'النظير المشع / النظائر',
    phonetic: 'EYE-suh-tohp',
    definitionEn: 'Forms of the same chemical element that have equal numbers of protons but different numbers of neutrons in their nuclei.',
    definitionAr: 'صور لذرات نفس العنصر الكيميائي لها نفس العدد الذري من البروتونات وتختلف في عدد النيوترونات والكتلة.',
    field: 'Chemistry'
  },
  {
    termEn: 'Snell’s Law',
    termAr: 'قانون سنيل للانكسار',
    phonetic: 'snels law',
    definitionEn: 'The physical law describing the relationship between angles of incidence and refraction when light passes between two media (n₁ sin θ₁ = n₂ sin θ₂).',
    definitionAr: 'القانون الفيزيائي الذي يصف العلاقة بين زاوية السقوط وزاوية الانكسار عند انتقال الضوء بين وسطين شفافين مختلفين.',
    field: 'Physics'
  },
  {
    termEn: 'Chloroplast',
    termAr: 'البلاستيدة الخضراء',
    phonetic: 'KLOR-uh-plast',
    definitionEn: 'A membrane-bound plant organelle containing chlorophyll pigments where solar energy is captured for photosynthetic food production.',
    definitionAr: 'عضية محاطة بغشاء مزدوج في الخلايا النباتية تحتوي على صبغة الكلوروفيل وتمتص أشعة الشمس لصنع الغذاء.',
    field: 'Biology'
  },
  {
    termEn: 'Electronegativity',
    termAr: 'الكهروسالبية',
    phonetic: 'ee-lek-troh-neg-uh-TIV-ih-tee',
    definitionEn: 'A chemical property that describes the tendency of an atom to attract shared bonding pairs of electrons towards itself.',
    definitionAr: 'قدرة الذرة في الجزيء على جذب إلكترونات الرابطة التساهمية المشتركة نحو نفسها.',
    field: 'Chemistry'
  },
  {
    termEn: 'Supernova',
    termAr: 'المستعر الأعظم (السوبرنوفا)',
    phonetic: 'soo-per-NOH-vuh',
    definitionEn: 'A colossal cataclysmic explosion occurring during the terminal evolutionary stage of a massive star, forging heavy elements.',
    definitionAr: 'انفجار نجمي هائل وعنيف يحدث في نهاية حياة النجوم العملاقة، يضيء المجرة وتتخلق فيه العناصر الكيميائية الثقيلة.',
    field: 'Astronomy'
  }
];
