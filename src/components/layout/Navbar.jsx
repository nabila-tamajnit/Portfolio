import { useState } from "react"
import { Logo } from "../common/Logo";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Bienvenue', href:'#welcome'},
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' }
    ]

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
        

    return (
        <nav className="fixed top-0 w-full z-50 bg-dark-bg/95">
            <div className="max-w-7xl 2xl:max-w-400 mx-auto  px-6 lg:px-12 py-5 flex justify-between items-center ">

                {/* ------ LOGO ----- */}
                <a href="#" className="flex items-center">
                    <Logo variant="dualWhite" className="w-12 h-12" />
                </a>

                {/* ----- LIENS ----- */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link} >
                            <a
                                href={link.href}
                                className="font-medium text-gray-300 hover:text-sage-green transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}


                    <li>
                        <a
                            href="#contact"
                            className="px-6 py-2.5 rounded bg-sage-green text-white font-medium hover:bg-sage-dark transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* ----- BOUTON BURGER ----- */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white z-50 relative"
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5 w-6" >
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''} `}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''} `}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''} `}
                        ></span>
                    </div>
                </button>
            </div>

            {/* ----- MENU MOBILE ----- */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-dark-bg z-40 flex flex-col items-center justify-center">
                    <ul className="flex flex-col items-center gap-8" >
                        {navLinks.map((link) => (
                            <li key={link} >
                                <a
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-xl font-medium text-gray-300 hover:text-sage-green transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="#contact"
                                className=" text-xl px-6 py-2.5 bg-sage-green text-white font-medium rounded hover:bg-sage-dark transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}