/**
 * Adds caseStudyLogMonitor + projects.items.logMonitoringDashboard to en/ko/uz.
 * Run: node scripts/add-log-monitoring-case-study.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "locales");

const caseStudyLogMonitor = {
  en: {
    productBadge: "SaaS · ML platform",
    title: "AI System Monitoring Dashboard",
    subtitle:
      "NLP-powered log intelligence: ingest noisy unstructured lines, vectorize with TF-IDF, classify severity and issue family with calibrated scores, and surface everything in a product-grade dashboard.",
    pillLive: "Real-time",
    pillNlp: "NLP + scikit-learn",
    pillApi: "FastAPI",
    overviewTitle: "Overview",
    overviewBody:
      "Operations teams drown in logs. This system treats each line as text: normalize tokens, extract TF-IDF features, and run logistic regression heads for severity (error / warning / info) and coarse issue categories (network, system, application, database, auth). A FastAPI service scores streams; a Next.js client renders confidence, keywords, and charts for triage.",
    problemTitle: "Problem",
    problemBullets: [
      "Very large daily log volume across services and environments.",
      "Manual monitoring does not scale; critical signals hide in noise.",
      "Unstructured free-text lines with heterogeneous formats and vocab drift.",
    ],
    solutionTitle: "Solution",
    solutionSteps: [
      "Text preprocessing: lowercasing, masking, token cleanup, n-gram control.",
      "TF-IDF vectorization with vocabulary caps tuned for stability on streaming data.",
      "Logistic regression classifiers with calibrated probabilities for gating alerts.",
      "Dual heads: severity routing and issue category for downstream playbooks.",
    ],
    predictIntro: "Predictions exposed to the UI:",
    predictSeverity: "Log severity — error, warning, info",
    predictCategory: "Issue category — network, system, application, database, auth, …",
    pipelineTitle: "Processing pipeline",
    pipelineSubtitle: "End-to-end path from raw telemetry to dashboard-ready signals.",
    pipelineSteps: [
      "Raw logs",
      "Preprocessing",
      "TF-IDF",
      "Classification",
      "Output",
    ],
    techTitle: "Tech stack",
    featuresTitle: "Product features",
    featureItems: [
      "Real-time log analysis with streaming ingestion and low-latency scoring.",
      "Confidence scores per prediction with threshold-based alerting.",
      "Keyword extraction surfaced next to each classified line for faster RCA.",
      "Dashboard visualization with trend, severity, and category breakdowns (Recharts).",
    ],
    chartsTitle: "Analytics & charts",
    chartsLead:
      "Illustrative metrics (sample data) showing how product teams consume model outputs—swap with live API hooks in production.",
    chartVolume: "Ingest volume (7d)",
    chartSeverity: "Severity mix (24h)",
    chartCategory: "Issue categories",
    apiTitle: "API surface",
    apiLead:
      "Versioned REST endpoints behind FastAPI with JSON contracts suitable for the Next.js dashboard and automation webhooks.",
    apiEndpoints: [
      {
        method: "POST",
        path: "/v1/logs/analyze",
        desc: "Score a batch of raw log lines. Returns severity, category, confidence, and top TF-IDF terms per row.",
        body: '{\n  "lines": [\n    "2025-05-03 ERROR connection reset peer api-7",\n    "WARN disk 87% on db-primary"\n  ]\n}',
      },
      {
        method: "GET",
        path: "/v1/metrics/summary",
        desc: "Aggregated counts for dashboard tiles: severity histogram, category totals, ingest rate.",
        body: "",
      },
      {
        method: "POST",
        path: "/v1/alerts/evaluate",
        desc: "Evaluate alert rules against latest scored window; emits webhook payloads for Pager/Slack integrations.",
        body: '{\n  "window_minutes": 15,\n  "min_confidence": 0.82\n}',
      },
    ],
    uiTitle: "Frontend UI",
    uiLead:
      "Placeholder frames mimic production screenshots—replace files under public/projects/monitoring-dashboard/ (ui-1.svg … ui-3.svg) with exported PNGs from your deck.",
    uiCaptions: [
      "Command center: KPI tiles and live stream strip.",
      "Issue feed with severity chips, category tags, and confidence.",
      "Keywords panel + trend visualization area.",
    ],
  },
  ko: {
    productBadge: "SaaS · ML 플랫폼",
    title: "AI 시스템 모니터링 대시보드",
    subtitle:
      "NLP 기반 로그 인텔리전스: 비정형 라인을 수집하고 TF-IDF로 벡터화한 뒤, 로지스틱 회귀로 심각도·이슈군을 보정된 점수로 분류하고 제품급 대시보드에 표시합니다.",
    pillLive: "실시간",
    pillNlp: "NLP + scikit-learn",
    pillApi: "FastAPI",
    overviewTitle: "개요",
    overviewBody:
      "운영 팀은 로그에 압도됩니다. 이 시스템은 각 라인을 텍스트로 다룹니다: 토큰 정규화, TF-IDF 특징, 로지스틱 회귀 헤드로 심각도(오류/경고/정보)와 이슈 범주(네트워크, 시스템, 애플리케이션, DB, 인증)를 분류합니다. FastAPI로 스트림을 점수화하고 Next.js 클라이언트가 신뢰도·키워드·차트를 렌더링합니다.",
    problemTitle: "문제",
    problemBullets: [
      "서비스·환경 전반에서 매우 큰 일일 로그 볼륨.",
      "수동 모니터링은 확장되지 않으며 중요 신호가 노이즈에 묻힙니다.",
      "형식과 어휘가 제각각인 비정형 자유 텍스트 라인.",
    ],
    solutionTitle: "솔루션",
    solutionSteps: [
      "텍스트 전처리: 소문자화, 마스킹, 토큰 정리, n-gram 제어.",
      "스트리밍 데이터 안정성을 위해 어휘 상한이 조정된 TF-IDF 벡터화.",
      "알림 게이팅을 위해 확률이 보정된 로지스틱 회귀 분류기.",
      "듀얼 헤드: 심각도 라우팅과 이슈 범주로 다운스트림 플레이북에 연결.",
    ],
    predictIntro: "UI에 노출되는 예측:",
    predictSeverity: "로그 심각도 — error, warning, info",
    predictCategory: "이슈 범주 — network, system, application, database, auth 등",
    pipelineTitle: "처리 파이프라인",
    pipelineSubtitle: "원시 텔레메트리에서 대시보드 준비 신호까지의 엔드투엔드 경로.",
    pipelineSteps: ["원시 로그", "전처리", "TF-IDF", "분류", "출력"],
    techTitle: "기술 스택",
    featuresTitle: "제품 기능",
    featureItems: [
      "스트리밍 수집과 저지연 점수화가 있는 실시간 로그 분석.",
      "알림 임계값 기반의 예측별 신뢰도 점수.",
      "분류된 각 라인 옆에 표시되는 키워드 추출로 RCA 가속.",
      "추세·심각도·범주 분해를 보여주는 대시보드 시각화(Recharts).",
    ],
    chartsTitle: "분석 및 차트",
    chartsLead:
      "제품 팀이 모델 출력을 소비하는 방식을 보여주는 예시 지표(샘플 데이터)입니다.",
    chartVolume: "수집량(7일)",
    chartSeverity: "심각도 믹스(24시간)",
    chartCategory: "이슈 범주",
    apiTitle: "API 표면",
    apiLead:
      "Next.js 대시보드와 자동화 웹훅에 적합한 JSON 계약의 FastAPI 뒤 버전 REST 엔드포인트.",
    apiEndpoints: [
      {
        method: "POST",
        path: "/v1/logs/analyze",
        desc: "원시 로그 라인 배치를 점수화합니다. 행별 심각도, 범주, 신뢰도, 상위 TF-IDF 용어를 반환합니다.",
        body: '{\n  "lines": [\n    "2025-05-03 ERROR connection reset peer api-7",\n    "WARN disk 87% on db-primary"\n  ]\n}',
      },
      {
        method: "GET",
        path: "/v1/metrics/summary",
        desc: "타일용 집계: 심각도 히스토그램, 범주 합계, 수집 속도.",
        body: "",
      },
      {
        method: "POST",
        path: "/v1/alerts/evaluate",
        desc: "최신 점수 창에 대해 알림 규칙을 평가합니다. Pager/Slack용 웹훅 페이로드를보냅니다.",
        body: '{\n  "window_minutes": 15,\n  "min_confidence": 0.82\n}',
      },
    ],
    uiTitle: "프론트엔드 UI",
    uiLead:
      "public/projects/monitoring-dashboard/의 ui-1 … ui-3 파일을 덱에서보낸 PNG로 교체하세요.",
    uiCaptions: [
      "커맨드 센터: KPI 타일과 라이브 스트립.",
      "심각도 칩, 범주 태그, 신뢰도가 있는 이슈 피드.",
      "키워드 패널 + 추세 시각화 영역.",
    ],
  },
  uz: {
    productBadge: "SaaS · ML platforma",
    title: "AI tizim monitoringi paneli",
    subtitle:
      "NLP asosidagi log intellekt: shovqinli qatorlarni yig‘ish, TF-IDF bilan vektorlash, severity va muammo oilasi uchun kalibrlangan ball bilan LR, mahsulat darajasidagi panelda ko‘rsatish.",
    pillLive: "Real-time",
    pillNlp: "NLP + scikit-learn",
    pillApi: "FastAPI",
    overviewTitle: "Umumiy",
    overviewBody:
      "Operatsiya jamoalari loglarda cho‘kadi. Har bir qator matn: tokenlarni normallashtirish, TF-IDF, LR boshlari severity (error/warning/info) va muammo toifasi (tarmoq, tizim, ilova, ma’lumotlar bazasi, auth). FastAPI oqimni baholaydi; Next.js ishonch, kalit so‘zlar va grafiklarni chizadi.",
    problemTitle: "Muammo",
    problemBullets: [
      "Kunlik juda katta log hajmi.",
      "Qo‘lda monitoring masshtablanmaydi; muhim signal shovqinda yo‘qoladi.",
      "Turli format va leksikaga ega tuzilmagan matn.",
    ],
    solutionTitle: "Yechim",
    solutionSteps: [
      "Matn oldindan ishlash: kichik harf, maskalash, token tozalash, n-gram nazorati.",
      "Oqim uchun barqaror TF-IDF sozlamalari.",
      "Ehtimollik kalibrlangan LR klassifikatorlar.",
      "Ikki bosh: severity va kategoriya.",
    ],
    predictIntro: "UI da bashoratlar:",
    predictSeverity: "Severity — error, warning, info",
    predictCategory: "Kategoriya — network, system, application, database, auth, …",
    pipelineTitle: "Quvur",
    pipelineSubtitle: "Xom telemetriyadan panel signaligacha.",
    pipelineSteps: ["Xom loglar", "Oldindan ishlash", "TF-IDF", "Klassifikatsiya", "Chiqish"],
    techTitle: "Texnologiyalar",
    featuresTitle: "Funksiyalar",
    featureItems: [
      "Oqim va past kechikish bilan real-time tahlil.",
      "Bashorat uchun ishonch ballari.",
      "Klassifikatsiya qatori yonida kalit so‘zlar.",
      "Recharts bilan vizualizatsiya.",
    ],
    chartsTitle: "Analitika",
    chartsLead: "Namuna ma’lumotlar bilan ko‘rsatma.",
    chartVolume: "7 kun hajm",
    chartSeverity: "24 soat severity",
    chartCategory: "Muammo toifalari",
    apiTitle: "API",
    apiLead: "FastAPI orqali REST, Next.js uchun JSON.",
    apiEndpoints: [
      {
        method: "POST",
        path: "/v1/logs/analyze",
        desc: "Qatorlar to‘plamini baholash: severity, kategoriya, ishonch, TF-IDF atamalari.",
        body: '{\n  "lines": [\n    "2025-05-03 ERROR connection reset peer api-7",\n    "WARN disk 87% on db-primary"\n  ]\n}',
      },
      {
        method: "GET",
        path: "/v1/metrics/summary",
        desc: "Jamlanma metrikalar.",
        body: "",
      },
      {
        method: "POST",
        path: "/v1/alerts/evaluate",
        desc: "Ogohlantirish qoidalari va webhook.",
        body: '{\n  "window_minutes": 15,\n  "min_confidence": 0.82\n}',
      },
    ],
    uiTitle: "Frontend UI",
    uiLead: "public/projects/monitoring-dashboard/ fayllarini PNG bilan almashtiring.",
    uiCaptions: ["KPI va oqim.", "Issue feed.", "Kalit so‘zlar va trend."],
  },
};

const projectItem = {
  en: {
    title: "AI System Monitoring Dashboard",
    problem:
      "High-volume unstructured logs overwhelm operators; manual triage misses regressions and noisy false positives without scalable NLP scoring.",
    problemShort:
      "TF-IDF + logistic regression over FastAPI with a Next.js dashboard, Recharts, and real-time confidence.",
    detail: {
      overview:
        "NLP log monitoring product: preprocessing, vectorization, dual classification heads, and SaaS-style analytics UI.",
      myRole:
        "Full-stack slice from sklearn pipelines to API contracts and dashboard visualization patterns.",
      pipeline: [
        "Raw logs ingested and normalized.",
        "TF-IDF feature extraction.",
        "Logistic regression for severity and category.",
        "JSON scores to dashboard and alert webhooks.",
      ],
      results:
        "Operational story: faster RCA via keywords, calibrated thresholds, and charts aligned to SRE workflows.",
      galleryCaptions: ["Dashboard UI"],
    },
  },
  ko: {
    title: "AI 시스템 모니터링 대시보드",
    problem:
      "대용량 비정형 로그가 운영자를 압도하고 수동 분류는 회귀와 노이즈성 오탐을 놓치기 쉽습니다. 확장 가능한 NLP 점수화가 필요합니다.",
    problemShort:
      "FastAPI의 TF-IDF + 로지스틱 회귀, Next.js 대시보드, Recharts, 실시간 신뢰도.",
    detail: {
      overview:
        "NLP 로그 모니터링 제품: 전처리, 벡터화, 이중 분류 헤드, SaaS형 분석 UI.",
      myRole: "sklearn 파이프라인부터 API 계약과 대시보드 시각화 패턴까지.",
      pipeline: [
        "원시 로그 수집·정규화.",
        "TF-IDF 특징 추출.",
        "심각도·범주 로지스틱 회귀.",
        "JSON 점수를 대시보드·웹훅으로.",
      ],
      results: "키워드, 보정 임계값, SRE 워크플로에 맞춘 차트로 빠른 RCA.",
      galleryCaptions: ["대시보드 UI"],
    },
  },
  uz: {
    title: "AI tizim monitoringi paneli",
    problem:
      "Katta hajm tuzilmagan loglar operatorlarni bosadi; qo‘lda saralash regressiya va noto‘g‘ri signalni o‘tkazadi.",
    problemShort:
      "FastAPI da TF-IDF + LR, Next.js panel, Recharts, real-time ishonch.",
    detail: {
      overview: "NLP log mahsuloti: oldindan ishlash, vektorlash, ikki bosh, SaaS UI.",
      myRole: "sklearn dan API va panelgacha.",
      pipeline: [
        "Xom loglar.",
        "TF-IDF.",
        "LR severity va kategoriya.",
        "JSON panel va webhook.",
      ],
      results: "Kalit so‘z va graflar bilan tezroq RCA.",
      galleryCaptions: ["Panel UI"],
    },
  },
};

function merge(lang) {
  const file = path.join(root, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  data.caseStudyLogMonitor = caseStudyLogMonitor[lang];
  const orig = data.projects.items;
  const next = {};
  const priority = ["quazarLuxuryAuth", "logMonitoringDashboard"];
  for (const k of priority) {
    if (k === "logMonitoringDashboard") {
      next[k] = projectItem[lang];
    } else if (orig[k]) {
      next[k] = orig[k];
    }
  }
  for (const k of Object.keys(orig)) {
    if (next[k] === undefined) {
      next[k] = orig[k];
    }
  }
  data.projects.items = next;
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log("updated", file);
}

["en", "ko", "uz"].forEach(merge);
