import { Star } from "../../ui/motifs/Star"
import { formatNumber } from "../../../utils/formatNumber"

// One row of the tools list: number and group name, then the tools on brick circles.
// Mobile: name above a 4-column grid. Tablet: 2-column grid. Desktop: one flexible row.
export const ToolGroup = ({ group, index }) => {
    return (
        <li className="border-b border-trait py-6 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:items-center md:gap-5 md:py-[26px] lg:flex lg:flex-wrap lg:gap-x-10 lg:gap-y-7 lg:py-[34px]">
            <h3 className="mb-[18px] flex items-baseline gap-2.5 md:mb-0 lg:flex-[0_0_260px] lg:gap-3.5">
                <span aria-hidden="true" className="font-serif text-[18px] italic text-laiton lg:text-[20px]">
                    {formatNumber(index + 1)}
                </span>
                <span className="font-serif text-[28px] md:leading-[1.1] lg:text-[34px]">{group.name}</span>
            </h3>

            <div className="min-w-0 lg:flex lg:flex-[1_1_520px] lg:flex-wrap lg:items-start lg:gap-x-[34px] lg:gap-y-[26px]">
                <ul className="grid grid-cols-4 gap-x-2 gap-y-[18px] md:flex md:flex-wrap md:gap-x-[22px] md:gap-y-5 lg:gap-x-[34px] lg:gap-y-[26px]">
                    {group.tools.map((tool) => (
                        <li key={tool.name} className="flex flex-col items-center gap-[9px] md:w-[72px] lg:w-[84px] lg:gap-3">
                            <span className="flex size-[54px] items-center justify-center rounded-full bg-brique shadow-[0_8px_16px_-8px_rgb(122_47_28/0.55)] md:size-14 lg:size-16">
                                <img src={tool.icon} alt="" width="28" height="28" className="size-6 md:size-[25px] lg:size-7" />
                            </span>
                            <span className="text-center text-[9.5px] font-semibold uppercase tracking-[1.2px] text-texte md:tracking-[1.3px] lg:text-[11px] lg:tracking-[1.8px]">
                                {tool.label ? (
                                    <>
                                        <span aria-hidden="true">{tool.label}</span>
                                        <span className="sr-only">{tool.name}</span>
                                    </>
                                ) : (
                                    tool.name
                                )}
                            </span>
                        </li>
                    ))}
                </ul>

                {group.note && (
                    <p className="mt-[18px] inline-flex items-center gap-2.5 rounded-full border border-dashed border-brique px-[18px] py-[11px] lg:mt-0 lg:gap-3 lg:self-center lg:px-[22px] lg:py-3.5">
                        <Star className="size-3 fill-brique lg:size-3.5" />
                        <span className="font-serif text-[17px] italic lg:text-[20px]">{group.note}</span>
                    </p>
                )}
            </div>
        </li>
    )
}
