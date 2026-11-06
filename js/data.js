/* ==========================================================================
   Content for the portfolio (EN / FR), taken from the two resumes.
   Edit text here – the page is rendered from this file by main.js.
   ========================================================================== */

const PROFILE = {
  email: "mehdichibani2@gmail.com",
  phone: "+212 662035527",
  phoneHref: "+212662035527",
  linkedin: "https://linkedin.com/in/mehdi-chibani-rn",
  github: "https://github.com/mehdiChibani",
  cv: {
    en: "assets/Mehdi_CHIBANI_CV_EN.pdf",
    fr: "assets/Mehdi_CHIBANI_CV_FR.pdf",
    frClassic: "assets/Mehdi_CHIBANI_CV_FR_classique.pdf",
  },
  startYear: 2020, // first professional position (used for "years of experience")
};

/* ---------- UI strings ---------- */
const I18N = {
  en: {
    "meta.title": "Mehdi CHIBANI – Senior Mobile Fullstack Development Consultant",
    "meta.desc":
      "Portfolio of Mehdi Chibani, senior mobile & full-stack consultant specializing in React Native and Flutter. Insurance, public services and fintech apps.",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.apps": "Shipped apps",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.hire": "Let's talk",
    "hero.eyebrow": "Senior Mobile Development Consultant",
    "hero.role": "Senior Mobile Development Consultant<br />React Native / Flutter & Spring",
    "hero.tagline":
      "I work on the design and overhaul of high-impact applications, particularly in the insurance and public services sectors.",
    "hero.f1": "Clean Architecture",
    "hero.f2": "Performance",
    "hero.f3": "Agile / Scrum",
    "hero.f4": "API Integration",
    "hero.f5": "UI/UX",
    "hero.f6": "Mentoring",
    "hero.cta": "View My Experience",
    "hero.cv": "Download CV",
    "hero.cvClassic": "Download the classic CV",
    "hero.chip2": "Based in Morocco",
    "stats.years": "Years of professional experience",
    "stats.clients": "Major clients (insurance, public services and healthcare)",
    "about.kicker": "About me",
    "about.title": "Senior Mobile & Full-Stack Development Consultant",
    "about.p1":
      "Mobile development consultant specializing in React Native and Flutter, with experience in the design, development and modernization of high-impact mobile applications in Morocco, particularly within the insurance and public services sectors.",
    "about.p2":
      "I support organizations in delivering scalable, maintainable and user-centric mobile solutions, from initial concept and architecture through to deployment and production release. Experienced in Agile (Scrum) environments, I also contribute to performance optimization, code quality improvement, and the mentoring and guidance of development teams.",
    "about.skills": "Toolbox",
    "skills.mobile": "Mobile",
    "skills.lang": "Languages",
    "skills.state": "State & backend",
    "skills.tools": "Tools & integrations",
    "exp.kicker": "Career",
    "exp.title": "Experience",
    "exp.sub": "A career built around ambitious projects and applications used every day.",
    "exp.present": "Present",
    "exp.stack": "Stack",
    "exp.missions": "Client missions",
    "exp.early": "Early experience – internships",
    "exp.play": "Google Play",
    "exp.soon": "Case study soon",
    "apps.kicker": "In production",
    "apps.title": "Apps I shipped for my clients",
    "apps.sub": "Insurance, public services and healthcare.",
    "apps.open": "Open on Google Play",
    "apps.view": "View full size",
    "apps.close": "Close",
    "proj.kicker": "Side projects",
    "proj.title": "Personal & academic projects",
    "proj.sub": "Where I experiment, learn and build products from scratch.",
    "proj.inprogress": "In progress",
    "proj.done": "Completed",
    "edu.kicker": "Background",
    "edu.title": "Education",
    "contact.kicker": "Contact",
    "contact.title": "Let's build something great together",
    "contact.sub":
      "Have a mobile project, a modernization challenge or a team to coach? I'd love to hear about it.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.cta": "Send me an email",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top",
    "theme.toggle": "Toggle light / dark theme",
    "lang.toggle": "Switch language",
    "menu.toggle": "Open menu",
  },
  fr: {
    "meta.title": "Mehdi CHIBANI – Consultant senior en développement mobile fullstack",
    "meta.desc":
      "Portfolio de Mehdi Chibani, consultant senior en développement mobile full-stack spécialisé en React Native et Flutter. Applications assurance, services publics et fintech.",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.apps": "Apps publiées",
    "nav.projects": "Projets",
    "nav.education": "Formations",
    "nav.contact": "Contact",
    "nav.hire": "Discutons",
    "hero.eyebrow": "Consultant senior en développement mobile",
    "hero.role": "Consultant senior en développement mobile<br />React Native / Flutter & Spring",
    "hero.tagline":
      "J'interviens sur la conception et la refonte d'applications à fort enjeu, notamment dans les secteurs de l'assurance et services publics.",
    "hero.f1": "Clean Architecture",
    "hero.f2": "Performance",
    "hero.f3": "Agile / Scrum",
    "hero.f4": "Intégration d'API",
    "hero.f5": "UI/UX",
    "hero.f6": "Mentorat",
    "hero.cta": "Voir mes expériences",
    "hero.cv": "Télécharger le CV en version simplifiée",
    "hero.cvClassic": "Télécharger le CV en format classique",
    "hero.chip2": "Basé au Maroc",
    "stats.years": "Années d'expérience professionnelle",
    "stats.clients": "Grands clients (assurance, services publics et santé)",
    "about.kicker": "À propos",
    "about.title": "Consultant senior en développement mobile full-stack",
    "about.p1":
      "Consultant en développement mobile spécialisé en React Native et Flutter, j'interviens sur la conception et la refonte d'applications à fort enjeu, notamment dans les secteurs de l'assurance et des services publics.",
    "about.p2":
      "J'accompagne les entreprises dans la création d'applications performantes, maintenables et centrées sur l'expérience utilisateur, de la phase de conception jusqu'à la mise en production. Habitué aux environnements Agile (Scrum), je contribue également à l'optimisation des performances, à l'amélioration de la qualité du code et à l'encadrement des équipes techniques.",
    "about.skills": "Boîte à outils",
    "skills.mobile": "Mobile",
    "skills.lang": "Langages",
    "skills.state": "État & backend",
    "skills.tools": "Outils & intégrations",
    "exp.kicker": "Parcours",
    "exp.title": "Expérience",
    "exp.sub": "Un parcours construit autour de projets ambitieux et d'applications utilisées au quotidien",
    "exp.present": "Aujourd'hui",
    "exp.stack": "Technologies",
    "exp.missions": "Missions clients",
    "exp.early": "Débuts – stages",
    "exp.play": "Google Play",
    "exp.soon": "Étude de cas bientôt",
    "apps.kicker": "En production",
    "apps.title": "Apps que j'ai publiées pour mes clients",
    "apps.sub": "Assurance, services publics et santé.",
    "apps.open": "Ouvrir sur Google Play",
    "apps.view": "Voir en grand",
    "apps.close": "Fermer",
    "proj.kicker": "Side projects",
    "proj.title": "Projets personnels & académiques",
    "proj.sub": "Là où j'expérimente, j'apprends et je construis des produits de zéro.",
    "proj.inprogress": "En cours",
    "proj.done": "Terminé",
    "edu.kicker": "Parcours académique",
    "edu.title": "Formations",
    "contact.kicker": "Contact",
    "contact.title": "Construisons quelque chose de grand ensemble",
    "contact.sub":
      "Un projet mobile, un défi de refonte ou une équipe à accompagner ? Parlons-en.",
    "contact.email": "E-mail",
    "contact.phone": "Téléphone",
    "contact.cta": "M'envoyer un e-mail",
    "footer.rights": "Tous droits réservés.",
    "footer.top": "Retour en haut",
    "theme.toggle": "Basculer thème clair / sombre",
    "lang.toggle": "Changer de langue",
    "menu.toggle": "Ouvrir le menu",
  },
};

