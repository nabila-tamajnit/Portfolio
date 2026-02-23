

export const About = () => {

    const myStrengths = [
        {
            name: 'Motivé et engagée'
        },
        {
            name: 'Autonome'
        },
        {
            name: 'Sens du détail'
        },
        {
            name: 'Curieuse'
        }
    ]

    return (
        <section className="min-h-screen flex justify-center items-center" >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 w-full items-center">
                <div>
                    <p></p>
                    <h2 className="text-6xl font-bold text-green-bg mb-6">À propos de moi</h2>
                    <div className="text-lg flex flex-col gap-4">

                        <p>Le développement web est devenu pour moi bien plus qu’un apprentissage : c’est un espace où je peux allier rigueur et créativité. J’aime transformer une idée en interface fonctionnelle, claire et cohérente.</p>

                        <p>Ce qui me motive particulièrement ? Relever des défis techniques et simplifier des problématiques complexes pour en faire des solutions fluides et élégantes.</p>

                        <p>En formation de développeuse web, je construis chaque jour des bases solides, avec l’envie constante de progresser et d’évoluer dans un environnement professionnel stimulant.</p>

                    </div>

                </div>

                <div className="flex flex-col gap-10">
                    {/* <div className="bg-green-bg text-white rounded-xl">
                        <div className="bg-dark-bg h-10 rounded-t-xl" >
                        </div>
                        <div className="px-5 py-8">
                            <p><span className="text-purple-const">const</span > <span className="text-blue-const">nabila</span> = {"{"} </p>
                            <div className="px-5">
                                <p><span className="text-red-const">role:</span> <span className="text-green-const" >"Web Developer"</span>,</p>
                                <p> <span className="text-red-const">passion:</span> <span className="text-green-const">"Transformer idées → interfaces"</span>,</p>
                                <p> <span className="text-red-const">stack:</span> [<span className="text-green-const">"React", "Node.js", "MongoDB", "..."</span>],</p>
                                <p> <span className="text-red-const">learning:</span> <span className="text-green-const">"Toujours plus..."</span>,</p>
                                <p> <span className="text-red-const">disponible:</span> <span className="text-green-const">"Juin 2026"</span></p>
                            </div>
                            <p> {"}"}; </p>
                            <p className="italic mt-3 text-gray-500">// Pête à relever des nouveaux défis !</p>
                        </div>

                    </div> */}

                    <div>
                        <h3 className="text-2xl font-bold mb-3">Mes atouts</h3>
                        <div className="grid grid-cols-2 grid-rows-2 gap-5">
                            {myStrengths.map((name) => (
                                <div
                                    key={name}
                                    className="bg-sage-white py-4 rounded-xl" >
                                    <p className="text-center text-lg font-medium text-gray-700">{name.name}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}