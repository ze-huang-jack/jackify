import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default App;