/* ---------- Skills (names are universal, groups are translated) ---------- */
const SKILLS = [
  { group: "skills.mobile", items: ["React Native", "Flutter", "Ionic", "Xamarin.Forms"] },
  { group: "skills.lang", items: ["TypeScript", "JavaScript", "Dart", "Java", "PHP"] },
  {
    group: "skills.state",
    items: ["Zustand", "Redux", "Riverpod", "Firebase", "OneSignal", "Supabase", "Spring Boot", "Laravel", ".NET Core", "React / Next.js"],
  },
  {
    group: "skills.tools",
    items: ["Vision Camera", "ML Kit", "OneSignal", "Google Maps", "GitLab", "Jira", "Azure DevOps", "Scrum"],
  },
];

/* ---------- Experience ---------- */
/* Extra apps in the shipped-apps grid (not tied to an experience mission). */
const SHOWCASE_APPS = [
  {
    title: "Medicalliance",
    client: "Medicalliance",
    logo: "assets/img/medicalliance.png",
    hue: 198,
    play: "https://play.google.com/store/apps/details?id=com.medicalliance",
  },
  {
    title: "Thrombo",
    client: "Sanofi",
    logo: "assets/img/sanofi.png",
    hue: 214,
    screenshot: "assets/img/thrombo.jpg",
    alt: {
      en: "Thrombo by Sanofi: events, news and the thromboembolic risk calculator",
      fr: "Thrombo par Sanofi : événements, actualités et calculateur de risque thromboembolique",
    },
  },
];

