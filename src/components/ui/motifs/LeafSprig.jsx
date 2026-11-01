const leaves = [
    "M61 182C40 174 30 162 26 148 42 152 55 164 61 182Z",
    "M62 160C80 150 92 138 96 124 80 127 66 142 62 160Z",
    "M63 132C44 124 35 112 32 98 47 102 59 115 63 132Z",
    "M65 108C82 98 92 86 95 72 80 75 68 90 65 108Z",
    "M66 82C50 74 43 62 41 50 54 54 64 66 66 82Z",
    "M68 58C82 50 89 40 91 28 79 31 70 43 68 58Z",
    "M69 34C60 28 56 20 56 12 64 15 69 24 69 34Z",
]

// Leafy sprig used in section corners. `outline` draws only the strokes; otherwise leaves are filled sage.
// `leafCount` lets a section show 6 or 7 leaves, as in the mockups.
export const LeafSprig = ({ outline = false, leafCount = leaves.length, className = "" }) => {
    return (
        <svg
            viewBox="0 0 120 220"
            aria-hidden="true"
            className={`stroke-sauge-fonce ${outline ? "fill-none" : "fill-sauge"} ${className}`}
            strokeWidth={outline ? 1.1 : 0.9}
            strokeLinejoin="round"
        >
            <path d="M60 215C58 160 64 100 70 10" fill="none" />
            {leaves.slice(0, leafCount).map((d) => (
                <path key={d} d={d} />
            ))}
        </svg>
    )
}
