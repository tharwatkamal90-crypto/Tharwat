const translations = {
  de: {
    heroTitle: 'Entdecke deine schönste Haut',
    heroSubtitle:
      'Personalisierte Pflegepläne, Rezepte und Produktempfehlungen – alles an einem Ort.',
    heroCTA: 'Starte den Hauttyp-Test',
    heroCTA2: 'Erstelle dein Programm',
    testTitle: 'Hauttyp-Test',
    testIntro: 'Beantworte drei Fragen und erfahre, welches Pflegeprogramm am besten zu dir passt.',
    choose: 'Bitte wählen',
    question1: 'Wie fühlt sich deine Haut nach der Reinigung an?',
    q1a1: 'Spannend und trocken',
    q1a2: 'Glänzend und fettig',
    q1a3: 'T-Zone glänzt, Wangen sind normal',
    q1a4: 'Rötet sich schnell',
    question2: 'Wie reagiert deine Haut auf neue Produkte?',
    q2a1: 'Reagiert schnell mit Rötungen',
    q2a2: 'Verstopft Poren / Pickel',
    q2a3: 'Benötigt zusätzliche Feuchtigkeit',
    q2a4: 'Manchmal ok, manchmal nicht',
    question3: 'Was ist dein größtes Hautziel?',
    q3a1: 'Mehr Glow',
    q3a2: 'Weniger Ölglanz',
    q3a3: 'Weniger Irritationen',
    q3a4: 'Mehr Feuchtigkeit',
    testSubmit: 'Ergebnis anzeigen',
    programTitle: 'Pflegeprogramme nach Hauttyp',
    recipeTitle: 'Natürliche Schönheitsrezepte',
    routineTitle: 'Tägliche Routine-Pläne',
    productTitle: 'Produkt-Highlights',
    productSubtitle: 'Entdecke internationale Bestseller und deutsche Lieblingsmarken.',
    customTitle: 'Stelle dein persönliches Pflegeprogramm zusammen',
    customIntro:
      'Kombiniere Schritte, Produkte und Anwendungen, um deinen perfekten Glow-Plan zu erstellen.',
    customSkinType: 'Dein Hauttyp',
    customFocus: 'Worauf möchtest du dich fokussieren?',
    customFrequency: 'Wie viele Tage pro Woche?',
    customNotes: 'Besondere Wünsche oder Produkte',
    customSubmit: 'Programm generieren',
    focusHydration: 'Feuchtigkeit',
    focusPurifying: 'Poren klären',
    focusSoothing: 'Beruhigung',
    focusAntiAging: 'Anti-Aging',
    skinDry: 'Trocken',
    skinOily: 'Ölig',
    skinCombo: 'Kombiniert',
    skinSensitive: 'Sensibel',
    skinAll: 'Alle Hauttypen',
    footer: 'GlowGuide – Inspiriert von Beauty-Ritualen aus aller Welt.',
    testResult: {
      dry: 'Deine Haut benötigt intensive Feuchtigkeit. Verwende cremige Reiniger, Hyaluron-Seren und reichhaltige Nachtpflege.',
      oily: 'Deine Haut liebt Ausgleich. Leichte Geltexturen, Niacinamid und Tonmasken helfen beim Mattieren.',
      combo:
        'Kombinierte Haut braucht Balance: sanfte Reinigung, leichte Lotionen und gezielte Pflege in der T-Zone.',
      sensitive:
        'Deine Haut ist sensibel. Setze auf beruhigende Wirkstoffe wie Panthenol, Centella und alkoholfreie Produkte.',
      radiance: 'Fokus auf Glow: Peelings mit PHA/BHA, Vitamin-C-Serum und viel SPF.',
      balance: 'Mattierende Seren, ausgleichende Toner und leichte Feuchtigkeit schenken Balance.',
      calm: 'Beruhigende Masken, entzündungshemmende Wirkstoffe und SPF ohne Duftstoffe sind ideal.',
      hydration: 'Hydratisiere mit Hyaluron, Ceramiden und okklusiven Balms über Nacht.',
    },
    planResultTitle: 'Dein GlowGuide Pflegeplan',
    planFrequency: (days) => `Empfohlene Anwendung: ${days} Tage pro Woche`,
    planFocus: 'Fokusbereiche',
    planNotes: 'Persönliche Notizen',
    planEmptyFocus: 'Keine besonderen Schwerpunkte ausgewählt.',
  },
  ar: {
    heroTitle: 'اكتشفي أجمل نسخة من بشرتك',
    heroSubtitle: 'خطط عناية شخصية، وصفات، ومعلومات عن المنتجات في مكان واحد.',
    heroCTA: 'ابدئي اختبار نوع البشرة',
    heroCTA2: 'أنشئي برنامجك',
    testTitle: 'اختبار نوع البشرة',
    testIntro: 'أجيبي عن ثلاثة أسئلة لتتعرفي على برنامج العناية الأنسب لك.',
    choose: 'يرجى الاختيار',
    question1: 'كيف تشعر بشرتك بعد التنظيف؟',
    q1a1: 'مشدوة وجافة',
    q1a2: 'لامعة ودهنية',
    q1a3: 'منطقة الأنف والجبين لامعة والخدود عادية',
    q1a4: 'تحمر بسرعة',
    question2: 'كيف تتفاعل بشرتك مع المنتجات الجديدة؟',
    q2a1: 'تحمر أو تتهيج بسرعة',
    q2a2: 'تسد المسام أو تسبب حبوبًا',
    q2a3: 'تحتاج إلى ترطيب إضافي',
    q2a4: 'أحيانًا جيدة وأحيانًا لا',
    question3: 'ما هو هدفك الأكبر لبشرتك؟',
    q3a1: 'إشراقة أكبر',
    q3a2: 'تقليل اللمعان الدهني',
    q3a3: 'تهدئة التهيجات',
    q3a4: 'زيادة الترطيب',
    testSubmit: 'عرض النتيجة',
    programTitle: 'برامج العناية حسب نوع البشرة',
    recipeTitle: 'وصفات جمال طبيعية',
    routineTitle: 'خطط الروتين اليومي',
    productTitle: 'أبرز المنتجات',
    productSubtitle: 'اكتشفي أفضل العلامات العالمية والألمانية.',
    customTitle: 'صممي برنامج العناية الخاص بك',
    customIntro: 'ادمجي الخطوات والمنتجات لتحصلي على خطة إشراقة متكاملة.',
    customSkinType: 'نوع بشرتك',
    customFocus: 'ما الجوانب التي تودين التركيز عليها؟',
    customFrequency: 'كم يومًا في الأسبوع؟',
    customNotes: 'ملاحظات أو منتجات مفضلة',
    customSubmit: 'إنشاء البرنامج',
    focusHydration: 'الترطيب',
    focusPurifying: 'تنقية المسام',
    focusSoothing: 'التهدئة',
    focusAntiAging: 'مكافحة الشيخوخة',
    skinDry: 'جافة',
    skinOily: 'دهنية',
    skinCombo: 'مختلطة',
    skinSensitive: 'حساسة',
    skinAll: 'كل أنواع البشرة',
    footer: 'غلوغايد – مستوحى من طقوس الجمال حول العالم.',
    testResult: {
      dry: 'بشرتك تحتاج إلى ترطيب مكثف. استخدمي منظفات كريمية، سيروم الهيالورون، وكريمات ليلية مغذية.',
      oily: 'بشرتك تحب التوازن. استخدمي الجل الخفيف، النياسيناميد، وأقنعة الطين للتحكم باللمعان.',
      combo:
        'البشرة المختلطة تحتاج إلى توازن: تنظيف لطيف، ترطيب خفيف، وعناية خاصة بمنطقة الـ T.',
      sensitive: 'بشرتك حساسة. اختاري مكونات مهدئة مثل البانثينول، السنتيلا، ومنتجات خالية من الكحول.',
      radiance: 'للحصول على إشراقة: قشري ببساطة باستخدام أحماض لطيفة، سيروم فيتامين C، ولا تنسي واقي الشمس.',
      balance: 'سيرومات للتحكم بالزيوت، تونر متوازن، وترطيب خفيف يمنحك التوازن.',
      calm: 'أقنعة مهدئة ومكونات مضادة للالتهاب وواقي شمس بدون عطور هي الأنسب.',
      hydration: 'ركزي على الهيالورون، السيراميدات، وطبقات ترطيب ليلية لحبس الرطوبة.',
    },
    planResultTitle: 'برنامج العناية الخاص بك',
    planFrequency: (days) => `ينصح بالالتزام بـ${days} أيام في الأسبوع`,
    planFocus: 'مجالات التركيز',
    planNotes: 'ملاحظاتك الخاصة',
    planEmptyFocus: 'لم يتم اختيار مجالات تركيز.',
  },
};

