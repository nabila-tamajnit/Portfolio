import * as m from "motion/react-m"
import { Button } from "../../ui/Button"
import { Eyebrow } from "../../ui/Eyebrow"
import { EASE_OUT, revealOnLoad } from "../../../utils/motion"
import { OliveBranch } from "../../ui/motifs/OliveBranch"
import { OpportunityBadge } from "./OpportunityBadge"
import { cvUrl } from "../../../data/navigation"
import heroImage480 from "../../../assets/images/hero-laptop-riad-480.webp"
import heroImage800 from "../../../assets/images/hero-laptop-riad-800.webp"

export const Hero = () => {
    return (
        <section
            id="accueil"
            className="page-container pt-[18px] md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center md:gap-7 md:pt-5 lg:flex lg:gap-12 lg:pt-6"
        >
            {/* Text */}
            <div className="min-w-0 md:pb-[60px] lg:flex-[1_1_540px] lg:pb-20">
                {/* The text appears line by line when the page loads */}
                <m.div {...revealOnLoad(0.1)}>
                    <Eyebrow className="mb-5 md:mb-[22px] lg:mb-[30px]" lineClassName="w-7 md:w-8 lg:w-10">
                        <span className="hidden lg:inline">Développement web · </span>
                        Front-end &amp; Full-stack
                    </Eyebrow>
                </m.div>

                <m.h1 {...revealOnLoad(0.2)} className="font-serif text-[50px] leading-[0.98] tracking-[-1px] md:text-[60px] md:leading-[0.97] md:tracking-[-1.5px] lg:text-[88px] lg:leading-[0.96] lg:tracking-[-2px]">
                    Des idées au code,
                    <br />
                    avec <em className="text-brique">soin.</em>
                </m.h1>

                <m.p {...revealOnLoad(0.3)} className="mt-[22px] text-[15px] leading-[1.75] text-texte md:mt-6 md:text-[15.5px] lg:mt-[34px] lg:max-w-[470px] lg:text-[17px] lg:leading-[1.8]">
                    J'aime transformer une idée en un projet web concret, en alliant réflexion, code et sens du
                    détail. Je conçois des interfaces soignées, je cherche des solutions et je prends plaisir à
                    faire avancer chaque projet.
                </m.p>

                <m.div {...revealOnLoad(0.4)} className="mt-7 flex flex-col gap-3 md:mt-8 md:flex-row md:flex-wrap md:items-center md:gap-[22px] lg:mt-[42px] lg:gap-7">
                    <Button href="#projets" withArrow className="py-[17px] md:px-[26px] md:py-4 lg:gap-3 lg:px-8 lg:py-[18px]">
                        Découvrir mes projets
                    </Button>
                    {/* Full outlined pill on mobile, underlined text link from tablet up */}
                    <a
                        href={cvUrl}
                        download="CV-Nabila-Tamajnit.pdf"
                        className="rounded-full border border-brun py-4 text-center text-[15px] font-medium transition-colors duration-200 hover:border-brique hover:text-brique md:rounded-none md:border-x-0 md:border-t-0 md:border-laiton md:py-0 md:pb-1"
                    >
                        Télécharger mon CV
                    </a>
                </m.div>
            </div>

            {/* Arch visual: fades in while settling from a slightly larger scale */}
            <m.div
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.15 }}
                className="relative mt-10 h-[470px] min-w-0 md:mt-0 md:h-[500px] lg:h-[640px] lg:flex-[1_1_460px]">
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-0 h-[450px] w-[300px] -translate-x-1/2 rounded-t-[150px] border border-laiton md:h-[480px] md:w-[320px] md:rounded-t-[160px] lg:h-[620px] lg:w-[420px] lg:rounded-t-[210px]"
                />
                <div className="absolute left-1/2 top-4 h-[434px] w-[272px] -translate-x-1/2 overflow-hidden rounded-t-[136px] bg-sable shadow-lifted md:h-[464px] md:w-[290px] md:rounded-t-[145px] lg:top-5 lg:h-[600px] lg:w-[384px] lg:rounded-t-[192px] lg:shadow-[0_2px_6px_rgb(74_40_24/0.06),0_26px_50px_-20px_rgb(74_40_24/0.32)]">
                    <img
                        src={heroImage800}
                        srcSet={`${heroImage480} 480w, ${heroImage800} 800w`}
                        sizes="(min-width: 1200px) 384px, (min-width: 768px) 290px, 272px"
                        width="800"
                        height="993"
                        alt="Un ordinateur portable affichant le portfolio de Nabila, « Je code le web avec soin », posé sur une table en bois dans un riad marocain"
                        fetchPriority="high"
                        className="size-full object-cover object-[50%_62%]"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute bottom-5 left-1/2 h-px w-[346px] -translate-x-1/2 bg-laiton md:w-[360px] lg:w-[500px]"
                />
                <OliveBranch
                    topLeafClassName="hidden lg:block"
                    className="absolute -left-[18px] bottom-[26px] h-[170px] w-[120px] md:-left-5 md:h-[180px] md:w-[130px] lg:-left-1.5 lg:h-[280px] lg:w-[200px]"
                />
                <OpportunityBadge className="absolute -right-1.5 top-10 size-[104px] md:-right-3.5 md:top-[54px] md:size-[110px] lg:right-0 lg:top-[84px] lg:size-[138px]" />
            </m.div>
        </section>
    )
}
