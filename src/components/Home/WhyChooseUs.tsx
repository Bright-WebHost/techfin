"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, PlayCircle } from 'lucide-react';

const features = [
  'Expert Installation Team',
  '15+ Years Trusted Service',
  '24/7 After-Sales Support',
  'Certified Securus Partner'
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why TechFin</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">A dependable partner for modern protection</h2>
          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                <BadgeCheck className="text-primary" size={20} />
                <span className="font-medium text-textDark">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
          <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Security team at work" width={1200} height={900} className="h-80 w-full rounded-[1.6rem] object-cover" />
          <div className="mt-4 rounded-[1.4rem] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-red-600">
              <PlayCircle size={18} />
              <span className="text-sm uppercase tracking-[0.2em] text-slate-900">Field expertise</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Professional installation and support teams</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Every project is backed by experienced technicians and responsive service from consultation through handover.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
