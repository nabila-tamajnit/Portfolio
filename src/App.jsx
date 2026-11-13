import { LazyMotion, MotionConfig, domAnimation } from "motion/react"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/about/About"
import { Contact } from "./components/sections/contact/Contact"
import { Dynamic } from "./components/sections/dynamic/Dynamic"
import { Hero } from "./components/sections/hero/Hero"
import { SocialBand } from "./components/sections/hero/SocialBand"
import { Projects } from "./components/sections/projects/Projects"
import { Tools } from "./components/sections/tools/Tools"

function App() {
    return (
        // reducedMotion "user": when the system asks for reduced motion, movements are skipped and only fades remain.
        // LazyMotion loads only the animation features the site uses (components use `m.div` instead of `motion.div`);
        // `strict` makes any leftover `motion.div` throw an error so the full library is never bundled by mistake.
        <MotionConfig reducedMotion="user">
            <LazyMotion features={domAnimation} strict>
                <Navbar />
                <main>
                    <Hero />
                    <SocialBand />
                    <About />
                    <Dynamic />
                    <Projects />
                    <Tools />
                    <Contact />
                </main>
                <Footer />
            </LazyMotion>
        </MotionConfig>
    )
}

export default App
