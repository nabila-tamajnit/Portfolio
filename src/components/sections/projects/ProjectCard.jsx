// Small card in "Tous les projets". Clicking it shows the project in the showcase above.
export const ProjectCard = ({ project, isSelected, onSelect }) => {
    return (
        <button
            type="button"
            onClick={onSelect}
            aria-current={isSelected ? "true" : undefined}
            className="group flex w-full cursor-pointer flex-col gap-3 text-left lg:gap-3.5"
        >
            <span
                className={`relative block aspect-[16/11] w-full overflow-hidden rounded-xl bg-vignette shadow-soft outline-[1.5px] outline-offset-[3px] lg:rounded-[14px] lg:outline-offset-4 ${isSelected ? "outline-brique" : "outline-transparent"}`}
            >
                <img
                    src={project.images.thumbnail}
                    width="480"
                    height="330"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top brightness-103 saturate-82 sepia-28 transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                />
                {/* Warm veil that blends the screenshots into the palette */}
                <span aria-hidden="true" className="absolute inset-0 bg-voile opacity-[0.38] mix-blend-multiply" />
            </span>
            <span className="flex flex-col gap-[3px] lg:gap-1 lg:px-0.5">
                <span
                    className={`text-[14px] font-semibold transition-colors duration-200 group-hover:text-brique lg:text-[15px] lg:leading-[1.3] ${isSelected ? "text-brique" : ""}`}
                >
                    {project.shortTitle}
                </span>
                <span className="text-[11.5px] text-texte-doux lg:text-[12px]">{project.category}</span>
            </span>
        </button>
    )
}
