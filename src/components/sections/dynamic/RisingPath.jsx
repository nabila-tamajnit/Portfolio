import * as m from "motion/react-m"
import { EASE_OUT } from "../../../utils/motion"

// The wrapper watches the scroll and passes "hidden" / "visible" down to the two drawings.
// (The clipped SVG can't watch the scroll itself: fully clipped, it has no visible area,
// so it would never count as "in view".)
const line = {
    hidden: { clipPath: "inset(-60px 100% -10px 0px)" },
    visible: { clipPath: "inset(-60px 0% -10px 0px)", transition: { duration: 1.8, ease: "easeInOut", delay: 0.4 } },
}

const arrow = {
    hidden: { opacity: 0, x: -8, y: 8 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: EASE_OUT, delay: 2.1 } },
}

// Desktop only: the brick path that links the tops of the rising arches,
// ending in a dashed line and an arrow pointing up and out.
// Animation: a clip-path uncovers the drawing from left to right, then the arrow appears.
// (A clip is used instead of pathLength: pathLength does not work with vector-effect="non-scaling-stroke",
// which keeps the line 2px thick while the SVG stretches. The negative top/bottom insets keep
// the dashes above the box and the line thickness visible.)
export const RisingPath = () => {
    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-[170px] lg:block"
        >
            <m.svg
                variants={line}
                viewBox="0 0 1000 170"
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-[170px] w-full overflow-visible"
            >
                <path
                    d="M0,166 C60,162 90,154 117,150 S300,118 372,105 S560,70 628,55 S820,10 883,0"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
                <path
                    d="M883,0 C925,-10 965,-26 1000,-44"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    vectorEffect="non-scaling-stroke"
                />
            </m.svg>
            <m.svg variants={arrow} viewBox="0 0 24 24" className="absolute -right-2.5 -top-[60px] size-[22px] -rotate-28">
                <path
                    d="M4 12h15M13 6l6 6-6 6"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </m.svg>
        </m.div>
    )
}
