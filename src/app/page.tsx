import React from 'react';
import Link from 'next/link';
import { ExternalLink, Award, GraduationCap, Calendar, ShieldCheck, SearchCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AcademicJourneyClient } from '@/app/academic-journey-client';
import ContactForm from '@/app/contact-form';
import DynamicIsland from '@/app/hero-buttons';
import ScrollToTop from '@/app/scroll-to-top';
import ProfileFlipper from '@/app/profile-flipper';

export const revalidate = 0; // Disable caching for the dynamic data

export default async function Portfolio() {
  const fallbackSkills = [
    { _id: '1', name: 'Front-End' },
    { _id: '2', name: 'Back-End Routing' },
    { _id: '3', name: 'Data Visualization' },
    { _id: '4', name: 'SQL' },
    { _id: '5', name: 'MongoDB' },
    { _id: '6', name: 'Power BI' },
    { _id: '7', name: 'Python' },
    { _id: '8', name: 'Cyber Security' },
    { _id: '9', name: 'Digital Forensics' },
    { _id: '10', name: 'LLM & AI' },
  ];

  const fallbackProjects = [
    {
      _id: '1',
      title: 'AI Car Marketplace',
      description: 'A premium marketplace platform featuring AI-powered search and recommendations. Built with Next.js, TailwindCSS, Supabase, and Shadcn UI.',
      link: '#',
      image: '/ai-car.png'
    },
    {
      _id: '2',
      title: 'AI Blog Writing Assistant',
      description: 'Streamlined content creation using LLMs. Features Streamlit UI, Hugging Face models, Groq API, and Whisper API for voice-to-text input.',
      link: '#',
      image: '/ai-assistant.png'
    },
    {
      _id: '3',
      title: 'VISION 2.0 - Doctor Booking',
      description: 'A comprehensive healthcare appointment system. Developed using Laravel, phpMyAdmin, and custom HTML/CSS with automated mail notifications.',
      link: '#',
      image: '/doctor-vision.png'
    },
    {
      _id: '4',
      title: 'WEBSTORE - Food Hub',
      description: 'A premium online food store and delivery platform. Features a vibrant dish showcase, secure cart, and streamlined order management.',
      link: '#',
      image: '/web-store.png'
    },
    {
      _id: '5',
      title: 'Tour & Travel Hub',
      description: 'The ultimate travel companion for explorers. Features destination guides and booking tools built with Laravel.',
      link: '#',
      image: '/travel-hub.png'
    },
    {
      _id: '6',
      title: 'MERN Task Management',
      description: 'High-performance real-time task tracking platform with collaborative features. Full-stack implementation using the MERN stack.',
      link: '#',
      image: '/task-manager.png'
    },
  ];

  let skills = fallbackSkills as any;
  let certificates = [] as any;
  let projects = fallbackProjects as any;

  // Split projects into two columns
  const leftProjects = projects.filter((_: any, i: number) => i % 2 === 0);
  const rightProjects = projects.filter((_: any, i: number) => i % 2 !== 0);

  return (
    <div id="top" className="min-h-screen bg-[#05071a] text-slate-50 relative overflow-hidden scroll-smooth">
      {/* Cinematic Milky Way Night Sky */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* === LAYER 1: Vibrant Galaxy Gradients === */}
        {/* Deep blue left atmosphere */}
        <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[80%] bg-blue-800/35 blur-[200px] rounded-full" />
        {/* Milky Way purple core - center (slightly reduced so stars show through) */}
        <div className="absolute top-[-10%] left-[20%] w-[65%] h-[75%] bg-purple-700/30 blur-[180px] rounded-full" />
        {/* Magenta/violet nebula accent */}
        <div className="absolute top-[5%] right-[-5%] w-[45%] h-[55%] bg-violet-600/25 blur-[160px] rounded-full" />
        {/* Warm amber/orange horizon glow - bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[55%] bg-amber-600/20 blur-[180px] rounded-full" />
        {/* Warm orange bottom left */}
        <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[40%] bg-orange-700/15 blur-[160px] rounded-full" />

        {/* === DEDICATED CENTER HERO STAR LAYER === */}
        {/* Guarantees bright stars are visible in the center area */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => {
            const sz = Math.random() > 0.8 ? 2.5 : Math.random() > 0.5 ? 1.5 : 1;
            const isSparkle = sz === 2.5;
            return (
              <div
                key={`hero-star-${i}`}
                className="absolute animate-pulse"
                style={{
                  // Focus on center + spread to edges
                  top: `${5 + Math.random() * 55}%`,
                  left: `${5 + Math.random() * 90}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              >
                <div
                  className="rounded-full bg-white"
                  style={{
                    width: `${sz}px`,
                    height: `${sz}px`,
                    boxShadow: isSparkle
                      ? '0 0 12px 3px rgba(255,255,255,0.9), 0 0 25px 6px rgba(200,210,255,0.5)'
                      : `0 0 6px 1px rgba(255,255,255,0.6)`,
                  }}
                />
                {/* Cross sparkle spikes for brightest stars */}
                {isSparkle && (
                  <>
                    <div className="absolute top-[1px] left-[-10px] w-[24px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" style={{ marginTop: `${sz / 2 - 1}px` }} />
                    <div className="absolute left-[1px] top-[-10px] w-[1px] h-[24px] bg-gradient-to-b from-transparent via-white/80 to-transparent" style={{ marginLeft: `${sz / 2 - 1}px` }} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* === LAYER 2: Milky Way Galaxy Band (diagonal dense star cluster) === */}
        <div className="absolute inset-0 rotate-[28deg] scale-[1.8] opacity-60">
          {[...Array(200)].map((_, i) => {
            const band = Math.random();
            const inCore = band > 0.55;
            return (
              <div
                key={`mw-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: inCore ? `${Math.random() * 1.5 + 0.5}px` : `${Math.random() + 0.3}px`,
                  height: inCore ? `${Math.random() * 1.5 + 0.5}px` : `${Math.random() + 0.3}px`,
                  top: `${35 + (inCore ? Math.random() * 18 - 9 : Math.random() * 35 - 17)}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: inCore ? 0.6 + Math.random() * 0.4 : 0.2 + Math.random() * 0.4,
                  boxShadow: inCore && Math.random() > 0.7 ? '0 0 4px 1px rgba(220,200,255,0.5)' : 'none',
                }}
              />
            );
          })}
        </div>

        {/* === LAYER 3: Scattered Star Field === */}
        <div className="absolute inset-0">
          {[...Array(180)].map((_, i) => {
            const r = Math.random();
            const sz = r < 0.65 ? 1 : r < 0.88 ? 1.5 : r < 0.97 ? 2.5 : 3.5;
            const op = r < 0.65 ? 0.3 + Math.random() * 0.35 : 0.65 + Math.random() * 0.35;
            const glow = r > 0.88;
            return (
              <div
                key={`sf-${i}`}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: `${sz}px`,
                  height: `${sz}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: op,
                  animationDelay: `${Math.random() * 7}s`,
                  animationDuration: `${2.5 + Math.random() * 5}s`,
                  boxShadow: glow ? `0 0 ${sz * 5}px ${sz}px rgba(200,210,255,0.5)` : 'none',
                }}
              />
            );
          })}
        </div>

        {/* === LAYER 4: Bright Starburst Sparkle Stars === */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <div
              key={`sb-${i}`}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 85}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            >
              <div className="relative" style={{ width: '6px', height: '6px' }}>
                {/* Outer soft bloom */}
                <div className="absolute inset-[-10px] rounded-full bg-white/10 blur-sm" />
                {/* Core bright dot */}
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.8),0_0_30px_8px_rgba(180,200,255,0.35)]" />
                {/* Horizontal spike */}
                <div className="absolute top-[2px] left-[-12px] w-[30px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                {/* Vertical spike */}
                <div className="absolute top-[-12px] left-[2px] w-[2px] h-[30px] bg-gradient-to-b from-transparent via-white/70 to-transparent" />
                {/* Diagonal spike 1 */}
                <div className="absolute top-[-8px] left-[-8px] w-[22px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45" />
                {/* Diagonal spike 2 */}
                <div className="absolute top-[-8px] left-[-8px] w-[22px] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* === LAYER 5: Shooting Stars with Starburst Heads & Long Trails === */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(28)].map((_, i) => (
            <div
              key={`meteor-${i}`}
              className="absolute animate-shooting-star"
              style={{
                top: `${Math.random() * 65}%`,
                right: `-300px`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${1.2 + Math.random() * 1.8}s`,
                opacity: 0,
              }}
            >
              <div className="relative transform rotate-[-45deg]">
                {/* === Long outer white trail === */}
                <div
                  className="bg-gradient-to-t from-transparent via-white/25 to-white/70"
                  style={{ width: '1px', height: `${220 + Math.random() * 150}px` }}
                />
                {/* === Bright inner cyan core trail === */}
                <div
                  className="absolute top-0 left-[-1px] bg-gradient-to-t from-transparent via-cyan-200/60 to-white"
                  style={{ width: '3px', height: `${80 + Math.random() * 60}px` }}
                />
                {/* === Starburst Head: outer bloom === */}
                <div className="absolute top-[-4px] left-[-12px] w-[26px] h-[26px] rounded-full bg-white/10 shadow-[0_0_40px_18px_rgba(180,230,255,0.35)] blur-sm" />
                {/* === Starburst Head: mid glow === */}
                <div className="absolute top-[-1px] left-[-6px] w-[14px] h-[14px] rounded-full bg-white/50 shadow-[0_0_20px_8px_rgba(255,255,255,0.7)]" />
                {/* === Starburst Head: bright core === */}
                <div className="absolute top-[2px] left-[-1px] w-[5px] h-[5px] rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,1)]" />
                {/* === Sparkle horizontal spike === */}
                <div className="absolute top-[3.5px] left-[-14px] w-[30px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                {/* === Sparkle vertical spike === */}
                <div className="absolute top-[-10px] left-[1.5px] w-[1px] h-[22px] bg-gradient-to-b from-transparent via-white/80 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* === LAYER 6: Shooting Stars targeted through CENTER HERO AREA === */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <div
              key={`center-meteor-${i}`}
              className="absolute animate-shooting-star"
              style={{
                top: `${2 + i * 4}%`,   // span from top 2% down to ~46% — covers full hero
                right: `-200px`,
                animationDelay: `${i * 2.5}s`,
                animationDuration: `${1.8 + (i % 3) * 0.6}s`,
                opacity: 0,
              }}
            >
              <div className="relative transform rotate-[-45deg]">
                {/* Long outer trail */}
                <div className="bg-gradient-to-t from-transparent via-white/30 to-white/80" style={{ width: '1px', height: '200px' }} />
                {/* Bright inner core */}
                <div className="absolute top-0 left-[-1px] bg-gradient-to-t from-transparent via-cyan-100/50 to-white" style={{ width: '2.5px', height: '70px' }} />
                {/* Starburst outer bloom */}
                <div className="absolute top-[-3px] left-[-10px] w-[22px] h-[22px] rounded-full bg-white/10 shadow-[0_0_35px_15px_rgba(180,230,255,0.4)] blur-sm" />
                {/* Mid glow */}
                <div className="absolute top-[0px] left-[-5px] w-[12px] h-[12px] rounded-full bg-white/50 shadow-[0_0_18px_7px_rgba(255,255,255,0.7)]" />
                {/* Bright core */}
                <div className="absolute top-[2px] left-[-1px] w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_8px_3px_rgba(255,255,255,1)]" />
                {/* H-spike */}
                <div className="absolute top-[3px] left-[-12px] w-[26px] h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                {/* V-spike */}
                <div className="absolute top-[-9px] left-[1px] w-[1px] h-[20px] bg-gradient-to-b from-transparent via-white/80 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Royal Shimmer CSS & Premium Text Logo */}
      <style>{`
        @keyframes royal-shine {
          to { background-position: 200% center; }
        }
        .text-royal-shine {
          background: linear-gradient(
            to right,
            #d8b4fe 0%,
            #a855f7 20%,
            #fbbf24 40%,
            #fef08a 50%,
            #fbbf24 60%,
            #a855f7 80%,
            #d8b4fe 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: royal-shine 4s linear infinite;
        }
      `}</style>
      <div className="absolute top-6 left-4 md:top-8 md:left-8 z-[110] select-none">
        <Link href="#top" className="group relative block px-3 py-2">
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-amber-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
          
          <div className="relative flex flex-col">
            <h1 className="text-[22px] md:text-3xl font-black tracking-tighter whitespace-nowrap flex items-center">
              {/* LUKMAN with continuous royal shine */}
              <span className="uppercase text-royal-shine drop-shadow-[0_2px_15px_rgba(251,191,36,0.3)] group-hover:scale-105 transition-transform duration-500 origin-left">
                LUKMAN
              </span>
              {/* SHAIKH in elegant serif gold */}
              <span className="ml-2 font-serif italic text-lg md:text-[26px] text-amber-200/90 font-medium tracking-wide group-hover:scale-105 transition-transform duration-500 delay-100 origin-left drop-shadow-md">
                Shaikh
              </span>
            </h1>
            {/* Animated Royal Underline */}
            <div className="h-[2px] w-0 bg-gradient-to-r from-amber-400 via-purple-500 to-transparent group-hover:w-full transition-all duration-[800ms] ease-out mt-1 rounded-full opacity-80 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          </div>
        </Link>
      </div>

      {/* The Dynamic Island now serves as the primary navigation bar */}
      <div className="fixed top-4 left-0 right-0 z-[100] px-4 pointer-events-none flex justify-center">
        <div className="pointer-events-auto w-full flex justify-center">
          <DynamicIsland />
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-24 space-y-48">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-1000 mt-20 md:mt-24">
          <ProfileFlipper />
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300">Lukman</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Frontend Developer specializing in the best practices of creating GAN AI models using LLMs. Dedicated to building responsive web applications and exploring the future of Generative AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
            {/* Prominent CV Download Button */}
            <div className="relative group">
              {/* Pulsing outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              <Link
                href="https://drive.google.com/file/d/1CXJZl26K-MkVo2i1uziHafAiyPIGrQwa/view?usp=sharing"
                download
                className="relative flex items-center gap-3 px-8 py-4 bg-slate-950 rounded-full font-black text-white border border-white/20 hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 shadow-2xl z-10"
                title="Download CV"
              >
                {/* Icon */}
                <svg className="w-5 h-5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-base tracking-widest uppercase">Download CV</span>
              </Link>
            </div>
          </div>
        </section>
        <section id="journey" className="space-y-12 max-w-6xl mx-auto reveal animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both scroll-mt-32">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Academic Journey</h2>
            <p className="text-slate-400 font-medium">My path of learning and growth.</p>
          </div>

          <AcademicJourneyClient />
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 max-w-5xl mx-auto reveal animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both scroll-mt-32">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Technical Expertise</h2>
            <p className="text-slate-400 font-medium">Technologies and paradigms I specialize in.</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill: any) => (
              <Badge key={skill._id.toString()} variant="outline" className="px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-slate-900 to-slate-800 text-slate-100 border border-purple-500/30 hover:border-amber-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] cursor-default font-bold tracking-wide">
                {skill.name}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-16 reveal animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both scroll-mt-32 px-4 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-white text-center leading-tight">
              <span className="h-px w-12 bg-purple-500 hidden md:block"></span>
              Featured Projects
              <span className="h-px w-12 bg-purple-500 hidden md:block"></span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">Some of my most impactful works.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-12 lg:space-y-24">
              {leftProjects.map((project: any) => (
                <Card key={project._id.toString()} className="group border-none shadow-none bg-transparent hover:transform-none transition-all relative">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/3] group-hover:shadow-[0_30px_60px_-15px_rgba(147,51,234,0.3)] transition-all duration-500 border-2 border-slate-700 group-hover:border-purple-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.image ? (
                      <div className="absolute inset-0 bg-cover bg-top transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${project.image})` }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-2xl bg-slate-800 shadow-lg flex items-center justify-center overflow-hidden border-2 border-slate-700 relative">
                          <div className="absolute inset-0 bg-slate-900 opacity-50" />
                          <div className="z-10 text-center p-6">
                            <div className="w-16 h-16 bg-purple-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                              <ExternalLink className="text-purple-400" size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Permanent Premium Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter drop-shadow-lg">{project.title}</h3>
                      <p className="text-slate-300 text-sm font-medium opacity-80 mt-1 line-clamp-1">{project.description}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6 px-0 pb-0">
                    <div className="flex items-center justify-between gap-4">
                      {project.link && (
                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-slate-100 font-black hover:gap-4 transition-all duration-300 group/btn">
                          EXPLORE PROJECT <ExternalLink size={16} className="group-hover/btn:text-purple-400" />
                        </Link>
                      )}
                      <div className="h-px flex-1 bg-slate-800" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12 lg:space-y-24 lg:mt-32">
              {rightProjects.map((project: any) => (
                <Card key={project._id.toString()} className="group border-none shadow-none bg-transparent relative">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/3] group-hover:shadow-[0_30px_60px_-15px_rgba(147,51,234,0.3)] transition-all duration-500 border-2 border-slate-700 group-hover:border-purple-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {project.image ? (
                      <div className="absolute inset-0 bg-cover bg-top transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${project.image})` }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-2xl bg-slate-800 shadow-lg flex items-center justify-center overflow-hidden border-2 border-slate-700 relative">
                          <div className="absolute inset-0 bg-slate-900 opacity-50" />
                          <div className="z-10 text-center p-6">
                            <div className="w-16 h-16 bg-purple-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                              <ExternalLink className="text-purple-400" size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Permanent Premium Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter drop-shadow-lg">{project.title}</h3>
                      <p className="text-slate-300 text-sm font-medium opacity-80 mt-1 line-clamp-1">{project.description}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6 px-0 pb-0">
                    <div className="flex items-center justify-between gap-4">
                      {project.link && (
                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-slate-100 font-black hover:gap-4 transition-all duration-300 group/btn">
                          EXPLORE PROJECT <ExternalLink size={16} className="group-hover/btn:text-purple-400" />
                        </Link>
                      )}
                      <div className="h-px flex-1 bg-slate-800" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="space-y-12 reveal animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both scroll-mt-32 max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-white text-center leading-tight">
              <Award className="text-purple-500 mb-1 md:mb-0" size={36} />
              Professional Certifications
            </h2>
            <p className="text-lg text-slate-400 font-medium italic">Validated expertise across major cloud and AI platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.length > 0 ? certificates.map((cert: any) => (
              <Card key={cert._id.toString()} className="group overflow-hidden bg-slate-900/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 border-2 border-slate-800 relative hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                {cert.image && (
                  <div className="h-48 bg-muted w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${cert.image})` }} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                  </div>
                )}
                <CardHeader className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={`px-4 py-1.5 rounded-full border-none font-bold uppercase tracking-widest text-[10px] ${cert.provider?.toLowerCase().includes('coursera') ? 'bg-blue-600 text-white' :
                        cert.provider?.toLowerCase().includes('kaggle') ? 'bg-sky-500 text-white' :
                          'bg-amber-500 text-white'
                      }`}>
                      {cert.provider}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-black leading-tight group-hover:underline transition-all underline-offset-4 decoration-amber-500/30 font-serif italic">{cert.name}</CardTitle>
                </CardHeader>
              </Card>
            )) : (
              // User's Real Certificates
              <>
                {[
                  // 1. Log into Coursera/Kaggle -> Go to Accomplishments -> Copy the 'Share' or 'Verification' link
                  { name: 'Python Data Structures', provider: 'Michigan University', color: 'bg-blue-700', link: 'https://coursera.org/share/b234146483447f0cd0ff2f0929517815' },
                  { name: 'Foundations of UX Design', provider: 'Google', color: 'bg-red-500', link: 'https://coursera.org/share/39338fd2daf36ab567c01be61902ac50' },
                  { name: 'Data Visualization & Tableau', provider: 'Duke University', color: 'bg-blue-900', link: 'https://coursera.org/share/3ab1383c19dd087dd044c1fa0de71915' },
                  { name: 'Introduction to HTML5', provider: 'Michigan University', color: 'bg-blue-700', link: 'https://coursera.org/share/d11a2d4b55316da759e3540ba71ed5e6' },
                  { name: 'Interactivity with JavaScript', provider: 'Michigan University', color: 'bg-blue-700', link: 'https://coursera.org/share/26d3011f65d772d7863fda01f9825e40' },
                  { name: 'Agentic AI Agent', provider: 'Kaggle', color: 'bg-sky-500', link: 'https://www.kaggle.com/learn/certification/agentic-ai' }
                ].map((cert, index) => (
                  <Link key={index} href={cert.link} target="_blank" className="block group">
                    <Card className="group overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-500 border border-white/10 hover:border-white/25 relative hover:-translate-y-2 h-full">
                      <div className={`absolute top-0 left-0 w-1 h-full ${cert.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`} />
                      <CardHeader className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <Badge className={`px-4 py-1.5 rounded-full border-none font-bold uppercase tracking-widest text-[10px] text-white ${cert.color}`}>
                            {cert.provider}
                          </Badge>
                          <Award className={`opacity-20 group-hover:opacity-100 transition-opacity ${cert.color.replace('bg-', 'text-')}`} size={24} />
                        </div>
                        <CardTitle className="text-xl font-black leading-tight group-hover:underline transition-all underline-offset-8 decoration-white/20 font-serif italic text-white">
                          {cert.name}
                        </CardTitle>
                      </CardHeader>
                      <div className="px-8 pb-8">
                        <div className="flex items-center text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors uppercase tracking-widest gap-2">
                          Verify Credential <ExternalLink size={12} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-8 max-w-md mx-auto relative pb-20 scroll-mt-32">
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 rounded-full" />
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Let's Connect</h2>
            <p className="text-slate-400">Feel free to reach out to me for any project or collaboration.</p>
          </div>
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl">
            <CardContent className="pt-6">
              <ContactForm />
            </CardContent>
          </Card>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm text-slate-500">© 2026 Lukman Shaikh. All rights reserved.</p>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}
