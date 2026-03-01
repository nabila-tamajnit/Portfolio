import { projects } from "../../data/projects"

export const Projects = () => {

    return (

        <section id="projects" className="py-32 px-6 lg:px-12 bg-[#080C18] bg-[radial-gradient(ellipse_at_top_right,#4A9EFF_0%,transparent_25%),radial-gradient(ellipse_at_bottom_left,#7C5CBF_0%,transparent_20%)]">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">
                    <div className="flex items-center justify-center mb-8">

                        <div className="h-0.5 bg-gradient-to-l from-[#833ecd] to-[#833ecd]/0 w-20 lg:w-60" ></div>
                        {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                        <h4 className="text-sm text-white font-medium tracking-widest mx-2">PROJETS</h4>
                        {/* <div className="w-2 h-2 bg-[#833ecd] rounded-full"></div> */}
                        <div className="h-0.5 bg-gradient-to-r from-[#833ecd] to-[#833ecd]/0 w-20 lg:w-60" ></div>

                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" >Mes réalisations</h2>

                    <p className="text-xl text-[#8899BB] max-w-2xl mx-auto">
                        Projets sur lesquels j'ai travaillé durant ma formation
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group grid lg:grid-cols-2 items-center gap-12 bg-[#0f0d21]/0 border-[#16112C] rounded-lg overflow-hidden shadow-md shadow-[#3269AB]/90 hover:shadow-xl transition-all p-8 ${index % 2 === 1 ? 'lg:flex-row-revers' : ''}`}
                        >

                            <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>

                                <div className="flex items-center gap-2 mb-6">

                                    {/* <div className="w-2 h-2 bg-sage-green rounded-full"></div> */}
                                    <h4 className="text-4xl text-[#833ecd] font-bold tracking-widest">
                                        {project.number}
                                    </h4>
                                    <div className="h-0.5 bg-gradient-to-r from-[#833ecd] to-[#833ecd]/0 flex-1"></div>

                                </div>

                                <div className="text-[#E8F0FF]">
                                    <h3 className="text-3xl font-semibold mb-4 " >
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-[#8899BB] mb-6 " >
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-5 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-lg font-semibold text-gray-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#833ecd] hover:bg-sage-white text-dark-bg text-sm font-semibold py-1.5 px-3.5 rounded"
                                        >
                                            Code
                                        </a>

                                        <a href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#833ecd] hover:bg-sage-white text-dark-bg text-sm font-semibold py-1.5 px-3.5 rounded"

                                        >
                                            Demo
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/* Vidéo */}
                            <div className={` ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="relative aspect-video overflow-hidden border border-sage-green rounded bg-gray-200">
                                    <video
                                        src={project.video}
                                        className="w-full h-full object-cover"
                                        loop
                                        muted
                                        playsInline
                                        onMouseEnter={(e) => e.target.play()}
                                        onMouseLeave={(e) => {
                                            e.target.pause();
                                            e.target.currentTime = 0;
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}