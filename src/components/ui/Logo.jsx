// NT monogram under a double arch. Decorative: the brand name is always written next to it.
export const Logo = ({ className = "" }) => {
    return (
        <svg viewBox="24 16 152 184" fill="none" aria-hidden="true" className={className}>
            <path d="M30 196V92a70 70 0 0 1 140 0v104" className="stroke-laiton" strokeWidth="3" />
            <path d="M42 196V92a58 58 0 0 1 116 0v104" className="stroke-laiton" strokeWidth="4.5" />
            <path
                d="M60 168V84l56 84V84"
                className="stroke-brun"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M92 84H140" className="stroke-brique" strokeWidth="11" strokeLinecap="round" />
        </svg>
    )
}
