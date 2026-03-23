import { motion } from "framer-motion"

export const CodeTypingEffect = ({ isVisible }) => {
    const codeContent = [
        { line: '<span class="text-purple-const">const</span> <span class="text-blue-const">nabila</span> = {', delay: 0 },
        { line: '  <span class="text-red-const">role:</span> <span class="text-green-const">"Web Developer"</span>,', delay: 0.5 },
        { line: '  <span class="text-red-const">passion:</span> <span class="text-green-const">"Coder"</span>,', delay: 1 },
        { line: '  <span class="text-red-const">stack:</span> [<span class="text-green-const">"React", "Node.js", "MongoDB", "..."</span>],', delay: 1.5 },
        { line: '  <span class="text-red-const">learning:</span> <span class="text-green-const">"Toujours plus..."</span>,', delay: 2 },
        { line: '  <span class="text-red-const">disponible:</span> <span class="text-green-const">"Juin 2026"</span>', delay: 2.5 },
        { line: '};', delay: 3 },
        { line: '<span class="italic text-gray-500">// Prête à relever de nouveaux défis !</span>', delay: 3.5 }
    ]

    return (
        <div>
            {codeContent.map((item, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: item.delay, duration: 0.3 }}
                    dangerouslySetInnerHTML={{ __html: item.line }}
                />
            ))}
        </div>
    )
}