import { formatNumber } from "../../../utils/formatNumber"

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" }

// Text of the current project: number, kind, title, description, tags and links.
// Mobile: one column without the big number. Tablet: two columns. Desktop: one column next to the devices.
export const ProjectDetails = ({ project, index, className = "" }) => {
    const { title, kind, description, tags, liveUrl, codeLinks } = project

    return (
        <div className={`md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-9 lg:block ${className}`}>
            <div>
                <p aria-hidden="true" className="hidden font-serif text-[64px] italic leading-none text-brique md:block lg:text-[80px]">
                    {formatNumber(index + 1)}
                </p>
                <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[2.4px] text-olive md:mt-2 md:text-[11px] md:tracking-[2.6px] lg:mb-2.5 lg:text-[12px] lg:tracking-[3px]">
                    {kind}
                </p>
                <h3 className="mb-3 font-serif text-[32px] font-medium leading-[1.1] md:mb-0 md:text-[34px] lg:mb-[18px] lg:text-[42px]">
                    {title}
                </h3>
            </div>

            <div>
                <p className="mb-[18px] text-[14.5px] leading-[1.75] text-texte lg:mb-[26px] lg:max-w-[440px] lg:text-[15px] lg:leading-[1.8]">
                    {description}
                </p>

                <ul aria-label="Technologies" className="mb-[22px] flex flex-wrap gap-1.5 lg:mb-8 lg:gap-2">
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full bg-brique px-3 py-1.5 text-[11.5px] font-medium text-sur-brique lg:border lg:border-brique lg:px-3.5 lg:text-[12px] lg:tracking-[0.5px]"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-[22px] text-[14px] font-medium lg:gap-[26px]">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            {...externalLinkProps}
                            className="border-b border-brique pb-1 text-brique transition-colors duration-200 hover:border-brique-fonce hover:text-brique-fonce"
                        >
                            Voir le projet en ligne ↗<span className="sr-only"> (nouvel onglet)</span>
                        </a>
                    )}
                    {codeLinks.map((codeLink) => (
                        <a
                            key={codeLink.url}
                            href={codeLink.url}
                            {...externalLinkProps}
                            className="border-b border-laiton pb-1 transition-colors duration-200 hover:border-brique hover:text-brique"
                        >
                            {codeLinks.length > 1 ? `Code ${codeLink.label}` : "Explorer le code"} ↗
                            <span className="sr-only"> (nouvel onglet)</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
