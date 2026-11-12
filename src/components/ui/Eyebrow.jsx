// Small label above a title: optional italic number, a thin line, then the uppercase label.
// tone "olive" is the default; "brique" is used on the terracotta section.
// `lineClassName` replaces the default line widths when a section needs other ones.
export const Eyebrow = ({
    number,
    tone = "olive",
    lineClassName = "w-7 md:w-[30px] lg:w-10",
    className = "",
    children,
}) => {
    const isBrick = tone === "brique"

    return (
        <p className={`flex items-center gap-3 lg:gap-3.5 ${className}`}>
            {number && (
                <span className="font-serif text-[18px] italic text-laiton lg:text-[20px]">{number}</span>
            )}
            <span
                aria-hidden="true"
                className={`h-px ${lineClassName} ${isBrick ? "bg-brique" : "bg-laiton"}`}
            />
            <span
                className={`text-[10.5px] font-semibold uppercase tracking-[2.6px] md:text-[11px] md:tracking-[2.8px] lg:text-[12px] lg:tracking-[3.5px] ${isBrick ? "text-brique" : "text-olive"}`}
            >
                {children}
            </span>
        </p>
    )
}
