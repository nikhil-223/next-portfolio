'use client'

import Image from "next/image";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLightbulbFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavListItem from "./NavListItem";
import useRoutes from "../hooks/useRoute";

const Navbar = () => {
	const pathname = usePathname();

	const routes = useRoutes();

	return (
		<nav
			id="navbar"
			className={`flex fixed items-center justify-between w-full p-1 px-5 z-50 transition ${
				pathname !== "/" && "bg-white shadow"
			}`}>
			<Link href="/" className="flex gap-2 items-center">
				<div className="relative w-10 h-10 rounded-full overflow-hidden">
					<Image fill alt="profileImage" src="/images/profile.jpg" />
				</div>
				<span className=" text-lg font-bold">NIKHIL SHEKHAWAT</span>
			</Link>

			{/* big screen */}
			<ul
				id="menu"
				className={`sm:hidden gap-3 font-bold p-2 text-lg cursor-pointer ${
					pathname !== "/" ? "md:hidden" : "md:flex"
				}`}>
				{routes.map((route) => (
					<NavListItem
						isActive={route.isActive}
						key={route.label}
						href={route.href}
						icon={route.icon}
						label={route.label}
					/>
				))}
			</ul>

			<div className="flex gap-4 sm:flex md:hidden p-2 text-2xl">
				<div className="link-box">
					<a
						href="https://www.linkedin.com/in/nikhil-shekhawat-986385179"
						target={"_blank"}
						rel="noreferrer">
						<ImLinkedin />
					</a>
				</div>
				<div className="link-box">
					<a
						href="https://github.com/nikhil-223"
						target={"_blank"}
						rel="noreferrer">
						<ImGithub />
					</a>
				</div>
				<div className="link-box">
					<a
						href="https://twitter.com/Nikhil70035706"
						target={"_blank"}
						rel="noreferrer">
						<ImTwitter />
					</a>
				</div>
			</div>

			{/* mobile navigation menu */}
			<ul
				id="menu"
				className={`fixed bottom-5 left-1/2 -translate-x-1/2 shadow-lg  md:hidden gap-1 p-2 px-3 bg-slate-50 rounded-full ${
					pathname !== "/" ? "sm:hidden" : "sm:flex"
				}`}>
				{routes.map((route) => (
					<NavListItem
						isActive={route.isActive}
						key={route.label}
						href={route.href}
						icon={route.icon}
						label={route.label}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