const PLAY = {
  oncf: "https://play.google.com/store/apps/details?id=ma.oncf.oncfmobileapp&hl=fr",
  wafa: "https://play.google.com/store/apps/details?id=ma.wafaassurance.wafahealth",
  pass: "https://play.google.com/store/apps/details?id=com.passjeunesrn",
};

const EXPERIENCE = [
  {
    id: "neosys",
    company: "NEOSYS",
    url: "https://www.neosys.company/",
    current: true,
    period: { en: "Feb 2025 – Present", fr: "Fév. 2025 – Aujourd'hui" },
    role: { en: "Mobile development consultant", fr: "Consultant en développement mobile" },
    mode: { en: "On-site at the client's headquarters", fr: "Freelance sur site" },
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "OneSignal", "Zustand", "GitLab", "Vision Camera", "ML Kit"],
    missions: [
      {
        client: "ONCF",
        title: "ONCF Voyages",
        logo: "assets/img/oncf-voyages.png",
        period: null,
        play: PLAY.oncf,
        summary: {
          en: "Participated in the development of the ONCF Voyages mobile application, a digital platform for ONCF (Morocco's national railway operator), dedicated to train and Supratours bus journey planning, real-time train delay tracking and automated delay certificate generation. It also delivers updates on railway works, travel offers and ONCF services across Morocco.",
          fr: "Participation au développement de l’application mobile ONCF Voyages, solution digitale dédiée à la planification des voyages en train et autocars Supratours, avec consultation des retards de trains et génération des bulletins de retard. L'application intègre également les nouveautés liées aux travaux ferroviaires, aux offres de voyages et à l'ensemble des services ONCF au Maroc.",
        },
        bullets: {
          en: [
            "Implemented a secure authentication system, including biometric login.",
            "Developed an automated PDF delay certificate generation feature, accessible via QR code scanning of train tickets.",
            "Integrated a front-camera-based face detection module for generating user profile pictures and travel cards",
            "Integrated and optimized key features including discount-card association, segmented push notifications and deep-linking to improve user engagement and retention.",
          ],
          fr: [
            "Mise en place d'un système d'authentification sécurisé, incluant la connexion biométrique.",
            "Génération automatique du bulletin de retard au format PDF, accessible via le scan du code QR des billets de train.",
            "Module de détection de visage basé sur la caméra frontale pour la création des photos des cartes des utilisateurs.",
            "Intégration et optimisation des tarifs réduits, des notifications segmentées et des liens profonds pour renforcer l'engagement et la fidélisation.",
          ],
        },
      },
    ],
  },
  {
    id: "aramobile",
    company: "Aramobile",
    url: "https://www.aramobile.com/",
    current: false,
    period: { en: "Oct 2020 – Feb 2025", fr: "Oct. 2020 – Fév. 2025" },
    role: { en: "Mobile Application Engineer", fr: "Ingénieur en développement mobile" },
    mode: { en: "On-site at the client's headquarters", fr: "Prestation sur site" },
    stack: ["React Native", "JavaScript", "TypeScript", "Flutter", "Dart", "React", "Next.js", "Firebase", "GitLab"],
    missions: [
      {
        client: "Wafa Assurance",
        title: "My Wafa",
        logo: "assets/img/my-wafa.png",
        period: { en: "Aug 2023 – Feb 2025", fr: "Août 2023 – Fév. 2025" },
        play: PLAY.wafa,
        summary: {
          en: "Contributed to the end-to-end technical and design overhaul of the My Wafa mobile application, a digital platform for managing automobile, health insurance, savings and home multi-risk policies.",
          fr: "Contribution á la refonte de l'application My Wafa pour la gestion des dossiers d'assurance automobile, santé, épargne et multirisques d'habitation.",
        },
        bullets: {
          en: [
            "Development and integration of a real-time claims tracking feature, enabling users to monitor the status and progress of their claims.",
            "Developed a geolocation-based feature for emergency assistance and locating approved garages.",
            "Implemented a photo capture feature enabling real-time processing of car insurance claims using pictures of damaged vehicles.",
          ],
          fr: [
            "Intégration du module de suivi en temps réel de l'avancement des dossiers de sinistres.",
            "Création d'un système de géolocalisation des secours et garages agréés.",
            "Prise de photos pour le remplissage en temps réel des dossiers sinistres automobiles avec les images du véhicule accidenté.",
          ],
        },
      },
      {
        client: { en: "Ministry of Youth, Culture & Communication", fr: "Ministère de la Jeunesse, Culture & Communication" },
        title: "Pass Jeunes",
        logo: "assets/img/pass-jeunes.png",
        period: { en: "Jun 2022 – Aug 2023", fr: "Juin 2022 – Août 2023" },
        play: PLAY.pass,
        summary: {
          en: "Contributed to the development of the Pass Jeunes mobile application, a national digital platform giving young residents in Morocco discounts, free access and exclusive benefits, facilitating access to cultural and public services.",
          fr: "Implication dans le développement de l’application mobile Pass Jeunes dédiée aux jeunes résidants au Maroc pour leur offrir des réductions, gratuités et d'autres avantages qui facilitent l'accès aux services culturels.",
        },
        bullets: {
          en: [
            "Development and integration of multiple payment flows using React Native WebView and In-App Browser.",
            "Designed and implemented a geolocation-based feature to display nearby offers and services.",
            "Developed a seat booking system for theaters and performance halls, with an interactive, real-time seating map showing available seats.",
            "Performed unit testing, troubleshooting and debugging to ensure quality, reliability and performance.",
          ],
          fr: [
            "Mise en place de plusieurs pages de paiement avec React Native WebView et In-App Browser.",
            "Système de réservation de places pour les salles de spectacle, avec plan de salle interactif en temps réel.",
            "Système de géolocalisation pour afficher les offres proches de l'utilisateur.",
            "Tests unitaires et débogage pour garantir la qualité et la fiabilité du produit final.",
          ],
        },
      },
      {
        client: "Wafa Assurance",
        title: "Wafa Santé",
        logo: "assets/img/my-wafa.png",
        period: { en: "Nov 2020 – May 2022", fr: "Nov. 2020 – Mai 2022" },
        play: PLAY.wafa,
        summary: {
          en: "Analysis, technical design, and development of the Wafa Santé mobile application, a digital health platform enabling policyholders to manage medical claims, beneficiaries and healthcare coverage tracking.",
          fr: "Analyse, conception et réalisation de l’application Wafa Santé pour la gestion et suivi des dossiers maladie, prises en charge et bénéficiaires des adhérents santé de Wafa Assurance.",
        },
        bullets: {
          en: [
            "Thechnical design and development of features for managing and tracking medical records.",
            "Implemented a geolocation system to display nearby on-duty pharmacies based on the user's location.",
            "Implemented key features, including beneficiary management, beneficiary record access, coverage tracking, and push notifications.",
          ],
          fr: [
            "Conception et développement des fonctionnalités de gestion et suivi des dossiers de santé.",
            "Géolocalisation des pharmacies de garde à proximité de l'utilisateur.",
            "Gestion et consultation des bénéficiaires, suivi des prises en charge et système de notifications push.",
          ],
        },
      },
    ],
  },
];

