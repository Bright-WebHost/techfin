"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// --- EXACT DATA FROM PDF ---
const testimonials = [
  {
    quote: "The camera installation at our apartment was seamless and professional. The Securus system has given our residents a real sense of security. Thank you, Excel Enterprises!",
    role: "President",
    entity: "Evergreen Apartment",
    colSpan: "md:col-span-2" // Takes up two columns for asymmetry
  },
  {
    quote: "We had over 150 cameras installed at Ivory Towers and the entire process was handled with great coordination. The clarity, coverage, and support have exceeded our expectations.",
    role: "Facility Manager",
    entity: "Ivory Towers",
    colSpan: "md:col-span-1"
  },
  {
    quote: "Excel Enterprises helped us secure our school premises with top-notch surveillance. Their team guided us with the best camera placements and ensured zero blind spots.",
    role: "Principal",
    entity: "Gyana Bharathi School",
    colSpan: "md:col-span-1"
  },
  {
    quote: "The PTZ and ANPR cameras installed at the bus stand have greatly improved our monitoring and security. We're very happy with the service provided.",
    role: "Project Coordinator",
    entity: "Uppinangady Bus Stand",
    colSpan: "md:col-span-1"
  },
  {
    quote: "From consultation to installation, everything was smooth. The wireless Securus cameras are perfect for our commercial store. After-sales support has also been excellent.",
    role: "Management",
    entity: "Azad Hardware",
    colSpan: "md:col-span-1"
  }
];

const clientList = [
  "Sagar Auditorium", "Ivory Towers", "HM Auditorium", 
  "Azad Hardware", "Greek Apartment", "Presidency Apartment", 
  "Evergreen Apartment", "White Stone Apartment", "As-Suffah Foundation", 
  "Gyana Bharathi School", "Uppinangady Bus Stand", "Mangalore City Surveillance"
];

// Split the list in half for the dual-direction marquees
const marqueeRow1 = [...clientList.slice(0, 6), ...clientList.slice(0, 6), ...clientList.slice(0, 6)];
const marqueeRow2 = [...clientList.slice(6, 12), ...clientList.slice(6, 12), ...clientList.slice(6, 12)];

export default function EditorialClientsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-12 border-b border-slate-300 pb-12 md:flex md:items-end md:justify-between">
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
              className="mt-4 text-5xl font-black uppercase tracking-tighter text-slate-900 sm:text-6xl md:text-7xl"
            >
              Trusted by <span className="text-red-600">Leaders.</span>
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
          className="mb-24 grid gap-[1px] border border-slate-300 bg-slate-300 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group flex flex-col justify-between bg-white p-8 transition-colors duration-300 hover:bg-slate-900 hover:text-white sm:p-10 ${testimonial.colSpan}`}
            >
              <div>
                <Quote 
                  className="mb-8 h-8 w-8 text-red-500 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" 
                  strokeWidth={2} 
                />
                <p className={`font-medium leading-relaxed ${testimonial.colSpan === 'md:col-span-2' ? 'text-xl sm:text-3xl' : 'text-lg sm:text-xl'} text-slate-700 transition-colors group-hover:text-white`}>
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-12">
                <p className="font-mono text-sm font-bold uppercase tracking-wider text-slate-900 transition-colors group-hover:text-white">
                  {testimonial.entity}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-red-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- CLIENTS LIST (DUAL MARQUEE) & SUMMARY --- */}
        <div className="grid gap-[1px] border border-slate-300 bg-slate-300 lg:grid-cols-3">
          
          {/* Summary Box */}
          <div className="flex flex-col justify-center bg-white p-10 lg:col-span-1 lg:p-12">
            <h3 className="mb-4 text-3xl font-black uppercase tracking-tighter text-slate-900">
              Our Portfolio
            </h3>
            <p className="text-base font-medium leading-relaxed text-slate-600">
              From residential complexes to public infrastructure and educational institutions, our growing portfolio reflects the trust our clients place in our products and services.
            </p>
          </div>

          {/* Marquee Box */}
          <div className="flex flex-col justify-center gap-6 overflow-hidden bg-slate-50 py-12 lg:col-span-2">
            
            {/* Row 1: Scrolling Left */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1500] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex w-max items-center gap-8 whitespace-nowrap pl-8"
              >
                {marqueeRow1.map((client, idx) => (
                  <div key={`r1-${idx}`} className="flex items-center gap-8">
                    <span className="font-mono text-xl font-bold uppercase text-slate-900 transition-colors hover:text-red-600">
                      {client}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex overflow-hidden">
              <motion.div
                animate={{ x: [-1500, 0] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex w-max items-center gap-8 whitespace-nowrap pl-8"
              >
                {marqueeRow2.map((client, idx) => (
                  <div key={`r2-${idx}`} className="flex items-center gap-8">
                    <span className="font-mono text-xl font-bold uppercase text-slate-400 transition-colors hover:text-red-600">
                      {client}
                    </span>
                    <span className="text-red-600">/</span>
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