"use client";

import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Successful Installations' },
  { value: '5+', label: 'Service Regions' },
  { value: '24/7', label: 'Support' }
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-navy px-6 py-10 text-white sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
