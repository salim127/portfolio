export interface GithubLink {
  label: string;
  url: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'AI / Voice' | 'Mobile & Desktop' | 'Web App';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  githubLinks?: GithubLink[];  // Multiple repos for same project
  technologies: string[];
  features: string[];
  architecture?: string;
  image?: string;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Stage Ingénieur' | 'Stage PFE' | 'Stage Perfectionnement' | 'Stage Pratique' | 'Stage Initiation';
  description: string[];
  techStack: string[];
  badgeColor?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Salim HIZI",
  title: "Élève Ingénieur en Informatique",
  subtitle: "Développeur Full-Stack & Connecteur d'IA",
  school: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologie)",
  degree: "3ème année Cycle d'Ingénieur",
  bio: "Étudiant passionné par le développement logiciel full-stack, l'intelligence artificielle et les nouvelles technologies. Fort d'expériences pratiques en Spring Boot, NestJS, React, Angular, Symfony et Python, je me distingue par mon autonomie, ma rigueur et ma capacité à concrétiser des projets innovants à forte valeur ajoutée.",
  email: "salim.hizi@esprit.tn",
  phone: "+216 56 269 609",
  location: "Ariana, Tunis, Tunisie",
  github: "https://github.com/salim127",
  linkedin: "https://linkedin.com/in/salim-hizi", // profile fallback link
  cvPath: "/Salim_HIZI_CV.pdf",
};

