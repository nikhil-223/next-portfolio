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
			className="relative project md:w-projectCard aspect-5/3 sm:w-full shadow-lg rounded-lg bg-white ">
			<Link href={`project/${projectName}`}>
				<div className="absolute rounded-lg overflow-hidden w-full h-full">
					<Image src={imgURL} fill alt={projectName} />
					{projectStatus !== "" && (
						<span className=" absolute p-1 bg-red-400 z-20 right-1 bottom-2 scale-75 rounded">
							{projectStatus}
						</span>
					)}
				</div>
				<div className="absolute w-full h-full rounded-lg bg-gradient-bw" />
				<div className="absolute flex justify-between py-3 z-10">
					<div className="flex flex-col mt-10 ml-4 mr-10">
						<span className="text-5xl font-extrabold text-pink-600">
							{projectName}
						</span>
						<span className="text-3xl font-extrabold text-white">
							{aboutProject}
						</span>
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
