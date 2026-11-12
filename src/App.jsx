import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/about/About"
import { Hero } from "./components/sections/hero/Hero"
import { SocialBand } from "./components/sections/hero/SocialBand"

// Redesigned sections are added here one by one.
function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <SocialBand />
                <About />
            </main>
        </>
    )
}

export default App
