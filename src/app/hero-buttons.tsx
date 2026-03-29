'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, Calendar, ShieldCheck, ExternalLink, Award } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function DynamicIsland() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const container = {
    hidden: { opacity: 0, scale: 0.8, y: -100 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  const wiggleAnimation = {
    rotate: [0, -10, 10, -10, 0],
    transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" as any }
  };

  const navItems = [
    { name: 'Journey', id: '#journey', icon: <Calendar className="w-5 h-5 flex-shrink-0" /> },
    { name: 'Skills', id: '#skills', icon: <ShieldCheck className="w-5 h-5 flex-shrink-0" /> },
    { name: 'Projects', id: '#projects', icon: <ExternalLink className="w-5 h-5 flex-shrink-0" /> },
    { name: 'Certificates', id: '#certificates', icon: <Award className="w-5 h-5 flex-shrink-0" /> },
    { name: 'Contact', id: '#contact', icon: <MailIcon className="w-5 h-5 flex-shrink-0" /> },
  ];

  return (
    <div className="w-full flex justify-center py-6 h-[70px] md:h-[100px]">
      <motion.div 
        variants={container}
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        className={`flex items-center justify-center gap-1.5 md:gap-14 p-1.5 md:p-4 px-2 md:px-20 bg-slate-900/95 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl transition-all duration-500 max-w-[98vw] md:max-w-none ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Navigation Section */}
        <div className="flex items-center gap-1.5 md:gap-10 pr-1.5 md:pr-10 border-r border-white/10">
          {navItems.map((nav, idx) => (
            <motion.div key={nav.name} variants={item} whileHover={{ scale: 1.2, y: -4 }}>
              <Link href={nav.id} className="flex flex-col items-center gap-1 group relative">
                <motion.div animate={wiggleAnimation} transition={{ delay: idx * 0.1 }}>
                  <div className="text-white/60 group-hover:text-purple-400 transition-colors">
                    {/* Tiny icons for mobile to ensure fit */}
                    <div className="scale-[0.55] md:scale-100">
                      {nav.icon}
                    </div>
                  </div>
                </motion.div>
                <span className="hidden md:block text-[10px] font-bold text-white/40 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute -bottom-4 truncate w-max px-2">
                  {nav.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Section */}
        <div className="flex items-center gap-1.5 md:gap-10">
          <motion.div variants={item} whileHover={{ scale: 1.2, y: -4 }}>
            <Link href="https://github.com/lukman-47" target="_blank" className="flex flex-col items-center gap-1 group relative">
              <motion.div animate={wiggleAnimation}>
                <div className="scale-[0.55] md:scale-100">
                  <GithubIcon className="w-5 h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.div>
              <span className="hidden md:block text-[10px] font-bold text-white/40 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute -bottom-4">GitHub</span>
            </Link>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.2, y: -4 }}>
            <Link href="https://www.linkedin.com/in/lukman47/" target="_blank" className="flex flex-col items-center gap-1 group relative">
              <motion.div animate={wiggleAnimation} transition={{ delay: 0.2 }}>
                <div className="scale-[0.55] md:scale-100">
                  <LinkedinIcon className="w-5 h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.div>
              <span className="hidden md:block text-[10px] font-bold text-white/40 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute -bottom-4">LinkedIn</span>
            </Link>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.2, y: -4 }}>
            <Link href="mailto:lukmanshaikh.official@gmail.com" className="flex flex-col items-center gap-1 group relative">
              <motion.div animate={wiggleAnimation} transition={{ delay: 0.4 }}>
                <div className="scale-[0.55] md:scale-100">
                  <MailIcon className="w-5 h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.div>
              <span className="hidden md:block text-[10px] font-bold text-white/40 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute -bottom-4">Email</span>
            </Link>
          </motion.div>

          <motion.div variants={item} whileHover={{ scale: 1.2, y: -4 }}>
            <Link href="https://www.instagram.com/lukman_shaikh_47/" target="_blank" className="flex flex-col items-center gap-1 group relative">
              <motion.div animate={wiggleAnimation} transition={{ delay: 0.6 }}>
                <div className="scale-[0.55] md:scale-100">
                  <InstagramIcon className="w-5 h-5 text-white/60 group-hover:text-purple-400 transition-colors" />
                </div>
              </motion.div>
              <span className="hidden md:block text-[10px] font-bold text-white/40 group-hover:text-purple-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute -bottom-4">Instagram</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
