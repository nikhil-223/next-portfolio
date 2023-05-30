'use client'

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Skill = (props) => {
	const ref = useRef()

	const { skillName, skillPercentage } = props;

	const skillsVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 0.5,
			},
		},
	};


	const isInView = useInView(ref, {
		margin: "-30px",
		once: true,
	});

	const controls = useAnimation()

	useEffect(() => {
	  if(isInView) {
		controls.start("visible");
	  }
	}, [isInView,controls])
	

	return (
		<motion.span variants={skillsVariants} initial='hidden' animate={controls} className="flex justify-center items-center text-lg p-2 px-4 relative bg-skill  rounded-lg " ref={ref}>
			{skillName}
			<div className="absolute opacity-0 hover:opacity-100 flex items-center bg-skillPercentage justify-center w-full h-full left-0 top-0 text-white transition-all rounded-lg">{skillPercentage}</div>
		</motion.span>
	);
};

export default Skill;