const INTERNSHIPS = [
  {
    company: "Algo Consulting Group",
    period: { en: "Feb – Aug 2020", fr: "Fév. – Août 2020" },
    title: { en: "ONCF train disruption app", fr: "Application des situations perturbées – ONCF" },
    desc: {
      en: "Development of a mobile application for ONCF providing real-time information on train service disruptions and operational incidents.",
      fr: "Mise en place d'une application mobile pour la diffusion des situations perturbées des trains pour l'ONCF.",
    },
    stack: ["Flutter", "Dart", "Firebase", ".NET Core", "Azure DevOps"],
  },
  {
    company: "Algo Consulting Group",
    period: { en: "Jun – Aug 2019", fr: "Juin – Août 2019" },
    title: { en: "Ministry of Agriculture – subsidies platform", fr: "Ministère de l'Agriculture – plateforme de subventions" },
    desc: {
      en: "Digital platform to streamline subsidy application and management for the Ministry of Agriculture, Maritime Fisheries, Rural Development, and Water and Forests.",
      fr: "Système de dématérialisation des services d'obtention des subventions auprès du ministère de l'Agriculture, de la Pêche maritime, du Développement rural et des Eaux et Forêts.",
    },
    stack: ["Xamarin.Forms", ".NET Core", "Azure DevOps"],
  },
  {
    company: "RNDFY",
    period: { en: "Jul – Sep 2018", fr: "Juil. – Sep. 2018" },
    title: { en: "E-commerce app & admin platform", fr: "Application e-commerce & back-office" },
    desc: {
      en: "Analysis, design and development of a full-stack e-commerce solution (mobile app and admin web platform) for facial and skincare masks.",
      fr: "Analyse, conception et réalisation d'une application mobile e-commerce et de son site d'administration, pour la vente de masques de soin visage et peau.",
    },
    stack: ["React Native", "ReactJS", "PHP", "PayPal REST SDK"],
  },
  {
    company: "TeslaTeam",
    period: { en: "Jun – Sep 2017", fr: "Juin – Sep. 2017" },
    title: { en: "Rabat–Salé tramway passenger app", fr: "Application voyageurs du tramway Rabat–Salé" },
    desc: {
      en: "Analysis, design and development of a mobile application providing various services for Rabat–Salé tramway passengers.",
      fr: "Analyse, conception et réalisation d'une application mobile offrant différents services pour les passagers du tramway Rabat–Salé.",
    },
    stack: ["Ionic", "Firebase", "Google Maps SDK"],
  },
];

