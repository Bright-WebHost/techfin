"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Wrench, 
  Headphones, 
  Power, 
  Lock, 
  Zap, 
  MonitorSpeaker, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Radio 
} from 'lucide-react';

// --- CAMERA PRODUCTS DATA ---
const cameras = [
  {
    id: '01', title: 'Outdoor Camera',
    description: 'Keep your surroundings secure with our weatherproof outdoor cameras, built for 24/7 protection.',
    image: '/images/outdoor.jpg'
  },
  {
    id: '02', title: 'Indoor Camera',
    description: 'Monitor your home or office interiors with high-definition clarity and real-time alerts.',
    image: '/images/indoor.jpg'
  },
  {
    id: '03', title: 'Solar Camera',
    description: 'Enjoy uninterrupted surveillance with eco-friendly solar cameras—no wires, no limits.',
    image: '/images/solar-camera.png'
  },
  {
    id: '04', title: 'Dash Camera',
    description: 'Capture every journey and protect your drive with reliable vehicle dash cams.',
    image: '/images/dash-camera.png'
  },
  {
    id: '05', title: 'PIR Sensor',
    description: 'Detect motion instantly and reduce false alarms with PIR sensor-based surveillance.',
    image: '/images/pirsensor.png'
  },
  {
    id: '06', title: 'PTZ Camera',
    description: 'Cover wide areas with intelligent zoom, pan, and tilt features—all in one powerful camera.',
    image: '/images/ptz.webp'
  },
  {
    id: '07', title: 'Wireless',
    description: 'Simplify setup and security with flexible, high-performance wireless cameras.',
    image: '/images/wireless-camera.png'
  },
  {
    id: '08', title: 'C-Mount',
    description: 'Customize your surveillance range with C-Mount cameras perfect for industrial monitoring.',
    image: '/images/c-mount.png'
  }
];

// --- HOME AUTOMATION SERVICES DATA ---
const services = [
  {
    id: 'HA-01',
    title: 'Smart Switches',
    description: 'Control lights, fans, and appliances with ease through touch, mobile apps, or voice commands.',
    icon: Power
  },
  {
    id: 'HA-02',
    title: 'Digital Door Locks',
    description: 'Keyless entry with PIN codes, cards, or fingerprints, ensuring advanced security.',
    icon: Lock
  },
  {
    id: 'HA-03',
    title: 'Motion Sensors',
    description: 'Automatically activate lights when movement is detected, ensuring safety while saving energy.',
    icon: Zap
  },
  {
    id: 'HA-04',
    title: 'Video Door Phones',
    description: 'See and talk to visitors before granting access, enhancing both security and convenience.',
    icon: MonitorSpeaker
  }
];

