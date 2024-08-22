'use client'
import React from 'react'
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";



export function FeaturesSectionDemo() {
    const features = [
      {
        title: "Contáctanos",
        description:
          "Tu próximo gran proyecto empieza con una conversación. ¡Hablemos!",
        skeleton: <SkeletonOne />,
        className:
          "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
      },
      {
        title: "Trabaja con nosotros",
        description:
          "Únete a nuestro equipo y lleva tu carrera al siguiente nivel. ¡Consulta nuestras posiciones abiertas!",
        skeleton: <SkeletonTwo />,
        className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      },
    ];
    return (
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto ">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Tecnología sin límites para impulsar tu futuro
          </h4>
  
          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Desde la idea hasta la ejecución, en Fantastech convertimos tu visión en soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.
          </p>
        </div>
  
        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const FeatureCard = ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
        {children}
      </div>
    );
  };
  
  const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
      <p className=" max-w-5xl mx-auto text-center lg:text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
        {children}
      </p>
    );
  };
  
  const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
      <p
        className={cn(
          "text-sm md:text-base  max-w-4xl text-left mx-auto",
          "text-neutral-500 text-center font-normal dark:text-neutral-300",
          "text-center lg:text-left max-w-sm mx-0 md:text-sm my-2"
        )}
      >
        {children}
      </p>
    );
  };
  

  
  export const SkeletonOne = () => {
    return (
        <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
            <div className="flex flex-1 w-full h-full flex-col space-y-2 relative mt-4 lg:items-start items-center">
                <Link href="https://cal.com/fantastech" target="__blank">
                    <button className=" px-8 py-2 lg:py-4 rounded-lg relative bg-slate-700 text-white hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 hover:scale-105 mb-3">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">
                            Agenda una reunión
                        </span>
                    </button>
                </Link>
                <Link href="https://wa.me/50223117721" target="__blank">
                    <button className="px-[4.3rem] py-2 lg:py-4 rounded-lg bg-[#1ED760] text-white transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                        WhatsApp
                    </button>
                </Link>
            </div>
        </div>
    );
  };
  
  export const SkeletonTwo = () => {
    return (
      <div className="h-60 md:h-60  flex flex-col items-center lg:items-start relative bg-transparent dark:bg-transparent mt-4">
        <Link href="https://doc.clickup.com/9006076676/d/h/8ccvmr4-2417/eebc811d1ea7802" target="__blank">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>
                        Ver posiciones abiertas
                    </span>
                    <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
        </Link>

        <Globe className="absolute -right-40 md:-right-40 -bottom-80 md:-bottom-72" />
      </div>
    );
  };
  
  export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      let phi = 0;
  
      if (!canvasRef.current) return;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [45.46427, 9.18951], size: 0.05 },
          { location: [14.64072, -90.51327], size: 0.05 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1, transition: 'opacity 3s ease', }}
        className={className}
      />
    );
  };
  


export const Contact = () => {
  return (
    <section id='contact' className='bg-white dark:bg-black-100 py-20 w-full'>
        <FeaturesSectionDemo />
    </section>
  )
}





