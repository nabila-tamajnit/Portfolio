import { useEffect, useState } from "react"

// Tells a sticky header when to slide away: hidden while the page scrolls down,
// shown again as soon as it scrolls up, and always shown near the top of the page.
// `offset`: distance from the top (px) before the header may hide.
// `tolerance`: smallest scroll step (px) that counts, so tiny trackpad movements are ignored.
export const useHideOnScroll = ({ offset = 120, tolerance = 6 } = {}) => {
    const [isHidden, setIsHidden] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        let lastY = window.scrollY
        let frame = null

        const update = () => {
            frame = null
            const y = window.scrollY
            const delta = y - lastY

            setIsScrolled(y > 0)

            if (y < offset) {
                setIsHidden(false)
                lastY = y
            } else if (Math.abs(delta) >= tolerance) {
                setIsHidden(delta > 0)
                lastY = y
            }
        }

        // One update per frame at most, however often the scroll event fires
        const handleScroll = () => {
            if (frame === null) frame = requestAnimationFrame(update)
        }

        update()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (frame !== null) cancelAnimationFrame(frame)
        }
    }, [offset, tolerance])

    return { isHidden, isScrolled }
}
