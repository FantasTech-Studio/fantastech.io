'use client'
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/Lamp';
import { HoverEffect } from './ui/CardHoverEffect';



const Services = () => {
	const services = [
		{
			title: "Soluciones Web",
			description:
				"Creamos experiencias web que van más allá de lo ordinario. Con nuestro equipo experto, diseñamos y desarrollamos sitios web y plataformas que no solo se ven increíbles, sino que están construidos para funcionar de manera impecable. Desde tiendas en línea hasta portales corporativos, nuestras soluciones web están hechas a la medida, garantizando que tu presencia digital sea tan única como tu negocio.",
			// link: "",
		},
		{
			title: "Aplicaciones Móviles",
			description:
				"Lleva tu marca a la palma de la mano de tus clientes. Desarrollamos aplicaciones móviles que son intuitivas, atractivas y diseñadas para destacar en un mercado saturado. Ya sea que busques conectar con tu audiencia en cualquier lugar o crear una nueva experiencia móvil innovadora, estamos aquí para darle vida a tu visión, asegurándonos de que cada interacción sea memorable.",
			// link: "",
		},
		{
			title: "Servicios en la Nube",
			description:
				"Transforma la manera en que operas con nuestro servicio de infraestructura en la nube. Te ayudamos a construir, optimizar y escalar soluciones en la nube que se adaptan perfectamente a las necesidades de tu negocio. Desde migración hasta administración completa, nuestro equipo asegura que tu entorno en la nube sea seguro, eficiente y listo para crecer contigo, permitiéndote enfocarte en lo que mejor haces.",
			// link: "",
		},
		{
			title: "Diseño UI/UX",
			description:
				"El diseño es mucho más que apariencia, es experiencia. Nuestro equipo de diseñadores UI/UX en FantasTech está comprometido con la creación de interfaces que son tan funcionales como hermosas. Nos enfocamos en entender a tus usuarios para diseñar experiencias que no solo satisfacen, sino que sorprenden. Hacemos que cada interacción cuente, asegurando que tus productos digitales sean tanto atractivos como fáciles de usar.",
			// link: "",
		},
		{
			title: "Ciencia de Datos",
			description:
				"Tus datos tienen una historia que contar, y en FantasTech te ayudamos a escucharla. Nuestro equipo de científicos de datos transforma grandes volúmenes de datos en información valiosa que impulsa decisiones estratégicas. Desde análisis predictivo hasta visualización avanzada, te proporcionamos las herramientas para descubrir oportunidades y hacer que tus datos trabajen para ti",
			// link: "",
		},
		{
			title: "Transformación Digital",
			description:
				"El futuro es digital, y en FantasTech estamos aquí para guiarte en ese viaje. Ayudamos a las empresas a reinventarse y a adaptarse a la era digital con soluciones que van desde la modernización de procesos hasta la integración de tecnologías emergentes. Te acompañamos en cada paso, asegurando que tu transformación digital sea efectiva, sostenible y alineada con tus objetivos de negocio.",
			// link: "",
		}
	];

	return (
		<section id='services' className='bg-white dark:bg-black-100 py-20 w-full'>
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
					Nuestros servicios
				</motion.h1>
			</LampContainer>
			<div className="max-w-7xl mx-auto px-8 -mt-72">
				<HoverEffect items={services} />
			</div>
			
		</section>
	)
}

export default Services