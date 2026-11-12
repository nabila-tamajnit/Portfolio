import claude from "../assets/icons/tools/claude.svg"
import css3 from "../assets/icons/tools/css3.svg"
import elementor from "../assets/icons/tools/elementor.svg"
import express from "../assets/icons/tools/express.svg"
import figma from "../assets/icons/tools/figma.svg"
import framerMotion from "../assets/icons/tools/framer-motion.svg"
import git from "../assets/icons/tools/git.svg"
import github from "../assets/icons/tools/github.svg"
import html5 from "../assets/icons/tools/html5.svg"
import illustrator from "../assets/icons/tools/illustrator.svg"
import javascript from "../assets/icons/tools/javascript.svg"
import mongodb from "../assets/icons/tools/mongodb.svg"
import n8n from "../assets/icons/tools/n8n.svg"
import nodejs from "../assets/icons/tools/nodejs.svg"
import photoshop from "../assets/icons/tools/photoshop.svg"
import react from "../assets/icons/tools/react.svg"
import tailwind from "../assets/icons/tools/tailwind.svg"
import vscode from "../assets/icons/tools/vscode.svg"
import wordpress from "../assets/icons/tools/wordpress.svg"

// "Outils" section: tool groups in display order. Icons are cream SVGs shown on brick circles.
// `label` is the short name shown under the icon when the full name is too long; screen readers get `name`.
// `note` (optional) adds a dashed pill after the group's tools.
export const toolGroups = [
    {
        name: "Front-end",
        tools: [
            { name: "HTML5", icon: html5 },
            { name: "CSS3", icon: css3 },
            { name: "JavaScript", icon: javascript },
            { name: "React", icon: react },
            { name: "Tailwind", icon: tailwind },
            { name: "Framer Motion", label: "Framer", icon: framerMotion },
        ],
    },
    {
        name: "Back-end",
        tools: [
            { name: "Node.js", icon: nodejs },
            { name: "Express", icon: express },
            { name: "MongoDB", icon: mongodb },
        ],
    },
    {
        name: "Outils & CMS",
        tools: [
            { name: "Git", icon: git },
            { name: "GitHub", icon: github },
            { name: "VS Code", icon: vscode },
            { name: "WordPress", icon: wordpress },
            { name: "Elementor", icon: elementor },
        ],
    },
    {
        name: "Design",
        tools: [
            { name: "Figma", icon: figma },
            { name: "Photoshop", icon: photoshop },
            { name: "Illustrator", icon: illustrator },
        ],
    },
    {
        name: "IA et automatisation",
        tools: [
            { name: "Claude", icon: claude },
            { name: "n8n", icon: n8n },
        ],
        note: "En exploration : l'automatisation avec n8n",
    },
]
