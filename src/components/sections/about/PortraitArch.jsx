import { OliveBranch } from "../../ui/motifs/OliveBranch"
import portrait420 from "../../../assets/images/nabila-portrait-420.webp"
import portrait800 from "../../../assets/images/nabila-portrait-800.webp"

// Portrait in a sand arch, offset from a thin brass outline, standing on a ground line,
// with a brick name card. Sizes follow the three mockups.
export const PortraitArch = ({ className = "" }) => {
    return (
        <div className={`relative h-[390px] md:h-[470px] lg:h-[620px] ${className}`}>
            <div
                aria-hidden="true"
                className="absolute left-3 top-0 h-[350px] w-[270px] rounded-t-[135px] border border-laiton md:left-0 md:h-[420px] md:w-[300px] md:rounded-t-[150px] lg:h-[560px] lg:w-[400px] lg:rounded-t-[200px]"
            />
            <div className="absolute left-8 top-[18px] h-[350px] w-[270px] overflow-hidden rounded-t-[135px] bg-sable shadow-lifted md:left-[22px] md:top-[22px] md:h-[420px] md:w-[300px] md:rounded-t-[150px] lg:left-[30px] lg:top-[30px] lg:h-[560px] lg:w-[400px] lg:rounded-t-[200px] lg:shadow-[0_2px_6px_rgb(74_40_24/0.06),0_26px_50px_-20px_rgb(74_40_24/0.32)]">
                <img
                    src={portrait800}
                    srcSet={`${portrait420} 420w, ${portrait800} 800w`}
                    sizes="(min-width: 1200px) 400px, (min-width: 768px) 300px, 270px"
                    width="800"
                    height="1836"
                    alt="Portrait de Nabila Tamajnit, souriante, en chemisier brun à pois et foulard noué"
                    loading="lazy"
                    decoding="async"
                    className="absolute left-0 top-9 h-auto w-full md:top-[42px] lg:top-14"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute left-0 top-[368px] h-px w-[346px] bg-laiton md:-left-3.5 md:top-[442px] md:w-[360px] lg:-left-5 lg:top-[590px] lg:w-[500px]"
            />
            <OliveBranch className="absolute -left-12 top-[400px] hidden h-[210px] w-[150px] -rotate-8 lg:block" />
            <div className="absolute right-0 top-[270px] flex flex-col gap-[5px] rounded-[14px] bg-brique px-[18px] py-3.5 shadow-card-brique md:-right-4 md:top-[330px] lg:left-[330px] lg:right-auto lg:top-[430px] lg:gap-1.5 lg:rounded-2xl lg:px-[22px] lg:py-[18px]">
                <span className="font-serif text-[24px] leading-none text-sur-brique italic lg:text-[28px]">Nabila</span>
                <span className="text-[10px] font-semibold uppercase tracking-[1.8px] text-sur-brique-doux lg:text-[11px] lg:tracking-[2px]">
                    Développeuse web
                </span>
            </div>
        </div>
    )
}
