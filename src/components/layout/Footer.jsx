import { Logo } from "../ui/Logo"
import { contactLink, cvUrl, navLinks, socialLinks } from "../../data/navigation"

const footerNavLinks = [...navLinks, { label: "Contact", href: contactLink.href }]
const profileLinks = socialLinks.filter((link) => link.id !== "email")

const linkClasses = "transition-colors duration-200 hover:text-brique"
const headingClasses =
    "mb-1 text-[10.5px] font-semibold uppercase tracking-[2.2px] text-olive lg:mb-1.5 lg:text-[11px] lg:tracking-[2.5px]"
const columnClasses = "flex flex-col gap-2.5 text-[14px] lg:gap-3"
const newTabProps = { target: "_blank", rel: "noopener noreferrer" }

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-bordure">
            <div className="page-container pb-[26px] pt-11 md:pb-7 md:pt-[52px] lg:pb-[30px] lg:pt-16">
                <div className="md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 lg:flex lg:flex-wrap lg:justify-between lg:gap-12">
                    {/* Brand */}
                    <div className="lg:min-w-0 lg:flex-[1_1_280px]">
                        <p className="flex items-center gap-2.5 lg:gap-3">
                            <Logo className="h-9 w-[30px] md:h-[39px] md:w-8 lg:h-12 lg:w-10" />
                            <span className="font-serif text-[24px] lg:text-[26px]">Nabila Tamajnit</span>
                        </p>
                        <p className="mb-[30px] mt-3.5 text-[13.5px] leading-[1.7] text-texte-doux md:mb-0 lg:mt-[18px] lg:max-w-[300px] lg:text-[14px]">
                            Développeuse Full-Stack JavaScript, j'aime concevoir des expériences web soignées, résoudre
                            des problèmes et continuer à apprendre, projet après projet.
                        </p>
                    </div>

                    {/* Link columns: side by side on mobile and desktop. On tablet `contents` removes this
                        wrapper from the layout so both columns become cells of the 3-column grid above. */}
                    <div className="grid grid-cols-2 gap-5 md:contents lg:flex lg:gap-16">
                        <nav aria-labelledby="footer-nav-title" className={columnClasses}>
                            <h2 id="footer-nav-title" className={headingClasses}>
                                Navigation
                            </h2>
                            <ul className={columnClasses}>
                                {footerNavLinks.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className={linkClasses}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className={columnClasses}>
                            <h2 className={headingClasses}>Me retrouver</h2>
                            <ul className={columnClasses}>
                                {profileLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} {...newTabProps} className={linkClasses}>
                                            {link.label}
                                            <span className="sr-only"> (nouvel onglet)</span>
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a href={cvUrl} {...newTabProps} className={linkClasses}>
                                        Mon CV
                                        <span className="sr-only"> (PDF, nouvel onglet)</span>
                                    </a>
                                </li>
                                <li className="text-texte-doux">Bruxelles, Belgique</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-[30px] flex justify-between gap-2.5 border-t border-bordure pt-[18px] text-[11.5px] text-texte-doux md:mt-[34px] md:text-[12px] lg:mt-10 lg:flex-wrap lg:gap-3 lg:pt-[22px] lg:tracking-[1px]">
                    <p>
                        © {year} Nabila Tamajnit
                        <span className="hidden md:inline"> · Conçu et codé avec soin</span>
                    </p>
                    <a href="#accueil" className={linkClasses}>
                        Retour en haut <span aria-hidden="true">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
