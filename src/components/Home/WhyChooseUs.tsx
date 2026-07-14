"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, PlayCircle, Shield, Activity, Terminal } from 'lucide-react';

const features = [
  {
    title: 'Expert Installation Team',
    desc: 'Certified technicians ensuring clean, seamless wire deployment and system integration.'
  },
  {
    title: '15+ Years Trusted Service',
    desc: 'Proven reliability protecting residential and commercial sectors across the region.'
  },
  {
    title: '24/7 After-Sales Support',
    desc: 'Rapid-response emergency diagnostics and continuous system maintenance.'
  },
  {
    title: 'Authorized Securus Partner',
    desc: 'Direct deployment of enterprise-grade security and automation hardware.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
      
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 items-center">
        
        {/* Left Column: Why TechFin Features */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Telemetry Micro-Label */}
          <div className="mb-3 flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B8AD76] uppercase">
            <Activity size={14} className="animate-pulse" />
            <span>CORE CAPABILITIES // OPERATIONAL ADVANTAGE</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A Dependable Partner For <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Modern Protection</span>
          </h2>
          
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg font-light">
            We bridge the gap between complex security hardware and effortless daily operation through meticulous engineering and unmatched regional support.
          </p>

          {/* Feature List */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#B8AD76]/50 hover:shadow-md"
              >
                {/* Champagne Gold Accent Bar on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent transition-colors duration-300 group-hover:bg-[#B8AD76]" />
                
                <div className="flex items-start gap-3.5">
                  <div className="rounded-xl bg-[#B8AD76]/10 p-2.5 text-[#B8AD76] ring-1 ring-[#B8AD76]/20 shrink-0 mt-0.5">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base group-hover:text-[#B8AD76] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Visual Showcase Deck */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Corner HUD Framing Brackets */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#B8AD76]/60 pointer-events-none hidden sm:block z-20" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#B8AD76]/60 pointer-events-none hidden sm:block z-20" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-200/50 sm:p-4">
            
            {/* Image Container with Subtle Zoom effect */}
            <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-100">
              <Image 
                src="/images/about1.jpg" 
                alt="TechFin technicians deploying modern security hardware" 
                width={1200} 
                height={900} 
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96" 
              />
              
              {/* Floating Overlay Badge on Image */}
              <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-slate-900/80 px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-white backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76] animate-ping" />
                <span>FIELD OPERATIVE // ACTIVE</span>
              </div>
            </div>

            {/* Content Deck Below Image */}
            <div className="mt-4 rounded-[1.8rem] border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B8AD76]">
                <Terminal size={14} />
                <span>Precision Deployment</span>
              </div>
              
              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                Professional Installation & Support
              </h3>
              
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-light">
                Every project is backed by experienced technicians and responsive regional service—from initial schematic design through final client handover and ongoing maintenance.
              </p>

              {/* Bottom Micro Trust Indicators */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Shield size={14} className="text-[#B8AD76]" />
                  <span>ISO STANDARDS COMPLIANT</span>
                </span>
                <span>[100% QUALITY ASSURED]</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}