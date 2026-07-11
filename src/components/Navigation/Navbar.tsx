"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Cctv, ChevronDown } from 'lucide-react';

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
  { href: '/blog', label: 'Blog' },
  { 
    href: '/pages', 
    label: 'Pages'
  },
  { href: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    // Changed "absolute" to "fixed" here to make the navbar sticky
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-6 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white px-6 py-3 shadow-xl transition-all">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
            <Cctv size={24} />
          </div>
          <span className="text-2xl font-bold text-slate-900">
            Techfin<span className="text-red-600">.</span>
          </span>
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
                className="group flex items-center gap-1 py-4 text-sm font-semibold text-slate-700 transition hover:text-red-600"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-red-600' : ''}`} 
                  />
                )}
              </Link>

              {/* Desktop Dropdown with Framer Motion */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
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
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-red-600"
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
            href="/quote" 
            className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
          >
            Get A Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2 text-slate-900 lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-24 z-50 rounded-2xl bg-white p-4 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link 
                    href={item.href} 
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50" 
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
                          className="block rounded-lg py-2 text-sm font-medium text-slate-500 hover:text-red-600"
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
                href="/quote" 
                className="mt-4 flex justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white"
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