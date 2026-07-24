"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  ChevronRight, 
  Cpu, 
  Radio, 
  Activity, 
  Crosshair,
  Terminal
} from 'lucide-react';

// --- TABS & CATEGORIES ---
const categories = ['Home Automation', 'Smart Systems', 'Surveillance Cameras'] as const;
type Category = (typeof categories)[number];

// --- COMPLETE DATA FROM PDF ---
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
  { id: "SS-05", category: "Smart Systems", title: "Biometric System", desc: "Use fingerprints, facial recognition, or iris scans to provide secure, keyless access and accurate identity verification.", img: "/images/biometric-system.png" },

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
    <main className="min-h-screen bg-[#fafafa] text-slate-800 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* ========================================== */}
      {/* 1. HUD-ENHANCED TECHNICAL HERO */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40 border-b border-slate-200">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8AD76]/10 via-transparent to-transparent" />
        
        {/* Corner HUD Framing Brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#B8AD76]/40 pointer-events-none hidden sm:block" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#B8AD76]/40 pointer-events-none hidden sm:block" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8AD76]/30 bg-[#B8AD76]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur-md">
              <ShieldCheck size={16} className="text-[#B8AD76]" />
              <span>Complete Ecosystem</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Products & <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Services</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 sm:text-xl sm:leading-relaxed font-light">
              Explore our comprehensive range of high-performance surveillance systems, smart access control, and intelligent home automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. TELEMETRY COMMAND TABS */}
      {/* ========================================== */}
      <section className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            
            {/* Status Readout */}
            <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-[#B8AD76] animate-ping" />
              <span>FILTER_STATE: <strong className="text-slate-700 uppercase">{activeCategory}</strong></span>
              <span>[{activeProducts.length} UNITS]</span>
            </div>

            {/* Tab Pills */}
            <div className="flex justify-center overflow-x-auto w-full sm:w-auto hide-scrollbar">
              <div className="flex gap-1.5 rounded-full bg-slate-100 p-1.5 ring-1 ring-slate-200/80 shadow-inner">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="relative whitespace-nowrap rounded-full px-5 py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors"
                  >
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className="absolute inset-0 z-0 rounded-full bg-white shadow-sm ring-1 ring-[#B8AD76]/40"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 flex items-center gap-2 ${
                      activeCategory === category ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-900'
                    }`}>
                      {activeCategory === category && <Crosshair size={13} className="text-[#B8AD76]" />}
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. PRODUCT GRID WITH HUD CARDS */}
      {/* ========================================== */}
      <section className="py-16 sm:py-24 relative">
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
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B8AD76]/60 hover:shadow-xl hover:shadow-[#B8AD76]/5"
                >
                  {/* Corner Accent Brackets on Hover */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B8AD76] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B8AD76] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 pointer-events-none" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                    {/* ID Badge Overlay */}
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-semibold text-slate-700 shadow-sm border border-slate-200/60">
                      <Radio size={10} className="text-[#B8AD76]" />
                      <span>{product.id}</span>
                    </div>

                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(184,173,118,0.05)_51%)] bg-[size:100%_4px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#B8AD76] mb-1">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-slate-950">
                        {product.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-500 font-light line-clamp-3">
                        {product.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">
                        STATUS: AVAILABLE
                      </span>
                      <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors group-hover:text-[#B8AD76]">
                        <span>Details</span>
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1 text-[#B8AD76]" />
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
      {/* 4. SERVICE PROTOCOL (Technical Card Layout) */}
      {/* ========================================== */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-32 relative overflow-hidden">
        {/* Background Dot Matrix */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B8AD76] mb-2">
                <Terminal size={14} />
                <span>Service Protocol</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Professional delivery & dependable support.
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-light lg:justify-self-end lg:max-w-md lg:pb-2">
              We combine quality products with expert installation and a responsive after-sales team to make every deployment smooth and reliable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            {/* Installation Card */}
            <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 p-8 transition-all duration-300 hover:border-[#B8AD76]/50 hover:bg-white hover:shadow-xl hover:shadow-[#B8AD76]/5 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-200/50 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest group-hover:bg-[#B8AD76] group-hover:text-white transition-colors">
                PHASE // 01
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 group-hover:ring-[#B8AD76]/30 transition-all">
                <Wrench size={28} className="text-slate-800 group-hover:text-[#B8AD76] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Installation & Deployment
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-500 font-light">
                Our expert team ensures smooth, efficient, and secure installation at any location. We handle exact positioning, wiring, and network configuration for an optimal setup.
              </p>
              
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>[POSITIONING]</span>
                <span>[WIRING]</span>
                <span>[CONFIG]</span>
              </div>
            </div>

            {/* Maintenance Card */}
            <div className="group relative rounded-3xl border border-slate-200 bg-slate-50/80 p-8 transition-all duration-300 hover:border-[#B8AD76]/50 hover:bg-white hover:shadow-xl hover:shadow-[#B8AD76]/5 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-200/50 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest group-hover:bg-[#B8AD76] group-hover:text-white transition-colors">
                PHASE // 02
              </div>
              
              <div className="mb-8 inline-flex rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 group-hover:ring-[#B8AD76]/30 transition-all">
                <Settings size={28} className="text-slate-800 group-hover:text-[#B8AD76] transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                After-Sales & Maintenance
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-500 font-light">
                Count on us for ongoing support, timely maintenance, and quick troubleshooting to keep your security and automation systems running flawlessly around the clock.
              </p>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>[24/7 SUPPORT]</span>
                <span>[DIAGNOSTICS]</span>
                <span>[UPGRADES]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}