import { useEffect } from "react"

export const useScrollNavigation = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'

        const isNewSession = !sessionStorage.getItem('session_active')

        if (isNewSession) {
            window.scrollTo(0, 0)
            if (window.location.hash) {
                window.history.replaceState(null, null, window.location.pathname)
            }
            sessionStorage.setItem('session_active', 'true')
        } else {
            const hash = window.location.hash
            if (hash) {
                const element = document.querySelector(hash)
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" })
                    }, 100)
                }
            }
        }

        let lastId = ""
        let ticking = false

        const updateActiveSection = () => {
            if (ticking) return

            ticking = true
            requestAnimationFrame(() => {
                const sections = document.querySelectorAll("section[id]")
                let closestSection = null
                let closestDistance = Infinity

                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect()
                    const viewportMiddle = window.innerHeight / 2

                    // La section est "active" si le milieu du viewport est entre son top et son bottom
                    if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                        closestSection = section
                    }
                })

                if (closestSection) {
                    const id = closestSection.getAttribute("id")
                    // On ne met à jour l'URL que si la section a changé
                    if (id !== lastId) {
                        lastId = id
                        window.history.replaceState(null, null, `#${id}`)
                    }
                }

                ticking = false
            })
        }

        window.addEventListener("scroll", updateActiveSection, { passive: true })

        // Appel initial pour définir la section active dès le chargement
        updateActiveSection()

        return () => window.removeEventListener("scroll", updateActiveSection)
    }, [])
}