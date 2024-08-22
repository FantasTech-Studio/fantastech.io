import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { AnimatedTooltip } from './ui/AnimatedTooltip';

const About = () => {
	const words = ["inteligentes", "innovadoras", "escalables", "únicas", "impactantes"];

	const people = [
		{
			id: 1,
			name: "Andy Castillo",
			designation: "Co-Founder",
			image: "/andy.jpg",
		},
		{
			id: 2,
			name: "Marco Fuentes",
			designation: "Co-Founder",
			image: "/marco.jpg",
		},
		// {
		// 	id: 3,
		// 	name: "Francisco Rosal",
		// 	designation: "Co-Founder",
		// 	image:
		// 		"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		// },
		{
			id: 4,
			name: "Gian Luca Rivera",
			designation: "Co-Founder",
			image: "/luca.png",
		},
  	];

	return (
		<section id='about' className='bg-white dark:bg-black-100 py-20 w-full'>
			<div className='w-full px-11 md:px-20 lg:px-28'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center'>
					<div className='flex flex-col justify-center items-center md:items-start w-full'>
						<div className="text-3xl sm:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-full mb-8 leading-normal text-center md:text-left">
							Crea soluciones
							<FlipWords words={words} /> <br />
							y transforma tu negocio con Fantastech
						</div>
						<div className='flex flex-col justify-center items-center md:items-start w-full'>
							<div className="flex flex-row items-center md:justify-start lg:justify-start justify-center mb-10 w-full">
								<AnimatedTooltip items={people} />
							</div>
						</div>
					</div>
					
					<div className='flex flex-col justify-center items-start w-full sm:pr-16 md:pr-24'>
						<p className='text-base sm:text-lg md:text-xl lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 w-full text-center md:text-left'>
							En Fantastech, nos enorgullece ser ágiles, innovadores y audaces. Con sedes en los vibrantes núcleos tecnológicos de Ciudad de Guatemala 
							y Milán, nuestro equipo global de expertos crea soluciones de software inteligentes, diseñadas para crecer y adaptarse a las necesidades 
							de tu negocio a medida que evoluciona. Ya seas una startup en busca de innovación o una empresa consolidada que necesita transformación 
							digital, estamos aquí para alinear tu tecnología con tu visión.
							<br /><br />
							Nos apasiona entender tus desafíos únicos y diseñar soluciones a medida que impulsen tu éxito a largo plazo. En Fantastech, no solo 
							desarrollamos software; creamos experiencias tecnológicas que potencian el futuro de tu negocio.
						</p>
					</div>
				</div>
			</div>
		</section>
  );
}

export default About;