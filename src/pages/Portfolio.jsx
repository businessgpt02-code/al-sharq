import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Signage', 'Branding', 'Vehicle Graphics', 'Events'];

  const projects = [
    { id: 1, title: 'Neon Cyberpunk Signage', category: 'Signage', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 2, title: 'Minimalist Brand Identity', category: 'Branding', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 3, title: 'Luxury Fleet Wrap', category: 'Vehicle Graphics', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 4, title: 'Tech Summit Stage', category: 'Events', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 5, title: 'Acrylic Illuminated Letters', category: 'Signage', img: 'https://images.unsplash.com/photo-1559136555-e4616215ebbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 6, title: 'Restaurant Visuals', category: 'Branding', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter"
          >
            OUR <br/><span className="text-gradient">ARCHIVE.</span>
          </motion.h1>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-white text-brand-navy' 
                  : 'bg-glass-card text-brand-grey hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer bg-[#0A192F] ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-40 filter grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
