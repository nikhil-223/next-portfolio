"use client";

import React, { useEffect, useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const ProjectCard = (props) => {
	const {id, projectName, imgURL, projectURL, projectStatus, github, aboutProject } =
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
			initial="hidden"
			animate={controls}
			className="relative snap-start project md:w-projectCard md:aspect-7/4 sm:aspect-4/3 sm:w-full shadow-lg rounded-lg bg-white ">
			<Link href={`project/${projectName}`}>
				<div className="absolute rounded-lg overflow-hidden w-full h-full">
					<Image src={imgURL} fill alt={projectName} />
				</div>
				<div className="absolute w-full h-full rounded-lg bg-gradient-bw" />
				<div className="absolute  w-full h-full transition-all flex justify-between py-3 z-10 hover:scale-110 origin-top-left">
					<div className="flex flex-col mt-10 ml-4 mr-10">
						<span className="sm:text-4xl md:text-5xl font-extrabold text-pink-600">
							{projectName}
						</span>
						<span className="sm:text-2xl md:text-3xl font-extrabold text-white">
							{aboutProject}
						</span>
						{projectStatus !== "" && (
							<span className="text-white z-20">
								{projectStatus}
							</span>
						)}
					</div>
					{/* <div className="flex gap-2 px-2 text-2xl">
						<a href={projectURL} target="blank">
							<HiExternalLink />
						</a>
						<a href={github}>
							<AiOutlineCodeSandbox />
						</a>
					</div> */}
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
