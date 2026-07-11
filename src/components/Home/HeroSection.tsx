"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Cctv, ShieldAlert, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Cctv className="mb-4 h-12 w-12 text-red-600" strokeWidth={1.5} />,
    title: 'Premium Indoor\nCameras'
  },
  {
    icon: <ShieldAlert className="mb-4 h-12 w-12 text-red-600" strokeWidth={1.5} />,
    title: '24/7 Quick Alarms\nResponse'
  },
  {
    icon: <ShieldCheck className="mb-4 h-12 w-12 text-red-600" strokeWidth={1.5} />,
    title: 'Amazing Security\nSystems'
  }
];

// Advanced animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const springReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 40, damping: 12 } 
  }
};

const imageReveal = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
  }
};

export default function HeroSection() {
  return (
    // Set root to white (or transparent if your page body is white) so the overlap is visible
    <div className="bg-white pb-20"> 
      
      {/* 1. DARK HERO SECTION */}
      <div className="relative flex flex-col bg-slate-900 pb-24 lg:pb-32">
        
        {/* Dark Background Control Room Image */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image 
              src="/images/hero-background.png" 
              alt="Security Control Room Background" 
              fill 
              priority
              className="object-cover" 
            />
          </motion.div>
        </div>

        {/* Main Hero Content - Grid Layout */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 pt-40 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
        >
          {/* Left Column: Text & CTAs */}
          <div className="max-w-2xl">
            <motion.div 
              variants={springReveal} 
              className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-300"
            >
              <Cctv size={18} className="text-red-500" /> Welcome Solutions
            </motion.div>
            
            <motion.h1 
              variants={springReveal} 
              className="text-5xl font-extrabold uppercase leading-[1.1] text-white sm:text-6xl lg:text-[4.5rem]"
            >
              Advanced Security <br /> Solutions For Every <br /> Space
            </motion.h1>
            
            <motion.p 
              variants={springReveal} 
              className="mt-6 max-w-xl text-lg text-slate-300"
            >
              The best home security solution of 2024 combine AI-powered cameras, smart integration, and 24/7 monitoring for ultimate protection & convenience.
            </motion.p>
            
            <motion.div 
              variants={springReveal} 
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                Get Started Now 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group flex items-center gap-4 text-base font-semibold text-white transition hover:text-red-400">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-sm transition-all group-hover:scale-105 group-hover:bg-red-600/20 group-hover:ring-red-600">
                  <Play size={20} className="ml-1 text-red-500" fill="currentColor" />
                </div>
                Watch Video
              </button>
            </motion.div>
          </div>

          {/* Right Column: Provided Image */}
          <motion.div 
            variants={imageReveal}
            className="relative hidden h-[600px] w-full lg:block"
          >
            <Image 
              src="/images/hero.png" 
              alt="TechFin CCTV Equipment" 
              fill
              className="object-contain object-right drop-shadow-2xl" 
            />
          </motion.div>
        </motion.section>
      </div>

      {/* 2. OVERLAPPING FEATURE CARD */}
      {/* 
        This is now completely outside the dark background wrapper. 
        The negative top margin (-mt-24 / lg:-mt-28) pulls it up over the dark edge. 
      */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.08)] lg:w-4/5 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:divide-slate-200/80">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group flex flex-col px-4 first:pl-0 last:pr-0"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {feature.icon}
                </div>
                <h3 className="whitespace-pre-line text-xl font-bold leading-tight text-slate-900">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}