import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)

    // Si mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const isInView = useInView(cardRef, { once: false, amount: 0.1 })

    const initialX = isMobile ? 0 : (index % 2 === 0 ? -100 : 100);
    const initialY = isMobile ? 20 : 0;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: initialX, y: initialY }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: initialX, y: initialY }}
            transition={{
                duration: isMobile ? 0.5 : 0.8,
                ease: "easeOut",
            }}
            className="group grid lg:grid-cols-2 items-center gap-12 bg-card-main border border-skills-border rounded-lg overflow-hidden hover:shadow-skills-glow p-8 mb-10"
        >

            {/* ========== CONTENU ========== */}
            <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>

                {/* ----- Numero ----- */}
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <h4 className="text-4xl text-purple-accent font-bold tracking-widest">
                        {project.number}
                    </h4>
                    <div className="h-0.5 bg-gradient-to-r from-purple-accent to-purple-accent/0 flex-1" />
                </motion.div>

                {/* ----- Titre ----- */}
                <motion.h3
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-title text-3xl font-semibold mb-4"
                >
                    {project.title}
                </motion.h3>

                {/* ----- Description ----- */}
                <motion.p
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-text-main mb-6"
                >
                    {project.description}
                </motion.p>

                {/* ----- Tags ----- */}
                <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -20, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-5 mb-6"
                >
                    {project.tags?.map((tag) => (
                        <img
                            key={tag.name}
                            alt={tag.name}
                            src={tag.icon}
                            className="w-6 h-6"
                            title={tag.name}
                        />


                    ))}
                </motion.div>

                {/*  ----- Liens ----- */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative flex gap-6"
                >
                    {project.links?.map((link) => (
                        <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex flex-col items-center gap-2"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                src={link.icon}
                                alt={link.name}
                                className=" w-10 h-10 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
                            />

                            {isMobile && (
                                <span className="text-[10px] text-text-main uppercase tracking-widest font-medium">
                                    Lien {link.name}
                                </span>
                            )}

                            {!isMobile && (

                                <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover/link:scale-100">
                                    {link.name}
                                </span>
                            )}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* ========== VIDÉO ========== */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}
            >
                <div className="relative aspect-video overflow-hidden border-2 border-purple-accent/30 rounded-lg bg-gray-200 hover:border-purple-accent transition-colors">
                    <video
                        src={project.video}
                        poster={project.image}
                        className="hidden md:block w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                            e.target.pause()
                            e.target.currentTime = 0
                        }}
                    />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="block md:hidden w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}