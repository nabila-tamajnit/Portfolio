import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "../../ui/Button"
import { ProjectCard } from "./ProjectCard"

const LIST_ID = "project-list"

// Cards on the first row: 3 on tablet, 5 on desktop. Mobile shows every card in a horizontal scroller.
// Tailwind needs full class names, so the hiding rules are written out here.
const collapsedClasses = (index) => {
    if (index >= 5) return "md:hidden"
    if (index >= 3) return "md:hidden lg:block"
    return ""
}

// "Voir plus" is only useful when a row is full: tablet from 4 projects, desktop from 6.
const toggleVisibility = (count) => {
    if (count > 5) return "md:flex"
    if (count > 3) return "md:flex lg:hidden"
    return ""
}

export const ProjectGrid = ({ projects, currentIndex, onSelect }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <ul
                id={LIST_ID}
                className="-mx-[22px] flex snap-x snap-mandatory scroll-px-[22px] gap-3.5 overflow-x-auto px-[22px] pb-3.5 pt-1 md:mx-0 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-[26px] md:overflow-visible md:p-0 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-7"
            >
                {projects.map((project, index) => (
                    <li
                        key={project.slug}
                        className={`w-[200px] flex-none snap-start md:w-auto ${isExpanded ? "" : collapsedClasses(index)}`}
                    >
                        <ProjectCard
                            project={project}
                            isSelected={index === currentIndex}
                            onSelect={() => onSelect(index)}
                        />
                    </li>
                ))}
            </ul>

            <div className={`mt-10 hidden justify-center ${toggleVisibility(projects.length)}`}>
                <Button
                    variant="outline"
                    aria-expanded={isExpanded}
                    aria-controls={LIST_ID}
                    onClick={() => setIsExpanded((expanded) => !expanded)}
                    className="px-7 py-3.5"
                >
                    {isExpanded ? "Voir moins" : "Voir plus"}
                    <ChevronDown
                        size={16}
                        strokeWidth={1.6}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                </Button>
            </div>
        </>
    )
}
