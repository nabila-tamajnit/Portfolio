import { motion } from "framer-motion"
import { CodeXml } from "lucide-react"

export const ComingSoon = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
        >
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.7, 1, 0.7]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-card-main border-2 border-purple-accent/50 rounded-lg"
            >
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                            className="w-2 h-2 bg-purple-accent rounded-full"
                        />
                    ))}
                </div>

                <p className="text-lg text-title font-medium">
                    D'autres projets sont en cours de développement
                </p>

                <motion.svg
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-6 text-purple-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <CodeXml />
                </motion.svg>
            </motion.div>
        </motion.div>
    )
}