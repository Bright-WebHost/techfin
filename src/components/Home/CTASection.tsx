"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative border border-slate-200 bg-[#f8f9fa] p-6 sm:p-10 lg:p-20"
        >
          {/* Subtle sharp accent line on the left */}
          <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-primary sm:w-2" />
          
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            
            {/* Left Content: Messaging */}
            <div className="max-w-2xl">
              <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Ready to secure your space?
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl lg:text-6xl">
                Let’s build a safer, smarter property together.
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
                Reach out for a consultation, product guidance, or a site visit.
              </p>
            </div>
            
            {/* Right Content: Action Buttons */}
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              {/* Call Now Button */}
              <a 
                href="/contact" 
                className="group inline-flex w-full items-center justify-center gap-3 border-2 border-slate-900 bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-slate-900 sm:w-auto"
              >
                <Phone size={18} />
                Call Now
              </a>
              
              {/* Email Us Button */}
              <a 
                href="mailto:info@techfin.com" 
                className="group inline-flex w-full items-center justify-center gap-3 border-2 border-slate-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:border-slate-900 sm:w-auto"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}