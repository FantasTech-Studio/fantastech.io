"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


export const Navbar = () => {
	const navItems = [
		{
			name: "Nosotros",
			link: "#about",
		},
		{
			name: "Servicios",
			link: "#services",
		},
		{
			name: "Contáctanos",
			link: "#contact",
		},
  	];

	return (
		// <div className="w-full py-10 px-2 fixed z-[1000]">
		<div className="w-full py-10 px-2 z-[60] absolute ">
		<DesktopNav navItems={navItems} />
		<MobileNav navItems={navItems} />
		</div>
  	);
};

const DesktopNav = ({ navItems }: any) => {
	const [hovered, setHovered] = useState<number | null>(null);
  	return (
		<motion.div
			onMouseLeave={() => {
				setHovered(null);
			}}
			className={cn(
				"hidden lg:flex flex-row self-start bg-white dark:bg-black-100 items-center justify-between py-3 max-w-7xl mx-auto px-4 rounded-full relative w-full border border-neutral-100 dark:border-white/[0.2]",
				"sticky top-40 inset-x-0"
			)}
		>
	  	<Logo />
	  
		<div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
			{navItems.map((navItem: any, idx: number) => (
			<Link
				onMouseEnter={() => setHovered(idx)}
				className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
				key={`link=${idx}`}
				href={navItem.link}
			>
				{hovered === idx && (
				<motion.div
					layoutId="hovered"
					className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-black-300 rounded-full"
				/>
				)}
				<span className="relative z-20">{navItem.name}</span>
			</Link>
			))}
		</div>
		<Link href="https://cal.com/fantastech" target="__blank">
			<button className="hidden md:block bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white">
				<span className="absolute inset-0 overflow-hidden rounded-full">
					<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(171,164,183,0.6)_0%,rgba(132,121,150,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
				</span>
				<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10 ">
					<span>
						Agenda una reunión
					</span>
				</div>
				<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple/0 via-indigo-500/90 to-purple/0 transition-opacity duration-500 group-hover:opacity-40" />
			</button>
	  	</Link>
	</motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
	const [open, setOpen] = useState(false);

	return (
	<>
	  <motion.div
		animate={{
		  borderRadius: open ? "4px" : "2rem",
		}}
		key={String(open)}
		className="flex relative flex-col lg:hidden w-full justify-between items-center bg-white dark:bg-black-100  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2 border border-neutral-100 dark:border-white/[0.2]"
	  >
		<div className="flex flex-row justify-between items-center w-full">
		  <Logo />
		  {open ? (
			<IconX
			  className="text-black dark:text-white"
			  onClick={() => setOpen(!open)}
			/>
		  ) : (
			<IconMenu2
			  className="text-black dark:text-white"
			  onClick={() => setOpen(!open)}
			/>
		  )}
		</div>

		<AnimatePresence>
		  {open && (
			<motion.div
			  initial={{
				opacity: 0,
			  }}
			  animate={{ opacity: 1 }}
			  exit={{ opacity: 0 }}
			  className="flex rounded-lg absolute top-20 bg-white dark:bg-black-100 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8 border border-neutral-100 dark:border-white/[0.2]"
			>
			  {navItems.map((navItem: any, idx: number) => (
				<Link
				  key={`link=${idx}`}
				  href={navItem.link}
				  className="relative text-neutral-600 dark:text-neutral-300"
				>
				  <motion.span className="block">{navItem.name} </motion.span>
				</Link>
			  ))}
			  {/* <button className="px-8 py-2 w-full rounded-lg bg-black dark:bg-white dark:text-black font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]">
				Agenda un reunión
			  </button> */}
			  <Link href="https://cal.com/fantastech" target="__blank" className="w-full">
				<button className="font-medium w-full bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-sm leading-6  text-white">
					<span className="absolute inset-0 overflow-hidden rounded-full">
						<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(171,164,183,0.6)_0%,rgba(132,121,150,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
					</span>
					<div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-2 px-8 ring-1 ring-white/10 justify-center ">
						<span>
							Agenda una reunión
						</span>
					</div>
					<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple/0 via-indigo-500/90 to-purple/0 transition-opacity duration-500 group-hover:opacity-40" />
				</button>
			 </Link>
			</motion.div>
		  )}
		</AnimatePresence>
	  </motion.div>
	</>
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
		width={150}
		height={100}
	  />
	  {/* <span className="font-medium text-black dark:text-white">Fantastech</span> */}
	</Link>
  );
};
