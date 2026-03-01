import { useState } from "react"
import { Logo } from "../common/Logo";
import { NavHashLink } from "react-router-hash-link";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Bienvenue', href: '#welcome' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };


    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0B0E1B]/60">
            <div className="max-w-7xl 2xl:max-w-400 mx-auto  px-6 lg:px-12 py-3 flex justify-between items-center ">

                {/* ------ LOGO ----- */}
                <a href="#" className="flex items-center text-white text-lg font-bold">
                    N <span className="w-2 h-2 bg-[#833ecd] rounded-full mx-1"> </span> Dev
                </a>

                {/* ----- LIENS ----- */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link} >
                            <NavHashLink
                                smooth to={link.href}
                                className=" text-sm uppercase font-family-link text-[#8899BB] hover:text-[#833ecd] transition-colors"
                            >
                                {link.name}
                            </NavHashLink>
                        </li>
                    ))}
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
                                <NavHashLink
                                    smooth to={link.href}
                                    activeClassName="selected"
                                    activeStyle={{ color: 'red' }}
                                    onClick={toggleMenu}
                                    className="text-xl font-medium uppercase font-family-link text-[#8899BB] hover:text-[#833ecd] transition-colors"
                                >
                                    {link.name}
                                </NavHashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}