import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { projects } from "../../../data/projects"
import { ProjectCard } from "./ProjectCard"
import { ComingSoon } from "./ComingSoon"
import { ViewMore } from "./ViewMore"
import { SectionHeader } from "../../ui/SectionHeader"

export const Projects = () => {
    const [showAll, setShowAll] = useState(false)
    const sectionProjectsRef = useRef(null)

    const handleToggleProjects = () => {
        if (showAll) {
            sectionProjectsRef.current?.scrollIntoView({
                block: "end"
            });
        }
        setShowAll(!showAll);
    }

    const visibleProjects = showAll ? projects : projects.slice(0, 3)

    return (
        <section
            id="projects"
            className="py-16 sm:py-24 px-6 lg:px-12 bg-bg-main bg-[radial-gradient(circle_at_right,#3B82F6_0%,transparent_25%)]"
        >
            <div className="max-w-7xl mx-auto">

                {/* ========== TITRE ========== */}
                <SectionHeader
                    label="PROJETS"
                    title="Mes réalisations"
                    subtitle="Projets sur lesquels j'ai travaillé durant ma formation"
                />

                {/* ========== PROJETS ========== */}
                <div ref={sectionProjectsRef} className="space-y-16">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* ========== BOUTON "VOIR PLUS" ========== */}
                {projects.length > 3 && (
                    <ViewMore
                        isOpen={showAll}
                        onClick={handleToggleProjects}
                    />
                )}

                {/* ========== MESSAGE "EN COURS" ========== */}
                {(projects.length <= 3) && (
                    <ComingSoon />
                )}

            </div>
        </section>
    )
}