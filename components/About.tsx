'use client';
import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { AnimatedTooltip } from './ui/AnimatedTooltip';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <section id='about' className='bg-white dark:bg-black-100 py-20 w-full'>
        <div className='w-full px-11 md:px-20 lg:px-28'>
          Loading translations...
        </div>
      </section>
    );
  }

  const words = [
    t('about.pivot1'),
    t('about.pivot2'),
    t('about.pivot3'),
    t('about.pivot4'),
    t('about.pivot5')
  ];

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
              {t('about.title_p1')}
              <FlipWords words={words} /> <br />
              {t('about.title_p2')}
            </div>
            <div className='flex flex-col justify-center items-center md:items-start w-full'>
              <div className="flex flex-row items-center md:justify-start lg:justify-start justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
          
          <div className='flex flex-col justify-center items-start w-full sm:pr-16 md:pr-24'>
            <p className='text-base sm:text-lg md:text-xl lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 w-full text-center md:text-left'>
              {t('about.description1')}
              <br /><br />
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;