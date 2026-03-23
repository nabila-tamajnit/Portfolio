import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { SocialLinks } from "../common/SocialLinks"

export const Hero = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video?.play()
                } else {
                    video?.pause()
                }
            },
            { threshold: 0.1 }
        )

        if (video) observer.observe(video)

        return () => {
            if (video) observer.unobserve(video)
        }
    }, [])

    return (
        <motion.section
            id="welcome"
            className="relative overflow-hidden min-h-screen w-full bg-bg-main flex justify-start pt-10 px-6"
        >
            {/* ========== VIDÉO BG ========== */}
            <motion.video
                ref={videoRef}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/assets/profile_picture/bg_img_hero.png"
                className="absolute inset-0 w-full h-full object-cover object-[75%] lg:object-center"
            >
                <source src="/assets/profile_picture/bg_video_hero.mp4" type="video/mp4" />
            </motion.video>

            {/* ----- OVERLAY ----- */}
            <div className="mx-auto w-full max-w-7xl lg:max-w-full flex justify-center absolute inset-0 bg-black/50 lg:bg-black/30 px-6">

                {/* =========== TITRE ========== */}
                <div className="relative z-10 flex flex-col pt-24 lg:max-w-4xl lg:pr-40 2xl:max-w-5xl 2xl:pt-32">

                    {/* ------ WEB DEVELOPER" -----*/}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-2xl text-purple-accent font-bold mb-2">
                            Web Developer Junior
                        </p>
                    </motion.div>

                    {/* ----- TITRE PRINCIPAL ----- */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl lg:text-7xl font-poppins font-medium text-title mb-6"
                    >
                        Hello, je suis{' '}
                        <motion.strong
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
                            className="text-purple-accent text-6xl lg:text-8xl"
                        >
                            Nabila
                        </motion.strong>
                    </motion.h1>

                    {/* ----- DESCRIPTION ----- */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-lg lg:text-2xl text-white lg:text-text-main mb-16"
                    >
                        Curieuse, déterminée et passionnée par l'univers du web, je prends un réel plaisir à donner vie à des idées à travers le code.
                    </motion.p>

                    {/* ----- BOUTONS ----- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="flex gap-6 mb-16"
                    >
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-3 py-2 lg:px-8 lg:py-4 bg-purple-accent border-2 border-purple-accent rounded text-white font-medium hover:bg-purple-hover hover:border-purple-hover transition-all"
                        >
                            Mon Linktree
                        </motion.a>

                        <motion.a
                            href="cv/CV_NabilaTamajnit.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-3 py-2 lg:px-8 lg:py-4 border-2 bg-purple-accent lg:bg-purple-hover/0 border-purple-accent rounded text-white font-medium hover:bg-purple-accent transition-all"
                        >
                            <span className="hidden sm:inline-block">Télécharger mon CV</span>
                            <span className="sm:hidden">Mon CV</span>
                        </motion.a>
                    </motion.div>

                    {/* ----- LIENS ----- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                    >
                        <SocialLinks />
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
}