"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Wrench, Headphones, Power, Lock, Zap, MonitorSpeaker } from 'lucide-react';

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
    icon: <Power size={24} />
  },
  {
    id: 'HA-02',
    title: 'Digital Door Locks',
    description: 'Keyless entry with PIN codes, cards, or fingerprints, ensuring advanced security.',
    icon: <Lock size={24} />
  },
  {
    id: 'HA-03',
    title: 'Motion Sensors',
    description: 'Automatically activate lights when movement is detected, ensuring safety while saving energy.',
    icon: <Zap size={24} />
  },
  {
    id: 'HA-04',
    title: 'Video Door Phones',
    description: 'See and talk to visitors before granting access, enhancing both security and convenience.',
    icon: <MonitorSpeaker size={24} />
  }
];

export default function AutoCarouselAndCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Faster Auto-rotation (1.8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cameras.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      
      {/* ======================================================== */}
      {/* SECTION 1: SURVEILLANCE CAMERAS (AUTO-FANNED CAROUSEL)   */}
      {/* ======================================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Tighter header spacing */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
            Surveillance <span className="text-red-600">Cameras</span>
          </h2>
        </div>

        {/* FANNED 3D CAROUSEL - Tighter height margins, wider spread math */}
        <div className="relative my-8 flex h-[350px] items-center justify-center sm:h-[400px] lg:h-[480px]">
          <AnimatePresence mode="popLayout">
            {cameras.map((camera, index) => {
              const total = cameras.length;
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isCenter = offset === 0;
              
              // NEW MATH: Wider Spread
              const rotation = offset * 12; // Increased rotation per card
              const xTranslation = offset * 160; // Spread further apart horizontally
              const yTranslation = Math.abs(offset) * 25; // Push lower faster
              const scale = 1 - Math.abs(offset) * 0.05; 
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
                  // Stiffer spring for faster snapping
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                  className={`absolute h-[280px] w-[200px] cursor-pointer overflow-hidden rounded-[1.5rem] bg-white shadow-2xl transition-shadow duration-300 sm:h-[320px] sm:w-[240px] lg:h-[420px] lg:w-[300px] ${
                    isCenter ? 'shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-2 ring-red-600' : 'ring-1 ring-black/5 hover:shadow-xl'
                  }`}
                >
                  <Image 
                    src={camera.image} 
                    alt={camera.title} 
                    fill 
                    className={`object-cover transition-all duration-700 ${isCenter ? 'scale-100 brightness-100' : 'scale-110 brightness-50'}`}
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className={`absolute bottom-6 left-6 right-6 text-white transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="mb-2 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                      {camera.id}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tighter drop-shadow-md sm:text-2xl">
                      {camera.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ACTIVE PRODUCT DESCRIPTION - Tighter margins */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={cameras[activeIndex].id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                {cameras[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 2: HOME AUTOMATION SERVICES (SIMPLE 4 CARDS)     */}
      {/* ======================================================== */}
      <div className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl">
                Home <span className="text-red-600">Automation</span>
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-500">
                Connects your lighting, security, and appliances into one smart system, offering comfort, safety, and convenience at your fingertips.
              </p>
            </div>
            
            <button className="group flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors hover:border-red-600 hover:text-red-600">
              View All 11 Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-red-600 hover:shadow-xl hover:shadow-red-600/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* SECTION 3: OPERATIONS FOOTER (INSTALLATION / MAINTENANCE)*/}
          {/* ======================================================== */}
          <div className="grid gap-6 border-t border-slate-200 pt-16 md:grid-cols-2">
            
            <div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 transition-shadow hover:shadow-2xl sm:p-12">
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">SRV // 01</span>
                <Wrench size={32} className="text-red-600" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl">
                  Installation
                </h3>
                <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                  Our expert team ensures smooth, efficient, and secure installation at any location. We handle the complex wiring and system architecture.
                </p>
              </div>
            </div>

            <div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-10 transition-shadow hover:shadow-2xl sm:p-12">
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">SRV // 02</span>
                <Headphones size={32} className="text-red-600" />
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl">
                  After Sales & Maintenance
                </h3>
                <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                  Count on us for ongoing support, timely maintenance, and rapid troubleshooting to keep your system running flawlessly.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}