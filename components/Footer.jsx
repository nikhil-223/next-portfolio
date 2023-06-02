import React from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer id="footer" className="flex justify-center text-white md:h-80 sm:h-auto items-center bg-footer sm:p-10 sm:pb-20">
			<div className="flex flex-col gap-5 ">
				<div className="flex gap-20">
					<div className="flex flex-col gap-2">
						<h3 className="text-2xl font-bold">Nikhil Shekhawat</h3>
						<span className="">
							I specialize in creating dynamic and interactive websites
							utilizing a range of programming languages and frameworks
						</span>
					</div>
					<div>
						<div className=" flex gap-5 text-2xl">
							<a
								href="https://www.linkedin.com/in/nikhil-shekhawat-986385179/"
								target="blank">
								<TfiLinkedin />
							</a>
							<a href="https://github.com/nikhil-223" target="blank">
								<SiGithub />
							</a>
							<a href="https://twitter.com/Nikhil70035706" target="blank">
								<BsTwitter />
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-10">
					<div className="w-full h-1 bg-white"></div>
					<div className="flex w-full justify-center text-center ">
						© Copyright 2023. Made by Nikhil Shekhawat
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
