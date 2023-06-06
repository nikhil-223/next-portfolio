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
		<div className="flex flex-col gap-3 p-5 md:p-10 min-h-screen h-auto bg-slate-100">
			<div className="pt-10  flex justify-between items-center">
				<span className="text-3xl font-extrabold">{project.projectName}</span>
				<div className="text-xl font-bold p-1 px-3 md:mx-5 rounded-lg bg-stone-600 text-white">
					<Link href="/"> Back</Link>
				</div>
			</div>

			<div className="flex flex-col justify-between items-center text-xl h-auto w-full gap-5">
				{project.detailedImgURL.map((item) => (
					<div className=" relative aspect-6/4 md:w-3/4 sm:w-full rounded-xl overflow-hidden md:mx-5 mt-5 ">
						<Image src={item} fill />
					</div>
				))}

				<div className="flex w-full flex-col justify-between items-start gap-4 ">
					<ul className="w-auto flex flex-col items-start ">
						{project.shortDesc.split("/").map((item) => (
							<li className=" text-lg flex items-center">
								<span className="font-bold flex gap-1 items-center">
									<span className="text-3xl">{"•"}</span>
									{item.split(":")[0]}
									{" :"}
								</span>
								<span className="ml-1 ">{item.split(":")[1]}</span>{" "}
							</li>
						))}
					</ul>
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
