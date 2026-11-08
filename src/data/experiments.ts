import { Experiment, HomeActivity } from '../types';

export const EXPERIMENTS_DATA: Experiment[] = [
  // --- CHEMISTRY ---
  {
    id: 'chem-volcano',
    category: 'chemistry',
    titleEn: 'Volcano Experiment (Baking Soda & Vinegar)',
    titleAr: 'تجربة البركان الكيميائي (بيكربونات الصوديوم والخل)',
    objectiveEn: 'Demonstrate an acid-base neutralization reaction generating carbon dioxide gas and rapid effervescent foam.',
    objectiveAr: 'إيضاح تفاعل التعادل بين حمض وقاعدة لإنتاج غاز ثاني أكسيد الكربون وتكوين رغوة بركانية فوارة.',
    materialsEn: ['Baking soda (Sodium bicarbonate)', 'Vinegar (Dilute acetic acid)', 'Red food coloring', 'Dish soap (foaming surfactant)', 'Funnel and plastic bottle'],
    materialsAr: ['بيكربونات الصوديوم (صودا الخبز)', 'خل أبيض مخفف (حمض الأسيتيك)', 'ملون طعام أحمر أو برتقالي', 'سائل غسيل الأطباق', 'قمع وقارورة بلاستيكية'],
    safetyEn: ['Wear safety goggles to protect eyes from splashes', 'Conduct on an easy-to-clean tray or outdoors', 'Vinegar causes mild eye stinging; rinse thoroughly if contacted'],
    safetyAr: ['ارتداء نظارات الأمان الواقية لحماية العينين من الرذاذ', 'إجراء التجربة فوق صينية تنظيف أو في الهواء الطلق', 'الخل يسبب وخزاً للعين، في حال ملامسته يُغسل بماء وفير'],
    procedureEn: [
      'Place 2 tablespoons of baking soda into the flask or volcano model.',
      'Add a few drops of red/orange food coloring and a squirt of liquid dish soap.',
      'Measure 50 ml of white vinegar.',
      'Carefully pour vinegar into the flask and observe the eruptive foam flow.'
    ],
    procedureAr: [
      'ضع ملعقتين كبيرتين من بيكربونات الصوديوم داخل مجسم البركان أو القارورة.',
      'أضف قطرات من ملون الطعام الأحمر وقليلاً من صابون الأطباق السائل لتكثيف الرغوة.',
      'قِس 50 مل من الخل الأبيض الطبيعي.',
      'اسكب الخل برفق في الفوهة وشاهد فوران الحمم البركانية المتصاعدة.'
    ],
    explanationEn: 'Sodium bicarbonate (NaHCO₃) is a weak base, while vinegar contains acetic acid (CH₃COOH). Their reaction produces carbonic acid (H₂CO₃), which instantly decomposes into water and carbon dioxide gas (CO₂). Dish soap traps the expanding gas bubbles, creating a dense frothy eruption.',
    explanationAr: 'بيكربونات الصوديوم (NaHCO₃) قاعدة ضعيفة، بينما الخل يحتوي على حمض الأسيتيك (CH₃COOH). ينتج عن تفاعلهما حمض الكربونيك غير المستقر الذي يتفكك فوراً إلى ماء وغاز ثاني أكسيد الكربون (CO₂). يعمل صابون الأطباق على حبس فقاعات الغاز وتوليد رغوة كثيفة تحاكي الحمم.',
    observationsEn: [
      'Vigorous bubbling and frothing begins immediately upon contact',
      'The flask feels slightly cooler due to the endothermic nature of carbonic acid dissociation',
      'Gas release pushes liquid upward through the narrow opening'
    ],
    observationsAr: [
      'فوران وغليان فوري بمجرد التقاء السائلين',
      'برودة طفيفة في قاع القارورة لأن التفاعل ماص للحرارة جزئياً',
      'اندفاع الغاز المحبوس يرفع الرغوة لأعلى الفوهة'
    ],
    conclusionEn: 'Acid-base reactions produce chemical changes transforming starting reactants into new substances: salt (sodium acetate), water, and carbon dioxide gas.',
    conclusionAr: 'تفاعلات الأحماض والقواعد تؤدي إلى تغيرات كيميائية حقيقية تنتج مواد جديدة: ملح خلات الصوديوم، والماء، وغاز ثاني أكسيد الكربون.',
    simType: 'volcano',
    quiz: [
      {
        questionEn: 'Which gas is produced in the volcano reaction?',
        questionAr: 'ما هو الغاز المتصاعد في تجربة البركان؟',
        optionsEn: ['Oxygen (O₂)', 'Carbon dioxide (CO₂)', 'Hydrogen (H₂)', 'Nitrogen (N₂)'],
        optionsAr: ['الأكسجين (O₂)', 'ثاني أكسيد الكربون (CO₂)', 'الهيدروجين (H₂)', 'النيتروجين (N₂)'],
        correctIndex: 1,
        explanationEn: 'Carbon dioxide gas is released as carbonic acid decomposes into water and CO₂.',
        explanationAr: 'يتصاعد غاز ثاني أكسيد الكربون نتيجة تفكك حمض الكربونيك إلى ماء و CO₂.'
      },
      {
        questionEn: 'What is the chemical role of baking soda in this experiment?',
        questionAr: 'ما هو الدور الكيميائي لصودا الخبز في التجربة؟',
        optionsEn: ['Acid', 'Base (Alkaline)', 'Catalyst', 'Solvent'],
        optionsAr: ['حمض', 'قاعدة (قلوي)', 'عامل حفاز', 'مذيب'],
        correctIndex: 1,
        explanationEn: 'Sodium bicarbonate acts as a weak base that neutralizes the acid in vinegar.',
        explanationAr: 'تعمل بيكربونات الصوديوم كقاعدة ضعيفة تعادل حمض الأسيتيك.'
      }
    ]
  },
  {
    id: 'chem-ph-indicator',
    category: 'chemistry',
    titleEn: 'Homemade pH Indicator (Red Cabbage Extract)',
    titleAr: 'كاشف الحموضة المنزلي (مستخلص الكرنب الأحمر)',
    objectiveEn: 'Extract anthocyanin pigments to create a natural universal pH indicator and test household liquids.',
    objectiveAr: 'استخلاص صبغة الأنثوسيانين الطبيعية واستخدامها ككاشف للرقم الهيدروجيني pH لاختبار سوائل المنزل.',
    materialsEn: ['Red cabbage leaves', 'Warm water', 'Lemon juice', 'Vinegar', 'Baking soda solution', 'Liquid soap', 'Clear testing cups'],
    materialsAr: ['أوراق ملفوف (كرنب) أحمر', 'ماء دافئ', 'عصير ليمون', 'خل أبيض', 'محلول بيكربونات الصوديوم', 'صابون سائل', 'كؤوس اختبار شفافة'],
    safetyEn: ['Use gentle adult supervision when pouring warm water', 'Do not ingest experimental solutions', 'Wear an apron to prevent purple anthocyanin fabric staining'],
    safetyAr: ['إشراف أحد الوالدين عند سكب الماء الدافئ', 'عدم شرب أو تذوق المحاليل الكيميائية', 'ارتداء مريلة لحماية الملابس من بقع الصبغة البنفسجية'],
    procedureEn: [
      'Chop red cabbage and soak in warm water for 10 minutes until deep purple liquid forms.',
      'Filter the liquid into testing beakers.',
      'Add lemon juice to beaker 1 and watch it turn vibrant red/pink (strong acid).',
      'Add baking soda solution to beaker 2 and observe it turn cyan/blue-green (base).'
    ],
    procedureAr: [
      'قطّع أوراق الملفوف الأحمر وانقعها في ماء دافئ 10 دقائق حتى تحصل على محلول بنفسجي مركز.',
      'صفِّ المحلول البنفسجي في كؤوس الاختبار الزجاجية.',
      'أضف عصير الليمون للكأس الأول ولاحظ تحوله للون الوردي/الأحمر (حمض قوي).',
      'أضف محلول صودا الخبز للكأس الثاني ولاحظ تحوله للون الأزرق المخضر (قاعدة).'
    ],
    explanationEn: 'Red cabbage contains anthocyanin, a water-soluble flavin pigment that alters its molecular structure and light absorption depending on hydrogen ion (H⁺) concentration, turning red in acid (pH < 7), purple at neutral (pH 7), and green/yellow in base (pH > 7).',
    explanationAr: 'يحتوي الكرنب الأحمر على صبغة الأنثوسيانين التي يتغير شكل جزيئاتها وامتصاصها للضوء تبعاً لتركيز أيونات الهيدروجين (H⁺)؛ فتتحول للأحمر في الوسط الحمضي، والبنفسجي في الوسط المتعادل، والأخضر/الأصفر في الوسط القاعدي.',
    observationsEn: [
      'Lemon juice and vinegar shift color from purple to bright pink/red (pH 2-3)',
      'Pure water keeps the extract neutral purple (pH 7)',
      'Baking soda and soap turn the extract blue-green (pH 8-9)'
    ],
    observationsAr: [
      'الليمون والخل يحولان المحلول إلى أحمر/وردي فاقع (pH 2-3)',
      'الماء النقي يحافظ على اللون البنفسجي المتعادل (pH 7)',
      'بيكربونات الصوديوم والصابون يحولان اللون إلى أزرق مخضر (pH 8-9)'
    ],
    conclusionEn: 'Natural plant pigments can serve as effective scientific indicators measuring acidity and alkalinity across the pH scale.',
    conclusionAr: 'الأصباغ النباتية الطبيعية كواشف كيميائية دقيقة وموثوقة لقياس درجة الحموضة والقلوية على مقياس الـ pH.',
    simType: 'ph-indicator',
    quiz: [
      {
        questionEn: 'What color does red cabbage indicator turn in a strong acid?',
        questionAr: 'ما اللون الذي يتحول إليه كاشف الكرنب الأحمر في الحمض القوي؟',
        optionsEn: ['Bright Pink / Red', 'Deep Green', 'Navy Blue', 'Yellow'],
        optionsAr: ['وردي / أحمر فاقع', 'أخضر داكن', 'أزرق داكن', 'أصفر'],
        correctIndex: 0,
        explanationEn: 'Anthocyanins turn vivid red/pink when hydrogen ion concentration is high (low pH).',
        explanationAr: 'تتحول صبغة الأنثوسيانين للون الأحمر الفاقع مع زيادة تركيز أيونات الهيدروجين (حموضة عالية).'
      }
    ]
  },
  {
    id: 'chem-crystal-growth',
    category: 'chemistry',
    titleEn: 'Crystal Growing Simulation',
    titleAr: 'محاكاة نمو البلورات الكريستالية',
    objectiveEn: 'Investigate how solubility, supersaturation, and cooling rates dictate crystalline lattice formation.',
    objectiveAr: 'استكشاف كيف يؤدي فوق التشبع ومعدل التبريد إلى انتظام الذرات في شبكة بلورية هندسية دقيقة.',
    materialsEn: ['Hot distilled water', 'Table salt or sugar or alum powder', 'Beaker', 'String and seed crystal pencil holder'],
    materialsAr: ['ماء مقطر ساخن', 'ملح طعام أو سكر نقي أو مسحوق الشبة', 'كأس زجاجي', 'خيط ناعم وقلم تعليق بذرة التبلور'],
    safetyEn: ['Handle hot solutions with heat-resistant gloves', 'Never consume laboratory-grown crystals'],
    safetyAr: ['التعامل مع السوائل الساخنة بحذر وارتداء قفازات واقية', 'عدم تذوق البلورات النامية مخبرياً'],
    procedureEn: [
      'Heat water to dissolve maximum solute until supersaturated.',
      'Allow slow undisturbed cooling.',
      'Suspend a seed thread and observe geometric crystal facet growth over time.'
    ],
    procedureAr: [
      'سخن الماء وأذب أكبر قدر ممكن من المذاب حتى الوصول لحالة فوق التشبع.',
      'اترك المحلول يبرد ببطء شديد دون أي اهتزاز.',
      'علّق خيط بذرة التبلور وراقب ترسب الجزيئات في أوجه بلورية هندسية بديعة.'
    ],
    explanationEn: 'As a hot supersaturated liquid cools, solute solubility decreases. Molecules lose kinetic energy and bond into orderly repeating three-dimensional geometric crystal lattices.',
    explanationAr: 'عندما يبرد المحلول فوق المشبع تنخفض ذائبيته، وتفقد الجزيئات طاقتها الحركية فتترابط وفق نمط هندسي ثلاثي الأبعاد متكرر يسمى الشبكة البلورية.',
    observationsEn: [
      'Slow cooling produces large, well-defined geometric crystals',
      'Rapid cooling results in tiny, fragmented crystal powders'
    ],
    observationsAr: [
      'التبريد البطيء ينتج بلورات كبيرة منتظمة الأوجه',
      'التبريد المفاجئ والسريع ينتج مسحوقاً دقيقاً مبعثر البلورات'
    ],
    conclusionEn: 'Crystallization demonstrates how molecular forces organize chaotic liquid solutions into geometric solid minerals.',
    conclusionAr: 'التبلور يبرهن كيف تقوم الروابط الجزيئية بترتيب الذرات العشوائية في صورة معادن صلبة فائقة التناظر الهندسي.',
    simType: 'crystal',
    quiz: [
      {
        questionEn: 'Which cooling rate produces the largest, clearest crystals?',
        questionAr: 'أي معدلات التبريد التالية ينتج بلورات أكبر حجماً وأكثر وضوحاً؟',
        optionsEn: ['Slow, gradual cooling', 'Instant freezing with ice', 'Boiling continuously', 'Shaking rapidly'],
        optionsAr: ['التبريد البطيء والتدريجي', 'التجميد الفوري بالثلج', 'الغليان المستمر', 'الرج السريع المتواصل'],
        correctIndex: 0,
        explanationEn: 'Slow cooling gives molecules sufficient time to arrange into orderly lattice positions.',
        explanationAr: 'التبريد البطيء يتيح للجزيئات وقتاً كافياً للتموضع بدقة في أماكنها بالشبكة البلورية.'
      }
    ]
  },
  {
    id: 'chem-density-tower',
    category: 'chemistry',
    titleEn: 'Density Tower (Immiscible Liquids)',
    titleAr: 'برج الكثافة (السوائل غير القابلة للامتزاج)',
    objectiveEn: 'Explore how mass-to-volume ratio (density) allows multiple liquids and solids to float in distinct stable layers.',
    objectiveAr: 'استكشاف كيف تحدد الكثافة (الكتلة ÷ الحجم) استقرار السوائل والأجسام الصلبة في طبقات متراكبة.',
    materialsEn: ['Honey (1.42 g/cm³)', 'Dish soap (1.06 g/cm³)', 'Water with blue dye (1.00 g/cm³)', 'Vegetable oil (0.92 g/cm³)', 'Rubbing alcohol (0.79 g/cm³)', 'Metal bolt, grape, plastic cap'],
    materialsAr: ['عسل نحل (1.42 جم/سم³)', 'صابون أطباق (1.06 جم/سم³)', 'ماء ملون أزرق (1.00 جم/سم³)', 'زيت طعام (0.92 جم/سم³)', 'كحول طبي (0.79 جم/سم³)', 'مسمار معدني، حبة عنب، غطاء بلاستيكي'],
    safetyEn: ['Alcohol is flammable; keep away from open flames', 'Pour each layer gently along beaker walls to avoid turbulence'],
    safetyAr: ['الكحول قابل للاشتعال ويُحفظ بعيداً عن اللهب', 'صب كل سائل برفق شديد على جدار الكأس لتجنب الاختلاط'],
    procedureEn: [
      'Pour dense honey at the very bottom.',
      'Gently layer dish soap, colored water, oil, and alcohol in succession.',
      'Drop test objects (bolt, grape, cap) and observe equilibrium float positions.'
    ],
    procedureAr: [
      'اسكب العسل الكثيف في قاع الأسطوانة أولاً.',
      'أضف صابون الأطباق، ثم الماء الملون، ثم الزيت، ثم الكحول برفق على التوالي.',
      'أسقط الأجسام الصلبة ولاحظ استقرار كل جسم عند طبقة السائل المساوية لكثافته.'
    ],
    explanationEn: 'Density is defined as mass divided by volume (ρ = m/V). Liquids with greater density sink beneath lighter liquids, provided their molecular polarity prevents immediate mixing.',
    explanationAr: 'الكثافة هي كتلة وحدة الحجوم (الكثافة = الكتلة ÷ الحجم). السائل الأكثر كثافة يستقر في الأسفل، بينما يطفو السائل الأقل كثافة في الأعلى.',
    observationsEn: [
      'Honey settles firmly at bottom while rubbing alcohol floats on top',
      'The metal bolt sinks to the bottom, grape floats on dish soap, plastic cap floats on oil'
    ],
    observationsAr: [
      'العسل يستقر في القاع بينما الكحول يطفو في أعلى البرج',
      'المسمار المعدني يغوص للقاع، وحبة العنب تطفو فوق الصابون، والغطاء يطفو فوق الزيت'
    ],
    conclusionEn: 'Objects sink in fluids less dense than themselves and float on fluids denser than themselves.',
    conclusionAr: 'الأجسام تغوص في السوائل الأقل منها كثافة، وتطفو فوق السوائل الأكثر منها كثافة طبقاً لمبدأ الطفو لأرخميدس.',
    simType: 'density-tower',
    quiz: [
      {
        questionEn: 'Which liquid floats at the very top of the density tower?',
        questionAr: 'أي السوائل التالية يطفو في قمة برج الكثافة؟',
        optionsEn: ['Rubbing Alcohol', 'Honey', 'Water', 'Dish Soap'],
        optionsAr: ['الكحول الطبي', 'عسل النحل', 'الماء النقي', 'صابون الأطباق'],
        correctIndex: 0,
        explanationEn: 'Rubbing alcohol has the lowest density (approx 0.79 g/cm³) among these liquids.',
        explanationAr: 'الكحول يمتلك أقل كثافة (حوالي 0.79 جم/سم³) لذلك يستقر في أعلى البرج.'
      }
    ]
  },
  {
    id: 'chem-solubility',
    category: 'chemistry',
    titleEn: 'Dissolving and Solubility Lab',
    titleAr: 'مختبر الذوبان وقابلية الذوبان',
    objectiveEn: 'Measure how solvent temperature and stirring rate influence the rate of solute dissolution.',
    objectiveAr: 'قياس أثر درجة حرارة المذيب وسرعة التقليب على معدل ذوبان المواد الصلبة.',
    materialsEn: ['Hot water (80°C)', 'Cold water (10°C)', 'Sugar cubes', 'Granulated salt', 'Magnetic stirrer / spoon', 'Stopwatch'],
    materialsAr: ['ماء ساخن (80 درجة)', 'ماء مثلج (10 درجات)', 'مكعبات سكر', 'ملح طعام بلوري', 'ملعقة تقليب', 'ساعة إيقاف'],
    safetyEn: ['Caution with hot water to prevent scalds', 'Clean laboratory glassware after testing'],
    safetyAr: ['الحذر عند سكب الماء الساخن لتجنب الحروق', 'تنظيف الأواني الزجاجية بعد التجربة'],
    procedureEn: [
      'Add equal amounts of sugar into hot water and cold water simultaneously.',
      'Record time required to fully dissolve with and without stirring.'
    ],
    procedureAr: [
      'أضف كميات متساوية من السكر في الماء الساخن والماء البارد في وقت واحد.',
      'سجل بالثواني الزمن اللازم لاختفاء وذوبان الحبيبات مع التقليب وبدونه.'
    ],
    explanationEn: 'Higher temperature increases the kinetic energy of solvent water molecules, allowing them to collide with and dismantle solute crystal bonds much more rapidly.',
    explanationAr: 'ارتفاع درجة الحرارة يزيد الطاقة الحركية لجزيئات الماء، مما يجعل تصادماتها أسرع وأقوى لتفكيك روابط البلورة المذابة ونشرها بين جزيئات المذيب.',
    observationsEn: [
      'Sugar dissolves over 4x faster in hot water than in cold water',
      'Stirring maintains a steep concentration gradient at the solid surface'
    ],
    observationsAr: [
      'يذوب السكر في الماء الساخن أسرع بأربع مرات مقارنة بالماء البارد',
      'التقليب المستمر يجدد جزيئات المذيب الملامسة لسطح الحبيبات'
    ],
    conclusionEn: 'Dissolution rate increases directly with solvent temperature and mechanical agitation.',
    conclusionAr: 'معدل الذوبان يتناسب طردياً مع درجة حرارة السائل وسرعة التقليب الميكانيكي.',
    simType: 'solubility',
    quiz: [
      {
        questionEn: 'Why does sugar dissolve faster in hot water?',
        questionAr: 'لماذا يذوب السكر أسرع في الماء الساخن؟',
        optionsEn: ['Molecules move faster with higher kinetic energy', 'Hot water has more mass', 'Cold water has no space between molecules', 'Sugar melts at 30°C'],
        optionsAr: ['الجزيئات تتحرك أسرع بطاقة حركية أعلى', 'الماء الساخن كتلته أكبر', 'الماء البارد لا فراغات بين جزيئاته', 'السكر ينصهر عند 30 مئوية'],
        correctIndex: 0,
        explanationEn: 'Higher thermal energy makes solvent molecules collide with solute particles more frequently.',
        explanationAr: 'الطاقة الحرارية تجعل جزيئات الماء تتصادم بقوة أكبر مع بلورات السكر فتفتتها بسرعة.'
      }
    ]
  },
  {
    id: 'chem-separation',
    category: 'chemistry',
    titleEn: 'Separation of Mixtures',
    titleAr: 'فصل المخاليط (حديد، رمل، ملح)',
    objectiveEn: 'Apply physical separation techniques (magnetism, filtration, evaporation) to isolate components of a heterogeneous mixture.',
    objectiveAr: 'تطبيق طرق الفصل الفيزيائي (المغناطيس، الترشيح، التبخير) لفصل مكونات خليط غير متجانس.',
    materialsEn: ['Iron filings', 'Fine sand', 'Table salt (NaCl)', 'Bar magnet', 'Filter paper and funnel', 'Evaporating dish and burner'],
    materialsAr: ['برادة حديد ناعمة', 'رمال نقية', 'ملح طعام', 'مغناطيس قوي', 'ورق ترشيح وقمع زجاجي', 'جفنة تبخير وموقد آمن'],
    safetyEn: ['Keep magnets wrapped in plastic for easy filing release', 'Avoid inhaling fine dust or touching hot evaporating dishes'],
    safetyAr: ['تغليف المغناطيس بغشاء بلاستيكي لسهولة سحب برادة الحديد', 'تجنب استنشاق الغبار أو لمس الأواني الساخنة'],
    procedureEn: [
      'Pass a magnet over the dry mixture to attract and extract all iron filings.',
      'Add water to dissolve salt, leaving sand insoluble.',
      'Pour mixture through filter paper to trap sand residue.',
      'Gently heat salt solution to evaporate water, leaving pure white salt crystals.'
    ],
    procedureAr: [
      'مرر المغناطيس فوق الخليط الجاف لجذب برادة الحديد وفصلها تماماً.',
      'أضف الماء لإذابة الملح وترك الرمال غير الذائبة معلقة.',
      'اسكب المزيج في قمع الترشيح لحجز الرمال على ورقة الترشيح.',
      'سخن المحلول الملحي الرشيق لتبخير الماء بالكامل واستعادة بلورات الملح النقية.'
    ],
    explanationEn: 'Mixtures can be separated based on distinct physical property differences: magnetic permeability for iron, solubility and particle size for sand, and boiling point differences for salt.',
    explanationAr: 'يمكن فصل المخاليط اعتماداً على الفروق في الخواص الفيزيائية لمكوناتها: الخاصية المغناطيسية للحديد، وقابلية الذوبان والحجم للرمل، وفرق درجات الغليان للملح.',
    observationsEn: [
      'Iron filings cling instantly to magnetic poles',
      'Clear liquid passes through the filter while sand remains caught on the paper',
      'Evaporation leaves cubic salt crystals'
    ],
    observationsAr: [
      'برادة الحديد تلتصق بالمغناطيس فوراً وتنفصل بالكامل',
      'يمر المحلول الملحي الشفاف عبر المرشح بينما يعلق الرمل',
      'تبخر الماء يترك مكعبات ملح بيضاء نقية في القاع'
    ],
    conclusionEn: 'Components in a physical mixture retain their individual identities and can be recovered without chemical reactions.',
    conclusionAr: 'مكونات الخليط الفيزيائي تحتفظ بخواصها الأصلية ويمكن استعادتها بطرق فيزيائية بسيطة دون الحاجة لتفاعل كيميائي.',
    simType: 'separation',
    quiz: [
      {
        questionEn: 'Which property allows iron to be separated first?',
        questionAr: 'ما هي الخاصية التي سمحت بفصل الحديد أولاً من الخليط؟',
        optionsEn: ['Ferromagnetism', 'Solubility in water', 'Boiling point', 'Color'],
        optionsAr: ['المغناطيسية', 'الذوبان في الماء', 'درجة الغليان', 'اللون'],
        correctIndex: 0,
        explanationEn: 'Iron filings are ferromagnetic and attracted to the magnetic field.',
        explanationAr: 'برادة الحديد مادة مغناطيسية تنجذب بقوة لقطبي المغناطيس.'
      }
    ]
  },
  {
    id: 'chem-rusting',
    category: 'chemistry',
    titleEn: 'Rusting and Oxidation Simulation',
    titleAr: 'محاكاة صدأ الحديد والأكسدة',
    objectiveEn: 'Identify the essential environmental requirements (water + oxygen) for iron corrosion and test protective coatings.',
    objectiveAr: 'إثبات العوامل الأساسية لحدوث صدأ الحديد (الماء والأكسجين معاً) واختبار طرق الحماية.',
    materialsEn: ['Iron nails', '4 test tubes', 'Dry air (calcium chloride desiccant)', 'Boiled deoxygenated water with oil seal', 'Tap water', 'Salt water'],
    materialsAr: ['مسامير حديدية لامعة', '4 أنابيب اختبار', 'هواء جاف تماماً (كلوريد الكالسيوم)', 'ماء مغلي منزوع الأكسجين مع طبقة زيت', 'ماء صنبور عادي', 'ماء مالح'],
    safetyEn: ['Clean rusted surfaces carefully; avoid punctured skin by sharp nails'],
    safetyAr: ['الحذر من أطراف المسامير الحادة لتجنب جروح الجلد'],
    procedureEn: [
      'Tube 1: Nail in dry air with desiccant.',
      'Tube 2: Nail in boiled water sealed with oil (no oxygen).',
      'Tube 3: Nail in water exposed to air.',
      'Tube 4: Nail in salt water exposed to air.',
      'Observe rust formation over several simulated days.'
    ],
    procedureAr: [
      'الأنبوب 1: مسمار في هواء جاف مع مادة ماصة للرطوبة.',
      'الأنبوب 2: مسمار في ماء مغلي معزول بطبقة زيت لمنع دخول الأكسجين.',
      'الأنبوب 3: مسمار في ماء عادي معرض للهواء.',
      'الأنبوب 4: مسمار في ماء مالح معرض للهواء.',
      'راقب تكون قشور الصدأ البنية البرتقالية عبر الأيام.'
    ],
    explanationEn: 'Rusting is an electrochemical oxidation process: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → Fe₂O₃·nH₂O (hydrated iron(III) oxide). Both oxygen and moisture must be present. Dissolved salts act as electrolytes accelerating electron transfer.',
    explanationAr: 'الصدأ تفاعل أكسدة كيميائي: 4Fe + 3O₂ + 6H₂O ينتج أكسيد الحديد المائي (Fe₂O₃·nH₂O). لابد من وجود الماء والأكسجين معاً، ويعمل الملح كإلكتروليت يسرع حركة الإلكترونات ومعدل الصدأ.',
    observationsEn: [
      'Tubes 1 and 2 show ZERO rust (missing either water or oxygen)',
      'Tube 3 shows moderate brown rust flakes',
      'Tube 4 (salt water) shows massive accelerated rusting'
    ],
    observationsAr: [
      'الأنبوبان 1 و 2 خاليان تماماً من أي صدأ لغياب الماء أو الأكسجين',
      'الأنبوب 3 تظهر عليه قشور صدأ بنية ملحوظة',
      'الأنبوب 4 (الماء المالح) يظهر تآكلاً وصدأً شديد السرعة والانتشار'
    ],
    conclusionEn: 'Iron requires BOTH water and oxygen to rust. Salt acts as an accelerating catalyst.',
    conclusionAr: 'صدأ الحديد يتطلب حتماً توافر الأكسجين والرطوبة معاً، ووجود الأملاح يسرع التآكل بشكل كبير.',
    simType: 'rusting',
    quiz: [
      {
        questionEn: 'Will an iron nail rust in boiled water sealed with oil?',
        questionAr: 'هل يصدأ مسمار الحديد في ماء مغلي معزول بطبقة زيت؟',
        optionsEn: ['No, because oxygen was removed by boiling', 'Yes, it rusts faster', 'Only if exposed to sunlight', 'Yes, water alone causes rust'],
        optionsAr: ['لا، لأن غليان الماء طرد الأكسجين والزيت منع دخوله', 'نعم يصدأ بسرعة أكبر', 'فقط إذا تعرض لضوء الشمس', 'نعم فالماء وحده يكفي للصدأ'],
        correctIndex: 0,
        explanationEn: 'Boiling drives out dissolved oxygen, and the oil barrier prevents fresh oxygen from dissolving.',
        explanationAr: 'الغليان يطرد الأكسجين الذائب، وطبقة الزيت تمنع أكسجين الهواء من ملامسة الماء.'
      }
    ]
  },
  {
    id: 'chem-acids-bases',
    category: 'chemistry',
    titleEn: 'Acids and Bases Neutralization',
    titleAr: 'تفاعل التعادل بين الأحماض والقلويات',
    objectiveEn: 'Simulate the titration of hydrochloric acid with sodium hydroxide to observe pH balance and salt formation.',
    objectiveAr: 'محاكاة معايرة حمض الهيدروكلوريك مع هيدروكسيد الصوديوم لملاحظة توازن الـ pH وتكون الملح.',
    materialsEn: ['Hydrochloric acid solution (HCl)', 'Sodium hydroxide solution (NaOH)', 'Phenolphthalein indicator', 'Burette and Erlenmeyer flask'],
    materialsAr: ['محلول حمض الهيدروكلوريك (HCl)', 'محلول هيدروكسيد الصوديوم (NaOH)', 'دليل الفينولفثالين', 'سحاحة مخبرية ودورق مخروطي'],
    safetyEn: ['Strong acids and bases require safety goggles, gloves, and lab coats', 'Always add acid slowly to water, never water to acid'],
    safetyAr: ['الأحماض والقلويات القوية تتطلب ارتداء نظارات واقية وقفازات ومعطف المختبر', 'إضافة الحمض دائماً إلى الماء وليس العكس'],
    procedureEn: [
      'Place 25 mL of acid into the flask and add 2 drops of indicator.',
      'Slowly open the burette stopcock to add base dropwise.',
      'Swirl continuously until a faint permanent pink color marks the neutral equivalence point (pH 7).'
    ],
    procedureAr: [
      'ضع 25 مل من الحمض في الدورق وأضف قطرتين من الدليل.',
      'افتح صنبور السحاحة لتنقيط القاعدة قطرة قطرة برفق.',
      'رج الدورق باستمرار حتى ظهور لون وردي دائم يشير إلى نقطة التعادل (pH 7).'
    ],
    explanationEn: 'Acid (H⁺) reacts with base (OH⁻) to form neutral water and salt: HCl + NaOH → NaCl + H₂O.',
    explanationAr: 'تتحد أيونات الهيدروجين الموجبة (H⁺) من الحمض مع أيونات الهيدروكسيد السالبة (OH⁻) من القاعدة لتكوين جزيئات ماء متعادلة وملح: HCl + NaOH → NaCl + H₂O.',
    observationsEn: [
      'The solution transitions sharply from clear to light pink at pH 7',
      'The temperature rises slightly due to exothermic neutralization'
    ],
    observationsAr: [
      'يتغير لون المحلول فجأة من عديم اللون إلى وردي فاتح عند وصول الـ pH إلى 7',
      'ترتفع درجة حرارة المحلول قليلاً لأن تفاعل التعادل طارد للحرارة'
    ],
    conclusionEn: 'Neutralization combines acids and bases in stoichiometric proportions to yield harmless salt water.',
    conclusionAr: 'تفاعل التعادل يجمع الحمض والقاعدة بنسب متكافئة لإنتاج ماء وملح متعادلين كيميائياً.',
    simType: 'titration',
    quiz: [
      {
        questionEn: 'What are the products of an acid-base neutralization reaction?',
        questionAr: 'ما هي النواتج الدائمة لتفاعل تعادل حمض مع قاعدة؟',
        optionsEn: ['Salt and Water', 'Only Carbon dioxide', 'Only Hydrogen gas', 'Metal and Acid'],
        optionsAr: ['ملح وماء', 'ثاني أكسيد الكربون فقط', 'غاز الهيدروجين فقط', 'فلز وحمض'],
        correctIndex: 0,
        explanationEn: 'Acids and bases neutralize each other to produce water and a dissolved ionic salt.',
        explanationAr: 'يتعادل الحمض مع القاعدة لإنتاج الماء وجزيئات الملح الأيوني.'
      }
    ]
  },

  // --- PHYSICS ---
  {
    id: 'phys-circuit',
    category: 'physics',
    titleEn: 'Build an Electric Circuit',
    titleAr: 'بناء دائرة كهربائية بسيطة',
    objectiveEn: 'Construct a closed loop with battery, switch, resistor, and light bulb to understand current flow and Ohm’s law.',
    objectiveAr: 'تركيب حلقة مغلقة من بطارية ومفتاح ومقاومة ومصباح لفهم سريان التيار وقانون أوم.',
    materialsEn: ['9V battery', 'Switch toggle', 'Light bulb and socket', 'Resistor (10Ω - 100Ω)', 'Connecting copper wires', 'Virtual Ammeter & Voltmeter'],
    materialsAr: ['بطارية 9 فولت', 'مفتاح تشغيل/إيقاف', 'مصباح كهربائي متوهج', 'مقاومة كربونية (10 إلى 100 أوم)', 'أسلاك توصيل نحاسية', 'أميتر وفولتميتر رقمي'],
    safetyEn: ['Do not short-circuit batteries directly (+ to - without a load)', 'Safe low-voltage simulation'],
    safetyAr: ['تجنب توصيل قطبي البطارية معاً بسلك مباشر بدون حمل (قصر الدائرة)', 'تجربة آمنة بجهد منخفض'],
    procedureEn: [
      'Connect battery positive terminal to the switch.',
      'Connect switch output to resistor and light bulb.',
      'Complete the loop back to battery negative terminal.',
      'Toggle switch ON and observe current flow and bulb illumination.'
    ],
    procedureAr: [
      'صِل القطب الموجب للبطارية بالمفتاح الكهربائي.',
      'صِل مخرج المفتاح بالمقاومة وقاعدة المصباح.',
      'أكمل المسار إلى القطب السالب للبطارية لإغلاق الدائرة.',
      'شغّل المفتاح وراقب تدفق الإلكترونات وتوهج فتيلة المصباح.'
    ],
    explanationEn: 'Ohm’s law states that current (I) is directly proportional to voltage (V) and inversely proportional to resistance (R): I = V / R. Current flows only when a complete continuous conductive loop exists.',
    explanationAr: 'ينص قانون أوم على أن شدة التيار (I) تتناسب طردياً مع فرق الجهد (V) وعكسياً مع المقاومة (R): I = V / R. ولا يسري التيار إلا في مسار موصل ومغلق بالكامل.',
    observationsEn: [
      'Bulb glows only when the switch creates a continuous closed circuit',
      'Increasing resistance dims the bulb brightness',
      'Increasing voltage increases current and brightness'
    ],
    observationsAr: [
      'المصباح يضيء فقط عند إغلاق المفتاح وتكامل الدائرة',
      'زيادة قيمة المقاومة تقلل شدة التيار وإضاءة المصباح',
      'زيادة جهد البطارية يضاعف شدة التيار وتوهج المصباح'
    ],
    conclusionEn: 'Electrical energy requires an unbroken circuit loop and follows the fundamental relation I = V / R.',
    conclusionAr: 'الطاقة الكهربائية تتطلب مساراً مغلقاً متصلاً وتخضع للعلاقة الأساسية: التيار = الجهد ÷ المقاومة.',
    simType: 'circuit',
    quiz: [
      {
        questionEn: 'According to Ohm’s Law, if resistance increases while voltage remains constant, current will:',
        questionAr: 'وفقاً لقانون أوم، إذا زادت المقاومة مع ثبوت فرق الجهد، فإن شدة التيار:',
        optionsEn: ['Decrease', 'Increase', 'Stay the same', 'Double'],
        optionsAr: ['تقل', 'تزداد', 'تبقى ثابتة', 'تتضاعف'],
        correctIndex: 0,
        explanationEn: 'Current is inversely proportional to resistance (I = V / R).',
        explanationAr: 'شدة التيار تتناسب عكسياً مع قيمة المقاومة الكهربائية.'
      }
    ]
  },
  {
    id: 'phys-series-parallel',
    category: 'physics',
    titleEn: 'Series and Parallel Circuits',
    titleAr: 'دوائر التوالي والتوازي الكهربائية',
    objectiveEn: 'Compare voltage, current distribution, and failure resilience between series and parallel circuit architectures.',
    objectiveAr: 'المقارنة بين توصيل المصابيح على التوالي والتوازي من حيث شدة الإضاءة ومسارات التيار.',
    materialsEn: ['Power source', '3 light bulbs', 'Jumper wires', 'Switch'],
    materialsAr: ['مصدر طاقة كهربائية', '3 مصابيح متماثلة', 'أسلاك توصيل', 'مفتاح تحكم'],
    safetyEn: ['Safe DC circuit logic'],
    safetyAr: ['محاكاة آمنة لدوائر التيار المستمر'],
    procedureEn: [
      'Build Circuit A (Series): Connect 3 bulbs end-to-end in a single loop.',
      'Build Circuit B (Parallel): Connect each bulb across independent branches.',
      'Unscrew one bulb in each circuit and observe the outcome.'
    ],
    procedureAr: [
      'ركّب الدائرة (أ) على التوالي: صِل المصابيح الثلاثة في مسار واحد متتابع.',
      'ركّب الدائرة (ب) على التوازي: صِل كل مصباح في فرع مستقل متصل بالبطارية.',
      'فك مصباحاً واحداً في كل دائرة ولاحظ ماذا يحدث لبقية المصابيح.'
    ],
    explanationEn: 'In series, current is constant but voltage divides (V_total = V₁ + V₂ + V₃); unscrewing one breaks the entire circuit. In parallel, full voltage is supplied to every branch (V_total = V₁ = V₂); unscrewing one bulb leaves the others shining at full brightness.',
    explanationAr: 'في التوالي يمر نفس التيار وتتوزع الجهود، وإذا تلف مصباح تنطفئ الدائرة بأكملها. أما في التوازي فيحصل كل فرع على الجهد كاملاً، وإذا تلف مصباح تستمر بقية المصابيح في الإضاءة بكامل قوتها (كالمنازل).',
    observationsEn: [
      'Series bulbs are dimmer because total resistance triples',
      'Parallel bulbs shine at maximum brightness independently',
      'Removing one series bulb turns off all bulbs; parallel bulbs stay lit'
    ],
    observationsAr: [
      'المصابيح في التوالي أضعف إضاءة لتضاعف المقاومة الكلية',
      'المصابيح في التوازي تحتفظ بأقصى إضاءة لها',
      'فك مصباح في التوالي يطفئ الكل، بينما في التوازي تبقى الفروع الأخرى مضيئة'
    ],
    conclusionEn: 'Modern homes use parallel circuits so each appliance functions independently at full line voltage.',
    conclusionAr: 'تُبنى التمديدات المنزلية على التوازي لتعمل الأجهزة باستقلالية تامة وبأقصى فرق جهد متاح.',
    simType: 'series-parallel',
    quiz: [
      {
        questionEn: 'Why are household appliances wired in parallel rather than in series?',
        questionAr: 'لماذا توصل الأجهزة الكهربائية في المنازل على التوازي وليس على التوالي؟',
        optionsEn: ['So turning off one device does not turn off all others', 'To reduce the electricity bill', 'Because series requires too many batteries', 'Parallel uses less wire'],
        optionsAr: ['حتى لا يؤدي إطفاء جهاز واحد إلى إطفاء باقي الأجهزة', 'لتخفيض فاتورة الكهرباء', 'لأن التوالي يحتاج بطاريات كثيرة', 'لأن التوازي يحتاج أسلاكاً أقل'],
        correctIndex: 0,
        explanationEn: 'Parallel branches are electrically independent.',
        explanationAr: 'أفرع التوازي مستقلة كهربائياً ويصل لكل منها فرق الجهد كاملاً.'
      }
    ]
  },
  {
    id: 'phys-magnetism',
    category: 'physics',
    titleEn: 'Magnetism & Magnetic Fields',
    titleAr: 'المغناطيسية وخطوط المجال المغناطيسي',
    objectiveEn: 'Visualize invisible magnetic field lines using iron filings and demonstrate north-south dipole attraction and repulsion.',
    objectiveAr: 'رؤية خطوط المجال المغناطيسي غير المرئية ببرادة الحديد وتوضيح قوى التجاذب والتنافر بين الأقطاب.',
    materialsEn: ['2 Bar magnets with labeled North (N) and South (S) poles', 'Iron filings sheet', 'Magnetic compass array'],
    materialsAr: ['مغناطيسان مستقيمان محدد عليهما القطب الشمالي N والجنوبي S', 'صفيحة برادة حديد شفافة', 'مجموعة بوصلات مغناطيسية صغيرة'],
    safetyEn: ['Strong neodymium magnets can pinch fingers; keep away from credit cards and pacemakers'],
    safetyAr: ['مغانط النيوديميوم القوية قد تؤذي الأصابع؛ احفظها بعيداً عن البطاقات الممغنطة'],
    procedureEn: [
      'Place bar magnet beneath a sheet sprinkled with iron filings.',
      'Tap gently to align filings along flux lines.',
      'Bring like poles (N-N) close and observe repulsion flux pattern.',
      'Bring opposite poles (N-S) close and observe continuous attraction bridge lines.'
    ],
    procedureAr: [
      'ضع المغناطيس المستقيم أسفل صفيحة مرشوشة ببرادة الحديد.',
      'اطرق برفق لترى انتظام برادة الحديد موازية لخطوط القوى المغناطيسية.',
      'قرّب القطبين المتشابهين (شمالي-شمالي) ولاحظ انفراج خطوط التنافر.',
      'قرّب قطبين مختلفين (شمالي-جنوبي) وشاهد خطوط التجاذب المنحنية التي تصل بينهما.'
    ],
    explanationEn: 'Magnetic fields are vector fields emerging from the North pole and curving into the South pole. Like poles repel each other, while unlike poles attract with an inverse square force.',
    explanationAr: 'المجال المغناطيسي مجال متجهي تنبعث خطوطه من القطب الشمالي وتنحني لتدخل القطب الجنوبي. الأقطاب المتشابهة تتنافر والمختلفة تتجاذب بقوة تتناسب عكسياً مع مربع المسافة.',
    observationsEn: [
      'Iron filings align into smooth geometric loops between poles',
      'The field is strongest and densest directly at the pole tips',
      'Compass needles always point along the tangent of the magnetic field line'
    ],
    observationsAr: [
      'تنتظم البرادة في حلقات وأقواس منحنية انسيابية بين القطبين',
      'كثافة خطوط المجال تكون في أقصاها عند طرفي القطبين',
      'إبرة البوصلة تدور لتشير دائماً في اتجاه خط المجال المغناطيسي'
    ],
    conclusionEn: 'Magnetic field lines reveal the invisible geometry of magnetism: like poles repel, opposite poles attract.',
    conclusionAr: 'خطوط المجال ترسم بدقة القوى المغناطيسية الخفية: الأقطاب المتشابهة تتنافر والمختلفة تتجاذب.',
    simType: 'magnetism',
    quiz: [
      {
        questionEn: 'What happens when two North poles are brought close together?',
        questionAr: 'ماذا يحدث عند تقريب قطبين شماليين لبعضهما البعض؟',
        optionsEn: ['They repel each other', 'They attract strongly', 'They lose all magnetism', 'They spin endlessly'],
        optionsAr: ['يتنافران ويبتعدان عن بعضهما', 'يتجاذبان بقوة', 'يفقدان مغناطيسيتهما', 'يدوران بلا توقف'],
        correctIndex: 0,
        explanationEn: 'Like magnetic poles (N-N or S-S) always exert repulsive forces.',
        explanationAr: 'الأقطاب المغناطيسية المتشابهة تتنافر دائماً بقوة دافعة.'
      }
    ]
  },
  {
    id: 'phys-refraction',
    category: 'physics',
    titleEn: 'Light Reflection and Refraction',
    titleAr: 'انعكاس وانكسار الضوء (قانون سنيل والمنشور)',
    objectiveEn: 'Investigate how light rays bend across material boundaries according to Snell’s Law and disperse into color spectrums.',
    objectiveAr: 'دراسة انحراف وانكسار أشعة الضوء عند انتقالها بين الأوساط المختلفة طبقاً لقانون سنيل وتحلله بالمنشور.',
    materialsEn: ['Laser beam emitter', 'Glass prism & water container', 'Protractor angle scale', 'Normal line reference'],
    materialsAr: ['مصدر شعاع ليزر ضوئي', 'منشور زجاجي وحوض ماء شفاف', 'منقلة قياس الزوايا', 'خط العمود المقام'],
    safetyEn: ['Never look directly into laser beams; use eye-safe simulated optical emitters'],
    safetyAr: ['تجنب توجيه شعاع الليزر نحو العين مباشرة؛ استخدام محاكاة بصرية آمنة'],
    procedureEn: [
      'Direct light ray from air (n=1.0) into glass/water (n=1.5).',
      'Measure angle of incidence (θ₁) and angle of refraction (θ₂).',
      'Vary angle to reach the critical angle and observe Total Internal Reflection (TIR).'
    ],
    procedureAr: [
      'وجّه الشعاع الضوئي من الهواء (معامل 1.0) إلى الزجاج أو الماء (معامل 1.5).',
      'قِس زاوية السقوط (θ₁) وزاوية الانكسار (θ₂) بالنسبة للعمود المقام.',
      'زد زاوية السقوط حتى تتجاوز الزاوية الحرجة لتشاهد الانعكاس الكلي الداخلي.'
    ],
    explanationEn: 'Light travels at different speeds through different media. Snell’s Law (n₁ sin θ₁ = n₂ sin θ₂) describes the bending of the wavefront when crossing an interface. When entering a denser medium, light bends towards the normal.',
    explanationAr: 'يسير الضوء بسرعات مختلفة في الأوساط المختلفة. يصف قانون سنيل (n₁ sin θ₁ = n₂ sin θ₂) انكسار مسار الضوء؛ فعند دخوله وسطاً أكبر كثافة ضوئية ينكسر مقترباً من العمود المقام.',
    observationsEn: [
      'Light bends towards normal when slowing down in glass or water',
      'Beyond critical angle, all light reflects internally (basis of fiber optic internet)',
      'Prisms bend violet light more than red light, creating a rainbow spectrum'
    ],
    observationsAr: [
      'ينكسر الشعاع مقترباً من العمود المقام عند تباطؤ سرعته داخل الزجاج',
      'تجاوز الزاوية الحرجة يسبب انعكاساً كلياً (أساس كابلات الألياف الضوئية للإنترنت)',
      'المنشور يكسر الضوء البنفسجي أكثر من الأحمر، محللاً الضوء الأبيض لألوان الطيف'
    ],
    conclusionEn: 'Refraction is caused by light changing speed across media boundaries and underpins lenses, microscopes, and rainbows.',
    conclusionAr: 'الانكسار ناتج عن تغير سرعة الضوء بين الأوساط، وهو الأساس العلمي لصناعة العدسات والمجاهر ورؤية قوس قزح.',
    simType: 'refraction',
    quiz: [
      {
        questionEn: 'When light passes from air into water, what happens to its speed and direction?',
        questionAr: 'عند انتقال الضوء من الهواء إلى الماء، ماذا يحدث لسرعته ومساره؟',
        optionsEn: ['Slows down and bends towards the normal', 'Speeds up and bends away from the normal', 'Speed remains constant', 'Stops completely'],
        optionsAr: ['تقل سرعته وينكسر مقترباً من العمود المقام', 'تزداد سرعته ويبتعد عن العمود المقام', 'تبقى سرعته ثابتة دون انحراف', 'يتوقف تماماً'],
        correctIndex: 0,
        explanationEn: 'Water is optically denser than air, slowing light and bending it toward the normal.',
        explanationAr: 'الماء أكثر كثافة ضوئية من الهواء، فتقل سرعة الضوء وينكسر مقترباً من العمود المقام.'
      }
    ]
  },
  {
    id: 'phys-simple-machines',
    category: 'physics',
    titleEn: 'Simple Machines (Lever & Pulley)',
    titleAr: 'الآلات البسيطة (الروافع والبكرات)',
    objectiveEn: 'Calculate and demonstrate Mechanical Advantage (MA) using levers, pulleys, and inclined planes to lift heavy loads.',
    objectiveAr: 'حساب الفائدة الآلية (MA) للروافع والبكرات والمستوى المائل وكيف تقلل القوة اللازمة لرفع الأثقال.',
    materialsEn: ['First-class lever with fulcrum', 'Weights / load block', 'Single and double pulley system', 'Force dynamometer gauge (Newtons)'],
    materialsAr: ['رافعة من النوع الأول مع نقطة ارتكاز', 'أثقال وأحمال بالكيلوجرام', 'نظام بكرات مفردة ومزدوجة', 'ميزان زنبركي نيوتن لقياس القوة'],
    safetyEn: ['Ensure heavy weights are securely supported'],
    safetyAr: ['التأكد من تثبيت الأثقال جيداً لتجنب سقوطها'],
    procedureEn: [
      'Place a 10 kg load on the lever 1 meter from the fulcrum.',
      'Test effort required when applying force at 1m, 2m, and 3m distances.',
      'Configure a dual-pulley system and compare input effort to lifted load.'
    ],
    procedureAr: [
      'ضع ثقلاً كتلته 10 كجم على بعد متر واحد من نقطة الارتكاز.',
      'اختبر القوة المطلوبة للرفع عند تطبيق الجهد على بعد متر، ومترين، وثلاثة أمتار.',
      'ركّب نظام بكرة مزدوجة وقارن القوة المبذولة بوزن الحمل المرفوع.'
    ],
    explanationEn: 'Simple machines conserve work (Work = Force × Distance). By increasing the distance over which input force is applied, the required effort force is reduced proportionally: Mechanical Advantage = Load / Effort.',
    explanationAr: 'الآلات البسيطة لا تغير كمية الشغل (الشغل = القوة × المسافة)، ولكنها تزيد المسافة التي تؤثر عبرها القوة مما يقلل القوة العضلية المطلوبة: الفائدة الآلية = المقاومة ÷ القوة.',
    observationsEn: [
      'Doubling the lever effort arm cuts the required lifting force in half',
      'A two-pulley system cuts required effort in half (MA = 2)'
    ],
    observationsAr: [
      'مضاعفة طول ذراع القوة في الرافعة يقلل القوة المطلوبة للنصف',
      'نظام البكرة المزدوجة يقسم وزن الحمل على حبلين فتقل القوة للنصف'
    ],
    conclusionEn: 'Simple machines do not reduce total work, but multiply force by trading force for distance.',
    conclusionAr: 'الآلات البسيطة لا تقلل الشغل الكلي، بل توفر الجهد عبر استبدال القوة بمسافة أطول.',
    simType: 'simple-machines',
    quiz: [
      {
        questionEn: 'If a lever has a mechanical advantage of 4, how much force is needed to lift a 400 N load?',
        questionAr: 'إذا كانت الفائدة الآلية لرافعة تساوي 4، فكم نيوتن نحتاج لرفع حمل وزنه 400 نيوتن؟',
        optionsEn: ['100 N', '400 N', '1600 N', '50 N'],
        optionsAr: ['100 نيوتن', '400 نيوتن', '1600 نيوتن', '50 نيوتن'],
        correctIndex: 0,
        explanationEn: 'Effort = Load / MA = 400 N / 4 = 100 N.',
        explanationAr: 'القوة = الحمل ÷ الفائدة الآلية = 400 ÷ 4 = 100 نيوتن.'
      }
    ]
  },
  {
    id: 'phys-gravity-motion',
    category: 'physics',
    titleEn: 'Gravity and Motion (Galileo Drop)',
    titleAr: 'الجاذبية وحركة السقوط الحر (تجربة جاليليو)',
    objectiveEn: 'Verify Galileo’s principle that all objects accelerate at the same rate under gravity regardless of mass when air resistance is eliminated.',
    objectiveAr: 'إثبات مبدأ جاليليو بأن جميع الأجسام تسقط بنفس التسارع تحت تأثير الجاذبية عند إهمال مقاومة الهواء.',
    materialsEn: ['Heavy steel ball (1 kg)', 'Light bird feather (0.01 kg)', 'Vacuum drop tube cylinder', 'High-speed timer'],
    materialsAr: ['كرة فولاذية ثقيلة (1 كجم)', 'ريشة طائر خفيفة (0.01 كجم)', 'أنبوب تفريغ هوائي زجاجي', 'مؤقت ليزري فائق الدقة'],
    safetyEn: ['Use unbreakable simulated containment chambers'],
    safetyAr: ['استخدام حجرات محاكاة آمنة محكمة الإغلاق'],
    procedureEn: [
      'Drop steel ball and feather in normal air and observe the feather lag behind due to drag.',
      'Evacuate the air to create a vacuum (0 atm).',
      'Drop both objects simultaneously in vacuum and observe them hitting the bottom together.'
    ],
    procedureAr: [
      'أسقط الكرة الفولاذية والريشة معاً في الهواء العادي ولاحظ تأخر الريشة بسبب مقاومة الهواء.',
      'قم بتفريغ الهواء من الأنبوب تماماً للوصول إلى ضغط الصفر (الفراغ التام).',
      'أسقط الجسمين معاً في الفراغ وراقب هبوطهما وملامستهما للقاع في نفس اللحظة تماماً.'
    ],
    explanationEn: 'Gravitational acceleration (g ≈ 9.8 m/s² on Earth) depends only on Earth’s mass and radius, not on the mass of the falling object. In air, aerodynamic drag retards light objects. In a vacuum, all objects fall synchronously.',
    explanationAr: 'تسارع الجاذبية الأرضية (g ≈ 9.8 م/ث²) يعتمد على كتلة الأرض ونصف قطرها ولا يعتمد على كتلة الجسم الساقط. في الهواء تعيق قوى الاحتكاك الريشة، أما في الفراغ فتسقط الأجسام معاً بتسارع متطابق.',
    observationsEn: [
      'In air, the feather floats down slowly while the steel ball plummets',
      'In vacuum, both feather and ball fall side-by-side with identical acceleration'
    ],
    observationsAr: [
      'في الهواء تتهادى الريشة ببطء بينما تسقط الكرة الفولاذية كالسهم',
      'في الفراغ تسقط الريشة والكرة جنباً إلى جنب وتصلان للقاع في نفس الجزء من الثانية'
    ],
    conclusionEn: 'Gravity accelerates all masses equally at g = 9.8 m/s²; differences in free fall in atmosphere are caused solely by air resistance.',
    conclusionAr: 'الجاذبية الأرضية تكسب كل الكتل نفس التسارع (9.8 م/ث²)، والتفاوت الظاهري في الهواء سببه فقط مقاومة مائع الهواء.',
    simType: 'gravity',
    quiz: [
      {
        questionEn: 'In a complete vacuum, which object falls faster from a height of 10 meters?',
        questionAr: 'في الفراغ التام الخالي من الهواء، أي الأجسام يسقط أسرع من ارتفاع 10 أمتار؟',
        optionsEn: ['Both fall at exactly the same speed', 'The heavy steel ball', 'The light feather', 'The one with larger volume'],
        optionsAr: ['يسقط الاثنان بنفس السرعة تماماً ويصلان معاً', 'الكرة الفولاذية الثقيلة', 'الريشة الخفيفة', 'الجسم ذو الحجم الأكبر'],
        correctIndex: 0,
        explanationEn: 'In vacuum, gravitational acceleration is identical for all objects regardless of mass.',
        explanationAr: 'في الفراغ تسقط كل الأجسام بنفس التسارع الثابت دون أي إعاقة.'
      }
    ]
  },
  {
    id: 'phys-sound-waves',
    category: 'physics',
    titleEn: 'Sound Waves & Oscilloscope',
    titleAr: 'الموجات الصوتية وراسم الذبذبات',
    objectiveEn: 'Analyze frequency (pitch), amplitude (loudness), and wavelength of acoustic sound waves with real-time audio synthesis.',
    objectiveAr: 'تحليل التردد (طبقة الصوت) والسعة (شدة الصوت) وطول الموجة لاهتزازات الصوت مع سماع النغمات الحقيقية.',
    materialsEn: ['Virtual tone generator (Web Audio API)', 'Oscilloscope wave display', 'Tuning fork simulator', 'Frequency slider (100 Hz - 2000 Hz)'],
    materialsAr: ['مولد نغمات صوتية حي', 'شاشة راسم إشارات (أوسيلوسكوب)', 'محاكي شوكة رنانة', 'مؤشر تردد الصوت (100 إلى 2000 هرتز)'],
    safetyEn: ['Keep audio playback at comfortable volume levels'],
    safetyAr: ['ضبط مستوى صوت السماعات على درجة مريحة للأذن'],
    procedureEn: [
      'Generate a 440 Hz standard concert A sine wave and listen to the tone.',
      'Increase frequency to 880 Hz and observe wave peaks compress while pitch sharpens.',
      'Increase amplitude and observe wave height enlarge while loudness increases.'
    ],
    procedureAr: [
      'شغل نغمة تردد 440 هرتز (نغمة لا الموسيقية) واستمع لصوتها.',
      'ارفع التردد إلى 880 هرتز ولاحظ تقارب قمم الموجات وارتفاع حدة الصوت.',
      'ارفع سعة الموجة ولاحظ زيادة ارتفاع قمة الموجة وارتفاع شدة الصوت المسموع.'
    ],
    explanationEn: 'Sound is a mechanical longitudinal compression wave. Frequency (cycles per second, Hz) determines perceived pitch. Amplitude (wave peak height) determines loudness and sound pressure.',
    explanationAr: 'الصوت موجة ميكانيكية طولية تتكون من تضاغطات وتخلخلات. التردد (هرتز) يحدد درجة وحدة الصوت، وسعة الموجة تحدد شدة وعلو الصوت.',
    observationsEn: [
      'Higher frequency tightens wavelength (v = f × λ) and creates higher pitch',
      'Higher amplitude increases wave vertical displacement without altering pitch'
    ],
    observationsAr: [
      'التردد الأعلى يقلل الطول الموجي ويجعل الصوت حاداً رفيعاً',
      'السعة الأعلى تزيد ارتفاع قمة الموجة وتجعل الصوت جهيراً وقوياً'
    ],
    conclusionEn: 'Sound waves embody energy transfer through oscillating pressure waves governed by v = f × λ.',
    conclusionAr: 'الموجات الصوتية تنقل الطاقة عبر اهتزاز الجزيئات وتخضع للمعادلة: سرعة الصوت = التردد × الطول الموجي.',
    simType: 'sound-waves',
    quiz: [
      {
        questionEn: 'What acoustic property is determined by the frequency of a sound wave?',
        questionAr: 'ما هي الخاصية الصوتية التي يحددها تردد الموجة الصوتية؟',
        optionsEn: ['Pitch (High or Low tone)', 'Loudness (Volume)', 'Speed in vacuum', 'Color'],
        optionsAr: ['طبقة وحدّة الصوت (صوت حاد أو غليظ)', 'شدة وعلو الصوت', 'سرعته في الفراغ', 'اللون'],
        correctIndex: 0,
        explanationEn: 'Frequency determines pitch; amplitude determines loudness.',
        explanationAr: 'التردد يحدد حدة وطبقة الصوت، بينما السعة تحدد شدته وعلوه.'
      }
    ]
  },
  {
    id: 'phys-pendulum',
    category: 'physics',
    titleEn: 'Working Pendulum Simulation',
    titleAr: 'محاكاة البندول البسيط والتذبذب التوافقي',
    objectiveEn: 'Measure the period of simple harmonic oscillation and demonstrate that period depends solely on length and gravity, not mass.',
    objectiveAr: 'قياس زمن دورة التذبذب التوافقي وإثبات اعتماد الزمن الدوري فقط على طول الخيط والجاذبية وليس الكتلة.',
    materialsEn: ['Rigid pivot stand', 'Adjustable string length (0.2 m - 2.0 m)', 'Variable mass bob (0.1 kg - 5 kg)', 'Stopwatch timer', 'Gravity selector (Earth, Moon, Jupiter)'],
    materialsAr: ['حامل تثبيت بندول', 'خيط قابل لتعديل الطول (0.2 إلى 2 متر)', 'كتلة متغيرة (0.1 إلى 5 كجم)', 'ساعة إيقاف دقيقة', 'محدد جاذبية الكواكب (الأرض، القمر، المشتري)'],
    safetyEn: ['Simple harmonic mechanics simulation'],
    safetyAr: ['محاكاة ميكانيكا حركة توافقية آمنة'],
    procedureEn: [
      'Set string length to 1.0 meter with a 1 kg bob and release from 15° angle.',
      'Measure time for 10 complete oscillations to calculate period T.',
      'Change bob mass to 5 kg and observe that period remains completely unchanged.',
      'Change length to 0.25 m and observe period halves (T ∝ √L).'
    ],
    procedureAr: [
      'اضبط طول الخيط على 1 متر مع كتلة 1 كجم واتركه يتأرجح من زاوية 15 درجة.',
      'احسب زمن 10 دورات كاملة واستنتج الزمن الدوري للدورة الواحدة T.',
      'غيّر الكتلة إلى 5 كجم وشاهد أن سرعة وزمن التأرجح لم يتغيرا مطلقاً.',
      'قصّر الخيط إلى ربع متر ولاحظ أن زمن الدورة ينخفض إلى النصف (T ∝ √L).'
    ],
    explanationEn: 'The period of a simple pendulum is given by T = 2π√(L/g). It depends only on length (L) and local gravitational field strength (g). Mass cancels out because gravitational force and inertia scale identically.',
    explanationAr: 'الزمن الدوري للبندول يحسب من العلاقة: T = 2π√(L/g). يعتمد حصراً على طول الخيط (L) وتسارع الجاذبية (g)، بينما لا تؤثر الكتلة إطلاقاً لأن قوة الجذب والقصور الذاتي يتناسبان بنفس المقدار.',
    observationsEn: [
      'A longer pendulum swings much slower',
      'Altering the suspended mass has zero impact on oscillation period',
      'On the Moon (g = 1.62 m/s²), the pendulum swings much slower than on Earth'
    ],
    observationsAr: [
      'البندول الأطول يتأرجح ببطء أكبر وزمن دوري أطول',
      'تغيير كتلة الثقل المعلق لا يؤثر إطلاقاً على زمن التأرجح',
      'على سطح القمر (جاذبية أضعف) يتأرجح البندول ببطء شديد مقارنة بالأرض'
    ],
    conclusionEn: 'Pendulum motion proves that gravitational mass equals inertial mass and enables mechanical clock timekeeping.',
    conclusionAr: 'حركة البندول برهنت تطابق كتلة القصور مع كتلة الجاذبية، وكانت الأساس التاريخي لضبط الساعات الميكانيكية.',
    simType: 'pendulum',
    quiz: [
      {
        questionEn: 'If you quadruple the length of a pendulum, what happens to its period of oscillation?',
        questionAr: 'إذا زاد طول خيط البندول إلى 4 أضعاف طوله الأصلي، ماذا يحدث لزمن دورته؟',
        optionsEn: ['Period doubles (2x)', 'Period quadruples (4x)', 'Period is cut in half', 'Does not change'],
        optionsAr: ['يتضاعف الزمن الدوري إلى الضعف (2x)', 'يزداد الزمن إلى 4 أضعاف', 'يقل للثلث', 'لا يتغير'],
        correctIndex: 0,
        explanationEn: 'Because T ∝ √L, √4 = 2, so the period doubles.',
        explanationAr: 'لأن العلاقة طردية مع الجذر التربيعي للطول (√4 = 2) فيتضاعف الزمن الدوري.'
      }
    ]
  },

  // --- BIOLOGY ---
  {
    id: 'bio-photosynthesis',
    category: 'biology',
    titleEn: 'Plant Photosynthesis Lab',
    titleAr: 'مختبر البناء الضوئي في النبات',
    objectiveEn: 'Measure the rate of oxygen bubble production under varying sunlight intensities and carbon dioxide concentrations.',
    objectiveAr: 'قياس معدل إنتاج فقاعات الأكسجين في نبات الإلوديا المائي تحت شدات إضاءة وتراكيز CO₂ مختلفة.',
    materialsEn: ['Aquatic Elodea plant sprig', 'Beaker with water & sodium bicarbonate (CO₂ source)', 'Adjustable lamp (0 - 1000 Lux)', 'Inverted funnel and gas measuring test tube'],
    materialsAr: ['فرع نبات الإلوديا المائي الأخضر', 'كأس ماء مضاف إليه كربونات الصوديوم (مصدر CO₂)', 'مصباح ضوئي متغير الشدة', 'قمع مقلوب وأنبوب مدرج لتجميع الغاز'],
    safetyEn: ['Ensure electrical lamp cords remain completely dry away from water'],
    safetyAr: ['إبعاد التوصيلات الكهربائية للمصباح عن الماء لمنع أي ماس كهربائي'],
    procedureEn: [
      'Place Elodea branch under inverted funnel in water.',
      'Vary lamp distance to set light intensity.',
      'Count oxygen bubbles escaping the stem per minute at 100, 500, and 1000 Lux.'
    ],
    procedureAr: [
      'ضع فرع نبات الإلوديا تحت القمع المقلوب داخل حوض الماء.',
      'عدل المسافة بين المصباح والنبات للتحكم في شدة الإضاءة الساقطة.',
      'احسب عدد فقاعات غاز الأكسجين المتصاعدة من ساق النبات في الدقيقة عند شدات ضوء مختلفة.'
    ],
    explanationEn: 'Photosynthesis converts light energy into chemical energy: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ (glucose) + 6O₂. Chlorophyll pigments in chloroplasts absorb photons to split water molecules (photolysis), releasing oxygen gas.',
    explanationAr: 'البناء الضوئي يحول الطاقة الضوئية إلى طاقة كيميائية: 6CO₂ + 6H₂O + ضوء ← سكر جلوكوز + 6O₂. تمتص صبغة الكلوروفيل في البلاستيدات الخضراء فوتونات الضوء لشطر جزيء الماء وإطلاق الأكسجين.',
    observationsEn: [
      'Bubble production rate accelerates directly as light intensity increases',
      'In total darkness, bubble production stops completely',
      'Adding sodium bicarbonate provides CO₂, boosting the photosynthetic rate'
    ],
    observationsAr: [
      'يتسارع تصاعد فقاعات الأكسجين مع زيادة شدة الضوء واقتراب المصباح',
      'في الظلام الدامس يتوقف تصاعد الفقاعات تماماً',
      'إضافة بيكربونات الصوديوم توفر غاز CO₂ المذاب مما يضاعف كفاءة العملية'
    ],
    conclusionEn: 'Plants produce the oxygen we breathe and glucose fuel for the biosphere via photosynthesis.',
    conclusionAr: 'النباتات هي مصنع الحياة على الأرض، تنتج الأكسجين الذي نتنفسه وسكر الجلوكوز الذي يغذي الكائنات الحية.',
    simType: 'photosynthesis',
    quiz: [
      {
        questionEn: 'What gas is released as a byproduct during photosynthesis?',
        questionAr: 'ما هو الغاز المنطلق كناتج ثانوي لعملية البناء الضوئي؟',
        optionsEn: ['Oxygen (O₂)', 'Carbon dioxide (CO₂)', 'Nitrogen (N₂)', 'Methane'],
        optionsAr: ['الأكسجين (O₂)', 'ثاني أكسيد الكربون (CO₂)', 'النيتروجين (N₂)', 'الميثان'],
        correctIndex: 0,
        explanationEn: 'Photolysis of water releases oxygen gas into the atmosphere.',
        explanationAr: 'الانشطار الضوئي لجزيئات الماء داخل البلاستيدة يحرر غاز الأكسجين.'
      }
    ]
  },
  {
    id: 'bio-human-systems',
    category: 'biology',
    titleEn: 'Human Body Systems Explorer',
    titleAr: 'مستكشف أجهزة جسم الإنسان',
    objectiveEn: 'Explore the anatomy and vital functions of the Circulatory, Respiratory, Digestive, Nervous, and Skeletal systems.',
    objectiveAr: 'استكشاف تشريح ووظائف أجهزة الجسم الحيوية: الدوري، التنفسي، الهضمي، العصبي، والهيكلي.',
    materialsEn: ['Interactive human anatomical model', 'Organ cross-sections (Heart, Lungs, Brain, Stomach, Kidneys)', 'Vital signs telemetry simulation'],
    materialsAr: ['نموذج تشريحي تفاعلي ثلاثي الأبعاد لجسم الإنسان', 'قطاعات للأعضاء (القلب، الرئتان، الدماغ، المعدة، الكليتان)', 'مؤشرات العلامات الحيوية'],
    safetyEn: ['Educational anatomy visualizer'],
    safetyAr: ['عارض تشريحي تعليمي مبسط ومناسب للطلاب'],
    procedureEn: [
      'Select a body system to highlight its constituent organs.',
      'Click individual organs (e.g. Heart) to view internal blood flow pathways.',
      'Examine how systems collaborate (e.g., respiratory oxygenates blood for the circulatory system).'
    ],
    procedureAr: [
      'اختر الجهاز الحيوي المراد فحصه لإبراز أعضائه المتكاملة.',
      'انقر على عضو معين (مثل القلب) لتتبع مسار الدم المؤكسج وغير المؤكسج.',
      'اكتشف كيف يتعاون الجهاز التنفسي مع الدوري لتوصيل الأكسجين إلى خلايا الدماغ والعضلات.'
    ],
    explanationEn: 'The human body is an integrated biological machine where multiple organ systems work synergistically to maintain homeostasis (internal equilibrium of pH, temperature, and nutrients).',
    explanationAr: 'جسم الإنسان شبكة بيولوجية متكاملة تتكاتف فيها الأجهزة للحفاظ على الاتزان الداخلي (Homeostasis) من تنظيم درجة الحرارة وحموضة الدم وتغذية الخلايا.',
    observationsEn: [
      'The heart beats ~100,000 times daily to pump oxygenated blood',
      'The lungs offer over 70 square meters of alveolar surface area for gas exchange',
      'The nervous system transmits electrochemical impulses at up to 120 m/s'
    ],
    observationsAr: [
      'ينبض القلب نحو 100,000 نبضة يومياً لضخ الدم النقي لكافة الأنسجة',
      'مساحة سطح الحويصلات الهوائية في الرئتين تتجاوز 70 متراً مربعاً لتبادل الغازات',
      'ينقل الجهاز العصبي السيالات الكهروكيميائية بسرعة تصل إلى 120 متراً في الثانية'
    ],
    conclusionEn: 'Organ systems cooperate seamlessly to sustain life, growth, and cognition.',
    conclusionAr: 'تتعاون أجهزة الجسم في تناغم إعجازي لضمان استمرار الحياة والنمو والتفكير.',
    simType: 'human-systems',
    quiz: [
      {
        questionEn: 'Which human organ system is responsible for pumping blood and delivering nutrients?',
        questionAr: 'أي أجهزة جسم الإنسان مسؤول عن ضخ الدم وتوزيع الأكسجين والمغذيات؟',
        optionsEn: ['Circulatory system', 'Respiratory system', 'Digestive system', 'Endocrine system'],
        optionsAr: ['الجهاز الدوري', 'الجهاز التنفسي', 'الجهاز الهضمي', 'جهاز الغدد الصماء'],
        correctIndex: 0,
        explanationEn: 'The heart and blood vessels make up the circulatory system.',
        explanationAr: 'يتكون الجهاز الدوري من القلب والأوعية الدموية لنقل الدم والمغذيات.'
      }
    ]
  },
  {
    id: 'bio-microscope',
    category: 'biology',
    titleEn: 'Virtual Microscope Simulation',
    titleAr: 'محاكاة المجهر الضوئي المركب',
    objectiveEn: 'Master optical microscopy controls: objective lens switching (4x, 10x, 40x), coarse and fine focus, and slide illumination.',
    objectiveAr: 'إتقان استخدام المجهر الضوئي: تبديل العدسات الشيئية (4x, 10x, 40x)، والضبط التقريبي والدقيق، وإضاءة العينات.',
    materialsEn: ['Compound light microscope', 'Prepared slides: Onion epidermal cells, human cheek epithelial cells, pond water microorganisms (Paramecium)'],
    materialsAr: ['مجهر ضوئي مركب', 'شرائح جاهزة: بشرة قشر البصل، خلايا باطن الخد البشري، كائنات ماء البركة (البراميسيوم)'],
    safetyEn: ['Careful not to lower high-power objective lens into the glass slide cover'],
    safetyAr: ['الحذر من ملامسة العدسة الشيئية لغطاء الشريحة الزجاجية لتجنب كسرها'],
    procedureEn: [
      'Mount the onion cell slide onto the stage.',
      'Start with lowest power (4x scanning objective) and adjust coarse focus.',
      'Switch to 10x and 40x high power, fine-tuning focus until cell walls and nuclei are crisp.'
    ],
    procedureAr: [
      'ثبت شريحة خلايا قشر البصل على مسرح المجهر بملاقط التثبيت.',
      'ابدأ دائماً بأضعف عدسة شيئية (4x) واستخدم الضابط الكبير لتوضيح الرؤية المبدئية.',
      'انتقل للعدسة الشيئية الكبرى (40x) واستخدم الضابط الدقيق حتى تظهر جدران الخلايا والأنوية بحدة.'
    ],
    explanationEn: 'Total magnification equals eyepiece magnification (10x) multiplied by objective magnification (e.g. 10x × 40x = 400x). Light refracts through glass condenser and objective lenses to reveal sub-millimeter biological structures.',
    explanationAr: 'قوة التكبير الكلية = تكبير العدسة العينية (10x) × تكبير العدسة الشيئية (مثلاً: 10 × 40 = 400 مرة). ينكسر الضوء عبر العدسات ليكشف التركيب المجهري الدقيق للخلايا الحية.',
    observationsEn: [
      'Onion plant cells display rigid rectangular cell walls with visible stained nuclei',
      'Animal cheek cells have irregular, flexible cell membranes without cell walls',
      'Living paramecia swim vigorously using microscopic beating cilia'
    ],
    observationsAr: [
      'خلايا البصل تظهر كصفوف متراصة تشبه قوالب الطوب بجدران خلوية سليلوزية واضحة',
      'خلايا الخد الحيوانية تظهر مرنة ومستديرة بدون جدار خلوي صلب',
      'البراميسيوم يتحرك بسرعة بواسطة الأهداب الدقيقة المحيطة بجسمه'
    ],
    conclusionEn: 'Microscopy opens the door to the cellular foundation of all living matter.',
    conclusionAr: 'المجهر هو النافذة العلمية التي كشفت الخلية كوحدة بناء أساسية لجميع الكائنات الحية.',
    simType: 'microscope',
    quiz: [
      {
        questionEn: 'If a microscope has a 10x eyepiece and a 40x objective lens, what is the total magnification?',
        questionAr: 'إذا كانت قوة العدسة العينية 10x وقوة العدسة الشيئية 40x، فما هي قوة التكبير الكلية؟',
        optionsEn: ['400x', '50x', '40x', '100x'],
        optionsAr: ['400 ضعف (400x)', '50 ضعف', '40 ضعف', '100 ضعف'],
        correctIndex: 0,
        explanationEn: 'Total magnification = Eyepiece × Objective = 10 × 40 = 400x.',
        explanationAr: 'التكبير الكلي = قوة العدسة العينية × قوة العدسة الشيئية = 10 × 40 = 400 مرة.'
      }
    ]
  },
  {
    id: 'bio-cell-structure',
    category: 'biology',
    titleEn: 'Cell Structure (Plant vs. Animal Cell)',
    titleAr: 'تركيب الخلية (مقارنة بين الخلية النباتية والحيوانية)',
    objectiveEn: 'Compare organelles (Nucleus, Mitochondria, Chloroplasts, Vacuole, Cell Wall, Cell Membrane) across plant and animal cells.',
    objectiveAr: 'مقارنة العضيات الخلوية (النواة، الميتوكوندريا، البلاستيدات، الفجوة العصارية، الجدار الخلوي، الغشاء البلازمي).',
    materialsEn: ['Interactive 3D cross-section models of Animal Cell and Plant Cell', 'Organelle discovery cards'],
    materialsAr: ['مجسمات ثلاثية الأبعاد تفاعلية لخلية نباتية وأخرى حيوانية', 'بطاقات وظائف العضيات الخلوية'],
    safetyEn: ['Interactive cellular biology simulation'],
    safetyAr: ['محاكاة تفاعلية للأحياء الخلوية'],
    procedureEn: [
      'Inspect the plant cell and locate unique organelles: Cell Wall and Chloroplasts.',
      'Inspect the animal cell with its flexible membrane and centrioles.',
      'Click each organelle to reveal its biological function.'
    ],
    procedureAr: [
      'افحص الخلية النباتية وحدد العضيات الفريدة: الجدار الخلوي السليلوزي والبلاستيدات الخضراء.',
      'افحص الخلية الحيوانية بغشائها البلازمي المرن وجسيماتها المركزية.',
      'انقر على كل عضية (كالميتوكوندريا والنواة) لمعرفة وظيفتها الحيوية الدقيقة.'
    ],
    explanationEn: 'Plant and animal cells are both eukaryotic, containing membrane-bound nuclei and organelles like mitochondria (cellular respiration). However, plants possess a rigid cellulose cell wall, large central vacuole, and chloroplasts for photosynthesis.',
    explanationAr: 'الخلايا النباتية والحيوانية كلاهما حقيقية النواة، تحتويان على ميتوكوندريا لإنتاج الطاقة ونواة لحفظ الـ DNA. ولكن الخلية النباتية تتميز بجدار سليلوزي صلب وفجوة عصارية مركزية عملاقة وبلاستيدات خضراء.',
    observationsEn: [
      'Plant cells possess rigid geometric shapes due to cell walls',
      'Mitochondria act as the "powerhouses" producing ATP energy in both cell types',
      'Chloroplasts are exclusive to photosynthetic plant cells'
    ],
    observationsAr: [
      'الخلية النباتية تتخذ شكلاً هندسياً منتظماً بفضل الجدار السليلوزي',
      'الميتوكوندريا تعمل كـ "محطة توليد الطاقة" ATP في كلا النوعين',
      'البلاستيدات الخضراء توجد فقط في النباتات للقيام بالبناء الضوئي'
    ],
    conclusionEn: 'Organelle specialization reflects the different evolutionary survival strategies of plants and animals.',
    conclusionAr: 'تخصص العضيات الخلوية يجسد تكيف الكائنات؛ فالنبات يصنع غذاءه بنفسه بينما يتحرك الحيوان للبحث عن الغذاء.',
    simType: 'cell-structure',
    quiz: [
      {
        questionEn: 'Which organelle is found in plant cells but NOT in animal cells?',
        questionAr: 'أي العضيات التالية توجد في الخلية النباتية ولا توجد في الخلية الحيوانية؟',
        optionsEn: ['Chloroplast', 'Mitochondria', 'Nucleus', 'Ribosome'],
        optionsAr: ['البلاستيدة الخضراء', 'الميتوكوندريا', 'النواة', 'الريبوسوم'],
        correctIndex: 0,
        explanationEn: 'Chloroplasts contain chlorophyll for photosynthesis and are unique to plants/algae.',
        explanationAr: 'البلاستيدات الخضراء تحتوي على الكلوروفيل لصنع الغذاء وتقتصر على النباتات.'
      }
    ]
  },
  {
    id: 'bio-dna',
    category: 'biology',
    titleEn: 'DNA Structure & Base Pairing',
    titleAr: 'تركيب الحمض النووي (DNA) وتكامل القواعد النيتروجينية',
    objectiveEn: 'Assemble the double helix by matching complementary nitrogenous bases: Adenine with Thymine (A-T) and Guanine with Cytosine (G-C).',
    objectiveAr: 'تركيب نموذج اللولب المزدوج للحمض النووي عبر مطابقة القواعد المتكاملة: الأدنين مع الثايمين والسيتوسين مع الجوانين.',
    materialsEn: ['3D DNA double helix interactive model', 'Nucleotide parts (Sugar-phosphate backbone + Bases: A, T, C, G)'],
    materialsAr: ['نموذج تفاعلي ثلاثي الأبعاد لحمض الـ DNA', 'قطع النيوكليوتيدات (سكر، فوسفات، وقواعد: A, T, C, G)'],
    safetyEn: ['Molecular genetics interactive sandbox'],
    safetyAr: ['محاكاة بيولوجيا جزيئية آمنة'],
    procedureEn: [
      'Observe the sugar-phosphate antiparallel backbones forming the twisted ladder rails.',
      'Drag and pair Adenine (A) to Thymine (T) via 2 hydrogen bonds.',
      'Drag and pair Guanine (G) to Cytosine (C) via 3 hydrogen bonds.'
    ],
    procedureAr: [
      'راقب هيكل السكر والفوسفات المتعاكس الذي يشكل حافتي السلم اللولبي.',
      'اسحب واقرن قاعدة الأدنين (A) مع الثايمين (T) برابطتين هيدروجينيتين.',
      'اسحب واقرن قاعدة الجوانين (G) مع السيتوسين (C) بثلاث روابط هيدروجينية.'
    ],
    explanationEn: 'DNA (Deoxyribonucleic Acid) carries the genetic instructions for all living organisms. Discovered structurally by Watson, Crick, and Franklin, its specificity relies on Chargaff’s complementary base-pairing rules (A binds to T; C binds to G).',
    explanationAr: 'الحمض النووي الريبوزي منقوص الأكسجين (DNA) يحمل الشفرة الوراثية لكافة الكائنات الحية. اكتشف تركيبه واتسون وكريك وفرانكلين؛ ويعتمد على قواعد شارجاف لتكامل القواعد: A يرتبط مع T، و G يرتبط مع C.',
    observationsEn: [
      'Adenine only bonds with Thymine (A-T)',
      'Cytosine only bonds with Guanine (C-G)',
      'The double helix maintains a constant width due to one purine pairing with one pyrimidine'
    ],
    observationsAr: [
      'الأدنين يرتبط حصراً بالثايمين (A مع T)',
      'السيتوسين يرتبط حصراً بالجوانين (C مع G)',
      'يحافظ اللولب على قطر ثابت لأن قاعدة ثنائية الحلقة (بيورين) تقترن دائماً بقاعدة أحادية الحلقة (بيريميدين)'
    ],
    conclusionEn: 'Complementary base pairing ensures that genetic information can be replicated with near-flawless fidelity.',
    conclusionAr: 'تكامل القواعد النيتروجينية يضمن تضاعف الشفرة الوراثية بدقة فائقة عند انقسام الخلايا.',
    simType: 'dna-pairing',
    quiz: [
      {
        questionEn: 'In a DNA molecule, which nitrogenous base pairs with Adenine (A)?',
        questionAr: 'في جزيء الـ DNA، أي القواعد النيتروجينية ترتبط مع الأدنين (A)؟',
        optionsEn: ['Thymine (T)', 'Cytosine (C)', 'Guanine (G)', 'Uracil (U)'],
        optionsAr: ['الثايمين (T)', 'السيتوسين (C)', 'الجوانين (G)', 'اليوراسيل (U)'],
        correctIndex: 0,
        explanationEn: 'Adenine forms two hydrogen bonds exclusively with Thymine in DNA.',
        explanationAr: 'يرتبط الأدنين دائماً برابطتين هيدروجينيتين مع الثايمين في شريط الـ DNA.'
      }
    ]
  },
  {
    id: 'bio-food-chain',
    category: 'biology',
    titleEn: 'Food Chain & Ecosystem Dynamics',
    titleAr: 'السلسلة الغذائية وتوازن النظام البيئي',
    objectiveEn: 'Simulate the flow of trophic energy and ecological equilibrium between producers, primary consumers, secondary consumers, and apex predators.',
    objectiveAr: 'محاكاة تدفق الطاقة الغذائية والتوازن البيئي بين المنتجات والمستهلكات الأولية والمفترسات.',
    materialsEn: ['Ecosystem simulation grid (Grass, Grasshoppers, Frogs, Hawks)', 'Population density controls', 'Disruption toggles (Drought, Overhunting)'],
    materialsAr: ['شبكة محاكاة النظام البيئي (نباتات، جراد، ضفادع، صقور)', 'مؤشرات التعداد السكاني للكائنات', 'أحداث بيئية مفاجئة (الجفاف، الصيد الجائر)'],
    safetyEn: ['Ecological balance simulation'],
    safetyAr: ['محاكاة بيئية تفاعلية'],
    procedureEn: [
      'Establish a stable food chain: Sunlight → Grass (Producer) → Grasshopper (Herbivore) → Frog (Carnivore) → Hawk (Apex).',
      'Simulate overhunting of hawks and observe the explosion of the frog population leading to grasshopper collapse.',
      'Restore natural balance and analyze the 10% energy transfer pyramid rule.'
    ],
    procedureAr: [
      'ابنِ سلسلة غذائية متزنة: شمس ← حشائش (منتج) ← جراد (عاشب) ← ضفدع (آكل لحوم) ← صقر (مفترس قمة).',
      'حاكي الصيد الجائر للصقور وشاهد كيف يتكاثر الضفادع بشكل هائل مما يقضي على الجراد ويضر بالنظام.',
      'أعد التوازن البيئي واستكشف هرم الطاقة وقاعدة انتقال 10% فقط من الطاقة لكل مستوى أعلى.'
    ],
    explanationEn: 'Energy enters ecosystems via solar radiation captured by autotrophic producers. As energy ascends trophic levels, roughly 90% is dissipated as metabolic heat and waste, leaving only ~10% for the subsequent level.',
    explanationAr: 'تدخل الطاقة النظام البيئي عبر أشعة الشمس التي تلتقطها النباتات المنتجة. وعند انتقال الطاقة من مستوى لآخر يُفقد نحو 90% منها كحرارة ونشاط حيوي، ولا يصل للمستوى الأعلى سوى 10% تقريباً.',
    observationsEn: [
      'Removing apex predators causes boom-and-bust cycles in lower populations',
      'The biomass of producers must vastly exceed that of top carnivores',
      'Ecosystem balance relies on intricate multi-species checks and balances'
    ],
    observationsAr: [
      'إزالة المفترس الأكبر يسبب اضطراباً وانفجاراً في أعداد المستهلكات الأدنى ثم انهيارها',
      'الكتلة الحيوية للمنتجات لابد أن تكون أكبر بكثير من كتلة المفترسات في القمة',
      'التوازن البيئي يعتمد على شبكة متداخلة من العلاقات الحيوية المتوازنة'
    ],
    conclusionEn: 'All living organisms in an ecosystem are interdependent; protecting biodiversity safeguards ecosystem resilience.',
    conclusionAr: 'جميع الكائنات في النظام البيئي مترابطة معاً، وحماية التنوع البيولوجي هي صمام الأمان لاستقرار كوكب الأرض.',
    simType: 'food-chain',
    quiz: [
      {
        questionEn: 'Approximately what percentage of energy is transferred from one trophic level to the next in a food chain?',
        questionAr: 'ما هي النسبة التقريبية للطاقة التي تنتقل من مستوى غذائي إلى المستوى الذي يليه في السلسلة؟',
        optionsEn: ['10%', '50%', '90%', '100%'],
        optionsAr: ['10% فقط', '50%', '90%', '100% بالكامل'],
        correctIndex: 0,
        explanationEn: 'The 10% Rule dictates that ~90% of energy is lost as heat, leaving 10% to the next level.',
        explanationAr: 'وفقاً لقانون العشرة بالمائة البيئي، يفقد الكائن 90% من الطاقة كحرارة ويبقى 10% للمفترس.'
      }
    ]
  }
];

