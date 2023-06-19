
import { ProjectCard } from '.';
import projects from '@/utils/projects';

const Projects = () => {
  

	return (
		<section
			id="projects"
			className=" flex flex-col relative w-full h-auto  pt-12 p-8 md:p-20 overflow-hidden">
			<div className="w-full flex justify-center">
				<span className="text-cyan-500 font-bold text-4xl">
					<span className=" text-black">{`P`}</span>ROJECTS
				</span>
			</div>
			<div className="flex flex-wrap justify-around gap-5">
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
		</section>
	);
}

export default Projects;