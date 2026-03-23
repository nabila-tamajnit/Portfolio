import { motion } from "framer-motion"

export const SkillCard = ({ skill, index, totalSkills, isGridInView }) => {

  const glowDelay = (totalSkills * 0.08) + 0.5 + (index * 0.06)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: { opacity: 1, scale: 1, y: 0 }
      }}
      whileHover={{ 
        scale: 1.1,
        y: -8,
        borderColor: '#5F35D5',
        boxShadow: '0 0 20px rgba(95, 53, 213, 0.6)',
        transition: { duration: 0.2 }
      }}
      className="relative bg-card-main flex flex-col items-center justify-center rounded-lg p-3 lg:p-6 border border-skills-border transition-colors duration-300"
    >
      {/* ----- Effet glow ----- */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={isGridInView ? { 
          opacity: [0, 1, 0],
          scale: [1, 1.05, 1]
        } : { opacity: 0 }}
        transition={{
          duration: 1.2,
          delay: isGridInView ? glowDelay : 0,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-lg border-2 border-purple-accent shadow-[0_0_25px_rgba(95,53,213,0.8)] pointer-events-none"
      />

      {/* ----- Contenu ----- */}
      <img
        src={skill.icon}
        alt={skill.name}
        className={`w-8 h-8 lg:w-16 lg:h-16 mb-3 ${skill.invert ? "invert" : ""}`}
      />
      <p className="text-title text-center text-sm lg:text-lg">{skill.name}</p>
    </motion.div>
  )
}