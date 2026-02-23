import { skills } from "../../data/skills"

export const Skills = () => {

    return (
        <section className="min-h-screen flex justify-center items-center pt-25">

            <div className="max-w-7xl flex flex-col items-center justify-center mx-4" >

                <p className="text-sm lg:text-base text-sage-green font-medium mb-10 flex items-center justify-center gap-2">
                    <span className=" h-0.5 w-20 bg-gradient-to-r from-sage-green to-white" ></span>
                    <span className="w-2 h-2 bg-sage-green rounded-full"></span>
                    02. COMPÉTENCES
                    <span className="w-2 h-2 bg-sage-green rounded-full"></span>
                    <span className=" h-0.5 w-20 bg-gradient-to-r from-sage-green to-white" ></span>
                </p>

                <h2 className=" text:6xl lg:text-7xl font-bold text-green-bg mb-6 text-center" >Ma boite à outils</h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center pb-12">
                    Technologies que je maîtrise pour créer des applications web
                </p>

                {/* <div className="w-30 h-10 bg-dark-bg [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"></div> */}

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 bg-dark-bg p-12 rounded-xl" >

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-green-bg hover:bg-sage-dark inblock flex flex-col items-center justify-center rounded-lg p-5 w-auto"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-14 h-14 mb-3" />

                            <p className="text-white">{skill.name}</p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}