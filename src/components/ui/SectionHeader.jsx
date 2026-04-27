import { motion } from "framer-motion"

export const SectionHeader = ({ label, title, subtitle }) => {
    return (
        <div className="text-center mb-20">

            {/* Ligne décorative + label */}
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
                    {label}
                </motion.h4>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-0.5 bg-gradient-to-r from-purple-accent to-purple-accent/0 w-20 lg:w-60 origin-left"
                />
            </div>

            {/* Titre principal */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-title mb-6 leading-tight"
            >
                {title}
            </motion.h2>

            {/* Sous-titre */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl text-text-main max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}