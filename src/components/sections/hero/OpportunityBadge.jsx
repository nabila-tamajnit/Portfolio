import { useId } from "react"

// Round badge with "Ouverte à de nouvelles opportunités" written along a circle.
// Size and position come from `className`.
export const OpportunityBadge = ({ className = "" }) => {
    // Each SVG <textPath> needs a unique id to point to its circle
    const ringId = useId()

    return (
        <svg
            viewBox="0 0 138 138"
            role="img"
            aria-label="Ouverte à de nouvelles opportunités"
            className={`overflow-visible drop-shadow-[0_10px_14px_rgb(74_40_24/0.18)] lg:drop-shadow-[0_12px_16px_rgb(74_40_24/0.18)] ${className}`}
        >
            <circle cx="69" cy="69" r="68" className="fill-creme stroke-bordure" />
            <defs>
                <path id={ringId} d="M69 69 m-48 0 a48 48 0 1 1 96 0 a48 48 0 1 1 -96 0" />
            </defs>
            <text className="fill-olive font-sans text-[11px] font-semibold">
                <textPath href={`#${ringId}`} textLength="296" lengthAdjust="spacing">
                    OUVERTE À DE NOUVELLES OPPORTUNITÉS ·
                </textPath>
            </text>
            <path d="M69 57l3.2 8.8L81 69l-8.8 3.2L69 81l-3.2-8.8L57 69l8.8-3.2z" className="fill-brique" />
        </svg>
    )
}
