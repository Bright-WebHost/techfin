"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, Shield, ArrowRight, Award, Cctv } from 'lucide-react';

// Framer Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HomeAboutSection() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Overlapping Images & Badge */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative h-[500px] w-full sm:h-[520px] lg:h-[560px]"
          >
            {/* Top Left Image */}
            <motion.div variants={scaleIn} className="absolute left-0 top-0 z-0 h-[65%] w-[75%]">
              <div className="h-full w-full overflow-hidden rounded-[2rem] bg-slate-100">
                <Image
                  src="/images/about1.jpg"
                  alt="Technician installing CCTV camera"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div variants={scaleIn} className="absolute bottom-0 right-0 z-10 h-[60%] w-[75%]">
              <div className="h-full w-full overflow-hidden rounded-[2rem] border-8 border-white bg-slate-100 shadow-2xl">
                <Image
                  src="/images/about2.jpg"
                  alt="Security operator monitoring"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </motion.div>

            {/* Rotating Circular Badge */}
            <motion.div 
              variants={fadeUp}
              className="absolute left-[15%] top-[55%] z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-xl sm:left-[20%]"
            >
              <div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                {/* SVG for Circular Text */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text>
                    <textPath
                      href="#circlePath"
                      startOffset="0%"
                      className="fill-slate-800 text-[11px] font-bold uppercase tracking-[0.15em]"
                    >
                      15+ Years Of Local Service • 15+ Years Of Local Service •
                    </textPath>
                  </text>
                </svg>
                {/* Center Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-inner sm:h-16 sm:w-16">
                  <Shield size={28} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col space-y-8"
          >
            {/* Header Section */}
            <div>
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-600">
                <Cctv size={20} className="text-red-600" /> 
                About Us
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-4xl font-extrabold leading-[1.15] text-slate-900 sm:text-5xl">
                Building secure homes and businesses across coastal Karnataka.
              </motion.h2>
              
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-slate-500">
                TechFin is a Mangalore-based distributor and systems integrator for Securus CCTV and home automation solutions. We deliver practical security installations and service support in Mangalore, Udupi, Bangalore, Shimoga, Hubli, and Savannur.
              </motion.p>
            </div>

            {/* Middle Section: Small Image & Experience Text */}
            <motion.div variants={fadeUp} className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-[1.5rem]">
                <Image 
                  src="/images/about3.jpg" 
                  alt="Technician looking at camera" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-4 sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                  <Award size={24} />
                </div>
                <h3 className="max-w-[200px] text-lg font-bold leading-snug text-slate-900">
                  15+ years of local security distribution and installation experience
                </h3>
              </div>
            </motion.div>

            {/* Bottom Call Action Box */}
            <motion.div variants={fadeUp} className="mt-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Call Directly 24/7</p>
                    <p className="mt-1 text-2xl font-extrabold text-slate-900">8147989035</p>
                  </div>
                </div>
                
                <Link 
                  href="/about" 
                  className="group flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                >
                  More About 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}