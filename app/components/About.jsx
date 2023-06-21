"use client";

import React from "react";
import { Skill } from "@/app/components";
// import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const About = () => {
	const skills = [
		{ skillName: "HTML5", skillPercentage: "70%" },
		{ skillName: "JavaScript", skillPercentage: "60%" },
		{ skillName: "React.js", skillPercentage: "60%" },
		{ skillName: "Ṇext.js", skillPercentage: "50%" },
		{ skillName: "Responsive Web Design", skillPercentage: "70%" },
		{ skillName: "CSS", skillPercentage: "70%" },
		{ skillName: "SASS", skillPercentage: "80%" },
		{ skillName: "OOP", skillPercentage: "70%" },
		{ skillName: "Redux.js", skillPercentage: "70%" },
		{ skillName: "Redux Thunk", skillPercentage: "75%" },
		{ skillName: "Figma", skillPercentage: "50%" },
		{ skillName: "TailwindCSS", skillPercentage: "70%" },
		{ skillName: "Bootstrap", skillPercentage: "80%" },
		{ skillName: "Git", skillPercentage: "60%" },
		{ skillName: "GitHub", skillPercentage: "60%" },
		{ skillName: "jQuery", skillPercentage: "60%" },
		{ skillName: "Chart.js", skillPercentage: "85%" },
		{ skillName: "Node.js", skillPercentage: "60%" },
		{ skillName: "Express.js", skillPercentage: "60%" },
		{ skillName: "SQL", skillPercentage: "50%" },
		{ skillName: "REST API", skillPercentage: "60%" },
		{ skillName: "MongoDB", skillPercentage: "65%" },
		{ skillName: "Java", skillPercentage: "60%" },
		{ skillName: "Framer Motion", skillPercentage: "40%" },
	];

	return (
		<section
			id="about"
			className=" flex flex-col relative w-full h-auto  pt-12 p-8 md:p-20 overflow-hidden">
			<div className="flex flex-col items-center gap-10 mt-5 justify-center">
				<div className="flex text-4xl font-extrabold ">
					<span className=" text-teal-600">{`A`}</span>BOUT
					<span className="ml-3 text-teal-600">{`M`}</span>E
				</div>
				<div className="flex md:flex-row sm:flex-col gap-6 ">
					<div className="md:w-1/2 sm:w-full sm:px-3 sm:pb-3 md:pb-0 md:px-6 flex flex-col gap-5">
						<ul className="md:text-lg sm:text-sm  list-disc flex flex-col gap-2 ">
							<li>
								As a passionate <b>Full-stack Web Developer</b> I'm dedicated to
								creating innovative and user-friendly web applications.
							</li>
							<li>
								With my expertise in <b>React</b> and <b>Next</b> , I've built
								several major projects that have been widely praised for their
								intuitive design and seamless functionality. I'm constantly
								expanding my knowledge and skills, and I'm excited to take on
								new challenges and learn new technologies.
							</li>
							<li>
								My goal is to become a well-rounded developer who can bring a
								wide range of expertise to any project. In addition to my
								technical skills, I'm a strong communicator and collaborator who
								thrives in a team environment. I believe that the best results
								come from working together and bringing diverse perspectives to
								the table.
							</li>
							<li>
								If you're looking for a creative and driven developer who can
								deliver high-quality solutions, I'd love to connect and explore
								how I can contribute to your team or project.
							</li>
						</ul>
						<div className="">
							<a
								className="p-2 px-4 rounded-full bg-slate-300 font-bold md:text-xl"
								href="#contact">
								Contact Me
							</a>
						</div>
					</div>

					<hr className="sm:block md:hidden bg-black opacity-70" />

					<div className="md:w-1/2 sm:w-full px-5 md:px-12 flex flex-col relative gap-5">
						<div className="font-bold text-2xl">My Skills</div>
						<div className="flex flex-wrap gap-3 gap-x-4  z-20">
							{skills.map((item) => (
								<Skill
									key={item.skillName}
									skillName={item.skillName}
									skillPercentage={item.skillPercentage}
								/>
							))}
						</div>
						<div className="sm:block md:hidden h-24 w-full"></div>
						<div className="absolute w-full md:w-3/5 self-end h-72 bottom-0 right-0 z-10">
							<Image src="/images/plants.svg" fill alt="home" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
