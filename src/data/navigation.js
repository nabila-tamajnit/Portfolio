import { GithubIcon, LinkedinIcon, MailIcon } from "../components/ui/icons/SocialIcons"

// Section anchors. Labels are written in sentence case; the desktop nav uppercases them with CSS.
export const navLinks = [
    { label: "À propos", href: "#apropos" },
    { label: "Projets", href: "#projets" },
    { label: "Outils", href: "#outils" },
]

export const contactLink = { label: "Me contacter", href: "#contact" }

export const email = "nabila.tamajnit@gmail.com"

export const socialLinks = [
    { id: "github", label: "GitHub", href: "https://github.com/nabila-tamajnit", Icon: GithubIcon },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nabila-tamajnit-b773b2389",
        Icon: LinkedinIcon,
    },
    { id: "email", label: "Email", href: `mailto:${email}`, Icon: MailIcon },
]

export const cvUrl = "/cv-nabila-tamajnit.pdf"
