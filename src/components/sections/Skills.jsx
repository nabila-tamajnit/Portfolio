import { skills } from "../../data/skills"

export const Skills = () => {

    return (
        <section id="skills" className="py-32 px-6 lg:px-12 bg-bg-main bg-[radial-gradient(ellipse_at_center,#5F35D5_10%,transparent_20%),radial-gradient(ellipse_at_center,#4C6FFF_0%,transparent_45%)]">

            <div className="max-w-7xl mx-auto " >
                <div className="text-center mb-20">

                    <div className="flex items-center justify-center mb-8">

                        <div className="h-0.5 bg-gradient-to-l from-[#5F35D5] to-[#833ecd]/0 w-20 lg:w-60" ></div>
                        {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                        <h4 className="text-sm text-white font-medium tracking-widest mx-2">COMPÉTENCES</h4>
                        {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                        <div className="h-0.5 bg-gradient-to-r from-[#5F35D5] to-[#833ecd]/0 w-20 lg:w-60" ></div>

                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" >Stack technique</h2>

                    <p className="text-xl text-[#8899BB] max-w-2xl mx-auto">
                        Technologies que je maîtrise pour créer des applications web
                    </p>
                </div>

                {/* <div className="w-30 h-10 bg-dark-bg [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"></div> */}

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6" >

                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-card-main flex flex-col items-center justify-center rounded-lg p-6 w-auto border border-skills-border transition-all duration-300 hover:border-skills-border hover:shadow-skills-glow hover:-translate-y-0.5"
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