const carePrograms = {
  dry: {
    title: { de: 'Glow Repair', ar: 'إشراقة مغذية' },
    badge: { de: 'Trocken', ar: 'جافة' },
    steps: [
      { de: 'Sanfter Reinigungsbalm', ar: 'منظف بلسم لطيف' },
      { de: 'Essenz mit Hyaluron & Panthenol', ar: 'إيسنس بالهيالورون والبنثينول' },
      { de: 'Ceramid-Creme + Nachtöl', ar: 'كريم بالسيراميد + زيت ليلي' },
    ],
    tip: {
      de: 'Trage zweimal wöchentlich eine Schlafmaske auf, um Feuchtigkeitsdepots zu füllen.',
      ar: 'استخدمي قناعًا ليليًا مرتين أسبوعيًا لتخزين الترطيب.',
    },
  },
  oily: {
    title: { de: 'Matte Balance', ar: 'توازن مطفي' },
    badge: { de: 'Ölig', ar: 'دهنية' },
    steps: [
      { de: 'Gelreiniger mit BHA', ar: 'منظف جل بأحماض الساليسيليك' },
      { de: 'Niacinamid-Serum & leichter Toner', ar: 'سيروم نياسيناميد وتونر خفيف' },
      { de: 'Gel-Creme + SPF 50 mattierend', ar: 'كريم جل + واقي شمس مطفي' },
    ],
    tip: {
      de: 'Wöchentlich Tonerde-Maske zur Porenverfeinerung verwenden.',
      ar: 'استخدمي قناع الطين أسبوعيًا لتصغير المسام.',
    },
  },
  combo: {
    title: { de: 'Balance Ritual', ar: 'طقس التوازن' },
    badge: { de: 'Kombiniert', ar: 'مختلطة' },
    steps: [
      { de: 'Schäumender Cleanser, nur T-Zone doppelt reinigen', ar: 'منظف رغوي مع تنظيف مزدوج لمنطقة الـ T' },
      { de: 'Feuchtigkeitsspray + Gel-Lotion', ar: 'رذاذ مرطب + لوشن جل' },
      { de: 'Zonenspezifische Pflege: Mattierende Emulsion & reichhaltige Creme', ar: 'عناية حسب المنطقة: مستحلب مطفي وكريم مغذي' },
    ],
    tip: {
      de: 'Multi-Masking anwenden: Tonerde in der T-Zone, Feuchtigkeitsmaske auf den Wangen.',
      ar: 'قناع متعدد: طين للـ T، وترطيب للخدود.',
    },
  },
  sensitive: {
    title: { de: 'Calm Comfort', ar: 'راحة مهدئة' },
    badge: { de: 'Sensibel', ar: 'حساسة' },
    steps: [
      { de: 'Mizellarwasser ohne Duftstoffe', ar: 'ماء ميسيلار خالٍ من العطور' },
      { de: 'Serum mit Centella & Madecassosid', ar: 'سيروم بالسنتيلا والماديكاسوسيد' },
      { de: 'Barriereschutz-Creme + SPF mineralisch', ar: 'كريم يحمي الحاجز + واقي شمس معدني' },
    ],
    tip: {
      de: 'Produkte maximal 3 auf einmal schichten und auf Alkohol verzichten.',
      ar: 'لا تكثري من المنتجات (3 كحد أقصى) وتجنبي الكحول.',
    },
  },
};

