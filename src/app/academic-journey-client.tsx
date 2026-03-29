'use client';

import { useState, useEffect } from 'react';
import { JourneyMilestone } from '@/app/journey-items';

export function AcademicJourneyClient() {
  const milestones = [
    {
      year: "2019",
      school: "NEW education school",
      description: "(Completed 10th)",
      logo: "/logos/new-education.png",
      color: "purple" as const,
      side: "left" as const,
    },
    {
      year: "2021",
      school: "j.c sha prkas heigh school",
      description: "(Completed 12th)",
      logo: "/logos/shah-prakash.jpg",
      color: "amber" as const,
      reverse: true,
      side: "right" as const,
    },
    {
      year: "2024",
      school: "L.J University",
      description: "(Completed BCA)",
      logo: "/logos/lj-university.png",
      color: "purple" as const,
      side: "left" as const,
    },
    {
      year: "Pursuing",
      school: "L.J University",
      description: "(Masters in IMCA)",
      logo: "/logos/lj-university.png",
      color: "green" as const,
      reverse: true,
      side: "right" as const,
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 px-4 h-auto md:h-[550px] overflow-visible">
      {/* Desktop Central Horizontal Line (md+) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-3 bg-gradient-to-r from-purple-500 via-amber-500 to-green-500 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.6)]" />

      {/* Mobile Central Vertical Line (hidden on md+) */}
      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-purple-500 via-amber-500 to-green-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] opacity-40" />

      {milestones.map((m, idx) => (
        <JourneyMilestone
          key={idx}
          {...m}
        />
      ))}
    </div>
  );
}
