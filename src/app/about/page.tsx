"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Shield, 
  ArrowUpRight, 
  Camera, 
  Phone, 
  Eye, 
  Target, 
  MapPin, 
  Activity, 
  Lock, 
  Radio, 
  Crosshair, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

// --- FONTS ---
const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

// --- DATA ---
const regions = [
  { name: 'Mangalore', tag: 'HQ' },
  { name: 'Udupi' },
  { name: 'Bangalore' },
  { name: 'Shimoga' },
  { name: 'Hubli' },
  { name: 'Savannur' },
];

const timeline = [
  {
    code: 'PHASE 01',
    title: 'Regional Reach',
    desc: 'Built a trusted distribution network for security systems across coastal Karnataka.'
  },
  {
    code: 'PHASE 02',
    title: 'Smart Integration',
    desc: 'Expanded into smart home automation and integrated access control for homes and businesses.'
  },
  {
    code: 'PHASE 03',
    title: 'Tailored Solutions',
    desc: 'Delivered bespoke surveillance for residential communities, retail sites, and public venues.'
  },
  {
    code: 'PHASE 04',
    title: 'Long-term Growth',
    desc: 'Grew by focusing on reliable service, local support, and long-term system health.'
  }
];

const strengths = [
  {
    title: 'Securus Distribution',
    description: 'Authorized regional distributor for Securus camera systems, providing expert product guidance and dependable supply.',
    icon: <Shield strokeWidth={1.5} size={32} />
  },
  {
    title: 'Integrated Security',
    description: 'CCTV, access control, and home automation solutions designed for practical everyday use.',
    icon: <Camera strokeWidth={1.5} size={32} />
  },
  {
    title: 'After-Sales Support',
    description: 'Installation, maintenance, and troubleshooting handled by a local team you can reach quickly.',
    icon: <Phone strokeWidth={1.5} size={32} />
  },
];

// --- DESIGN COMPONENTS ---

// 1. Viewfinder Corners Motif
function ViewfinderCorners({ className = 'border-[#B8AD76]' }: { className?: string }) {
  return (
    <>
      <span className={`pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 ${className}`} />
      <span className={`pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 ${className}`} />
      <span className={`pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 ${className}`} />
      <span className={`pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 ${className}`} />
    </>
  );
}

// 2. Subtle Background Grid
function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.15] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, #94a3b8 1px, transparent 1px),
          linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    />
  );
}

// 3. Technical Telemetry HUD Overlay
function TelemetryHUD() {
  return (
    <div className={`${mono.className} pointer-events-none absolute inset-x-8 top-8 z-10 hidden justify-between text-[10px] uppercase tracking-widest text-slate-400 opacity-60 md:flex`}>
      <div className="flex items-center gap-4">
        <span>SYS_ID: TCF-2026-MNG</span>
        <span className="inline-block h-3 w-px bg-slate-300" />
        <span>LAT: 12.9141° N / LONG: 74.8560° E</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Activity size={12} className="text-[#B8AD76]" /> TELEMETRY: ACTIVE
        </span>
        <span className="inline-block h-3 w-px bg-slate-300" />
        <span>SEC_LEVEL: MAX</span>
      </div>
    </div>
  );
}