const recipes = [
  {
    id: 'honey-mask',
    title: { de: 'Honig & Hafer Maske', ar: 'قناع العسل والشوفان' },
    skinTypes: ['dry', 'sensitive'],
    description: {
      de: 'Beruhigt und spendet intensiv Feuchtigkeit. 1 EL Honig + 1 EL Haferflocken + etwas Rosenwasser.',
      ar: 'يهدئ البشرة ويرطبها بعمق: ملعقة عسل + ملعقة شوفان + رشة ماء ورد.',
    },
  },
  {
    id: 'green-tea',
    title: { de: 'Matcha Glow Toner', ar: 'تونر الشاي الأخضر' },
    skinTypes: ['oily', 'combo'],
    description: {
      de: 'Antioxidativ und klärend: Matcha aufbrühen, abkühlen lassen und mit Aloe Vera mischen.',
      ar: 'مضاد للأكسدة ومنقٍ: انقعي الماتشا، اتركيها لتبرد، واخلطيها مع الألوفيرا.',
    },
  },
  {
    id: 'rose-mist',
    title: { de: 'Rosenwasser-Glow Mist', ar: 'رذاذ الورد المتألق' },
    skinTypes: ['all'],
    description: {
      de: 'Erfrischt zwischendurch: Rosenwasser + 2 Tropfen Jojobaöl in einer Sprühflasche mischen.',
      ar: 'منعش خلال اليوم: ماء الورد + قطرتان من زيت الجوجوبا في بخاخ.',
    },
  },
];

