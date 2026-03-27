import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import { projects } from "../../data/projects"
import { ProjectCard } from "./projects/ProjectCard"
import { ComingSoon } from "./projects/ComingSoon"
import { ViewMore } from "./projects/ViewMore"

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
                <div  className="text-center mb-20">

                    {/* ----- Petit titre ----- */}
                    <div className="flex items-center justify-center mb-8 overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-0.5 bg-gradient-to-l from-purple-accent to-purple-accent/0 w-20 lg:w-60 origin-right"
                        />

                        <motion.h4
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-sm text-white font-medium tracking-widest mx-2"
                        >
                            PROJETS
                        </motion.h4>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-0.5 bg-gradient-to-r from-purple-accent to-purple-accent/0 w-20 lg:w-60 origin-left"
                        />
                    </div>

                    {/* ----- Titre principal ----- */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl lg:text-6xl font-bold text-title mb-6 leading-tight"
                    >
                        Mes réalisations
                    </motion.h2>

                    {/* ----- Sous titre ----- */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl text-text-main max-w-2xl mx-auto"
                    >
                        Projets sur lesquels j'ai travaillé durant ma formation
                    </motion.p>
                </div>

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