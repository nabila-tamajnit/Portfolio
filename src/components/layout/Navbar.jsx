import { useEffect, useRef, useState } from "react"
import { Logo } from "../ui/Logo"
import { contactLink, navLinks } from "../../data/navigation"

const MOBILE_MENU_ID = "mobile-menu"

const navLinkClasses = "transition-colors duration-200 hover:text-brique"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)

    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)
    const closeMenu = () => setIsMenuOpen(false)

    // Escape closes the mobile menu and gives focus back to the button that opened it
    useEffect(() => {
        if (!isMenuOpen) return

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isMenuOpen])

    return (
        <header>
            <div className="page-container flex items-center justify-between py-[18px] md:py-6 lg:py-[30px]">
                <a href="#accueil" className="flex items-center gap-2.5 lg:gap-3">
                    <Logo className="h-9 w-[30px] md:h-[41px] md:w-[34px] lg:h-12 lg:w-10" />
                    <span className="font-serif text-[22px] font-medium md:text-[24px] lg:text-[26px] lg:tracking-[0.5px]">
                        Nabila Tamajnit
                    </span>
                </a>

                {/* Tablet and desktop navigation */}
                <nav
                    aria-label="Navigation principale"
                    className="hidden items-center gap-6 text-[12px] font-medium uppercase tracking-[1.8px] md:flex lg:gap-9 lg:text-[13px] lg:tracking-[2px]"
                >
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={navLinkClasses}>
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={contactLink.href}
                        className="rounded-full border border-brun px-[18px] py-[11px] transition-colors duration-200 hover:border-brique hover:text-brique lg:px-[22px] lg:py-3"
                    >
                        {contactLink.label}
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    ref={menuButtonRef}
                    type="button"
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                    aria-controls={MOBILE_MENU_ID}
                    onClick={toggleMenu}
                    className="flex size-[46px] cursor-pointer items-center justify-center rounded-full border border-brun transition-colors duration-200 hover:border-brique hover:text-brique md:hidden"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        <path d={isMenuOpen ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile menu: pushes the page content down, as in the mockup */}
            {isMenuOpen && (
                <nav
                    id={MOBILE_MENU_ID}
                    aria-label="Navigation principale"
                    className="mx-3.5 mb-2.5 flex flex-col rounded-[22px] border border-bordure bg-creme px-6 pb-6 pt-[18px] shadow-[0_20px_40px_-24px_rgb(74_40_24/0.35)] md:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className={`border-b border-filet py-3.5 font-serif text-[28px] ${navLinkClasses}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={contactLink.href}
                        onClick={closeMenu}
                        className="mt-5 rounded-full bg-brique py-[15px] text-center text-[14px] font-semibold uppercase tracking-[1.5px] text-sur-brique transition-colors duration-200 hover:bg-brique-fonce"
                    >
                        {contactLink.label}
                    </a>
                </nav>
            )}
        </header>
    )
}
