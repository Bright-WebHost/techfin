"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Wrench, Settings, ShieldCheck, ChevronRight } from 'lucide-react';

// --- TABS & CATEGORIES ---
const categories = ['Home Automation', 'Smart Systems', 'Surveillance Cameras'] as const;
type Category = (typeof categories)[number];

// --- COMPLETE DATA FROM PDF[cite: 2] ---
const catalogData = [
  // Home Automation
  { id: "HA-01", category: "Home Automation", title: "Smart Switches", desc: "Control lights, fans, and appliances with ease through touch, mobile apps, or voice commands, bringing convenience and energy efficiency to your home.", img: "/images/smart-switches.png" },
  { id: "HA-02", category: "Home Automation", title: "Digital Door Locks", desc: "Provide keyless entry with PIN codes, cards, or fingerprints, ensuring advanced security and convenient access for your home or office.", img: "/images/digital-door-locks.png" },
  { id: "HA-03", category: "Home Automation", title: "Motion Detecting Lights", desc: "Enhance security and convenience by automatically activating when movement is detected, ensuring safety while saving energy.", img: "/images/motion-detect-sensor.png" },
  { id: "HA-04", category: "Home Automation", title: "Dimmer Lights", desc: "Adjust brightness to create the perfect ambiance while saving energy, giving you both comfort and control in your living space.", img: "/images/dimmer-light.png" },
  { id: "HA-05", category: "Home Automation", title: "Curtains Motors", desc: "Open and close curtains effortlessly with remote, app, or voice control, adding convenience, comfort, and a touch of luxury to your home.", img: "/images/curtains-motors.png" },
  { id: "HA-06", category: "Home Automation", title: "Remote Gate", desc: "Provide secure and hassle-free entry with the convenience of operating your gate through a remote, app, or automation system.", img: "/images/remote-gate.png" },
  { id: "HA-07", category: "Home Automation", title: "Public Address", desc: "Deliver clear and effective communication across wide areas, making them ideal for offices, schools, events, and commercial spaces.", img: "/images/indoor.jpg" },

  // Smart Systems
  { id: "SS-01", category: "Smart Systems", title: "Video Door Phones", desc: "See and talk to visitors before granting access, enhancing both security and convenience at your doorstep.", img: "/images/about1.jpg" },
  { id: "SS-02", category: "Smart Systems", title: "Visitor Entry Systems", desc: "Provide secure and hassle-free access management, allowing you to monitor, verify, and record visitors for enhanced safety and control.", img: "/images/about2.jpg" },
  { id: "SS-03", category: "Smart Systems", title: "Smart Cloud AI", desc: "Intelligent cloud-based technology to analyze data in real time, offering advanced security, remote monitoring, and smarter decision-making.", img: "/images/about3.jpg" },
  { id: "SS-04", category: "Smart Systems", title: "Boom Barriers", desc: "Controlled vehicle access at entrances and exits, ensuring security, smooth traffic management, and authorized entry.", img: "/images/outdoor.jpg" },
  { id: "SS-05", category: "Smart Systems", title: "Biometric System", desc: "Use fingerprints, facial recognition, or iris scans to provide secure, keyless access and accurate identity verification.", img: "/images/hero.png" },

  // Surveillance Cameras
  { id: "SV-01", category: "Surveillance Cameras", title: "Outdoor Camera", desc: "Keep your surroundings secure with our weatherproof outdoor cameras, built for 24/7 protection.", img: "/images/outdoor.jpg" },
  { id: "SV-02", category: "Surveillance Cameras", title: "Indoor Camera", desc: "Monitor your home or office interiors with high-definition clarity and real-time alerts.", img: "/images/indoor.jpg" },
  { id: "SV-03", category: "Surveillance Cameras", title: "Solar Camera", desc: "Enjoy uninterrupted surveillance with eco-friendly solar cameras—no wires, no limits.", img: "/images/solar-camera.png" },
  { id: "SV-04", category: "Surveillance Cameras", title: "Vehicle Dash Camera", desc: "Capture every journey and protect your drive with reliable vehicle dash cams.", img: "/images/dash-camera.png" },
  { id: "SV-05", category: "Surveillance Cameras", title: "PIR Sensor Camera", desc: "Detect motion instantly and reduce false alarms with PIR sensor-based surveillance.", img: "/images/pirsensor.png" },
  { id: "SV-06", category: "Surveillance Cameras", title: "PTZ Camera", desc: "Cover wide areas with intelligent zoom, pan, and tilt features—all in one powerful camera.", img: "/images/ptz.webp" },
  { id: "SV-07", category: "Surveillance Cameras", title: "Wireless Camera", desc: "Simplify setup and security with flexible, high-performance wireless cameras.", img: "/images/wireless-camera.png" },
  { id: "SV-08", category: "Surveillance Cameras", title: "C-Mount Camera", desc: "Customize your surveillance range with C-Mount cameras perfect for industrial or long-distance monitoring.", img: "/images/c-mount.png" },
  { id: "SV-09", category: "Surveillance Cameras", title: "ANPR System", desc: "Automatically capture and recognize vehicle number plates, enabling efficient access control and traffic monitoring.", img: "/images/outdoor.jpg" },
  { id: "SV-10", category: "Surveillance Cameras", title: "CCTV with PA", desc: "Integrated system combines CCTV surveillance with public address functionality for improved safety and crowd management.", img: "/images/indoor.jpg" }
];

export default function ModernProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Home Automation');

  // Filter products based on selected tab
  const activeProducts = catalogData.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      
      {/* ========================================== */}
      {/* 1. CLEAN MODERN HERO */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm">
              <ShieldCheck size={16} className="text-red-600" />
              Complete Ecosystem
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Products & Services
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 sm:text-xl sm:leading-relaxed">
              Explore our comprehensive range of high-performance surveillance systems, smart access control, and intelligent home automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. SMOOTH PILL TAB NAVIGATION */}
      {/* ========================================== */}
      <section className="sticky top-0 z-40 border-y border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center overflow-x-auto py-4 hide-scrollbar">
            <div className="flex gap-2 rounded-full bg-slate-100 p-1.5 ring-1 ring-slate-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6"
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 z-0 rounded-full bg-white shadow-sm ring-1 ring-slate-200"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${activeCategory === category ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}>
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. PRODUCT GRID */}
      {/* ========================================== */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {activeProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">
                        {product.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <button className="flex items-center gap-1.5 text-sm font-semibold text-red-600 transition-colors group-hover:text-red-700">
                        Request details
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. SERVICE PROMISE (Clean Card Layout) */}
      {/* ========================================== */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Our Service Promise
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Professional delivery & dependable support.
              </h2>
            </div>
            <p className="text-lg text-slate-500 lg:justify-self-end lg:max-w-md lg:pb-2">
              We combine quality products with expert installation and a responsive after-sales team to make every deployment smooth and reliable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Installation Card */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-slate-300 sm:p-12">
              <div className="mb-8 inline-flex rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Wrench size={28} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                1. Installation
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-500">
                Our expert team ensures smooth, efficient, and secure installation at any location.[cite: 2] We handle exact positioning, wiring, and network configuration for an optimal setup.
              </p>
            </div>

            {/* Maintenance Card */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-slate-300 sm:p-12">
              <div className="mb-8 inline-flex rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <Settings size={28} className="text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                2. After Sales & Maintenance
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-500">
                Count on us for ongoing support, timely maintenance, and quick troubleshooting to keep your system running flawlessly.[cite: 2]
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}