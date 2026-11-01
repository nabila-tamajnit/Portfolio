// Line icons for the social links. lucide-react 1.x no longer ships brand icons,
// so GitHub and LinkedIn are drawn here, in the same stroke style as the mockups.
const IconBase = ({ size = 22, strokeWidth = 1.4, className = "", children }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            {children}
        </svg>
    )
}

export const GithubIcon = (props) => (
    <IconBase {...props}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </IconBase>
)

export const LinkedinIcon = (props) => (
    <IconBase {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
    </IconBase>
)

export const MailIcon = (props) => (
    <IconBase {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
    </IconBase>
)
