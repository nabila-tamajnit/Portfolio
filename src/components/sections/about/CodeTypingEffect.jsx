import { motion } from "framer-motion"

// Composants de syntaxe highlighting
const K = ({ children }) => (
    <span className="text-purple-const">{children}</span>
)
const V = ({ children }) => (
    <span className="text-blue-const">{children}</span>
)
const Prop = ({ children }) => (
    <span className="text-red-const">{children}</span>
)
const Str = ({ children }) => (
    <span className="text-green-const">{children}</span>
)
const Comment = ({ children }) => (
    <span className="italic text-gray-500">{children}</span>
)

const codeLines = [
    { id: 0, delay: 0,   content: <><K>const</K> <V>nabila</V> = {'{'}</> },
    { id: 1, delay: 0.3, content: <>&nbsp;&nbsp;<Prop>role:</Prop> <Str>"Web Developer"</Str>,</> },
    { id: 2, delay: 0.6, content: <>&nbsp;&nbsp;<Prop>passion:</Prop> <Str>"Coder"</Str>,</> },
    { id: 3, delay: 0.9, content: <>&nbsp;&nbsp;<Prop>stack:</Prop> [<Str>"React", "Node.js", "MongoDB", "..."</Str>],</> },
    { id: 4, delay: 1.2, content: <>&nbsp;&nbsp;<Prop>learning:</Prop> <Str>"Toujours plus..."</Str>,</> },
    { id: 5, delay: 1.5, content: <>&nbsp;&nbsp;<Prop>disponible:</Prop> <Str>"Juin 2026"</Str></> },
    { id: 6, delay: 1.8, content: <>{'}'}</> },
    { id: 7, delay: 2.0, content: <Comment>// Prête à relever de nouveaux défis !</Comment> },
]

export const CodeTypingEffect = ({ isVisible }) => {
    return (
        <div>
            {codeLines.map((line) => (
                <motion.p
                    key={line.id}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: line.delay, duration: 0.3 }}
                >
                    {line.content}
                </motion.p>
            ))}
        </div>
    )
}