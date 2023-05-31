"use client";

import React, { useEffect, useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectCard = (props) => {
	const { projectName, imgURL, projectURL, projectDesc, github, aboutProject } =
		props;

	const ref = useRef();
	const isInView = useInView(ref, {
		margin: "-10px",
		once: true,
	});

    const projectVariants = {
			hidden: {
				y: 20,
				opacity:0,
			},
			visible: {
				y: 0,
				opacity:1,
				transition: {
                    type:'spring',
					ease: "linear",
					duration: 1,
				},
			},
		};

    const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
            controls.start('visible')
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
            variants={projectVariants}
            initial= 'hidden'
            animate={controls}
			className="project w-96 h-72 p-4 shadow-lg rounded-lg bg-white ">
			<a href={projectURL} target="blank">
				<div className="relative rounded-lg overflow-hidden w-full h-4/5">
					<Image src={imgURL} fill alt={projectName} />
					{projectDesc !== "" && (
						<span className=" absolute p-1 bg-red-400 z-20 right-1 bottom-2 scale-75 rounded">
							{projectDesc}
						</span>
					)}
				</div>
			</a>

			<div className="flex justify-between py-3">
				<div className="flex flex-col">
					<span className="font-bold">{projectName}</span>
					<span className="text-sm">{aboutProject}</span>
				</div>
				<div className="flex gap-2 px-2 text-2xl">
					<a href={projectURL} target="blank">
						<HiExternalLink />
					</a>
					<a href={github}>
						<AiOutlineCodeSandbox />
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;