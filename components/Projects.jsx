
import { ProjectCard } from '.';

const Projects = () => {
	const projects = [
		{
			projectName: "Crypto Dashboard",
			aboutProject: "To show real time cryptocurrency data ",
			description: "",
			imgURL: "/images/crypto.jpg",
			github: "https://github.com/nikhil-223/cryptocurrency-project",
			projectURL: "https://crypto-currency-board.netlify.app",
		},
		{
			projectName: "Talkr",
			aboutProject: "A chatting app",
			description: "In progress",
			imgURL: "/images/chatApp.png",
			github: "https://github.com/nikhil-223/chatting-app",
			projectURL: "https://chatttingapp.netlify.app",
		},
		{
			projectName: "Inotepad",
			aboutProject: "A note making app",
			description: "In progress",
			imgURL: "/images/inotepad.png",
			github: "https://github.com/nikhil-223/inotepad",
			projectURL: "https://inotepad.netlify.app",
		},
		{
			projectName: "Noted",
			aboutProject: "A note making app created using Next.js",
			description: "",
			imgURL: "/images/Noted.png",
			github: "https://github.com/nikhil-223/noted",
			projectURL: "https://tobenoted.vercel.app",
		},
		{
			projectName: "Portfolio",
			aboutProject: "My personal portfolio website",
			description: "",
			imgURL: "/images/Portfolio.png",
			github: "https://github.com/nikhil-223/myPortfolio",
			projectURL: "https://nikhilshekhawat.netlify.app",
		},
		{
			projectName: "CSS Challenges",
			aboutProject: "Some css challenges",
			description: "In progress",
			imgURL: "/images/cssChallenges.png",
			github: "https://github.com/nikhil-223/css-challenge-react",
			projectURL: "https://css-challengesbynikhil.netlify.app/",
		},
	];
  

	return (
		<section
			id="projects"
			className="h-auto w-full flex flex-wrap items-center justify-center bg-projectSec pt-20 p-10 gap-5">
			<div className="w-full flex justify-center">
				<span className="text-cyan-500 font-bold text-3xl">
					<span className=" text-black">{`P`}</span>ROJECTS
				</span>
			</div>
			<div className="flex flex-wrap justify-around gap-5">
				{projects.map((item) => {
					return (
						<ProjectCard
							key={item.projectName}
							projectName={item.projectName}
							imgURL={item.imgURL}
							projectURL={item.projectURL}
							projectDesc={item.description}
							aboutProject={item.aboutProject}
							github={item.github}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Projects