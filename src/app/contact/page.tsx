"use client";

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Radio, 
  CheckCircle2 
} from 'lucide-react';

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
    <main className="min-h-screen bg-[#fafafa] text-slate-800 selection:bg-[#B8AD76]/20 selection:text-slate-900">
      
      {/* ========================================== */}
      {/* 1. TECHNICAL HERO SECTION */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-24 sm:pt-40 border-b border-slate-200">
        {/* Architectural Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8AD76]/10 via-transparent to-transparent" />
        
        {/* Corner HUD Framing Brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#B8AD76]/40 pointer-events-none hidden sm:block" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#B8AD76]/40 pointer-events-none hidden sm:block" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8AD76]/30 bg-[#B8AD76]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur-md">
              <ShieldCheck size={16} className="text-[#B8AD76]" />
              <span>Priority Support</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Get In <span className="underline decoration-[#B8AD76]/40 decoration-wavy decoration-2 underline-offset-8">Touch</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 sm:text-xl sm:leading-relaxed font-light">
              Send us a message for CCTV, access control, or home automation deployment and regional support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. CONTACT DECK & FORM */}
      {/* ========================================== */}
      <section className="py-16 sm:py-24 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            
            {/* --- LEFT: TRANSMISSION FORM --- */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10"
            >
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B8AD76]/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B8AD76]/60 pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
                    Send a Message
                  </h2>
                </div>
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#B8AD76] animate-ping" />
              </div>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-slate-600">
                      Name <span className="text-[#B8AD76]">*</span>
                    </label>
                    <input 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#B8AD76]/20 ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#B8AD76]'
                      }`} 
                      placeholder="Enter full name" 
                    />
                    {errors.name && <p className="mt-1.5 text-xs font-mono text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-slate-600">
                      Email <span className="text-[#B8AD76]">*</span>
                    </label>
                    <input 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#B8AD76]/20 ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#B8AD76]'
                      }`} 
                      placeholder="name@company.com" 
                    />
                    {errors.email && <p className="mt-1.5 text-xs font-mono text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-slate-600">
                      Phone <span className="text-[#B8AD76]">*</span>
                    </label>
                    <input 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#B8AD76]/20 ${
                        errors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#B8AD76]'
                      }`} 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                    {errors.phone && <p className="mt-1.5 text-xs font-mono text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-slate-600">
                      Service Interest
                    </label>
                    <select 
                      value={formData.service} 
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:border-[#B8AD76] focus:ring-2 focus:ring-[#B8AD76]/20"
                    >
                      <option value="">Select system requirement</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-slate-600">
                    Message <span className="text-[#B8AD76]">*</span>
                  </label>
                  <textarea 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    rows={4} 
                    className={`w-full rounded-xl border bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 focus:ring-[#B8AD76]/20 ${
                      errors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#B8AD76]'
                    }`} 
                    placeholder="Describe your site specifications or system requirements..." 
                  />
                  {errors.message && <p className="mt-1.5 text-xs font-mono text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button 
                    type="submit" 
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#B8AD76] hover:shadow-lg hover:shadow-[#B8AD76]/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /> 
                      Transmit Request
                    </span>
                  </button>
                </div>

                {/* Submission Success State */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div 
                      key="success-message"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex items-center gap-3 rounded-xl border border-[#B8AD76]/40 bg-[#B8AD76]/10 p-4 text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 size={20} className="text-[#B8AD76] shrink-0" />
                      <span>Transmission received. Our engineering team will respond shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* --- RIGHT: COMMAND CENTER INFO --- */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-xl sm:p-10 relative overflow-hidden"
            >
              {/* Subtle Background Grid for Tech Feel */}
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#B8AD76] uppercase tracking-wider">
                      <Radio size={14} />
                      <span>HQ Telemetry</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                      Command Center
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-slate-400">[MANGALURU]</span>
                </div>

                <div className="mt-8 space-y-6 text-sm text-slate-300">
                  <div className="group flex gap-4 rounded-xl border border-slate-800/80 bg-slate-800/40 p-4 transition-colors hover:border-[#B8AD76]/50 hover:bg-slate-800">
                    <div className="rounded-lg bg-[#B8AD76]/10 p-2.5 h-fit border border-[#B8AD76]/30 text-[#B8AD76]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Office Coordinates</h4>
                      <p className="leading-relaxed text-slate-200">
                        20-3-253/72, Regal Plaza<br />
                        2nd Floor, Near Rao & Rao Circle<br />
                        Mangaluru, Karnataka - 575001
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 rounded-xl border border-slate-800/80 bg-slate-800/40 p-4 transition-colors hover:border-[#B8AD76]/50 hover:bg-slate-800">
                    <div className="rounded-lg bg-[#B8AD76]/10 p-2.5 h-fit border border-[#B8AD76]/30 text-[#B8AD76]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Direct Lines</h4>
                      <p className="leading-relaxed font-mono text-slate-200">
                        +91 81479 89035<br />
                        +91 91643 59081<br />
                        +91 91648 28187
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 rounded-xl border border-slate-800/80 bg-slate-800/40 p-4 transition-colors hover:border-[#B8AD76]/50 hover:bg-slate-800">
                    <div className="rounded-lg bg-[#B8AD76]/10 p-2.5 h-fit border border-[#B8AD76]/30 text-[#B8AD76]">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">Electronic Mail</h4>
                      <p className="font-mono text-slate-200 break-all max-w-full">excelenterprisesmangalore@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Deployment Footer */}
              <div className="relative z-10 mt-10 border-t border-slate-800 pt-6">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#B8AD76] mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8AD76]" />
                  <span>Active Service Sectors</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-400 font-light">
                  We deploy installations and rapid technical support across <strong className="text-slate-200 font-medium">Mangaluru, Udupi, Bengaluru, Shivamogga, Hubballi,</strong> and <strong className="text-slate-200 font-medium">Savanur</strong>.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}