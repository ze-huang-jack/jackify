import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types/types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Tailwind CSS: A Developer\'s Guide',
    excerpt: 'How utility-first CSS frameworks are revolutionizing the way we build modern user interfaces, reducing tech debt and increasing speed.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Development',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: '2',
    title: 'The Rise of AI in Frontend Engineering',
    excerpt: 'Exploring how tools like Gemini and Copilot are changing the workflow of frontend developers. Is AI a replacement or a superpower?',
    date: 'Sep 28, 2023',
    readTime: '8 min read',
    category: 'AI & Tech',
    imageUrl: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: '3',
    title: 'Why I Switched from Redux to Zustand',
    excerpt: 'State management doesn\'t have to be complicated. Here is a breakdown of why minimal stores are often better for maintainability.',
    date: 'Aug 15, 2023',
    readTime: '6 min read',
    category: 'React',
    imageUrl: 'https://picsum.photos/600/400?random=6'
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Thoughts</h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full mb-4"></div>
            <p className="text-slate-400">Insights on coding, design, and the tech industry.</p>
          </div>
          <a href="http://github.blog/" className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1">
            Read all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col h-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-colors group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-cyan-400 font-medium px-2 py-1 bg-cyan-950/30 rounded">{post.category}</span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-900 flex items-center text-sm text-slate-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;