"use client";

import getSection from "../actions/getSection";

const NavListItem = ({ href, label, isActive, icon:Icon }) => {
	return (
		<>
			<li
				className={`md:flex sm:hidden hover:opacity-80 ${
					isActive && "text-cyan-700"
				}`}>
				<a href={href}> {label}</a>
			</li>
			<li
				className={`sm:flex md:hidden flex-col items-center ${
					isActive && "text-cyan-700"
				}`}>
				<span className="p-2 text-xl hover:opacity-80">
					<a href={href}>
						<Icon />
					</a>
				</span>
				{/* <p className=" text-xs">CONTACT</p> */}
			</li>
		</>
	);
};

export default NavListItem;
