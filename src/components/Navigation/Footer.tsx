import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-lightGray">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <ShieldCheck size={20} />
            </div>
            <p className="text-lg font-semibold text-navy">TechFin</p>
          </div>
          <p className="text-sm leading-7 text-textLight">Trusted security solutions with over 15 years of experience across Mangalore and surrounding regions.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Quick Links</h3>
          <ul className="space-y-2 text-sm text-textLight">
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Services</h3>
          <ul className="space-y-2 text-sm text-textLight">
            <li>Home Automation</li>
            <li>CCTV Surveillance</li>
            <li>Access Control</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy">Contact</h3>
          <ul className="space-y-3 text-sm text-textLight">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 text-primary" /> <span>20-3-253/72, Regal Plaza, Mangalore</span></li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> <span>8147989035</span></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> <span>excelenterprisesmangalore@gmail.com</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
