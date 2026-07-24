import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#003e48] bg-[#004754] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center ">
              <Image 
                src="/logo.png" 
                alt="TechFin Logo" 
                width={48} 
                height={48} 
                className="h-full w-full object-contain" 
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">TechFin</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Trusted security solutions, intelligent access control, and advanced home automation with over 15 years of experience across Mangaluru and surrounding regions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B8AD76]">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="transition-colors hover:text-[#B8AD76]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-[#B8AD76]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-[#B8AD76]">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B8AD76]">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" />
              <span>Home Automation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" />
              <span>CCTV Surveillance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8AD76]" />
              <span>Access Control</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B8AD76]">
            Contact Us
          </h3>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#B8AD76]" />
              <span className="text-slate-400">
                20-3-253/72, Regal Plaza, 2nd Floor, Near Rao & Rao Circle, Mangaluru - 575001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#B8AD76]" />
              <span>+91 81479 89035</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-[#B8AD76]" />
              <span>excelenterprisesmangalore@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {currentYear} TechFin Security Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://brightmedia.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#B8AD76]"
            >
              Developed by Bright Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}