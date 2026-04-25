import { useState, useEffect } from "react"
import { NavHashLink } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"


const navLinks = [
    { name: 'Bienvenue', href: '#welcome' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('#welcome')

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1))

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(`#${sectionId}`)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        // window.history.replaceState(null, null, window.location.pathname);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <>
            {/* =========== NAVBAR ===========*/}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 w-full z-50 bg-bg-main border-b border-purple-accent/10"
            >
                <div className="max-w-7xl 2xl:max-w-400 mx-auto px-6 lg:px-12 py-2 flex justify-between items-center">

                    {/* ----- LOGO ----- */}
                    <motion.a
                        href="#welcome"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-end"
                    >
                        <img
                            src="assets/brand/logo.svg"
                            height="30"
                            width="30"
                            alt="Logo Nabila"
                            className="lg:h-9 lg:w-9 hover:scale-110 transition-transform"
                        />
                    </motion.a>

                    {/* ----- LIENS DESKTOP ----- */}
                    <ul className="hidden md:flex gap-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                <NavHashLink
                                    smooth
                                    to={link.href}
                                    className={`relative text-sm uppercase font-medium font-link tracking-wider transition-colors duration-300 group ${activeSection === link.href ? 'text-purple-hover' : 'text-text-main hover:text-purple-hover'}`}
                                >
                                    {link.name}
                                    <span
                                        className={` absolute -bottom-1 left-0 h-0.5 bg-purple-accent transition-all duration-300 ease-out ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'} `}
                                    />
                                </NavHashLink>
                            </motion.li>
                        ))}
                    </ul>

                    {/* ----- BOUTON BURGER ----- */}
                    <motion.button
                        onClick={toggleMenu}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:hidden text-white z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5 w-6">
                            <span
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                            />
                            <span
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                            />
                        </div>
                    </motion.button>
                </div>
            </motion.nav>

            {/* ========== MENU MOBILE ========== */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.6 }}
                        className="md:hidden fixed w-full bg-bg-main z-40"
                    >
                        <div className="flex items-center justify-center py-20">
                            <ul className="flex flex-col items-center gap-10">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.08
                                        }}
                                    >
                                        <NavHashLink
                                            smooth
                                            to={link.href}
                                            onClick={toggleMenu}
                                            className={` font-medium uppercase font-link tracking-wider transition-colors duration-300 ${activeSection === link.href ? 'text-purple-hover' : 'text-title hover:text-purple-hover'} `}
                                        >
                                            {link.name}
                                        </NavHashLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}