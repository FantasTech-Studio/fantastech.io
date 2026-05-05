'use client'
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';
import { HoverEffect } from './ui/CardHoverEffect';
import { useTranslations } from 'next-intl';

const Services = () => {
	const t = useTranslations();

	const services = [
		{
			title: t('services.title_web'),
			description: t('services.description_web'),
		},
		{
			title: t('services.title_app'),
			description: t('services.description_app'),
		},
		{
			title: t('services.title_cloud'),
			description: t('services.description_cloud'),
		},
		{
			title: t('services.title_uiux'),
			description: t('services.description_uiux'),
		},
		{
			title: t('services.title_datasc'),
			description: t('services.description_datasc'),
		},
		{
			title: t('services.title_digitaltransf'),
			description: t('services.description_digitaltransf'),
		}
	];

	return (
		<section id='services' className='bg-white dark:bg-black-100 py-20 w-full -scroll-mt-64'>
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
					{t('services.title')}
				</motion.h1>
			</LampContainer>
			<div className="max-w-7xl mx-auto px-8 -mt-[25rem]">
				<HoverEffect items={services} />
			</div>
		</section>
	)
}

export default Services
