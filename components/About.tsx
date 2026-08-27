"use client";
import React from "react";
import { FlipWords } from "./ui/FlipWords";
import AboutStats from "./AboutStats";
import { useTranslations } from "next-intl";

const About = () => {
	const t = useTranslations();

	const words = [
		t("about.pivot1"),
		t("about.pivot2"),
		t("about.pivot3"),
		t("about.pivot4"),
		t("about.pivot5"),
	];

	return (
		<section id="about" className="bg-white dark:bg-black-100 py-20 w-full">
			<div className="w-full px-11 md:px-20 lg:px-28">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
					<div className="flex flex-col justify-center items-center md:items-start w-full">
						<div className="text-3xl sm:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-full mb-8 leading-normal text-center md:text-left">
							{t("about.title_p1")}
							<FlipWords words={words} /> <br />
							{t("about.title_p2")}
						</div>
						<div className="flex flex-col justify-center items-center md:items-start w-full">
							<div className="flex flex-row items-center md:justify-start lg:justify-start justify-center mb-10 w-full">
								<AboutStats />
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center items-start w-full sm:pr-16 md:pr-24">
						<p className="text-base sm:text-lg md:text-xl lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 w-full text-center md:text-left">
							{t("about.description1")}
							<br />
							<br />
							{t("about.description2")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
