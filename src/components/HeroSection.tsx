import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center pt-16 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">
          {/* Animated orb/glow */}
          <div className="absolute -z-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-500/10 filter blur-[100px] animate-pulse" />
          
          {/* Small animated stars */}
          <div className="star w-1 h-1 top-10 left-1/4 animate-star-pulse" style={{ animationDelay: '0s' }} />
          <div className="star w-1.5 h-1.5 top-20 right-1/3 animate-star-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="star w-1 h-1 bottom-10 left-1/3 animate-star-pulse" style={{ animationDelay: '1s' }} />
          <div className="star w-2 h-2 bottom-20 right-1/4 animate-star-pulse" style={{ animationDelay: '1.5s' }} />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
            Hi, I'm <span className="gradient-text">Naveen Kumar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300 animate-fade-in animate-delay-100">
            Front end developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in animate-delay-200">
            I build beautiful, responsive, and user-friendly websites and applications.
            Passionate about creating stellar digital experiences that leave an impact.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/naveenkumar29052006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-pink-500/20 transition-all"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naveen-kumar-4217931ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:bg-pink-500/20 transition-all"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors animate-float-slow"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={18} className="text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
