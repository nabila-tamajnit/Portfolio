import { Eyebrow } from "../../ui/Eyebrow"
import { LeafSprig } from "../../ui/motifs/LeafSprig"
import { Reveal } from "../../ui/Reveal"
import { ToolGroup } from "./ToolGroup"
import { toolGroups } from "../../../data/tools"

export const Tools = () => {
    return (
        <section
            id="outils"
            aria-labelledby="outils-title"
            className="page-container relative pb-20 pt-[76px] md:pb-[100px] md:pt-[90px] lg:pb-40 lg:pt-[120px]"
        >
            <LeafSprig outline className="absolute right-[30px] top-[70px] hidden h-[240px] w-[130px] rotate-16 lg:block" />

            <Reveal className="relative mb-[34px] md:mb-10 lg:mb-[60px]">
                <Eyebrow number="03" className="mb-[18px] lg:mb-6">
                    Outils et technologies
                </Eyebrow>
                <h2
                    id="outils-title"
                    className="font-serif text-[44px] leading-none tracking-[-1px] md:text-[50px] lg:text-[62px] lg:leading-[1.02]"
                >
                    Mes outils pour <br className="hidden md:inline" />
                    aller plus <em className="text-brique">loin.</em>
                </h2>
                <p className="mt-4 text-[14.5px] leading-[1.75] text-texte md:max-w-[520px] lg:mt-5 lg:text-[15px] lg:leading-[1.8]">
                    Des technologies que je pratique au quotidien, d'autres que j'approfondis, et de nouvelles pistes que
                    j'explore pour continuer à progresser.
                </p>
            </Reveal>

            <ul className="relative border-t border-trait">
                {toolGroups.map((group, index) => (
                    <ToolGroup key={group.name} group={group} index={index} />
                ))}
            </ul>
        </section>
    )
}
