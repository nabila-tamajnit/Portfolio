import { ArrowRight } from "lucide-react"

const variants = {
    primary: "bg-brique text-sur-brique shadow-brique hover:bg-brique-fonce hover:text-sur-brique",
    dark: "bg-brun text-sur-brique hover:bg-brique-fonce hover:text-sur-brique",
    outline: "border border-brun text-brun hover:border-brique hover:text-brique",
}

// Pill button. Renders a link when `href` is given, otherwise a <button>.
// Padding and width are passed through `className` because they change with the layout.
export const Button = ({
    href,
    variant = "primary",
    withArrow = false,
    className = "",
    children,
    ...props
}) => {
    const classes = `inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full text-[15px] font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`

    const content = (
        <>
            {children}
            {withArrow && <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />}
        </>
    )

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        )
    }

    return (
        <button type="button" className={classes} {...props}>
            {content}
        </button>
    )
}
