"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BiLink } from "react-icons/bi";

import projects from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	const pathname = usePathname();
	const id = pathname.split("/")[2];

	const project = projects.filter((item) => {
		return item.id === id;
	})[0];

	return (
		<div className="flex flex-col gap-3 p-10 min-h-screen h-auto bg-slate-100">
			<div className="pt-10  flex justify-between items-center">
				<span className="text-3xl font-extrabold">{project.projectName}</span>
				<div className="text-xl font-bold p-1 px-3 mx-5 rounded-lg bg-stone-600 text-white">
					<Link href="/"> Back</Link>
				</div>
			</div>

			<div className="flex justify-between text-xl h-auto w-full">
				<div className="flex flex-col justify-between items-start">
					<p className="w-auto">{project.shortDesc}</p>
					<div className="flex justify-start items-center gap-3">
						<span className="heading  bg-green-400 w-auto px-3 py-1 rounded-md">
							<a
								href={project.projectURL}
								className="flex gap-2 items-center"
								target="_blank">
								<p className="text-2xl font-extrabold">Live</p>
								<BiLink />
							</a>
						</span>
						<span className="heading  bg-red-400 w-auto px-3 py-1 rounded-md">
							<a
								href={project.github}
								className="flex gap-2 items-center"
								target="_blank">
								<p className="text-2xl font-extrabold">GitHub</p>
								<BiLink />
							</a>
						</span>
					</div>
				</div>
				<div className=" relative aspect-6/4 min-w-projectCard rounded-xl overflow-hidden mx-5">
					<Image src={project.imgURL} fill />
				</div>
			</div>

			<div className=""></div>

			<div className="">
				<div className="heading text-2xl font-extrabold"> Overview</div>
				<p className="text-lg">{project.overview}</p>
			</div>
		</div>
	);
};

export default page;
