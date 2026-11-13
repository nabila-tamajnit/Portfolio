// Shared animation settings for motion/react.

// Easing: starts quickly, settles softly
export const EASE_OUT = [0.22, 1, 0.36, 1]

// Fade and rise once when the element scrolls into view.
// Spread on any motion element: <m.li {...revealOnScroll(0.1)} />
// The negative bottom margin waits until the element is ~15% inside the screen,
// so the movement happens where the eye is, not hidden at the bottom edge.
export const revealOnScroll = (delay = 0, distance = 48) => ({
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15, margin: "0px 0px -15% 0px" },
    transition: { duration: 0.9, ease: EASE_OUT, delay },
})

// Fade and rise when the page loads (header, hero).
export const revealOnLoad = (delay = 0, distance = 20) => ({
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE_OUT, delay },
})