const routines = [
  {
    id: 'morning',
    title: { de: 'Morgenroutine', ar: 'روتين الصباح' },
    steps: {
      de: ['Reinigung', 'Serum', 'Augenpflege', 'Feuchtigkeitscreme', 'SPF'],
      ar: ['تنظيف', 'سيروم', 'عناية بالعين', 'ترطيب', 'واقي شمس'],
    },
    tip: {
      de: 'Für extra Glow Vitamin C integrieren.',
      ar: 'لإشراقة إضافية أضيفي فيتامين C.',
    },
  },
  {
    id: 'evening',
    title: { de: 'Abendroutine', ar: 'روتين المساء' },
    steps: {
      de: ['Double Cleansing', 'Peeling (2-3x/Woche)', 'Serum', 'Creme oder Öl'],
      ar: ['تنظيف مزدوج', 'تقشير (2-3 مرات أسبوعيًا)', 'سيروم', 'كريم أو زيت'],
    },
    tip: {
      de: 'Retinol langsam einschleichen und mit Feuchtigkeit kombinieren.',
      ar: 'استخدمي الريتينول تدريجيًا مع طبقات ترطيب.',
    },
  },
  {
    id: 'weekend',
    title: { de: 'Weekend Spa', ar: 'سبا نهاية الأسبوع' },
    steps: {
      de: ['Sanftes Peeling', 'Maske nach Hauttyp', 'Massage mit Gua Sha', 'Beruhigendes Serum'],
      ar: ['تقشير لطيف', 'قناع حسب نوع البشرة', 'تدليك بغوا شا', 'سيروم مهدئ'],
    },
    tip: {
      de: 'Nutze die Zeit für Selfcare-Rituale mit Duftkerzen.',
      ar: 'استمتعي بطقوس استرخاء مع الشموع العطرية.',
    },
  },
];

