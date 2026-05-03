/**
 * Merges Quazar luxury bag case study + projects.items.quazarLuxuryAuth into en/ko/uz.
 * Run: node scripts/add-quazar-case-study-locale.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "locales");

const caseStudyQuazar = {
  en: {
    eyebrow: "Case study · Quazar Inc.",
    title: "Luxury Bag Authentication",
    subtitle:
      "Production-oriented computer vision system to detect bag regions, score fine-grained authenticity cues, and aggregate part-level evidence into a calibrated real-vs-fake decision.",
    chipsAria: "Project tags",
    chipCv: "Computer vision",
    chipDetection: "Object detection",
    chipProd: "ML systems",
    overviewTitle: "Overview",
    overviewBody:
      "End-to-end AI for luxury bag authentication: localize discriminative regions, extract texture-aware features, run part-level classifiers with multiple backbones, and fuse outputs through a weighted ensemble aligned with operational risk.",
    challengeTitle: "Problem framing",
    challengeBody:
      "Counterfeits mimic global appearance while failing on hardware, stitching, and micro-texture consistency. The system must surface part-specific evidence, remain stable under crop noise, and expose interpretable signals for human review—not a single global score.",
    pipelineTitle: "Inference pipeline",
    pipelineIntro:
      "Sequential stages from raw imagery to aggregated authenticity. Each stage is instrumented for evaluation and threshold tuning.",
    pipelineSteps: [
      "Object detection model localizes bag and key structural parts (hardware, panels, logos).",
      "YOLO-driven crops standardize regions of interest before downstream classifiers.",
      "Image preprocessing emphasizes texture cues (e.g., LBP variants), lighting normalization, and quality gates.",
      "Part-level classifiers score authenticity per region using multiple trained models per part.",
      "Best-performing models per part are promoted based on offline metrics and stability checks.",
    ],
    ensembleTitle: "Ensemble aggregation",
    ensembleBody:
      "Per-part logits are calibrated, weighted by reliability priors learned on validation, and fused into a bag-level authenticity score with confidence intervals for downstream policy (auto-reject, escalate, accept).",
    dataTitle: "Dataset",
    dataStatLabel: "Curated images",
    dataStatValue: "~140,000",
    dataLead:
      "Large-scale imagery with strict hygiene: deduplication, label reconciliation, and leakage-safe splits for generalization claims.",
    dataBullets: [
      "Cleaned, labeled, and structured splits with versioned metadata for reproducibility.",
      "Stratified train/validation/test with geography and capture-device diversity tracked.",
      "Active QA loops for borderline pairs and hard negatives sourced from controlled captures.",
    ],
    modelsTitle: "Models & architecture",
    modelsLead:
      "Backbone diversity captures complementary cues: convolutional inductive bias vs. long-range attention for stitching and logo regularity.",
    modelResNet:
      "Residual blocks for stable deep features on hardware and edge-heavy crops.",
    modelDenseNet:
      "Feature reuse for fine texture gradients on leather and coated surfaces.",
    modelVit:
      "Patch attention for long-range dependencies across panels and logo geometry.",
    perPartTitle: "Multiple models per part",
    perPartBody:
      "Each structural part trains several candidate heads; the best models are selected on held-out metrics, calibration error, and robustness to crop jitter before deployment packaging.",
    ensembleArchTitle: "Weighted fusion",
    ensembleArchBody:
      "Outputs are aggregated with learned or hand-tuned weights reflecting per-part discriminative power, then consolidated with temperature scaling where applicable.",
    architectureTitle: "Architecture diagram",
    architectureBody:
      "High-level data plane from raw pixels to decision: detection localizes, preprocessing standardizes, classifiers specialize, ensemble fuses with explicit weighting for auditability.",
    architectureNote:
      "Diagram summarizes the serving path; training included ablations on crop policies, augmentations, and part dropout for fault tolerance.",
    roleTitle: "My role",
    roleItems: [
      "Owned data processing and labeling pipelines: QC rules, schema, and export contracts for training.",
      "Built the YOLO-based cropping service and crop QA visualizations for annotators.",
      "Led model experimentation, metric dashboards, and part-level error analysis for ensemble design.",
    ],
    figuresTitle: "Figures & deck exports",
    figuresLead:
      "Placeholder slides mimic PPT exports—replace files under public/projects/quazar-luxury/ with your deck PNGs or PDFs rasterized to the same filenames (slide-1 … slide-4) for production storytelling.",
    slideCaptions: [
      "System context: ingest → detection → decision framing.",
      "Dataset scale and governance highlights.",
      "Model families and ensemble fusion overview.",
      "Evaluation and deployment monitoring view.",
    ],
  },
  ko: {
    eyebrow: "사례 연구 · Quazar Inc.",
    title: "럭셔리 백 진품 인증",
    subtitle:
      "가방 영역을 검출하고 미세한 진품 신호를 점수화한 뒤, 부위별 근거를 보정된 진품/가품 결정으로 통합하는 프로덕션 지향 컴퓨터 비전 시스템입니다.",
    chipsAria: "프로젝트 태그",
    chipCv: "컴퓨터 비전",
    chipDetection: "객체 검출",
    chipProd: "ML 시스템",
    overviewTitle: "개요",
    overviewBody:
      "럭셔리 백 진품 인증을 위한 엔드투엔드 AI: 판별적 영역을 국소화하고 질감 인지 특징을 추출하며 여러 백본으로 부위별 분류기를 실행하고, 운영 리스크에 맞춘 가중 앙상블로 출력을 융합합니다.",
    challengeTitle: "문제 정의",
    challengeBody:
      "가품은 전역 외형은 모방하지만 하드웨어·스티칭·미세 질감 일관성에서 실패합니다. 부위별 근거를 드러내고 크롭 노이즈에 안정적이며 사람 검토를 위한 해석 가능한 신호가 필요합니다.",
    pipelineTitle: "추론 파이프라인",
    pipelineIntro:
      "원본 이미지에서 통합 진품성까지의 순차 단계입니다. 각 단계는 평가와 임계값 조정을 위해 계측됩니다.",
    pipelineSteps: [
      "객체 검출 모델이 백과 주요 구조 부위(하드웨어, 패널, 로고)를 국소화합니다.",
      "YOLO 기반 크롭으로 관심 영역을 표준화합니다.",
      "이미지 전처리는 질감 신호(예: LBP 변형), 조명 정규화, 품질 게이트를 강조합니다.",
      "부위별 분류기가 여러 학습 모델로 영역별 진품성을 점수화합니다.",
      "오프라인 지표와 안정성 검사로 부위별 최적 모델을 승격합니다.",
    ],
    ensembleTitle: "앙상블 집계",
    ensembleBody:
      "부위별 로짓을 보정하고 검증에서 학습된 신뢰도 사전에 따라 가중한 뒤, 정책(자동 거절, 에스컬레이션, 승인)을 위한 신뢰구간이 있는 백 수준 진품 점수로 융합합니다.",
    dataTitle: "데이터셋",
    dataStatLabel: "정제된 이미지",
    dataStatValue: "~140,000",
    dataLead:
      "중복 제거, 라벨 조정, 일반화 주장을 위한 누수 방지 분할이 포함된 대규모 이미지입니다.",
    dataBullets: [
      "재현 가능한 버전 메타데이터가 있는 정제·라벨·구조화 분할.",
      "지리·촬영 장치 다양성을 추적한 층화 학습/검증/테스트.",
      "경계 쌍과 통제 촬영의 어려운 네거티브에 대한 능동 QA 루프.",
    ],
    modelsTitle: "모델 및 아키텍처",
    modelsLead:
      "백본 다양성은 상보적 신호를 포착합니다: 스티칭과 로고 규칙성에 대한 합성곱 귀납 편향 대 장거리 어텐션.",
    modelResNet: "하드웨어·모서리 중심 크롭에 안정적인 깊은 특징을 위한 잔차 블록.",
    modelDenseNet: "가죽·코팅 표면의 미세 질감 그라데이션을 위한 특징 재사용.",
    modelVit: "패널과 로고 형태에 대한 장거리 의존성을 위한 패치 어텐션.",
    perPartTitle: "부위당 여러 모델",
    perPartBody:
      "각 구조 부위는 여러 후보 헤드를 학습합니다. 배포 패키징 전에 홀드아웃 지표, 보정 오차, 크롭 지터 강건성으로 최적 모델을 선택합니다.",
    ensembleArchTitle: "가중 융합",
    ensembleArchBody:
      "출력은 부위별 판별력을 반영해 학습되거나 수동 조정된 가중치로 집계되며, 해당 시 온도 스케일링으로 통합됩니다.",
    architectureTitle: "아키텍처 다이어그램",
    architectureBody:
      "원시 픽셀에서 결정까지의 고수준 데이터 플레인: 검출이 국소화하고 전처리가 표준화하며 분류기가 전문화하고 앙상블이 감사 가능한 가중치로 융합합니다.",
    architectureNote:
      "다이어그램은 서빙 경로를 요약합니다. 학습에는 크롭 정책, 증강, 부위 드롭아웃에 대한 ablation이 포함되었습니다.",
    roleTitle: "내 역할",
    roleItems: [
      "데이터 처리·라벨링 파이프라인: QC 규칙, 스키마, 학습용보내기 계약.",
      "YOLO 기반 크롭 서비스와 주석자용 크롭 QA 시각화 구축.",
      "모델 실험, 지표 대시보드, 앙상블 설계를 위한 부위별 오류 분석 주도.",
    ],
    figuresTitle: "그림 및 덱보내기",
    figuresLead:
      "PPT보내기를 흉내 낸 플레이스홀더 슬라이드입니다. public/projects/quazar-luxury/의 동일 파일명(slide-1 … slide-4)으로 PNG를 교체하세요.",
    slideCaptions: [
      "시스템 맥락: 수집 → 검출 → 결정.",
      "데이터셋 규모와 거버넌스.",
      "모델 패밀리와 앙상블 융합.",
      "평가 및 배포 모니터링 뷰.",
    ],
  },
  uz: {
    eyebrow: "Keys · Quazar Inc.",
    title: "Hashamatli sumkalar autentifikatsiyasi",
    subtitle:
      "Ishlab chiqarishga yo'naltirilgan kompyuter ko'ri: sumka qismlarini aniqlash, nozik autentifikatsiya signallarini baholash va qism darajasidagi dalillarni real/soxta qaroriga birlashtirish.",
    chipsAria: "Loyiha teglari",
    chipCv: "Kompyuter ko'rishi",
    chipDetection: "Ob'ektni aniqlash",
    chipProd: "ML tizimlari",
    overviewTitle: "Umumiy tasvir",
    overviewBody:
      "Hashamatli sumkalar autentifikatsiyasi uchun uzoqdan-qisqa AI: ajratuvchi zonalarni lokalizatsiya, tekstura sezuvli xususiyatlar, bir nechta backbone bilan qism klassifikatorlari va operatsion xavfga moslashgan og'irlikli ansambul.",
    challengeTitle: "Muammo",
    challengeBody:
      "Soxta nusxalar global ko'rinishni taklif qiladi, lekin furnitura, tikish va mikro-tekstura izchiligi bo'yicha muvaffaqiyatsiz. Qism bo'yicha dalil, crop shovqiniga chidamli va inson tekshiruvi uchun tushunarli signal kerak.",
    pipelineTitle: "Inferens quvuri",
    pipelineIntro:
      "Xom tasvirdan yig'ma autentifikatsiyagacha ketma-ket bosqichlar. Har bir bosqich baholash va threshold sozlash uchun asboblangan.",
    pipelineSteps: [
      "Ob'ektni aniqlash modeli sumka va asosiy tuzilma qismlarini (furnitura, panellar, logotip) lokalizatsiya qiladi.",
      "YOLO asosidagi crop ROI ni standartlashtiradi.",
      "Tasvirni oldindan ishlash tekstura (masalan, LBP), yorug'lik normalizatsiyasi va sifat filtrlari.",
      "Qism klassifikatorlari har bir zona uchun bir nechta o'qitilgan modellar bilan autentifikatsiyani baholaydi.",
      "Offline metrikalar va barqarorlik tekshiruvlari bilan qism bo'yicha eng yaxshi modellar tanlanadi.",
    ],
    ensembleTitle: "Ansambul yig'indisi",
    ensembleBody:
      "Qism bo'yicha logitlar kalibrlanadi, validatsiyadan o'rganilgan ishonchlilik prioritetlari bilan og'irlanadi va siyosat (avto rad, eskalatsiya, qabul) uchun ishonch oralig'i bilan sumka darajasidagi ballga birlashtiriladi.",
    dataTitle: "Dataset",
    dataStatLabel: "Tozalangan tasvirlar",
    dataStatValue: "~140,000",
    dataLead:
      "Qattiq gigiena: dublikatlarni olib tashlash, yorliqlarni kelishuv, umumlashtirish uchun sizib chiqishsiz splitlar.",
    dataBullets: [
      "Versiyalangan metadata bilan tozalangan, yorliqlangan va tuzilgan splitlar.",
      "Geografiya va suratga olish qurilmalari xilma-xilligi kuzatilgan stratifikatsiyalangan train/val/test.",
      "Chegaraviy juftlar va nazoratli suratlar uchun faol QA tsikllari.",
    ],
    modelsTitle: "Modellar va arxitektura",
    modelsLead:
      "Backbone xilma-xilligi qo'shimcha signalni ushlaydi: tikish va logotip muntazamligi uchun konvolyutsion induktiv moyillik va uzoq masofa e'tibori.",
    modelResNet:
      "Furnitura va qirrali crop uchun barqaror chuqur xususiyatlar uchun qoldiq bloklar.",
    modelDenseNet:
      "Charm va qoplamali yuzalar uchun nozik tekstura gradientlari uchun xususiyatni qayta ishlatish.",
    modelVit:
      "Panellar va logotip geometriyasi uchun patch attention.",
    perPartTitle: "Har qism uchun bir nechta modellar",
    perPartBody:
      "Har bir tuzilma qismi bir nechta nomzod boshlarni o'qitadi; deploydan oldin hold-out metrikalar, kalibratsiya xatosi va crop jitter barqarorligi bilan eng yaxshilari tanlanadi.",
    ensembleArchTitle: "Og'irlikli fusion",
    ensembleArchBody:
      "Chiqishlar qism bo'yicha ajratuvchi kuchni aks ettirgan o'rganilgan yoki qo'lda sozlangan og'irliklar bilan yig'iladi, keyin harorat masshtablash bilan birlashtiriladi.",
    architectureTitle: "Arxitektura diagrammasi",
    architectureBody:
      "Xom pikseldan qarorgacha: deteksiya lokalizatsiya, oldindan ishlash standartlashtirish, klassifikatorlar ixtisoslashadi, ansambul audit uchun aniq og'irlik bilan birlashtiradi.",
    architectureNote:
      "Diagramma servis yo'lini qisqacha beradi; o'qitishda crop siyosati, augmentatsiya va qism dropout bo'yicha ablatsiyalar bo'lgan.",
    roleTitle: "Mening vazifam",
    roleItems: [
      "Ma'lumotlarni qayta ishlash va yorliqlash quvuri: QC qoidalari, sxema, o'qitish eksport shartnomalari.",
      "YOLO asosidagi cropping xizmati va annotatorlar uchun crop QA vizualizatsiyasi.",
      "Model eksperimentlari, metrika panellari va ansambul dizayni uchun qism bo'yicha xato tahlili.",
    ],
    figuresTitle: "Figuralar va taqdimot eksporti",
    figuresLead:
      "PPT eksportini imitatsiya qiluvchi slaydlar. public/projects/quazar-luxury/ ichida xuddi shu fayl nomlari (slide-1 … slide-4) bilan PNG qo'ying.",
    slideCaptions: [
      "Tizim konteksti: yig'ish → deteksiya → qaror.",
      "Dataset hajmi va boshqaruv.",
      "Model oilalari va ansambul.",
      "Baholash va deploy monitoring.",
    ],
  },
};

const projectItem = {
  en: {
    title: "Luxury Bag Authentication — Quazar AI",
    problem:
      "Luxury resale and authentication workflows need consistent, interpretable evidence that scales across SKUs, lighting, and capture conditions—beyond a single global classifier score.",
    problemShort:
      "Part-aware CV pipeline with YOLO crops, texture features, multi-model scoring, and weighted ensemble fusion.",
    detail: {
      overview:
        "Case study page documents the Quazar authentication stack: detection, preprocessing, part classifiers, and ensemble aggregation at scale.",
      myRole:
        "Data/labeling pipeline ownership, YOLO cropping subsystem, and model experimentation with part-aware evaluation.",
      pipeline: [
        "Detect bag parts with an object detection backbone.",
        "YOLO crops for standardized regions of interest.",
        "Texture-aware preprocessing including LBP-style cues.",
        "Part-level multi-model classification and selection.",
        "Weighted ensemble aggregation for bag-level verdicts.",
      ],
      results:
        "Operational path from large curated imagery to interpretable, threshold-tunable authenticity decisions suitable for human-in-the-loop review.",
      galleryCaptions: ["Case study figures"],
    },
  },
  ko: {
    title: "럭셔리 백 인증 — Quazar AI",
    problem:
      "럭셔리 리셀·인증 워크플로는 SKU, 조명, 촬영 조건 전반에서 확장 가능하고 해석 가능한 일관된 근거가 필요합니다. 단일 전역 분류기 점수만으로는 부족합니다.",
    problemShort:
      "YOLO 크롭, 질감 특징, 다중 모델 점수, 가중 앙상블 융합이 있는 부위 인지 CV 파이프라인.",
    detail: {
      overview:
        "이 사례 연구 페이지는 Quazar 인증 스택을 설명합니다: 검출, 전처리, 부위 분류기, 대규모 앙상블 집계.",
      myRole:
        "데이터/라벨링 파이프라인, YOLO 크롭 하위 시스템, 부위 인지 평가가 있는 모델 실험.",
      pipeline: [
        "객체 검출 백본으로 백 부위 검출.",
        "표준화된 관심 영역을 위한 YOLO 크롭.",
        "LBP 스타일 신호를 포함한 질감 인지 전처리.",
        "부위별 다중 모델 분류 및 선택.",
        "백 수준 판정을 위한 가중 앙상블 집계.",
      ],
      results:
        "대규모 정제 이미지에서 사람 검토에 적합한 해석 가능하고 임계값 조정 가능한 진품 결정으로 이어지는 운영 경로.",
      galleryCaptions: ["사례 연구 그림"],
    },
  },
  uz: {
    title: "Hashamatli sumka autentifikatsiyasi — Quazar AI",
    problem:
      "Qayta sotish va autentifikatsiya SKU, yorug'lik va suratga olish sharoitida barqaror, tushunarli dalil talab qiladi — bitta global klassifikator balli yetarli emas.",
    problemShort:
      "YOLO crop, tekstura, ko'p model balli va og'irlikli ansambul fusion bilan qismni his qiladigan CV quvuri.",
    detail: {
      overview:
        "Ushbu keys Quazar autentifikatsiya stekini hujjatlaydi: deteksiya, oldindan ishlash, qism klassifikatorlari, yirik ansambul.",
      myRole:
        "Ma'lumot/yorliq quvuri, YOLO cropping, qismni his qiladigan baholash bilan model eksperimentlari.",
      pipeline: [
        "Deteksiya backbone bilan sumka qismlarini aniqlash.",
        "ROI standartlashtirish uchun YOLO crop.",
        "LBP uslubidagi signallar bilan tekstura oldindan ishlash.",
        "Qism bo'yicha ko'p model klassifikatsiyasi va tanlash.",
        "Sumka darajasidagi qaror uchun og'irlikli ansambul.",
      ],
      results:
        "Inson siklidagi tekshiruv uchun talqin qilinadigan va threshold bilan sozlanadigan autentifikatsiya qarorlariga yo'naltirilgan operatsion yo'l.",
      galleryCaptions: ["Keys figuralari"],
    },
  },
};

function merge(lang) {
  const file = path.join(root, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  data.caseStudyQuazar = caseStudyQuazar[lang];
  const items = data.projects.items;
  const next = {};
  next.quazarLuxuryAuth = projectItem[lang];
  for (const key of Object.keys(items)) {
    next[key] = items[key];
  }
  data.projects.items = next;
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log("updated", file);
}

["en", "ko", "uz"].forEach(merge);
