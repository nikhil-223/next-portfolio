import { useEffect, useMemo, useState } from "react";
import getSection from "../actions/getSection";
import {AiFillHome} from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs";
import { RiLightbulbFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const useRoutes = () => {

	const [sections, setSections] = useState(null)
	const [active, setActive] = useState("home")
	
	useEffect(() => {
		console.log(sections);

		if(!sections){
		setSections(document.querySelectorAll(["#home","#about","#projects","#contact"]))
		}
		else{
		window.onscroll = () => {
			sections.forEach((sec) => {
				let top = window.scrollY;
				let offset = sec.offsetTop;
				let height = sec.offsetHeight;
				let id = sec.getAttribute("id");

				if ((top+300) >= offset && top < offset + height) {
					setActive(id);
				}
			});
		};
	}
	}, [sections]);

	const routes = useMemo(
		() => [
			{
				label: "HOME",
				href: "#home",
				isActive: active === "home",
				icon: AiFillHome,
			},
			{
				label: "ABOUT",
				href: "#about",
				isActive: active === "about",
				icon: BsFillPersonFill,
			},
			{
				label: "PROJECTS",
				href: "#projects",
				isActive: active === "projects",
				icon: RiLightbulbFill,
			},
			{
				label: "CONTACT",
				href: "#contact",
				isActive: active === "contact",
				icon: HiMail,
			},
		],
		[active]
	);

	return routes;
};

export default useRoutes;
