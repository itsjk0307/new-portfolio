const uz = {
  nav: {
    brand: "Jamshid",
    about: "Haqimda",
    experience: "Tajriba",
    projects: "Loyihalar",
    skills: "Ko‘nikmalar",
    contact: "Aloqa",
    allProjects: "Barcha loyihalar",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
  },
  hero: {
    name: "Jamshid Khaytbaev",
    role: "AI muhandisi va Full-Stack dasturchi",
    tagline:
      "Kompyuter ko‘rish, NLP va production darajasidagi AI ilovalariga e’tibor qarataman—model treningidan tortib API va zamonaviy veb-klientlargacha.",
    ctaProjects: "Loyihalarni ko‘rish",
    ctaContact: "Bog‘lanish",
    scrollHint: "Pastga suring",
  },
  about: {
    title: "Haqimda",
    lead:
      "Men tadqiqot uslubidagi tajriba va ishonchli dastur yetkazib berish o‘rtasida ko‘prik vazifasini bajaradigan AI muhandisi va full-stack dasturchisiman.",
    bullets: [
      {
        title: "Production AI",
        text: "CV/NLP uchun uzoqdan-uzoqqa zanjir: ma’lumot, trening, baholash, deploy va monitoring.",
      },
      {
        title: "Full-stack integratsiya",
        text: "React/TypeScript frontend va APIlar—modellarni qulay, kuzatiladigan va barqaror qiladi.",
      },
      {
        title: "Hamkorlik",
        text: "Aniq muloqot, iteratsiyali yetkazib berish va pragmatik trade-offlar.",
      },
      {
        title: "Sifat va UX",
        text: "Qulay interfeyslar, performancega e’tibor va xatolarni to‘g‘ri boshqarish.",
      },
    ],
    closing:
      "Qiyin masalalar, toza interfeyslar va productionda ishonchli dasturlarni yoqtiraman.",
  },
  experience: {
    title: "Tajriba",
    resume: "To‘liq rezyumeni ko‘rish",
    resumeUrl:
      "https://drive.google.com/file/d/1um1zw9LT1Zi8kQs-EYhjWdFkmR5xjYU6/view?usp=drive_link",
    items: [
      {
        id: "quazar",
        title: "AI muhandisi",
        company: "Quazar Inc.",
        period: "2025 fevral — 2025 iyun",
        description:
          "Hashamatli buyumlarni autentifikatsiya qilish va narxni bashorat qilish uchun AI modellarini ishlab chiqdim. Deep learning pipeline’larini qurdim va real vaqt qarorlari uchun veb-ilovalarga integratsiya qildim.",
        skills: [
          "TensorFlow",
          "PyTorch",
          "OpenCV",
          "Computer Vision",
          "Image Segmentation",
          "Deep Learning",
          "REST API",
          "Web Integration",
        ],
      },
      {
        id: "rainbow-intern",
        title: "Frontend dasturchi (intern)",
        company: "RainbowTech",
        period: "2023 mart — 2023 iyul",
        description:
          "Veb-loyihalar uchun interfeyslarni yaratdim va qo‘llab-quvvatladim. Katta dasturchilar bilan birga eng yaxshi amaliyotlarni o‘rgandim va interaktiv 3D tajribalarga hissa qo‘shdim.",
        skills: [
          "JavaScript",
          "React",
          "HTML5",
          "CSS3",
          "React Three Fiber",
          "Three.js",
          "R&D",
        ],
      },
      {
        id: "rainbow-researcher",
        title: "Frontend dasturchi-tadqiqotchi",
        company: "RainbowTech",
        period: "2023 iyul — 2024 sentabr",
        description:
          "Yetkazib berishni yaxshilash uchun zamonaviy frontend texnologiyalarini tadqiq qildim. Optimallashtirilgan UI, performance yaxshilanishi va masshtablanadigan arxitektura joriy etdim.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "TypeScript",
          "GraphQL",
          "Apollo Client",
          "MobX",
          "Git",
          "Responsive Design",
        ],
      },
    ],
  },
  projectsPage: {
    title: "Loyihalar",
    subtitle: "Kategoriya bo‘yicha ko‘ring. AI loyihalar birinchi o‘rinda.",
    backHome: "Bosh sahifaga",
    backProjects: "Loyihalar ro‘yxatiga",
  },
  projects: {
    title: "Tanlangan loyihalar",
    subtitle:
      "AI/ML, data science va full-stack veb bo‘yicha muammoga yo‘naltirilgan qisqa sharh—aniqlik va ta’sir uchun tartiblangan.",
    sectionAi: "AI va mashinali o‘qitish",
    sectionDs: "Data science",
    sectionWeb: "Veb-dasturlash",
    problemLabel: "Muammo",
    techLabel: "Texnologiyalar",
    demo: "Jonli demo",
    source: "GitHub",
    viewAll: "Barcha loyihalar",
    details: "Batafsil",
    items: {
      heartDisease: {
        title: "Yurak kasalligi bashorati",
        problem:
          "Shifokorlarga strukturalangan bemor ma’lumotidan tez va tushunarli skrining kerak—keyingi qadamlarni rejalashtirish va xavfni kamaytirish uchun.",
        problemShort:
          "Bemor belgilari bo‘yicha yurak kasalligi xavfini ML modellar bilan skrining qilish.",
      },
      customerChurn: {
        title: "Mijoz churn bashorati",
        problem:
          "Saqlab qolish jamoalariga xatti-harakat va shartnoma ma’lumotidan erta churn signal kerak—daromad yo‘qolishidan oldin.",
        problemShort:
          "Klassik ML va aniq metrikalar bilan churnni bashorat qilish.",
      },
      edaTitanic: {
        title: "Tadqiqotiy tahlil (Titanik)",
        problem:
          "Jadval ma’lumotlarini modelingdan oldin ishonchli grafik va gipotezalarga aylantirish.",
        problemShort:
          "Titanik datasetida omon qolish omillarini ochish uchun EDA va vizualizatsiya.",
      },
      loanEligibility: {
        title: "Kredit mosligi bashorati",
        problem:
          "Kredit mutaxassislariga noto‘g‘ri tasdiqlarni kamaytirish bilan nomzod xususiyatlaridan izchil va tekshiruvga mos signal kerak.",
        problemShort:
          "Xususiyat asosidagi tushunchalar bilan kredit mosligi klassifikatsiyasi.",
      },
      rainbowAi: {
        title: "RainbowTech AI platformasi",
        problem:
          "Maydondagi jamoalarga binoning inspeksiya ma’lumotidan avtomatik tuzilma bahosi, PDF hisobot va xarajat bahosi kerak edi.",
        problemShort:
          "Hisobot va xarajat bahosi bilan AI yordamida tuzilma diagnostikasi.",
      },
      rap3d: {
        title: "RAP 3D platforma",
        problem:
          "Foydalanuvchilarga silliq interaksiya, barqaror performance va uyg‘un UI tizimi bilan hamkorlik 3D muhiti kerak edi.",
        problemShort:
          "React va Three.js bilan real vaqt hamkorlik 3D platforma.",
      },
      rapFiles: {
        title: "RAP fayl boshqaruvi",
        problem:
          "Jamolarga xavfsiz ko‘p qurilmali fayl kirish, ilova ichida hujjat ko‘rish va ishonchli sinxron kerak edi.",
        problemShort:
          "PDF ko‘rish integratsiyasi bilan ko‘p platformali fayl boshqaruvi.",
      },
      greenShop: {
        title: "Green Shop",
        problem:
          "Barqarorlik brendiga tez sezilarli performance va responsive tartib bilan aniq landing tajribasi kerak edi.",
        problemShort:
          "Tailwind va minimal UI bilan ekologik landing.",
      },
      banking: {
        title: "Moliya boshqaruv platformasi",
        problem:
          "Foydalanuvchilarga balans, o‘tkazmalar va tranzaksiya tarixini aniq holat va fikr-mulohaza bilan ko‘rsatadigan ishonchli banking UI kerak edi.",
        problemShort:
          "Aniqlik va navigatsiyaga e’tibor qaratilgan responsive banking.",
      },
      vizzano: {
        title: "Vizzano ilovasi",
        problem:
          "Moda inventariga mobil qurilmada kuchli vizual va silliq ko‘rish bilan zamonaviy vitrina tajribasi kerak edi.",
        problemShort:
          "Yaxshi UI va responsive tartib bilan moda vitrinasi.",
      },
      trillo: {
        title: "Trillo — sayohat bron qilish",
        problem:
          "Sayohat xaridorlariga tez filtrlash, ishonchli qisqa ma’lumot va boshidan oxirigacha tushunarli bron oqimi kerak.",
        problemShort:
          "Filtrlar, sharhlar va responsive tartib bilan sayohat UI.",
      },
      memory: {
        title: "Interaktiv puzzle",
        problem:
          "Yengil kognitiv o‘yin shovqinli UIsiz yoqimli, responsive va bosqichma-bosqich qiyin bo‘lishi kerak.",
        problemShort:
          "Bosqichma-bosqich qiyinlik va silliq animatsiya bilan xotira kartochka o‘yini.",
      },
      portfolioSite: {
        title: "Portfolio veb-sayt",
        problem:
          "Loyihalar va tajribani recruiter uchun qulay tuzilma, performance va qayta foydalaniladigan komponentlar bilan taqdim etish.",
        problemShort:
          "Responsive tartib va toza ma’lumot arxitekturasi bilan shaxsiy portfolio.",
      },
      monsterRolodex: {
        title: "Monster Rolodex",
        problem:
          "Kichik React ilovasida API asosidagi ro‘yxatlar, qidiruv va qayta foydalaniladigan kartochka UI namoyish etish.",
        problemShort:
          "API asosidagi React UI bilan qidiriladigan monster katalogi.",
      },
    },
  },
  skills: {
    title: "Ko‘nikmalar",
    subtitle: "End-to-end AI mahsulotini yetkazib berish bo‘yicha guruhlangan.",
    groups: {
      aiMl: {
        title: "AI / ML",
        items: [
          "Python",
          "PyTorch",
          "TensorFlow",
          "scikit-learn",
          "Computer Vision",
          "NLP",
          "Model evaluation",
          "Experiment tracking",
        ],
      },
      frontend: {
        title: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Next.js",
          "HTML / CSS",
          "Responsive UI",
          "Performance tuning",
          "Accessibility basics",
        ],
      },
      backend: {
        title: "Backend",
        items: [
          "REST APIs",
          "Node.js",
          "GraphQL",
          "Authentication patterns",
          "Integration testing mindset",
        ],
      },
      tools: {
        title: "Vositalar",
        items: [
          "Git",
          "Docker (basics)",
          "CI-friendly workflows",
          "Jupyter",
          "VS Code",
        ],
      },
    },
  },
  contact: {
    title: "Aloqa",
    body: "AI muhandisligi va full-stack mahsulot jamoalaridagi rollar va hamkorlik uchun ochiqman.",
    emailLabel: "Email",
    locationLabel: "Joylashuv",
    location: "Remote / hybrid mumkin",
    socialHeading: "Havolalar",
  },
  footer: {
    note: "React bilan qurilgan. Tez statik hosting uchun deploy qilingan.",
  },
};

export default uz;
