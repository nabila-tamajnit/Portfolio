import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TimelineItem } from "./about/TimelineItem"
import { CodeTypingEffect } from "./about/CodeTypingEffect"

export const About = () => {
    const myStrengths = [
        { name: 'Motivée' },
        { name: 'Autonome' },
        { name: 'Sens du détail' },
        { name: 'Curieuse' }
    ]

    const progress = [
        { name: 'Explorer', description: "Découvrir les fondamentaux du développement web" },
        { name: 'Construire', description: "Donner vie à mes premières idées à travers des projets" },
        { name: 'Approfondir', description: "Affiner mon code et développer de bonnes pratiques" },
        { name: 'M\'engager', description: "Rejoindre une équipe et évoluer dans un cadre professionnel" }
    ]


    const lineRef1 = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const lineRef2 = useRef(null)
    const codeRef = useRef(null)

    const isLineVisible1 = useInView(lineRef1, { once: false, amount: 0.5 })
    const isTitleVisible = useInView(titleRef, { once: false, amount: 0.5 })
    const isTextVisible = useInView(textRef, { once: false, amount: 0.3 })
    const isLineVisible2 = useInView(lineRef2, { once: false, amount: 0.5 })
    const isCodeVisible = useInView(codeRef, { once: false, amount: 0.3 })

    return (
        <section
            id="about"
            className="relative z-20 w-full py-16 sm:py-24 pt-24 sm:pt-32 px-6 lg:px-12 bg-bg-main bg-[radial-gradient(circle_at_top_right,#4C6FFF_0%,transparent_10%),radial-gradient(circle_at_top_right,#5F35D5_0%,transparent_3%)] sm:bg-[radial-gradient(circle_at_top_right,#4C6FFF_0%,transparent_25%),radial-gradient(circle_at_top_right,#5F35D5_0%,transparent_15%)]"
        >
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ========== À PROPOS ========== */}
                <div className="lg:w-3/4">

                    {/* ----- Ligne ----- */}
                    <div ref={lineRef1} className="flex items-center mb-8 overflow-hidden">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isLineVisible1 ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-0.5 bg-gradient-to-r from-purple-accent to-bg-main/0 flex-1 origin-left"
                        />
                    </div>

                    {/* ----- Titre ----- */}
                    <motion.h2
                        ref={titleRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isTitleVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl lg:text-6xl font-semibold text-title mb-8 leading-tight"
                    >
                        À propos de moi
                    </motion.h2>

                    {/* ----- Texte ----- */}
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isTextVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg text-text-main space-y-5 leading-relaxed mb-16"
                    >
                        <p>
                            Coder est pour moi bien plus qu'un apprentissage : c'est un espace où je{' '}
                            <strong>me challenge</strong> et où je <strong>me révèle</strong>.
                        </p>

                        <p>
                            J'aime aller au fond des choses, comprendre, ajuster et tester jusqu'à obtenir quelque chose de clair et cohérent. Le développement m'apporte cette{' '}
                            <strong>concentration</strong> intense où le temps passe sans que je m'en rende compte.
                        </p>

                        <p>
                            Actuellement en formation chez <strong>Interface3</strong>, je souhaite intégrer un stage en développement web à partir de juin 2026 afin de mettre en pratique{' '}
                            <strong>mes compétences</strong> au sein d'une équipe.
                        </p>
                    </motion.div>
                </div>

                {/* ========== DIV GAUCHE/DROITE ========== */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* ========== GAUCHE : MA DYNAMIQUE ========== */}
                    <div>
                        {/* ----- Ligne ----- */}
                        <div ref={lineRef2} className="flex items-center mb-12 overflow-hidden">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isLineVisible2 ? { scaleX: 1 } : { scaleX: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="h-0.5 bg-gradient-to-r from-purple-accent to-bg-main/0 flex-1 origin-left"
                            />
                        </div>

                        {/* ----- Titre ----- */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl text-title font-semibold mb-6"
                        >
                            Ma dynamique
                        </motion.h3>

                        {/* ----- Timeline ----- */}
                        <div className="flex flex-col">
                            {progress.map((item, index) => (
                                <TimelineItem
                                    key={item.name}
                                    item={item}
                                    index={index}
                                    isFirst={index === 0}
                                    isLast={index === progress.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ========== DROITE : CODE + ATOUTS ========== */}
                    <div>
                        {/* ========== Code ========== */}
                        <motion.div
                            ref={codeRef}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isCodeVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="bg-strenght-bg border border-strenght-border rounded-lg mb-12"
                        >
                            {/* ----- Header ----- */}
                            <div className="h-10 bg-[#080c18] rounded-t-lg border-b-2 border-strenght-border flex items-center px-6">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isCodeVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="text-title font-medium"
                                >
                                    about.js
                                </motion.p>
                            </div>

                            {/* ----- Code content ----- */}
                            <div className="text-sm leading-6 text-text-main font-fira p-8">
                                <CodeTypingEffect isVisible={isCodeVisible} />
                            </div>
                        </motion.div>

                        {/* ========== Mes atouts ========== */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                            className="mt-20"
                        >
                            <h3 className="text-xl font-semibold mb-8 text-title">Mes atouts</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {myStrengths.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        whileHover={{ scale: 1.05, borderColor: '#4C6FFF' }}
                                        className="bg-strenght-bg border border-strenght-border hover:border-strenght-hover p-4 rounded-lg transition-colors"
                                    >
                                        <p className="text-center font-medium text-white">{item.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}