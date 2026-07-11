"use client";

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const services = ['Home Automation', 'CCTV Surveillance', 'Access Control', 'General Inquiry'];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required';
    if (!formData.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <main>
      <section className="bg-[linear-gradient(135deg,_rgba(255,0,0,0.08),_transparent)] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-navy sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 max-w-2xl text-lg text-textLight">Let us help you choose the right security solution for your home, school, or business.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
            <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Contact our security team" width={1200} height={900} className="h-[280px] w-full rounded-[1.6rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-navy">Send us a message</h2>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-textDark">Name</label>
                  <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full rounded-xl border px-4 py-3 ${errors.name ? 'border-primary' : 'border-slate-200'}`} placeholder="Your name" />
                  {errors.name && <p className="mt-2 text-sm text-primary">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-textDark">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full rounded-xl border px-4 py-3 ${errors.email ? 'border-primary' : 'border-slate-200'}`} placeholder="Your email" />
                  {errors.email && <p className="mt-2 text-sm text-primary">{errors.email}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-textDark">Phone</label>
                  <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`w-full rounded-xl border px-4 py-3 ${errors.phone ? 'border-primary' : 'border-slate-200'}`} placeholder="Your phone" />
                  {errors.phone && <p className="mt-2 text-sm text-primary">{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-textDark">Service Interest</label>
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-3">
                    <option value="">Select service</option>
                    {services.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-textDark">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className={`w-full rounded-xl border px-4 py-3 ${errors.message ? 'border-primary' : 'border-slate-200'}`} placeholder="Tell us about your requirements" />
                {errors.message && <p className="mt-2 text-sm text-primary">{errors.message}</p>}
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105">
                <Send size={16} /> Submit
              </button>
              {submitted && <p className="text-sm font-medium text-navy">Thank you! Your request has been received.</p>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft">
              <h2 className="text-2xl font-semibold">Contact details</h2>
              <div className="mt-8 space-y-4 text-sm text-white/80">
                <div className="flex gap-3"><MapPin size={18} className="mt-1 text-primary" /><p>20-3-253/72, Regal Plaza<br />2nd Floor, Near Rao And Rao Circle<br />Mangalore - 575001</p></div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-primary" /><p>8147989035<br />9164359081<br />9164828187</p></div>
                <div className="flex items-center gap-3"><Mail size={18} className="text-primary" /><p>excelenterprisesmangalore@gmail.com</p></div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-navy">Service coverage</h3>
              <p className="mt-3 text-sm leading-7 text-textLight">We serve Mangalore, Udupi, Bangalore, Shimoga, Hubli, and Savannur with installation and support.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
