import { useScrollNavigation } from './hooks/useScrollNavigation'
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/about/About"
import { Contact } from "./components/sections/contact/Contact"
import { Hero } from "./components/sections/hero/Hero"
import { Projects } from "./components/sections/projects/Projects"
import { Skills } from "./components/sections/skills/Skills"

function App() {
    useScrollNavigation()

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App