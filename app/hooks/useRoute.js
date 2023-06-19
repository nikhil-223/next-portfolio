import { useMemo } from "react";
import getSection from "../actions/getSection";
import {AiFillHome} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { RiLightbulbFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const useRoutes = () => {

    const section = getSection();

	const routes = useMemo(
		() => [
			{
				label: "HOME",
				href: "#home",
				isActive: section === "home",
				icon: AiFillHome,
			},
			{
				label: "ABOUT",
				href: "#about",
				isActive: section === "about",
				icon: BsFillPersonFill,
			},
			{
				label: "PROJECTS",
				href: "#projects",
				isActive: section === "projects",
				icon: RiLightbulbFill,
			},
			{
				label: "CONTACT",
				href: "#contact",
				isActive: section === "contact",
				icon: HiMail,
			},
		],
		[section]
	);

	return routes;
};

export default useRoutes;
