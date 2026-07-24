"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Cctv, ShieldAlert, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Cctv className="mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: 'Premium Indoor\nCameras'
  },
  {
    icon: <ShieldAlert className="mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />,
    title: '24/7 Quick Alarms\nResponse'
  },
  {
    icon: <ShieldCheck className="mb-4 h-12 w-12 text-primary" strokeWidth={1.5} />,
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
    <div className="bg-white pb-14 sm:pb-20"> 
      
      {/* 1. DARK HERO SECTION */}
      <div className="relative flex flex-col bg-slate-800 pb-20 sm:pb-24 lg:pb-32">
        
        {/* Dark Background Control Room Image */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/80 via-slate-800/55 to-slate-800/20" />
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
          className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-4 pt-28 sm:gap-12 sm:px-6 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-40"
        >
          {/* Left Column: Text & CTAs */}
          <div className="max-w-2xl">
            <motion.div 
              variants={springReveal} 
              className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 sm:mb-6 sm:text-sm"
            >
              <Cctv size={18} className="text-primary" />
            </motion.div>
            
            <motion.h1 
              variants={springReveal} 
              className="text-[2.2rem] font-extrabold uppercase leading-[1.05] text-white sm:text-5xl lg:text-[4.5rem]"
            >
              Advanced Security <br /> Solutions For Every <br /> Space
            </motion.h1>
            
            {/* Hero description removed per request */}
            
            <motion.div 
              variants={springReveal} 
              className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
            >
              <Link 
                href="/contact" 
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,62,71,0.4)] sm:w-auto"
              >
                Get Started Now 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Watch Video button removed per request */}
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

    
      <div className="relative z-20 mx-auto -mt-16 w-full max-w-7xl px-4 sm:-mt-20 sm:px-6 lg:-mt-28 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_30px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:w-4/5 lg:p-12"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-slate-200/80 md:gap-0 md:divide-slate-200/80">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group flex flex-col items-center px-2 py-3 first:pl-0 last:pr-0 sm:py-4 md:items-start md:px-4 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <div className="mb-2 transition-transform duration-300 group-hover:-translate-y-1 sm:mb-3">
                  {feature.icon}
                </div>
                <h3 className="whitespace-pre-line text-center text-xs font-bold leading-tight text-slate-900 sm:text-sm md:text-left md:text-lg lg:text-xl">
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