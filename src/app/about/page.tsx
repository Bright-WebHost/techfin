"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass, ShieldCheck, Sparkles } from 'lucide-react';

const regions = ['Mangalore (HQ)', 'Udupi', 'Bangalore', 'Shimoga', 'Hubli', 'Savannur'];

const timeline = [
  'Established a trusted distribution network for Securus cameras in the region.',
  'Expanded into smart home automation and integrated security systems.',
  'Built strong long-term relationships with homes, schools, and commercial clients.',
  'Continued to grow through dependable installation, support, and service excellence.'
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[linear-gradient(135deg,_rgba(255,0,0,0.08),_transparent)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About TechFin</p>
            <h1 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">About TechFin</h1>
            <p className="mt-4 max-w-2xl text-lg text-textLight">A Mangalore-based security solutions company with more than 15 years of experience serving homes and businesses with quality technology.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="TechFin team at work" width={1200} height={900} className="h-[320px] w-full rounded-[1.6rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Trusted experience with a strong local presence</h2>
            <p className="mt-6 text-lg leading-8 text-textLight">
              Secured System stands as the main distributor of Securus cameras in the Mangalore and Udupi regions, delivering reliable surveillance solutions backed by long-term service and technical expertise.
            </p>
            <p className="mt-4 text-lg leading-8 text-textLight">
              TechFin continues this legacy by offering practical security systems, smart automation, and after-sales support for a wide range of properties.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-lightGray p-6 shadow-soft">
            <div className="h-full rounded-[1.6rem] bg-[linear-gradient(135deg,_#1A3A4A_0%,_#0f2430_100%)] p-8 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="text-primary" />
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Service excellence</p>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Dependable technology with human support</h3>
              <p className="mt-4 text-sm leading-7 text-white/80">From consultation to installation and maintenance, every step is handled with care and professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-white p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3 text-primary">
                <Sparkles size={24} />
                <h3 className="text-2xl font-semibold text-navy">Vision</h3>
              </div>
              <p className="text-lg leading-8 text-textLight">To be the trusted leader in Securus cameras and home automation in Mangalore and Udupi, known for quality service and reliable security solutions.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-[2rem] bg-primary p-8 text-white shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Compass size={24} />
                <h3 className="text-2xl font-semibold">Mission</h3>
              </div>
              <p className="text-lg leading-8 text-white/90">To be the trusted leader in Securus cameras and home automation in Mangalore and Udupi, known for quality service and reliable security solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Service regions</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Serving key locations across the region</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <div key={region} className="rounded-[1.4rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="font-semibold text-navy">{region}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why 15+ years</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">A journey shaped by experience and trust</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex flex-col gap-3 rounded-[1.4rem] border border-slate-200 bg-lightGray p-6 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">0{index + 1}</div>
                <p className="text-lg text-textLight">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