const products = [
  {
    brand: 'Augustinus Bader',
    origin: 'DE',
    type: { de: 'The Rich Cream', ar: 'ذا ريتش كريم' },
    focus: ['hydration', 'antiaging'],
  },
  {
    brand: 'Dr. Barbara Sturm',
    origin: 'DE',
    type: { de: 'Calming Serum', ar: 'سيروم مهدئ' },
    focus: ['soothing'],
  },
  {
    brand: 'La Roche-Posay',
    origin: 'FR',
    type: { de: 'Effaclar Duo+', ar: 'إيفاكلار ديو+' },
    focus: ['purifying'],
  },
  {
    brand: 'The Ordinary',
    origin: 'CA',
    type: { de: 'Niacinamide 10% + Zinc 1%', ar: 'نياسيناميد 10% + زنك 1%' },
    focus: ['purifying', 'balance'],
  },
  {
    brand: 'Weleda',
    origin: 'DE',
    type: { de: 'Skin Food Light', ar: 'سكين فود لايت' },
    focus: ['hydration'],
  },
  {
    brand: 'Huda Beauty',
    origin: 'UAE',
    type: { de: 'Yo Glow Enzyme Scrub', ar: 'مقشر يو غلو' },
    focus: ['radiance'],
  },
];

const focusDetails = {
  hydration: {
    de: 'Layering von Hyaluron, Ceramiden und Barriereschutz.',
    ar: 'طبقات من الهيالورون والسيراميدات لحماية الحاجز.',
  },
  purifying: {
    de: 'Sanfte Peelings und Tonerde helfen bei klarer Haut.',
    ar: 'التقشير اللطيف وأقنعة الطين لتنقية البشرة.',
  },
  soothing: {
    de: 'Panthenol, Centella und kühle Kompressen beruhigen die Haut.',
    ar: 'البانثينول والسنتيلا والكمادات الباردة لتهدئة البشرة.',
  },
  antiaging: {
    de: 'Retinoide langsam einführen und mit SPF kombinieren.',
    ar: 'استخدمي الريتينويدات تدريجيًا مع واقي الشمس.',
  },
  balance: {
    de: 'Niacinamid und Zink reduzieren Ölglanz und Unreinheiten.',
    ar: 'النياسيناميد والزنك يقللان لمعان الزيت والشوائب.',
  },
  radiance: {
    de: 'Vitamin C und sanfte Enzyme sorgen für Leuchtkraft.',
    ar: 'فيتامين C والإنزيمات اللطيفة يمنحان الإشراقة.',
  },
};

const directionMap = { de: 'ltr', ar: 'rtl' };
let currentLang = 'de';

const i18nElements = document.querySelectorAll('[data-i18n]');
const langButtons = document.querySelectorAll('.language-toggle button');

const renderPrograms = () => {
  const container = document.getElementById('program-grid');
  container.innerHTML = '';
  Object.entries(carePrograms).forEach(([key, program]) => {
    const card = document.createElement('article');
    card.className = 'program-card';
    card.innerHTML = `
      <span class="badge">${program.badge[currentLang]}</span>
      <h3>${program.title[currentLang]}</h3>
      <ul class="tag-list">
        ${program.steps.map((step) => `<li>${step[currentLang]}</li>`).join('')}
      </ul>
      <p>${program.tip[currentLang]}</p>
    `;
    container.appendChild(card);
  });
};

const renderRecipes = () => {
  const container = document.getElementById('recipe-grid');
  container.innerHTML = '';
  recipes.forEach((recipe) => {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    const skinLabel = recipe.skinTypes
      .map((type) => translations[currentLang][`skin${capitalize(type)}`] || translations[currentLang].skinCombo)
      .join(' · ');
    card.innerHTML = `
      <span class="badge">${skinLabel}</span>
      <h3>${recipe.title[currentLang]}</h3>
      <p>${recipe.description[currentLang]}</p>
    `;
    container.appendChild(card);
  });
};

const renderRoutines = () => {
  const container = document.getElementById('routine-grid');
  container.innerHTML = '';
  routines.forEach((routine) => {
    const card = document.createElement('article');
    card.className = 'routine-card';
    card.innerHTML = `
      <h3>${routine.title[currentLang]}</h3>
      <ul class="tag-list">
        ${routine.steps[currentLang].map((step) => `<li>${step}</li>`).join('')}
      </ul>
      <p>${routine.tip[currentLang]}</p>
    `;
    container.appendChild(card);
  });
};

