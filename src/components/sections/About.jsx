

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
        <section id="about" className="w-full py-32 px-6 lg:px-12 bg-[#080C18] bg-[radial-gradient(ellipse_at_top_right,#4A9EFF_0%,transparent_30%),radial-gradient(ellipse_at_bottom_left,#7C5CBF_0%,transparent_20%)]" >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* <<<<< Gauche */}
                    <div>

                        {/* Àpropos */}
                        <div>
                            <div className="flex items-center mb-8 ">

                                {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                                {/* <h4 className="text-sm text-sage-green font-medium tracking-widest">01. À PROPOS</h4> */}
                                <div className="h-0.5 bg-gradient-to-r from-[#833ecd] to-[#080C18]/0 flex-1" ></div>

                            </div>

                            <h2 className="text-5xl lg:text-6xl font-semibold text-[#E8F0FF] mb-8 leading-tight">À propos de moi</h2>

                            <div className="text-lg text-[#8899BB] space-y-5 leading-relaxed mb-12">

                                <p>Coder est pour moi bien plus qu’un apprentissage : c’est un espace où je <strong>me challenge</strong> et où je <strong>me révèle</strong>.</p>

                                <p>J’aime aller au fond des choses, comprendre, ajuster et tester jusqu’à obtenir quelque chose de clair et cohérent. Le développement m’apporte cette <strong>concentration</strong> intense où le temps passe sans que je m’en rende compte.</p>

                                <p>Actuellement en formation chez <strong>Interface3</strong>, je souhaite intégrer un stage en développement web à partir de juin 2026 afin de mettre en pratique <strong>mes compétences</strong> au sein d’une équipe.</p>

                            </div>
                        </div>

                        

                        {/* Code */}
                        <div className="bg-[#080C18] border border-[#261745] rounded-lg shadow-md shadow-[#3269AB]/90">

                            <div className="h-10 bg-[#080c18] rounded-t-lg border-b-2 border-[#261745] flex items-center px-6">
                                <p className="text-[#E8F0FF] font-medium">about.js</p>
                            </div>

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
                        
                        
                    </div>



                    {/* Droite >>>>>> */}
                    <div className="lg:pt-110">

                        <div className="flex items-center mb-12">

                            {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                            {/* <h4 className="text-sm text-sage-green font-medium tracking-widest">01. À PROPOS</h4> */}
                            <div className="h-0.5 bg-gradient-to-r from-[#833ecd] to-[#080C18]/0 flex-1" ></div>

                        </div>

                        {/* About*/}
                        <div className="mb-12">
                            <h3 className="text-xl font-semibold mb-4 text-[#E8F0FF]">Mes atouts</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {myStrengths.map((name) => (
                                    <div
                                        key={name}
                                        className=" bg-[#080C18] p-4 rounded-lg border-[0.1px] border-[#261745] shadow-md shadow-[#3269AB]/90" >
                                        <p className="text-center font-medium text-white">{name.name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                        

                        


                        {/* Dynamique */}
                        <div>
                            <h3 className="text-xl text-[#E8F0FF] font-semibold mb-6">Ma dynamique</h3>

                            <div className="flex flex-col">
                                {progress.map((item, index) => (
                                    <div key={item.name} className="flex items-end gap-4">

                                        <div className="flex flex-col items-center">
                                            <div className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-[#080C18] to-[#833ecd]"></div>

                                            {/* Point */}
                                            <div className="w-2 h-2 rounded-full bg-[#833ecd] shrink-0 z-10 "></div>
                                            {/* Ligne */}
                                            <div className="w-[2px] flex-1 min-h-[4rem] bg-gradient-to-b from-[#833ecd] to-[#080C18]"></div>

                                        </div>

                                        <div className="h-20 flex flex-col">
                                            <p className="font-semibold text-white">{item.name}</p>
                                            <p className="text-sm text-[#8899BB] mt-1">{item.description}</p>
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