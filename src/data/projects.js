import { link } from "motion/react-client"

export const projects = [
  {
    id: 1,
    number: '01',
    title: 'DevPath Junior',
    description: "Une plateforme interactive dédiée aux développeurs juniors préparant des entretiens techniques. Elle réunit des jeux d’entraînement, un simulateur d’entretien, une to-do list synchronisée et un générateur de Markdown, dans une interface responsive avec thème sombre et clair.",
    image: '/assets/projects/devpath.png',
    video: '/assets/projects/devpath.mp4',
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
        name: 'github',
        icon: '/assets/projects/icons/github.svg',
        link: 'https://github.com/nabila-tamajnit/DevPath_Junior.git'
      },
      {
        name: 'Demo',
        icon: '/assets/projects/icons/net.svg',
        link: '#'
      },
      {
        name: 'Figma',
        icon: '/assets/projects/icons/figma.svg',
        link: '#'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'DevPath Junior',
    description: "Une plateforme interactive dédiée aux développeurs juniors préparant des entretiens techniques. Elle réunit des jeux d’entraînement, un simulateur d’entretien, une to-do list synchronisée et un générateur de Markdown, dans une interface responsive avec thème sombre et clair.",
    image: '/assets/projects/portfolio.jpg',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    links: [
      {
        name: 'github',
        icon: '/assets/projects/icons/github.svg',
        link: 'https://github.com/nabila-tamajnit/DevPath_Junior.git'
      },
      {
        name: 'Demo',
        icon: '/assets/projects/icons/net.svg',
        link: '#'
      },
      {
        name: 'Figma',
        icon: '/assets/projects/icons/figma.svg',
        link: '#'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'DevPath Junior',
    description: "Une plateforme interactive dédiée aux développeurs juniors préparant des entretiens techniques. Elle réunit des jeux d’entraînement, un simulateur d’entretien, une to-do list synchronisée et un générateur de Markdown, dans une interface responsive avec thème sombre et clair.",
    image: '/assets/projects/placeholder.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    links: [
      {
        name: 'github',
        icon: '/assets/projects/icons/github.svg',
        link: 'https://github.com/nabila-tamajnit/DevPath_Junior.git'
      },
      {
        name: 'Demo',
        icon: '/assets/projects/icons/net.svg',
        link: '#'
      },
      {
        name: 'Figma',
        icon: '/assets/projects/icons/figma.svg',
        link: '#'
      }
    ]
  }
];