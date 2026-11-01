const leaves = [
    { d: "M125 200 q 18 -4 30 8 q -18 6 -30 -8z", light: false },
    { d: "M110 172 q -20 -8 -34 4 q 18 10 34 -4z", light: true },
    { d: "M94 140 q 18 -2 28 12 q -18 4 -28 -12z", light: false },
    { d: "M76 110 q -20 -6 -32 8 q 18 8 32 -8z", light: true },
    { d: "M60 80 q 16 -6 28 4 q -14 8 -28 -4z", light: false },
    { d: "M46 52 q -18 -6 -28 6 q 16 8 28 -6z", light: true },
]

// Olive branch with alternating olive / light olive leaves. Size and position come from `className`.
export const OliveBranch = ({ className = "" }) => {
    return (
        <svg viewBox="0 0 190 260" fill="none" aria-hidden="true" className={className}>
            <path d="M150 255 C 120 200, 90 140, 30 20" className="stroke-olive-fonce" strokeWidth="2" />
            {leaves.map((leaf) => (
                <path key={leaf.d} d={leaf.d} className={leaf.light ? "fill-olive-clair" : "fill-olive"} />
            ))}
        </svg>
    )
}
