import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export const ViewMore = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
        if (onClick) onClick()
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
        >
            <motion.button
                onClick={handleToggle}
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
                <span>{isOpen ? "Voir moins" : "Voir plus"}</span>

                <motion.div
                    animate={{
                        y: isOpen ? 0 : [0, 5, 0],
                        rotate: isOpen ? 180 : 0
                    }}
                    transition={{ 
                        y: { duration: 1.5, repeat: Infinity },
                        rotate: { duration: 0.3 } 
                    }}
                    className="flex items-center justify-center"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.button>
        </motion.div>
    )
}