import { Eyebrow } from "../../ui/Eyebrow"
import { Pill } from "../../ui/Pill"
import { Reveal } from "../../ui/Reveal"
import { PortraitArch } from "./PortraitArch"

const qualities = ["Curiosité", "Autonomie", "Créativité", "Sens du détail"]

// Layout: on mobile the portrait sits between the title and the text.
// From tablet up, a 2-column grid puts the portrait on the left (spanning both rows)
// and keeps the title block and the text block together, centred against the portrait.
export const About = () => {
    return (
        <section
            id="apropos"
            className="page-container py-20 md:grid md:grid-cols-[330px_minmax(0,1fr)] md:grid-rows-[auto_auto] md:gap-x-11 md:pb-[100px] md:pt-[70px] lg:grid-cols-[calc(50%-88px)_minmax(0,1fr)] lg:gap-x-24 lg:pb-[130px] lg:pt-[100px]"
        >
            <Reveal className="md:col-start-2 md:self-end">
                <Eyebrow number="01" className="mb-[18px] lg:mb-6">
                    À propos
                </Eyebrow>
                <h2 className="mb-7 font-serif text-[48px] leading-none tracking-[-1px] md:mb-[18px] md:text-[52px] lg:mb-[22px] lg:text-[72px]">
                    Moi, c'est <em className="text-brique">Nabila.</em>
                </h2>
            </Reveal>

            <Reveal distance={72} className="mb-[34px] md:col-start-1 md:row-span-2 md:row-start-1 md:mb-0 md:self-center">
                <PortraitArch />
            </Reveal>

            <Reveal delay={0.15} className="md:col-start-2 md:self-start">
                <p className="mb-5 font-serif text-[23px] leading-[1.3] md:mb-[18px] md:text-[22px] lg:mb-[26px] lg:max-w-[520px] lg:text-[27px]">
                    Je suis développeuse Full-Stack JavaScript, avec un goût particulier pour les interfaces soignées et
                    les projets bien pensés.
                </p>

                <div className="flex flex-col gap-3.5 text-[15px] leading-[1.8] text-texte md:gap-3 md:text-[14.5px] md:leading-[1.75] lg:max-w-[520px] lg:gap-4 lg:text-[16px] lg:leading-[1.85]">
                    <p>
                        J'aime autant concevoir une expérience agréable pour l'utilisateur que comprendre ce qui se passe
                        derrière l'écran.
                    </p>
                    <p>
                        Ma formation chez Interface3 et mon stage m'ont permis de gagner en autonomie et de concrétiser
                        mes compétences sur un projet réel.
                    </p>
                    <p>
                        Curieuse et toujours en quête de nouvelles idées, j'explore également de nouvelles technologies,
                        notamment autour de l'intelligence artificielle et des automatisations.
                    </p>
                    <p className="font-medium text-brun">
                        Mon objectif : continuer à progresser, relever de nouveaux défis et contribuer à des projets qui
                        méritent d'être construits avec soin.
                    </p>
                </div>

                <ul aria-label="Mes qualités" className="mt-7 flex flex-wrap gap-2 md:mt-6 lg:mt-9 lg:gap-2.5">
                    {qualities.map((quality) => (
                        <li key={quality}>
                            <Pill>{quality}</Pill>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </section>
    )
}
