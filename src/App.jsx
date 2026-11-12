import { Navbar } from "./components/layout/Navbar"
import { Hero } from "./components/sections/hero/Hero"

// Redesigned sections are added here one by one.
function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
        </>
    )
}

export default App
