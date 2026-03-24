import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export const ViewMore = ({ onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
        >
            <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    y: [0, -8, 0]
                }}
                transition={{
                    y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-purple-accent text-title font-semibold rounded-lg hover:bg-purple-hover transition-colors"
            >
                <span>Voir plus de projets</span>

                <motion.svg
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <ChevronDown />
                </motion.svg>
            </motion.button>
        </motion.div>
    )
}