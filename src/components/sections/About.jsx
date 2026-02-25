

export const About = () => {

    const myStrengths = [
        { name: 'Motivé et engagée' },
        { name: 'Autonome' },
        { name: 'Sens du détail' },
        { name: 'Curieuse' }
    ]

    const progress = [
        // { name: 'Explorer', description: "Découvrir les bases du développement web" },
        { name: 'Construire', description: "Créer mes premiers projets et poser des bases solides" },
        { name: 'Approfondir', description: "Affiner mon code et mes bonnes pratiques" },
        { name: 'M’engager', description: "Intégrer une équipe et contribuer à des projets professionnels" }

    ]

    return (
        <section id="about" className="w-full py-32 px-6 lg:px-12 bg-white" >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* <<<<< Gauche */}
                    <div>

                        {/* Àpropos */}
                        <div>
                            <div className="flex items-center gap-2 mb-8">

                                <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                                <h4 className="text-sm text-sage-green font-medium tracking-widest">01. À PROPOS</h4>
                                <div className="h-0.5 bg-gradient-to-r from-sage-green to-sage-green/0 flex-1" ></div>

                            </div>

                            <h2 className="text-5xl lg:text-6xl font-bold text-green-bg mb-8 leading-tight">À propos de moi</h2>

                            <div className="text-lg text-gray-700 space-y-5 leading-relaxed mb-12">

                                <p>Coder est pour moi bien plus qu’un apprentissage : c’est un espace où je <strong>me challenge</strong> et où je <strong>me révèle</strong>.</p>

                                <p>J’aime aller au fond des choses, comprendre, ajuster et tester jusqu’à obtenir quelque chose de clair et cohérent. Le développement m’apporte cette <strong>concentration</strong> intense où le temps passe sans que je m’en rende compte.</p>

                                <p>Actuellement en formation chez <strong>Interface3</strong>, je souhaite intégrer un stage en développement web à partir de juin 2026 afin de mettre en pratique <strong>mes compétences</strong> au sein d’une équipe.</p>

                            </div></div>

                        {/* Atouts */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-green-bg">Mes atouts</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {myStrengths.map((name) => (
                                    <div
                                        key={name}
                                        className=" bg-gray-50 p-4 rounded-lg border border-gray-200" >
                                        <p className="text-center font-medium text-gray-800">{name.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Droite >>>>>> */}
                    <div className="space-y-8">

                        {/* Code */}
                        <div className="bg-dark-code border border-gray-800 rounded-lg ">

                            <div className="h-10 bg-dark-snippet rounded-lg border-b border-gray-800 "></div>

                            <div className=" text-sm/5.5 text-gray-300 font-family-fira p-8">
                                <p><span className="text-purple-const">const</span > <span className="text-blue-const">nabila</span> = {"{"} </p>

                                <div className="px-5">
                                    <p><span className="text-red-const">role:</span> <span className="text-green-const" >"Web Developer"</span>,</p>
                                    <p> <span className="text-red-const">passion:</span> <span className="text-green-const">"Coder"</span>,</p>
                                    <p> <span className="text-red-const">stack:</span> [<span className="text-green-const">"React", "Node.js", "MongoDB", "..."</span>],</p>
                                    <p> <span className="text-red-const">learning:</span> <span className="text-green-const">"Toujours plus..."</span>,</p>
                                    <p> <span className="text-red-const">disponible:</span> <span className="text-green-const">"Juin 2026"</span></p>
                                </div>

                                <p> {"}"}; </p>

                                <p className="italic mt-3 text-gray-500">// Prête à relever de nouveaux défis !</p>
                            </div>
                        </div>

                        {/* Progression */}
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold mb-6">Ma dynamique</h3>

                            <div className="flex flex-col">
                                {progress.map((item, index) => (
                                    <div key={item.name} className="flex items-start gap-4">

                                        <div className="flex flex-col items-center">
                                            {/* Point */}
                                            <div className="w-4 h-4 rounded-full bg-sage-green border-3 border-dark-code shrink-0 z-10 mt-1"></div>
                                            {/* Ligne */}
                                            {index < progress.length - 1 && (
                                                <div className="w-[2px] flex-1 min-h-[3rem] bg-gradient-to-b from-sage-green to-gray-200 mb-1"></div>
                                            )}
                                        </div>

                                        <div className="mb-6">
                                            <p className="font-semibold text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}