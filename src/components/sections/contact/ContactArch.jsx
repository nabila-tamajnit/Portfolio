import { email, socialLinks } from "../../../data/navigation"

// Order and labels of the round links in the brick arch
const archLinks = [
    { id: "email", label: "M'écrire par email" },
    { id: "linkedin", label: "Mon profil LinkedIn" },
    { id: "github", label: "Mon GitHub" },
].map((link) => ({ ...link, ...socialLinks.find((social) => social.id === link.id), label: link.label }))

// Brick arch with the contact invitation and quick links (email, LinkedIn, GitHub).
// The top radius is half the arch width, not rounded-t-full: with 9999px on top, the browser would scale
// every radius down to fit and the 14–16px bottom corners would become square.
export const ContactArch = ({ className = "" }) => {
    return (
        <div
            className={`relative flex flex-col items-center justify-center rounded-t-[166px] rounded-b-[14px] md:rounded-t-[165px] lg:rounded-t-[220px] bg-brique px-[26px] pb-[38px] pt-[92px] text-center text-sur-brique shadow-arch-brique md:px-7 md:pb-12 md:pt-[72px] lg:justify-start lg:rounded-b-2xl lg:px-11 lg:pb-[52px] lg:pt-[130px] ${className}`}
        >
            <span
                aria-hidden="true"
                className="absolute inset-3 rounded-t-[154px] rounded-b-lg border border-lisere-brique md:rounded-t-[153px] lg:inset-4 lg:rounded-t-[204px]"
            />

            <svg viewBox="0 0 24 24" aria-hidden="true" className="relative size-8 fill-none stroke-sur-brique lg:size-10">
                <path d="M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" strokeWidth="1" />
            </svg>

            <h2
                id="contact-title"
                className="relative mb-3.5 mt-[18px] font-serif text-[36px] leading-[1.05] md:text-[34px] lg:mb-4 lg:mt-[22px] lg:text-[44px]"
            >
                Et si on construisait <br className="hidden lg:inline" />
                la suite <em>ensemble ?</em>
            </h2>
            <p className="relative mb-7 text-[14px] leading-[1.7] text-sur-brique-doux md:mb-[26px] md:text-[13.5px] lg:mb-9 lg:max-w-[300px] lg:text-[15px] lg:leading-[1.75]">
                Un projet en tête, une opportunité à partager ou simplement envie d'échanger ? Je serais ravie d'en
                discuter avec vous.
            </p>

            <ul className="relative flex gap-3 lg:gap-3.5">
                {archLinks.map(({ id, label, href, Icon }) => {
                    const isExternal = href.startsWith("http")
                    return (
                        <li key={id}>
                            <a
                                href={href}
                                aria-label={isExternal ? `${label} (nouvel onglet)` : `${label} : ${email}`}
                                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                                className="flex size-[52px] items-center justify-center rounded-full border border-lisere-clair transition-colors duration-200 hover:bg-sur-brique hover:text-brique md:size-[50px] lg:size-14"
                            >
                                <Icon className="size-5 lg:size-[22px]" />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
