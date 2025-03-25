
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Process from '@/components/Process';
import ContactSection from '@/components/ContactSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <Process />
      <ContactSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
