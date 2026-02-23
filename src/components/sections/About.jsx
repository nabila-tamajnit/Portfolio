

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
        <section className="min-h-screen flex justify-center items-center pt-25" >
            <div className="max-w-7xl mx-4 lg:mx-auto grid lg:grid-cols-2 gap-12 w-full items-center rounded-2xl p-4 lg:p-8  ">

                {/* À propos */}
                <div className=" h-full flex flex-col">
                    <p className="text-sm lg:text-base text-sage-green font-medium mb-10 flex items-center gap-2">
                        <span className="w-2 h-2 bg-sage-green rounded-full"></span>
                        01. À PROPOS 
                        <span className=" h-0.5 w-50 lg:w-110 bg-gradient-to-r from-sage-green to-white" ></span>
                    </p>
                    <h2 className=" text-6xl lg:text-7xl font-bold text-green-bg mb-6">À propos <br /> de moi</h2>
                    <div className=" text-lg lg:text-xl text-green-bg flex flex-col gap-4 bg-white lg:pr-14 rounded-xl">

                        <p>Coder est pour moi bien plus qu’un apprentissage : c’est un espace où je <span className="font-bold">me challenge</span> et où je <span className="font-bold">me révèle</span>.</p>

                        <p>J’aime aller au fond des choses, comprendre, ajuster et tester jusqu’à obtenir quelque chose de clair et cohérent. Le développement m’apporte cette <span className="font-bold">concentration</span> intense où le temps passe sans que je m’en rende compte.</p>

                        <p>Actuellement en formation chez Interface3, c'est avec ambition que je souhaite <span className="font-bold">progresser</span> et <span className="font-bold">évoluer</span> dans un environnement professionnel dès juin 2026.</p>

                    </div>
                </div>

                {/* Code - Atouts */}
                <div className=" h-full flex flex-col gap-12">

                    {/* Code */}
                    <div className="bg-green-bg rounded-xl">
                        <div className="bg-dark-bg h-10 rounded-t-xl" >
                        </div>
                        <div className="px-8 py-8 text-white">
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

                    {/* Atouts */}
                    <div >
                        <h3 className="text-3xl font-semibold mb-6">Mes atouts</h3>
                        <div className="grid grid-cols-2 grid-rows-2 gap-5">
                            {myStrengths.map((name) => (
                                <div
                                    key={name}
                                    className=" bg-sage-white py-4 rounded-xl" >
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