"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Camera, Home, Lock, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';

const tabs = ['Home Automation', 'CCTV Cameras', 'Access Control & Security', 'Services'] as const;

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Home Automation');

  const filteredProducts = products.filter((product) => product.category === activeTab);

  return (
    <main>
      <section className="bg-[linear-gradient(135deg,_rgba(255,0,0,0.08),_transparent)] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Products & Services</p>
            <h1 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">Products & Services</h1>
            <p className="mt-4 max-w-2xl text-lg text-textLight">Choose from a full range of smart security systems, surveillance solutions, and professional installation support.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
            <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Security camera installation" width={1200} height={900} className="h-[280px] w-full rounded-[1.6rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === tab ? 'bg-primary text-white' : 'bg-lightGray text-navy hover:bg-primary/10'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <motion.div key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="section-shell p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                {product.category === 'Home Automation' ? <Home size={20} /> : product.category === 'CCTV Cameras' ? <Camera size={20} /> : <Lock size={20} />}
              </div>
              <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-textLight">{product.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-textLight">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2"><BadgeCheck size={16} className="text-primary" /> {benefit}</li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Learn more <ArrowRight size={16} /></button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-lightGray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our service promise</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Professional delivery and dependable support</h2>
              <p className="mt-5 text-lg leading-8 text-textLight">We combine quality products with expert installation and a responsive after-sales team to make every deployment smooth and reliable.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary"><ShieldCheck size={20} /></div>
                <h3 className="text-xl font-semibold text-navy">Installation</h3>
                <p className="mt-3 text-sm leading-7 text-textLight">Precise setup and system integration handled by experienced technicians.</p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary"><ShieldCheck size={20} /></div>
                <h3 className="text-xl font-semibold text-navy">Maintenance</h3>
                <p className="mt-3 text-sm leading-7 text-textLight">Ongoing service to keep security systems running smoothly over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
