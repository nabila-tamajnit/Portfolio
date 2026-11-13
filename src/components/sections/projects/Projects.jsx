import { useRef, useState } from "react"
import * as m from "motion/react-m"
import { Eyebrow } from "../../ui/Eyebrow"
import { LeafSprig } from "../../ui/motifs/LeafSprig"
import { Reveal } from "../../ui/Reveal"
import { CarouselControls } from "./CarouselControls"
import { DeviceShowcase } from "./DeviceShowcase"
import { ProjectDetails } from "./ProjectDetails"
import { ProjectGrid } from "./ProjectGrid"
import { projects } from "../../../data/projects"
import { formatNumber } from "../../../utils/formatNumber"
import { revealOnScroll } from "../../../utils/motion"

export const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const showcaseRef = useRef(null)

    const total = projects.length
    const currentProject = projects[currentIndex]

    // Previous / next loop around: after the last project comes the first one
    const showPrevious = () => setCurrentIndex((index) => (index - 1 + total) % total)
    const showNext = () => setCurrentIndex((index) => (index + 1) % total)

    // A card is picked below the showcase: bring the showcase back into view if it scrolled out above
    const selectProject = (index) => {
        setCurrentIndex(index)
        if (showcaseRef.current?.getBoundingClientRect().top < 0) {
            showcaseRef.current.scrollIntoView({ block: "start" })
        }
    }

    const controlsProps = { currentIndex, total, onPrevious: showPrevious, onNext: showNext }

    return (
        <section
            id="projets"
            aria-labelledby="projets-title"
            className="relative overflow-hidden border-b border-bordure bg-creme pb-[70px] pt-[76px] md:pb-20 md:pt-[90px] lg:pb-[100px] lg:pt-[120px]"
        >
            <LeafSprig className="absolute -right-10 -top-[30px] hidden h-[300px] w-[170px] rotate-200 lg:block" />

            <div className="page-container relative">
                {/* Header */}
                <Reveal className="flex items-end justify-between gap-6 lg:mb-16">
                    <div>
                        <Eyebrow number="02" className="mb-[18px] lg:mb-6">
                            Projets sélectionnés
                        </Eyebrow>
                        <h2
                            id="projets-title"
                            className="font-serif text-[44px] leading-none tracking-[-1px] md:text-[50px] lg:text-[62px] lg:leading-[1.02]"
                        >
                            Du concret, du code <br className="hidden md:inline" />
                            et des <em className="text-brique">idées.</em>
                        </h2>
                        <p className="mt-4 text-[14.5px] leading-[1.75] text-texte md:max-w-[430px] lg:mt-5 lg:max-w-[460px] lg:text-[15px] lg:leading-[1.8]">
                            Des projets menés de la réflexion à la mise en ligne, qui montrent ma façon de travailler
                            autant que mes compétences.
                        </p>
                    </div>
                    <CarouselControls {...controlsProps} className="hidden flex-none items-center gap-3.5 md:flex lg:gap-[18px]" />
                </Reveal>

                {/* Current project */}
                <m.div ref={showcaseRef} {...revealOnScroll(0.1)} className="lg:flex lg:items-center lg:gap-14">
                    <DeviceShowcase project={currentProject} className="mt-9 md:mt-11 lg:mt-0 lg:flex-[1.4_1_560px]" />
                    <CarouselControls {...controlsProps} className="mt-[26px] flex items-center justify-between md:hidden" />
                    <ProjectDetails
                        project={currentProject}
                        index={currentIndex}
                        className="mt-[22px] md:mt-10 lg:order-first lg:mt-0 lg:min-w-0 lg:flex-[1_1_380px]"
                    />
                </m.div>

                {/* Announces the change to screen reader users */}
                <p className="sr-only" aria-live="polite">
                    {`Projet ${formatNumber(currentIndex + 1)} sur ${formatNumber(total)} : ${currentProject.title}`}
                </p>

                {/* All projects */}
                <Reveal className="mb-[18px] mt-[52px] flex items-center gap-4 md:mb-[22px] md:mt-[60px] lg:mb-[30px] lg:mt-24 lg:gap-[22px]">
                    <h3 className="text-[10.5px] font-semibold uppercase tracking-[2.6px] text-olive md:text-[11px] md:tracking-[2.8px] lg:text-[12px] lg:tracking-[3.5px]">
                        Tous les projets
                    </h3>
                    <span aria-hidden="true" className="h-px flex-1 bg-bordure" />
                    <span aria-hidden="true" className="text-[11px] text-texte-doux md:hidden">
                        Faites glisser →
                    </span>
                </Reveal>

                <Reveal delay={0.1}>
                    <ProjectGrid projects={projects} currentIndex={currentIndex} onSelect={selectProject} />
                </Reveal>
            </div>
        </section>
    )
}
