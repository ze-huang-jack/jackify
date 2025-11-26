import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Open to work & collaborations
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Future</span>
          <br />One Line at a Time.
        </h1>

        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Jack</span>. I'm a Senior Frontend Engineer specializing in React, TypeScript, and crafting exceptional digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/25">
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-900/50 hover:bg-slate-800 transition-all duration-200">
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/ze-huang-jack" className="hover:text-cyan-400 transition-colors"><Github className="h-6 w-6" /></a>
          <a href="https://x.com/canwekissandhug" className="hover:text-cyan-400 transition-colors"><Twitter className="h-6 w-6" /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin className="h-6 w-6" /></a>
          <a href="mailto:jack@example.com" className="hover:text-cyan-400 transition-colors"><Mail className="h-6 w-6" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;