export default function BrightAwwwardsAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const pulse = shouldReduceMotion ? '' : 'animate-pulse';
  const ping = shouldReduceMotion ? '' : 'animate-ping';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "50%"]);
  const yHeroImage = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "25%"]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.1]);

  return (
    <main ref={containerRef} className={`${display.className} relative bg-white selection:bg-[#B8AD76] selection:text-white`}>

      {/* ========================================== */}
      {/* 1. HERO — locked-focus intro */}
      {/* ========================================== */}
      <section className="relative min-h-[90vh] overflow-hidden pt-32 sm:pt-40">
        
        {/* Architectural Grid & Scanlines */}
        <GridPattern />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, #000 0px, #000 1px, transparent 1px, transparent 4px)'
          }}
        />
        
        {/* Top Telemetry HUD */}
        <TelemetryHUD />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">

            {/* Typography Column */}
            <motion.div
              style={{ y: yHeroText }}
              className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-12"
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`${mono.className} mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 shadow-sm backdrop-blur-md`}>
                  <span className={`h-2 w-2 rounded-full bg-[#B8AD76] ${pulse}`} />
                  About TechFin
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-400"><Lock size={10} /> SECURED</span>
                </div>

                <h1 className="text-5xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-7xl lg:text-[6rem] lg:leading-[0.85]">
                  Security <br />
                  <span className="relative inline-block text-[#B8AD76]">
                    Perfected
                    {/* Faint crosshair accent over the highlighted word */}
                    <Crosshair className="absolute -right-6 -top-2 hidden h-6 w-6 text-slate-300 md:block animate-spin-slow" />
                  </span> <br />
                  Locally.
                </h1>

                <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl">
                  A Mangalore-based distributor and systems integrator for Securus CCTV & smart home automation. We deliver practical installations and unwavering service support.
                </p>

                {/* Technical status bar under hero text */}
                <div className={`${mono.className} mt-10 flex items-center gap-6 border-t border-slate-200 pt-6 text-xs text-slate-400`}>
                  <div className="flex items-center gap-2">
                    <Radio size={14} className="text-emerald-500" />
                    <span>24/7 MONITORING READY</span>
                  </div>
                  <div className="hidden h-3 w-px bg-slate-200 sm:block" />
                  <div className="hidden items-center gap-2 sm:flex">
                    <Cpu size={14} className="text-[#B8AD76]" />
                    <span>SMART AUTOMATION</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Parallax Image Column */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative z-10 hidden lg:col-span-5 lg:block"
            >
              <div className="relative h-[650px] w-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 shadow-2xl">
                <motion.div
                  style={{ y: yHeroImage, scale: scaleHeroImage }}
                  className="absolute inset-0 h-[120%]"
                >
                  <Image
                    src="/images/about2.jpg"
                    alt="TechFin installation team"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>

                {/* Subtle Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Live-feed style overlay tag */}
                <div className={`${mono.className} absolute left-6 top-6 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md`}>
                  <span className="relative flex h-2 w-2">
                    {!shouldReduceMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E2483A] opacity-75" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E2483A]" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                    Live · Cam 01 · MNG-HQ
                  </span>
                </div>

                {/* Telemetry watermark on image */}
                <div className={`${mono.className} absolute bottom-6 right-6 z-20 text-right text-[10px] text-white/70`}>
                  <div>REC [1080P] 60FPS</div>
                  <div>FPS_STATUS: OPTIMAL</div>
                </div>

                <div className="absolute inset-4 z-20">
                  <ViewfinderCorners className="border-white/80" />
                </div>
              </div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-12 z-30 flex items-center gap-6 rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex flex-col">
                  <span className="text-4xl font-bold tracking-tight text-[#0B0F0D]">15+</span>
                  <span className={`${mono.className} text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>Years Active</span>
                </div>
                <div className="h-12 w-px bg-slate-200" />
                <p className="max-w-[120px] text-sm font-medium leading-tight text-slate-500">
                  Trusted local security experience.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. COVERAGE NODES — network-status strip */}
      {/* ========================================== */}
      <div className="relative border-y border-slate-200/80 bg-slate-50 py-8">
        {/* Subtle decorative background line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-slate-200" />
        
        <div className="flex overflow-hidden">
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
            className="flex w-max items-center gap-4 pl-4"
          >
            {[...regions, ...regions].map((region, idx) => (
              <div
                key={idx}
                className="group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-slate-200/80 bg-white px-5 py-2.5 shadow-sm transition-colors hover:border-[#B8AD76]"
              >
                <span className="relative flex h-2 w-2">
                  {!shouldReduceMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className={`${mono.className} text-xs font-bold uppercase tracking-widest text-slate-700`}>
                  {region.name}{region.tag ? ` · ${region.tag}` : ''}
                </span>
                <MapPin size={14} className="text-[#B8AD76] transition-transform group-hover:scale-110" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. STRENGTHS — focus-lock hover cards */}
      {/* ========================================== */}
      <section className="relative bg-white py-32 overflow-hidden">
        <GridPattern className="opacity-[0.08]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-20 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className={`${mono.className} mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                <CheckCircle2 size={14} /> CORE ADVANTAGES
              </div>
              <h2 className="text-4xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-6xl">
                Why Choose <span className="text-[#B8AD76]">TechFin.</span>
              </h2>
            </div>
            <div className={`${mono.className} hidden text-right text-xs text-slate-400 md:block`}>
              <div>SYSTEM ARCHITECTURE: VERIFIED</div>
              <div>RELIABILITY INDEX: 99.9%</div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {strengths.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-12"
              >
                {/* Large Background Watermark Number */}
                <span className={`${mono.className} pointer-events-none absolute -right-4 -top-6 text-[8rem] font-bold text-slate-200/40 transition-colors duration-500 group-hover:text-slate-100`}>
                  0{idx + 1}
                </span>

                {/* Viewfinder brackets lock on hover */}
                <div className="absolute inset-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <ViewfinderCorners className="border-[#B8AD76]" />
                </div>

                <div className="relative z-10">
                  <div className="mb-12 inline-flex rounded-2xl border border-slate-200/80 bg-white p-4 text-[#0B0F0D] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-[#B8AD76] group-hover:text-[#B8AD76]">
                    {strength.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-[#0B0F0D]">
                    {strength.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-slate-500">
                    {strength.description}
                  </p>
                </div>

                {/* Card footer indicator */}
                <div className={`${mono.className} relative z-10 mt-8 flex items-center justify-between border-t border-slate-200/60 pt-4 text-[10px] text-slate-400`}>
                  <span>SPEC_REF: 0{idx + 1}</span>
                  <span className="flex items-center gap-1 text-[#B8AD76] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    READY <Activity size={10} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. VISION & MISSION */}
      {/* ========================================== */}
      <section className="relative bg-slate-50 py-32 border-t border-slate-200/80 overflow-hidden">
        
        {/* Background decorative radar circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-slate-200/60" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-slate-200/60" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Vision — the eye that watches ahead */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-12 shadow-sm sm:p-16 lg:p-20"
            >
              <ViewfinderCorners className="border-slate-200 m-6" />
              
              {/* Radar pulse background design */}
              <div className="absolute right-8 top-8 flex items-center justify-center opacity-10">
                <div className="h-32 w-32 rounded-full border-2 border-dashed border-[#B8AD76] animate-spin-slow" />
                <Eye size={64} className="absolute text-[#0B0F0D]" />
              </div>

              <div className="relative z-10">
                <div className="mb-8 inline-flex rounded-2xl bg-slate-50 p-4 border border-slate-200/80 text-[#B8AD76]">
                  <Eye size={40} />
                </div>
                <p className={`${mono.className} mb-4 text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> Our Vision
                </p>
                <h3 className="text-3xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-5xl">
                  A trusted name in smart security.
                </h3>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                  We aim to deliver reliable technology, practical advice, and consistent support for every site we serve—ensuring complete peace of mind.
                </p>
              </div>
            </motion.div>

            {/* Mission — locked onto the goal */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-12 shadow-sm sm:p-16 lg:p-20"
            >
              <ViewfinderCorners className="border-slate-200 m-6" />
              
              {/* Target concentric background design */}
              <div className="absolute right-8 top-8 flex items-center justify-center opacity-10">
                <div className="h-32 w-32 rounded-full border-2 border-[#0B0F0D]" />
                <div className="absolute h-20 w-20 rounded-full border border-dashed border-[#B8AD76]" />
                <Target size={64} className="absolute text-[#0B0F0D]" />
              </div>

              <div className="relative z-10">
                <div className="mb-8 inline-flex rounded-2xl bg-slate-50 p-4 border border-slate-200/80 text-[#B8AD76]">
                  <Target size={40} />
                </div>
                <p className={`${mono.className} mb-4 text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> Our Mission
                </p>
                <h3 className="text-3xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-5xl">
                  Quality systems with responsive service.
                </h3>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                  Provide top-tier security systems and home automation across our regions, focusing heavily on reliable installation and straightforward after-sales support.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. TIMELINE — sequence of trust */}
      {/* ========================================== */}
      <section className="relative bg-white py-32 overflow-hidden">
        <GridPattern className="opacity-[0.05]" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">

            {/* Sticky Header */}
            <div className="lg:col-span-5">
              <div className="sticky top-40 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 sm:p-12">
                <div className={`${mono.className} mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B8AD76]`}>
                  <Radio size={14} /> DEVELOPMENT VECTOR
                </div>
                <h2 className="text-4xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-6xl">
                  A Journey <br />
                  <span className="text-[#B8AD76]">Shaped By</span> <br />
                  Trust.
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                  15+ years of building secure environments, adapting to modern technology, and keeping coastal Karnataka safe.
                </p>

                <div className={`${mono.className} mt-8 border-t border-slate-200 pt-6 text-xs text-slate-400 flex justify-between`}>
                  <span>STATUS: ONGOING</span>
                  <span>PHASE: 04 COMPLETE</span>
                </div>
              </div>
            </div>

            {/* Scrolling Timeline Items */}
            <div className="lg:col-span-7">
              <div className="relative border-l-2 border-slate-200 pl-8 sm:pl-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="group relative mb-16 rounded-[2rem] border border-transparent bg-white p-6 transition-all hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm sm:p-8 last:mb-0"
                  >
                    {/* Sensor-style pulsing dot */}
                    <motion.div
                      initial={shouldReduceMotion ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      className="absolute -left-[41px] top-8 h-5 w-5 rounded-full bg-[#B8AD76] ring-8 ring-white sm:-left-[73px]"
                    >
                      {!shouldReduceMotion && (
                        <span className="absolute inset-0 rounded-full bg-[#B8AD76] opacity-40 animate-ping" />
                      )}
                    </motion.div>

                    <div className="flex items-center justify-between">
                      <span className={`${mono.className} mb-3 inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold tracking-widest text-[#B8AD76] group-hover:bg-white`}>
                        {item.code}
                      </span>
                      <span className={`${mono.className} text-[10px] text-slate-300`}>
                        LOG_ENTRY // 0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#0B0F0D]">
                      {item.title}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-slate-500">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. CTA — viewfinder focus bookend */}
      {/* ========================================== */}
      <section className="relative border-t border-slate-200/80 bg-white py-32 overflow-hidden">
        
        {/* Background Radar Rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full border border-slate-100 opacity-60" />
          <div className="absolute inset-12 rounded-full border border-slate-100 opacity-60" />
          <div className="absolute inset-24 rounded-full border border-slate-100 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center rounded-[3rem] border border-slate-200/80 bg-slate-50/80 px-6 py-16 shadow-lg backdrop-blur-xl sm:px-16 sm:py-20"
          >
            <ViewfinderCorners className="border-[#B8AD76] m-6" />

            <div className={`${mono.className} mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#B8AD76] shadow-sm`}>
              <Shield size={14} /> Ready to secure your space?
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-bold uppercase tracking-tight text-[#0B0F0D] sm:text-7xl lg:text-[6rem]">
              LET'S BUILD IT <span className="text-slate-300">TOGETHER.</span>
            </h2>

            <div className="mt-16 flex flex-col gap-6 sm:flex-row">
              <a
                href="/contact"
                className={`${mono.className} group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0B0F0D] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8AD76] focus-visible:ring-offset-2`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-[#B8AD76] transition-transform duration-500 [transform:translateY(100%)] group-hover:[transform:translateY(0)]" />
              </a>

              <a
                href="mailto:info@techfin.com"
                className={`${mono.className} group inline-flex items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#0B0F0D] shadow-sm transition-all hover:border-[#0B0F0D] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8AD76] focus-visible:ring-offset-2`}
              >
                Email Us
              </a>
            </div>

            {/* Bottom telemetry on CTA */}
            <div className={`${mono.className} mt-16 flex items-center gap-8 text-[10px] uppercase tracking-widest text-slate-400`}>
              <span>SEC_SYSTEMS // MANGALORE</span>
              <span className="h-1 w-1 rounded-full bg-[#B8AD76]" />
              <span>EST. 15+ YEARS</span>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}