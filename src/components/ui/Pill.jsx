// Italic serif pill on brick, used for the qualities in the About section.
export const Pill = ({ children }) => {
    return (
        <span className="inline-block rounded-full bg-brique px-[18px] pb-3 pt-[11px] font-serif text-[20px] leading-none text-sur-brique italic md:px-4 md:pb-[11px] md:pt-2.5 md:text-[19px] lg:px-[22px] lg:pb-[13px] lg:pt-3 lg:text-[23px]">
            {children}
        </span>
    )
}
