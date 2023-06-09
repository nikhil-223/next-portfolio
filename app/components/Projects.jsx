
import { ProjectCard } from '.';
import projects from '@/utils/projects';

const Projects = () => {
  

	return (
		<div
			id="projects"
			className=" flex flex-col relative w-full h-auto min-h-screen pt-12 p-8 md:pt-20 md:p-5 gap-10">
			<div className="w-full flex justify-center mt-5">
				<span className=" text-black font-bold text-4xl">
					<span className="text-cyan-700 ">{`P`}</span>ROJECTS
				</span>
			</div>
			<div className="projectscroll flex sm:flex-wrap md:flex-nowrap h-auto md:h-96 md:overflow-x-scroll md:overflow-y-hidden gap-5 snap-x snap-mandatory justify-start">
				{projects.map((item) => {
					return (
						<ProjectCard
							key={item.id}
							id={item.id}
							projectName={item.projectName}
							imgURL={item.imgURL}
							projectURL={item.projectURL}
							projectStatus={item.status}
							aboutProject={item.aboutProject}
							github={item.github}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;