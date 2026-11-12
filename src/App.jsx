import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/about/About"
import { Contact } from "./components/sections/contact/Contact"
import { Dynamic } from "./components/sections/dynamic/Dynamic"
import { Hero } from "./components/sections/hero/Hero"
import { SocialBand } from "./components/sections/hero/SocialBand"
import { Projects } from "./components/sections/projects/Projects"
import { Tools } from "./components/sections/tools/Tools"

// Redesigned sections are added here one by one.
function App() {
    return (
        <>
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
        </>
    )
}

export default App
