import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';

export const metadata: Metadata = {
  title: 'TechFin | Security Solutions',
  description: 'Professional security solutions, CCTV, home automation, and access control in Mangalore and beyond.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