const renderProducts = () => {
  const container = document.getElementById('product-grid');
  container.innerHTML = '';
  products.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <span class="badge">${product.origin}</span>
      <h3>${product.brand}</h3>
      <p>${product.type[currentLang]}</p>
      <ul class="tag-list">
        ${product.focus
          .map((focus) => `<li>${focusDetails[focus][currentLang]}</li>`)
          .join('')}
      </ul>
    `;
    container.appendChild(card);
  });
};

const updateTexts = () => {
  const langContent = translations[currentLang];
  document.documentElement.lang = currentLang === 'de' ? 'de' : 'ar';
  document.documentElement.dir = directionMap[currentLang];
  i18nElements.forEach((el) => {
    const key = el.dataset.i18n;
    const value = langContent[key];
    if (typeof value === 'string') {
      el.textContent = value;
    }
  });
  renderPrograms();
  renderRecipes();
  renderRoutines();
  renderProducts();
  updatePlaceholders();
};

const updatePlaceholders = () => {
  const notes = document.getElementById('plan-notes');
  if (currentLang === 'ar') {
    notes.placeholder = 'مثال: سيروم فيتامين سي صباحًا';
  } else {
    notes.placeholder = 'z. B. Vitamin C Serum morgens';
  }
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLang) {
      currentLang = lang;
      langButtons.forEach((button) => button.classList.toggle('active', button === btn));
      langButtons.forEach((button) => button.setAttribute('aria-pressed', button === btn));
      updateTexts();
    }
  });
});

const form = document.getElementById('skin-test-form');
const resultBox = document.getElementById('test-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const answers = [data.get('q1'), data.get('q2')];
  const counts = answers.reduce((acc, value) => {
    if (!value) return acc;
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'combo';
  const goal = data.get('q3');
  const langContent = translations[currentLang];
  const messages = [langContent.testResult[dominant]];
  if (goal && langContent.testResult[goal]) {
    messages.push(langContent.testResult[goal]);
  }
  resultBox.innerHTML = `<h3>${carePrograms[dominant].title[currentLang]}</h3><p>${messages.join('<br/><br/>')}</p>`;
  resultBox.classList.add('active');
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const planForm = document.getElementById('custom-plan-form');
const planResult = document.getElementById('custom-plan-result');

planForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const langContent = translations[currentLang];
  const skinType = document.getElementById('plan-skin-type').value;
  const frequency = document.getElementById('plan-frequency').value;
  const notes = document.getElementById('plan-notes').value.trim();
  const focus = Array.from(planForm.querySelectorAll('input[type="checkbox"]:checked')).map(
    (input) => input.value
  );

  const focusList = focus.length
    ? `<ul class="tag-list">${focus
        .map((item) => `<li>${focusDetails[item][currentLang]}</li>`)
        .join('')}</ul>`
    : `<p>${langContent.planEmptyFocus}</p>`;

  const routine = carePrograms[skinType];
  const steps = routine
    ? `<ul class="tag-list">${routine.steps
        .map((step) => `<li>${step[currentLang]}</li>`)
        .join('')}</ul>`
    : '';

  planResult.innerHTML = `
    <h3>${langContent.planResultTitle}</h3>
    <p><strong>${translations[currentLang][`skin${capitalize(skinType)}`] || ''}</strong></p>
    <p>${langContent.planFrequency(frequency)}</p>
    ${steps}
    <h4>${langContent.planFocus}</h4>
    ${focusList}
    ${notes ? `<p><strong>${langContent.planNotes}:</strong> ${notes}</p>` : ''}
  `;
  planResult.classList.add('active');
  planResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

updateTexts();
renderPrograms();
renderRecipes();
renderRoutines();
renderProducts();
