import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle">
            Here are some of my recent projects. Each one was built to solve a specific problem
            and showcase different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weather App */}
          <div className="cosmic-card overflow-hidden rounded-lg border-blue-600/20 group relative hover:border-blue-500/20 transition-all">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-70 z-10" />
              <img 
                src="/images/projects/weather-app.png" 
                alt="Weather App Preview" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Weather App</h3>
                <p className="text-space-foreground/80 mb-6">
                  Built a weather application that fetches and displays real-time weather data. Features include a user-friendly location-based search, detailed weather information such as humidity and wind speed, and error handling for invalid locations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">API</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/naveenkumar29052006/weather-app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-space-foreground/80 hover:text-blue-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>View Code</span>
                  </a>
                  <a 
                    href="https://weather-app-swart-phi-38.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-space-foreground/80 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Capstone Project */}
          <div className="cosmic-card overflow-hidden rounded-lg border-purple-600/20 group relative hover:border-purple-500/20 transition-all">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-70 z-10" />
              <img 
                src="/images/projects/capstone.png" 
                alt="Capstone Project Preview" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Capstone Project</h3>
                <p className="text-space-foreground/80 mb-6">
                  Developed a capstone project using HTML and CSS only. The project features a responsive design that adapts to different screen sizes using media queries. It includes hover effects on images and other interactive elements to enhance user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Responsive Design</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Media Queries</span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/naveenkumar29052006/Capstone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-space-foreground/80 hover:text-purple-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>View Code</span>
                  </a>
                  <a 
                    href="https://capstone-one-delta.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-space-foreground/80 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/naveenkumar29052006" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