/* ---------- Personal projects ---------- */
const PROJECTS = [
  {
    id: "fincount",
    name: "FinCount",
    icon: "wallet",
    status: "progress",
    period: { en: "Since Aug 2026", fr: "Depuis août 2026" },
    desc: {
      en: "Personal finance management app that lets users track and manage their incomes, expenses and financial accounts.",
      fr: "Application mobile permettant aux utilisateurs de suivre et gérer leurs revenus, dépenses et comptes financiers.",
    },
    stack: ["Flutter", "Riverpod", "Dart", "Supabase"],
  },
  {
    id: "bourseiq",
    name: "BourseIQ",
    icon: "chart",
    status: "progress",
    period: { en: "Since Mar 2026", fr: "Depuis mars 2026" },
    desc: {
      en: "Mobile platform to monitor and analyze the Moroccan stock market: real-time data visualizations of prices and trends, with a community dimension to share and follow investment strategies.",
      fr: "Plateforme mobile de suivi et d'analyse du marché boursier marocain : visualisations en temps réel des cours et tendances, avec une dimension communautaire pour partager et suivre des stratégies d'investissement.",
    },
    stack: ["React Native", "Zustand", "Spring Boot", "Spring Security", "Hibernate"],
  },
  {
    id: "lfauto",
    name: "LF#Auto",
    icon: "car",
    status: "done",
    period: { en: "Nov – Dec 2019", fr: "Nov. – Déc. 2019" },
    desc: {
      en: "Mobile application to manage employees, their roles and the after-sales services of a car dealership.",
      fr: "Application mobile de gestion des employés, de leurs rôles et des services après-vente d'une agence automobile.",
    },
    stack: ["Flutter", "Laravel"],
  },
  {
    id: "fsupp",
    name: "F#Supp",
    icon: "cart",
    status: "done",
    period: { en: "Sep – Nov 2019", fr: "Sep. – Nov. 2019" },
    desc: {
      en: "App for time-constrained employees to shop online, place orders and have purchases delivered to their home or workplace.",
      fr: "Application permettant aux employés qui manquent de temps de faire leurs courses en ligne et de se faire livrer à domicile ou au travail.",
    },
    stack: ["Flutter", "Laravel"],
  },
  {
    id: "vinci",
    name: "Vinci Internship Mgmt",
    icon: "school",
    status: "done",
    period: { en: "Mar – Nov 2019", fr: "Mars – Nov. 2019" },
    desc: {
      en: "Analysis, design and development of a mobile application to manage internships at Vinci Institute.",
      fr: "Analyse, conception et réalisation d'une application mobile de gestion des stages à l'école Vinci.",
    },
    stack: ["React Native", "Laravel"],
  },
];

/* ---------- Education ---------- */
const EDUCATION = [
  {
    year: "2020",
    school: {
      en: "Vinci Higher Institute of Computer Engineering and Telecommunications Networks (ISVIIRT)",
      fr: "Institut Supérieur Vinci d'ingénierie informatique et réseaux télécoms (ISVIIRT)",
    },
    degree: {
      en: "Engineering Degree in Software Development and Telecommunications Networks",
      fr: "Diplôme d'ingénieur en développement informatique et réseaux télécoms",
    },
  },
  {
    year: "2015",
    school: { en: "Technical High School of Taza", fr: "Lycée technique de Taza" },
    degree: { en: "Technical Baccalaureate in Electronics", fr: "Baccalauréat technique, filière électronique" },
  },
];
