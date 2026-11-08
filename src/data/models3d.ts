export interface Model3DItem {
  id: string;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  labels: {
    nameEn: string;
    nameAr: string;
    descEn: string;
    descAr: string;
  }[];
  funFactsEn: string[];
  funFactsAr: string[];
}

export const MODELS_3D_CATALOG: Model3DItem[] = [
  {
    id: 'atom',
    nameEn: 'Atomic Model (Bohr-Rutherford)',
    nameAr: 'النموذج الذري (بور ورذرفورد)',
    subtitleEn: 'Nucleus, Protons, Neutrons, and Electron Energy Shells',
    subtitleAr: 'النواة، البروتونات، النيوترونات، ومستويات طاقة الإلكترونات',
    descriptionEn: 'The quantum atom consists of a dense central nucleus composed of positively charged protons and neutral neutrons, surrounded by quantized orbital shells where negatively charged electrons circulate at relativistic velocities.',
    descriptionAr: 'تتكون الذرة من نواة مركزية فائقة الكثافة تحتوي على بروتونات موجبة ونيوترونات متعادلة، وتحيط بها مدارات مستويات الطاقة التي تدور فيها الإلكترونات السالبة بسرعات فائقة.',
    labels: [
      { nameEn: 'Atomic Nucleus', nameAr: 'النواة المركزية', descEn: 'Contains >99.9% of total atomic mass packed with protons and neutrons.', descAr: 'تحتوي على أكثر من 99.9% من كتلة الذرة مكدسة بالبروتونات والنيوترونات.' },
      { nameEn: 'Proton (p⁺)', nameAr: 'بروتون موجب (+)', descEn: 'Positive baryon determining the elemental identity and atomic number (Z).', descAr: 'جسيم أولي موجب يحدد هوية العنصر وعدده الذري.' },
      { nameEn: 'Neutron (n⁰)', nameAr: 'نيوترون متعادل', descEn: 'Neutral baryon stabilizing the nucleus via the strong nuclear force.', descAr: 'جسيم متعادل يربط مكونات النواة بالقوة النووية الشديدة.' },
      { nameEn: 'Electron Shells (e⁻)', nameAr: 'أغلفة الإلكترونات (-)', descEn: 'Quantized energy levels (K, L, M) where electrons orbit.', descAr: 'مستويات طاقة مكممة تدور فيها الإلكترونات حول النواة.' },
    ],
    funFactsEn: [
      'If an atom were the size of a huge sports stadium, the nucleus would be the size of a marble in the center!',
      'An atom is more than 99.9999999% empty space.'
    ],
    funFactsAr: [
      'لو كانت الذرة بحجم استاد كرة قدم ضخم، لكانت النواة بحجم حبة رخام صغيرة في المركز تماماً!',
      'أكثر من 99.9999999% من حجم الذرة فراغ حقيقي.'
    ]
  },
  {
    id: 'water-molecule',
    nameEn: 'Water Molecule (H₂O)',
    nameAr: 'جزيء الماء (H₂O)',
    subtitleEn: 'Bent Polar Covalent Molecule with 104.5° Bond Angle',
    subtitleAr: 'جزيء قطبي تساهمي منحنٍ بزاوية رابطة 104.5 درجة',
    descriptionEn: 'Water is composed of one central electronegative oxygen atom covalently bound to two hydrogen atoms. Due to lone pairs of electrons on oxygen, the molecule takes a bent V-shape with a 104.5° angle, creating strong molecular polarity.',
    descriptionAr: 'يتكون جزيء الماء من ذرة أكسجين مركزية مرتبطة تساهمياً بذرتي هيدروجين. وبسبب أزواج الإلكترونات الحرة، يتخذ الجزيء شكلاً منحنياً بزاوية 104.5 درجة، مما يمنحه قطبية فريدة تجعله سر الحياة وسائلاً مذيباً عاماً.',
    labels: [
      { nameEn: 'Oxygen Atom', nameAr: 'ذرة الأكسجين', descEn: 'Highly electronegative atom pulling electron density, forming partial negative pole (δ⁻).', descAr: 'ذرة ذات كهروسالبية عالية تجذب الإلكترونات وتكون قطباً سالباً جزئياً.' },
      { nameEn: 'Hydrogen Atoms', nameAr: 'ذرتا الهيدروجين', descEn: 'Single proton nuclei sharing electrons, forming partial positive poles (δ⁺).', descAr: 'تتشاركان الإلكترونات وتكونان قطبين موجبين جزئياً.' },
      { nameEn: '104.5° Bond Angle', nameAr: 'زاوية الرابطة 104.5°', descEn: 'Tetrahedral repulsion of lone pairs compresses the H-O-H angle to 104.5°.', descAr: 'تنافر أزواج الإلكترونات يضغط زاوية الروابط إلى 104.5 درجة بالضبط.' },
      { nameEn: 'Hydrogen Bonds', nameAr: 'الروابط الهيدروجينية', descEn: 'Intermolecular attractions responsible for water’s high boiling point and surface tension.', descAr: 'تجاذب كهربي يمنح الماء توتره السطحي العالي ودرجة غليانه المرتفعة.' },
    ],
    funFactsEn: [
      'Water is one of the only substances where the solid form (ice) floats on its liquid form!',
      'A single raindrop contains over 1.5 sextillion water molecules.'
    ],
    funFactsAr: [
      'الماء من المواد النادرة التي يطفو صلبها (الجليد) فوق سائلها لحماية الكائنات البحرية!',
      'قطرة المطر الواحدة تحتوي على أكثر من 1.5 سيكستيليون جزيء ماء.'
    ]
  },
  {
    id: 'dna-helix',
    nameEn: 'DNA Double Helix',
    nameAr: 'اللولب المزدوج للحمض النووي (DNA)',
    subtitleEn: 'Antiparallel Phosphate Backbone & Base Pairs (A-T, G-C)',
    subtitleAr: 'شريطان متعاكسان من السكر والفوسفات مع أزواج القواعد النيتروجينية',
    descriptionEn: 'Deoxyribonucleic acid carries the entire hereditary genetic blueprint of living organisms. It consists of two twisted antiparallel strands linked by hydrogen bonds between specific nitrogenous base pairs: Adenine with Thymine, and Guanine with Cytosine.',
    descriptionAr: 'يحمل الحمض النووي الريبوزي منقوص الأكسجين كافة المعلومات الوراثية لبناء الكائن الحي. يتألف من شريطين لولبيين متعاكسين يرتبطان بروابط هيدروجينية بين القواعد: الأدنين مع الثايمين، والسيتوسين مع الجوانين.',
    labels: [
      { nameEn: 'Sugar-Phosphate Backbone', nameAr: 'هيكل السكر والفوسفات', descEn: 'Deoxyribose sugars joined by phosphodiester bridges forming the outer structural helical rails.', descAr: 'سكر ريبوزي منقوص الأكسجين مرتبط بالفوسفات يشكل الحافتين الخارجيتين.' },
      { nameEn: 'Adenine - Thymine (A-T)', nameAr: 'زوج الأدنين والثايمين', descEn: 'Base pair joined by 2 hydrogen bonds.', descAr: 'زوج قواعد نيتروجينية يرتبط برابطتين هيدروجينيتين.' },
      { nameEn: 'Guanine - Cytosine (G-C)', nameAr: 'زوج الجوانين والسيتوسين', descEn: 'Base pair joined by 3 strong hydrogen bonds.', descAr: 'زوج قواعد نيتروجينية يرتبط بثلاث روابط هيدروجينية قوية.' },
      { nameEn: 'Major & Minor Grooves', nameAr: 'الأخاديد اللولبية', descEn: 'Unequal spacing allowing transcription factor proteins to access genetic code.', descAr: 'انحناءات تتيح للبروتينات والإنزيمات قراءة الشفرة الوراثية.' },
    ],
    funFactsEn: [
      'If you uncoiled all the DNA in a single human body, it would stretch from Earth to the Sun and back dozens of times!',
      'All humans share roughly 99.9% of their DNA sequence with each other.'
    ],
    funFactsAr: [
      'لو فككت خيوط الـ DNA الموجودة في خلايا جسم إنسان واحد لوصلت من الأرض للشمس وعادت عشرات المرات!',
      'يتشارك جميع البشر في أكثر من 99.9% من تسلسل حمضهم النووي.'
    ]
  },
  {
    id: 'animal-cell',
    nameEn: 'Animal Cell',
    nameAr: 'الخلية الحيوانية',
    subtitleEn: 'Eukaryotic Cell with Nucleus, Mitochondria, & Organelles',
    subtitleAr: 'خلية حقيقية النواة بغشاء مرن وميتوكوندريا وعضيات حيوية',
    descriptionEn: 'The fundamental structural and functional unit of animal tissues. Unlike plant cells, animal cells lack a rigid cell wall, featuring a fluid lipid bilayer membrane, a control nucleus, mitochondria for energy generation, and ribosomes for protein synthesis.',
    descriptionAr: 'الوحدة البنائية والوظيفية الأساسية لأنسجة الكائنات الحية الحيوانية. تتميز بغشاء بلازمي مرن يسمح لها باتخاذ أشكال متنوعة، وبنواة تتحكم بالعمليات، وميتوكوندريا لتوليد الطاقة الحيوية.',
    labels: [
      { nameEn: 'Nucleus & Nucleolus', nameAr: 'النواة والنوية', descEn: 'The cell command center safeguarding DNA chromosomes.', descAr: 'مركز قيادة الخلية الحافظ للكروموسومات والشفرة الوراثية.' },
      { nameEn: 'Mitochondria', nameAr: 'الميتوكوندريا', descEn: 'Cellular power plants generating ATP via aerobic respiration.', descAr: 'محطات توليد الطاقة الخلوية ATP بالتنفس الهوائي.' },
      { nameEn: 'Endoplasmic Reticulum', nameAr: 'الشبكة الإندوبلازمية', descEn: 'Membranous network synthesizing proteins and lipids.', descAr: 'شبكة قنوات لتصنيع ونقل البروتينات والدهون.' },
      { nameEn: 'Plasma Membrane', nameAr: 'الغشاء البلازمي', descEn: 'Selectively permeable lipid bilayer controlling substance entry and exit.', descAr: 'غشاء دهني ذو نفاذية اختيارية ينظم دخول وخروج المواد.' },
    ],
    funFactsEn: [
      'The human body contains over 30 trillion animal cells working together in perfect harmony.',
      'Red blood cells lose their nuclei as they mature so they can carry more oxygen.'
    ],
    funFactsAr: [
      'يحتوي جسم الإنسان البالغ على أكثر من 30 تريليون خلية تعمل بتناغم مذهل.',
      'خلايا الدم الحمراء تفقد أنويتها عند نضجها لتتسع لأكبر قدر من الهيموجلوبين والأكسجين.'
    ]
  },
  {
    id: 'plant-cell',
    nameEn: 'Plant Cell',
    nameAr: 'الخلية النباتية',
    subtitleEn: 'Rigid Cellulose Cell Wall, Chloroplasts, and Central Vacuole',
    subtitleAr: 'جدار خلوي سليلوزي، بلاستيدات خضراء، وفجوة عصارية مركزية',
    descriptionEn: 'Plant cells are distinguished by a rigid exterior wall made of cellulose fibers, green chloroplasts carrying chlorophyll to synthesize sugars from sunlight, and a massive central vacuole maintaining turgor pressure that keeps plants upright.',
    descriptionAr: 'تتميز الخلية النباتية بوجود جدار خلوي سليلوزي صلب يحميها ويدعم شكلها، وبلاستيدات خضراء تصنع الغذاء بالبناء الضوئي، وفجوة عصارية مركزية عملاقة تحفظ ضغط الامتلاء لتبقي النبات واقفاً.',
    labels: [
      { nameEn: 'Cell Wall (Cellulose)', nameAr: 'الجدار الخلوي السليلوزي', descEn: 'Rigid outer layer offering structural integrity and protection against osmotic pressure.', descAr: 'طبقة خارجية قوية تدعم النبات وتحميه من التمزق.' },
      { nameEn: 'Chloroplasts', nameAr: 'البلاستيدات الخضراء', descEn: 'Photosynthetic organelle packed with chlorophyll capturing solar energy.', descAr: 'عضيات البناء الضوئي المليئة بصبغة الكلوروفيل لصنع السكر.' },
      { nameEn: 'Central Vacuole', nameAr: 'الفجوة العصارية المركزية', descEn: 'Large fluid-filled reservoir maintaining cellular turgor and storing nutrients.', descAr: 'مستودع مائي ضخم يحفظ ضغط امتلاء الخلية ويخزن العصارة.' },
      { nameEn: 'Cytoplasm & Cytosol', nameAr: 'السيتوبلازم', descEn: 'Gel-like matrix where metabolic cellular reactions occur.', descAr: 'السائل الهلامي الذي تسبح فيه العضيات وتحدث فيه التفاعلات.' },
    ],
    funFactsEn: [
      'When you forget to water a houseplant, its central vacuoles lose water pressure, causing the leaves to wilt!',
      'Cellulose in plant cell walls is the most abundant organic polymer on planet Earth.'
    ],
    funFactsAr: [
      'عندما يذبل النبات عند نسيان سقايته، يكون السبب فقدان الفجوة العصارية لضغط الماء!',
      'السليلوز المكون لجدار الخلية النباتية هو أكثر المركبات العضوية وفرة على سطح كوكب الأرض.'
    ]
  },
  {
    id: 'human-heart',
    nameEn: 'Human Heart',
    nameAr: 'القلب البشري',
    subtitleEn: 'Four-Chambered Muscular Pump & Double Circulation',
    subtitleAr: 'مضخة عضلية رباعية الحجرات ودورة دموية مزدوجة',
    descriptionEn: 'The heart is a hollow muscular organ about the size of a fist. It pumps blood through two synchronized circulatory loops: the pulmonary circuit to the lungs for oxygenation, and the systemic circuit to supply the entire body with oxygen and nutrients.',
    descriptionAr: 'القلب عضو عضلي مجوف بحجم قبضة اليد ينبض دون توقف طوال العمر. يضخ الدم عبر دورتين: الدورة الدموية الصغرى إلى الرئتين للتزود بالأكسجين، والدورة الدموية الكبرى لتغذية كافة أنسجة وأعضاء الجسم.',
    labels: [
      { nameEn: 'Right Atrium & Ventricle', nameAr: 'الأذين والبطين الأيمن', descEn: 'Receives deoxygenated blood from the body and pumps it to the lungs.', descAr: 'يستقبلان الدم غير المؤكسج من الجسم ويضخّانه للرئتين.' },
      { nameEn: 'Left Atrium & Ventricle', nameAr: 'الأذين والبطين الأيسر', descEn: 'Receives freshly oxygenated blood and pumps it into the aorta with high pressure.', descAr: 'يستقبلان الدم المؤكسج النقي ويضخّانه بقوة عبر الشريان الأورطي.' },
      { nameEn: 'Aorta & Vena Cava', nameAr: 'الأورطي والوريدان الأجوفان', descEn: 'The largest systemic arterial artery and venous return vessels in the body.', descAr: 'أكبر شريان وأكبر أوردة ناقلة للدم في الدورة الدموية.' },
      { nameEn: 'Heart Valves', nameAr: 'صمامات القلب', descEn: 'One-way flap valves (Tricuspid, Mitral, Aortic) preventing backflow.', descAr: 'صمامات تسمح بمرور الدم في اتجاه واحد فقط وتمنع ارتداده للخلف.' },
    ],
    funFactsEn: [
      'Your heart beats about 100,000 times a day, pumping around 7,500 liters of blood!',
      'A woman’s heart typically beats slightly faster than a man’s.'
    ],
    funFactsAr: [
      'ينبض قلبك حوالي 100,000 مرة في اليوم ويضخ ما يقارب 7,500 لتر من الدم يومياً!',
      'ينبض قلب المرأة بمعدل أسرع قليلاً من قلب الرجل في المتوسط.'
    ]
  },
  {
    id: 'human-brain',
    nameEn: 'Human Brain',
    nameAr: 'الدماغ البشري',
    subtitleEn: 'Cerebrum, Cerebellum, Brainstem, & Neural Networks',
    subtitleAr: 'المخ، المخيخ، جذع الدماغ، والشبكات العصبية العبقرية',
    descriptionEn: 'The command center of the human nervous system. Comprising roughly 86 billion neurons interconnected by trillions of synaptic junctions, the brain governs memory, perception, language, voluntary motion, and autonomic bodily homeostasis.',
    descriptionAr: 'مركز القيادة الأعلى في الجهاز العصبي البشري. يحتوي على قرابة 86 مليار خلية عصبية مترابطة بتريليونات التشابكات، ويتحكم في التفكير والذاكرة والحواس وحركات الجسم والوظائف الحيوية.',
    labels: [
      { nameEn: 'Cerebrum (Cerebral Cortex)', nameAr: 'المخ (القشرة المخية)', descEn: 'Responsible for conscious thought, reasoning, sensory processing, and voluntary action.', descAr: 'المسؤول عن التفكير الواعي والذاكرة واللغات والذكاء.' },
      { nameEn: 'Cerebellum', nameAr: 'المخيخ', descEn: 'Coordinates fine motor balance, posture, precision movements, and muscle memory.', descAr: 'ينسق التوازن العضلي والدقة الحركية وركوب الدراجات.' },
      { nameEn: 'Brainstem', nameAr: 'جذع الدماغ', descEn: 'Controls autonomic life-support functions: heart rate, breathing, and blood pressure.', descAr: 'يتحكم في العمليات اللاإرادية كنبض القلب والتنفس والبلع.' },
      { nameEn: 'Corpus Callosum', nameAr: 'الجسم الثفني', descEn: 'Dense nerve fiber bridge facilitating communication between left and right hemispheres.', descAr: 'جسر من ملايين الألياف العصبية يربط نصفي الكرة المخية معاً.' },
    ],
    funFactsEn: [
      'Although weighing only ~2% of your body mass, your brain consumes 20% of your total oxygen and glucose energy!',
      'Information travels along your nerve fibers at speeds up to 430 km/h.'
    ],
    funFactsAr: [
      'رغم أن وزن الدماغ يشكل 2% فقط من وزن الجسم، إلا أنه يستهلك 20% من طاقة وأكسجين الجسم بأكمله!',
      'تنتقل الإشارات العصبية في مسارات الدماغ بسرعة مذهلة تصل إلى 430 كم/ساعة.'
    ]
  },
  {
    id: 'solar-system',
    nameEn: 'Solar System',
    nameAr: 'المجموعة الشمسية',
    subtitleEn: 'The Sun, Terrestrial Planets, Gas Giants, & Planetary Orbits',
    subtitleAr: 'الشمس، الكواكب الصخرية، العمالقة الغازية، والمدارات الفلكية',
    descriptionEn: 'Our gravitationally bound planetary system formed 4.6 billion years ago. At its center shines the G-type main-sequence Sun, orbited by four inner rocky terrestrial planets (Mercury, Venus, Earth, Mars) and four outer giant planets (Jupiter, Saturn, Uranus, Neptune).',
    descriptionAr: 'نظامنا الكوكبي الذي تشكل قبل 4.6 مليار سنة في مجرة درب التبانة. يتوسطه نجم الشمس المتوهج، وتدور حوله أربعة كواكب صخرية داخلية (عطارد، الزهرة، الأرض، المريخ)، وأربعة كواكب عملاقة خارجية (المشتري، زحل، أورانوس، نبتون).',
    labels: [
      { nameEn: 'The Sun', nameAr: 'الشمس', descEn: 'Yellow dwarf star containing 99.86% of the mass of the entire solar system.', descAr: 'نجم قزم أصفر يحتوي على 99.86% من كتلة المجموعة الشمسية بأكملها.' },
      { nameEn: 'Terrestrial Planets', nameAr: 'الكواكب الصخرية', descEn: 'Dense, rocky worlds with solid surfaces: Mercury, Venus, Earth, Mars.', descAr: 'كواكب ذات أسطح صلبة وكثيفة: عطارد، الزهرة، الأرض، المريخ.' },
      { nameEn: 'Gas & Ice Giants', nameAr: 'العمالقة الغازية والجليدية', descEn: 'Massive hydrogen/helium atmospheres: Jupiter, Saturn, Uranus, Neptune.', descAr: 'كواكب ضخمة ذات غلاف جوي عملاق: المشتري، زحل، أورانوس، نبتون.' },
      { nameEn: 'Planetary Orbits', nameAr: 'المدارات الإهليلجية', descEn: 'Elliptical paths traced by planets governed by Kepler’s laws and gravity.', descAr: 'مسارات بيضاوية تتبع قوانين كبلر في حركة الأجرام السماوية.' },
    ],
    funFactsEn: [
      'One million Earths could fit inside the Sun!',
      'Jupiter’s Great Red Spot is a colossal storm larger than the entire planet Earth that has raged for centuries.'
    ],
    funFactsAr: [
      'يمكن لقرص الشمس أن يتسع لأكثر من مليون كوكب أرض بداخله!',
      'البقعة الحمراء العظيمة على كوكب المشتري هي عاصفة إعصارية عملاقة أكبر من كوكب الأرض وتدور منذ قرون.'
    ]
  },
  {
    id: 'earth-layers',
    nameEn: 'Earth Interior Layers',
    nameAr: 'طبقات باطن كوكب الأرض',
    subtitleEn: 'Crust, Mantle, Liquid Outer Core, and Solid Inner Core',
    subtitleAr: 'القشرة الأرضية، الوشاح، اللب الخارجي المنصهر، واللب الداخلي الصلب',
    descriptionEn: 'Earth exhibits a differentiated internal spherical shell structure: a thin brittle outer crust, a thick silicate convective mantle, a molten liquid iron-nickel outer core that generates Earth’s magnetic field, and a solid iron inner core hotter than the surface of the Sun.',
    descriptionAr: 'يتكون كوكب الأرض من طبقات متحدة المركز: قشرة خارجية صلبة رقيقة، وشاح علوي وسفلي من الصخور الساخنة المتحركة، لب خارجي سائل منصهر من الحديد والنيكل يولد درع المجال المغناطيسي للأرض، ولب داخلي صلب فائق الحرارة.',
    labels: [
      { nameEn: 'Crust (Lithosphere)', nameAr: 'القشرة الأرضية (الغلاف الصخري)', descEn: 'Thin rigid outer layer (5-70 km thick) where oceans and continents sit.', descAr: 'الطبقة الصلبة الرقيقة التي نعيش عليها وتشكل القارات وقيعان المحيطات.' },
      { nameEn: 'Mantle (Asthenosphere)', nameAr: 'الوشاح (المانتل)', descEn: 'Vast 2,900 km thick silicate layer undergoing slow convective heat currents.', descAr: 'طبقة صخرية هائلة سمكها 2900 كم تتحرك فيها تيارات الحمل الحراري.' },
      { nameEn: 'Outer Core (Liquid)', nameAr: 'اللب الخارجي (سائل)', descEn: 'Molten iron-nickel sea whose swirling convective motion powers the geodynamo.', descAr: 'محيط منصهر من الحديد والنيكل يدور ليولد المجال المغناطيسي الحامي للأرض.' },
      { nameEn: 'Inner Core (Solid)', nameAr: 'اللب الداخلي (صلب)', descEn: 'Solid metallic iron sphere subjected to intense pressure (approx 5,400°C).', descAr: 'كرة صلبة من الحديد والنيكل حرارتها تفوق 5000 درجة تحت ضغط هائل.' },
    ],
    funFactsEn: [
      'Earth’s inner core is almost as hot as the surface of the Sun (approx 5,400°C / 9,800°F)!',
      'The molten outer core creates Earth’s magnetic shield that deflects deadly cosmic rays and solar flares.'
    ],
    funFactsAr: [
      'حرارة لب الأرض الداخلي تقارب حرارة سطح الشمس (حوالي 5,400 درجة مئوية)!',
      'دوران اللب الخارجي المنصهر هو الذي ينشئ الدرع المغناطيسي الذي يحمي الحياة من الإشعاعات الكونية القاتلة.'
    ]
  },
  {
    id: 'volcano',
    nameEn: 'Volcano Cross-Section',
    nameAr: 'قطاع مجسم البركان',
    subtitleEn: 'Magma Chamber, Conduit Vent, Crater, and Ash Plume',
    subtitleAr: 'حجرة الصهارة، القصبة البركانية، الفوهة، وسحابة الرماد المتصاعدة',
    descriptionEn: 'Volcanoes are geological openings in Earth’s crust through which molten rock (magma), volcanic ash, and dissolved gases erupt onto the surface. Magma rises from subterranean chambers due to buoyancy and expanding gas pressures.',
    descriptionAr: 'البراكين هي منافذ طبيعية في القشرة الأرضية تخرج منها الصخور المنصهرة (الصهارة) والرماد والغازات المحبوسة إلى السطح. تصعد الصهارة من باطن الأرض نتيجة انخفاض كثافتها وضغط الغازات المتمددة.',
    labels: [
      { nameEn: 'Magma Chamber', nameAr: 'حجرة الصهارة (الماجما)', descEn: 'Subterranean pool of molten rock under immense lithostatic pressure.', descAr: 'خزان الصخور المنصهرة المتجمعة في أعماق القشرة الأرضية.' },
      { nameEn: 'Conduit (Main Vent)', nameAr: 'القصبة (المدخنة الرئيسية)', descEn: 'Central vertical pipe through which magma travels upward to the surface.', descAr: 'الممر الرأسي الذي تندفع من خلاله الصهارة نحو الفوهة.' },
      { nameEn: 'Volcanic Crater', nameAr: 'فوهة البركان', descEn: 'Circular bowl-shaped depression atop the volcanic cone where lava exits.', descAr: 'الفتحة الدائرية في قمة المخروط التي تتدفق منها الحمم البركانية.' },
      { nameEn: 'Lava Flow & Ash Cloud', nameAr: 'تدفق اللافا وسحابة الرماد', descEn: 'Degassed magma flowing on surface (lava) and pyroclastic airborne ash plume.', descAr: 'الصهارة بعد خروجها على السطح تسمى لافا، مصحوبة بسحب غازات ورماد.' },
    ],
    funFactsEn: [
      'When molten rock is underground it is called "magma", but once it breaks onto the surface it is called "lava"!',
      'More than 80% of Earth’s surface—both above and below sea level—is of volcanic origin.'
    ],
    funFactsAr: [
      'عندما تكون الصخور المنصهرة تحت الأرض تسمى "ماجما"، وبمجرد خروجها على السطح تسمى "لافا"!',
      'أكثر من 80% من سطح كوكب الأرض نشأ تاريخياً بفعل النشاط والبراكين.'
    ]
  }
];
