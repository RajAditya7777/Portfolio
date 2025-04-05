
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const Index = () => {
  useEffect(() => {
    document.title = 'Infinite.Dev | Portfolio';
  }, []);

  // Add smooth scroll behavior
  const smoothScroll = (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.hash) {
      e.preventDefault();
      const element = document.querySelector(target.hash);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <StarField />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
