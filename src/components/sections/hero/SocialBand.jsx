import { socialLinks } from "../../../data/navigation"
import { Reveal } from "../../ui/Reveal"

// External links open in a new tab; mailto links stay in the same window.
const getLinkProps = (href) =>
    href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}

const getLinkName = ({ label, href }) => (href.startsWith("http") ? `${label} (nouvel onglet)` : label)

// GitHub, LinkedIn and Email links under the hero.
// Mobile: three round buttons. Tablet and desktop: a card that overlaps the bottom of the hero.
export const SocialBand = () => {
    return (
        <>
            {/* Mobile */}
            <Reveal delay={0.1}>
                <ul className="mt-2.5 flex justify-center gap-3.5 md:hidden">
                    {socialLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                aria-label={getLinkName(link)}
                                className="flex size-[54px] items-center justify-center rounded-full border border-bordure bg-creme text-brique shadow-[0_10px_20px_-12px_rgb(74_40_24/0.3)] transition-colors duration-200 hover:border-brique"
                                {...getLinkProps(link.href)}
                            >
                                <link.Icon size={21} strokeWidth={1.5} />
                            </a>
                        </li>
                    ))}
                </ul>
            </Reveal>

            {/* Tablet and desktop */}
            <div className="relative z-10 mx-auto hidden max-w-[1240px] -translate-y-[30px] px-9 md:block lg:-translate-y-[34px] lg:px-10">
                <Reveal delay={0.5}>
                    <ul className="grid grid-cols-3 rounded-[18px] border border-bordure bg-creme shadow-[0_16px_34px_-16px_rgb(74_40_24/0.22)] lg:rounded-[20px] lg:shadow-[0_1px_3px_rgb(74_40_24/0.06),0_16px_34px_-16px_rgb(74_40_24/0.22)]">
                        {socialLinks.map((link) => (
                            <li key={link.id} className="border-bordure not-first:border-l">
                                <a
                                    href={link.href}
                                    className="group flex items-center gap-3 px-[22px] py-5 transition-colors duration-200 hover:text-brique lg:gap-4 lg:px-[30px] lg:py-6"
                                    {...getLinkProps(link.href)}
                                >
                                    <span className="flex size-[42px] flex-none items-center justify-center rounded-full bg-pastille text-brique lg:size-12">
                                        <link.Icon className="size-[19px] lg:size-[22px]" />
                                    </span>
                                    <span className="font-serif text-[21px] lg:text-[23px] lg:leading-[1.2]">
                                        {link.label}
                                        {link.href.startsWith("http") && <span className="sr-only"> (nouvel onglet)</span>}
                                    </span>
                                    <span aria-hidden="true" className="ml-auto text-laiton transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                        ↗
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </>
    )
}
