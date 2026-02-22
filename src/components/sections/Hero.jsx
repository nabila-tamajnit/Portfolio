import { SocialLinks } from "../common/SocialLinks";

export const Hero = () => {

    return (
        <section className="min-h-screen bg-dark-bg flex items-center px-6 lg:px-12" >

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">

                <div className="flex flex-col gap-10">

                    {/* Titre */}
                    <div className="">

                        <p className="text-3xl text-sage-green font-bold mb-1">
                            Web Developer Junior
                        </p>

                        <h1 className="text-7xl font-poppins font-bold text-white mb-4">
                            Nabila Tamajnit
                        </h1>

                        <p className="text-2xl text-gray-400 mt-4">
                            Passionnée par l'art de transformer une idée en interface fonctionnelle. Le code, terrain d'expression idéal pour ma rigueur et ma créativité.
                        </p>

                    </div>

                    {/* Boutons */}
                    <div>
                        <a
                            href="#"
                            className="inline-block px-8 py-4 border-2 border-sage-green rounded text-white font-medium hover:bg-sage-green transition-colors"
                        >
                            Télécharger mon CV</a>
                    </div>

                    <SocialLinks />

                </div>

                <div className="max-h-140 aspect-square overflow-hidden bg-[url(/assets/profile_picture/profil-provisoire_1.svg)] bg-center-top bg-no-repeat hover:opacity-50 hover:scale-105 ease-linear " >
                    {/* <img src="/assets/profil_picture/profil-provisoire.jpeg"
                        alt="Nabila Tamajnit"
                        className="w-full h-auto object-cover" /> */}
                </div>

            </div>

        </section>
    )
}