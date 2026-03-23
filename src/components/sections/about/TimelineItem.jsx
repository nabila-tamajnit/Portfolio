import { motion } from "framer-motion"

export const TimelineItem = ({ item, index, isFirst, isLast }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-start gap-4"
        >
            {/* Colonne ligne + point */}
            <div className="flex flex-col items-center">
                {/* Ligne du haut */}
                {!isFirst && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-purple-accent/0 to-purple-accent origin-top"
                    />
                )}
                {isFirst && <div className="min-h-[2rem]" />}

                {/* Point */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-2 h-2 rounded-full bg-purple-accent shrink-0 z-10"
                />

                {/* Ligne du bas */}
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-purple-accent to-purple-accent/0 origin-top"
                    />
                )}
                {isLast && <div className="min-h-[2rem]" />}
            </div>

            {/* Contenu */}
            <div className="h-20 flex flex-col">
                <p className="font-semibold text-title">{item.name}</p>
                <p className="text-sm text-text-main mt-1">{item.description}</p>
            </div>
        </motion.div>
    )
}