import { Eyebrow } from "../../ui/Eyebrow"
import { LeafSprig } from "../../ui/motifs/LeafSprig"
import { Reveal } from "../../ui/Reveal"
import { RisingPath } from "./RisingPath"
import { StepCard } from "./StepCard"
import { steps } from "../../../data/steps"

// Vertical offsets that make the arches rise. Tailwind needs full class names, so they are listed here.
// Tablet: 2 columns, the left arches sit lower. Desktop: 4 columns, each arch higher than the previous one.
const offsets = ["md:mt-[70px] lg:mt-[150px]", "md:mt-0 lg:mt-[105px]", "md:mt-[70px] lg:mt-[55px]", "md:mt-0 lg:mt-0"]

export const Dynamic = () => {
    return (
        <section
            id="dynamique"
            aria-labelledby="dynamique-title"
            className="relative overflow-hidden bg-terracotta-clair pb-[84px] pt-[76px] md:pb-[100px] md:pt-[90px] lg:pb-[130px] lg:pt-[120px]"
        >
            <LeafSprig
                leafCount={6}
                className="absolute -right-[30px] -top-[34px] hidden h-[235px] w-[130px] rotate-196 md:block lg:-right-[34px] lg:-top-10 lg:h-[270px] lg:w-[150px]"
            />

            <div className="page-container relative">
                <Reveal>
                    <Eyebrow tone="brique" className="mb-[18px] lg:mb-[26px]">
                        Ma dynamique
                    </Eyebrow>
                    <h2
                        id="dynamique-title"
                        className="mb-12 font-serif text-[44px] leading-none tracking-[-1px] md:mb-16 md:text-[54px] md:leading-[0.98] lg:mb-[84px] lg:text-[76px] lg:tracking-[-1.5px]"
                    >
                        Ma façon de faire <br className="hidden md:inline" />
                        avancer les <em className="text-brique">idées.</em>
                    </h2>
                </Reveal>

                <div className="relative">
                    <RisingPath />

                    {/* Mobile only: a faint vertical line behind the stacked arches */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-brique/35 md:hidden"
                    />

                    <ol className="relative flex flex-col gap-[34px] md:grid md:grid-cols-2 md:items-start md:gap-x-6 md:gap-y-10 lg:grid-cols-4 lg:items-stretch lg:gap-6">
                        {steps.map((step, index) => (
                            <StepCard
                                key={step.number}
                                step={step}
                                index={index}
                                isLast={index === steps.length - 1}
                                className={offsets[index]}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}
