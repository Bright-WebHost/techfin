"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

type DropdownItem = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { 
    href: '/', 
    label: 'Home', 
  },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 sm:px-6 sm:pt-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur sm:px-6 sm:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="TechFin Enterprises" width={176} height={72} className="h-9 w-auto sm:h-12" priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href} 
                className="group flex items-center gap-1 py-4 text-sm font-semibold text-slate-700 transition hover:text-primary"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-primary' : ''}`} 
                  />
                )}
              </Link>

              {/* Desktop Dropdown with Framer Motion */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      key={`dropdown-${item.label}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full w-52 rounded-xl border border-slate-100 bg-white p-2 shadow-xl"
                    >
                      {item.dropdown?.map((dropItem: DropdownItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-primary"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 hover:shadow-[0_12px_30px_rgba(0,62,71,0.25)]"
          >
            Get A Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-900 transition hover:bg-slate-900 hover:text-white lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-2 right-2 top-16 z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[1.5rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.16)] sm:left-4 sm:right-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link 
                    href={item.href} 
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50" 
                    onClick={() => !item.dropdown && setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {/* Indented Mobile Dropdown Items */}
                  {item.dropdown && (
                    <div className="flex flex-col border-l-2 border-slate-100 ml-6 pl-4 mt-1">
                      {item.dropdown.map((dropItem: DropdownItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                            className="block rounded-lg py-2 text-sm font-medium text-slate-500 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                className="mt-4 flex justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,62,71,0.2)]"
                onClick={() => setOpen(false)}
              >
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}