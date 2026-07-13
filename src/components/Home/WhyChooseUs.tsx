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
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why TechFin</p>
          <h2 className="mt-3 text-2xl font-semibold text-navy sm:mt-4 sm:text-3xl">A dependable partner for modern protection</h2>
          <div className="mt-6 space-y-4 sm:mt-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                <BadgeCheck className="text-primary" size={20} />
                <span className="font-medium text-textDark">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-2 shadow-soft sm:p-3">
          <Image src="/images/about1.jpg" alt="Security team at work" width={1200} height={900} className="h-64 w-full rounded-[1.4rem] object-cover sm:h-80 sm:rounded-[1.6rem]" />
          <div className="mt-3 rounded-[1.4rem] bg-white p-5 shadow-sm sm:mt-4 sm:p-6">
            <div className="flex items-center gap-2 text-primary">
              <PlayCircle size={18} />
              <span className="text-sm uppercase tracking-[0.2em] text-slate-900">Field expertise</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900 sm:text-2xl">Professional installation and support teams</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Every project is backed by experienced technicians and responsive service from consultation through handover.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
