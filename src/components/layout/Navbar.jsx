import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence } from "motion/react"
import * as m from "motion/react-m"
import { Logo } from "../ui/Logo"
import { useHideOnScroll } from "../../hooks/useHideOnScroll"
import { EASE_OUT, revealOnLoad } from "../../utils/motion"
import { contactLink, navLinks } from "../../data/navigation"

const MOBILE_MENU_ID = "mobile-menu"

const navLinkClasses = "transition-colors duration-200 hover:text-brique"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuButtonRef = useRef(null)
    const headerRef = useRef(null)
    const barRef = useRef(null)
    const [barHeight, setBarHeight] = useState(null)
    const { isHidden, isScrolled, isCompact } = useHideOnScroll()

    // The bar is fixed, so it no longer takes room in the page: the <header> keeps that room
    // with the height of the full-size bar (menu included when it is open at the top of the page).
    // The height is only copied while the bar is full size, so the slim version never moves the page.
    // (useLayoutEffect: measured before the first paint, so the page never jumps on load)
    useLayoutEffect(() => {
        if (isCompact) return

        const bar = barRef.current
        const measure = () => setBarHeight(bar.offsetHeight)
        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(bar)
        return () => observer.disconnect()
    }, [isCompact])

    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)
    const closeMenu = () => setIsMenuOpen(false)

    // While the mobile menu is open:
    // - Escape closes it and gives focus back to the button that opened it
    // - a click or tap anywhere outside the header closes it
    useEffect(() => {
        if (!isMenuOpen) return

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        const handlePointerDown = (event) => {
            if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false)
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("pointerdown", handlePointerDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("pointerdown", handlePointerDown)
        }
    }, [isMenuOpen])

    // Fixed bar: slides up out of view when scrolling down, comes back when scrolling up.
    // It stays visible while the mobile menu is open or while it holds the keyboard focus.
    // Once the page has moved, it gets a see-through blurred background and a soft shadow;
    // further down the page it comes back in a slimmer version.
    const barClasses = [
        "fixed inset-x-0 top-0 transition-[translate,background-color,box-shadow,backdrop-filter] duration-300 ease-out motion-reduce:transition-none focus-within:translate-y-0",
        isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0",
        isScrolled ? "bg-lin/75 shadow-[0_10px_30px_-24px_rgb(74_40_24/0.45)] backdrop-blur-md" : "",
    ].join(" ")

    return (
        <header ref={headerRef} className="relative z-50" style={barHeight ? { height: barHeight } : undefined}>
            <div ref={barRef} className={barClasses}>
                <m.div {...revealOnLoad(0, -12)} className={`page-container flex items-center justify-between transition-[padding] duration-300 motion-reduce:transition-none ${isCompact ? "py-2.5 md:py-3 lg:py-3.5" : "py-[18px] md:py-6 lg:py-[30px]"}`}>
                    <a href="#accueil" className="flex items-center gap-2.5 lg:gap-3">
                        <Logo
                            className={`transition-[width,height] duration-300 motion-reduce:transition-none ${isCompact ? "h-8 w-[27px] lg:h-10 lg:w-[33px]" : "h-9 w-[30px] md:h-[41px] md:w-[34px] lg:h-12 lg:w-10"}`}
                        />
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
                            className={`rounded-full border border-brun px-[18px] transition-[color,border-color,padding] duration-200 hover:border-brique hover:text-brique lg:px-[22px] ${isCompact ? "py-[9px] lg:py-2.5" : "py-[11px] lg:py-3"}`}
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
                        className={`flex cursor-pointer items-center justify-center rounded-full border border-brun transition-[color,border-color,width,height] duration-200 hover:border-brique hover:text-brique md:hidden ${isCompact ? "size-10" : "size-[46px]"}`}
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
                </m.div>

                {/* Mobile menu: pushes the page content down, as in the mockup */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <m.nav
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: EASE_OUT }}
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
                        </m.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
