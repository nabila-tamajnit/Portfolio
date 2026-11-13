// Label above an underlined input or textarea, with an error message linked for screen readers.
// `fieldClassName` styles the input itself (e.g. the textarea height); `className` styles the wrapper.
export const FormField = ({ id, label, error, multiline = false, className = "", fieldClassName = "", ...inputProps }) => {
    const errorId = `${id}-error`
    const Field = multiline ? "textarea" : "input"

    return (
        <div className={`flex flex-col ${className}`}>
            <label
                htmlFor={id}
                className="mb-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-texte-doux"
            >
                {label}
            </label>
            <Field
                id={id}
                name={id}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`border-b bg-transparent py-3 text-[16px] text-brun transition-colors duration-200 placeholder:text-texte-doux/70 focus-visible:border-brique focus-visible:shadow-[0_1px_0_var(--color-brique)] focus-visible:outline-none md:py-[11px] lg:py-3 ${multiline ? "resize-y" : ""} ${error ? "border-brique" : "border-ligne-champ"} ${fieldClassName}`}
                {...inputProps}
            />
            {error && (
                <p id={errorId} className="mt-1.5 text-[13px] text-brique-fonce">
                    {error}
                </p>
            )}
        </div>
    )
}
