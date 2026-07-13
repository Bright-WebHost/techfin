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
  const [isMobile, setIsMobile] = useState(false);

  // Faster Auto-rotation (1.8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cameras.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);

    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      
      {/* ======================================================== */}
      {/* SECTION 1: SURVEILLANCE CAMERAS (AUTO-FANNED CAROUSEL)   */}
      {/* ======================================================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Tighter header spacing */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
            Surveillance <span className="text-primary">Cameras</span>
          </h2>
        </div>

        {isMobile ? (
          <div className="mx-auto my-8 max-w-sm">
            <motion.div
              key={cameras[activeIndex].id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-2xl ring-1 ring-black/5"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={cameras[activeIndex].image}
                  alt={cameras[activeIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                    {cameras[activeIndex].id}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter drop-shadow-md">
                    {cameras[activeIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {cameras.map((camera, index) => (
                <button
                  key={camera.id}
                  type="button"
                  aria-label={`Show ${camera.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative my-8 flex h-[350px] items-center justify-center sm:h-[400px] lg:h-[480px]">
            <AnimatePresence mode="popLayout">
              {cameras.map((camera, index) => {
                const total = cameras.length;
                let offset = index - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const rotation = offset * 12;
                const xTranslation = offset * 160;
                const yTranslation = Math.abs(offset) * 25;
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
                    transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                    className={`absolute h-[280px] w-[200px] cursor-pointer overflow-hidden rounded-[1.5rem] bg-white shadow-2xl transition-shadow duration-300 sm:h-[320px] sm:w-[240px] lg:h-[420px] lg:w-[300px] ${
                      isCenter ? 'shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-2 ring-primary' : 'ring-1 ring-black/5 hover:shadow-xl'
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
                      <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
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
        )}

        {/* ACTIVE PRODUCT DESCRIPTION - Tighter margins */}
        <div className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={cameras[activeIndex].id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-lg">
                {cameras[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 2: HOME AUTOMATION SERVICES (SIMPLE 4 CARDS)     */}
      {/* ======================================================== */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end md:gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl">
                Home <span className="text-primary">Automation</span>
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
                Connects your lighting, security, and appliances into one smart system, offering comfort, safety, and convenience at your fingertips.
              </p>
            </div>
            
            <button className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors hover:border-primary hover:text-primary md:w-auto">
              View All 11 Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-primary hover:shadow-xl hover:shadow-[0_12px_30px_rgba(0,62,71,0.05)] sm:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-slate-900 sm:text-xl">
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
          <div className="grid gap-6 border-t border-slate-200 pt-12 md:grid-cols-2 md:pt-16">
            
            <div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-6 transition-shadow hover:shadow-2xl sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">SRV // 01</span>
                <Wrench size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl lg:text-4xl">
                  Installation
                </h3>
                <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-600">
                  Our expert team ensures smooth, efficient, and secure installation at any location. We handle the complex wiring and system architecture.
                </p>
              </div>
            </div>

            <div className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-6 transition-shadow hover:shadow-2xl sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">SRV // 02</span>
                <Headphones size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl lg:text-4xl">
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