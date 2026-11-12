import * as m from "motion/react-m"
import { Star } from "../../ui/motifs/Star"
import { revealOnScroll } from "../../../utils/motion"

// Background of the light arches, from the lightest to the darkest.
const lightBackgrounds = ["bg-creme", "bg-terracotta-1", "bg-terracotta-2"]

// One arch of "Ma dynamique". The last step is highlighted in brick with an inner outline.
// `className` carries the vertical offset that makes the arches rise.
// The arches appear one after the other (delay based on their position).
export const StepCard = ({ step, index, isLast, className = "" }) => {
    const background = isLast ? "border-brique bg-brique" : `border-contour ${lightBackgrounds[Math.min(index, 2)]}`

    return (
        <m.li
            {...revealOnScroll(index * 0.12, 40)}
            className={`relative flex flex-col items-center rounded-t-[160px] rounded-b-[18px] border px-[26px] pb-[30px] pt-[62px] text-center shadow-[0_20px_38px_-18px_rgb(74_40_24/0.3)] md:rounded-t-full md:pb-8 md:pt-[74px] lg:pb-9 lg:pt-[84px] lg:shadow-[0_1px_3px_rgb(74_40_24/0.06),0_20px_38px_-18px_rgb(74_40_24/0.3)] ${background} ${className}`}
        >
            {isLast && (
                <span
                    aria-hidden="true"
                    className="absolute inset-[9px] rounded-t-[152px] rounded-b-[10px] border border-lisere-brique md:inset-2.5 md:rounded-t-full"
                />
            )}

            {/* Node on the path */}
            <span
                aria-hidden="true"
                className={`absolute left-1/2 top-0 box-content flex -translate-1/2 items-center justify-center rounded-full border-4 border-terracotta-clair bg-brique ${isLast ? "size-6 lg:size-[26px]" : "size-[18px] lg:size-5"}`}
            >
                <Star className="size-[11px] fill-creme" />
            </span>

            <span
                aria-hidden="true"
                className={`relative font-serif text-[40px] leading-none italic md:text-[42px] lg:text-[46px] ${isLast ? "text-sur-brique" : "text-brique"}`}
            >
                {step.number}
            </span>
            <span
                className={`relative mt-3.5 rounded-full border px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[2px] text-brique-fonce md:mt-4 lg:mt-[18px] lg:px-3 lg:py-1.5 lg:text-[10.5px] lg:tracking-[2.2px] ${isLast ? "border-creme bg-creme" : "border-brique"}`}
            >
                {step.tag}
            </span>
            <h3
                className={`relative mb-2.5 mt-4 font-serif text-[34px] leading-[1.05] md:mt-[18px] lg:mb-3 lg:mt-5 lg:text-[38px] ${isLast ? "text-sur-brique italic" : ""}`}
            >
                {step.verb}
            </h3>
            <p
                className={`relative text-[14px] leading-[1.7] lg:text-[14.5px] ${isLast ? "text-sur-brique-doux" : "text-texte"}`}
            >
                {step.text}
            </p>
        </m.li>
    )
}
