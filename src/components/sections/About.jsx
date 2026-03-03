

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
        <section id="about" className="w-full py-32 px-6 lg:px-12 bg-bg-main relative bg-[radial-gradient(circle_at_top_right,#4C6FFF_0%,transparent_25%),radial-gradient(circle_at_top_right,#5F35D5_0%,transparent_15%)]"  >

            {/* <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,111,255,0.18),transparent_30%)] pointer-events-none"></div>

            <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(95,53,213,0.25),transparent_30%)] pointer-events-none"></div> */}

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Àpropos */}
                <div className="lg:w-3/4">

                    {/* Ligne dégradée */}
                    <div className="flex items-center mb-8 ">
                        <div className="h-0.5 bg-gradient-to-r from-[#5F35D5] to-[#080C18]/0 flex-1" ></div>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-semibold text-title mb-8 leading-tight">À propos de moi</h2>

                    <div className="text-lg text-text-main space-y-5 leading-relaxed mb-15">

                        <p>Coder est pour moi bien plus qu’un apprentissage : c’est un espace où je <strong>me challenge</strong> et où je <strong>me révèle</strong>.</p>

                        <p>J’aime aller au fond des choses, comprendre, ajuster et tester jusqu’à obtenir quelque chose de clair et cohérent. Le développement m’apporte cette <strong>concentration</strong> intense où le temps passe sans que je m’en rende compte.</p>

                        <p>Actuellement en formation chez <strong>Interface3</strong>, je souhaite intégrer un stage en développement web à partir de juin 2026 afin de mettre en pratique <strong>mes compétences</strong> au sein d’une équipe.</p>

                    </div>

                </div>






                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* <<<<< Gauche */}
                    <div className="">

                        {/* Linge dégradée */}
                        <div className="flex items-center mb-12">
                            <div className="h-0.5 bg-gradient-to-r from-[#5F35D5] to-[#080C18]/0 flex-1" ></div>
                        </div>

                        {/* Dynamique */}
                        <div className="mb-12">
                            <h3 className="text-xl text-title font-semibold mb-6">Ma dynamique</h3>

                            <div className="flex flex-col">
                                {progress.map((item, index) => (
                                    <div key={item.name} className="flex items-end gap-4">

                                        <div className="flex flex-col items-center">
                                            <div className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-[#5F35D5]/0 to-[#5F35D5]"></div>

                                            {/* Point */}
                                            <div className="w-2 h-2 rounded-full bg-purple-accent shrink-0 z-10 "></div>
                                            {/* Ligne */}
                                            <div className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-[#5F35D5] to-[#5F35D5]/0"></div>

                                        </div>

                                        <div className="h-20 flex flex-col">
                                            <p className="font-semibold text-title">{item.name}</p>
                                            <p className="text-sm text-text-main mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ligne dégradée */}
                        <div className="flex items-center mb-12">
                            <div className="h-0.5 bg-gradient-to-r from-[#5F35D5] to-[#5F35D5]/0 flex-1" ></div>
                        </div>

                        {/* About*/}
                        {/* <div className="mb-12">
                                <h3 className="text-xl font-semibold mb-8 text-[#E8F0FF]">Mes atouts</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {myStrengths.map((name) => (
                                        <div
                                            key={name}
                                            className=" bg-strenght-bg border border-strenght-border hover:border-strenght-hover p-4 rounded-lg" >
                                            <p className="text-center font-medium text-white">{name.name}</p>
                                        </div>
                                    ))}

                                </div>
                            </div> */}

                    </div>

                    {/* Droite >>>>>> */}
                    <div className="">

                        {/* Code */}
                        <div className="bg-strenght-bg border border-strenght-border rounded-lg mb-12 ">

                            <div className="h-10 bg-[#080c18] rounded-t-lg border-b-2 border-strenght-border flex items-center px-6">
                                <p className="text-title font-medium">about.js</p>
                            </div>

                            <div className=" text-sm/5.5 text-text-main font-family-fira p-8">
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

                        {/* About*/}
                        <div className="mb-12">

                            <h3 className="text-xl font-semibold mb-8 text-title">Mes atouts</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {myStrengths.map((name) => (
                                    <div
                                        key={name}
                                        className=" bg-strenght-bg border border-strenght-border hover:border-strenght-hover p-4 rounded-lg" >
                                        <p className="text-center font-medium text-white">{name.name}</p>
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