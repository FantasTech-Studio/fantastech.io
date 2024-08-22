import { cn } from "@/lib/utils";
import {
	IconBrandFacebook,
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
	const pages = [
		{
			title: "Nosotros",
			href: "#about",
		},
		{
			title: "Servicios",
			href: "#services",
		},
		{
			title: "Clientes",
			href: "#",
		},
		{
			title: "Contáctanos",
			href: "#contact",
		},
		{
			title: "Trabaja con nosotros",
			href: "https://doc.clickup.com/9006076676/d/h/8ccvmr4-2417/eebc811d1ea7802",
		},
		{
			title: "Políticas de privacidad",
			href: "#",
		},
		{
			title: "Términos y condiciones",
			href: "#",
		},
  	];

	return (
		<div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-black-100 w-full relative overflow-hidden">
			<div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
				<div className="flex flex-col items-center justify-center w-full relative">
					<div className="mr-0 md:mr-4  md:flex mb-4">
						<Logo />
					</div>

					<ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
						{pages.map((page, idx) => (
						<li key={"pages" + idx} className="list-none text-center">
							<Link
							className="transition-colors hover:text-text-neutral-800 "
							href={page.href}
							>
							{page.title}
							</Link>
						</li>
						))}
					</ul>

					<GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
				</div>
				<div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
					<p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
						&copy; Fantastech
					</p>
					<div className="flex gap-4">
						{/* <Link href="#" target="_blank" rel="noopener noreferrer">
						<IconBrandTwitter className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
						</Link> */}
						<Link href="https://www.linkedin.com/company/fantastechdev" target="_blank" rel="noopener noreferrer">
						<IconBrandLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
						</Link>
						<Link href="https://github.com/FantasTech-Studio" target="_blank" rel="noopener noreferrer">
						<IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
						</Link>
						<Link href="https://www.facebook.com/fantastechdev" target="_blank" rel="noopener noreferrer">
						<IconBrandFacebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
						</Link>
						<Link href="https://www.instagram.com/fantastechdev" target="_blank" rel="noopener noreferrer">
						<IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
						</Link>
					</div>
				</div>
			</div>
		</div>
  	);
}

const GridLineHorizontal = ({ className, offset }: { className?: string; offset?: string; }) => {
	return (
		<div
			style={
				{
					"--background": "#ffffff",
					"--color": "rgba(0, 0, 0, 0.2)",
					"--height": "1px",
					"--width": "5px",
					"--fade-stop": "90%",
					"--offset": offset || "200px",
					"--color-dark": "rgba(255, 255, 255, 0.2)",
					maskComposite: "exclude",
				} as React.CSSProperties
			}
			className={cn(
				"w-[calc(100%+var(--offset))] h-[var(--height)]",
				"bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
				"[background-size:var(--width)_var(--height)]",
				"[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
				"[mask-composite:exclude]",
				"z-30",
				"dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
				className
			)}
		></div>
	);
};

const Logo = () => {
	return (
		<Link
			href="/"
			className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
		>
			<Image
				src="/logo.svg"
				alt="logo"
				width={200}
				height={100}
			/>
	  		{/* <span className="font-medium text-black dark:text-white">Fantastech</span> */}
		</Link>
	);
};
