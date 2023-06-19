"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BiLink } from "react-icons/bi";

import projects from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	const pathname = usePathname();
	const projectname = pathname.split("/")[2];
	
	const project = projects.filter((item) => {
		return item.projectName === projectname.split("%20").join(" ");
	})[0];

	return (
		<div className="flex flex-col gap-3 p-5 md:p-10 min-h-screen h-auto bg-white">
			<div className="pt-10  flex justify-between items-center">
				<span className="text-3xl font-extrabold">{project.projectName}</span>
				<div className="text-xl font-bold p-1 px-3 md:mx-5 rounded-lg bg-stone-600 text-white">
					<Link href="/"> Back</Link>
				</div>
			</div>

			<div className="flex flex-col justify-between items-center text-xl h-auto w-full gap-5">
				{project.detailedImgURL.map((item, index) => (
					<div className="project-image w-full md:overflow-hidden sm:overflow-scroll flex justify-center">
						<div
							key={index}
							className=" relative aspect-6/4 md:w-11/12 sm:w-width_double  rounded-xl overflow-hidden md:mx-5 mt-5 ">
							<a
								href={project.projectURL}
								className="flex gap-2 items-center"
								target="_blank">
								<Image alt="projectDesc" src={item} fill />
							</a>
						</div>
					</div>
				))}

				{/* bullet points */}
				<div className="flex w-full flex-col justify-between items-start gap-4 ">
					<div className="flex sm:flex-col md:flex-row px-3 py-5 bg-gray-50 border w-full rounded-lg">
						<ul className="w-full flex flex-col flex-wrap items-start gap-2 ">
							{project.shortDesc
								.slice(0, Math.ceil(project.shortDesc.length / 2) + 1)
								.map((item, index) => (
									<li key={index} className="text-xl flex flex-col items-start">
										<span className="font-bold flex gap-1 items-center">
											<span className="text-3xl">{"•"}</span>
											{item.split(":")[0]}
											{" :"}
										</span>
										<span className=" ml-4 text-lg ">{item.split(":")[1]}</span>{" "}
									</li>
								))}
						</ul>
						<ul className="w-full flex flex-col flex-wrap items-start gap-2 ">
							{project.shortDesc
								.slice(Math.ceil(project.shortDesc.length / 2) + 1)
								.map((item, index) => (
									<li
										key={index}
										className=" text-xl flex flex-col items-start">
										<span className="font-bold flex gap-1 items-center">
											<span className="text-3xl">{"•"}</span>
											{item.split(":")[0]}
											{" :"}
										</span>
										<span className=" ml-4 text-lg ">{item.split(":")[1]}</span>{" "}
									</li>
								))}
						</ul>
					</div>

					{/* toolsUsed */}
					<div className=" mb-5 p-3 pb-4 bg-red-200 rounded-lg w-full">
						<h1 className="font-bold text-2xl mb-4 text-teal-950">
							Tools Used
						</h1>
						<div className=" flex flex-wrap gap-2">
							{project.toolsUsed.map((item, index) => (
								<span key={index} className="py-2 px-3 bg-color1 rounded-md">
									{item}
								</span>
							))}
						</div>
					</div>

					{/* Live link and github links  */}
					<div className="flex justify-start items-center gap-3">
						<span className="heading border-[3px] hover:shadow-md transition-all border-teal-400  bg-teal-400 w-auto px-3 py-1 rounded-md">
							<a
								href={project.projectURL}
								className="flex gap-2 items-center"
								target="_blank">
								<p className="text-2xl font-extrabold">Live</p>
								<BiLink />
							</a>
						</span>
						<span className="heading border-[3px] hover:shadow-md transition-all hover:bg-gray-200 border-gray-200 w-auto px-3 py-1 rounded-md">
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
		</div>
	);
};

export default page;
