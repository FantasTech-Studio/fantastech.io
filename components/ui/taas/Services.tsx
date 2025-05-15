"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import {
    IconCode,
    IconZoomCode,
    IconDirections,
    IconCloud,
    IconAi
} from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { useLanguage } from '@/context/LanguageContext';

export function GlowingEffectDemo() {
  const { t } = useLanguage();
  
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            {t('taas.services.title')}
          </h4>
  
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto mb-12 text-neutral-500 text-center font-normal dark:text-neutral-300">
            {t('taas.services.description')}
          </p>
        </div>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<IconCode className="h-4 w-4 text-black dark:text-neutral-400" />}
        title={t('taas.services.developer.title')}
        description={t('taas.services.developer.description')}
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<IconZoomCode className="h-4 w-4 text-black dark:text-neutral-400" />}
        title={t('taas.services.qa.title')}
        description={t('taas.services.qa.description')}
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<IconDirections className="h-4 w-4 text-black dark:text-neutral-400" />}
        title={t('taas.services.pm.title')}
        description={t('taas.services.pm.description')}
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<IconCloud className="h-4 w-4 text-black dark:text-neutral-400" />}
        title={t('taas.services.cloud.title')}
        description={t('taas.services.cloud.description')}
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<IconAi className="h-4 w-4 text-black dark:text-neutral-400" />}
        title={t('taas.services.ai.title')}
        description={t('taas.services.ai.description')}
      />
    </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
