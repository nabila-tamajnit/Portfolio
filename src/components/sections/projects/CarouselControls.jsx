import { formatNumber } from "../../../utils/formatNumber"

// "01 / 06" counter with previous / next buttons.
// Rendered twice by Projects (header from tablet up, under the devices on mobile): `className` sets the layout.
export const CarouselControls = ({ currentIndex, total, onPrevious, onNext, className = "" }) => {
    return (
        <div className={className}>
            <p className="font-serif text-[22px] text-brique md:text-[21px] lg:text-[22px]">
                <span className="sr-only">Projet </span>
                {formatNumber(currentIndex + 1)}{" "}
                <span className="text-laiton">
                    <span aria-hidden="true">/ </span>
                    <span className="sr-only">sur </span>
                    {formatNumber(total)}
                </span>
            </p>
            <div className="flex gap-3 md:gap-3.5 lg:gap-[18px]">
                <button
                    type="button"
                    aria-label="Projet précédent"
                    onClick={onPrevious}
                    className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-brun transition-colors duration-200 hover:border-brique hover:text-brique md:size-[50px] lg:size-[54px]"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-4 lg:size-[18px]">
                        <path d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                </button>
                <button
                    type="button"
                    aria-label="Projet suivant"
                    onClick={onNext}
                    className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-brique text-sur-brique transition-colors duration-200 hover:bg-brique-fonce md:size-[50px] lg:size-[54px]"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className="size-4 lg:size-[18px]">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
