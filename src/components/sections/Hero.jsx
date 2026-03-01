import { useEffect, useRef } from "react";
import { SocialLinks } from "../common/SocialLinks";
import { motion } from "motion/react";

export const Hero = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            { threshold: 0.1 }
        );

        if (video) observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    return (
        <section id="welcome" className="relative overflow-hidden min-h-screen w-full bg-[#080C18] flex justify-start pt-10 px-6  bg-top bg-no-repeat bg-cover" >

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/assets/profile_picture/bg_img_hero.png"
                className=" absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/profile_picture/bg_video_hero.mp4" type="video/mp4" />
            </video>

            <div className="mx-auto w-full max-w-7xl lg:max-w-full flex justify-center absolute inset-0 bg-black/30 px-6">


                <div className="relative z-10 flex flex-col pt-25 lg:max-w-250 lg:pr-40 2xl:max-w-290 2xl:pt-35 bg-amber-900/0">

                    {/* Titre */}
                    <motion.div
                        initial={{ opacity: 0, y: -300 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "lenear" }}>
                        <p className="text-2xl text-[#5F35D5] font-bold mb-1">
                            Web Developer Junior
                        </p>

                        <h1 className="text-7xl lg:text-7xl font-poppins font-medium text-white mb-6">
                            Hello, je suis <strong className=" text-[#5F35D5] text-8xl">Nabila</strong>
                        </h1>

                        <p className="text-2xl text-[#94A3B8]  mb-15">
                            Curieuse, déterminée et passionnée par l’univers du web, je prends un réel plaisir à donner vie à des idées à travers le code.
                        </p>

                    </motion.div>

                    {/* Boutons */}
                    <div className="flex gap-6 mb-15">

                        <a
                            href="#"
                            target="_blanc"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 border-2 border-[#5F35D5] rounded text-white font-medium hover:bg-[#7C5CFF]
                            hover:text-black transition-colors"
                        >
                            Mon LinkThree
                        </a>

                        <a
                            href="/cv/CV_NabilaTamajnit.pdf"
                            target="_blanc"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 border-2 border-[#5F35D5] rounded text-white font-medium hover:bg-[#7C5CFF]  hover:text-black transition-colors"
                        >
                            <span className="hidden sm:inline-block" >Télécharger mon CV </span><span className="sm:hidden" >Mon CV</span>
                        </a>
                    </div>

                    <SocialLinks />

                </div>

                {/* <motion.div
                    initial={{ opacity: 0, x: 600 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "lenear" }}
                    className="hidden lg:block h-full overflow-hidden bg-[url(/assets/profile_picture/profil_hero_small_1.webp)] bg-top bg-no-repeat bg-cover hover:opacity-90 transition-opacity duration-300" >
                    {/* <img src="/assets/profil_picture/profil-provisoire.jpeg"
                        alt="Nabila Tamajnit"
                        className="w-full h-auto object-cover" /> 
                </motion.div> */}

            </div>

        </section>
    )
}