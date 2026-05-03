import heartImage from "../../assets/images/heartDisease.png";
import cusChurn from "../../assets/images/cusChurn.png";
import EDA from "../../assets/images/EDA.png";
import loanImage from "../../assets/images/EDA1.png";
import main from "../../assets/images/main.png";
import bank from "../../assets/images/bank.png";
import vizzano from "../../assets/images/vizzano.png";
import trillo from "../../assets/images/trillo.png";
import memory from "../../assets/images/memory.png";
import portfolio from "../../assets/images/portfolio.png";
import monster from "../../assets/images/monster.png";
import greenshop from "../../assets/images/greenshop.png";

/** @typedef {'ai' | 'data' | 'web'} ProjectCategory */

/**
 * Central project metadata. Copy is resolved via i18n keys under `projects.items.<slug>`.
 * Optional `gallery`: extra screenshots for the detail page (hero uses `image`).
 * @type {Array<{
 *   slug: string,
 *   category: ProjectCategory,
 *   image: string,
 *   technologies: string[],
 *   github: string | null,
 *   demo: string | null,
 *   gallery?: string[]
 * }>}
 */
export const projectsData = [
  {
    slug: "quazarLuxuryAuth",
    category: "ai",
    image: vizzano,
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Image Classification",
      "Ensemble Methods",
    ],
    github: null,
    demo: null,
    gallery: [vizzano, main],
  },
  {
    slug: "logMonitoringDashboard",
    category: "ai",
    image: bank,
    technologies: [
      "FastAPI",
      "scikit-learn",
      "TF-IDF",
      "Logistic Regression",
      "Next.js",
      "Recharts",
      "Python",
    ],
    github: null,
    demo: null,
    gallery: [bank, main],
  },
  {
    slug: "heartDisease",
    category: "ai",
    image: heartImage,
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github:
      "https://github.com/itsjk0307/Heart-Disease-Prediction/blob/main/Heart%20Disease%20Prediction.ipynb",
    demo: null,
    gallery: [heartImage],
  },
  {
    slug: "customerChurn",
    category: "ai",
    image: cusChurn,
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "Matplotlib"],
    github:
      "https://github.com/itsjk0307/Customer-Churn-Prediction/blob/main/Customer%20Churn%20Prediction.ipynb",
    demo: null,
    gallery: [cusChurn],
  },
  {
    slug: "edaTitanic",
    category: "data",
    image: EDA,
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
    github:
      "https://github.com/itsjk0307/Exploratory-Data-Analysis-EDA-Project/blob/main/Titanic-EDA-Project.ipynb",
    demo: null,
    gallery: [EDA, loanImage],
  },
  {
    slug: "loanEligibility",
    category: "data",
    image: loanImage,
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
      "Logistic Regression",
      "Random Forest",
    ],
    github: "https://github.com/yourrepo/loan-eligibility-prediction",
    demo: null,
    gallery: [loanImage, EDA],
  },
  {
    slug: "rainbowAi",
    category: "web",
    image: main,
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Apollo Client",
      "MobX",
    ],
    github: null,
    demo: null,
    gallery: [main],
  },
  {
    slug: "rap3d",
    category: "web",
    image: main,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Three.js",
      "React Three Fiber",
      "Luva UI",
      "MUI",
    ],
    github: null,
    demo: null,
    gallery: [main],
  },
  {
    slug: "rapFiles",
    category: "web",
    image: main,
    technologies: ["HTML", "CSS", "JavaScript", "React", "React Native"],
    github: null,
    demo: null,
    gallery: [main],
  },
  {
    slug: "greenShop",
    category: "web",
    image: greenshop,
    technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Node.js"],
    github: null,
    demo: "https://greenfl.netlify.app/",
    gallery: [greenshop, main],
  },
  {
    slug: "banking",
    category: "web",
    image: bank,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: null,
    demo: "https://banking-app-zeta.vercel.app/",
    gallery: [bank, main],
  },
  {
    slug: "vizzano",
    category: "web",
    image: vizzano,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: null,
    demo: "https://vizzano-mikro.vercel.app/",
    gallery: [vizzano, main],
  },
  {
    slug: "trillo",
    category: "web",
    image: trillo,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: null,
    demo: "https://trillo-omega.vercel.app/",
    gallery: [trillo, main],
  },
  {
    slug: "memory",
    category: "web",
    image: memory,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: null,
    demo: "https://memory-game-itsjk0307.vercel.app/",
    gallery: [memory, main],
  },
  {
    slug: "portfolioSite",
    category: "web",
    image: portfolio,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/itsjk0307",
    demo: "https://portfolio07-sigma.vercel.app/",
    gallery: [portfolio, main],
  },
  {
    slug: "monsterRolodex",
    category: "web",
    image: monster,
    technologies: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    github: null,
    demo: "https://mymonsters-roledox.vercel.app/",
    gallery: [monster, main],
  },
];

export function getProjectsByCategory(category) {
  return projectsData.filter((p) => p.category === category);
}

/** @param {string} slug */
export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug) ?? null;
}
