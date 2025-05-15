"use client";

import { Timeline } from "@/components/ui/timeline";
import { ClipboardList, Users, UserCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "1. Needs Assessment",
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
              <p className="mb-8 font-normal text-base/6 dark:text-neutral-200 bg-gradient-to-r  p-6 rounded-lg shadow-inner">
                We begin by listening. Our team takes the time to understand your technical goals, 
                business context, team dynamics, and delivery expectations. This foundational step 
                ensures we align talent sourcing with your project's real needs.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2. Talent Sourcing",
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
              <p className="mb-8 font-normal text-base/6  p-6 rounded-lg shadow-inner">
                Once we understand the scope, we tap into our curated network of pre-vetted professionals. 
                Whether you need a full development squad or a niche expert, we identify the best fit in terms 
                of skills, availability, and work culture alignment.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "3. Selection & Onboarding",
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
                We support you in evaluating candidates through interviews and tech assessments. 
                Once the match is made, we manage a smooth onboarding process—ensuring the new 
                team members integrate seamlessly and start contributing quickly.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "4. Mission Control",
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
              <p className="mb-8 font-normal text-base/6 dark:text-neutral-200 bg-gradient-to-r  p-6 rounded-lg shadow-inner">
                Our engagement doesn't stop at hiring. You'll benefit from ongoing support, project oversight, 
                and strategic check-ins led by our technical leaders—ensuring your implementation stays on 
                track, agile, and future-proof.
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
