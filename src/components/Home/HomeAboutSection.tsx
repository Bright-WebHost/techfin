"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, Shield, ArrowRight, Award, Cctv, Info } from 'lucide-react';

// Framer Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomeAboutSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Image Stack */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative h-[450px] sm:h-[550px]"
          >
            <motion.div variants={fadeUp} className="absolute left-0 top-0 z-0 h-[70%] w-[80%] overflow-hidden rounded-[2.5rem] bg-slate-100">
              <Image src="/images/about1.jpg" alt="Security installation" fill className="object-cover" />
            </motion.div>

            <motion.div variants={fadeUp} className="absolute bottom-0 right-0 z-10 h-[60%] w-[75%] overflow-hidden rounded-[2.5rem] border-[12px] border-white bg-slate-100 shadow-2xl">
              <Image src="/images/about2.jpg" alt="Security monitoring" fill className="object-cover" />
            </motion.div>

            {/* Rotating Badge */}
            <motion.div variants={fadeUp} className="absolute left-[10%] top-[60%] z-30 rounded-full bg-white p-2 shadow-2xl">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="fill-slate-900 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <textPath href="#circlePath">15+ YEARS EXPERIENCE • LOCAL TRUSTED SERVICE •</textPath>
                  </text>
                </svg>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8AD76] text-white">
                  <Shield size={28} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col space-y-8">
            
            <div>
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B8AD76]">
                <Info size={16} /> About TechFin
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-black uppercase tracking-tight text-slate-900 lg:text-5xl">
                Securing Coastline <span className="text-[#B8AD76]">Infrastructure</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-slate-600">
                Based in Mangaluru, TechFin is the region’s premier integrator for Securus CCTV and smart automation. We bring enterprise-grade security to your home and business, ensuring seamless protection from Mangaluru to Hubli.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 rounded-[2rem] border border-slate-100 bg-slate-50 p-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#B8AD76] text-white">
                <Award size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">15+ Years of local distribution and professional installation expertise.</h3>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[2rem] bg-slate-900 p-8 shadow-2xl">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B8AD76]/20 text-[#B8AD76]">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Emergency Support</p>
                    <p className="text-2xl font-black text-white">+91 81479 89035</p>
                  </div>
                </div>
                <Link href="/about" className="flex items-center justify-center gap-2 rounded-full bg-[#B8AD76] px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-white">
                  Learn Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}