export default function AutoCarouselAndCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation (1.8 seconds) - Pauses when user hovers over carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cameras.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    
    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-200/80 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* ======================================================== */}
      {/* SECTION 1: SURVEILLANCE CAMERAS (AUTO-FANNED CAROUSEL)   */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Telemetry Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B8AD76] uppercase">
            <Activity size={14} className="animate-pulse" />
            <span>OPTICAL SURVEILLANCE // ACTIVE MATRIX</span>
          </div>
          
          <h2 className="text-[2rem] font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Surveillance <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Cameras</span>
          </h2>
        </div>

        {/* Carousel Area (With Hover-to-Pause) */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          {isMobile ? (
            <div className="mx-auto my-8 max-w-sm">
              <motion.div
                key={cameras[activeIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_55px_rgba(15,23,42,0.14)] ring-1 ring-slate-200"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={cameras[activeIndex].image}
                    alt={cameras[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#B8AD76]/40 bg-[#B8AD76]/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8AD76] backdrop-blur-md">
                      <Radio size={12} className="animate-pulse" /> CAM // {cameras[activeIndex].id}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                      {cameras[activeIndex].title}
                    </h3>
                  </div>
                </div>
              </motion.div>

              <div className="mt-5 flex items-center justify-center gap-2">
                {cameras.map((camera, index) => (
                  <button
                    key={camera.id}
                    type="button"
                    aria-label={`Show ${camera.title}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#B8AD76]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="relative my-10 flex h-[360px] items-center justify-center sm:h-[420px] lg:h-[500px]">
              <AnimatePresence mode="popLayout">
                {cameras.map((camera, index) => {
                  const total = cameras.length;
                  let offset = index - activeIndex;
                  if (offset > total / 2) offset -= total;
                  if (offset < -total / 2) offset += total;

                  const isCenter = offset === 0;
                  const rotation = offset * 10;
                  const xTranslation = offset * 170;
                  const yTranslation = Math.abs(offset) * 20;
                  const scale = 1 - Math.abs(offset) * 0.06;
                  const zIndex = 50 - Math.abs(offset);

                  return (
                    <motion.div
                      key={camera.id}
                      onClick={() => setActiveIndex(index)}
                      initial={false}
                      animate={{
                        opacity: Math.abs(offset) > 3 ? 0 : 1,
                        rotate: rotation,
                        x: xTranslation,
                        y: yTranslation,
                        scale: scale,
                        zIndex: zIndex,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                      className={`absolute h-[290px] w-[210px] cursor-pointer overflow-hidden rounded-[2rem] bg-white transition-all duration-500 sm:h-[340px] sm:w-[250px] lg:h-[440px] lg:w-[310px] ${
                        isCenter 
                          ? 'shadow-[0_25px_60px_-15px_rgba(184,173,118,0.3)] ring-2 ring-[#B8AD76]' 
                          : 'shadow-xl ring-1 ring-slate-200/80 hover:ring-[#B8AD76]/50 hover:shadow-2xl'
                      }`}
                    >
                      <Image
                        src={camera.image}
                        alt={camera.title}
                        fill
                        className={`object-cover transition-all duration-700 ${isCenter ? 'scale-100 brightness-100' : 'scale-110 brightness-40'}`}
                      />

                      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`} />

                      <div className={`absolute bottom-6 left-6 right-6 text-white transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#B8AD76]/40 bg-[#B8AD76]/20 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#B8AD76] backdrop-blur-md">
                          <Radio size={12} className="animate-pulse" /> CAM // {camera.id}
                        </span>
                        <h3 className="text-xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-2xl">
                          {camera.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Active Product Description */}
        <div className="mx-auto mb-16 max-w-xl text-center sm:mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={cameras[activeIndex].id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
            >
              <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                {cameras[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 2: HOME AUTOMATION SERVICES (SIMPLE 4 CARDS)     */}
      {/* ======================================================== */}
      <div className="relative z-10 py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B8AD76] uppercase">
                <Terminal size={14} />
                <span>INTELLIGENT ECOSYSTEM // HARDWARE INTEGRATION</span>
              </div>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Home <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Automation</span>
              </h2>
              
              <p className="mt-3 text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                Connect your lighting, biometric security, and appliances into one responsive system—offering complete comfort, safety, and operational control at your fingertips.
              </p>
            </div>
            
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-[#B8AD76] hover:bg-slate-900 hover:text-white hover:shadow-md w-full md:w-auto">
              <span>View All 11 Services</span>
              <ArrowRight size={16} className="text-[#B8AD76] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 pt-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white p-6 pt-12 shadow-sm transition-all duration-300 hover:border-[#B8AD76]/50 hover:shadow-xl hover:shadow-[#B8AD76]/5 sm:p-8 sm:pt-14"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18, duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ translateY: -6 }}
              >
                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-slate-300 group-hover:border-[#B8AD76] transition-colors pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-slate-300 group-hover:border-[#B8AD76] transition-colors pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute -top-7 left-8">
                  <motion.div 
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B8AD76]/40 bg-slate-900 text-[#B8AD76] shadow-lg shadow-slate-900/20 group-hover:bg-[#B8AD76] group-hover:text-slate-900 transition-colors duration-300"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {React.createElement(service.icon, { size: 24 })}
                  </motion.div>
                </div>

                {/* Index Readout */}
                <span className="absolute right-6 top-6 font-mono text-xs text-slate-300 font-semibold group-hover:text-[#B8AD76] transition-colors">
                  [{service.id}]
                </span>

                <div>
                  <h3 className="mb-3 mt-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl group-hover:text-[#B8AD76] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-500 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Micro Status Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  <span>STATUS: READY</span>
                  <span className="text-[#B8AD76]">256-BIT</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* SECTION 3: OPERATIONS FOOTER (COMMAND DECK CARDS)        */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-6">
            
            {/* Card 1: Installation Deck */}
            <motion.div 
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-12"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, duration: 0.55 }}
            >
              {/* Subtle Background Grid */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#B8AD76]">
                    <ShieldCheck size={16} />
                    <span>SRV // 01 - FIELD DEPLOYMENT</span>
                  </div>
                  <div className="rounded-xl border border-[#B8AD76]/30 bg-[#B8AD76]/10 p-3 text-[#B8AD76]">
                    <Wrench size={26} />
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Precision Installation
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-slate-400 font-light">
                    Our certified technicians ensure clean, efficient, and secure hardware deployment across residential and industrial sectors. We handle complex wiring, structural mounting, and network architecture.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> CONCEALED WIRING</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> NETWORK CALIBRATION</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: After Sales Deck */}
            <motion.div 
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-xl sm:p-12"
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, duration: 0.6, delay: 0.1 }}
            >
              {/* Subtle Background Grid */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#B8AD76]">
                    <Activity size={16} className="animate-pulse" />
                    <span>SRV // 02 - CONTINUOUS SUPPORT</span>
                  </div>
                  <div className="rounded-xl border border-[#B8AD76]/30 bg-[#B8AD76]/10 p-3 text-[#B8AD76]">
                    <Headphones size={26} />
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    After-Sales & Maintenance
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-slate-400 font-light">
                    Count on us for continuous operational support, proactive firmware updates, scheduled maintenance, and rapid emergency troubleshooting to keep your security network running flawlessly 24/7.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> 24/7 DIAGNOSTICS</span>
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" /> RAPID RESPONSE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}