"use client";

import { Timeline } from "@/components/ui/timeline";
import { ClipboardList, Users, UserCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from '@/context/LanguageContext';

export function TimelineDemo() {
  const { t } = useLanguage();
  
  const data = [
    {
      title: t('taas.process.steps.assessment.title'),
      icon: <ClipboardList className="w-8 h-8 text-blue-500" />,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="mb-8 font-normal text-base/6 dark:text-neutral-200 bg-gradient-to-r p-6 rounded-lg shadow-inner">
                {t('taas.process.steps.assessment.description')}
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: t('taas.process.steps.sourcing.title'),
      icon: <Users className="w-8 h-8 text-purple-500" />,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="mb-8 font-normal text-base/6 p-6 rounded-lg shadow-inner">
                {t('taas.process.steps.sourcing.description')}
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: t('taas.process.steps.selection.title'),
      icon: <UserCheck className="w-8 h-8 text-green-500" />,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="mb-8 font-normal text-base/6 dark:text-neutral-200 bg-gradient-to-r p-6 rounded-lg shadow-inner">
                {t('taas.process.steps.selection.description')}
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: t('taas.process.steps.control.title'),
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="mb-8 font-normal text-base/6 dark:text-neutral-200 bg-gradient-to-r p-6 rounded-lg shadow-inner">
                {t('taas.process.steps.control.description')}
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
