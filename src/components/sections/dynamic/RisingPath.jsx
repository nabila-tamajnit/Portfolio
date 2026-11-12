import * as m from "motion/react-m"

// Fades in once the brick line has finished drawing
const appearAfterLine = (delay) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5, delay },
})

// Desktop only: the brick path that links the tops of the rising arches,
// ending in a dashed line and an arrow pointing up and out.
// Animation: the line draws itself from left to right, then the dashes and the arrow appear.
export const RisingPath = () => {
    return (
        <div aria-hidden="true" className="hidden lg:block">
            <svg
                viewBox="0 0 1000 170"
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-[170px] w-full overflow-visible"
            >
                <m.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
                    d="M0,166 C60,162 90,154 117,150 S300,118 372,105 S560,70 628,55 S820,10 883,0"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
                <m.path
                    {...appearAfterLine(1.8)}
                    d="M883,0 C925,-10 965,-26 1000,-44"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
            <m.svg {...appearAfterLine(2.1)} viewBox="0 0 24 24" className="absolute -right-2.5 -top-[60px] size-[22px] -rotate-28">
                <path
                    d="M4 12h15M13 6l6 6-6 6"
                    fill="none"
                    className="stroke-brique"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </m.svg>
        </div>
    )
}
