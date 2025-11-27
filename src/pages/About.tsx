import React from 'react';
import { Code2, Server, Layout, Zap, Users } from 'lucide-react';
import type { Skill } from '../types/types';

const skills: Skill[] = [
  { name: 'React & Next.js', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'PostgreSQL', category: 'Backend', level: 75 },
  { name: 'Figma', category: 'Tools', level: 85 },
];

const values = [
  {
    icon: <Code2 className="h-6 w-6 text-cyan-400" />,
    title: 'Clean Architecture',
    description: 'Writing scalable, maintainable, and self-documenting code is my priority.'
  },
  {
    icon: <Users className="h-6 w-6 text-purple-400" />,
    title: 'User Centric',
    description: 'I build with the end-user in mind, focusing on accessibility and UX.'
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: 'Performance First',
    description: 'Optimizing for speed and efficiency to ensure seamless experiences.'
  }
];

const About: React.FC = () => {
  return (
    <>
      <meta name="description" content="关于 Jack 的更多信息：长期主义、价值投资、AI、技术实践。" />
      <meta property="og:title" content="About | Jackify" />
      <meta property="og:description" content="长期主义者 Jack 的背景、经验与个人理念。" />
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I transform complex problems into beautiful, functional interfaces. With over 5 years of experience in the tech industry, I bridge the gap between design and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Skills Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Server className="h-6 w-6 text-cyan-400" /> Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.category}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Column */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <Layout className="h-6 w-6 text-cyan-400" /> Core Values
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-800 hover:border-slate-600 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 bg-slate-900 rounded-lg border border-slate-700 h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">{value.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;