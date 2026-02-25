import { skills } from "../../data/skills"

export const Skills = () => {

    return (
        <section className="py-32 px-6 lg:px-12 bg-dark-bg">

            <div className="max-w-7xl mx-auto " >
                <div className="text-center mb-20">

                    <div className="flex items-center justify-center gap-2 mb-8">

                        <div className="h-0.5 bg-gradient-to-r from-sage-green to-sage-green:0 w-20 lg:w-30" ></div>
                        <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                        <h4 className="text-sm text-white font-medium tracking-widest">02. COMPÉTENCES</h4>
                        <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                        <div className="h-0.5 bg-gradient-to-r from-sage-green to-sage-green/0 w-20 lg:w-30" ></div>

                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" >Stack technique</h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Technologies que je maîtrise pour créer des applications web
                    </p>
                </div>

                {/* <div className="w-30 h-10 bg-dark-bg [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"></div> */}

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6" >

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-dark-card flex flex-col items-center justify-center rounded-lg p-6 w-auto border border-gray-800 transition-all duration-300 hover:border-sage-dark hover:shadow-md hover:-translate-y-0.5"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className={`w-16 h-16 mb-3 ${skill.invert ? "invert" : ""} `} />

                            <p className="text-white text-center">{skill.name}</p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}