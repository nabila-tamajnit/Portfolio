import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SkillCard } from "./SkillCard"

export const SkillsGrid = ({ skills }) => {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={gridRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.10
          }
        }
      }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      {skills.map((skill, index) => (
        <SkillCard 
          key={skill.name} 
          skill={skill} 
          index={index}
          totalSkills={skills.length}
          isGridInView={isInView}
        />
      ))}
    </motion.div>
  )
}