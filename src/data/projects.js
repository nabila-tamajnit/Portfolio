// Projects shown in the "Projets" section, in display order.
// The number (01, 02…) comes from the position in this list.
//
// To add a project, add an object:
// - kind: label above the title; category: short line under the card name
// - liveUrl: online version, or null (no "Voir le projet en ligne" link, images not clickable)
// - codeLinks: [] when the code is private; one link shows "Explorer le code",
//   several links show one "Code <label>" link each
// - images: put the files in public/images/projects/<slug>/
//   desktop 1440 × 900, mobile 390 × 844 (or null to reuse the desktop image), thumbnail 480 × 330

const imagePath = (slug, name) => `/images/projects/${slug}/${name}.webp`

export const projects = [
    {
        slug: "petbuddy",
        shortTitle: "PetBuddy",
        title: "PetBuddy",
        kind: "Application fullstack",
        category: "Application fullstack · MERN",
        description:
            "Suivi du bien-être et de la santé animale : carnet de santé, rappels intelligents et logs quotidiens. API REST Express et MongoDB en couches, authentification JWT et protection contre les accès non autorisés.",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
        liveUrl: "https://mypetbuddy.vercel.app/",
        codeLinks: [
            { label: "front-end", url: "https://github.com/nabila-tamajnit/petbuddy-frontend" },
            { label: "back-end", url: "https://github.com/nabila-tamajnit/petbuddy-backend" },
        ],
        images: {
            desktop: imagePath("petbuddy", "desktop"),
            mobile: null,
            thumbnail: imagePath("petbuddy", "thumbnail"),
        },
    },
    {
        slug: "maisondesfemmes",
        shortTitle: "Maison des Femmes",
        title: "La Maison des Femmes de Bruxelles",
        kind: "Projet de stage · Site vitrine",
        category: "Site vitrine · Projet de stage",
        description:
            "Site vitrine pour le projet porté par le CHU Saint-Pierre, de la maquette Figma à l'intégration WordPress, avec une attention particulière au responsive, à l'accessibilité et à la sécurité des visiteuses.",
        tags: ["Figma", "WordPress", "Elementor"],
        liveUrl: "https://lamaisondesfemmesbxl.be/",
        codeLinks: [],
        images: {
            desktop: imagePath("maisondesfemmes", "desktop"),
            mobile: null,
            thumbnail: imagePath("maisondesfemmes", "thumbnail"),
        },
    },
    {
        slug: "bambooflow",
        shortTitle: "BambooFlow",
        title: "BambooFlow",
        kind: "Application fullstack",
        category: "Application fullstack · MERN",
        description:
            "Gestion de tâches et de productivité avec timer Pomodoro intégré. API sécurisée avec Helmet, rate limiting et Argon2, état géré avec Jotai et routing protégé.",
        tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
        liveUrl: "https://bambooflow-app.vercel.app/",
        codeLinks: [
            { label: "front-end", url: "https://github.com/nabila-tamajnit/BambooFlow_frontend" },
            { label: "back-end", url: "https://github.com/nabila-tamajnit/BambooFlow_backend" },
        ],
        images: {
            desktop: imagePath("bambooflow", "desktop"),
            mobile: null,
            thumbnail: imagePath("bambooflow", "thumbnail"),
        },
    },
    {
        slug: "cineverse",
        shortTitle: "CineVerse",
        title: "CineVerse",
        kind: "Application front-end",
        category: "Application React · API TMDB",
        description:
            "Exploration de films et séries connectée à l'API TMDB : recherche en temps réel, fiches détaillées dans des modales animées et chargements optimisés.",
        tags: ["React", "JavaScript", "Tailwind", "Framer Motion"],
        liveUrl: "https://cineverse-explorer.vercel.app/",
        codeLinks: [{ label: "", url: "https://github.com/nabila-tamajnit/CineVerse" }],
        images: {
            desktop: imagePath("cineverse", "desktop"),
            mobile: null,
            thumbnail: imagePath("cineverse", "thumbnail"),
        },
    },
    {
        slug: "devpath",
        shortTitle: "DevPath Junior",
        title: "DevPath Junior",
        kind: "Plateforme interactive",
        category: "Plateforme interactive · JavaScript",
        description:
            "Préparation aux entretiens techniques pour développeurs juniors : jeux d'entraînement, simulateur d'entretien, to-do synchronisée et générateur de Markdown, en thème clair et sombre.",
        tags: ["Figma", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://devpath-junior.vercel.app/",
        codeLinks: [{ label: "", url: "https://github.com/nabila-tamajnit/DevPath_Junior" }],
        images: {
            desktop: imagePath("devpath", "desktop"),
            mobile: null,
            thumbnail: imagePath("devpath", "thumbnail"),
        },
    },
    {
        slug: "portfolio-v1",
        shortTitle: "Portfolio V1",
        title: "Portfolio V1",
        kind: "Projet personnel · Portfolio",
        category: "Portfolio · React",
        // TODO(Nabila): description to validate
        description:
            "Première version de mon portfolio : interface sombre, sections animées au défilement, effet de code tapé en direct et formulaire de contact relié à EmailJS.",
        tags: ["React", "Tailwind", "Framer Motion", "EmailJS"],
        liveUrl: null,
        codeLinks: [{ label: "", url: "https://github.com/nabila-tamajnit/Portfolio/tree/archive/v1" }],
        images: {
            desktop: imagePath("portfolio-v1", "desktop"),
            mobile: imagePath("portfolio-v1", "mobile"),
            thumbnail: imagePath("portfolio-v1", "thumbnail"),
        },
    },
]
