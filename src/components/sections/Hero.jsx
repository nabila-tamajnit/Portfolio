import { SocialLinks } from "../common/SocialLinks";

export const Hero = () => {

    return (
        <section className="min-h-screen bg-dark-bg flex pt-22 px-6 lg:px-12 item" >

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 w-full">

                <div className="flex flex-col justify-between gap-10 pt-4 pb-20">

                    {/* Titre */}
                    <div className="">
                        <p className="text-2xl text-sage-green font-bold mb-2">
                            Web Developer Junior
                        </p>

                        <h1 className="text-7xl lg:text-8xl font-poppins font-bold text-white mb-6">
                            Nabila Tamajnit
                        </h1>

                        <p className="text-2xl text-gray-400 mt-4">
                            Le développement web n’est plus un rêve lointain, c’est un métier que je façonne chaque jour avec <span className="text-sage-green font-medium">détermination</span>.
                            J’y exprime ma logique, ma créativité et mon sens du détail.
                        </p>

                    </div>

                    {/* Boutons */}
                    <div className="flex gap-6">

                        <a
                            href="#"
                            className="inline-block px-8 py-4 bg-sage-green rounded text-white font-medium hover:bg-sage-dark transition-colors"
                        >
                            Mon LinkThree
                        </a>

                        <a
                            href="#"
                            className="inline-block px-8 py-4 border-2 border-sage-green rounded text-white font-medium hover:bg-sage-white hover:border-sage-white hover:text-black transition-colors"
                        >
                            Télécharger mon CV
                        </a>
                    </div>

                    <SocialLinks />

                </div>

                <div className="hidden lg:block h-full overflow-hidden bg-[url(/assets/profile_picture/avatar_profil.png)] bg-top bg-no-repeat bg-cover hover:opacity-90 transition-opacity duration-300" >
                    {/* <img src="/assets/profil_picture/profil-provisoire.jpeg"
                        alt="Nabila Tamajnit"
                        className="w-full h-auto object-cover" /> */}
                </div>

            </div>

        </section>
    )
}