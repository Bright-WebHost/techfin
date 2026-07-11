"use client";

import HeroSection from '@/components/Home/HeroSection';
import HomeAboutSection from '@/components/Home/HomeAboutSection';
import ServicesOverview from '@/components/Home/ServicesOverview';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import ClientsSection from '@/components/Home/ClientsSection';
import CTASection from '@/components/Home/CTASection';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HomeAboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientsSection />
      <CTASection />
    </main>
  );
}
