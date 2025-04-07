import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold gradient-text">ADY</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-space-foreground/60">
              &copy; {currentYear} Aditya Raj. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-pink-500" /> using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
