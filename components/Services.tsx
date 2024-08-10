'use client'
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';
import { HoverEffect } from './ui/CardHoverEffect';



const Services = () => {
	const services = [
		{
			title: "Web Solutions",
			description:
				"A technology company that builds economic infrastructure for the internet.",
			link: "",
		},
		{
			title: "Mobile Apps",
			description:
				"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
			link: "",
		},
		{
			title: "Cloud Services",
			description:
				"A multinational technology company that specializes in Internet-related services and products.",
			link: "",
		},
		{
			title: "Data Science Solutions",
			description:
				"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
			link: "",
		},
		{
			title: "",
			description:
				"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
			link: "https://amazon.com",
		},
		{
			title: "Digital Transformation",
			description:
				"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
			link: "",
		},
		{
				title: "Systems Integrations",
				description:
					"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
				link: "",
			},
			{
				title: "UI Design",
				description:
					"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
				link: "",
			},
	];

	return (
		<section id='about' className='bg-white dark:bg-black-100 py-20 w-full'>
			<div>
				<LampContainer>
					<motion.h1
						initial={{ opacity: 0.5, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3,
							duration: 0.8,
							ease: "easeInOut",
						}}
						className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
					>
						Nuestros Servicios
					</motion.h1>
				</LampContainer>
			</div>
			<div className="max-w-7xl mx-auto px-8">
				<HoverEffect items={services} />
			</div>
		</section>
	)
}

export default Services