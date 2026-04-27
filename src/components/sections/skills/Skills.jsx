import { motion } from "framer-motion"
import { skills } from "../../../data/skills"
import { SkillsGrid } from "./SkillsGrid"
import { SectionHeader } from "../../ui/SectionHeader"


export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-6 lg:px-12 bg-bg-main bg-[radial-gradient(ellipse_at_center,#5F35D5_10%,transparent_20%),radial-gradient(ellipse_at_center,#4C6FFF_0%,transparent_45%)]"
    >
      <div className="max-w-7xl mx-auto">

        {/* ========== TITRE ========== */}
        <SectionHeader
          label="COMPÉTENCES"
          title="Stack technique"
          subtitle="Technologies que j'utilise pour créer des applications web"
        />

        {/* ========== GRID SKILLS ========== */}
        <SkillsGrid skills={skills} />

      </div>
    </section>
  )
}