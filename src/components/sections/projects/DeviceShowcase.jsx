import * as m from "motion/react-m"

// Laptop and phone mockups showing the current project, on a clay blob.
// When the project is online, clicking a device opens it in a new tab. These image links are a
// mouse shortcut only: keyboard and screen reader users get the "Voir le projet en ligne" text link.
// `group` lets the screenshot inside react when the device is hovered.
const DeviceLink = ({ liveUrl, className, children }) => {
    if (!liveUrl) return <div className={`group ${className}`}>{children}</div>

    return (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className={`group block ${className}`}>
            {children}
        </a>
    )
}

// Screenshot inside a device. A new key per project replays the fade when the project changes.
// With a full-page capture, hovering the device scrolls the page from top to bottom (object-position
// moves from top to bottom over 7 seconds) and back when the mouse leaves.
const Screen = ({ project, src, fullPage, alt, position, className = "" }) => {
    return (
        <m.img
            key={project.slug}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={fullPage ?? src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`size-full object-cover ${position} ${fullPage ? "transition-[object-position] duration-[7s] ease-in-out motion-safe:group-hover:object-bottom" : ""} ${className}`}
        />
    )
}

export const DeviceShowcase = ({ project, className = "" }) => {
    const { title, liveUrl, images } = project

    return (
        <div className={`relative h-[270px] min-w-0 md:h-[400px] lg:h-[470px] ${className}`}>
            <svg
                viewBox="0 0 640 470"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -left-1.5 top-1.5 h-[260px] w-[358px] fill-argile md:left-10 md:top-0 md:h-[400px] md:w-[680px] lg:left-0 lg:size-full"
            >
                <path d="M196 40C268 6 372 -4 452 22c86 28 156 70 176 150 20 82-14 168-82 226-62 52-150 70-238 66-92-4-180-24-238-86C14 320 0 250 32 192c22-40 66-56 92-92 22-30 34-46 72-60Z" />
            </svg>

            {/* Laptop */}
            <DeviceLink
                liveUrl={liveUrl}
                className="absolute left-2 top-10 w-[270px] md:left-[90px] md:top-12 md:w-[470px] lg:left-10 lg:top-[60px] lg:w-[82%] lg:max-w-[560px]"
            >
                <div className="rounded-t-[10px] rounded-b-[3px] bg-appareil px-2 pb-[9px] pt-2 shadow-[0_20px_36px_-18px_rgb(46_31_23/0.45)] md:rounded-t-[13px] md:rounded-b-[4px] md:px-[11px] md:pb-[13px] md:pt-[11px] md:shadow-[0_24px_44px_-20px_rgb(46_31_23/0.45)] lg:rounded-t-[14px] lg:px-3 lg:pb-3.5 lg:pt-3">
                    <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-ecran md:rounded-[4px]">
                        <Screen
                            project={project}
                            src={images.desktop}
                            fullPage={images.desktopFull}
                            alt={`Aperçu du projet ${title} sur ordinateur`}
                            position="object-top"
                        />
                    </div>
                </div>
                <div className="-mx-4 h-[9px] rounded-b-[12px] bg-appareil-socle md:-mx-6 md:h-[13px] md:rounded-b-[16px] lg:-mx-7 lg:h-3.5 lg:rounded-b-[18px]" />
            </DeviceLink>

            {/* Phone */}
            <DeviceLink
                liveUrl={liveUrl}
                className="absolute bottom-0 right-2 w-[94px] rounded-2xl bg-appareil p-[5px] shadow-[0_16px_28px_-12px_rgb(46_31_23/0.5)] md:bottom-1 md:right-20 md:w-[130px] md:rounded-[22px] md:p-[7px] md:shadow-[0_20px_36px_-14px_rgb(46_31_23/0.5)] lg:bottom-1.5 lg:right-6 lg:w-[148px] lg:rounded-3xl lg:p-2"
            >
                <div className="aspect-[9/19] overflow-hidden rounded-xl bg-ecran md:rounded-2xl lg:rounded-[17px]">
                    <Screen
                        project={project}
                        src={images.mobile ?? images.desktop}
                        fullPage={images.mobileFull}
                        alt={`Aperçu du projet ${title} sur mobile`}
                        position={images.mobile ? "object-top" : "object-left-top"}
                    />
                </div>
            </DeviceLink>
        </div>
    )
}
