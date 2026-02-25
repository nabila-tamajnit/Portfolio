import { SocialLinks } from "../common/SocialLinks";

export const Hero = () => {

    return (
        <section id="welcome" className="min-h-screen w-full bg-dark-bg flex pt-22 px-6 item" >

            <div className="max-w-7xl 2xl:max-w-400 mx-auto grid lg:grid-cols-2 gap-12 w-full items-center">

                <div className="flex flex-col gap-10 pt-10 pb-20">

                    {/* Titre */}
                    <div className="">
                        <p className="text-2xl text-sage-green font-bold mb-6">
                            Web Developer Junior
                        </p>

                        <h1 className="text-7xl lg:text-7xl font-poppins font-medium text-white mb-6">
                            Bonjour, je suis <strong className=" text-sage-green text-8xl">Nabila</strong> 
                        </h1>

                        <p className="text-2xl text-gray-400 mt-4">
                            Curieuse, déterminée et passionnée par l’univers du web, je prends un réel plaisir à donner vie à des idées à travers le code.
                        </p>

                    </div>

                    {/* Boutons */}
                    <div className="flex gap-6">

                        <a
                            href="#"
                            target="_blanc"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-sage-green rounded text-white font-medium hover:bg-sage-white
                            hover:text-black transition-colors"
                        >
                            Mon LinkThree
                        </a>

                        <a
                            href="/cv/CV_NabilaTamajnit.pdf"
                            target="_blanc"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 border-2 border-sage-green rounded text-white font-medium hover:bg-sage-white hover:border-sage-white hover:text-black transition-colors"
                        >
                            Télécharger mon CV
                        </a>
                    </div>

                    <SocialLinks />

                </div>

                <div className="hidden lg:block h-full overflow-hidden bg-[url(/assets/profile_picture/profil_hero_small_1.webp)] bg-top bg-no-repeat bg-cover hover:opacity-90 transition-opacity duration-300" >
                    {/* <img src="/assets/profil_picture/profil-provisoire.jpeg"
                        alt="Nabila Tamajnit"
                        className="w-full h-auto object-cover" /> */}
                </div>

            </div>

        </section>
    )
}