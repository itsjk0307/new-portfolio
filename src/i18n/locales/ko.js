const ko = {
  nav: {
    brand: "Jamshid",
    about: "소개",
    experience: "경력",
    projects: "프로젝트",
    skills: "기술",
    contact: "연락",
    allProjects: "전체 프로젝트",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
  },
  hero: {
    name: "Jamshid Khaytbaev",
    role: "AI 엔지니어 & 풀스택 개발자",
    tagline:
      "컴퓨터 비전, NLP, 그리고 프로덕션 수준의 AI 애플리케이션에 집중합니다. 모델 학습부터 API, 세련된 웹 클라이언트까지 엔드투엔드로 설계하고 배포합니다.",
    ctaProjects: "프로젝트 보기",
    ctaContact: "연락하기",
    scrollHint: "스크롤하여 탐색",
  },
  about: {
    title: "소개",
    lead:
      "저는 연구형 실험과 안정적인 소프트웨어 전달 사이를 연결하는 AI 엔지니어이자 풀스택 개발자입니다.",
    bullets: [
      {
        title: "프로덕션 AI",
        text: "CV/NLP를 위한 엔드투엔드 파이프라인: 데이터, 학습, 평가, 배포, 모니터링.",
      },
      {
        title: "풀스택 통합",
        text: "모델을 실사용 가능하고 관측 가능하며 유지보수하기 쉽게 만드는 React/TypeScript와 API.",
      },
      {
        title: "협업",
        text: "명확한 커뮤니케이션, 반복적 전달, 이해관계자와의 실용적 트레이드오프.",
      },
      {
        title: "품질 & UX",
        text: "접근성 있는 인터페이스, 성능을 고려한 UI, 세심한 오류 처리.",
      },
    ],
    closing:
      "어려운 문제, 깔끔한 인터페이스, 프로덕션에서 신뢰할 수 있는 소프트웨어를 만드는 일을 좋아합니다.",
  },
  experience: {
    title: "경력",
    resume: "이력서 전체 보기",
    resumeUrl:
      "https://drive.google.com/file/d/1um1zw9LT1Zi8kQs-EYhjWdFkmR5xjYU6/view?usp=drive_link",
    items: [
      {
        id: "quazar",
        title: "AI 엔지니어",
        company: "Quazar Inc.",
        period: "2025년 2월 — 2025년 6월",
        description:
          "럭셔리 정품 감정 및 가격 예측을 위한 AI 모델을 개발했습니다. 딥러닝 파이프라인을 구축하고 실시간 의사결정을 위해 웹 애플리케이션에 통합했습니다.",
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
        title: "프론트엔드 개발 인턴",
        company: "RainbowTech",
        period: "2023년 3월 — 2023년 7월",
        description:
          "웹 프로젝트의 사용자 인터페이스를 구축하고 유지보수했습니다. 시니어 개발자와 함께 모범 사례를 학습하고 인터랙티브 3D 경험에 기여했습니다.",
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
        title: "프론트엔드 개발 리서처",
        company: "RainbowTech",
        period: "2023년 7월 — 2024년 9월",
        description:
          "전달 속도를 높이기 위해 최신 프론트엔드 스택을 조사했습니다. 최적화된 UI, 성능 개선, 확장 가능한 클라이언트 아키텍처를 구현했습니다.",
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
    title: "프로젝트",
    subtitle: "카테고리별로 살펴보세요. AI 프로젝트가 먼저 표시됩니다.",
    backHome: "홈으로",
    backProjects: "프로젝트 목록으로",
  },
  projects: {
    title: "주요 프로젝트",
    subtitle:
      "AI/ML, 데이터 사이언스, 풀스택 웹 전반의 문제 중심 하이라이트—명확성과 임팩트에 맞춰 정리했습니다.",
    sectionAi: "AI & 머신러닝",
    sectionDs: "데이터 사이언스",
    sectionWeb: "웹 개발",
    problemLabel: "문제",
    techLabel: "기술 스택",
    demo: "라이브 데모",
    source: "GitHub",
    viewAll: "전체 프로젝트 보기",
    details: "자세히",
    items: {
      heartDisease: {
        title: "심장병 예측",
        problem:
          "임상가는 후속 조치 우선순위를 정하고 놓치는 위험을 줄이기 위해 구조화된 환자 데이터에서 빠르고 해석 가능한 스크리닝 신호가 필요합니다.",
        problemShort:
          "견고한 ML 베이스라인으로 환자 특성에서 심장병 위험을 스크리닝합니다.",
      },
      customerChurn: {
        title: "고객 이탈 예측",
        problem:
          "리텐션 팀은 수익이 줄어들기 전에 행동 및 계약 데이터에서 조기 이탈 신호가 필요합니다.",
        problemShort:
          "전통적인 ML 모델과 명확한 평가 지표로 이탈을 예측합니다.",
      },
      edaTitanic: {
        title: "탐색적 데이터 분석 (타이타닉)",
        problem:
          "모델링 전에 지저분한 표 데이터를 신뢰할 수 있는 플롯과 가설로 전환합니다.",
        problemShort:
          "타이타닉 데이터셋에서 생존 요인을 찾기 위한 EDA 및 시각화.",
      },
      loanEligibility: {
        title: "대출 적격 예측",
        problem:
          "대출 담당자는 잘못된 승인을 최소화하면서 신청자 특징에서 일관되고 감사 가능한 적격 신호가 필요합니다.",
        problemShort:
          "특성 기반 인사이트가 있는 대출 적격 분류 파이프라인.",
      },
      rainbowAi: {
        title: "RainbowTech AI 플랫폼",
        problem:
          "현장 팀은 건물 점검 입력에서 자동 구조 평가, PDF 보고서, 비용 추정이 필요했습니다.",
        problemShort:
          "보고 및 비용 추정이 있는 AI 보조 구조 진단.",
      },
      rap3d: {
        title: "RAP 3D 플랫폼",
        problem:
          "사용자는 부드러운 상호작용, 안정적인 성능, 일관된 UI 시스템이 있는 협업 3D 작업 공간이 필요했습니다.",
        problemShort:
          "React와 Three.js로 구축된 실시간 협업 3D 플랫폼.",
      },
      rapFiles: {
        title: "RAP 파일 관리",
        problem:
          "팀은 인앱 문서 보기와 안정적인 동기화가 있는 안전한 크로스 디바이스 파일 접근이 필요했습니다.",
        problemShort:
          "통합 PDF 뷰어가 있는 크로스 플랫폼 파일 관리.",
      },
      greenShop: {
        title: "Green Shop",
        problem:
          "지속가능성 브랜드는 반응형 레이아웃과 빠른 체감 성능이 있는 선명한 랜딩 경험이 필요했습니다.",
        problemShort:
          "Tailwind와 미니멀 UI 시스템이 있는 친환경 랜딩 페이지.",
      },
      banking: {
        title: "금융 관리 플랫폼",
        problem:
          "사용자는 잔액, 이체, 거래 내역을 위한 신뢰할 수 있는 뱅킹 UI와 명확한 상태 및 피드백이 필요했습니다.",
        problemShort:
          "명확성과 내비게이션에 초점을 맞춘 반응형 뱅킹 경험.",
      },
      vizzano: {
        title: "Vizzano 앱",
        problem:
          "패션 인벤토리는 모바일에서 강한 비주얼과 부드러운 탐색이 있는 현대적인 스토어프론트 경험이 필요했습니다.",
        problemShort:
          "세련된 UI와 반응형 레이아웃의 패션 쇼케이스 앱.",
      },
      trillo: {
        title: "Trillo — 여행 예약",
        problem:
          "여행 쇼핑객은 처음부터 끝까지 이해하기 쉬운 예약 흐름으로 빠른 필터링, 신뢰할 수 있는 요약이 필요합니다.",
        problemShort:
          "필터, 리뷰, 반응형 레이아웃이 있는 여행 예약 UI.",
      },
      memory: {
        title: "인터랙티브 퍼즐 챌린지",
        problem:
          "가벼운 인지 게임은 시끄러운 UI 없이 즐겁고 반응성이 좋으며 점진적으로 도전적이어야 합니다.",
        problemShort:
          "점진적 난이도와 부드러운 모션이 있는 메모리 카드 게임.",
      },
      portfolioSite: {
        title: "포트폴리오 웹사이트",
        problem:
          "채용 담당자 친화적 구조, 성능, 유지보수 가능한 컴포넌트로 프로젝트와 경험을 제시합니다.",
        problemShort:
          "반응형 레이아웃과 깔끔한 정보 구조의 개인 포트폴리오.",
      },
      monsterRolodex: {
        title: "Monster Rolodex",
        problem:
          "작은 React 애플리케이션에서 API 기반 목록, 검색, 재사용 가능한 카드 UI 패턴을 보여줍니다.",
        problemShort:
          "API 기반 React UI로 구동되는 검색 가능한 몬스터 디렉터리.",
      },
    },
  },
  skills: {
    title: "기술",
    subtitle: "엔드투엔드 AI 제품을 전달하는 방식으로 그룹화했습니다.",
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
        title: "프론트엔드",
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
        title: "백엔드",
        items: [
          "REST APIs",
          "Node.js",
          "GraphQL",
          "Authentication patterns",
          "Integration testing mindset",
        ],
      },
      tools: {
        title: "도구",
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
    title: "연락",
    body: "AI 엔지니어링 및 풀스택 제품 팀의 역할과 협업을 열어두고 있습니다.",
    emailLabel: "이메일",
    locationLabel: "위치",
    location: "원격 / 하이브리드 가능",
    socialHeading: "링크",
  },
  footer: {
    note: "React로 제작. 정적 호스팅에 최적화되어 배포되었습니다.",
  },
};

export default ko;
