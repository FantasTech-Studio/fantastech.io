"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useTranslations } from 'next-intl';

export function CTAWithBackgroundNoise() {
  const t = useTranslations();

  return (
    <section id="contact-section" className="w-full grid grid-cols-1 md:grid-cols-2 my-20 md:my-40 justify-start relative z-20 max-w-7xl mx-auto bg-gradient-to-br from-slate-800 dark:from-black-300 to-black-100 sm:rounded-2xl overflow-hidden">
      <div className="absolute -top-px right-10 md:right-60 bg-gradient-to-r from-transparent via-purple-500 h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -top-px right-10 md:right-40 bg-gradient-to-r from-transparent via-indigo-500 h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -top-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30"></div>
      <div
        className="absolute inset-0 w-full h-full opacity-10 bg-noise [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/taas/noise.webp)",
          backgroundSize: "30%",
        }}
      ></div>
      <div className="relative sm:rounded-2xl overflow-hidden px-6 md:px-8 ">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
          style={{
            mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
          }}
        ></div>

        <div className="relative px-0 py-10 sm:px-10 sm:pt-20 sm:pb-10 lg:px-10">
          <h2 className="text-left text-balance  text-2xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            {t('taas.contact.title')}
          </h2>
          <p className="mt-8 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {t('taas.contact.description')}
          </p>

          <div className="flex flex-col gap-4 w-full mx-auto bg-transparent dark:bg-transparent h-full">
            <div className="flex flex-col md:flex-row md:gap-4 w-full">
              <Link href="https://cal.com/fantastech" target="__blank" className="w-full md:flex-1">
                <button className="mt-8 w-full flex space-x-2 items-center justify-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
                  <span>{t('taas.contact.schedule_meeting')}</span>
                  <HiArrowRight className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
                </button>
              </Link>
              <Link href="https://wa.me/50223117721" target="__blank" className="w-full md:flex-1">
                <button className="mt-4 md:mt-8 w-full flex space-x-2 items-center justify-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-[#4cfc89] to-[#1ED760] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
                  <span>{t('taas.contact.whatsapp')}</span>
                </button>
              </Link>
            </div>
            <div className="w-full">
              <Link href="mailto:info@fantastech.io" target="__blank" className="block w-full">
                <button className=" w-full flex space-x-2 items-center justify-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-purple-500 to-purple-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
                  <span className="group-hover:opacity-0 transition-opacity duration-200">info@fantastech.io</span>
                  <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-200 text-2xl">✉️ 🚀</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full flex gap-4 w-full overflow-hidden md:h-full">
        <Image
          src="/taas/ft_pattern.svg"
          alt="cta-1"
          width="700"
          height="500"
          className="w-full h-full object-cover object-center md:rounded-none mt-4 md:mt-0"
          style={{ minHeight: '100%' }}
        />
      </div>
      <div className="absolute -bottom-px right-10 md:right-60 bg-gradient-to-r from-transparent via-purple-500 h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -bottom-px right-10 md:right-40 bg-gradient-to-r from-transparent via-indigo-500 h-px to-transparent w-1/2 z-30"></div>
      <div className="absolute -bottom-px right-10 md:right-80 bg-gradient-to-r from-transparent via-sky-500 h-px to-transparent w-1/2 z-30"></div>
    </section>
  );
}
