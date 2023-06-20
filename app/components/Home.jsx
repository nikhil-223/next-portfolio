"use client";

import React, { useEffect } from "react";
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Home = (props) => {
	const { textVisible, aboutVisible } = props;

	// framer motion
	let { scrollYProgress } = useScroll();
	let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	const infoVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};
	const infoChildVariants = {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	//intersection observer
	useEffect(() => {
		const cards = document.querySelectorAll("#navtrack");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting === false) {
						document.querySelector("#navbar").style.backgroundColor = "white";
						document.querySelector("#navbar").style.top = "-0.2rem";
						document.querySelector("#navbar").style.boxShadow =
							"0px -1px 10px 0px rgba(71,70,87,1)";
						} else {
							document.querySelector("#navbar").style.top = "0rem";
							document.querySelector("#navbar").style.backgroundColor =
							"transparent";
							document.querySelector("#navbar").style.boxShadow =
								"0px 0px 0px 0px rgba(71,70,87,1)";
					}
				});
			},
			{
				threshold: 0,
			}
		);
		cards.forEach((card) => {
			observer.observe(card);
		});
	});

	return (
		<section id="home" className="relative pt-12 md:h-section h-screen w-full">
			<div id="navtrack" className="absolute top-0 invisible text-xs">
				navtrack
			</div>
			<div className="relative h-full flex flex-col p-3 justify-center items-center">
				{/* links */}
				<div className="links h-72 flex justify-around sm:hidden md:flex flex-col absolute p-2 py-6 bg-white text-4xl">
					<div className=" p-2 hover:bg-cyan-100 rounded-2xl">
						<a
							href="https://www.linkedin.com/in/nikhil-shekhawat-986385179"
							target={"_blank"}
							rel="noreferrer">
							<ImLinkedin />
						</a>
					</div>
					<div className=" p-2 hover:bg-cyan-100 rounded-2xl">
						<a
							href="https://github.com/nikhil-223"
							target={"_blank"}
							rel="noreferrer">
							<ImGithub />
						</a>
					</div>
					<div className=" p-2 hover:bg-cyan-100 rounded-2xl">
						<a
							href="https://twitter.com/Nikhil70035706"
							target={"_blank"}
							rel="noreferrer">
							<ImTwitter />
						</a>
					</div>
				</div>

				{/* info details */}
				<motion.div
					className="relative sm:mb-0 md:mb-20 flex flex-col gap-2 items-center justify-center"
					variants={infoVariants}
					initial="hidden"
					animate="visible"
					style={{ y }}>
					<div>
						<span>
							{" "}
							<motion.h6
								className="text-center font-bold text-2xl"
								variants={infoChildVariants}>
								Hey, I'm{" "}
							</motion.h6>{" "}
							<motion.h3
								className="text-center font-extrabold sm:text-5xl md:text-6xl"
								variants={infoChildVariants}>
								Nikhil Shekhawat
							</motion.h3>{" "}
						</span>
					</div>
					<motion.div className="flex gap-3" variants={infoChildVariants}>
						<span className="sm:text-2xl md:text-4xl font-extrabold text-cyan-800">
							Full-Stack
						</span>
						<span className="sm:text-2xl md:text-4xl font-extrabold">
							Developer
						</span>
					</motion.div>
					<motion.div variants={infoChildVariants}>
						<span className="w-full flex text-center sm:text-sm md:text-xl md:px-16">
							I specialize in creating dynamic and interactive websites
							utilizing a range of programming languages and frameworks
						</span>
					</motion.div>

					{/* project button  */}
					<div className="p-4 py-2 mt-3 bg-slate-300 rounded-full font-bold md:text-xl ">
						<a href="#projects">Projects</a>
					</div>
				</motion.div>

				{/* scroll  */}
				{/* <div className="scroll-indicator "> */}
					{/* <div className="absolute w-5 h-5 bg-black rounded-full"></div> */}
				{/* </div> */ }

				{/* illustraion */}
				<div className="sm:w-64 sm:h-64 md:h-80 md:w-80 self-end sm:relative md:absolute md:bottom-10 -scale-x-100">
					<Image src="/images/Home.svg" fill alt="home" />
				</div>
			</div>
		</section>
	);
};

export default Home;
