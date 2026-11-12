import * as m from "motion/react-m"
import { revealOnScroll } from "../../utils/motion"

// A <div> that fades and rises once when it scrolls into view.
// Use it to wrap a block without touching its content; `className` keeps the block's layout classes.
export const Reveal = ({ delay, distance, className = "", children, ...props }) => {
    return (
        <m.div {...revealOnScroll(delay, distance)} className={className} {...props}>
            {children}
        </m.div>
    )
}