export const HOME_ACTIVITIES: HomeActivity[] = [
  {
    id: 'home-cabbage-lab',
    titleEn: 'Kitchen pH Chemist (Red Cabbage Testing)',
    titleAr: 'عالم الكيمياء في المطبخ (كاشف الكرنب المنزلي)',
    category: 'Chemistry at Home',
    estimatedTime: '20 minutes',
    materialsEn: ['Red cabbage leaves', 'Warm tap water', 'Lemon juice', 'Vinegar', 'Baking soda', 'Soap water', 'Clear cups'],
    materialsAr: ['أوراق ملفوف أحمر', 'ماء دافئ من الصنبور', 'عصير ليمونة', 'ملعقة خل أبيض', 'ملعقة بيكربونات صوديوم', 'ماء صابون', 'أكواب شفافة'],
    safetyEn: 'Non-toxic household activity. Adult supervision recommended when handling warm water.',
    safetyAr: 'نشاط منزلي آمن وغير سام. يُنصح بإشراف أحد الوالدين عند سكب الماء الدافئ.',
    stepsEn: [
      'Soak shredded red cabbage in warm water for 10 minutes to obtain purple liquid.',
      'Pour purple water into 4 transparent drinking glasses.',
      'Add lemon juice to Cup 1 (turns vibrant red/pink).',
      'Add baking soda to Cup 2 (turns blue-green).',
      'Snap a photo of your colorful rainbow row and record observations!'
    ],
    stepsAr: [
      'انقع أوراق الملفوف الأحمر في ماء دافئ 10 دقائق للحصول على سائل بنفسجي نقي.',
      'اسكب السائل البنفسجي بالتساوي في 4 أكواب زجاجية شفافة.',
      'أضف عصير الليمون للكوب الأول وشاهد لونه الوردي الساحر.',
      'أضف ملعقة صودا الخبز للكوب الثاني وشاهد تحوله للون الأخضر المزرق.',
      'التقط صورة لصف الأكواب الملونة وسجل ملاحظاتك في دفتر العلوم!'
    ],
    scienceEn: 'Natural anthocyanin pigment molecules change color reflecting acidic (H⁺) or alkaline (OH⁻) concentrations.',
    scienceAr: 'صبغة الأنثوسيانين الطبيعية تغير لونها استجابة لدرجة الحموضة أو القلوية.',
    badgeName: 'Kitchen Chemist'
  },
  {
    id: 'home-density-column',
    titleEn: 'Seven-Layer Density Rainbow',
    titleAr: 'قوس قزح الكثافة المنزلي (برج السوائل السبعة)',
    category: 'Physics at Home',
    estimatedTime: '25 minutes',
    materialsEn: ['Honey or maple syrup', 'Dish soap', 'Water with food coloring', 'Cooking oil', 'Rubbing alcohol', 'Tall clear glass or jar'],
    materialsAr: ['عسل نحل أو شربات ثقيل', 'سائل غسيل الأطباق', 'ماء مضاف إليه ملون طعام', 'زيت طهي', 'كحول طبي', 'كوب زجاجي طويل أو برطمان'],
    safetyEn: 'Pour liquids very slowly down the inner glass wall so layers stay crisp.',
    safetyAr: 'اسكب السوائل ببطء شديد على جدار الكوب الداخلي حتى لا تختلط الطبقات.',
    stepsEn: [
      'Pour honey first into the bottom of the tall glass.',
      'Tilt the glass slightly and slowly pour dish soap down the side.',
      'Carefully layer colored water, then vegetable oil, and finally alcohol.',
      'Drop a small plastic bead and a grape; see where each comes to rest!'
    ],
    stepsAr: [
      'اسكب العسل أولاً في قاع الكوب الطويل كأثقل سائل.',
      'أمل الكوب قليلاً واسكب صابون الأطباق برفق متناهٍ على الجدار الداخلي.',
      'أضف الماء الملون، ثم زيت الطهي، وأخيراً الكحول الطبي.',
      'أسقط حبة عنب وغطاء زجاجة بلاستيكي وراقب أين يستقر كل منها!'
    ],
    scienceEn: 'Denser liquids have more mass per milliliter and settle at the bottom; lighter liquids float on top.',
    scienceAr: 'السوائل الأكثر كثافة تحتوي على كتلة أكبر في نفس الحجم وتستقر في الأسفل، بينما تطفو السوائل الأخف.',
    badgeName: 'Density Master'
  },
  {
    id: 'home-pendulum-investigation',
    titleEn: 'String & Washer Pendulum Clock',
    titleAr: 'ساعة البندول المعلقة بخيط وحلقة معدنية',
    category: 'Physics at Home',
    estimatedTime: '15 minutes',
    materialsEn: ['1 meter piece of sewing thread or yarn', 'Metal washer, key, or small nut', 'Tape and ruler', 'Phone stopwatch'],
    materialsAr: ['خيط حياكة أو صوف بطول متر واحد', 'حلقة معدنية أو مفتاح معدني ثقيل', 'شريط لاصق ومسطرة', 'ساعة إيقاف الهاتف'],
    safetyEn: 'Safe simple physics experiment.',
    safetyAr: 'تجربة فيزيائية آمنة وسهلة التنفيذ في غرفتك.',
    stepsEn: [
      'Tie the key or washer securely to the end of the thread.',
      'Tape the other end to the edge of a table with 80 cm hanging free.',
      'Pull the bob back 10 cm, release, and time 10 full back-and-forth swings.',
      'Shorten the thread to 20 cm and time again. Notice the massive speed difference!'
    ],
    stepsAr: [
      'اربط المفتاح أو الثقل بإحكام في نهاية الخيط.',
      'ثبت الطرف الآخر بشريط لاصق على حافة طاولة بحيث يتدلى الخيط بطول 80 سم.',
      'اسحب المفتاح 10 سم للأمام واتركه يتأرجح، وقس زمن 10 دورات كاملة.',
      'قصّر الخيط ليصبح 20 سم وقس الزمن مرة أخرى، ستلاحظ تسارعاً كبيراً في النبض!'
    ],
    scienceEn: 'Shorter pendulums have a shorter period of oscillation, independent of the bob weight.',
    scienceAr: 'البندول الأقصر يمتلك زمناً دورياً أقصر ويتأرجح أسرع، ولا تتأثر سرعته بوزن المفتاح المعلق.',
    badgeName: 'Timekeeper Physicist'
  },
  {
    id: 'home-plant-capillary',
    titleEn: 'Walking Water & Capillary Action',
    titleAr: 'الماء السائر والخاصية الشعرية في النبات',
    category: 'Biology at Home',
    estimatedTime: '30 minutes (observe over 2 hours)',
    materialsEn: ['Paper towels (kitchen roll)', '3 clear cups', 'Red and blue food coloring', 'Water'],
    materialsAr: ['مناديل ورقية سميكة', '3 أكواب شفافة متجاورة', 'ملون طعام أحمر وأزرق', 'ماء'],
    safetyEn: 'Clean up any accidental water spills promptly.',
    safetyAr: 'امسح أي قطرات ماء مسكوبة للحفاظ على نظافة المكان.',
    stepsEn: [
      'Place 3 cups side-by-side. Fill cup 1 with red water, leave cup 2 empty, fill cup 3 with blue water.',
      'Fold paper towels into strips and bridge them from cup 1 into cup 2, and cup 3 into cup 2.',
      'Watch water climb up against gravity via capillary action and blend in the center cup!'
    ],
    stepsAr: [
      'ضع 3 أكواب متجاورة: املأ الأول بماء أحمر، واترك الأوسط فارغاً، واملأ الثالث بماء أزرق.',
      'اطوِ المناديل في صورة شرائط وضع طرفاً في الكوب الملون والآخر في الكوب الفارغ كجسر.',
      'شاهد الماء وهو يصعد لأعلى ضد الجاذبية بالخاصية الشعرية ويختلط في الكوب الأوسط ليكون لوناً بنفسجياً!'
    ],
    scienceEn: 'Cohesion and adhesion forces pull water molecules through microscopic cellulose fibers, identical to how tall trees draw water from roots to leaves.',
    scienceAr: 'قوى التماسك والالتصاق تسحب جزيئات الماء داخل الألياف الدقيقة بنفس الطريقة التي ترفع بها الأشجار الماء من الجذور للأوراق.',
    badgeName: 'Plant Biologist'
  }
];
