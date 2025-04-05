import React from 'react';
import { 
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  FolderIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="section-subtitle max-w-3xl mx-auto">
            An aspiring B.Tech CS/DS student and a passionate Front-end Developer who loves turning ideas into reality through code.
          </p>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            I specialize in building responsive and user-friendly web applications using JavaScript, HTML/CSS, and Python. I'm always curious about how technology can solve real-world problems and make everyday life better.
          </p>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            I'm actively improving my problem-solving skills with a LeetCode rating of 1400+ and a Codeforces rating of 900+. Competitive programming has helped me think logically and write optimized code.
          </p>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Apart from web development, I'm exploring new-age technologies in the crypto space like Metaverse, DeFi, NFTs, and DePIN — because I believe the future belongs to builders who innovate fearlessly.
          </p>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Currently, I'm on a journey of continuous learning, building projects, and contributing to the tech community.
          </p>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Let's build something awesome together!
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Projects Completed */}
          <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-pink-500/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <FolderIcon className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">2+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Problems Solved */}
          <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-blue-500/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <TrophyIcon className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">200+</h3>
                <p className="text-gray-400">Problems Solved</p>
              </div>
            </div>
          </div>

          {/* LeetCode Rating */}
          <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-yellow-500/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <img 
                  src="/images/leetcode-icon.png" 
                  alt="LeetCode" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">1400+</h3>
                <p className="text-gray-400">LeetCode Rating</p>
              </div>
            </div>
          </div>

          {/* Codeforces Rating */}
          <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-red-500/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-4">
              <div className="p-3 bg-red-500/10 rounded-lg">
                <img 
                  src="/images/codeforces-icon.png" 
                  alt="Codeforces" 
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">900+</h3>
                <p className="text-gray-400">Codeforces Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16">
          <h2 className="section-title text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Box */}
            <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-pink-500/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <CodeBracketIcon className="w-12 h-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">Frontend</h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/html-icon.png" 
                      alt="HTML" 
                      className="w-10 h-10 hover:animate-spin transition-all"
                    />
                    <span className="text-sm text-gray-400 mt-2">HTML</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/css-icon.png" 
                      alt="CSS" 
                      className="w-10 h-10 hover:animate-spin transition-all"
                    />
                    <span className="text-sm text-gray-400 mt-2">CSS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/javascript-icon.png" 
                      alt="JavaScript" 
                      className="w-10 h-10 hover:animate-spin transition-all"
                    />
                    <span className="text-sm text-gray-400 mt-2">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Box */}
            <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-blue-500/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <ServerIcon className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">Backend</h3>
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/python-icon.png" 
                    alt="Python" 
                    className="w-10 h-10 hover:animate-spin transition-all"
                  />
                  <span className="text-sm text-gray-400 mt-2">Python</span>
                </div>
              </div>
            </div>

            {/* Tools Box */}
            <div className="glass-card p-6 rounded-lg group relative overflow-hidden hover:border-yellow-500/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="w-12 h-12 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">Tools</h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/git-icon.png" 
                      alt="Git" 
                      className="w-10 h-10 hover:animate-spin transition-all"
                    />
                    <span className="text-sm text-gray-400 mt-2">Git</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/cli-icon.png" 
                      alt="CLI" 
                      className="w-10 h-10 hover:animate-spin transition-all"
                    />
                    <span className="text-sm text-gray-400 mt-2">CLI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
