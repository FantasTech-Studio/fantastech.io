import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { AnimatedTooltip } from './ui/AnimatedTooltip';

const About = () => {
	const words = ["better", "cute", "beautiful", "modern"];

	const people = [
		{
			id: 1,
			name: "Andy Castillo",
			designation: "Co-Founder",
			image:
				"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
		},
		{
			id: 2,
			name: "Marco Fuentes",
			designation: "Co-Founder",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 3,
			name: "Francisco Rosal",
			designation: "Co-Founder",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 4,
			name: "Gian Luca Rivera",
			designation: "Co-Founder",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
		},
  	];

	return (
		<section id='about' className='bg-white dark:bg-black-100 py-20 w-full'>
	  		<div className='w-full px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
		  			{/* Columna Izquierda */}
		  			<div className='h-[10rem] flex justify-center items-center w-full pl-20'>
						<div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 w-full">
			  				Build
							<FlipWords words={words} /> <br />
							websites with FantasTech
						</div>
		  			</div>
		  			{/* Columna Derecha */}
		  			<div className='flex flex-col justify-center items-start w-full pr-24'>
						<p className='text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 w-full'>
						At FantasTech we are agile, innovative and daring. We are experts in developing smart solutions that generate value from the first moment they are used and can scale with you and your business, regardless of your starting point.
						</p>
						<div className='flex flex-col justify-center items-start w-full'>
			  			{/* Aquí puedes colocar cualquier otro elemento que desees debajo del párrafo */}
			  				<div className="flex flex-row items-center mb-10 w-full">
								<AnimatedTooltip items={people} />
							</div>
						</div>
		  			</div>
				</div>
	  		</div>
		</section>
  );
}

export default About;