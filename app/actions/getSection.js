import { useEffect, useState } from "react";

const getSection = () => {
	const [active, setActive] = useState("");

	//intersection observer
	useEffect(() => {
		const cards = document.querySelectorAll([
			"#home",
			"#about",
			"#contact",
		]);

		const projects = document.querySelectorAll("#projects")

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{
				threshold: 0.5,
			}
		);
		cards.forEach((card) => {
			observer.observe(card);
		});

		projects.forEach((project) => {
			observer.observe(project);
		})
	}, []);

	return active;
};

export default getSection;
