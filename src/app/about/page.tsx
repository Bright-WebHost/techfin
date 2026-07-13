"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, ArrowUpRight, Activity, Phone, Compass, Target, MapPin } from 'lucide-react';

// --- DATA ---
const regions = ['Mangalore (HQ)', 'Udupi', 'Bangalore', 'Shimoga', 'Hubli', 'Savannur'];

const timeline = [
  {
    year: 'Phase 01',
    title: 'Distribution Network',
    desc: 'Built a trusted distribution network for Securus cameras across the coastal region.'
  },
  {
    year: 'Phase 02',
    title: 'Smart Integration',
    desc: 'Expanded into smart home automation and integrated security systems.'
  },
  {
    year: 'Phase 03',
    title: 'Tailored Solutions',
    desc: 'Served homes, schools, apartments, and commercial spaces with precision installations.'
  },
  {
    year: 'Phase 04',
    title: 'Long-term Growth',
    desc: 'Continued to grow through dependable support, maintenance, and reliable service.'
  }
];

const strengths = [
  {
    title: 'Securus Distribution',
    description: 'Primary regional distributor for Securus cameras, with product guidance and dependable supply.',
    icon: <Shield strokeWidth={1.5} size={32} />
  },
  {
    title: 'Integrated Security',
    description: 'CCTV, access control, and home automation solutions planned for practical everyday use.',
    icon: <Activity strokeWidth={1.5} size={32} />
  },
  {
    title: 'After-Sales Support',
    description: 'Installation, maintenance, and troubleshooting handled by a local team you can reach quickly.',
    icon: <Phone strokeWidth={1.5} size={32} />
  },
];

export default function BrightAwwwardsAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yHeroImage = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="relative bg-white selection:bg-red-600 selection:text-white">
      
      {/* ========================================== */}
      {/* 1. KINETIC HERO SECTION */}
      {/* ========================================== */}
      <section className="relative min-h-[90vh] overflow-hidden pt-32 sm:pt-40">
        
        {/* Massive Background Typography */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap opacity-[0.03]">
          <h1 className="text-[20vw] font-black tracking-tighter text-slate-900">
            TECHFIN
          </h1>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Typography Column */}
            <motion.div 
              style={{ y: yHeroText }}
              className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-12"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-500 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
                  About TechFin
                </div>
                
                <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 sm:text-7xl lg:text-[6rem] lg:leading-[0.85]">
                  Security <br />
                  <span className="text-red-600">Perfected</span> <br />
                  Locally.
                </h1>
                
                <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl">
                  A Mangalore-based distributor and systems integrator for Securus CCTV & smart home automation. We deliver practical installations and unwavering service support.
                </p>
              </motion.div>
            </motion.div>

            {/* Parallax Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative z-10 hidden lg:col-span-5 lg:block"
            >
              <div className="relative h-[650px] w-full overflow-hidden rounded-[2rem] bg-slate-100">
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
              </div>
              
              {/* Floating Stat Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -left-12 flex items-center gap-6 rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tighter text-slate-900">15+</span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600">Years Active</span>
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
      {/* 2. REGIONS MARQUEE (Continuous flowing borderless band) */}
      {/* ========================================== */}
      <div className="relative border-y border-slate-100 bg-slate-50 py-8">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex w-max items-center gap-12 whitespace-nowrap pl-12"
          >
            {[...regions, ...regions, ...regions].map((region, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="font-mono text-2xl font-black uppercase tracking-widest text-slate-300 transition-colors hover:text-slate-900">
                  {region}
                </span>
                <MapPin size={24} className="text-red-200" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 3. AIRY BENTO STRENGTHS */}
      {/* ========================================== */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 sm:text-6xl">
              Why Choose <span className="text-red-600">TechFin.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((strength, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-50 p-10 transition-all duration-500 hover:bg-slate-100 sm:p-12"
              >
                {/* Decorative glowing background on hover */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-100 opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-12 inline-flex rounded-2xl bg-white p-4 text-slate-900 shadow-sm ring-1 ring-slate-200 transition-transform duration-500 group-hover:scale-110 group-hover:text-red-600">
                    {strength.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-slate-900">
                    {strength.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-slate-500">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. VISION & MISSION (Bright & Clean) */}
      {/* ========================================== */}
      <section className="bg-slate-50 py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-white p-12 sm:p-16 lg:p-20"
            >
              <Compass size={40} className="mb-8 text-red-600" />
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-slate-400">Our Vision</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl">
                A trusted name in smart security.
              </h3>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                We aim to deliver reliable technology, practical advice, and consistent support for every site we serve—ensuring complete peace of mind.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-white p-12 sm:p-16 lg:p-20"
            >
              <Target size={40} className="mb-8 text-red-600" />
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-slate-400">Our Mission</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl">
                Quality systems with responsive service.
              </h3>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                Provide top-tier security systems and home automation across our regions, focusing heavily on reliable installation and straightforward after-sales support.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. TIMELINE (Vertical Scroll Layout) */}
      {/* ========================================== */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* Sticky Header */}
            <div className="lg:col-span-5">
              <div className="sticky top-40">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 sm:text-6xl">
                  A Journey <br />
                  <span className="text-red-600">Shaped By</span> <br />
                  Trust.
                </h2>
                <p className="mt-6 text-lg font-medium leading-relaxed text-slate-500">
                  15+ years of building secure environments, adapting to modern technology, and keeping coastal Karnataka safe.
                </p>
              </div>
            </div>

            {/* Scrolling Timeline Items */}
            <div className="lg:col-span-7">
              <div className="relative border-l-2 border-slate-100 pl-8 sm:pl-16">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    className="mb-16 last:mb-0"
                  >
                    {/* Animated Timeline Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-150px" }}
                      className="absolute -left-2 mt-2 h-4 w-4 rounded-full bg-red-600 ring-8 ring-white" 
                    />
                    
                    <span className="mb-3 block font-mono text-sm font-bold tracking-widest text-red-600">
                      {item.year}
                    </span>
                    <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900">
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
      {/* 6. MINIMALIST HUGE CTA */}
      {/* ========================================== */}
      <section className="border-t border-slate-100 bg-white py-32">
        <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="mb-8 font-mono text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Ready to secure your space?
            </p>
            <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase tracking-tighter text-slate-900 sm:text-7xl lg:text-[6rem]">
              LET'S BUILD IT <span className="text-slate-300">TOGETHER.</span>
            </h2>
            
            <div className="mt-16 flex flex-col gap-6 sm:flex-row">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-10 py-5 font-mono text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 z-0 bg-red-600 transition-transform duration-500 [transform:translateY(100%)] group-hover:[transform:translateY(0)]" />
              </a>
              
              <a 
                href="mailto:excelenterprisesmangalore@gmail.com" 
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white px-10 py-5 font-mono text-sm font-bold uppercase tracking-widest text-slate-900 transition-colors hover:border-slate-900"
              >
                Email Us
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}