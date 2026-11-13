import { Eyebrow } from "../../ui/Eyebrow"
import { OliveBranch } from "../../ui/motifs/OliveBranch"
import { Reveal } from "../../ui/Reveal"
import { ContactArch } from "./ContactArch"
import { ContactForm } from "./ContactForm"

export const Contact = () => {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative mx-auto max-w-[1320px] px-3.5 pb-20 md:px-9 md:pb-[100px] lg:px-10 lg:pb-[130px]"
        >
            <OliveBranch className="absolute -left-11 bottom-[70px] hidden h-[240px] w-[150px] -rotate-12 lg:block" />

            <Reveal>
                <Eyebrow number="04" className="mx-2 mb-5 md:mx-0 md:mb-[22px] lg:mb-7">
                    Contact
                </Eyebrow>
            </Reveal>

            <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-bordure bg-creme p-3.5 shadow-[0_30px_60px_-30px_rgb(74_40_24/0.28)] md:grid md:grid-cols-[330px_minmax(0,1fr)] md:gap-[18px] md:rounded-[26px] md:p-[18px] lg:flex lg:flex-wrap lg:gap-6 lg:rounded-[28px] lg:p-6 lg:shadow-[0_2px_6px_rgb(74_40_24/0.05),0_30px_60px_-30px_rgb(74_40_24/0.28)]">
                <ContactArch className="lg:max-w-full lg:min-w-0 lg:flex-[0_1_440px]" />
                <ContactForm className="lg:min-w-0 lg:flex-[1_1_480px]" />
            </Reveal>
        </section>
    )
}