export const PROJECTS: Project[] = [
  {
    id: "bmp-tn",
    title: "BMP.tn",
    tagline: "Plateforme digitale intelligente pour le secteur de la construction",
    description: "Marketplace web complète connectant artisans, experts du bâtiment et fabricants. Intègre un chatbot IA, la recherche vocale, un calculateur de devis par dataset et le paiement Stripe.",
    category: "AI / Voice",
    featured: true,
    demoUrl: "https://bmp-4lp3jo1gn-salims-projects-c221816c.vercel.app",
    githubUrl: "https://github.com/salim127/bmp",
    technologies: ["React.js", "Node.js", "Express.js", "Python", "MongoDB", "Stripe API", "Voice APIs", "AI Chatbot"],
    features: [
      "Marketplace multi-profils (artisans, experts, fabricants, clients)",
      "Recherche vocale interactive pour la navigation et les produits",
      "Chatbot intelligent de mise en relation selon la zone géographique et la spécialité",
      "Système de panier & paiement en ligne sécurisé via Stripe API",
      "Estimation intelligente du coût de chantier basée sur un dataset (surface, pièces, zone)",
      "Envoi automatique d'e-mails de confirmation de commande"
    ],
    architecture: "Architecture Microservices Hybride avec Backend Node/Express & microservice Python pour l'IA/Estimation.",
    metrics: "Déployé sur Vercel - Live Production"
  },
  {
    id: "ai-english-tutor",
    title: "AI English Tutor",
    tagline: "Tuteur interactif propulsé par l'IA pour l'apprentissage de la langue anglaise",
    description: "Application web innovante d'assistance linguistique offrant un coaching vocal en temps réel, des corrections grammaticales et des exercices de conversation adaptés.",
    category: "AI / Voice",
    featured: true,
    demoUrl: "https://ai-english-tutor-p35v9fs2u-salims-projects-c221816c.vercel.app",
    githubUrl: "https://github.com/salim127/ai-english-tutor",
    technologies: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Speech Recognition", "Web Audio API"],
    features: [
      "Dialogue conversationnel vocal fluide avec l'IA en temps réel",
      "Analyse instantanée de la prononciation et conseils personnalisés",
      "Explications grammaticales dynamiques et correction de syntaxe",
      "Suivi de progression et modules de vocabulaire interactifs"
    ],
    architecture: "React Single Page App connectée aux APIs IA & Speech Synthesis/Recognition du navigateur.",
    metrics: "Déployé sur Vercel - Live Production"
  },
  {
    id: "maison-maghreb",
    title: "Maison du Maghreb",
    tagline: "Plateforme e-commerce & valorisation de l'artisanat nord-africain",
    description: "Solution web et desktop intégrée pour la promotion des produits artisanaux, avec gestion de formations, réservations, billetterie par QR Code et paiements automatiques.",
    category: "Full-Stack",
    featured: true,
    githubUrl: "https://github.com/salim127/e-commerce-symfony",
    technologies: ["Symfony 6", "PHP 8", "MySQL", "Doctrine ORM", "JavaFX", "Python", "OpenAI API", "Stripe API", "Twilio SMS"],
    features: [
      "Développement complet de modules Symfony CRUD et interfaces d'administration",
      "Intégration d'APIs Stripe & SMS pour paiements et notifications automatiques",
      "Génération automatique d'e-mails contenant des QR Codes d'accès direct aux formations",
      "Gestion de calendrier interactif pour la planification des ateliers d'artisanat",
      "Interface Desktop compagnon réalisée en JavaFX & SceneBuilder"
    ]
  },
  {
    id: "warzeez-pfe",
    title: "Stage PFE – Warzeez Solution",
    tagline: "Plateforme B2B/B2C connectant fournisseurs, clients & livreurs (Admin + Client + Backend)",
    description: "Plateforme web complète développée en Stage PFE chez Warzeez Solution. Architecture fullstack Angular + Spring Boot avec 3 espaces dédiés : Admin (gestion globale & réclamations), Fournisseur (produits & catégories) et Livreur (sélection & suivi colis). Authentification sécurisée avec activation de compte par e-mail.",
    category: "Full-Stack",
    featured: true,
    githubLinks: [
      {
        label: "Backend Spring Boot + Interface Admin Angular",
        url: "https://github.com/salim127/PFE-site-E-commerce",
        description: "Contient le backend Spring Boot (API REST) et la partie admin Angular (gestion fournisseurs, réclamations, affectation des livreurs)"
      },
      {
        label: "Frontend Client Angular (pariteClientPfe)",
        url: "https://github.com/salim127/pariteClientPfe",
        description: "Interface client Angular avec suivi des livraisons en temps réel, authentification et espace fournisseur / livreur"
      }
    ],
    technologies: ["Angular", "Spring Boot", "Java 17", "TypeScript", "REST APIs", "MySQL", "JWT Auth", "Bootstrap"],
    features: [
      "Plateforme connectant fournisseurs, clients et livreurs avec Angular & Spring Boot",
      "Suivi des livraisons en temps réel et système d'authentification avec activation par e-mail",
      "Espace administrateur : gestion des fournisseurs, des réclamations et affectation des colis aux livreurs",
      "Espace fournisseur : gestion des produits et des catégories",
      "Espace livreur : sélection des livraisons et mise à jour de l'état des colis"
    ],
    architecture: "Architecture 3-tiers : Backend Spring Boot (API REST + JWT Auth) | Admin Angular (panel gestion) | Client Angular (espace client/livreur/fournisseur) | Base de données MySQL",
    metrics: "Stage PFE – Février 2024 à Mai 2024 – Warzeez Solution, Tunis"
  },
  {
    id: "volus-rh",
    title: "Portail RH & Gestion des Congés (VOLUS)",
    tagline: "Système entreprise de workflows d'approbation et audit des congés",
    description: "Application d'entreprise permettant la gestion multiniveau des demandes de congés, l'automatisation du calcul des soldes et la traçabilité complète via audit log.",
    category: "Full-Stack",
    featured: false,
    githubUrl: "https://github.com/salim127/salim_hizi_4twin8",
    technologies: ["React", "TypeScript", "Vite", "NestJS", "PostgreSQL", "TypeORM", "Tailwind CSS"],
    features: [
      "Workflows d'approbation multiniveaux selon la hiérarchie managériale",
      "Gestion automatisée des soldes de congés payés et RTT",
      "Système d'audit complet retraçant chaque action administrative",
      "Interface moderne ultra-rapide bâtie sur Vite et NestJS"
    ]
  },

  {
    id: "adoption-animale",
    title: "Adoption Animale & Vente",
    tagline: "Plateforme communautaire d'adoption d'animaux de compagnie",
    description: "Application web facilitant la mise en relation pour l'adoption responsable d'animaux.",
    category: "Web App",
    featured: false,
    githubUrl: "https://github.com/salim127/adoption-animale",
    technologies: ["PHP", "MySQL", "HTML5/CSS3", "JavaScript"],
    features: [
      "Fiches détaillées sur les animaux à adopter",
      "Formulaire de candidature et mise en relation direct avec les refuges"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "volus",
    role: "Stage Ingénieur - Développeur Full-Stack",
    company: "VOLUS",
    location: "Tunis, Tunisie",
    period: "Juillet 2026 – Août 2026",
    type: "Stage Ingénieur",
    badgeColor: "from-sky-500 to-blue-600",
    description: [
      "Conception et développement d'un portail RH d'entreprise pour la gestion des congés.",
      "Mise en place de workflows d'approbation multiniveaux pour valider les demandes selon le rôle hiérarchique.",
      "Gestion automatisée du calcul des soldes de congés et intégration d'un système d'audit complet.",
      "Architecture robuste s'appuyant sur NestJS, PostgreSQL avec TypeORM et une interface React / TypeScript."
    ],
    techStack: ["React", "TypeScript", "Vite", "NestJS", "PostgreSQL", "TypeORM"]
  },
  {
    id: "warzeez",
    role: "Stage PFE - Développeur Full-Stack (Angular / Spring Boot)",
    company: "Warzeez Solution",
    location: "Tunis, Tunisie",
    period: "Février 2024 – Mai 2024",
    type: "Stage PFE",
    badgeColor: "from-purple-500 to-indigo-600",
    description: [
      "Développement d'une plateforme web connectant fournisseurs, clients et livreurs.",
      "Conception d'une interface utilisateur avec suivi des livraisons en temps réel et activation de compte par e-mail.",
      "Développement d'un espace administrateur pour la gestion des fournisseurs, des réclamations et l'affectation des colis.",
      "Création d'espaces dédiés pour les fournisseurs (gestion des produits) et pour les livreurs (mise à jour des statuts)."
    ],
    techStack: ["Angular", "Spring Boot", "Java", "TypeScript", "REST API", "MySQL"]
  },
  {
    id: "wevioo",
    role: "Stage de Perfectionnement - Développeur Joget BPM",
    company: "Wevioo",
    location: "Ariana Essoughra, Ariana",
    period: "Janvier 2023 – Février 2023",
    type: "Stage Perfectionnement",
    badgeColor: "from-emerald-500 to-teal-600",
    description: [
      "Création d'une application sur Joget Workflow pour la gestion optimisée des projets et des plugins.",
      "Analyse, test et validation des plugins fonctionnels et non fonctionnels avant leur intégration dans la plateforme."
    ],
    techStack: ["Joget DX", "Java", "Workflow BPM", "Testing APIs"]
  },
  {
    id: "al-jawda",
    role: "Stage Pratique - Développeur Web",
    company: "Société Al Jawda",
    location: "El Haouaria, Nabeul",
    period: "Juillet 2022 – Septembre 2022",
    type: "Stage Pratique",
    badgeColor: "from-amber-500 to-orange-600",
    description: [
      "Développement d'un site web e-commerce sur mesure pour un nouveau point de vente en utilisant PHP et MySQL."
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "tunisie-telecom",
    role: "Stage d'Initiation - Technicien Réseau",
    company: "Tunisie Télécom",
    location: "Kasserine Nord, Kasserine",
    period: "Janvier 2022 – Février 2022",
    type: "Stage Initiation",
    badgeColor: "from-slate-500 to-slate-700",
    description: [
      "Configuration des équipements et machines sur les réseaux mobiles 3G/4G."
    ],
    techStack: ["Réseaux Mobiles", "Configuration Hardware", "Télécoms"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "esprit",
    degree: "Diplôme d'Ingénieur en Informatique",
    institution: "ESPRIT - École Supérieure Privée d'Ingénierie et de Technologie",
    period: "Sept 2024 – Présent (3ème année)",
    details: "Spécialisation en ingénierie logicielle, architecture web moderne, microservices, cloud et intégration d'intelligences artificielles."
  },
  {
    id: "isetkl",
    degree: "Licence en Développement des Systèmes d'Information (DSI)",
    institution: "ISETKL - Institut Supérieur des Études Technologiques de Kélibia",
    period: "Sept 2021 – Mai 2024",
    details: "Formation académique approfondie en algorithmique, bases de données, génie logiciel et développement orienté objet."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Java", level: 88 },
      { name: "PHP", level: 85 },
      { name: "Python", level: 82 },
      { name: "SQL", level: 88 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    category: "Frameworks & Backend",
    iconName: "Server",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "NestJS", level: 85 },
      { name: "Node.js / Express", level: 88 },
      { name: "Symfony 6", level: 84 },
      { name: "TypeORM / Doctrine", level: 85 }
    ]
  },
  {
    category: "Frontend & Mobile",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Angular", level: 86 },
      { name: "Vite", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 90 },
      { name: "Flutter", level: 75 },
      { name: "JavaFX", level: 80 }
    ]
  },
  {
    category: "Databases & AI",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 86 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 84 },
      { name: "OpenAI API", level: 88 },
      { name: "Stripe API & Webhooks", level: 85 },
      { name: "Speech & Voice APIs", level: 82 }
    ]
  },
  {
    category: "DevOps & Outillage",
    iconName: "Terminal",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "CI/CD & Jenkins", level: 75 },
      { name: "Vercel / Cloud Deploy", level: 90 },
      { name: "Postman / Swagger", level: 88 },
      { name: "IntelliJ / VS Code", level: 95 }
    ]
  }
];
