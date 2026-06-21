import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8"
        >
          WE ARE <br/>
          <span className="text-gradient">SAQR AL SHARQ.</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 text-xl text-brand-grey font-light leading-relaxed"
          >
            We don't just create ads; we engineer brand legacies. As a premier advertising agency, we transform businesses through innovative design, strategic branding, and high-quality production that demands attention.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 flex gap-8 border-l border-white/10 pl-8"
          >
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">10+</div>
              <div className="text-brand-grey text-sm tracking-widest uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-brand-grey text-sm tracking-widest uppercase">Projects Delivered</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          <div className="md:col-span-2 rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Office" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-brand-navy/40"></div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay"></div>
            </div>
            <div className="bg-glass-card rounded-3xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-4">Crafting the Future</h3>
              <p className="text-brand-grey">Specializing in comprehensive signage, precision printing, and impactful vehicle branding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-glass-card rounded-3xl p-12 border border-white/5 relative overflow-hidden group hover:border-brand-accent/50 transition-colors duration-500">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
            <Target className="text-white w-12 h-12 mb-8 relative z-10" />
            <h3 className="text-4xl font-display font-bold mb-6 relative z-10">Mission</h3>
            <p className="text-brand-grey text-lg leading-relaxed relative z-10">
              To deliver exceptional creative solutions that empower businesses to communicate their unique value effectively, ensuring sustainable growth and brand recognition in a highly competitive landscape.
            </p>
          </div>

          <div className="bg-glass-card rounded-3xl p-12 border border-white/5 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
            <Lightbulb className="text-white w-12 h-12 mb-8 relative z-10" />
            <h3 className="text-4xl font-display font-bold mb-6 relative z-10">Vision</h3>
            <p className="text-brand-grey text-lg leading-relaxed relative z-10">
              To be the leading advertising and branding agency in the region, recognized for our innovative approach, unmatched production quality, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
