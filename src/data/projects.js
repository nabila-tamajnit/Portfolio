export const projects = [
  {
    id: 1,
    number: '01',
    title: 'PetBuddy',
    description: "Une application full stack de suivi du bien-être et de la santé animale, avec carnet de santé, rappels intelligents et logs quotidiens d'humeur et d'activité. Côté backend : API REST Express/MongoDB avec architecture en couches stricte, authentification JWT et protections contre les accès non autorisés (IDOR). Côté frontend : React avec design system Tailwind v4 custom, calendrier interactif et intégration Cloudinary pour les photos d'animaux.",
    image: '/assets/images/projects/petbuddy.png',
    video: '/assets/videos/projects/petbuddy.mp4',
    tags: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Tailwind',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'Express',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        invert: true
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'JWT',
        icon: 'https://cdn.simpleicons.org/jsonwebtokens',
        invert: true
      }
    ],
    links: [
      {
        name: 'Github',
        icon: '/assets/icons/projects/github.svg',
        subLinks: [
          {
            name: 'Frontend',
            link: 'https://github.com/nabila-tamajnit/petbuddy-frontend'
          },
          {
            name: 'Backend',
            link: 'https://github.com/nabila-tamajnit/petbuddy-backend'
          }
        ]
      },
      {
        name: 'Demo',
        icon: '/assets/icons/projects/net.svg',
        link: 'https://mypetbuddy.vercel.app/'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'BambooFlow',
    description: "Une application full stack de gestion de tâches et de productivité, avec timer Pomodoro intégré et authentification JWT. Côté backend : API REST Express/MongoDB avec middlewares d'authentification et de sécurité (Helmet, rate limiting, Argon2). Côté frontend : React avec gestion d'état Jotai, routing protégé et interface responsive pensée pour la productivité du quotidien.",
    image: '/assets/images/projects/bambooflow.png',
    video: '/assets/videos/projects/bambooflow.mp4',
    tags: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'Tailwind',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'Express',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        invert: true
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      {
        name: 'JWT',
        icon: 'https://cdn.simpleicons.org/jsonwebtokens',
        invert: true
      }
    ],
    links: [
      {
        name: 'Github',
        icon: '/assets/icons/projects/github.svg',
        subLinks: [
          {
            name: 'Frontend',
            link: 'https://github.com/nabila-tamajnit/BambooFlow_frontend'
          },
          {
            name: 'Backend',
            link: 'https://github.com/nabila-tamajnit/BambooFlow_backend'
          }
        ]
      },
      {
        name: 'Demo',
        icon: '/assets/icons/projects/net.svg',
        link: 'https://bambooflow-app.vercel.app/'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'CineVerse',
    description: "Une plateforme immersive d'exploration cinématographique connectée à l'API TMDB. Elle permet de rechercher des films et séries en temps réel, de consulter des fiches détaillées via des modales animées, et propose une expérience utilisateur fluide avec des chargements optimisés et un design sombre élégant.",
    image: '/assets/images/projects/cineverse.png',
    video: '/assets/videos/projects/cineverse.mp4',
    tags: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      {
        name: 'Tailwind',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'Framer',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
        invert: true
      }
    ],
    links: [
      {
        name: 'Github',
        icon: '/assets/icons/projects/github.svg',
        link: 'https://github.com/nabila-tamajnit/CineVerse'
      },
      {
        name: 'Demo',
        icon: '/assets/icons/projects/net.svg',
        link: 'https://cineverse-explorer.vercel.app/'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'DevPath Junior',
    description: "Une plateforme interactive dédiée aux développeurs juniors préparant des entretiens techniques. Elle réunit des jeux d'entraînement, un simulateur d'entretien, une to-do list synchronisée et un générateur de Markdown, dans une interface responsive avec thème sombre et clair.",
    image: '/assets/images/projects/devpath.png',
    video: '/assets/videos/projects/devpath.mp4',
    tags: [
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
      },
      {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      }
    ],
    links: [
      {
        name: 'Github',
        icon: '/assets/icons/projects/github.svg',
        link: 'https://github.com/nabila-tamajnit/DevPath_Junior.git'
      },
      {
        name: 'Demo',
        icon: '/assets/icons/projects/net.svg',
        link: 'https://devpath-junior.vercel.app/'
      }
    ]
  }
];