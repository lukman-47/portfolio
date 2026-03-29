'use client';

import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface MilestoneProps {
  year: string;
  school: string;
  description: string;
  logo: string;
  color: 'purple' | 'amber' | 'green';
  reverse?: boolean; // Controls top/bottom on Desktop
  side: "left" | "right"; // Controls left/right on Mobile
}

export function JourneyMilestone({ year, school, description, logo, color, reverse, side }: MilestoneProps) {
  const [showLogo, setShowLogo] = useState(false);

  const colors = {
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-600',
      bg: 'bg-purple-500',
      from: 'from-purple-500',
      to: 'to-purple-500/0',
      muted: 'text-purple-200'
    },
    amber: {
      border: 'border-amber-500',
      text: 'text-amber-600',
      bg: 'bg-amber-500',
      from: 'from-amber-500',
      to: 'to-amber-500/0',
      muted: 'text-amber-100'
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      bg: 'bg-green-500',
      from: 'from-green-500',
      to: 'to-green-500/0',
      muted: 'text-green-100'
    },
  };

  const gradient = reverse ? 'bg-gradient-to-t' : 'bg-gradient-to-b';
  const mobileLayout = side === "left" ? "flex-row-reverse" : "flex-row";

  return (
    <div className={`relative flex ${mobileLayout} md:flex-col items-center justify-center w-full md:w-auto md:min-w-[220px] md:h-full md:flex-1 group cursor-default transition-all duration-300 z-10`}>
      {/* Circle / Bead on the String */}
      <div 
        className={`z-50 bg-white p-2 rounded-full border-4 ${colors[color].border} shadow-2xl relative h-16 w-16 md:h-24 md:w-24 flex items-center justify-center transition-all duration-500 group-hover:scale-110 cursor-pointer`}
        onClick={() => setShowLogo(!showLogo)}
      >
        <GraduationCap className={`w-8 h-8 md:w-12 md:h-12 absolute z-0 transition-opacity duration-500 ${colors[color].muted} ${showLogo ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
        <img 
          src={logo} 
          alt={school} 
          className={`w-12 h-12 md:w-16 md:h-16 object-contain rounded-full transition-all duration-500 relative z-10 bg-white ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 md:group-hover:opacity-100 md:group-hover:scale-100'}`} 
        />
      </div>

      {/* Text & Connector Wrapper */}
      <div 
        className={`z-20 flex flex-col items-center cursor-pointer select-none transition-all duration-500 
          ${reverse 
            ? 'md:absolute md:bottom-[60%] md:flex-col-reverse justify-end' 
            : 'md:absolute md:top-[60%] md:flex-col justify-start'
          }
          w-1/2 md:w-64 ${side === 'left' ? 'text-right pr-16 md:pr-0' : 'text-left pl-16 md:pl-0'}`}
        onClick={() => setShowLogo(!showLogo)}
      >
        {/* Connector Line - Hidden on Mobile */}
        <div className={`hidden md:block w-1.5 h-16 ${gradient} ${colors[color].from} to-transparent opacity-40 group-hover:opacity-100 group-hover:h-24 transition-all duration-500`} />
        
        {/* Text Content */}
        <div className={`space-y-1 ${reverse ? 'md:mb-4' : 'md:mt-4'} md:text-center`}>
          <time className={`text-base font-bold ${colors[color].text}`}>{year}</time>
          <h3 className={`text-xl font-black text-slate-900 leading-tight transition-colors group-hover:${colors[color].text}`}>
            {school}
          </h3>
          <p className="text-sm text-slate-500 font-bold uppercase tracking-tight leading-none overflow-visible">{description}</p>
        </div>
      </div>
    </div>
  );
}
