import { useEffect } from 'react';
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { Hero } from "./components/sections/Hero"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"

function App() {

  // ========== REFRESH ==========
useEffect(() => {
  // --- Détecte la session ---
  const isNewSession = !sessionStorage.getItem('session_active');

  if (isNewSession) {
    window.scrollTo(0, 0);
    // Nettoie l'URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    sessionStorage.setItem('session_active', 'true');
  }

  // Refresh à la section arrivée si pas nouvelle
  let isScrollingToHash = false;
  const hash = !isNewSession ? window.location.hash : null;

  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      isScrollingToHash = true;
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { isScrollingToHash = false; }, 800);
      }, 100);
    }
  }

  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      if (isScrollingToHash) return; 

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          window.history.replaceState(null, null, `#${id}`);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}, []);



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
