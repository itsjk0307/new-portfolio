const en = {
  nav: {
    brand: "Jamshid",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    allProjects: "All projects",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    name: "Jamshid Khaytbaev",
    role: "AI Engineer & Full-Stack Developer",
    tagline:
      "I design and ship production-ready AI systems with a focus on computer vision, NLP, and full-stack integration—from model training to APIs and polished web clients.",
    ctaProjects: "View projects",
    ctaContact: "Contact",
    scrollHint: "Scroll to explore",
  },
  about: {
    title: "About",
    lead:
      "I am an AI engineer and full-stack developer who bridges research-style experimentation with dependable software delivery.",
    bullets: [
      {
        title: "Production AI",
        text: "End-to-end pipelines for CV/NLP: data, training, evaluation, deployment, and monitoring.",
      },
      {
        title: "Full-stack integration",
        text: "React/TypeScript frontends and APIs that make models usable, observable, and maintainable.",
      },
      {
        title: "Collaboration",
        text: "Clear communication, iterative delivery, and pragmatic tradeoffs with stakeholders.",
      },
      {
        title: "Quality & UX",
        text: "Accessible interfaces, performance-aware UI, and thoughtful error handling.",
      },
    ],
    closing:
      "I enjoy hard problems, clean interfaces, and shipping software that teams can trust in production.",
  },
  experience: {
    title: "Experience",
    resume: "View full résumé",
    resumeUrl:
      "https://drive.google.com/file/d/1um1zw9LT1Zi8kQs-EYhjWdFkmR5xjYU6/view?usp=drive_link",
    items: [
      {
        id: "quazar",
        title: "AI Engineer",
        company: "Quazar Inc.",
        period: "February 2025 — June 2025",
        description:
          "Developed AI models for luxury authentication and price prediction. Built deep learning pipelines and integrated them into web applications for real-time decision-making.",
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
        title: "Frontend Developer Intern",
        company: "RainbowTech",
        period: "March 2023 — July 2023",
        description:
          "Built and maintained user interfaces for web projects. Learned best practices alongside senior developers and contributed to interactive 3D experiences.",
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
        title: "Frontend Developer Researcher",
        company: "RainbowTech",
        period: "July 2023 — September 2024",
        description:
          "Researched modern frontend stacks to improve delivery. Implemented optimized UIs, performance improvements, and scalable client architecture.",
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
    title: "Projects",
    subtitle: "Browse work by category. AI projects are listed first.",
    backHome: "Back to home",
    backProjects: "Back to projects",
  },
  projects: {
    title: "Selected projects",
    subtitle:
      "Problem-first highlights across AI/ML, data science, and full-stack web—optimized for clarity and impact.",
    sectionAi: "AI & machine learning",
    sectionDs: "Data science",
    sectionWeb: "Web development",
    problemLabel: "Problem",
    techLabel: "Tech stack",
    demo: "Live demo",
    source: "GitHub",
    viewAll: "View all projects",
    details: "Details",
    items: {
      heartDisease: {
        title: "Heart Disease Prediction",
        problem:
          "Clinicians need a fast, interpretable screening signal from structured patient data to prioritize follow-up and reduce missed risk.",
        problemShort:
          "Screen heart-disease risk from patient features with robust ML baselines.",
      },
      customerChurn: {
        title: "Customer Churn Prediction",
        problem:
          "Retention teams need early churn signals from behavioral and contract data to intervene before revenue is lost.",
        problemShort:
          "Predict churn with classical ML models and clear evaluation metrics.",
      },
      edaTitanic: {
        title: "Exploratory Data Analysis (Titanic)",
        problem:
          "Turn a messy tabular dataset into trustworthy plots and hypotheses before modeling begins.",
        problemShort:
          "EDA and visualization to uncover drivers of survival in the Titanic dataset.",
      },
      loanEligibility: {
        title: "Loan Eligibility Prediction",
        problem:
          "Loan officers need consistent, auditable eligibility signals from applicant features while minimizing false approvals.",
        problemShort:
          "Classification pipeline for loan eligibility with feature-driven insights.",
      },
      rainbowAi: {
        title: "RainbowTech AI Platform",
        problem:
          "Field teams needed automated structural assessments, PDF reporting, and cost estimates from building inspection inputs.",
        problemShort:
          "AI-assisted structural diagnostics with reporting and cost estimation.",
      },
      rap3d: {
        title: "RAP 3D Platform",
        problem:
          "Users needed a collaborative 3D workspace with smooth interaction, stable performance, and a cohesive UI system.",
        problemShort:
          "Real-time collaborative 3D platform built with React and Three.js.",
      },
      rapFiles: {
        title: "RAP File Management",
        problem:
          "Teams needed secure cross-device file access with in-app document viewing and reliable sync.",
        problemShort:
          "Cross-platform file management with integrated PDF viewing.",
      },
      greenShop: {
        title: "Green Shop",
        problem:
          "A sustainability brand needed a crisp landing experience with responsive layout and fast perceived performance.",
        problemShort:
          "Eco-themed landing page with Tailwind and a minimal UI system.",
      },
      banking: {
        title: "Financial Management Platform",
        problem:
          "Users needed a trustworthy banking UI for balances, transfers, and transaction history with clear states and feedback.",
        problemShort:
          "Responsive banking experience focused on clarity and navigation.",
      },
      vizzano: {
        title: "Vizzano App",
        problem:
          "Fashion inventory needed a modern storefront experience with strong visuals and smooth browsing on mobile.",
        problemShort:
          "Fashion showcase app with polished UI and responsive layouts.",
      },
      trillo: {
        title: "Trillo — Travel Booking",
        problem:
          "Travel shoppers need quick filtering, trustworthy summaries, and a booking flow that stays understandable end-to-end.",
        problemShort:
          "Travel booking UI with filters, reviews, and responsive layouts.",
      },
      memory: {
        title: "Interactive Puzzle Challenge",
        problem:
          "A lightweight cognitive game should feel delightful, responsive, and progressively challenging without noisy UI.",
        problemShort:
          "Memory card game with progressive difficulty and smooth motion.",
      },
      portfolioSite: {
        title: "Portfolio Website",
        problem:
          "Present projects and experience with recruiter-friendly structure, performance, and maintainable components.",
        problemShort:
          "Personal portfolio with responsive layout and clean information architecture.",
      },
      monsterRolodex: {
        title: "Monster Rolodex",
        problem:
          "Demonstrate API-driven lists, search, and reusable card UI patterns in a small React application.",
        problemShort:
          "Searchable monster directory powered by API-driven React UI.",
      },
    },
  },
  skills: {
    title: "Skills",
    subtitle: "Grouped by how I ship end-to-end AI products.",
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
        title: "Tools",
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
    title: "Contact",
    body: "Open to roles and collaborations in AI engineering and full-stack product teams.",
    emailLabel: "Email",
    locationLabel: "Location",
    location: "Open to remote / hybrid",
    socialHeading: "Links",
  },
  footer: {
    note: "Built with React. Deployed for fast static hosting.",
  },
};

export default en;
