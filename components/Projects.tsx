import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A real-time SaaS analytics dashboard for cloud infrastructure monitoring. Features data visualization using D3.js and live WebSocket updates.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSockets'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'Aether Chat',
    description: 'An AI-powered messaging platform leveraging the Gemini API for smart replies and real-time translation during conversations.',
    technologies: ['Next.js', 'Tailwind', 'Gemini API', 'Firebase'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'TaskFlow Mobile',
    description: 'A productivity application designed for remote teams to manage workflows asynchronously. Offline-first architecture.',
    technologies: ['React Native', 'Redux Toolkit', 'Node.js'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    repoUrl: '#'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">A selection of things I've built recently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <Folder className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a href={project.repoUrl} className="text-slate-400 hover:text-white transition-colors" title="View Code">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 rounded border border-cyan-900/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300">
             View Full Archive <ExternalLink className="ml-1 h-4 w-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;