"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// --- EXACT DATA FROM PDF ---
const testimonials = [
  {
    quote: "The camera installation at our apartment was seamless and professional. The Securus system has given our residents a real sense of security. Thank you, TechFin!",
    role: "President",
    entity: "Coastal View Residences",
    colSpan: "md:col-span-2" // Takes up two columns for asymmetry
  },
  {
    quote: "We had over 150 cameras installed at Mariner Heights and the entire process was handled with great coordination. The clarity, coverage, and support have exceeded our expectations.",
    role: "Facility Manager",
    entity: "Mariner Heights",
    colSpan: "md:col-span-1"
  },
  {
    quote: "TechFin helped us secure our school campus with top-notch surveillance. Their team guided us with the best camera placements and ensured zero blind spots.",
    role: "Principal",
    entity: "Lakeview Academy",
    colSpan: "md:col-span-1"
  },
  {
    quote: "The PTZ and ANPR cameras installed at the city depot have greatly improved our monitoring and security. We're very happy with the service provided.",
    role: "Project Coordinator",
    entity: "City Central Depot",
    colSpan: "md:col-span-1"
  },
  {
    quote: "From consultation to installation, everything was smooth. The wireless Securus cameras are perfect for our commercial store. After-sales support has also been excellent.",
    role: "Operations Head",
    entity: "Harborpoint Hardware",
    colSpan: "md:col-span-1"
  }
];

const clientList = [
  "Seaside Auditorium", "Mariner Heights", "Harborview Arena", 
  "Harborpoint Hardware", "Pearl Ridge Apartments", "Beacon Heights", 
  "Coastal View Residences", "Whitecliff Residences", "Samudra Trust", 
  "Lakeview Academy", "City Central Depot", "Mangalore Transit Security"
];

// Split the list in half for the dual-direction marquees
const marqueeRow1 = [...clientList.slice(0, 6), ...clientList.slice(0, 6), ...clientList.slice(0, 6)];
const marqueeRow2 = [...clientList.slice(6, 12), ...clientList.slice(6, 12), ...clientList.slice(6, 12)];

export default function EditorialClientsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-10 border-b border-slate-300 pb-8 md:flex md:items-end md:justify-between md:pb-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
            >
              Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-5xl md:text-7xl"
            >
              Trusted by <span className="text-primary">Leaders.</span>
            </motion.h2>
          </div>
        </div>

        {/* --- ASYMMETRICAL BENTO GRID --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Using a 1px gap with a background color creates sharp, hairline grid borders
          className="mb-16 grid grid-cols-1 gap-[1px] border border-slate-300 bg-slate-300 sm:grid-cols-2 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group flex flex-col justify-between bg-white p-6 transition-colors duration-300 hover:bg-slate-900 hover:text-white sm:p-8 md:p-10 ${testimonial.colSpan}`}
            >
              <div>
                <Quote 
                  className="mb-8 h-8 w-8 text-primary transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" 
                  strokeWidth={2} 
                />
                <p className={`font-medium leading-relaxed ${testimonial.colSpan === 'md:col-span-2' ? 'text-lg sm:text-xl md:text-3xl' : 'text-base sm:text-lg md:text-xl'} text-slate-700 transition-colors group-hover:text-white`}>
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-10 sm:mt-12">
                <p className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors group-hover:text-white">
                  {testimonial.entity}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- CLIENTS LIST (DUAL MARQUEE) & SUMMARY --- */}
        <div className="grid gap-[1px] border border-slate-300 bg-slate-300 lg:grid-cols-3">
          
          {/* Summary Box */}
          <div className="flex flex-col justify-center bg-white p-6 sm:p-10 lg:col-span-1 lg:p-12">
            <h3 className="mb-4 text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl">
              Our Portfolio
            </h3>
            <p className="text-base font-medium leading-relaxed text-slate-600">
              From residential complexes to public infrastructure and educational institutions, our growing portfolio reflects the trust our clients place in our products and services.
            </p>
          </div>

          {/* Marquee Box */}
          <div className="flex flex-col justify-center gap-4 overflow-hidden bg-slate-50 py-8 sm:gap-6 sm:py-12 lg:col-span-2">
            
            {/* Row 1: Scrolling Left */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1500] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex w-max items-center gap-5 whitespace-nowrap pl-4 sm:gap-8 sm:pl-8"
              >
                {marqueeRow1.map((client, idx) => (
                  <div key={`r1-${idx}`} className="flex items-center gap-5 sm:gap-8">
                    <span className="font-mono text-lg font-bold uppercase text-slate-900 transition-colors hover:text-primary sm:text-xl">
                      {client}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [-1500, 0] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex w-max items-center gap-5 whitespace-nowrap pl-4 sm:gap-8 sm:pl-8"
              >
                {marqueeRow2.map((client, idx) => (
                  <div key={`r2-${idx}`} className="flex items-center gap-5 sm:gap-8">
                    <span className="font-mono text-lg font-bold uppercase text-slate-400 transition-colors hover:text-primary sm:text-xl">
                      {client}
                    </span>
                    <span className="text-primary">/</span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}