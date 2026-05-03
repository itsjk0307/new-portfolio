/**
 * Merges `projectDetail` labels and per-slug `detail` blocks into en/ko/uz locale JSON.
 * Run: node scripts/add-project-detail-locales.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "locales");

const labels = {
  en: {
    backToList: "Back to all projects",
    overview: "Overview",
    problem: "Problem",
    myRole: "My role",
    pipeline: "System pipeline",
    techStack: "Tech stack",
    results: "Results",
    gallery: "Screenshots",
    close: "Close",
    step: "Step {{n}}",
  },
  ko: {
    backToList: "프로젝트 목록으로",
    overview: "개요",
    problem: "문제 정의",
    myRole: "내 역할",
    pipeline: "시스템 파이프라인",
    techStack: "기술 스택",
    results: "결과",
    gallery: "스크린샷",
    close: "닫기",
    step: "{{n}}단계",
  },
  uz: {
    backToList: "Barcha loyihalar ro'yxatiga",
    overview: "Umumiy tasvir",
    problem: "Muammo",
    myRole: "Mening vazifam",
    pipeline: "Tizim quvuri",
    techStack: "Texnologiyalar",
    results: "Natijalar",
    gallery: "Skrinshotlar",
    close: "Yopish",
    step: "{{n}}-qadam",
  },
};

const details = {
  en: {
    heartDisease: {
      overview:
        "A structured ML study on tabular patient features to estimate heart-disease risk using interpretable baselines suitable for exploration—not clinical deployment.",
      myRole:
        "Owned data preparation, baseline modeling, cross-validation, and reporting of metrics and limitations for a notebook-based deliverable.",
      pipeline: [
        "Ingest and clean structured features; handle missing values and scaling.",
        "Train and compare classical models (e.g. logistic regression, tree-based).",
        "Evaluate with stratified splits; inspect confusion matrix and ROC-style signals.",
        "Summarize findings, assumptions, and what would be needed for real screening.",
      ],
      results:
        "Strong baseline separation on the reference dataset with clear discussion of leakage risks, class balance, and why external validation would be required in production.",
      galleryCaptions: ["Project visual summary"],
    },
    customerChurn: {
      overview:
        "A churn modeling exercise on behavioral and contract-like features to surface at-risk customers before renewal windows close.",
      myRole:
        "Built feature-oriented baselines, tuned simple neural and classical models, and documented evaluation choices for stakeholders.",
      pipeline: [
        "Profile distributions and correlations; define the prediction horizon label.",
        "Engineer tabular features and split data with temporal discipline where possible.",
        "Train Keras/TensorFlow and classical models; track precision/recall tradeoffs.",
        "Deliver ranked-risk interpretation and next-step recommendations for retention.",
      ],
      results:
        "Actionable ranking metrics with emphasis on false negatives vs false positives and how thresholds would be set with business input.",
      galleryCaptions: ["Modeling overview"],
    },
    edaTitanic: {
      overview:
        "Exploratory analysis of the classic Titanic dataset to validate data quality, relationships, and hypotheses before predictive modeling.",
      myRole:
        "Conducted univariate and bivariate analysis, visualization, and narrative synthesis in a reproducible notebook.",
      pipeline: [
        "Load data; audit dtypes, missingness, and duplicates.",
        "Plot survival vs categorical and numeric drivers; test simple hypotheses.",
        "Check outliers and encoding needs for downstream models.",
        "Package key plots and takeaways for a modeling kickoff.",
      ],
      results:
        "Clear story of which features align with survival signals and where data limits cap confidence—ready for principled feature engineering.",
      galleryCaptions: ["EDA highlights", "Supporting charts"],
    },
    loanEligibility: {
      overview:
        "A classification-oriented study for loan eligibility signals from applicant features, stressing auditability and conservative errors.",
      myRole:
        "Implemented logistic regression and random forest baselines, feature importance views, and error analysis.",
      pipeline: [
        "Define positive/negative classes and success criteria with stakeholders in mind.",
        "Preprocess numeric/categorical fields; balance and calibration checks.",
        "Train and compare models; inspect precision/recall at operating points.",
        "Report drivers of approval/deny and residual risk pockets.",
      ],
      results:
        "Interpretable baselines with documented tradeoffs between approval convenience and controlling high-risk approvals.",
      galleryCaptions: ["Analysis snapshot", "Model comparison"],
    },
    rainbowAi: {
      overview:
        "Internal AI-assisted platform work for structural diagnostics, reporting, and estimation workflows used by field teams.",
      myRole:
        "Contributed frontend integration, UI flows for inspection inputs, and collaboration on performance and UX polish.",
      pipeline: [
        "Capture structured inspection inputs and validation states in the client.",
        "Orchestrate calls to model/report services and render PDF-oriented outputs.",
        "Harden loading, empty, and error paths for unreliable networks.",
        "Iterate with design on density, typography, and progressive disclosure.",
      ],
      results:
        "Faster turnaround from raw inputs to reviewable artifacts with fewer manual copy/paste steps for operators.",
      galleryCaptions: ["Platform context"],
    },
    rap3d: {
      overview:
        "A collaborative 3D workspace emphasizing smooth scene interaction, shared state, and a cohesive component system.",
      myRole:
        "Implemented React Three Fiber scenes, interaction handlers, and UI integration with the shared design system.",
      pipeline: [
        "Scene graph setup, materials, and lighting tuned for web performance.",
        "Input mapping, camera controls, and frame-budget awareness.",
        "State boundaries between 3D and React UI layers.",
        "Profiling passes on low-end devices; iterative fixes.",
      ],
      results:
        "Stable frame times on target hardware with predictable interaction latency for core collaboration flows.",
      galleryCaptions: ["3D workspace"],
    },
    rapFiles: {
      overview:
        "Cross-platform file management with secure access patterns, in-app viewing, and dependable sync semantics.",
      myRole:
        "Built list/detail UI, document preview flows, and optimistic UI patterns for uploads and sync status.",
      pipeline: [
        "Authentication-aware data layer and route guards.",
        "Virtualized lists for large directories; resilient retries.",
        "PDF preview integration with graceful fallbacks.",
        "Telemetry hooks for failure diagnosis in the field.",
      ],
      results:
        "Reduced friction for teams reviewing documents on mobile and desktop with clearer sync feedback.",
      galleryCaptions: ["File experience"],
    },
    greenShop: {
      overview:
        "A sustainability-themed landing experience with responsive layout, Tailwind utility styling, and fast perceived load.",
      myRole:
        "Implemented layout sections, responsive grids, imagery treatment, and CTA hierarchy.",
      pipeline: [
        "Mobile-first layout and type scale.",
        "Image lazy-loading and content-visibility style tuning.",
        "Accessibility pass on contrast and focus order.",
        "Deploy to static hosting with cache-friendly assets.",
      ],
      results:
        "Crisp marketing presentation with Lighthouse-friendly defaults and maintainable utility classes.",
      galleryCaptions: ["Landing hero", "Secondary layout"],
    },
    banking: {
      overview:
        "A banking-style dashboard for balances, transfers, and history with emphasis on trust, clarity, and feedback.",
      myRole:
        "Structured navigation, account cards, transaction tables, and empty/loading skeleton states.",
      pipeline: [
        "Information architecture for multi-account views.",
        "Componentized cards, charts placeholders, and tables.",
        "Micro-interactions for transfers and confirmations.",
        "Responsive reflow down to small phones.",
      ],
      results:
        "Coherent financial UI patterns that read well at a glance and degrade gracefully without data.",
      galleryCaptions: ["Dashboard view", "UI system context"],
    },
    vizzano: {
      overview:
        "Fashion inventory storefront with strong imagery, mobile-first browsing, and polished product grids.",
      myRole:
        "Built product listing layouts, responsive media, and navigation tuned for thumb reach.",
      pipeline: [
        "Grid systems for mixed aspect-ratio product shots.",
        "Filter/sort UI with minimal layout shift.",
        "Performance-conscious image sizing.",
        "Cross-device QA on common breakpoints.",
      ],
      results:
        "Smooth browsing sessions on mid-tier phones with consistent spacing and readable product metadata.",
      galleryCaptions: ["Storefront", "Layout reference"],
    },
    trillo: {
      overview:
        "Travel booking UI with filters, hotel cards, reviews, and a multi-step booking flow that stays understandable.",
      myRole:
        "Implemented search header, results grid, review module, and CTA progression with responsive rules.",
      pipeline: [
        "Filter state model and URL-friendly patterns where applicable.",
        "Card design system for hotels and ratings.",
        "Booking sidebar with price breakdown affordances.",
        "End-to-end responsive passes and edge-case copy.",
      ],
      results:
        "End-to-end flow that keeps orientation for users juggling dates, guests, and price comparisons.",
      galleryCaptions: ["Search results", "Booking flow"],
    },
    memory: {
      overview:
        "A lightweight memory card game with progressive difficulty, motion, and minimal UI noise.",
      myRole:
        "Game state machine, card flip animations, scoring, and difficulty ramp.",
      pipeline: [
        "Deck generation and shuffle with seeded fairness option.",
        "Match detection, lockout timing, and win/lose modals.",
        "Motion presets tuned for reduced motion preference.",
        "Polish on touch targets and audio-off safe defaults.",
      ],
      results:
        "Snappy rounds with clear feedback loops; players can finish a session in under a few minutes.",
      galleryCaptions: ["Gameplay", "Motion reference"],
    },
    portfolioSite: {
      overview:
        "Personal portfolio presenting projects, experience, and contact with recruiter-friendly structure and i18n.",
      myRole:
        "Information architecture, theming, multilingual content, and project detail routing.",
      pipeline: [
        "Content model for projects and translations.",
        "Theme tokens, layout primitives, and accessible nav.",
        "Project cards linking to deep-dive pages with galleries.",
        "Static build and deploy path for GitHub Pages.",
      ],
      results:
        "Fast static site with clear story arc from hero to evidence-backed project pages.",
      galleryCaptions: ["Site overview", "Structure reference"],
    },
    monsterRolodex: {
      overview:
        "Small React app demonstrating API-driven lists, live search, and reusable card UI.",
      myRole:
        "Data fetching, search filtering, and presentational components with loading and error UI.",
      pipeline: [
        "Fetch monsters JSON; normalize for rendering.",
        "Controlled search input with debounced filter.",
        "Card grid with keyboard-accessible focus.",
        "Empty and error states for network failures.",
      ],
      results:
        "Responsive directory UX that showcases clean component boundaries and predictable state.",
      galleryCaptions: ["Directory UI", "Component context"],
    },
  },
  ko: {
    heartDisease: {
      overview:
        "해석 가능한 베이스라인으로 구조화된 환자 특성에서 심장병 위험을 추정하는 정리된 ML 연구(임상 배포용이 아님).",
      myRole:
        "데이터 준비, 베이스라인 모델링, 교차 검증, 노트북 결과물에 대한 지표·한계 보고를 담당했습니다.",
      pipeline: [
        "특성 수집·정리, 결측 처리 및 스케일링.",
        "로지스틱·트리 기반 등 고전 모델 학습·비교.",
        "층화 분할 평가, 혼동 행렬·ROC류 지표 점검.",
        "실제 스크리닝에 필요한 요건과 함께 결론 정리.",
      ],
      results:
        "기준 데이터셋에서 분리 성능을 정리하고, 누수·클래스 불균형·외부 검증 필요성을 명확히 논의했습니다.",
      galleryCaptions: ["프로젝트 시각 요약"],
    },
    customerChurn: {
      overview:
        "갱신 전에 이탈 위험 고객을 찾기 위한 행동·계약형 특성 기반 이탈 모델링 연습입니다.",
      myRole:
        "특성 기반 베이스라인, 간단한 신경망·고전 모델 조정, 이해관계자용 평가 선택 문서화를 수행했습니다.",
      pipeline: [
        "분포·상관 프로파일링, 예측 기간 라벨 정의.",
        "표 특성 설계 및 가능한 경우 시간 순 분할.",
        "Keras/TensorFlow·고전 모델 학습, 정밀도/재현율 균형.",
        "리텐션을 위한 위험 순위 해석과 권고.",
      ],
      results:
        "비즈니스 입력으로 임계값을 정할 맥락과 함께 오탐·미탐 강조가 있는 순위 지표를 제시했습니다.",
      galleryCaptions: ["모델링 개요"],
    },
    edaTitanic: {
      overview:
        "예측 모델 전에 타이타닉 데이터의 품질, 관계, 가설을 검증하는 탐색 분석입니다.",
      myRole:
        "일변량·이변량 분석, 시각화, 재현 가능한 노트북 서술을 담당했습니다.",
      pipeline: [
        "데이터 적재, dtype·결측·중복 점검.",
        "생존과 범주·수치 요인 플롯, 단순 가설 검토.",
        "이상치와 인코딩 필요성 확인.",
        "모델링 킥오프용 핵심 플롯·시사점 정리.",
      ],
      results:
        "어떤 특성이 생존 신호와 맞는지와 데이터 한계를 분명히 해 후속 특성 공학에 연결했습니다.",
      galleryCaptions: ["EDA 하이라이트", "보조 차트"],
    },
    loanEligibility: {
      overview:
        "신청자 특성에서 대출 적격 신호를 분류 관점으로 연구하며 감사 가능성과 보수적 오류를 강조합니다.",
      myRole:
        "로지스틱 회귀·랜덤 포레스트 베이스라인, 특성 중요도, 오류 분석을 구현했습니다.",
      pipeline: [
        "긍정/부정 클래스와 이해관계자 관점 성공 기준 정의.",
        "수치·범주 필드 전처리, 균형·보정 점검.",
        "모델 학습·비교, 운영 지점에서 정밀도/재현율.",
        "승인/거절 동인과 잔여 위험 구간 보고.",
      ],
      results:
        "승인 편의와 고위험 승인 통제 사이의 트레이드오프가 문서화된 해석 가능한 베이스라인입니다.",
      galleryCaptions: ["분석 스냅샷", "모델 비교"],
    },
    rainbowAi: {
      overview:
        "현장 팀을 위한 구조 진단·보고·추정 워크플로를 지원하는 내부 AI 보조 플랫폼 작업입니다.",
      myRole:
        "프론트엔드 연동, 점검 입력 UI 흐름, 성능·UX 폴리시 협업에 기여했습니다.",
      pipeline: [
        "클라이언트에서 구조화된 입력과 검증 상태 수집.",
        "모델/보고 서비스 호출 및 PDF 지향 출력 렌더링.",
        "불안정한 네트워크에서 로딩·빈 상태·오류 경로 강화.",
        "밀도·타이포그래피·점진적 공개를 디자인과 반복.",
      ],
      results:
        "운영자의 수동 복사·붙여넣기 단계를 줄이고 입력에서 검토 가능한 산출물까지 시간을 단축했습니다.",
      galleryCaptions: ["플랫폼 맥락"],
    },
    rap3d: {
      overview:
        "부드러운 씬 상호작용, 공유 상태, 일관된 컴포넌트 시스템을 강조한 협업 3D 작업 공간입니다.",
      myRole:
        "React Three Fiber 씬, 상호작용 핸들러, 공유 디자인 시스템과의 UI 통합을 구현했습니다.",
      pipeline: [
        "씬 그래프, 재질, 웹 성능에 맞춘 조명.",
        "입력 매핑, 카메라 컨트롤, 프레임 예산 인식.",
        "3D와 React UI 레이어 간 상태 경계.",
        "저사양 기기 프로파일링과 반복 수정.",
      ],
      results:
        "목표 하드웨어에서 안정적인 프레임 타임과 핵심 협업 흐름에서 예측 가능한 상호작용 지연.",
      galleryCaptions: ["3D 작업 공간"],
    },
    rapFiles: {
      overview:
        "안전한 접근 패턴, 인앱 보기, 신뢰할 수 있는 동기 의미를 갖춘 크로스 플랫폼 파일 관리입니다.",
      myRole:
        "목록/상세 UI, 문서 미리보기, 업로드·동기 상태에 대한 낙관적 UI 패턴을 구축했습니다.",
      pipeline: [
        "인증 인지 데이터 레이어와 라우트 가드.",
        "대용량 디렉터리 가상화 목록, 복원력 있는 재시도.",
        "우아한 폴백이 있는 PDF 미리보기 통합.",
        "현장 진단용 텔레메트리 훅.",
      ],
      results:
        "모바일과 데스크톱에서 문서 검토 마찰을 줄이고 동기 피드백을 명확히 했습니다.",
      galleryCaptions: ["파일 경험"],
    },
    greenShop: {
      overview:
        "반응형 레이아웃, Tailwind 유틸 스타일, 빠른 체감 로드를 갖춘 지속가능성 테마 랜딩입니다.",
      myRole:
        "섹션 레이아웃, 반응형 그리드, 이미지 처리, CTA 계층을 구현했습니다.",
      pipeline: [
        "모바일 우선 레이아웃과 타입 스케일.",
        "이미지 지연 로딩과 content-visibility 조정.",
        "대비와 포커스 순서에 대한 접근성 점검.",
        "캐시 친화적 자산으로 정적 호스팅 배포.",
      ],
      results:
        "Lighthouse 친화적 기본값과 유지보수 가능한 유틸 클래스로 선명한 마케팅 표현.",
      galleryCaptions: ["랜딩 히어로", "보조 레이아웃"],
    },
    banking: {
      overview:
        "잔액, 이체, 내역에 초점을 둔 신뢰·명확성·피드백이 강조된 뱅킹형 대시보드입니다.",
      myRole:
        "내비게이션, 계좌 카드, 거래 테이블, 빈/로딩 스켈레톤 상태를 구성했습니다.",
      pipeline: [
        "다계좌 뷰를 위한 정보 구조.",
        "카드·차트 자리·테이블 컴포넌트화.",
        "이체·확인에 대한 미세 상호작용.",
        "소형 폰까지 반응형 리플로우.",
      ],
      results:
        "데이터가 없을 때도 우아하게 저하되는 한눈에 읽히는 금융 UI 패턴.",
      galleryCaptions: ["대시보드 뷰", "UI 시스템 맥락"],
    },
    vizzano: {
      overview:
        "강한 이미지, 모바일 우선 탐색, 다듬어진 제품 그리드가 있는 패션 인벤토리 스토어프론트입니다.",
      myRole:
        "제품 목록 레이아웃, 반응형 미디어, 엄지 도달에 맞춘 내비게이션을 구축했습니다.",
      pipeline: [
        "혼합 종횡비 제품 샷을 위한 그리드 시스템.",
        "최소 레이아웃 시프트로 필터/정렬 UI.",
        "성능 인지 이미지 크기 조정.",
        "일반 브레이크포인트에서 기기 간 QA.",
      ],
      results:
        "중간 사양 폰에서도 일관된 간격과 읽기 쉬운 제품 메타데이터로 부드러운 탐색.",
      galleryCaptions: ["스토어프론트", "레이아웃 참고"],
    },
    trillo: {
      overview:
        "필터, 호텔 카드, 리뷰, 이해하기 쉬운 다단계 예약 흐름이 있는 여행 예약 UI입니다.",
      myRole:
        "검색 헤더, 결과 그리드, 리뷰 모듈, 반응 규칙이 있는 CTA 진행을 구현했습니다.",
      pipeline: [
        "해당 시 URL 친화 패턴으로 필터 상태 모델.",
        "호텔·평점 카드 디자인 시스템.",
        "가격 내역 여지가 있는 예약 사이드바.",
        "종단 반응 패스와 엣지 케이스 카피.",
      ],
      results:
        "날짜, 인원, 가격 비교를 오가는 사용자도 방향을 잃지 않는 종단 흐름.",
      galleryCaptions: ["검색 결과", "예약 흐름"],
    },
    memory: {
      overview:
        "점진적 난이도, 모션, 최소 UI 노이즈를 갖춘 가벼운 메모리 카드 게임입니다.",
      myRole:
        "게임 상태 머신, 카드 뒤집기 애니메이션, 점수, 난이도 램프를 구현했습니다.",
      pipeline: [
        "시드 공정 옵션이 있는 덱 생성·셔플.",
        "매칭 감지, 잠금 타이밍, 승/패 모달.",
        "모션 감소 선호에 맞춘 모션 프리셋.",
        "터치 타겟과 오디오 오프 안전 기본값 폴리시.",
      ],
      results:
        "명확한 피드백 루프가 있는 빠른 라운드, 몇 분 안에 세션 완료 가능.",
      galleryCaptions: ["게임플레이", "모션 참고"],
    },
    portfolioSite: {
      overview:
        "프로젝트·경력·연락을 채용 담당자 친화 구조와 i18n으로 제시하는 개인 포트폴리오입니다.",
      myRole:
        "정보 구조, 테마, 다국어 콘텐츠, 프로젝트 상세 라우팅을 담당했습니다.",
      pipeline: [
        "프로젝트와 번역용 콘텐츠 모델.",
        "테마 토큰, 레이아웃 프리미티브, 접근 가능한 내비.",
        "갤러리가 있는 심층 페이지로 연결되는 프로젝트 카드.",
        "GitHub Pages용 정적 빌드·배포 경로.",
      ],
      results:
        "히어로에서 근거 있는 프로젝트 페이지까지 빠른 정적 사이트와 명확한 스토리 아크.",
      galleryCaptions: ["사이트 개요", "구조 참고"],
    },
    monsterRolodex: {
      overview:
        "API 기반 목록, 실시간 검색, 재사용 가능한 카드 UI를 보여주는 소형 React 앱입니다.",
      myRole:
        "데이터 페칭, 검색 필터링, 로딩·오류 UI가 있는 프리젠테이션 컴포넌트를 구현했습니다.",
      pipeline: [
        "몬스터 JSON 페치, 렌더링용 정규화.",
        "디바운스된 필터가 있는 제어 검색 입력.",
        "키보드 포커스가 가능한 카드 그리드.",
        "네트워크 실패 시 빈·오류 상태.",
      ],
      results:
        "깔끔한 컴포넌트 경계와 예측 가능한 상태를 보여주는 반응형 디렉터리 UX.",
      galleryCaptions: ["디렉터리 UI", "컴포넌트 맥락"],
    },
  },
  uz: {
    heartDisease: {
      overview:
        "Tabular bemor alomatlari bo'yicha interpretatsiya qilinadigan baselines yordamida yurak kasalligi xavfini baholashga qaratilgan tuzilgan ML loyihasi (klinik deploy emas).",
      myRole:
        "Ma'lumotlarni tayyorlash, baselines, cross-validation va notebook natijalari bo'yicha metrikalar va cheklovlar hisoboti.",
      pipeline: [
        "Ustunlarni yuklash, tozalash, yo'qlik va masshtablash.",
        "Logistik regressiya va daraxt asosidagi modellar.",
        "Stratifikatsiyalangan splitlar, chalkashlik matritsasi.",
        "Haqiqiy skrining uchun nima kerakligi bilan xulosa.",
      ],
      results:
        "Etalon datasetda aniq baselines va sizib chiqish, klass balansi, tashqi validatsiya ehtiyoji muhokama qilindi.",
      galleryCaptions: ["Loyiha vizuali"],
    },
    customerChurn: {
      overview:
        "Harakat va shartnoma uslubidagi priznaklar bo'yicha churn signalini renewaldan oldin topish mashqi.",
      myRole:
        "Priznaklar, oddiy neyron va klassik modellar, baholash tanlovlari hujjatlari.",
      pipeline: [
        "Taqsimotlar va korrelyatsiya, gorizont yorlig'i.",
        "Tabular priznaklar va vaqt bo'yicha split.",
        "Keras/TensorFlow va klassik modellar.",
        "Retention uchun ranking va tavsiyalar.",
      ],
      results:
        "FN/FP muhokamasi va biznes bilan threshold tanlash kontekstida metrikalar.",
      galleryCaptions: ["Modeling"],
    },
    edaTitanic: {
      overview:
        "Titanic dataset sifati, munosabatlar va gipotezalarni modeldan oldin tekshirish.",
      myRole:
        "Bir va ikki o'zgaruvchili tahlil, vizualizatsiya, takrorlanadigan notebook.",
      pipeline: [
        "Yuklash, dtype, missing, dublikatlar.",
        "Omon qolish va omillar graflari.",
        "Outlier va encoding ehtiyoji.",
        "Modeling uchun asosiy grafiklar.",
      ],
      results:
        "Hayotiy signal bilan mos keladigan ustunlar va cheklovlar aniq aytilgan.",
      galleryCaptions: ["EDA", "Grafiklar"],
    },
    loanEligibility: {
      overview:
        "Ariza priznaklaridan loan eligibility uchun audit qilinadigan klassifikatsiya o'rganish.",
      myRole:
        "Logistik regressiya, random forest, feature importance, xato tahlili.",
      pipeline: [
        "Klasslar va muvaffaqiyat mezonlari.",
        "Preprocessing, balans, kalibratsiya.",
        "Modellar, precision/recall nuqtalari.",
        "Tasdiq/rad etish omillari.",
      ],
      results:
        "Tasdiq qulayligi va yuqori xavfli tasdiqlarni nazorat qilish o'rtasidagi tradeoff hujjatlangan.",
      galleryCaptions: ["Tahlil", "Modellar"],
    },
    rainbowAi: {
      overview:
        "Inspeksiya kirishlari uchun tuzilma diagnostikasi, hisobot va baholash oqimlari.",
      myRole:
        "Frontend integratsiyasi, UI oqimlari, performance va UX.",
      pipeline: [
        "Validatsiya holatlari bilan kirish.",
        "Model/hisobot chaqiruqlari va PDF chiqish.",
        "Tarmoq uchun yuklash/xato holatlari.",
        "Dizayn bilan iteratsiya.",
      ],
      results:
        "Operatorlar uchun qo'lda ko'chirish kamaydi, tezroq artefaktlar.",
      galleryCaptions: ["Platforma"],
    },
    rap3d: {
      overview:
        "Hamkorlik 3D maydoni: silliq interaksiya, umumiy holat, dizayn tizimi.",
      myRole:
        "R3F sahnalar, interaksiya, UI integratsiyasi.",
      pipeline: [
        "Sahna, materiallar, yorug'lik.",
        "Kamera va frame byudjeti.",
        "3D va React chegaralari.",
        "Past qurilmalarda profil.",
      ],
      results:
        "Maqsadli jihozda barqaror FPS va kutiladigan kechikish.",
      galleryCaptions: ["3D"],
    },
    rapFiles: {
      overview:
        "Kross-platform fayl boshqaruvi, xavfsiz kirish, ichki ko'rish, sinxron.",
      myRole:
        "Ro'yxat/detail, PDF preview, optimistik UI.",
      pipeline: [
        "Auth va route guard.",
        "Virtualized ro'yxat, retry.",
        "PDF fallback.",
        "Telemetriya.",
      ],
      results:
        "Mobil va desktopda kamroq ishonchsizlik, aniqroq sinxron xabar.",
      galleryCaptions: ["Fayl UI"],
    },
    greenShop: {
      overview:
        "Barqarorlik mavzusi, Tailwind, tez yuklanish his qilinadigan landing.",
      myRole:
        "Layout, grid, rasm, CTA ierarxiyasi.",
      pipeline: [
        "Mobile-first va tipografiya.",
        "Lazy-load.",
        "Kontrast va fokus.",
        "Statik hosting.",
      ],
      results:
        "Sodda utility classlar bilan marketing.",
      galleryCaptions: ["Hero", "Layout"],
    },
    banking: {
      overview:
        "Balans, o'tkazmalar, tarix uchun ishonchli banking UI.",
      myRole:
        "Navigatsiya, kartalar, jadval, skeleton.",
      pipeline: [
        "Ko'p hisoblar IA.",
        "Kartalar va jadvallar.",
        "Mikrointeraksiyalar.",
        "Responsive.",
      ],
      results:
        "Ma'lumot yo'q paytda ham o'qiladigan patternlar.",
      galleryCaptions: ["Dashboard", "UI"],
    },
    vizzano: {
      overview:
        "Moda vitrina: kuchli vizual, mobil birinchi grid.",
      myRole:
        "Listing, media, navigatsiya.",
      pipeline: [
        "Grid, aspect ratio.",
        "Filter/sort.",
        "Rasm o'lchamlari.",
        "QA breakpointlar.",
      ],
      results:
        "O'rta segment telefonlarda silliq brauzing.",
      galleryCaptions: ["Store", "Layout"],
    },
    trillo: {
      overview:
        "Sayohat bron qilish: filtrlar, kartalar, sharhlar, tushunarli oqim.",
      myRole:
        "Qidiruv, grid, sharh, CTA progressiyasi.",
      pipeline: [
        "Filter holati.",
        "Mehmonxona kartalari.",
        "Bron sidebar.",
        "Responsive va copy.",
      ],
      results:
        "Sanalar va narxlar bilan yo'lini yo'qotmasdan oqim.",
      galleryCaptions: ["Qidiruv", "Bron"],
    },
    memory: {
      overview:
        "Yengil xotira kartasi o'yini: qiyinchilik, animatsiya, kam UI shovqin.",
      myRole:
        "State machine, flip animatsiya, ball, qiyinchilik.",
      pipeline: [
        "Shuffle va adolat opsiyasi.",
        "Match, lockout, modal.",
        "prefers-reduced-motion.",
        "Touch va audio-off.",
      ],
      results:
        "Aniq feedback bilan qisqa seanslar.",
      galleryCaptions: ["O'yin", "Motion"],
    },
    portfolioSite: {
      overview:
        "Loyihalar, tajriba, aloqa, i18n bilan shaxsiy portfolio.",
      myRole:
        "IA, tema, ko'p tilli kontent, detail routing.",
      pipeline: [
        "Kontent modeli.",
        "Tema va nav.",
        "Galereyali sahifalar.",
        "Static build.",
      ],
      results:
        "Hero dan dalillar sahifasigacha tez sayt.",
      galleryCaptions: ["Sayt", "Struktura"],
    },
    monsterRolodex: {
      overview:
        "API ro'yxat, qidiruv, kartochkalar namoyishi.",
      myRole:
        "Fetch, filter, loading/error.",
      pipeline: [
        "JSON normalize.",
        "Debounced qidiruv.",
        "Grid fokus.",
        "Bo'sh va xato.",
      ],
      results:
        "Toza komponentlar va barqaror holat.",
      galleryCaptions: ["Directory", "UI"],
    },
  },
};

function mergeLocale(lang) {
  const file = path.join(root, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  data.projects.projectDetail = labels[lang];
  const slugMap = details[lang];
  for (const [slug, detail] of Object.entries(slugMap)) {
    if (!data.projects.items[slug]) {
      throw new Error(`Missing projects.items.${slug} in ${lang}.json`);
    }
    data.projects.items[slug].detail = detail;
  }
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log("updated", file);
}

["en", "ko", "uz"].forEach(mergeLocale);
